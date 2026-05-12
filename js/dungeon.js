// ===================== HERO SYSTEM =====================
let heroData = null;
let heroSavePending = false;

function getHeroClass() { return heroData?.active_class || null; }
// Key format: "warrior_sword_shield" or "warrior_twohander" — one entry per class+build combo
function getHeroKey()   {
  const cls   = heroData?.active_class;
  const build = heroData?.active_build;
  if (!cls) return null;
  return build ? `${cls}_${build}` : cls;
}
function getHero()      { return heroData?.classes?.[getHeroKey()] || null; }

function initHeroData() {
  heroData = {
    active_class: null,
    active_build: null,
    classes: {}
  };
}

function getXPForLevel(level) {
  return 100 * Math.pow(2, level - 1);
}

function computeHeroStats(hero) {
  if (!hero) return { maxHp: 50, dmg: 1, block: 0, armor: 0, dodge: 0 };

  const eq = hero.equipment || {};
  const weaponItem = eq.weapon ? ITEMS_DB[eq.weapon] : null;
  const shieldItem = eq.shield ? ITEMS_DB[eq.shield] : null;

  // DMG: 1 base + weapon
  const dmg = 1 + (weaponItem?.dmg || 0);

  // Block from shield
  const block = shieldItem?.block || 0;

  // Armor: sum across all slots that carry armor
  const ARMOR_SLOTS = ['helmet', 'armor', 'gloves', 'boots', 'shield'];
  const armor = ARMOR_SLOTS.reduce((sum, slot) => {
    const item = eq[slot] ? ITEMS_DB[eq[slot]] : null;
    return sum + (item?.armor || 0);
  }, 0);

  // HP: base + level + Iron Skin + item hp bonuses
  const is = hero.skills.iron_skin || 0;
  let hpBonus = is * 10;
  if (is >= 5)  hpBonus += 10;
  if (is >= 10) hpBonus += 30;
  if (is >= 15) hpBonus += 50;
  if (is >= 20) hpBonus += 100;

  const HP_SLOTS = ['helmet', 'armor', 'gloves', 'boots'];
  const itemHp = HP_SLOTS.reduce((sum, slot) => {
    const item = eq[slot] ? ITEMS_DB[eq[slot]] : null;
    return sum + (item?.hp || 0);
  }, 0);

  const maxHp = 80 + hpBonus + itemHp + (hero.level - 1) * 10;

  // Toughness: -10% per level, max -50%
  const toughnessMult = Math.max(0.5, 1 - (hero.skills.toughness || 0) * 0.1);

  // WM Mace: half enemy dodge only when mace is equipped
  const maceHalvesDodge = (hero.skills.weapon_mastery_mace || 0) > 0 && weaponItem?.weaponType === 'mace';

  return { maxHp, dmg, block, armor, dodge: 0, toughnessMult, maceHalvesDodge };
}

function awardXP(amount) {
  const hero = getHero();
  if (!hero) return;
  hero.xp += amount;
  spawnFloater(`+${amount} XP`, "xp-float", "heroHpBar");
  checkLevelUp(hero);
  updateHeroHud();
  scheduleHeroSave();
}

function checkLevelUp(hero) {
  if (!hero) return;
  let leveled = false;
  while (hero.xp >= getXPForLevel(hero.level)) {
    hero.xp -= getXPForLevel(hero.level);
    hero.level++;
    hero.skillPoints = (hero.skillPoints || 0) + 1;
    leveled = true;
  }
  if (leveled) showLevelUpBanner(hero.level, hero.skillPoints);
}

function awardGold(amount) {
  const hero = getHero();
  if (!hero) return;
  hero.gold = (hero.gold || 0) + amount;
  updateHeroHud();
  scheduleHeroSave();
}

function saveHeroToLocal() {
  if (!heroData) return;
  try { localStorage.setItem("heroData", JSON.stringify(heroData)); } catch(e) {}
}

function loadHeroFromLocal() {
  try {
    const raw = localStorage.getItem("heroData");
    if (raw) { heroData = JSON.parse(raw); return true; }
  } catch(e) {}
  return false;
}

function scheduleHeroSave() {
  if (!heroData) return;
  saveHeroToLocal(); // always persist locally immediately
  if (heroSavePending) return;
  heroSavePending = true;
  setTimeout(async () => {
    heroSavePending = false;
    if (!currentUser || !heroData) return;
    try {
      await sb.from("user_progress").upsert({
        user_id: currentUser.id,
        hero_data: heroData,
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id" });
    } catch(e) { console.error("Hero save failed:", e); }
  }, 1500);
}

function updateHeroHud() {
  const hero = getHero();
  if (!hero || !dng) return;
  const xpNeeded = getXPForLevel(hero.level);
  const xpPct = Math.min(100, (hero.xp / xpNeeded) * 100);
  const xpBar   = document.getElementById("heroXpFill");
  const xpText  = document.getElementById("heroXpText");
  const goldEl  = document.getElementById("heroGoldText");
  const lvlEl   = document.getElementById("heroLvlBadge");
  const spBadge = document.getElementById("heroSpBadge");
  if (xpBar)   xpBar.style.width = xpPct + "%";
  if (xpText)  xpText.textContent = `${hero.xp} / ${xpNeeded} XP`;
  if (goldEl)  goldEl.textContent = `🪙 ${hero.gold}`;
  if (lvlEl)   lvlEl.textContent  = `Lv${hero.level}`;
  if (spBadge) spBadge.style.display = (hero.skillPoints > 0) ? "block" : "none";
}

function showLevelUpBanner(level, skillPoints) {
  const el = document.createElement("div");
  el.className = "dng-levelup-banner";
  el.innerHTML = `<span class="lvl-up-title">⬆ LEVEL UP!</span><span class="lvl-up-sub">Now Lv${level} · +1 Skill Point (total: ${skillPoints})</span>`;
  document.getElementById("dungeonScreen")?.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ===================== CLASS / BUILD / SKILL SCREENS =====================
let _pendingClass = null;
let _pendingBuild = null;

function showClassSelect() {
  document.getElementById("classSelectScreen").classList.add("active");
  const cur = getHeroClass();
  document.querySelectorAll(".rpg-class-card:not(.locked)").forEach(c => c.classList.remove("selected"));
  if (cur) {
    document.getElementById("classCardWarrior")?.classList.add("selected");
    _pendingClass = cur;
    const btn = document.getElementById("classConfirmBtn");
    if (btn) { btn.disabled = false; btn.style.opacity = "1"; }
  }
}
function hideClassSelect() { document.getElementById("classSelectScreen").classList.remove("active"); }

function selectClass(cls) {
  _pendingClass = cls;
  document.querySelectorAll(".rpg-class-card:not(.locked)").forEach(c => c.classList.remove("selected"));
  document.getElementById("classCardWarrior")?.classList.add("selected");
  const btn = document.getElementById("classConfirmBtn");
  if (btn) { btn.disabled = false; btn.style.opacity = "1"; }
}

function confirmClass() {
  if (!_pendingClass) return;
  if (!heroData) initHeroData();
  heroData.active_class = _pendingClass;
  heroData.active_build = null; // clear — user must pick/confirm build next
  hideClassSelect();
  showBuildSelect();
}

function showBuildSelect() {
  document.getElementById("buildSelectScreen").classList.add("active");
  // Pre-select the build that was active before (stored in active_build)
  const cur = heroData?.active_build;
  document.querySelectorAll(".rpg-build-card").forEach(c => c.classList.remove("selected"));
  if (cur) {
    document.getElementById(cur === "sword_shield" ? "buildCardSword" : "buildCardTwo")?.classList.add("selected");
    _pendingBuild = cur;
    const btn = document.getElementById("buildConfirmBtn");
    if (btn) { btn.disabled = false; btn.style.opacity = "1"; }
  }
}
function hideBuildSelect() { document.getElementById("buildSelectScreen").classList.remove("active"); }

function selectBuild(build) {
  _pendingBuild = build;
  document.querySelectorAll(".rpg-build-card").forEach(c => c.classList.remove("selected"));
  document.getElementById(build === "sword_shield" ? "buildCardSword" : "buildCardTwo")?.classList.add("selected");
  const btn = document.getElementById("buildConfirmBtn");
  if (btn) { btn.disabled = false; btn.style.opacity = "1"; }
}

function confirmBuild() {
  if (!_pendingBuild || !heroData?.active_class) return;
  heroData.active_build = _pendingBuild;
  const key = getHeroKey(); // e.g. "warrior_sword_shield"

  // Create entry for this class+build if it doesn't exist yet
  if (!heroData.classes[key]) {
    heroData.classes[key] = {
      level: 1, xp: 0, gold: 0, skillPoints: 0,
      build: _pendingBuild,
      gender: 'male',
      skills: { iron_skin:0, toughness:0, shield_bash:0, combo_strike:0,
                weapon_mastery_sword:0, weapon_mastery_axe:0, weapon_mastery_mace:0 },
      equipment: _pendingBuild === 'sword_shield'
        ? { weapon: 'rusty_sword', shield: 'battered_shield' }
        : { weapon: 'rusty_twohander' },
      inventory: []
    };
  }

  hideBuildSelect();
  scheduleHeroSave();
  if (gameModeOn) {
    document.getElementById("heroProfileFab").classList.add("visible");
    document.getElementById("shopFab").classList.add("visible");
  }
}

// ===================== HERO PROFILE =====================
function openHeroProfile() {
  renderHeroProfile();
  document.getElementById("heroProfileOverlay").style.display = "flex";
}

function closeHeroProfile() {
  document.getElementById("heroProfileOverlay").style.display = "none";
}

function renderHeroProfile() {
  const hero = getHero();
  const cls  = getHeroClass();
  if (!hero || !cls) return;
  const stats = computeHeroStats(hero);

  updateHeroSprite();
  document.getElementById("hpHeroName").textContent = cls.charAt(0).toUpperCase() + cls.slice(1);
  document.getElementById("hpHeroLevel").textContent =
    `Level ${hero.level} · ${hero.build === "sword_shield" ? "Sword & Shield" : "Two-Hander"}`;

  // Gender toggle (sits below avatar)
  let genderBtn = document.getElementById("hpGenderBtn");
  if (!genderBtn) {
    genderBtn = document.createElement("button");
    genderBtn.id = "hpGenderBtn";
    genderBtn.className = "hero-gender-btn";
    genderBtn.onclick = toggleHeroGender;
    document.getElementById("hpHeroLevel").insertAdjacentElement("afterend", genderBtn);
  }
  const isFemale = hero.gender === 'female';
  genderBtn.textContent = isFemale ? "♀ Female" : "♂ Male";

  // Preset picker
  let presetPicker = document.getElementById("hpPresetPicker");
  if (!presetPicker) {
    presetPicker = document.createElement("div");
    presetPicker.id = "hpPresetPicker";
    presetPicker.className = "preset-picker";
    genderBtn.insertAdjacentElement("afterend", presetPicker);
  }
  const g = hero.gender === 'female' ? 'female' : 'male';
  const activePreset = hero.preset || LPC_PRESETS[g][0].id;
  presetPicker.innerHTML = LPC_PRESETS[g].map(p =>
    `<button class="preset-btn${p.id === activePreset ? ' active' : ''}" data-preset="${p.id}" onclick="setHeroPreset('${p.id}')">${p.label}</button>`
  ).join('');

  // Switch class button
  let switchBtn = document.getElementById("hpSwitchClassBtn");
  if (!switchBtn) {
    switchBtn = document.createElement("button");
    switchBtn.id = "hpSwitchClassBtn";
    switchBtn.textContent = "⚔ Switch Class";
    switchBtn.style.cssText = "margin:6px auto 0;display:block;padding:5px 14px;border-radius:8px;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);color:#f59e0b;font-size:12px;font-weight:700;cursor:pointer;letter-spacing:0.05em";
    switchBtn.onclick = () => { closeHeroProfile(); showClassSelect(); };
    document.getElementById("hpHeroLevel").insertAdjacentElement("afterend", switchBtn);
  }

  document.getElementById("hpStatHp").textContent    = stats.maxHp;
  document.getElementById("hpStatDmg").textContent   = stats.dmg;
  document.getElementById("hpStatBlock").textContent = stats.block > 0 ? `${Math.round(stats.block * 100)}%` : "—";
  document.getElementById("hpStatArmor").textContent = stats.armor;

  // Equipment slots
  const grid  = document.getElementById("hpEquipGrid");
  const equip = hero.equipment || {};
  grid.innerHTML = "";
  EQUIP_SLOTS.forEach(slot => {
    const item = equip[slot.id] ? ITEMS_DB[equip[slot.id]] : null;
    const statParts = [];
    if (item) {
      if (item.dmg   > 0) statParts.push(`+${item.dmg} DMG`);
      if (item.armor > 0) statParts.push(`+${item.armor} Armor`);
      if (item.hp    > 0) statParts.push(`+${item.hp} HP`);
      if (item.block > 0) statParts.push(`${Math.round(item.block * 100)}% Block`);
    }
    const statStr = statParts.join(' · ');
    const iconHtml = item
      ? renderItemIcon(item.iconId, item.rarity, 34)
      : renderItemIcon(slot.iconId, 'common', 34, true);
    grid.innerHTML += `
      <div class="equip-slot${item ? " has-item" : ""}">
        <div class="equip-slot-icon">${iconHtml}</div>
        <div class="equip-slot-name"${item ? "" : ' style="color:var(--muted)"'}>${item ? item.name : "Empty"}</div>
        ${statStr ? `<div class="equip-slot-stat">${statStr}</div>` : ""}
        <div class="equip-slot-lbl">${slot.label}</div>
        ${item ? `<button class="equip-unequip-btn" onclick="unequipItem('${slot.id}')">↩ Unequip</button>` : ""}
      </div>`;
  });

  // Inventory
  const inv    = hero.inventory || [];
  const invDiv = document.getElementById("hpInventory");
  if (inv.length === 0) {
    invDiv.innerHTML = `<div style="font-size:13px;color:var(--muted);text-align:center;padding:10px 0">Inventory is empty</div>`;
  } else {
    invDiv.innerHTML = "";
    inv.forEach(itemId => {
      const item = ITEMS_DB[itemId];
      if (!item) return;
      const invParts = [];
      if (item.dmg   > 0) invParts.push(`+${item.dmg} DMG`);
      if (item.armor > 0) invParts.push(`+${item.armor} Armor`);
      if (item.hp    > 0) invParts.push(`+${item.hp} HP`);
      if (item.block > 0) invParts.push(`${Math.round(item.block*100)}% Block`);
      const statStr = invParts.join(' · ');
      invDiv.innerHTML += `
        <div class="inv-item">
          <div class="inv-item-icon">${renderItemIcon(item.iconId, item.rarity, 30)}</div>
          <div style="flex:1;min-width:0">
            <div class="inv-item-name">${item.name}${statStr ? ` · <span style="color:var(--accent)">${statStr}</span>` : ""}</div>
            <div class="inv-item-desc">${item.desc}</div>
          </div>
          <button class="equip-from-inv-btn" onclick="equipFromInventory('${itemId}')">Equip ↗</button>
        </div>`;
    });
  }
}

function unequipItem(slotId) {
  const hero = getHero();
  if (!hero || !hero.equipment[slotId]) return;
  if (!hero.inventory) hero.inventory = [];
  hero.inventory.push(hero.equipment[slotId]);
  delete hero.equipment[slotId];
  scheduleHeroSave();
  renderHeroProfile();
}

function equipFromInventory(itemId) {
  const hero = getHero();
  const item = ITEMS_DB[itemId];
  if (!hero || !item) return;

  // Two-hander → auto-unequip shield first
  if (item.handedness === 'two' && hero.equipment.shield) {
    if (!hero.inventory) hero.inventory = [];
    hero.inventory.push(hero.equipment.shield);
    delete hero.equipment.shield;
  }
  // Shield → block if two-handed weapon equipped
  if (item.slot === 'shield') {
    const curWeapon = ITEMS_DB[hero.equipment.weapon];
    if (curWeapon?.handedness === 'two') {
      alert('Cannot equip a shield with a two-handed weapon. Unequip the weapon first.');
      return;
    }
  }

  if (!hero.inventory) hero.inventory = [];
  // Move currently equipped item in that slot to inventory
  if (hero.equipment[item.slot]) {
    hero.inventory.push(hero.equipment[item.slot]);
  }
  // Remove from inventory, equip
  hero.inventory = hero.inventory.filter(id => id !== itemId);
  hero.equipment[item.slot] = itemId;

  scheduleHeroSave();
  renderHeroProfile();
}

// ===================== SHOP =====================
const SHOP_SECTIONS = {
  all:     null,
  weapons: ['weapon', 'shield'],
  armor:   ['helmet', 'armor', 'gloves', 'boots'],
};

let _shopTab = 'all';

function openShop() {
  _shopTab = 'all';
  renderShop();
  document.getElementById('shopOverlay').style.display = 'flex';
}

function closeShop() {
  document.getElementById('shopOverlay').style.display = 'none';
}

function setShopTab(tab) {
  _shopTab = tab;
  ['all','weapons','armor','sell'].forEach(t => {
    const el = document.getElementById(`shopTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (el) el.classList.toggle('active', t === tab);
  });
  renderShop();
}

function renderShop() {
  const hero  = getHero();
  const gold  = hero?.gold || 0;
  document.getElementById('shopGoldText').textContent = gold;

  if (_shopTab === 'sell') {
    renderSellTab(hero);
    return;
  }

  const inv   = new Set([...(hero?.inventory || []), ...Object.values(hero?.equipment || {})]);
  const slots = SHOP_SECTIONS[_shopTab];

  const list = document.getElementById('shopItemsList');
  list.innerHTML = '';

  // Group by section for "All" tab
  const groups = _shopTab === 'all'
    ? [
        { label: 'One-Handed Swords', slot: 'weapon', hand: 'one' },
        { label: 'Two-Handed Swords', slot: 'weapon', hand: 'two' },
        { label: 'Shields',           slot: 'shield'               },
        { label: 'Helmets',           slot: 'helmet'               },
        { label: 'Chest Armor',       slot: 'armor'                },
        { label: 'Gloves',            slot: 'gloves'               },
        { label: 'Boots',             slot: 'boots'                },
      ]
    : null;

  const renderItem = (item) => {
    const owned     = inv.has(item.id);
    const canAfford = gold >= (item.price || 0);
    const parts = [];
    if (item.dmg   > 0) parts.push(`+${item.dmg} DMG`);
    if (item.armor > 0) parts.push(`+${item.armor} Armor`);
    if (item.hp    > 0) parts.push(`+${item.hp} HP`);
    if (item.block > 0) parts.push(`${Math.round(item.block*100)}% Block`);
    const statStr = parts.join(' · ');
    const div = document.createElement('div');
    div.className = `shop-item${owned ? ' owned' : ''}`;
    div.innerHTML = `
      <div class="inv-item-icon">${renderItemIcon(item.iconId, item.rarity, 30)}</div>
      <div style="flex:1;min-width:0">
        <div class="inv-item-name">${item.name}${statStr ? ` · <span style="color:var(--accent)">${statStr}</span>` : ''}</div>
        <div class="inv-item-desc">${item.desc}</div>
      </div>
      <div>
        ${owned
          ? `<span class="shop-owned-badge">✓</span>`
          : `<button class="shop-buy-btn" onclick="buyItem('${item.id}')" ${!canAfford ? 'disabled' : ''}>💰 ${item.price ?? 0}</button>`}
      </div>`;
    list.appendChild(div);
  };

  if (groups) {
    groups.forEach(g => {
      const items = SHOP_CATALOG
        .map(id => ITEMS_DB[id])
        .filter(item => item && item.slot === g.slot && (!g.hand || item.handedness === g.hand));
      if (!items.length) return;
      const title = document.createElement('div');
      title.className = 'shop-section-title';
      title.textContent = g.label;
      list.appendChild(title);
      items.forEach(renderItem);
    });
  } else {
    SHOP_CATALOG
      .map(id => ITEMS_DB[id])
      .filter(item => item && slots.includes(item.slot))
      .forEach(renderItem);
  }
}

function buyItem(itemId) {
  const hero = getHero();
  const item = ITEMS_DB[itemId];
  if (!hero || !item) return;
  const price = item.price ?? 0;
  if (hero.gold < price) return;
  const owned = new Set([...(hero.inventory || []), ...Object.values(hero.equipment || {})]);
  if (owned.has(itemId)) return;
  hero.gold -= price;
  if (!hero.inventory) hero.inventory = [];
  hero.inventory.push(itemId);
  scheduleHeroSave();
  updateHeroHud();
  renderShop();
}

function renderSellTab(hero) {
  const list = document.getElementById('shopItemsList');
  list.innerHTML = '';
  const equippedSet = new Set(Object.values(hero?.equipment || {}));
  const inventory = hero?.inventory || [];

  if (!inventory.length) {
    const empty = document.createElement('div');
    empty.style.cssText = 'text-align:center;color:var(--muted);padding:32px 0;font-size:13px;';
    empty.textContent = 'Your inventory is empty.';
    list.appendChild(empty);
    return;
  }

  inventory.forEach(itemId => {
    const item = ITEMS_DB[itemId];
    if (!item) return;
    const equipped = equippedSet.has(itemId);
    const price = Math.floor((item.price ?? 0) / 2);
    const parts = [];
    if (item.dmg   > 0) parts.push(`+${item.dmg} DMG`);
    if (item.armor > 0) parts.push(`+${item.armor} Armor`);
    if (item.hp    > 0) parts.push(`+${item.hp} HP`);
    if (item.block > 0) parts.push(`${Math.round(item.block*100)}% Block`);
    const statStr = parts.join(' · ');
    const div = document.createElement('div');
    div.className = 'shop-item';
    div.innerHTML = `
      <div class="inv-item-icon">${renderItemIcon(item.iconId, item.rarity, 30)}</div>
      <div style="flex:1;min-width:0">
        <div class="inv-item-name">${item.name}${statStr ? ` · <span style="color:var(--accent)">${statStr}</span>` : ''}</div>
        <div class="inv-item-desc">${equipped ? '⚔️ Equipped' : item.desc}</div>
      </div>
      <div>
        ${equipped
          ? `<span class="shop-equipped-badge">Equipped</span>`
          : `<button class="shop-sell-btn" onclick="sellItem('${itemId}')">💰 ${price}</button>`}
      </div>`;
    list.appendChild(div);
  });
}

function sellItem(itemId) {
  const hero = getHero();
  const item = ITEMS_DB[itemId];
  if (!hero || !item) return;
  const equippedSet = new Set(Object.values(hero?.equipment || {}));
  if (equippedSet.has(itemId)) return;
  const idx = (hero.inventory || []).indexOf(itemId);
  if (idx === -1) return;
  hero.inventory.splice(idx, 1);
  hero.gold = (hero.gold || 0) + Math.floor((item.price ?? 0) / 2);
  scheduleHeroSave();
  updateHeroHud();
  renderShop();
}

function renderItemIcon(iconId, rarity = 'common', size = 36, muted = false) {
  const d = ICON_PATHS[iconId];
  if (!d) return `<span style="font-size:${size * 0.7}px;opacity:0.3">?</span>`;
  const fill = muted ? 'rgba(255,255,255,0.12)' : (RARITY_COLORS[rarity] || RARITY_COLORS.common);
  return `<svg viewBox="0 0 512 512" style="width:${size}px;height:${size}px;fill:${fill};display:block;flex-shrink:0"><path d="${d}"/></svg>`;
}

// ===================== HERO SPRITES =====================
const HERO_SPRITE_PARTS = {

  warrior_male: `<g>
    <rect x="25" y="102" width="14" height="11" rx="3" fill="#1a1a2e"/>
    <rect x="41" y="102" width="14" height="11" rx="3" fill="#1a1a2e"/>
    <rect x="27" y="70" width="12" height="34" rx="3" fill="#2e3d52"/>
    <rect x="41" y="70" width="12" height="34" rx="3" fill="#2e3d52"/>
    <rect x="24" y="65" width="32" height="8" rx="2" fill="#5c3a1a"/>
    <rect x="36" y="65" width="8" height="8" fill="#c89b3c"/>
    <rect x="24" y="33" width="32" height="35" rx="4" fill="#3d4f63"/>
    <rect x="26" y="35" width="28" height="31" rx="3" fill="#4a6180"/>
    <line x1="40" y1="35" x2="40" y2="66" stroke="rgba(0,0,0,0.25)" stroke-width="1.5"/>
    <line x1="26" y1="51" x2="54" y2="51" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
    <ellipse cx="22" cy="37" rx="7" ry="5" fill="#2e3d52"/>
    <ellipse cx="58" cy="37" rx="7" ry="5" fill="#2e3d52"/>
    <rect x="15" y="40" width="9" height="26" rx="4" fill="#3d4f63"/>
    <rect x="56" y="40" width="9" height="26" rx="4" fill="#3d4f63"/>
    <rect x="15" y="62" width="9" height="8" rx="3" fill="#2e3d52"/>
    <rect x="56" y="62" width="9" height="8" rx="3" fill="#2e3d52"/>
    <rect x="36" y="27" width="8" height="8" rx="2" fill="#f0c8a0"/>
    <ellipse cx="40" cy="13" rx="13" ry="11" fill="#6b4226"/>
    <ellipse cx="40" cy="19" rx="13" ry="12" fill="#f0c8a0"/>
    <ellipse cx="32" cy="22" rx="3" ry="2" fill="#e8a880" opacity="0.35"/>
    <ellipse cx="48" cy="22" rx="3" ry="2" fill="#e8a880" opacity="0.35"/>
    <ellipse cx="36" cy="18" rx="2.5" ry="2.5" fill="#22130a"/>
    <ellipse cx="44" cy="18" rx="2.5" ry="2.5" fill="#22130a"/>
    <ellipse cx="36.9" cy="17" rx="0.9" ry="0.9" fill="white" opacity="0.65"/>
    <ellipse cx="44.9" cy="17" rx="0.9" ry="0.9" fill="white" opacity="0.65"/>
    <path d="M33,14 Q36,12.5 39,14" stroke="#6b4226" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M41,14 Q44,12.5 47,14" stroke="#6b4226" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="40" cy="22" rx="1.3" ry="0.9" fill="#d4a07a"/>
    <path d="M37,25 Q40,27.5 43,25" stroke="#b07050" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  </g>`,

  warrior_female: `<g>
    <rect x="25" y="102" width="14" height="11" rx="3" fill="#1a1a2e"/>
    <rect x="41" y="102" width="14" height="11" rx="3" fill="#1a1a2e"/>
    <rect x="27" y="70" width="12" height="34" rx="3" fill="#2e3d52"/>
    <rect x="41" y="70" width="12" height="34" rx="3" fill="#2e3d52"/>
    <rect x="24" y="65" width="32" height="8" rx="2" fill="#5c3a1a"/>
    <rect x="36" y="65" width="8" height="8" fill="#c89b3c"/>
    <rect x="25" y="33" width="30" height="35" rx="4" fill="#3d4f63"/>
    <rect x="27" y="35" width="26" height="31" rx="3" fill="#4a6180"/>
    <line x1="40" y1="35" x2="40" y2="66" stroke="rgba(0,0,0,0.25)" stroke-width="1.5"/>
    <line x1="27" y1="51" x2="53" y2="51" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
    <ellipse cx="22" cy="37" rx="7" ry="5" fill="#2e3d52"/>
    <ellipse cx="58" cy="37" rx="7" ry="5" fill="#2e3d52"/>
    <rect x="15" y="40" width="9" height="26" rx="4" fill="#3d4f63"/>
    <rect x="56" y="40" width="9" height="26" rx="4" fill="#3d4f63"/>
    <rect x="15" y="62" width="9" height="8" rx="3" fill="#2e3d52"/>
    <rect x="56" y="62" width="9" height="8" rx="3" fill="#2e3d52"/>
    <rect x="36" y="27" width="8" height="8" rx="2" fill="#f0c8a0"/>
    <ellipse cx="40" cy="17" rx="12" ry="13" fill="#f0c8a0"/>
    <path d="M28,13 Q26,32 27,55 Q28,65 29,68" stroke="#7a3a1a" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.85"/>
    <path d="M52,13 Q54,32 53,55 Q52,65 51,68" stroke="#7a3a1a" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.85"/>
    <path d="M28,13 Q28,3 40,2 Q52,3 52,13" fill="#7a3a1a"/>
    <ellipse cx="40" cy="3" rx="12" ry="4" fill="#7a3a1a"/>
    <ellipse cx="32" cy="21" rx="3" ry="2" fill="#f0a0a0" opacity="0.45"/>
    <ellipse cx="48" cy="21" rx="3" ry="2" fill="#f0a0a0" opacity="0.45"/>
    <ellipse cx="36" cy="17" rx="2.7" ry="2.7" fill="#22130a"/>
    <ellipse cx="44" cy="17" rx="2.7" ry="2.7" fill="#22130a"/>
    <ellipse cx="36.9" cy="16" rx="1" ry="1" fill="white" opacity="0.65"/>
    <ellipse cx="44.9" cy="16" rx="1" ry="1" fill="white" opacity="0.65"/>
    <path d="M33.5,13 L33,11.5" stroke="#22130a" stroke-width="0.8"/>
    <path d="M35,13 L34.5,11.5" stroke="#22130a" stroke-width="0.8"/>
    <path d="M45,13 L45.5,11.5" stroke="#22130a" stroke-width="0.8"/>
    <path d="M46.5,13 L47,11.5" stroke="#22130a" stroke-width="0.8"/>
    <path d="M33,12.5 Q36,11 39,12.5" stroke="#5a2a0a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <path d="M41,12.5 Q44,11 47,12.5" stroke="#5a2a0a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="40" cy="20.5" rx="1.2" ry="0.8" fill="#d4a07a"/>
    <path d="M37,23.5 Q40,26.5 43,23.5" stroke="#d06080" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </g>`,

  weapon_rusty_sword: `<g>
    <rect x="60" y="66" width="5" height="14" rx="2" fill="#5c3a1a"/>
    <ellipse cx="62.5" cy="81" rx="4" ry="3" fill="#9a8060"/>
    <rect x="54" y="63" width="17" height="4" rx="2" fill="#8a7040"/>
    <path d="M60,26 L65,26 L64,63 L61,63 Z" fill="#8a9aaa"/>
    <path d="M64,26 L65,26 L64,63 L63.5,63 Z" fill="#c5d5e5" opacity="0.55"/>
    <ellipse cx="62" cy="36" rx="1.5" ry="1" fill="#7a3a10" opacity="0.55"/>
    <ellipse cx="63" cy="49" rx="1" ry="1.5" fill="#7a3a10" opacity="0.45"/>
    <ellipse cx="61" cy="57" rx="1.2" ry="0.8" fill="#7a3a10" opacity="0.5"/>
  </g>`,

  weapon_rusty_twohander: `<g>
    <rect x="59" y="74" width="6" height="22" rx="2" fill="#5c3a1a"/>
    <ellipse cx="62" cy="97" rx="5" ry="4" fill="#9a8060"/>
    <rect x="59" y="78" width="6" height="2" rx="1" fill="#3d2010" opacity="0.7"/>
    <rect x="59" y="83" width="6" height="2" rx="1" fill="#3d2010" opacity="0.7"/>
    <rect x="59" y="88" width="6" height="2" rx="1" fill="#3d2010" opacity="0.7"/>
    <rect x="50" y="71" width="24" height="5" rx="2" fill="#8a7040"/>
    <path d="M59,9 L65,9 L64.5,71 L59.5,71 Z" fill="#8a9aaa"/>
    <path d="M64,9 L65,9 L64.5,71 L64,71 Z" fill="#c5d5e5" opacity="0.55"/>
    <path d="M59,9 L62,4 L65,9 Z" fill="#aabaca"/>
    <ellipse cx="62" cy="22" rx="1.5" ry="2" fill="#7a3a10" opacity="0.5"/>
    <ellipse cx="63" cy="40" rx="1.2" ry="1.5" fill="#7a3a10" opacity="0.4"/>
    <ellipse cx="61" cy="55" rx="1.5" ry="1" fill="#7a3a10" opacity="0.5"/>
    <ellipse cx="62" cy="63" rx="1" ry="1.5" fill="#7a3a10" opacity="0.4"/>
  </g>`,

  shield_battered_shield: `<g>
    <path d="M2,40 L16,40 L16,66 Q9,75 2,66 Z" fill="#5a4a38"/>
    <path d="M4,42 L14,42 L14,64 Q9,72 4,64 Z" fill="#6a5a46"/>
    <path d="M2,40 L16,40 L16,66 Q9,75 2,66 Z" fill="none" stroke="#3a2a18" stroke-width="1.5"/>
    <ellipse cx="9" cy="55" rx="4" ry="4" fill="#7a6a55"/>
    <ellipse cx="9" cy="55" rx="2.5" ry="2.5" fill="#9a8a72"/>
    <path d="M5,46 L7,46" stroke="#3a2a18" stroke-width="1.2" opacity="0.55"/>
    <path d="M11,49 L13,47" stroke="#3a2a18" stroke-width="1.2" opacity="0.55"/>
    <path d="M4,62 L6,64" stroke="#3a2a18" stroke-width="1" opacity="0.5"/>
    <circle cx="6" cy="44" r="1" fill="#8a7862"/>
    <circle cx="14" cy="44" r="1" fill="#8a7862"/>
    <circle cx="5" cy="66" r="1" fill="#8a7862"/>
    <circle cx="13" cy="65" r="1" fill="#8a7862"/>
  </g>`,

  // ── Armor overlays (torso + arms + legs + boots, drawn over base body) ──
  // Belt zone (y=65-73) intentionally uncovered — brown leather belt always visible

  outfit_overlay_leather: `<g>
    <rect x="25" y="102" width="14" height="11" rx="3" fill="#3a1808"/>
    <rect x="41" y="102" width="14" height="11" rx="3" fill="#3a1808"/>
    <rect x="27" y="74" width="12" height="30" rx="3" fill="#5a2c14"/>
    <rect x="41" y="74" width="12" height="30" rx="3" fill="#5a2c14"/>
    <path d="M28,82 L38,82 M42,82 L52,82" stroke="#3a1808" stroke-width="0.8" opacity="0.5"/>
    <path d="M28,92 L38,92 M42,92 L52,92" stroke="#3a1808" stroke-width="0.8" opacity="0.5"/>
    <rect x="24" y="33" width="32" height="31" rx="4" fill="#4a2814"/>
    <rect x="26" y="35" width="28" height="29" rx="3" fill="#6a3c22"/>
    <line x1="40" y1="35" x2="40" y2="64" stroke="rgba(0,0,0,0.25)" stroke-width="1.5"/>
    <path d="M32,38 L32,63 M48,38 L48,63" stroke="#3a1808" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.45"/>
    <ellipse cx="22" cy="37" rx="7" ry="5" fill="#5a2c14"/>
    <ellipse cx="58" cy="37" rx="7" ry="5" fill="#5a2c14"/>
    <rect x="15" y="40" width="9" height="26" rx="4" fill="#4a2814"/>
    <rect x="56" y="40" width="9" height="26" rx="4" fill="#4a2814"/>
    <rect x="15" y="62" width="9" height="8" rx="3" fill="#5a2c14"/>
    <rect x="56" y="62" width="9" height="8" rx="3" fill="#5a2c14"/>
  </g>`,

  outfit_overlay_chainmail: `<g>
    <rect x="25" y="102" width="14" height="11" rx="3" fill="#252535"/>
    <rect x="41" y="102" width="14" height="11" rx="3" fill="#252535"/>
    <rect x="27" y="74" width="12" height="30" rx="3" fill="#3d3d52"/>
    <rect x="41" y="74" width="12" height="30" rx="3" fill="#3d3d52"/>
    <path d="M27,79 L39,79 M41,79 L53,79" stroke="#505068" stroke-width="0.7" opacity="0.6"/>
    <path d="M27,85 L39,85 M41,85 L53,85" stroke="#505068" stroke-width="0.7" opacity="0.6"/>
    <path d="M27,91 L39,91 M41,91 L53,91" stroke="#505068" stroke-width="0.7" opacity="0.6"/>
    <path d="M27,97 L39,97 M41,97 L53,97" stroke="#505068" stroke-width="0.7" opacity="0.6"/>
    <rect x="24" y="33" width="32" height="31" rx="4" fill="#484860"/>
    <rect x="26" y="35" width="28" height="29" rx="3" fill="#5a5a75"/>
    <path d="M26,41 L54,41 M26,47 L54,47 M26,53 L54,53 M26,59 L54,59" stroke="#686880" stroke-width="0.7" opacity="0.5"/>
    <line x1="40" y1="35" x2="40" y2="64" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>
    <ellipse cx="22" cy="37" rx="7" ry="5" fill="#3d3d52"/>
    <ellipse cx="58" cy="37" rx="7" ry="5" fill="#3d3d52"/>
    <rect x="15" y="40" width="9" height="26" rx="4" fill="#484860"/>
    <rect x="56" y="40" width="9" height="26" rx="4" fill="#484860"/>
    <path d="M15,46 L24,46 M56,46 L65,46" stroke="#606078" stroke-width="0.7" opacity="0.5"/>
    <path d="M15,52 L24,52 M56,52 L65,52" stroke="#606078" stroke-width="0.7" opacity="0.5"/>
    <path d="M15,58 L24,58 M56,58 L65,58" stroke="#606078" stroke-width="0.7" opacity="0.5"/>
    <rect x="15" y="62" width="9" height="8" rx="3" fill="#3d3d52"/>
    <rect x="56" y="62" width="9" height="8" rx="3" fill="#3d3d52"/>
  </g>`,

  outfit_overlay_steel: `<g>
    <rect x="25" y="102" width="14" height="11" rx="3" fill="#1e2d48"/>
    <rect x="41" y="102" width="14" height="11" rx="3" fill="#1e2d48"/>
    <path d="M27,104 L37,104 M43,104 L53,104" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-linecap="round"/>
    <rect x="27" y="74" width="12" height="30" rx="3" fill="#2e4868"/>
    <rect x="41" y="74" width="12" height="30" rx="3" fill="#2e4868"/>
    <path d="M30,77 L36,77 M42,77 L48,77" stroke="rgba(255,255,255,0.18)" stroke-width="1" stroke-linecap="round"/>
    <path d="M28,88 L38,88 M42,88 L52,88" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
    <rect x="24" y="33" width="32" height="31" rx="4" fill="#3a5878"/>
    <rect x="26" y="35" width="28" height="29" rx="3" fill="#4e6e92"/>
    <path d="M30,38 Q40,36 50,38" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <line x1="40" y1="35" x2="40" y2="64" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>
    <path d="M26,51 L54,51" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <ellipse cx="22" cy="37" rx="7" ry="5" fill="#2e4868"/>
    <ellipse cx="58" cy="37" rx="7" ry="5" fill="#2e4868"/>
    <path d="M17,35 Q22,33 27,35" stroke="rgba(255,255,255,0.2)" stroke-width="1" fill="none"/>
    <path d="M53,35 Q58,33 63,35" stroke="rgba(255,255,255,0.2)" stroke-width="1" fill="none"/>
    <rect x="15" y="40" width="9" height="26" rx="4" fill="#3a5878"/>
    <rect x="56" y="40" width="9" height="26" rx="4" fill="#3a5878"/>
    <path d="M17,44 L21,44 M57,44 L61,44" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-linecap="round"/>
    <path d="M17,56 L21,56 M57,56 L61,56" stroke="rgba(255,255,255,0.12)" stroke-width="0.8"/>
    <rect x="15" y="62" width="9" height="8" rx="3" fill="#2e4868"/>
    <rect x="56" y="62" width="9" height="8" rx="3" fill="#2e4868"/>
  </g>`,

  // ── Helm overlays (drawn over head, after armor overlay, before weapon) ──

  helm_overlay_leather: `<g>
    <path d="M29,22 Q28,4 40,3 Q52,4 51,22 Q46,18 40,17 Q34,18 29,22 Z" fill="#6b3515"/>
    <rect x="27" y="21" width="26" height="3" rx="1.5" fill="#5a2a10"/>
    <path d="M40,4 L40,21" stroke="#4a2010" stroke-width="0.8" opacity="0.45"/>
    <circle cx="30" cy="22" r="1" fill="#3a1a08"/>
    <circle cx="50" cy="22" r="1" fill="#3a1a08"/>
  </g>`,

  helm_overlay_chainmail: `<g>
    <path d="M24,26 Q23,1 40,0 Q57,1 56,26 Q54,23 50,21 Q46,20 40,20 Q34,20 30,21 Q26,23 24,26 Z" fill="#454560"/>
    <rect x="38.5" y="18" width="3" height="7" rx="1.5" fill="#383850"/>
    <path d="M29,8 Q40,7 51,8" stroke="#5a5a75" stroke-width="0.8" fill="none" opacity="0.6"/>
    <path d="M26,15 Q40,14 54,15" stroke="#5a5a75" stroke-width="0.8" fill="none" opacity="0.6"/>
    <path d="M24,26 Q26,23 30,21 Q34,20 40,20 Q46,20 50,21 Q54,23 56,26" stroke="#383850" stroke-width="0.8" fill="none" opacity="0.7"/>
  </g>`,

  helm_overlay_steel: `<g>
    <path d="M23,26 Q22,0 40,-1 Q58,0 57,26 Q55,22 52,22 Q48,22 46,28 Q43,33 40,33 Q37,33 34,28 Q32,22 28,22 Q25,22 23,26 Z" fill="#6888aa"/>
    <path d="M29,8 Q34,4 40,3 Q46,4 51,8" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M28,22 Q32,22 34,28 Q37,33 40,33 Q43,33 46,28 Q48,22 52,22" stroke="#3a5878" stroke-width="1" fill="none"/>
    <path d="M23,26 Q22,0 40,-1 Q58,0 57,26" stroke="#3a5878" stroke-width="0.8" fill="none" opacity="0.6"/>
  </g>`,
};

// ── LPC Sprite Renderer ─────────────────────────────────────────────────────
const LPC_BASE = 'https://raw.githubusercontent.com/LiberatedPixelCup/Universal-LPC-Spritesheet-Character-Generator/master/spritesheets/';
const _lpcCache = {};

function lpcLoad(url) {
  if (_lpcCache[url]) return _lpcCache[url];
  return _lpcCache[url] = new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload  = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

// Each layer: { url, sy, fw, fh } — fw/fh = frame size (64 standard, 128 for oversize weapons)
function L(path, sy = 128, fw = 64, fh = 64) { return { url: LPC_BASE + path, sy, fw, fh }; }

// Per-item weapon sprite mapping — objects with { path, sy, fw, fh }
const LPC_WEAPON = {
  rusty_sword:              { path:'weapon/sword/dagger/walk/dagger.png',           sy:128, fw:64,  fh:64  },
  steel_sword:              { path:'weapon/sword/saber/walk/saber.png',             sy:128, fw:64,  fh:64  },
  honed_steel_sword:        { path:'weapon/sword/rapier/walk/rapier.png',           sy:128, fw:64,  fh:64  },
  balanced_steel_sword:     { path:'weapon/sword/arming/universal/idle/fg.png',     sy:128, fw:64,  fh:64  },
  rusty_twohander:          { path:'weapon/sword/longsword/walk/longsword.png',     sy:128, fw:64,  fh:64  },
  steel_twohander:          { path:'weapon/sword/longsword_alt/walk/longsword_alt.png', sy:256, fw:128, fh:128 },
  honed_steel_twohander:    { path:'weapon/sword/katana/walk/katana.png',           sy:256, fw:128, fh:128 },
  balanced_steel_twohander: { path:'weapon/sword/scimitar/walk/scimitar.png',       sy:256, fw:128, fh:128 },
};

// Body/hair presets per gender — { label, body, hair, hairFilter }
const LPC_PRESETS = {
  male: [
    { id:'scout',    label:'Scout',    body:'male',    hair:'hair/page/adult/idle.png',        hairFilter:'' },
    { id:'berserker',label:'Berserker',body:'muscular',hair:'hair/buzzcut/adult/idle.png',     hairFilter:'brightness(0.2) saturate(0.3)' },
    { id:'knight',   label:'Knight',   body:'male',    hair:'hair/curtains/adult/idle.png',    hairFilter:'sepia(1) brightness(1.7) saturate(0.7)' },
    { id:'rogue',    label:'Rogue',    body:'male',    hair:'hair/messy1/adult/idle.png',      hairFilter:'hue-rotate(325deg) saturate(2.2) brightness(0.8)' },
    { id:'ranger',   label:'Ranger',   body:'male',    hair:'hair/long_straight/adult/idle.png',hairFilter:'sepia(0.5) brightness(1.3)' },
  ],
  female: [
    { id:'warrior',  label:'Warrior',  body:'female',  hair:'hair/long/adult/idle.png',        hairFilter:'brightness(0.2) saturate(0.3)' },
    { id:'ranger',   label:'Ranger',   body:'female',  hair:'hair/bob/adult/idle.png',         hairFilter:'' },
    { id:'mage',     label:'Mage',     body:'female',  hair:'hair/bangs/adult/idle.png',       hairFilter:'brightness(2.5) saturate(0)' },
    { id:'rogue',    label:'Rogue',    body:'female',  hair:'hair/lob/adult/idle.png',         hairFilter:'hue-rotate(310deg) saturate(3) brightness(0.9)' },
    { id:'knight',   label:'Knight',   body:'female',  hair:'hair/parted/adult/idle.png',      hairFilter:'sepia(1) brightness(1.7) saturate(0.7)' },
  ],
};

function getLPCLayers(hero) {
  const g  = hero?.gender === 'female' ? 'female' : 'male';
  const eq = hero?.equipment || {};

  // Resolve preset (default to first preset for gender)
  const presets = LPC_PRESETS[g];
  const preset  = presets.find(p => p.id === hero?.preset) || presets[0];
  const bodyDir = preset.body;
  const hairPath = preset.hair;

  // LPC render order: body → head → face → hair → armor → helmet → boots → shield → weapon
  const hairLayer = L(hairPath);
  if (preset.hairFilter) hairLayer.filter = preset.hairFilter;
  const layers = [
    L(`body/bodies/${bodyDir}/idle.png`),
    L(`head/heads/human/${g}/idle.png`),
    L(`head/faces/${g}/neutral/idle.png`),
    hairLayer,
  ];

  // Torso armor
  if (eq.armor) {
    const mat = eq.armor.split('_')[0];
    const path = mat === 'leather'   ? `torso/armour/leather/${g}/idle.png`
               : mat === 'chainmail' ? `torso/chainmail/${g}/idle.png`
               : mat === 'steel'     ? `torso/armour/plate/${g}/idle.png`
               : null;
    if (path) layers.push(L(path));
    if (mat === 'steel') layers.push(L('legs/armour/plate/male/idle.png'));
  }

  // Helmet (over hair)
  if (eq.helmet) {
    const mat = eq.helmet.split('_')[0];
    const path = mat === 'leather'   ? 'hat/helmet/nasal/adult/idle.png'
               : mat === 'chainmail' ? 'hat/helmet/mail/adult/idle.png'
               : mat === 'steel'     ? `hat/helmet/barbuta/${g}/idle.png`
               : null;
    if (path) layers.push(L(path));
  }

  // Boots
  if (eq.boots) {
    const mat = eq.boots.split('_')[0];
    if (mat === 'steel') layers.push(L(`feet/armour/plate/${g}/idle/steel.png`));
    else                 layers.push(L('feet/boots/basic/male/idle.png'));
  }

  // Shield (walk layout = same 4-dir format, sy=128 for south)
  if (eq.shield) {
    layers.push(L('shield/round/walk/brown.png'));
  }

  // Weapon — per-item sprite from LPC_WEAPON map
  if (eq.weapon && LPC_WEAPON[eq.weapon]) {
    const w = LPC_WEAPON[eq.weapon];
    layers.push(L(w.path, w.sy, w.fw, w.fh));
  }

  return layers;
}

async function renderLPCCanvas(canvas, layers) {
  const ctx = canvas.getContext('2d');
  const cw  = canvas.width, ch = canvas.height;
  ctx.clearRect(0, 0, cw, ch);
  ctx.imageSmoothingEnabled = false;
  const imgs = await Promise.all(layers.map(l => lpcLoad(l.url)));
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    if (!img) continue;
    const { sy = 128, fw = 64, fh = 64, filter } = layers[i];
    if (filter) ctx.filter = filter;
    if (fw === 64 && fh === 64) {
      ctx.drawImage(img, 0, sy, 64, 64, 0, 0, cw, ch);
    } else {
      const scale = fw / 64;
      const dx = -(cw * (scale - 1)) / 2;
      const dy = -(ch * (scale - 1)) / 2;
      ctx.drawImage(img, 0, sy, fw, fh, dx, dy, cw * scale, ch * scale);
    }
    if (filter) ctx.filter = 'none';
  }
}
// ────────────────────────────────────────────────────────────────────────────

function buildHeroSVG(hero) {
  const cls    = getHeroClass() || 'warrior';
  const gender = hero?.gender || 'male';
  const eq     = hero?.equipment || {};
  const parts  = [];

  // Base body (skin, hair, silhouette)
  const bodyKey = `${cls}_${gender}`;
  if (HERO_SPRITE_PARTS[bodyKey])
    parts.push(HERO_SPRITE_PARTS[bodyKey]);

  // Armor material overlay (torso, arms, legs, boots)
  if (eq.armor) {
    const mat = eq.armor.split('_')[0]; // 'leather' | 'chainmail' | 'steel'
    const key = `outfit_overlay_${mat}`;
    if (HERO_SPRITE_PARTS[key]) parts.push(HERO_SPRITE_PARTS[key]);
  }

  // Helm overlay
  if (eq.helmet) {
    const mat = eq.helmet.split('_')[0];
    const key = `helm_overlay_${mat}`;
    if (HERO_SPRITE_PARTS[key]) parts.push(HERO_SPRITE_PARTS[key]);
  }

  // Weapon
  if (eq.weapon && HERO_SPRITE_PARTS[`weapon_${eq.weapon}`])
    parts.push(HERO_SPRITE_PARTS[`weapon_${eq.weapon}`]);

  // Shield (drawn last = in front)
  if (eq.shield && HERO_SPRITE_PARTS[`shield_${eq.shield}`])
    parts.push(HERO_SPRITE_PARTS[`shield_${eq.shield}`]);

  return `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">${parts.join('')}</svg>`;
}

function updateHeroSprite() {
  const hero   = getHero();
  const layers = getLPCLayers(hero);
  const battle = document.getElementById("heroSpriteCanvas");
  const avatar = document.getElementById("hpAvatarCanvas");
  if (battle) renderLPCCanvas(battle, layers);
  if (avatar) renderLPCCanvas(avatar, layers);
}

function setHeroPreset(id) {
  const hero = getHero();
  if (!hero) return;
  hero.preset = id;
  scheduleHeroSave();
  updateHeroSprite();
  // Refresh preset button states
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === id);
  });
}

function toggleHeroGender() {
  const hero = getHero();
  if (!hero) return;
  hero.gender = (hero.gender === 'female') ? 'male' : 'female';
  hero.preset = null;
  scheduleHeroSave();
  renderHeroProfile();
}

// ===================== SKILL TREE =====================
const SKILL_DEFS = [
  { id:"iron_skin",            icon:"🛡️", name:"Iron Skin",         max:999, reqLevel:1,  reqBuild:null,
    desc: (lv) => `+${lv*10} HP total${ironSkinMilestoneDesc(lv)}` },
  { id:"toughness",            icon:"🧱", name:"Toughness",          max:5,   reqLevel:1,  reqBuild:null,
    desc: (lv) => `-${lv*10}% enemy damage` },
  { id:"shield_bash",          icon:"🛡️", name:"Shield Bash",        max:9,   reqLevel:3,  reqBuild:"sword_shield",
    desc: (lv) => `Stun ${shieldBashChance(lv)}% chance · ${lv+1}s duration` },
  { id:"combo_strike",         icon:"⚡", name:"Combo Strike",       max:3,   reqLevel:3,  reqBuild:null,
    desc: (lv) => comboDesc(lv) },
  { id:"weapon_mastery_sword", icon:"🗡️", name:"WM: Sword",          max:5,   reqLevel:5,  reqBuild:null,
    desc: (lv) => `Bleed ${[20,30,40,50,60][lv-1]}% · 5 rounds, stackable` },
  { id:"weapon_mastery_axe",   icon:"🪓", name:"WM: Axe",            max:5,   reqLevel:5,  reqBuild:null,
    desc: (lv) => `Crit ${Math.round(15+(lv-1)*6.25)}% · ×2.5 damage` },
  { id:"weapon_mastery_mace",  icon:"🔨", name:"WM: Mace",           max:5,   reqLevel:5,  reqBuild:null,
    desc: (lv) => `Stun ${Math.round(15+(lv-1)*6.25)}% · armor ×${(1.5+(lv-1)*0.375).toFixed(2)} · ½ dodge` },
];

function ironSkinMilestoneDesc(lv) {
  const milestones = [[5,10],[10,30],[15,50],[20,100]];
  const earned = milestones.filter(([t])=>lv>=t).reduce((s,[,b])=>s+b,0);
  return earned > 0 ? ` (+${earned} bonus)` : "";
}
function shieldBashChance(lv) { return Math.round(50 + (lv-1)*2.5); }
function comboDesc(lv) {
  if (lv===1) return "3× combo = ×1.5 crit, -1s/hit";
  if (lv===2) return "3× combo = ×2 crit, -1s/hit";
  return "3× = ×2 / 5× = ×3 crit, -1s/hit";
}

function openSkillTree() {
  renderSkillTree();
  document.getElementById("skillTreeScreen").classList.add("active");
}
function closeSkillTree() {
  document.getElementById("skillTreeScreen").classList.remove("active");
}

function renderSkillTree() {
  const hero = getHero();
  if (!hero) return;
  const sp = hero.skillPoints || 0;
  document.getElementById("skillTreeSP").textContent = `● ${sp} Skill Point${sp!==1?"s":""}`;
  const grid = document.getElementById("skillGrid");
  grid.innerHTML = "";
  SKILL_DEFS.forEach(def => {
    const lv = hero.skills[def.id] || 0;
    const locked = hero.level < def.reqLevel || (def.reqBuild && hero.build !== def.reqBuild);
    const maxed  = def.max !== 999 && lv >= def.max;
    const canUp  = !locked && !maxed && sp > 0;
    const card = document.createElement("div");
    card.className = "skill-card" + (locked ? " locked-skill" : maxed ? " maxed" : "");
    const maxLabel = def.max === 999 ? "∞" : `/${def.max}`;
    const reqNote  = locked
      ? (def.reqBuild && hero.build !== def.reqBuild
          ? `Requires ${def.reqBuild === "sword_shield" ? "Sword & Shield" : "Two-Hander"} build`
          : `Requires hero Lv${def.reqLevel}`)
      : "";
    card.innerHTML = `
      <div class="skill-icon">${def.icon}</div>
      <div>
        <div class="skill-info-name">${def.name}</div>
        <div class="skill-info-desc">${lv > 0 ? def.desc(lv) : def.desc(1)}</div>
        ${reqNote ? `<div class="skill-info-req">⚠ ${reqNote}</div>` : ""}
      </div>
      <div class="skill-lvl-col">
        <div class="skill-lvl-num">${lv}<span class="skill-lvl-max">${maxLabel}</span></div>
        <button class="skill-plus-btn" onclick="spendSkillPoint('${def.id}')" ${canUp ? "" : "disabled"}>+</button>
      </div>`;
    grid.appendChild(card);
  });
}

function spendSkillPoint(skillId) {
  const hero = getHero();
  if (!hero || (hero.skillPoints || 0) < 1) return;
  const def = SKILL_DEFS.find(d => d.id === skillId);
  if (!def) return;
  const lv = hero.skills[skillId] || 0;
  if (def.max !== 999 && lv >= def.max) return;
  if (hero.level < def.reqLevel) return;
  if (def.reqBuild && hero.build !== def.reqBuild) return;
  hero.skills[skillId] = lv + 1;
  hero.skillPoints--;
  renderSkillTree();
  scheduleHeroSave();
}

// ===================== SKILL COMBAT HELPERS =====================
function isMobStunned()  { return dng && dng.mobStunEnd  > Date.now(); }
function isHeroStunned() { return dng && dng.heroStunEnd > Date.now(); }

const BASH_MAX_CHARGES  = 3;
const BASH_STREAK_NEED  = 3;

function activateShieldBash() {
  if (!dng || dng.locked || dng.done) return;
  if ((dng.bashCharges || 0) <= 0) return;
  dng.bashCharges--;
  dng.bashStreak = 0;
  dng.locked = true;
  stopDngTimer();
  updateBashSlot();
  applyShieldBash();
}

function applyShieldBash() {
  const hero   = getHero();
  const bashLv = hero?.skills.shield_bash || 0;
  const chance = shieldBashChance(bashLv) / 100;
  const stunSec = bashLv + 1;

  // Hero bash animation
  const heroSpr = document.getElementById("heroSprite");
  if (heroSpr) { heroSpr.classList.add("attack"); setTimeout(() => heroSpr.classList.remove("attack"), 400); }

  if (Math.random() < chance) {
    dng.mobStunEnd = Date.now() + stunSec * 1000;
    spawnFloater(`⚡ STUNNED ${stunSec}s`, "miss-float", "monsterZone");
    const sprite = document.getElementById("monsterSprite");
    if (sprite) { sprite.style.filter = "brightness(1.8) saturate(0)"; setTimeout(() => { if (sprite) sprite.style.filter = ""; }, 300); }
    showStunBar(stunSec);
  } else {
    spawnFloater("🛡️ Missed!", "miss-float", "monsterZone");
    const m = dng.queue[dng.monsterIdx];
    const sprite = document.getElementById("monsterSprite");
    if (sprite) { sprite.classList.add("attack-left"); setTimeout(() => sprite.classList.remove("attack-left"), 400); }
    monsterAttackHero(m);
    if (m.poison) applyStatus({ type:"poison", dmg:m.poison.dmg, roundsLeft:m.poison.rounds });
    if (m.freeze) applyFreezeStatus(m.freeze.rounds);
    tickStatuses();
    if (dng.heroHp <= 0) { setTimeout(() => dungeonFailed(), 500); return; }
  }
  scheduleNextQuestion(650);
}

function updateBashSlot() {
  const slot    = document.getElementById("skillSlot0");
  if (!slot) return;
  const charges = dng?.bashCharges || 0;
  const hasCharges = charges > 0;
  slot.classList.toggle("skill-disabled", !hasCharges);
  slot.classList.remove("skill-active");
  const dots = [0,1,2].map(i =>
    `<div class="bash-dot${i < charges ? " filled" : ""}"></div>`
  ).join("");
  slot.innerHTML = `
    ${hasCharges ? `<div class="bash-charge-badge">${charges}</div>` : ""}
    <span>🛡️</span>
    <div class="bash-charges">${dots}</div>
    <span class="dng-skill-label">BASH</span>
  `;
}

function addBashCharge() {
  if (!dng) return;
  if ((dng.bashCharges || 0) >= BASH_MAX_CHARGES) return;
  dng.bashCharges = (dng.bashCharges || 0) + 1;
  spawnFloater("🛡️ +Bash", "xp-float", "heroHpBar");
  updateBashSlot();
}

function showStunBar(sec) {
  clearStunBar();
  const zone = document.getElementById("monsterZone");
  if (!zone) return;
  const bar = document.createElement("div");
  bar.id = "dngStunBar";
  bar.style.cssText = "position:absolute;top:0;left:0;right:0;height:4px;background:rgba(250,204,21,0.9);z-index:50;";
  zone.appendChild(bar);
  const total = sec * 1000;
  dng._stunBarEnd = Date.now() + total;
  dng._stunBarInterval = setInterval(() => {
    const remaining = (dng?._stunBarEnd || 0) - Date.now();
    const el = document.getElementById("dngStunBar");
    if (!el || remaining <= 0) { clearStunBar(); return; }
    el.style.width = Math.max(0, (remaining / total) * 100) + "%";
  }, 50);
}

function clearStunBar() {
  if (dng) { clearInterval(dng._stunBarInterval); dng._stunBarInterval = null; }
  document.getElementById("dngStunBar")?.remove();
}

// ===================== HERO STUN =====================
function applyHeroStun(sec) {
  if (!dng) return;
  dng.heroStunEnd      = Date.now() + sec * 1000;
  dng.heroStunDuration = sec * 1000;
  spawnFloater(`⚡ STUNNED ${sec}s!`, "miss-float", "heroHpBar");
  showHeroStunOverlay();
}

function showHeroStunOverlay() {
  clearHeroStunOverlay();
  if (!dng) return;
  const options = document.getElementById("dngOptions");
  if (!options) return;
  const remaining = (dng.heroStunEnd - Date.now()) / 1000;
  if (remaining <= 0) return;
  options.style.position = "relative";
  const overlay = document.createElement("div");
  overlay.id = "dngHeroStunOverlay";
  overlay.style.cssText = [
    "position:absolute;inset:0;z-index:30;display:flex;flex-direction:column;",
    "align-items:center;justify-content:center;gap:6px;pointer-events:all;",
    "background:rgba(12,13,16,0.80);border-radius:12px;",
    "border:2px solid rgba(253,224,71,0.55);"
  ].join("");
  overlay.innerHTML = `
    <div style="font-size:26px">⚡</div>
    <div id="dngHeroStunText" style="font-size:13px;font-weight:800;color:#fde047;letter-spacing:0.1em">STUNNED</div>
    <div style="width:72%;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;">
      <div id="dngHeroStunFill" style="height:100%;background:#fde047;width:100%;transition:width 0.08s linear;border-radius:2px;"></div>
    </div>
  `;
  options.appendChild(overlay);
  const total = dng.heroStunDuration || 5000;
  dng._heroStunBarInterval = setInterval(() => {
    const rem = (dng?.heroStunEnd || 0) - Date.now();
    const fill = document.getElementById("dngHeroStunFill");
    const txt  = document.getElementById("dngHeroStunText");
    if (!fill || rem <= 0) { clearHeroStunOverlay(); return; }
    fill.style.width = Math.max(0, (rem / total) * 100) + "%";
    if (txt) txt.textContent = `STUNNED ${(rem / 1000).toFixed(1)}s`;
  }, 50);
}

function clearHeroStunOverlay() {
  if (dng) { clearInterval(dng._heroStunBarInterval); dng._heroStunBarInterval = null; }
  document.getElementById("dngHeroStunOverlay")?.remove();
}

// Monster DoT (bleed)
function applyMonsterBleed(dmg) {
  if (!dng) return;
  if (!dng.monsterStatuses) dng.monsterStatuses = [];
  dng.monsterStatuses.push({ type:"bleed", dmg, roundsLeft:5 });
}

function tickMonsterStatuses() {
  if (!dng || !dng.monsterStatuses?.length) return;
  const m = dng.queue[dng.monsterIdx];
  let bleedTotal = 0, bleedCount = 0;
  dng.monsterStatuses = dng.monsterStatuses.map(s => {
    if (s.type === "bleed") {
      const dmg = m.armor > 0 ? Math.max(1, Math.floor(s.dmg / 2)) : s.dmg;
      m.hp -= dmg;
      bleedTotal += dmg;
      bleedCount++;
    }
    return { ...s, roundsLeft: s.roundsLeft - 1 };
  }).filter(s => s.roundsLeft > 0);
  if (bleedTotal > 0) {
    const armorLabel = m.armor > 0 ? " (½)" : "";
    const label = bleedCount > 1 ? `🩸-${bleedTotal}${armorLabel} ×${bleedCount}` : `🩸-${bleedTotal}${armorLabel}`;
    spawnFloater(label, "monster-dmg", "monsterZone");
  }
  updateMonsterHpBar();
  if (m.hp <= 0) {
    dng.monsterStatuses = [];
    setTimeout(() => {
      dng.monsterIdx++;
      dng.mobStunEnd = 0;
      clearStunBar();
      dng.combo = 0; updateComboHud();
      if (dng.monsterIdx >= dng.queue.length) { dungeonVictory(); return; }
      dng.wordIdx++;
      renderDungeonMonster();
      renderDungeonQuestion();
    }, 400);
    return true; // monster died from DoT
  }
  return false;
}


// ===================== DUNGEON STATE =====================
let dng = null;
let dngTimerInterval = null;
let dngInputMode = "choice"; // "choice" | "type"

// Resolves a stat that can be a fixed number or a [min, max] range.
// Integer bounds → random integer; float bounds → random float.
function rollStat(val) {
  if (!Array.isArray(val)) return val ?? 0;
  if (val.length === 1) return val[0];
  const [min, max] = val;
  if (Number.isInteger(min) && Number.isInteger(max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return min + Math.random() * (max - min);
}

function rollMob(template, extra = {}) {
  const maxHp  = rollStat(template.maxHp);
  const armor  = rollStat(template.armor  ?? 0);
  const dodge  = rollStat(template.dodge  ?? 0);
  const block  = rollStat(template.block  ?? 0);
  const dmg    = rollStat(template.dmg    ?? 0);
  const poison = template.poison
    ? { dmg: rollStat(template.poison.dmg), rounds: rollStat(template.poison.rounds) }
    : undefined;
  const freeze = template.freeze
    ? { rounds: rollStat(template.freeze.rounds) }
    : undefined;
  return {
    ...template,
    maxHp, hp: maxHp,
    armor, currentArmor: armor,
    dodge, block, dmg,
    ...(poison && { poison }),
    ...(freeze && { freeze }),
    ...extra,
  };
}

function buildMonsterQueue(cfg, dungeonLevel) {
  const mobLv = dungeonLevel || 1;
  const queue = [];
  cfg.monsters.forEach(m => {
    const count = rollStat(m.count);
    for (let i = 0; i < count; i++) {
      queue.push(rollMob(m, { isBoss: false, mobLevel: mobLv }));
    }
  });
  for (let i = queue.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  queue.push(rollMob(cfg.boss, { mobLevel: mobLv }));
  return queue;
}

// ===================== ENTER / EXIT =====================
function enterDungeon(setId, level) {
  const cfg = DUNGEON_CONFIG[setId]?.[level];
  if (!cfg) return;

  const setWords = sets.find(s => s.id === setId)?.words || [];
  if (setWords.length < 4) { alert("Need at least 4 words in this set!"); return; }

  stopDngTimer();
  document.getElementById("dungeonScreen").querySelector(".dng-result-screen")?.remove();

  // Apply hero stats
  const hero = getHero();
  const heroStats = computeHeroStats(hero);
  const effectiveCfg = { ...cfg, heroMaxHp: heroStats.maxHp, heroDmg: heroStats.dmg };

  dng = {
    setId, level, cfg: effectiveCfg,
    heroStats,
    words: [...setWords].sort(() => Math.random() - 0.5),
    wordIdx: 0,
    queue: buildMonsterQueue(cfg, level),
    monsterIdx: 0,
    heroHp: heroStats.maxHp,
    heroStatuses: [],
    combo: 0,
    comboTimerBonus: 0,
    mobStunEnd: 0,
    heroStunEnd: 0,
    heroStunDuration: 0,
    bossPhase: 1,
    phaseRoundCount: 0,
    bashCharges: 0,
    bashStreak: 0,
    locked: false,
    done: false,
  };

  document.getElementById("dungeonDropdown").classList.remove("open");
  document.getElementById("dungeonTriggerLabel").textContent = `⚔️ ${cfg.name} Lv.${level}`;
  const screen = document.getElementById("dungeonScreen");
  // Remove old theme classes
  screen.className = screen.className.replace(/\btheme-\S+/g, "").replace(/\bboss-phase-\d/g, "").trim();
  if (cfg.theme) screen.classList.add(`theme-${cfg.theme}`);
  if (cfg.boss?.phases) screen.classList.add("boss-phase-1");
  screen.classList.add("active");
  document.getElementById("dngInputToggle").style.display = "flex";

  updateHeroSprite();
  renderDungeonHero();
  renderDungeonStatuses();
  renderDungeonMonster();
  const comboHud = document.getElementById("dngComboHud");
  if (comboHud) { comboHud.style.opacity = "0"; comboHud.innerHTML = ""; }

  // Hero HUD init
  updateHeroHud();
  if (hero) {
    const spBadge = document.getElementById("heroSpBadge");
    if (spBadge) spBadge.style.display = (hero.skillPoints > 0) ? "block" : "none";
  }

  // Shield Bash skill bar (only sword_shield + skill > 0)
  const skillBar = document.getElementById("dngSkillBar");
  const hasBash = hero && hero.build === "sword_shield" && (hero.skills.shield_bash || 0) > 0;
  if (skillBar) skillBar.style.display = hasBash ? "flex" : "none";
  if (hasBash) updateBashSlot();

  renderDungeonQuestion();
}

function exitDungeon() {
  stopDngTimer();
  const screen = document.getElementById("dungeonScreen");
  screen.classList.remove("active");
  screen.className = screen.className.replace(/\btheme-\S+/g, "").replace(/\bboss-phase-\d/g, "").trim();
  screen.querySelector(".dng-result-screen")?.remove();
  dng = null;
}

function replayDungeon() {
  const { setId, level } = dng;
  document.getElementById("dungeonScreen").querySelector(".dng-result-screen")?.remove();
  enterDungeon(setId, level);
}

function setDngInputMode(mode) {
  dngInputMode = mode;
  document.getElementById("dngChoiceBtn").classList.toggle("active", mode === "choice");
  document.getElementById("dngTypeBtn").classList.toggle("active", mode === "type");
  if (dng && !dng.locked && !dng.done) renderDungeonQuestion();
}

// ===================== RENDER HERO =====================
function renderDungeonHero() {
  if (!dng) return;
  const pct = Math.max(0, dng.heroHp / dng.cfg.heroMaxHp * 100);
  const fill = document.getElementById("heroHpFill");
  if (!fill) return;
  fill.style.width = pct + "%";
  fill.className = "dng-hp-fill" + (pct <= 30 ? " danger" : pct <= 60 ? " warn" : "");
  document.getElementById("heroHpText").textContent = `${Math.max(0, dng.heroHp)} / ${dng.cfg.heroMaxHp} HP`;
}

function renderDungeonStatuses() {
  if (!dng) return;
  const el = document.getElementById("heroStatuses");
  if (!el) return;
  if (!dng.heroStatuses.length) { el.innerHTML = ""; return; }
  // Group bleed stacks into one badge showing total stacks
  const bleedStacks = dng.heroStatuses.filter(s => s.type === "bleed");
  const shown = new Set();
  el.innerHTML = dng.heroStatuses.map(s => {
    if (s.type === "poison") return `<span class="dng-status poison"  title="Poisoned: ${s.dmg} dmg for ${s.roundsLeft} rounds">☠️ ${s.dmg}×${s.roundsLeft}</span>`;
    if (s.type === "freeze") return `<span class="dng-status freeze"  title="Frozen: ${s.roundsLeft} rounds">❄️ ×${s.roundsLeft}</span>`;
    if (s.type === "weaken") return `<span class="dng-status weaken"  title="Weakened: -50% damage for ${s.roundsLeft} rounds">💔 ×${s.roundsLeft}</span>`;
    if (s.type === "bleed" && !shown.has("bleed")) {
      shown.add("bleed");
      const totalDmg = bleedStacks.reduce((a, b) => a + b.dmg, 0);
      const maxRounds = Math.max(...bleedStacks.map(b => b.roundsLeft));
      const stackLabel = bleedStacks.length > 1 ? ` ×${bleedStacks.length}` : "";
      return `<span class="dng-status bleed" title="Bleeding: ${totalDmg} dmg/round for up to ${maxRounds} rounds (${bleedStacks.length} stack${bleedStacks.length>1?"s":""})">🩸 ${totalDmg}${stackLabel}</span>`;
    }
    return "";
  }).join("");
}



// Fallback for unknown monsters — generic silhouette
function getMonsterSVG(name) {
  if (MONSTER_SVG[name]) return MONSTER_SVG[name];
  // Generic fallback
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="60" rx="26" ry="30" fill="#374151"/>
    <ellipse cx="50" cy="34" rx="20" ry="20" fill="#4b5563"/>
    <ellipse cx="40" cy="32" rx="5" ry="5" fill="#ef4444"/>
    <ellipse cx="60" cy="32" rx="5" ry="5" fill="#ef4444"/>
    <path d="M40 46 Q50 54 60 46" stroke="#1f2937" stroke-width="2" fill="none"/>
  </svg>`;
}
function renderDungeonMonster() {
  if (!dng) return;
  const m = dng.queue[dng.monsterIdx];
  const zone = document.getElementById("monsterZone");
  const hpPct = Math.max(0, m.hp / m.maxHp * 100);

  // Detach stun bar before innerHTML wipe, re-attach after
  const stunBar = document.getElementById("dngStunBar");
  if (stunBar) stunBar.remove();

  const badges = [];
  if (m.currentArmor > 0) badges.push(`<span class="dng-badge armor">🛡️ ${m.currentArmor}</span>`);
  if (m.dodge > 0)         badges.push(`<span class="dng-badge dodge">💨 ${Math.round(m.dodge*100)}%</span>`);
  if (m.block > 0)         badges.push(`<span class="dng-badge block">🔰 ${Math.round(m.block*100)}%</span>`);
  if (m.poison)            badges.push(`<span class="dng-badge poison">☠️</span>`);

  zone.innerHTML = `
    ${m.isBoss ? '<div class="dng-boss-crown">👑</div>' : ''}
    <div class="dng-monster-sprite" id="monsterSprite">${getMonsterSVG(m.phases && dng ? `${m.name} Phase ${dng.bossPhase}` : m.name)}</div>
    <div class="dng-fighter-name">${m.name}</div>
    ${badges.length ? `<div class="dng-badges">${badges.join("")}</div>` : ""}
    <div class="dng-hp-track">
      <div class="dng-monster-hp-fill" id="monsterHpFill" style="width:${hpPct}%"></div>
    </div>
    <div class="dng-hp-text" id="monsterHpText">${m.hp} / ${m.maxHp} HP${m.currentArmor > 0 ? ` + 🛡️${m.currentArmor}` : ""}</div>
  `;

  // Re-attach stun bar so it stays visible during the stun duration
  if (stunBar && isMobStunned()) zone.appendChild(stunBar);
}

function updateMonsterHpBar() {
  if (!dng) return;
  const m = dng.queue[dng.monsterIdx];
  const hpPct = Math.max(0, m.hp / m.maxHp * 100);
  const fill = document.getElementById("monsterHpFill");
  if (fill) fill.style.width = hpPct + "%";
  const txt = document.getElementById("monsterHpText");
  if (txt) txt.textContent = `${Math.max(0,m.hp)} / ${m.maxHp} HP${m.currentArmor > 0 ? ` + 🛡️${m.currentArmor}` : ""}`;
}

// ===================== RENDER QUESTION =====================
function renderDungeonQuestion() {
  if (!dng) return;

  // Tick bleed DoT — if monster dies, this handles transition
  if (tickMonsterStatuses()) return;

  // Stun indicator on monster zone
  const stunEl = document.getElementById("dngStunLabel");
  if (isMobStunned()) {
    if (!stunEl) {
      const lbl = document.createElement("div");
      lbl.id = "dngStunLabel";
      lbl.style.cssText = "font-size:11px;font-weight:800;color:#fde047;letter-spacing:0.08em;text-align:center;margin-top:2px;";
      lbl.textContent = "⚡ STUNNED";
      document.getElementById("monsterZone")?.appendChild(lbl);
    }
  } else {
    stunEl?.remove();
  }

  const word = dng.words[dng.wordIdx % dng.words.length];
  dng.currentWord = word;

  // Timer label
  const timerHtml = dng.cfg.timerSec
    ? `<div class="dng-timer-bar"><div class="dng-timer-fill" id="dngTimerFill" style="width:100%"></div></div>`
    : "";

  const prompt = getTranslationLabel(word);
  const _curMQ = dng.queue?.[dng.monsterIdx];
  const isShadow = dng.cfg.theme === "shadow" || (_curMQ?.isBoss && _curMQ?.phases && dng.bossPhase >= 2);
  const promptEl = document.getElementById("dngWordPrompt");
  promptEl.textContent = prompt;
  // In Shadow Dungeon or Boss Phase 2+ type mode — show translation upside down
  if (isShadow && dngInputMode === "type") {
    promptEl.style.transform = "rotate(180deg)";
    promptEl.title = "Shadow Dungeon: translation is flipped!";
  } else {
    promptEl.style.transform = "";
    promptEl.title = "";
  }

  const timerEl = document.getElementById("dngTimerWrap");
  if (timerEl) timerEl.innerHTML = timerHtml;

  if (dngInputMode === "choice") {
    renderDngChoiceOptions(word);
  } else {
    renderDngTypeInput(word);
  }

  dng.locked = false;
  startDngTimer();
  // Re-apply hero stun overlay if stun is still active (persists across question renders)
  if (isHeroStunned()) showHeroStunOverlay();
}

function renderDngChoiceOptions(word) {
  const correct = word.en;
  const pool = dng.words.map(w => w.en).filter(e => e !== correct);
  for (let i = pool.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  const opts = [correct, ...pool.slice(0,3)];
  for (let i = opts.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [opts[i],opts[j]]=[opts[j],opts[i]]; }

  // Shadow Dungeon or Boss Phase 2+ flips options
  const _curM = dng.queue?.[dng.monsterIdx];
  const flip = dng.cfg.theme === "shadow" || (_curM?.isBoss && _curM?.phases && dng.bossPhase >= 2);

  const container = document.getElementById("dngOptions");
  container.innerHTML = "";
  container.style.display = "grid";
  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "dng-opt-btn";
    btn.textContent = opt;
    if (flip) btn.style.transform = "rotate(180deg)";
    btn.onclick = () => handleDungeonAnswer(opt, correct);
    container.appendChild(btn);
  });
}

function renderDngTypeInput(word) {
  const correct = word.en;
  const container = document.getElementById("dngOptions");
  container.style.display = "block";
  container.innerHTML = `
    <div style="display:flex;gap:8px;width:100%">
      <input id="dngTypeInput" type="text"
        placeholder="Type in English…"
        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
        style="flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);
          border-radius:10px;padding:13px 14px;font-family:'DM Sans',sans-serif;font-size:15px;
          color:#fff;outline:none;"
        onkeydown="if(event.key==='Enter'){event.preventDefault();submitDngType('${correct.replace(/'/g,"\'")}')}"/>
      <button onclick="submitDngType('${correct.replace(/'/g,"\'")}');event.stopPropagation()"
        style="padding:12px 18px;background:#f59e0b;color:#0c0d10;border:none;border-radius:10px;
          font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap">
        ⚔️
      </button>
    </div>
    <div id="dngTypeHint" style="font-size:12px;color:rgba(255,255,255,0.35);text-align:center;margin-top:6px;min-height:16px"></div>
  `;
  setTimeout(() => document.getElementById("dngTypeInput")?.focus(), 50);
}

function submitDngType(correct) {
  if (!dng || dng.locked || dng.done || isHeroStunned()) return;
  const input = document.getElementById("dngTypeInput");
  if (!input) return;
  const typed = input.value.trim().toLowerCase();
  if (!typed) return;
  if (typed === correct.toLowerCase()) {
    handleDungeonAnswer(correct, correct);
  } else {
    handleDungeonAnswer("__wrong__", correct);
  }
}

// ===================== TIMER =====================
function startDngTimer() {
  stopDngTimer();
  if (!dng?.cfg.timerSec) return;
  const isFrozen = dng.heroStatuses.some(s => s.type === "freeze");
  // Combo Strike: -1s per hit in chain (not during mob stun)
  const comboReduction = isMobStunned() ? 0 : (dng.comboTimerBonus || 0);
  let totalSec = isFrozen ? Math.max(2, dng.cfg.timerSec / 2) : dng.cfg.timerSec;
  totalSec = Math.max(2, totalSec - comboReduction);
  const total = totalSec * 1000;
  updateFreezeOverlay(isFrozen);
  const start = Date.now();
  dngTimerInterval = setInterval(() => {
    if (!dng || dng.locked || dng.done) { stopDngTimer(); return; }
    const elapsed = Date.now() - start;
    const pct = Math.max(0, 100 - (elapsed / total) * 100);
    const fill = document.getElementById("dngTimerFill");
    if (fill) {
      fill.style.width = pct + "%";
      fill.style.background = isFrozen ? "#60a5fa" : (pct < 30 ? "#ef4444" : pct < 60 ? "#f59e0b" : "#4ade80");
    }
    if (elapsed >= total) {
      stopDngTimer();
      onDngTimerExpired();
    }
  }, 80);
}

function stopDngTimer() {
  if (dngTimerInterval) { clearInterval(dngTimerInterval); dngTimerInterval = null; }
}

function onDngTimerExpired() {
  if (!dng || dng.locked || dng.done) return;
  dng.locked = true;
  dng.combo = 0;
  dng.comboTimerBonus = 0;
  document.querySelectorAll(".dng-opt-btn").forEach(b => b.disabled = true);
  const input = document.getElementById("dngTypeInput");
  if (input) input.disabled = true;

  // Mob stunned — can't attack on timer expire either
  if (isMobStunned()) {
    scheduleNextQuestion(500);
    return;
  }

  const m = dng.queue[dng.monsterIdx];
  const sprite = document.getElementById("monsterSprite");
  if (sprite) {
    sprite.classList.add("attack-left");
    setTimeout(() => { sprite.classList.remove("attack-left"); sprite.classList.add("shake"); setTimeout(() => sprite.classList.remove("shake"), 320); }, 380);
  }

  monsterAttackHero(m);

  // Apply monster's status on hit (poison, freeze, etc.)
  if (m.poison)  applyStatus({ type: "poison", dmg: m.poison.dmg, roundsLeft: m.poison.rounds });
  if (m.freeze)  applyFreezeStatus(m.freeze.rounds);
  if (m.isBoss)  triggerBossAbilities(m, "on_attack");

  tickStatuses();
  if (dng.heroHp <= 0) { setTimeout(() => dungeonFailed(), 500); return; }
  scheduleNextQuestion(700);
}

// ===================== ANSWER HANDLING =====================
function handleDungeonAnswer(selected, correct) {
  if (!dng || dng.locked || dng.done || isHeroStunned()) return;
  dng.locked = true;
  stopDngTimer();

  document.querySelectorAll(".dng-opt-btn").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
    else if (b.textContent === selected && selected !== correct) b.classList.add("wrong");
  });

  if (selected === correct) {
    // Combo + timer bonus
    dng.combo++;
    if (!isMobStunned()) dng.comboTimerBonus = (dng.comboTimerBonus || 0) + ((getHero()?.skills.combo_strike||0) > 0 ? 1 : 0);
    updateComboHud();

    // Bash charge accumulation: every BASH_STREAK_NEED correct in a row
    const hasBashSkill = (getHero()?.skills.shield_bash || 0) > 0 && getHero()?.build === "sword_shield";
    if (hasBashSkill) {
      dng.bashStreak = (dng.bashStreak || 0) + 1;
      if (dng.bashStreak >= BASH_STREAK_NEED) {
        dng.bashStreak -= BASH_STREAK_NEED;
        addBashCharge();
      }
    }

    dungeonHit();
  } else {
    // Wrong answer — reset bash streak
    dng.bashStreak = 0;
    dng.combo = 0;
    dng.comboTimerBonus = 0;
    updateComboHud();

    if (isMobStunned()) {
      // Mob is stunned — can't attack, just move on
      scheduleNextQuestion(500);
      return;
    }
    const m = dng.queue[dng.monsterIdx];
    const monSpr = document.getElementById("monsterSprite");
    if (monSpr) { monSpr.classList.add("attack-left"); setTimeout(() => monSpr.classList.remove("attack-left"), 400); }
    monsterAttackHero(m);
    if (m.poison) applyStatus({ type:"poison", dmg:m.poison.dmg, roundsLeft:m.poison.rounds });
    if (m.freeze) applyFreezeStatus(m.freeze.rounds);
    if (m.isBoss) triggerBossAbilities(m, "on_attack");
    tickStatuses();
    if (dng.heroHp <= 0) { setTimeout(() => dungeonFailed(), 500); return; }
    scheduleNextQuestion(650);
  }
}

// ===================== COMBAT =====================
function getComboBonus(combo) {
  // Lv6 combo system: 3-4 = +2, 5-6 = +3, 7+ = +4
  if (combo >= 7) return 4;
  if (combo >= 5) return 3;
  if (combo >= 3) return 2;
  return 0;
}

function spawnCritEffect(targetId, color) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const isGold = color !== "red";
  const rgb = isGold ? "255,195,40" : "220,38,38";

  // Panel flash
  const flash = document.createElement("div");
  flash.style.cssText = `position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:22;
    background:rgba(${rgb},0.28);animation:critFlash 0.42s ease forwards;`;
  target.appendChild(flash);
  setTimeout(() => flash.remove(), 450);

  // Two shockwave rings
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      const ring = document.createElement("div");
      ring.style.cssText = `position:absolute;top:50%;left:50%;width:80px;height:80px;
        border-radius:50%;pointer-events:none;z-index:23;
        border:${i===0?3:2}px solid rgba(${rgb},${i===0?0.95:0.55});
        box-shadow:0 0 ${i===0?16:8}px rgba(${rgb},0.6);
        animation:shockwaveExpand 0.5s ease forwards;`;
      target.appendChild(ring);
      setTimeout(() => ring.remove(), 520);
    }, i * 75);
  }

  // Screen edge glow
  const screen = document.getElementById("dungeonScreen");
  if (screen) {
    const side = isGold ? "80% center" : "20% center";
    const edge = document.createElement("div");
    edge.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:99;
      background:radial-gradient(ellipse at ${side},transparent 40%,rgba(${rgb},0.22) 100%);
      animation:critFlash 0.58s ease forwards;`;
    screen.appendChild(edge);
    setTimeout(() => edge.remove(), 600);
  }
}

function monsterAttackHero(m) {
  const critChance = m.isBoss ? 0.22 : 0.15;
  const isCrit = Math.random() < critChance;
  const rawDmg = isCrit ? Math.round(m.dmg * 2) : m.dmg;

  if (isCrit) spawnFloater("💥 CRIT!", "crit-hero-dmg", "heroHpBar");

  const dealt = applyHeroDamage(rawDmg, m.emoji, false, isCrit);

  if (isCrit && dealt > 0) {
    const heroSpr = document.getElementById("heroSprite");
    if (heroSpr) {
      heroSpr.classList.remove("take-damage", "take-crit");
      void heroSpr.offsetWidth;
      heroSpr.classList.add("take-crit");
      setTimeout(() => heroSpr.classList.remove("take-crit"), 680);
    }
    spawnCritEffect("heroHpBar", "red");
  }
  return dealt;
}

function playHeroAttackAnim() {
  const heroSpr = document.getElementById("heroSprite");
  if (!heroSpr) return;
  heroSpr.classList.add("attack");
  setTimeout(() => heroSpr.classList.remove("attack"), 580);
  // Spawn slash arc at the moment of strike (~55% into 550ms ≈ 160ms)
  setTimeout(() => spawnSlashArc(), 160);
}

function spawnSlashArc() {
  const row = document.querySelector(".dng-battle-row");
  if (!row) return;

  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 400 200");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:50;overflow:visible;";

  const defs = document.createElementNS(ns, "defs");
  const filter = document.createElementNS(ns, "filter");
  filter.setAttribute("id", "slashGlow");
  filter.setAttribute("x", "-50%"); filter.setAttribute("y", "-50%");
  filter.setAttribute("width", "200%"); filter.setAttribute("height", "200%");
  const blur = document.createElementNS(ns, "feGaussianBlur");
  blur.setAttribute("stdDeviation", "4");
  filter.appendChild(blur);
  defs.appendChild(filter);
  svg.appendChild(defs);

  // Arc path: from hero side (~x=105, y=120) curving up to monster side (~x=295, y=85)
  const arcD = "M 105,122 Q 195,28 295,85";
  const arcLen = 290;

  const mkPath = (stroke, sw, extra) => {
    const p = document.createElementNS(ns, "path");
    p.setAttribute("d", arcD);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", stroke);
    p.setAttribute("stroke-width", sw);
    p.setAttribute("stroke-linecap", "round");
    if (extra) Object.entries(extra).forEach(([k,v]) => p.setAttribute(k, v));
    p.style.cssText = `stroke-dasharray:${arcLen};stroke-dashoffset:${arcLen};transition:stroke-dashoffset 0.16s ease,opacity 0.2s ease`;
    return p;
  };

  const glow  = mkPath("rgba(255,190,40,0.55)", 14, { filter:"url(#slashGlow)" });
  const mid   = mkPath("rgba(255,230,120,0.7)", 5);
  const sharp = mkPath("rgba(255,255,255,0.97)", 2);
  const trail = mkPath("rgba(180,220,255,0.5)",  1.2);
  // slightly offset trail
  trail.setAttribute("d", "M 108,126 Q 198,32 298,89");

  [glow, mid, trail, sharp].forEach(p => svg.appendChild(p));

  // Impact sparks at monster side (295, 85)
  const sparkDefs = [
    [295,85, 318,66], [295,85, 320,87], [295,85, 315,102],
    [295,85, 300,62], [295,85, 278,70],
  ];
  const sparks = sparkDefs.map(([x1,y1,x2,y2]) => {
    const l = document.createElementNS(ns, "line");
    l.setAttribute("x1",x1); l.setAttribute("y1",y1);
    l.setAttribute("x2",x2); l.setAttribute("y2",y2);
    l.setAttribute("stroke","rgba(255,220,60,0.95)");
    l.setAttribute("stroke-width","2");
    l.setAttribute("stroke-linecap","round");
    l.style.cssText = "opacity:0;transition:opacity 0.06s ease";
    return l;
  });
  sparks.forEach(s => svg.appendChild(s));

  svg.style.position = "absolute";
  row.appendChild(svg);

  // Draw arc
  requestAnimationFrame(() => requestAnimationFrame(() => {
    [glow, mid, trail, sharp].forEach(p => { p.style.strokeDashoffset = "0"; });

    // Show sparks after arc draws
    setTimeout(() => sparks.forEach(s => { s.style.opacity = "1"; }), 170);

    // Fade everything out
    setTimeout(() => {
      [glow, mid, trail, sharp].forEach(p => { p.style.opacity = "0"; });
      sparks.forEach(s => { s.style.opacity = "0"; });
    }, 280);

    setTimeout(() => svg.remove(), 520);
  }));
}

function dungeonHit() {
  if (!dng) return;
  const m = dng.queue[dng.monsterIdx];
  const hero = getHero();

  // Hero attack animation
  playHeroAttackAnim();

  const stunned = isMobStunned();

  // Equipped weapon type — gates all WM skills
  const _equippedWeapon = ITEMS_DB[hero?.equipment?.weapon];
  const _weaponType     = _equippedWeapon?.weaponType || null;

  // Dodge check (skip if stunned; WM Mace halves dodge only if mace equipped)
  let effectiveDodge = m.dodge || 0;
  if (stunned) effectiveDodge = 0;
  else if ((hero?.skills.weapon_mastery_mace || 0) > 0 && _weaponType === 'mace') effectiveDodge *= 0.5;

  if (effectiveDodge > 0 && Math.random() < effectiveDodge) {
    spawnFloater("Dodge!", "miss-float", "monsterZone");
    const sprite = document.getElementById("monsterSprite");
    if (sprite) { sprite.style.transform = "translateX(18px)"; setTimeout(()=>sprite.style.transform="",300); }
    tickStatuses();
    if (dng.heroHp <= 0) { setTimeout(()=>dungeonFailed(),500); return; }
    scheduleNextQuestion(600);
    return;
  }

  let dmg = dng.cfg.heroDmg;

  // Combo Strike crit
  const comboSkill = hero?.skills.combo_strike || 0;
  let critMult = 1;
  if (comboSkill >= 1 && dng.combo >= 3) critMult = comboSkill >= 2 ? 2 : 1.5;
  if (comboSkill >= 3 && dng.combo >= 5) critMult = 3;
  if (critMult > 1) spawnFloater(`⚡×${critMult} CRIT`, "combo-float", "monsterZone");

  // WM Axe crit (only if axe equipped)
  const wmAxe = hero?.skills.weapon_mastery_axe || 0;
  if (wmAxe > 0 && _weaponType === 'axe') {
    const critChance = (15 + (wmAxe - 1) * 6.25) / 100;
    if (Math.random() < critChance) { critMult = Math.max(critMult, 2.5); spawnFloater("🪓 CRIT!", "combo-float", "monsterZone"); }
  }

  dmg = Math.max(1, Math.round(dmg * critMult));

  // Weaken debuff: boss ability reduces hero outgoing damage by 50%
  if (dng.heroStatuses.some(s => s.type === "weaken")) {
    dmg = Math.max(1, Math.round(dmg * 0.5));
    spawnFloater("💔 -50%", "miss-float", "monsterZone");
  }

  // Legacy combo bonus (Dragon Mountain comboSystem)
  const comboBonus = dng.cfg.comboSystem ? getComboBonus(dng.combo) : 0;
  if (comboBonus > 0) { dmg += comboBonus; spawnFloater(`🔥 COMBO x${dng.combo}`, "combo-float", "monsterZone"); }

  // Block check (skip if stunned)
  if (!stunned && dmg > 0 && m.block > 0 && Math.random() < m.block) {
    spawnFloater("🔰 Block!", "miss-float", "monsterZone");
    const sp = document.getElementById("monsterSprite");
    if (sp) { sp.style.filter = "drop-shadow(0 0 12px #60a5fa) brightness(1.4)"; setTimeout(()=>{ if(sp) sp.style.filter=""; },400); }
    tickStatuses();
    if (dng.heroHp <= 0) { setTimeout(()=>dungeonFailed(),500); return; }
    scheduleNextQuestion(600);
    return;
  }

  // WM Mace armor multiplier (only if mace equipped)
  const wmMace = hero?.skills.weapon_mastery_mace || 0;
  const armorMult = (wmMace > 0 && _weaponType === 'mace') ? (1.5 + (wmMace - 1) * 0.375) : 1;

  // Armor absorption (with mace multiplier on armor hits)
  if (m.currentArmor > 0) {
    const armorDmg = Math.round(dmg * armorMult);
    const armorAbsorb = Math.min(m.currentArmor, armorDmg);
    m.currentArmor -= armorAbsorb;
    dmg = Math.max(0, dmg - Math.round(armorAbsorb / armorMult));
    if (armorAbsorb > 0) {
      spawnFloater(`🛡️ -${armorAbsorb}`, "armor-float", "monsterZone");
      const sp = document.getElementById("monsterSprite");
      if (sp) { sp.style.filter = "drop-shadow(0 0 10px #fbbf24) brightness(1.3)"; setTimeout(()=>{ if(sp) sp.style.filter=""; },350); }
    }
  }

  if (dmg > 0) {
    m.hp -= dmg;
    spawnFloater(`-${dmg}`, critMult > 1 ? "crit-monster-dmg" : "monster-dmg", "monsterZone");
    const sprite = document.getElementById("monsterSprite");
    if (sprite) {
      sprite.classList.add("hit");
      if (critMult > 1) sprite.classList.add("shake");
      setTimeout(() => { sprite.classList.remove("hit", "shake"); }, 450);
    }
    if (critMult > 1) setTimeout(() => spawnCritEffect("monsterZone", "gold"), 330);
    // Check boss phase transition after damage
    if (m.isBoss) checkBossPhase(m);
  }

  // WM Sword bleed (only if sword equipped)
  const wmSword = hero?.skills.weapon_mastery_sword || 0;
  if (wmSword > 0 && _weaponType === 'sword') {
    const bleedChance = [0.20,0.30,0.40,0.50,0.60][wmSword-1];
    if (Math.random() < bleedChance) {
      applyMonsterBleed(dng.cfg.heroDmg);
      spawnFloater("🩸 Bleed!", "monster-dmg", "monsterZone");
    }
  }

  // WM Mace stun (only if mace equipped)
  if (wmMace > 0 && _weaponType === 'mace') {
    const stunChance = (15 + (wmMace - 1) * 6.25) / 100;
    if (Math.random() < stunChance) {
      dng.mobStunEnd = Date.now() + 5000;
      spawnFloater("🔨 STUNNED!", "miss-float", "monsterZone");
      showStunBar(5);
    }
  }

  updateComboHud();
  renderDungeonMonster();
  tickStatuses();
  if (dng.heroHp <= 0) { setTimeout(()=>dungeonFailed(),500); return; }

  if (m.hp <= 0) {
    // Award XP
    const xpGain = m.isBoss ? (m.mobLevel||1)*10 : (m.mobLevel||1)*5;
    setTimeout(() => awardXP(xpGain), 200);
    dng.monsterStatuses = [];
    setTimeout(() => {
      dng.monsterIdx++;
      dng.mobStunEnd = 0;
      clearStunBar();
      dng.combo = 0; dng.comboTimerBonus = 0;
      updateComboHud();
      if (dng.monsterIdx >= dng.queue.length) { dungeonVictory(); return; }
      dng.wordIdx++;
      renderDungeonMonster();
      renderDungeonQuestion();
    }, 600);
  } else {
    scheduleNextQuestion(500);
  }
}

function updateComboHud() {
  if (!dng || !dng.cfg.comboSystem) return;
  let hud = document.getElementById("dngComboHud");
  if (!hud) return;
  const c = dng.combo;
  const bonus = getComboBonus(c);
  if (c < 2) {
    hud.style.opacity = "0";
    return;
  }
  hud.style.opacity = "1";
  const tier = c >= 7 ? "🔥🔥🔥" : c >= 5 ? "🔥🔥" : "🔥";
  hud.innerHTML = `<span class="combo-count">x${c}</span> <span class="combo-tier">${tier}</span>${bonus > 0 ? ` <span class="combo-bonus">+${bonus} dmg</span>` : ""}`;
  hud.className = "dng-combo-hud" + (c >= 7 ? " mega" : c >= 5 ? " great" : c >= 3 ? " good" : "");
}

function applyHeroDamage(rawDmg, sourceEmoji, suppressFloater = false, isCrit = false) {
  if (!dng) return 0;
  let dmg = rawDmg;

  // Poison resist (Warrior passive -30% on poison ticks — caller passes type info via sourceEmoji)
  if (sourceEmoji === "☠️") {
    const cls = getHeroClass();
    if (cls === "warrior") dmg = Math.max(1, Math.round(dmg * 0.7));
  }

  // Toughness: -10% per level, max -50%
  const hero = getHero();
  if (hero) {
    const toughnessMult = Math.max(0.5, 1 - (hero.skills.toughness || 0) * 0.1);
    dmg = Math.max(1, Math.round(dmg * toughnessMult));
  }

  // Shield block chance
  const heroBlock = dng.heroStats?.block || 0;
  if (heroBlock > 0 && Math.random() < heroBlock) {
    spawnFloater("🛡️ Block!", "miss-float", "heroHpBar");
    const heroSpr = document.getElementById("heroSprite");
    if (heroSpr) { heroSpr.classList.add("take-damage"); setTimeout(() => heroSpr.classList.remove("take-damage"), 300); }
    return 0;
  }

  // Hero armor (flat reduction)
  const armor = dng.heroStats?.armor || 0;
  if (armor > 0) {
    dmg = Math.max(0, dmg - armor);
    if (rawDmg > 0 && dmg === 0) { spawnFloater("🛡️ Blocked!", "miss-float", "heroHpBar"); }
  }

  if (dmg <= 0) return 0;
  dng.heroHp = Math.max(0, dng.heroHp - dmg);
  if (!suppressFloater) spawnFloater(`-${dmg}`, isCrit ? "crit-hero-dmg" : "hero-dmg", "heroHpBar");
  const heroSpr = document.getElementById("heroSprite");
  if (heroSpr) { heroSpr.classList.add("take-damage"); setTimeout(() => heroSpr.classList.remove("take-damage"), 400); }
  const bar = document.getElementById("heroHpBar");
  if (bar) { bar.style.animation="none"; void bar.offsetWidth; bar.style.animation="heroShake 0.3s ease"; }
  renderDungeonHero();
  return dmg;
}

function applyFreezeStatus(rounds) {
  if (!dng) return;
  applyStatus({ type: "freeze", dmg: 0, roundsLeft: rounds });
  updateFreezeOverlay(true);
  spawnFloater("❄️ Frozen!", "miss-float", "heroHpBar");
}

function updateFreezeOverlay(active) {
  let overlay = document.getElementById("dngFreezeOverlay");
  if (active) {
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "dngFreezeOverlay";
      overlay.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:5;" +
        "background:rgba(96,165,250,0.08);border:2px solid rgba(96,165,250,0.25);transition:opacity 0.3s;";
      document.getElementById("dungeonScreen").appendChild(overlay);
    }
    overlay.style.opacity = "1";
  } else {
    if (overlay) { overlay.style.opacity = "0"; setTimeout(() => overlay?.remove(), 300); }
  }
}

function applyStatus(status) {
  if (!dng) return;
  if (status.type === "bleed") {
    // Bleed stacks — each application is independent with its own timer
    dng.heroStatuses.push({ ...status });
  } else {
    const existing = dng.heroStatuses.find(s => s.type === status.type);
    if (existing) {
      existing.roundsLeft = Math.max(existing.roundsLeft, status.roundsLeft);
      existing.dmg = Math.max(existing.dmg, status.dmg);
    } else {
      dng.heroStatuses.push({ ...status });
    }
  }
  renderDungeonStatuses();
}

function tickStatuses() {
  if (!dng) return;
  let poisonTotal = 0, bleedTotal = 0, bleedCount = 0;
  dng.heroStatuses = dng.heroStatuses
    .map(s => {
      if (s.type === "poison") {
        poisonTotal += applyHeroDamage(s.dmg, "☠️", true);
      } else if (s.type === "bleed") {
        bleedTotal += applyHeroDamage(s.dmg, "🩸", true);
        bleedCount++;
      }
      return { ...s, roundsLeft: s.roundsLeft - 1 };
    })
    .filter(s => s.roundsLeft > 0);
  if (poisonTotal > 0) spawnFloater(`☠️-${poisonTotal}`, "hero-dmg", "heroHpBar");
  if (bleedTotal  > 0) spawnFloater(bleedCount > 1 ? `🩸-${bleedTotal} ×${bleedCount}` : `🩸-${bleedTotal}`, "hero-dmg", "heroHpBar");
  const stillFrozen = dng.heroStatuses.some(s => s.type === "freeze");
  if (!stillFrozen) updateFreezeOverlay(false);
  renderDungeonStatuses();
  dng.wordIdx++;

  // Boss per-turn effects
  const _bossM = dng.queue?.[dng.monsterIdx];
  if (_bossM && _bossM.hp > 0 && _bossM.isBoss) {
    triggerBossAbilities(_bossM, "per_turn");
    // Phase 3: auto-freeze every 3 rounds — dungeon mechanic, ignores boss stun
    if (dng.bossPhase === 3) {
      dng.phaseRoundCount = (dng.phaseRoundCount || 0) + 1;
      if (dng.phaseRoundCount % 3 === 0) {
        applyFreezeStatus(1);
        spawnFloater("❄️ Phase 3!", "miss-float", "heroHpBar");
      }
    }
  }
}

// ===================== BOSS ABILITIES =====================
function triggerBossAbilities(m, trigger) {
  if (!m?.abilities || isMobStunned()) return;
  for (const ability of m.abilities) {
    if (ability.trigger !== trigger) continue;
    if (Math.random() >= ability.chance) continue;
    applyBossAbility(ability);
  }
}

function applyBossAbility(ability) {
  switch (ability.type) {
    case "freeze":    applyFreezeStatus(ability.duration ?? 2); break;
    case "weaken":
      applyStatus({ type: "weaken", dmg: 0, roundsLeft: ability.duration ?? 3 });
      spawnFloater("💔 Weaken!", "miss-float", "heroHpBar");
      break;
    case "stun_hero": applyHeroStun(ability.duration ?? 5); break;
  }
}

// ===================== BOSS PHASES =====================
function checkBossPhase(m) {
  if (!m.isBoss || !m.phases) return;
  const hpPct    = (m.hp / m.maxHp) * 100;
  const newPhase = hpPct >= 70 ? 1 : hpPct >= 30 ? 2 : 3;
  if (newPhase !== dng.bossPhase) {
    dng.bossPhase       = newPhase;
    dng.phaseRoundCount = 0;
    setBossPhaseClass(newPhase);
    showPhaseTransitionBanner(newPhase);
  }
}

function setBossPhaseClass(phase) {
  const screen = document.getElementById("dungeonScreen");
  if (!screen) return;
  screen.classList.remove("boss-phase-1", "boss-phase-2", "boss-phase-3");
  screen.classList.add(`boss-phase-${phase}`);
}

function showPhaseTransitionBanner(phase) {
  const info = {
    2: { icon: "🌑", title: "PHASE 2", sub: "Words are now reversed!" },
    3: { icon: "❄️", title: "PHASE 3", sub: "Eternal Frost — frozen every 3 rounds!" },
  }[phase];
  if (!info) return;
  const el = document.createElement("div");
  el.className = "dng-phase-banner";
  el.innerHTML = `<span class="phase-icon">${info.icon}</span><span class="phase-title">${info.title}</span><span class="phase-sub">${info.sub}</span>`;
  document.getElementById("dungeonScreen")?.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function scheduleNextQuestion(delay) {
  setTimeout(() => { if (dng && !dng.done) { renderDungeonQuestion(); } }, delay);
}

// ===================== FLOATERS =====================
const _floaterSlots = {};
// X spread pattern so simultaneous floaters fan out horizontally
const _xSpread = [0, 38, -38, 22, -22, 55, -55];

function spawnFloater(text, cls, anchorId) {
  const anchor = document.getElementById(anchorId) || document.getElementById("monsterZone");
  if (!anchor) return;
  const rect = anchor.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = `dng-dmg-float ${cls}`;
  el.textContent = text;

  const now = Date.now();
  const slot = _floaterSlots[anchorId];
  if (!slot || now - slot.t > 500) {
    _floaterSlots[anchorId] = { n: 0, t: now };
  }
  const n = _floaterSlots[anchorId].n++;
  const xOff = _xSpread[n % _xSpread.length];
  const yOff = n * -14;

  el.style.left = (rect.left + rect.width / 2 - 24 + xOff) + "px";
  el.style.top  = (rect.top  + rect.height / 2 - 10 + yOff) + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

// keep old name for compat
function spawnDmgFloat(text, cls, anchor) {
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    const el = document.createElement("div");
    el.className = `dng-dmg-float ${cls}`;
    el.textContent = text;
    el.style.left = (rect.left + rect.width/2 - 24) + "px";
    el.style.top  = (rect.top + rect.height/2) + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }
}

// ===================== VICTORY / DEFEAT =====================
function dungeonVictory() {
  if (!dng) return;
  dng.done = true;
  stopDngTimer();

  // Award gold
  const goldEarned = rollStat(dng.cfg.goldReward ?? [0, 5]);
  awardGold(goldEarned);

  const screen = document.getElementById("dungeonScreen");
  const res = document.createElement("div");
  res.className = "dng-result-screen";
  const hero = getHero();
  const xpNeeded = hero ? getXPForLevel(hero.level) : 100;
  const xpPct = hero ? Math.min(100, Math.round((hero.xp / xpNeeded) * 100)) : 0;
  res.innerHTML = `
    <div class="dng-result-emoji">🏆</div>
    <div class="dng-result-title">Dungeon Cleared!</div>
    <div class="dng-result-sub">
      You conquered <strong style="color:#f59e0b">${dng.cfg.name}</strong><br>
      with <strong style="color:#4ade80">${dng.heroHp} HP</strong> remaining.
    </div>
    <div style="display:flex;gap:16px;justify-content:center;margin:4px 0;font-size:13px;font-weight:700">
      <span style="color:#fbbf24">🪙 +${goldEarned} Gold</span>
      ${hero ? `<span style="color:#818cf8">✦ Lv${hero.level} · ${xpPct}% XP</span>` : ""}
    </div>
    <button class="dng-result-btn" onclick="exitDungeon()">← Back to Study</button>
    <button class="dng-result-btn secondary" onclick="replayDungeon()">▶ Play Again</button>
  `;
  screen.appendChild(res);
}

function dungeonFailed() {
  if (!dng) return;
  dng.done = true;
  stopDngTimer();
  const screen = document.getElementById("dungeonScreen");
  const res = document.createElement("div");
  res.className = "dng-result-screen";
  const n = dng.monsterIdx;
  res.innerHTML = `
    <div class="dng-result-emoji">💀</div>
    <div class="dng-result-title">Dungeon Failed</div>
    <div class="dng-result-sub">
      You defeated <strong style="color:#f59e0b">${n}</strong> monster${n!==1?"s":""}<br>before falling in battle.
    </div>
    <button class="dng-result-btn" onclick="replayDungeon()">▶ Try Again</button>
    <button class="dng-result-btn secondary" onclick="exitDungeon()">← Back to Study</button>
  `;
  screen.appendChild(res);
}

