// ===================== SOUND ENGINE =====================
// Web Audio API — no files needed, all sounds generated procedurally
// Usage: DungeonSounds.play('sword') / DungeonSounds.play('monster_hit') etc.

const DungeonSounds = (() => {
  let _ctx = null;
  let _enabled = true;
  let _volume = 0.5;

  function ctx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Resume if suspended (browser autoplay policy)
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }

  // ── Core helpers ──────────────────────────────────────────────

  function makeGain(vol) {
    const g = ctx().createGain();
    g.gain.value = vol * _volume;
    g.connect(ctx().destination);
    return g;
  }

  function osc(type, freq, gain, start, end, gainNode) {
    const o = ctx().createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    o.connect(gainNode);
    o.start(start);
    o.stop(end);
    return o;
  }

  function ramp(gainNode, fromVol, toVol, start, end) {
    gainNode.gain.setValueAtTime(fromVol * _volume, start);
    gainNode.gain.linearRampToValueAtTime(toVol * _volume, end);
  }

  function expRamp(gainNode, fromVol, toVol, start, end) {
    gainNode.gain.setValueAtTime(Math.max(0.001, fromVol * _volume), start);
    gainNode.gain.exponentialRampToValueAtTime(Math.max(0.001, toVol * _volume), end);
  }

  // Noise burst (для ударов, ударов щитом)
  function noise(duration, gainNode, filterFreq = 2000) {
    const c = ctx();
    const bufSize = c.sampleRate * duration;
    const buf = c.createBuffer(1, bufSize, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

    const src = c.createBufferSource();
    src.buffer = buf;

    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;

    src.connect(filter);
    filter.connect(gainNode);
    src.start(c.currentTime);
    return src;
  }

  // ── HERO WEAPON SOUNDS ────────────────────────────────────────

  // Меч — острый свист + металлический щелчок
  function playSword() {
    playCombo('sword_swipe', 'hit_flesh');
  }

  // Топор — тяжёлый рубящий удар с низким гулом
  function playAxe() {
    const c = ctx();
    const now = c.currentTime;

    // Свист топора в воздухе (ниже чем меч, грубее)
    const g1 = makeGain(0.2);
    const o1 = c.createOscillator();
    o1.type = 'sawtooth';
    o1.frequency.setValueAtTime(900, now);
    o1.frequency.exponentialRampToValueAtTime(120, now + 0.18);
    expRamp(g1, 0.2, 0.001, now, now + 0.2);
    o1.connect(g1); o1.start(now); o1.stop(now + 0.2);

    // Тяжёлый удар — низкий шум
    const g2 = makeGain(0.35);
    noise(0.15, g2, 800);
    expRamp(g2, 0.35, 0.001, now + 0.1, now + 0.3);

    // Глубокий бас-удар (удар по плоти/броне)
    const g3 = makeGain(0.25);
    const o3 = c.createOscillator();
    o3.type = 'square';
    o3.frequency.setValueAtTime(80, now + 0.1);
    o3.frequency.exponentialRampToValueAtTime(30, now + 0.35);
    expRamp(g3, 0.25, 0.001, now + 0.1, now + 0.38);
    o3.connect(g3); o3.start(now + 0.1); o3.stop(now + 0.38);
  }

  // Булава — тупой дробящий удар, тяжёлый thud
  function playMace() {
    const c = ctx();
    const now = c.currentTime;

    // Нет свиста — булава просто летит
    // Главное — удар: глухой бас
    const g1 = makeGain(0.4);
    const o1 = c.createOscillator();
    o1.type = 'square';
    o1.frequency.setValueAtTime(60, now);
    o1.frequency.exponentialRampToValueAtTime(20, now + 0.4);
    expRamp(g1, 0.4, 0.001, now, now + 0.45);
    o1.connect(g1); o1.start(now); o1.stop(now + 0.45);

    // Noise — грохот удара
    const g2 = makeGain(0.45);
    noise(0.12, g2, 600);
    expRamp(g2, 0.45, 0.001, now + 0.05, now + 0.35);

    // Sub-bass punch
    const g3 = makeGain(0.3);
    const o3 = c.createOscillator();
    o3.type = 'sine';
    o3.frequency.setValueAtTime(100, now + 0.02);
    o3.frequency.exponentialRampToValueAtTime(25, now + 0.3);
    expRamp(g3, 0.3, 0.001, now + 0.02, now + 0.35);
    o3.connect(g3); o3.start(now + 0.02); o3.stop(now + 0.35);
  }

  // Щит (Shield Bash) — металлический гул + удар
  function playShieldBash() {
    const c = ctx();
    const now = c.currentTime;

    // Удар щита — metallic clang
    const g1 = makeGain(0.3);
    const o1 = c.createOscillator();
    o1.type = 'square';
    o1.frequency.setValueAtTime(280, now);
    o1.frequency.exponentialRampToValueAtTime(140, now + 0.08);
    expRamp(g1, 0.3, 0.001, now, now + 0.35);
    o1.connect(g1); o1.start(now); o1.stop(now + 0.35);

    // Металлический резонанс (overtone)
    const g2 = makeGain(0.15);
    const o2 = c.createOscillator();
    o2.type = 'triangle';
    o2.frequency.setValueAtTime(560, now);
    o2.frequency.exponentialRampToValueAtTime(280, now + 0.25);
    expRamp(g2, 0.15, 0.001, now, now + 0.4);
    o2.connect(g2); o2.start(now); o2.stop(now + 0.4);

    // Noise — грохот столкновения
    const g3 = makeGain(0.38);
    noise(0.09, g3, 3000);
    expRamp(g3, 0.38, 0.001, now, now + 0.2);

    // Низкий удар тела
    const g4 = makeGain(0.2);
    const o4 = c.createOscillator();
    o4.type = 'sine';
    o4.frequency.setValueAtTime(90, now + 0.04);
    o4.frequency.exponentialRampToValueAtTime(35, now + 0.3);
    expRamp(g4, 0.2, 0.001, now + 0.04, now + 0.32);
    o4.connect(g4); o4.start(now + 0.04); o4.stop(now + 0.32);
  }

  // ── MONSTER SOUNDS ────────────────────────────────────────────

  // Удар монстра по герою — грубый тяжёлый удар
  function playMonsterHit() {
    const c = ctx();
    const now = c.currentTime;

    // Тупой удар — низкий noise burst
    const g1 = makeGain(0.4);
    noise(0.1, g1, 500);
    expRamp(g1, 0.4, 0.001, now + 0.05, now + 0.28);

    // Низкий рычаще-тональный звук
    const g2 = makeGain(0.22);
    const o2 = c.createOscillator();
    o2.type = 'sawtooth';
    o2.frequency.setValueAtTime(55, now);
    o2.frequency.exponentialRampToValueAtTime(28, now + 0.35);
    expRamp(g2, 0.22, 0.001, now, now + 0.38);
    o2.connect(g2); o2.start(now); o2.stop(now + 0.38);
  }

  function playMonsterDeath(mobName) {
    const group = getDeathGroup(mobName);
    const key = `death_${group}`;
    const files = FILE_SOUNDS[key];
    if (files?.length) {
      const audio = new Audio(files[Math.floor(Math.random() * files.length)]);
      audio.volume = _volume;
      audio.play().catch(() => {});
    }
  }

  // ── GAME EVENTS ───────────────────────────────────────────────

  // Правильный ответ — короткий позитивный pip
  function playCorrect() {
    const c = ctx();
    const now = c.currentTime;
    const g = makeGain(0.18);
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(520, now);
    o.frequency.setValueAtTime(660, now + 0.06);
    expRamp(g, 0.18, 0.001, now + 0.04, now + 0.18);
    o.connect(g); o.start(now); o.stop(now + 0.18);
  }

  // Неправильный ответ — низкий негативный бип
  function playWrong() {
    const c = ctx();
    const now = c.currentTime;
    const g = makeGain(0.2);
    const o = c.createOscillator();
    o.type = 'square';
    o.frequency.setValueAtTime(200, now);
    o.frequency.setValueAtTime(140, now + 0.08);
    expRamp(g, 0.2, 0.001, now + 0.04, now + 0.22);
    o.connect(g); o.start(now); o.stop(now + 0.22);
  }

  // Получил золото — монетный звон
  function playGold() {
    const c = ctx();
    const now = c.currentTime;
    [0, 0.07, 0.14].forEach((delay, i) => {
      const g = makeGain(0.12 - i * 0.02);
      const o = c.createOscillator();
      o.type = 'sine';
      o.frequency.value = [1046, 1318, 1568][i];
      expRamp(g, 0.12 - i * 0.02, 0.001, now + delay + 0.02, now + delay + 0.25);
      o.connect(g); o.start(now + delay); o.stop(now + delay + 0.25);
    });
  }

  // Победа / данж пройден — восходящий аккорд
  function playVictory() {
    const c = ctx();
    const now = c.currentTime;
    const notes = [262, 330, 392, 523, 659];
    notes.forEach((freq, i) => {
      const g = makeGain(0.14);
      const o = c.createOscillator();
      o.type = 'triangle';
      o.frequency.value = freq;
      ramp(g, 0, 0.14, now + i * 0.1, now + i * 0.1 + 0.05);
      expRamp(g, 0.14, 0.001, now + i * 0.1 + 0.15, now + i * 0.1 + 0.55);
      o.connect(g); o.start(now + i * 0.1); o.stop(now + i * 0.1 + 0.55);
    });
  }

  // Смерть героя — нисходящий трагичный звук
  function playDeath() {
    const c = ctx();
    const now = c.currentTime;
    const g = makeGain(0.28);
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(330, now);
    o.frequency.exponentialRampToValueAtTime(82, now + 0.9);
    expRamp(g, 0.28, 0.001, now + 0.3, now + 1.1);
    o.connect(g); o.start(now); o.stop(now + 1.1);

    const g2 = makeGain(0.15);
    noise(0.4, g2, 800);
    expRamp(g2, 0.15, 0.001, now + 0.2, now + 0.7);
  }

  // Level Up — торжественный восходящий звук
  function playLevelUp() {
    const c = ctx();
    const now = c.currentTime;
    const notes = [392, 494, 587, 784];
    notes.forEach((freq, i) => {
      const g = makeGain(0.16);
      const o = c.createOscillator();
      o.type = 'triangle';
      o.frequency.value = freq;
      ramp(g, 0, 0.16, now + i * 0.12, now + i * 0.12 + 0.05);
      expRamp(g, 0.16, 0.001, now + i * 0.12 + 0.18, now + i * 0.12 + 0.7);
      o.connect(g); o.start(now + i * 0.12); o.stop(now + i * 0.12 + 0.7);
    });
  }

  // Крит — резкий высокочастотный удар поверх обычного
  function playCrit() {
    playFileSound('weapon_crit');
  }

  // Уклонение монстра — whoosh мимо
  function playDodge() {
    const c = ctx();
    const now = c.currentTime;
    const g = makeGain(0.14);
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(600, now);
    o.frequency.exponentialRampToValueAtTime(200, now + 0.15);
    expRamp(g, 0.14, 0.001, now, now + 0.18);
    o.connect(g); o.start(now); o.stop(now + 0.18);
  }

  // Блок монстра — металлический clang
  function playBlock() {
    playFileSound('weapon_block');
  }

  // Таймер заканчивается — тревожный пульс
  function playTimerDanger() {
    const c = ctx();
    const now = c.currentTime;
    const g = makeGain(0.14);
    const o = c.createOscillator();
    o.type = 'square';
    o.frequency.value = 440;
    ramp(g, 0, 0.14, now, now + 0.02);
    expRamp(g, 0.14, 0.001, now + 0.04, now + 0.12);
    o.connect(g); o.start(now); o.stop(now + 0.12);
  }

  // Портал открывается — магическое whoosh + shimmer
  function playPortal() {
    const c = ctx();
    const now = c.currentTime;
    // Shimmer — быстрое вибрато
    const g1 = makeGain(0.15);
    const o1 = c.createOscillator();
    o1.type = 'sine';
    o1.frequency.setValueAtTime(880, now);
    o1.frequency.linearRampToValueAtTime(1320, now + 0.5);
    const lfo = c.createOscillator();
    lfo.frequency.value = 18;
    const lfoGain = c.createGain();
    lfoGain.gain.value = 80;
    lfo.connect(lfoGain);
    lfoGain.connect(o1.frequency);
    lfo.start(now); lfo.stop(now + 0.5);
    ramp(g1, 0, 0.15, now, now + 0.1);
    expRamp(g1, 0.15, 0.001, now + 0.35, now + 0.55);
    o1.connect(g1); o1.start(now); o1.stop(now + 0.55);
    // Низкий whoosh
    const g2 = makeGain(0.2);
    noise(0.5, g2, 1500);
    ramp(g2, 0, 0.2, now, now + 0.15);
    expRamp(g2, 0.2, 0.001, now + 0.3, now + 0.6);
  }

  // ── FILE-BASED SOUNDS ─────────────────────────────────────────

  // Discovered file lists — populated async on page load
  const FILE_SOUNDS = {
    sword_swipe:  [],
    hit_flesh:    [],
    hit_bone:       [],
    hit_dragon_1:   [],
    hit_dragon_2:   [],
    hit_ice:        [],
    hit_metal_1:    [],
    hit_metal_2:    [],
    hit_spider_web:    [],
    hit_stone_1:       [],
    hit_stone_2:    [],
    hit_void_1:     [],
    hit_void_2:     [],
    weapon_crit:  [],
    weapon_miss:  [],
    weapon_block: [],
    mob_melee:          [],
    mob_fist:           [],
    mob_mage:           [],
    mob_knights:        [],
    mob_insects:        [],
    mob_bow:            [],
    mob_animals_flying: [],
    mob_animals_ground: [],
    mob_animals_dragon: [],
    death_goblin:     [],
    death_skeleton:   [],
    death_knight:     [],
    death_beast:      [],
    death_insect:     [],
    death_spirit:     [],
    death_stone:      [],
    death_ice:        [],
    death_dragon:     [],
    death_spider_web: [],
  };

  // Probe a folder: try 1.mp3, 2.mp3, ... until 404. Fills target array.
  async function discoverFolder(folder, targetArray) {
    let i = 1;
    while (true) {
      const path = `sounds/${folder}/${i}.mp3`;
      try {
        const res = await fetch(path, { method: 'HEAD' });
        if (!res.ok) break;
        targetArray.push(path);
        i++;
      } catch { break; }
    }
  }

  // Run discovery for all folders in parallel on page load
  const FOLDER_MAP = {
    sword_swipe:  'weapons/sword/swipe',
    hit_flesh:    'hits/flesh',
    hit_bone:       'hits/bone',
    hit_dragon_1:   'hits/dragon/1',
    hit_dragon_2:   'hits/dragon/2',
    hit_ice:        'hits/ice',
    hit_metal_1:    'hits/metal/1',
    hit_metal_2:    'hits/metal/2',
    hit_spider_web: 'hits/spider web',
    hit_stone_1:    'hits/stone/1',
    hit_stone_2:    'hits/stone/2',
    hit_void_1:     'hits/void/1',
    hit_void_2:     'hits/void/2',
    weapon_crit:  'weapons/crit',
    weapon_miss:  'weapons/miss',
    weapon_block: 'weapons/block',
    mob_melee:          'mobs/melee',
    mob_fist:           'mobs/fist',
    mob_mage:           'mobs/mage cast',
    mob_knights:        'mobs/knights',
    mob_insects:        'mobs/insects',
    mob_bow:            'mobs/bow',
    mob_animals_flying: 'mobs/animals/flying animals',
    mob_animals_ground: 'mobs/animals/not flying animals',
    mob_animals_dragon: 'mobs/animals/dragons',
    death_goblin:     'mobs/death/goblin',
    death_skeleton:   'mobs/death/skeleton',
    death_knight:     'mobs/death/knight',
    death_beast:      'mobs/death/beast',
    death_insect:     'mobs/death/insect',
    death_spirit:     'mobs/death/spirit',
    death_stone:      'mobs/death/stone',
    death_ice:        'mobs/death/ice',
    death_dragon:     'mobs/death/dragon',
    death_spider_web: 'mobs/death/spider_web',
  };

  Promise.all(
    Object.entries(FOLDER_MAP).map(([key, folder]) => discoverFolder(folder, FILE_SOUNDS[key]))
  );

  // Mob name → sound category key
  const MOB_SOUND_MAP = {
    // ── Goblins ──────────────────────────────────────────────
    'Goblin Scout':      'mob_melee',
    'Goblin Warrior':    'mob_melee',
    'Goblin Soldier':    'mob_melee',
    'Goblin Berserker':  'mob_melee',
    'Goblin Brute':      'mob_fist',
    'Goblin Archer':     'mob_bow',
    'Goblin Shaman':     'mob_mage',
    'Goblin King':       'mob_melee',
    'Junk Goblin':       'mob_melee',
    'Spore Goblin':      'mob_mage',
    'Fungal Shaman':     'mob_mage',
    'Mushroom Crawler':  'mob_fist',
    'Myconid Guard':     'mob_fist',
    // ── Trolls ───────────────────────────────────────────────
    'River Troll':       'mob_fist',
    'Bridge Troll':      'mob_fist',
    'Troll Shaman':      'mob_mage',
    'Stone Troll':       'mob_fist',
    'Lava Troll':        'mob_fist',
    // ── Golems ───────────────────────────────────────────────
    'Scrap Golem':       'mob_fist',
    'Thread Golem':      'mob_fist',
    'Tombstone Golem':   'mob_fist',
    'Sarcophagus Golem': 'mob_fist',
    'Frozen Golem':      'mob_fist',
    'Avalanche Golem':   'mob_fist',
    'Scorched Golem':    'mob_fist',
    'Fossil Golem':      'mob_fist',
    'Obsidian Golem':    'mob_fist',
    'Fractured Golem':   'mob_fist',
    // ── Spiders & insects ────────────────────────────────────
    'Baby Spider':       'mob_insects',
    'Cave Spider':       'mob_insects',
    'Poison Spider':     'mob_insects',
    'Bog Spider':        'mob_insects',
    'Tomb Spider':       'mob_insects',
    'Spider Matriarch':  'mob_insects',
    'Phantom Weaver':    'mob_insects',
    'Mirror Spider':     'mob_insects',
    'Egg Guardian':      'mob_fist',
    'Silk Wraith':       'mob_insects',
    'Spider Queen':      'mob_insects',
    'Ash Crawler':       'mob_insects',
    // ── Skeletons & undead ───────────────────────────────────
    'Skeleton Warrior':  'mob_melee',
    'Cocooned Skeleton': 'mob_melee',
    'Skeleton Guard':    'mob_knights',
    'Dark Knight':       'mob_knights',
    'Bone Archer':       'mob_bow',
    'Catapult Skeleton': 'mob_bow',
    'Bone Knight':       'mob_knights',
    'Ancient Revenant':  'mob_melee',
    'Fortress Wraith':   'mob_melee',
    // ── Wraiths (general ethereal melee) ─────────────────────
    'Blizzard Wraith':   'mob_melee',
    'Dark Wraith':       'mob_melee',
    'Mirror Wraith':     'mob_melee',
    'Shard Wraith':      'mob_melee',
    'Ember Wraith':      'mob_melee',
    'Throne Wraith':     'mob_melee',
    // ── Mages & liches ───────────────────────────────────────
    'Ice Mage':          'mob_mage',
    'Ice Lich':          'mob_mage',
    'Crown of Ash':      'mob_mage',
    // ── Knights ──────────────────────────────────────────────
    'Rust Knight':       'mob_knights',
    'Dragon Knight':     'mob_knights',
    'Ashen Knight':      'mob_knights',
    // ── Archers ──────────────────────────────────────────────
    'Frost Archer':      'mob_bow',
    'Shade Archer':      'mob_bow',
    // ── Animals: ground ──────────────────────────────────────
    'Wolf Rider':        'mob_animals_ground',
    'Tundra Wolf Pack':  'mob_animals_ground',
    'Cinder Hound':      'mob_animals_ground',
    'Glacial Worm':      'mob_animals_ground',
    'Frost Yeti':        'mob_fist',
    'Frost Giant':       'mob_fist',
    // ── Animals: flying ──────────────────────────────────────
    'Ice Gargoyle':      'mob_animals_flying',
    'Storm Harpy':       'mob_animals_flying',
    'Ridge Harpy':       'mob_animals_flying',
    'Wyvern Scout':      'mob_animals_flying',
    'Ancient Wyvern':    'mob_animals_flying',
    // ── Dragons ──────────────────────────────────────────────
    'Fire Drake':        'mob_animals_dragon',
    'Cinder Dragon':     'mob_animals_dragon',
    'Ancient Dragon':    'mob_animals_dragon',
    'Bone Drake':        'mob_animals_dragon',
    'Venom Drake':       'mob_animals_dragon',
    'Volcanic Drake':    'mob_animals_dragon',
    // ── Goblin biome extras ───────────────────────────────────
    'War Drummer':       'mob_melee',
    'Iron Scavenger':    'mob_melee',
    'Swamp Hag':         'mob_mage',
    // ── Spider biome extras ───────────────────────────────────
    'Web Spinner':       'mob_insects',
    'Brood Tender':      'mob_insects',
    'Broodling Swarm':   'mob_insects',
    'Marsh Lurker':      'mob_insects',
    'Labyrinth Horror':  'mob_insects',
    'Silk Shade':        'mob_insects',
    // ── Skeleton/undead biome extras ─────────────────────────
    'Crypt Crawler':     'mob_melee',
    'Grave Revenant':    'mob_melee',
    'Rot Walker':        'mob_melee',
    'Decay Walker':      'mob_melee',
    'Wailing Specter':   'mob_melee',
    'Cursed Digger':     'mob_melee',
    'Bone Sentinel':     'mob_knights',
    'Mummified Pharaoh': 'mob_mage',
    'Plague Acolyte':    'mob_mage',
    'Ossified Titan':    'mob_fist',
    // ── Frozen biome extras ───────────────────────────────────
    'Frozen Revenant':   'mob_melee',
    'Frozen Titan':      'mob_fist',
    'Frozen Leviathan':  'mob_fist',
    'Permafrost Crawler':'mob_animals_ground',
    'Tundra Specter':    'mob_melee',
    'Blizzard Shade':    'mob_melee',
    // ── Shadow biome extras ───────────────────────────────────
    'Shadow Lord':       'mob_mage',
    'Shadow Sprite':     'mob_melee',
    'Glass Stalker':     'mob_melee',
    'Echo Shade':        'mob_melee',
    'Mirror Shade':      'mob_melee',
    'Null Shade':        'mob_melee',
    'Pestilence Shade':  'mob_melee',
    'Final Shade':       'mob_melee',
    'Illusion Weaver':   'mob_mage',
    'Soul Drinker':      'mob_mage',
    // ── Dragon biome extras ───────────────────────────────────
    'Lava Hound':        'mob_animals_ground',
    'Magma Elemental':   'mob_fist',
    'Molten Sentinel':   'mob_fist',
    // ── Void biome ────────────────────────────────────────────
    'Void Beast':        'mob_fist',
    'Void Spawn':        'mob_melee',
    'Void Stalker':      'mob_melee',
    'Void Tendril':      'mob_melee',
    'Void Wisp':         'mob_mage',
    'Void Herald':       'mob_mage',
    'Null Entity':       'mob_mage',
    'Abyss Crawler':     'mob_melee',
    'Hollow Crawler':    'mob_melee',
    'Shard Elemental':   'mob_fist',
    'Crystal Elemental': 'mob_fist',
    'Entropy Elemental': 'mob_mage',
    'Entropy Wisp':      'mob_mage',
    'Rift Walker':       'mob_melee',
    // ── Bosses / special ─────────────────────────────────────
    'Threshold Guardian':'mob_fist',
    'Overlord':          'mob_fist',
    'Proto Beast':       'mob_fist',
    'The Nameless':      'mob_mage',
    'The Inevitable':    'mob_mage',
    'The Doppelganger':  'mob_melee',
    'Formless One':      'mob_mage',
    'Dream Merchant':    'mob_mage',
    'Dimensional Horror':'mob_fist',
    'Reflection Horror': 'mob_mage',
    'Expanse Horror':    'mob_fist',
    'Unraveling Horror': 'mob_mage',
    'End Walker':        'mob_melee',
    'Unborn Specter':    'mob_melee',
    'Fear Monger':       'mob_mage',
  };

  function playCombo(swipeKey, hitKey) {
    const layer1 = FILE_SOUNDS[swipeKey];
    const layer2 = FILE_SOUNDS[hitKey];
    if (!layer1?.length || !layer2?.length) return;
    const a1 = new Audio(layer1[Math.floor(Math.random() * layer1.length)]);
    const a2 = new Audio(layer2[Math.floor(Math.random() * layer2.length)]);
    a1.volume = _volume;
    a2.volume = _volume * 0.75;
    Promise.all([
      new Promise(r => { a1.addEventListener('canplaythrough', r, { once: true }); a1.load(); }),
      new Promise(r => { a2.addEventListener('canplaythrough', r, { once: true }); a2.load(); }),
    ]).then(() => {
      a1.play().catch(() => {});
      setTimeout(() => a2.play().catch(() => {}), 200);
    });
  }

  function playFileSound(key) {
    const files = FILE_SOUNDS[key];
    if (!files || !files.length) return;
    const audio = new Audio(files[Math.floor(Math.random() * files.length)]);
    audio.volume = _volume;
    audio.play().catch(() => {});
  }

  const MOB_MATERIAL_MAP = {
    // 🩸 FLESH
    'Goblin Scout': 'flesh', 'Goblin Shaman': 'flesh', 'Goblin Brute': 'flesh',
    'Goblin Archer': 'flesh', 'Goblin Berserker': 'flesh', 'Spore Goblin': 'flesh',
    'Mushroom Crawler': 'flesh', 'Fungal Shaman': 'flesh', 'Myconid Guard': 'flesh',
    'Junk Goblin': 'flesh', 'River Troll': 'flesh', 'Bridge Troll': 'flesh',
    'Troll Shaman': 'flesh', 'War Drummer': 'flesh', 'Swamp Hag': 'flesh',
    'Goblin King': 'flesh',
    'Cave Spider': 'flesh', 'Poison Spider': 'flesh', 'Spider Matriarch': 'flesh',
    'Tomb Spider': 'flesh', 'Silk Wraith': 'flesh', 'Bog Spider': 'flesh',
    'Phantom Weaver': 'flesh', 'Mirror Spider': 'flesh', 'Egg Guardian': 'flesh',
    'Web Spinner': 'flesh', 'Brood Tender': 'flesh', 'Broodling Swarm': 'flesh',
    'Marsh Lurker': 'flesh', 'Labyrinth Horror': 'flesh', 'Silk Shade': 'flesh',
    'Spider Queen': 'flesh',
    'Plague Acolyte': 'flesh', 'Rot Walker': 'flesh', 'Diseased Hound': 'flesh',
    'Pestilence Shade': 'flesh', 'Ancient Revenant': 'flesh',
    'Wolf Rider': 'flesh', 'Tundra Wolf Pack': 'flesh',
    'Venom Drake': 'flesh',
    // 🦴 BONE
    'Skeleton Warrior': 'bone', 'Skeleton Guard': 'bone', 'Bone Archer': 'bone',
    'Catapult Skeleton': 'bone', 'Crypt Crawler': 'bone', 'Grave Revenant': 'bone',
    'Decay Walker': 'bone', 'Ossified Titan': 'bone', 'Cursed Digger': 'bone',
    'Bone Knight': 'bone', 'Bone Drake': 'bone',
    // ⚙️ METAL
    'Goblin Warrior': 'metal', 'Goblin Soldier': 'metal', 'Iron Scavenger': 'metal',
    'Scrap Golem': 'metal', 'Rust Knight': 'metal',
    'Dark Knight': 'metal', 'Bone Sentinel': 'metal',
    'Dragon Knight': 'metal', 'Throne Wraith': 'metal', 'Ashen Knight': 'metal',
    // 🪨 STONE
    'Stone Troll': 'stone',
    'Tombstone Golem': 'stone', 'Mummified Pharaoh': 'stone', 'Sarcophagus Golem': 'stone',
    'Lava Hound': 'stone', 'Ash Crawler': 'stone', 'Ember Wraith': 'stone',
    'Scorched Golem': 'stone', 'Cinder Hound': 'stone', 'Lava Troll': 'stone',
    'Molten Sentinel': 'stone', 'Ridge Harpy': 'stone', 'Fossil Golem': 'stone',
    'Crown of Ash': 'stone', 'Magma Elemental': 'stone',
    // 🧊 ICE
    'Ice Mage': 'ice', 'Frozen Golem': 'ice', 'Frost Archer': 'ice',
    'Glacial Worm': 'ice', 'Ice Gargoyle': 'ice', 'Storm Harpy': 'ice',
    'Blizzard Wraith': 'ice', 'Avalanche Golem': 'ice', 'Frost Yeti': 'ice',
    'Ice Lich': 'ice', 'Frozen Revenant': 'ice', 'Frozen Titan': 'ice',
    'Frozen Leviathan': 'ice', 'Permafrost Crawler': 'ice', 'Tundra Specter': 'ice',
    'Blizzard Shade': 'ice', 'Crystal Elemental': 'ice', 'Frost Giant': 'ice',
    // 👻 VOID/ETHEREAL
    'Dark Wraith': 'void', 'Shade Archer': 'void', 'Obsidian Golem': 'void',
    'Mirror Wraith': 'void', 'Shadow Lord': 'void', 'Shadow Sprite': 'void',
    'Glass Stalker': 'void', 'Echo Shade': 'void', 'Mirror Shade': 'void',
    'Null Shade': 'void', 'Final Shade': 'void', 'Illusion Weaver': 'void',
    'Shard Wraith': 'void',
    'Abyss Crawler': 'void', 'Fractured Golem': 'void', 'Shard Elemental': 'void',
    'Entropy Elemental': 'void', 'Entropy Wisp': 'void', 'Void Beast': 'void',
    'Void Spawn': 'void', 'Void Stalker': 'void', 'Void Tendril': 'void',
    'Void Wisp': 'void', 'Void Herald': 'void', 'Null Entity': 'void',
    'Hollow Crawler': 'void', 'Rift Walker': 'void', 'Dimensional Horror': 'void',
    'Expanse Horror': 'void', 'Reflection Horror': 'void', 'Unraveling Horror': 'void',
    'End Walker': 'void', 'Unborn Specter': 'void', 'The Doppelganger': 'void',
    'The Inevitable': 'void', 'The Nameless': 'void', 'Formless One': 'void',
    'Fear Monger': 'void', 'Dream Merchant': 'void', 'Proto Beast': 'void',
    'Overlord': 'void', 'Threshold Guardian': 'void',
    'Wailing Specter': 'void', 'Soul Drinker': 'void', 'Fortress Wraith': 'void',
    // 🐉 DRAGON SCALE
    'Fire Drake': 'dragon', 'Wyvern Scout': 'dragon', 'Volcanic Drake': 'dragon',
    'Ancient Wyvern': 'dragon', 'Cinder Dragon': 'dragon', 'Ancient Dragon': 'dragon',
    // 🕸️ SPIDER WEB
    'Thread Golem': 'spider web', 'Cocooned Skeleton': 'spider web',
  };

  const MOB_DEATH_MAP = {
    // goblin
    'Goblin Scout': 'goblin', 'Goblin Warrior': 'goblin', 'Goblin Soldier': 'goblin',
    'Goblin Shaman': 'goblin', 'Goblin Brute': 'goblin', 'Goblin Archer': 'goblin',
    'Goblin Berserker': 'goblin', 'Spore Goblin': 'goblin', 'Mushroom Crawler': 'goblin',
    'Fungal Shaman': 'goblin', 'Myconid Guard': 'goblin', 'Junk Goblin': 'goblin',
    'Iron Scavenger': 'goblin', 'River Troll': 'goblin', 'Bridge Troll': 'goblin',
    'Troll Shaman': 'goblin', 'War Drummer': 'goblin', 'Swamp Hag': 'goblin',
    'Goblin King': 'goblin',
    // skeleton
    'Skeleton Warrior': 'skeleton', 'Skeleton Guard': 'skeleton', 'Bone Archer': 'skeleton',
    'Catapult Skeleton': 'skeleton', 'Crypt Crawler': 'skeleton', 'Grave Revenant': 'skeleton',
    'Decay Walker': 'skeleton', 'Ossified Titan': 'skeleton', 'Cursed Digger': 'skeleton',
    'Bone Knight': 'skeleton', 'Dark Knight': 'skeleton', 'Bone Sentinel': 'skeleton',
    'Plague Acolyte': 'skeleton', 'Rot Walker': 'skeleton', 'Diseased Hound': 'skeleton',
    'Pestilence Shade': 'skeleton', 'Ancient Revenant': 'skeleton',
    // knight
    'Rust Knight': 'knight', 'Dragon Knight': 'knight', 'Throne Wraith': 'knight',
    'Ashen Knight': 'knight',
    // beast
    'Wolf Rider': 'beast', 'Tundra Wolf Pack': 'beast',
    'Venom Drake': 'goblin', 'Bone Drake': 'skeleton',
    // insect
    'Cave Spider': 'insect', 'Poison Spider': 'insect', 'Spider Matriarch': 'insect',
    'Tomb Spider': 'insect', 'Silk Wraith': 'insect', 'Bog Spider': 'insect',
    'Phantom Weaver': 'insect', 'Mirror Spider': 'insect', 'Egg Guardian': 'insect',
    'Web Spinner': 'insect', 'Brood Tender': 'insect', 'Broodling Swarm': 'insect',
    'Marsh Lurker': 'insect', 'Labyrinth Horror': 'insect', 'Silk Shade': 'insect',
    'Spider Queen': 'insect',
    // spirit
    'Dark Wraith': 'spirit', 'Shade Archer': 'spirit', 'Mirror Wraith': 'spirit',
    'Shadow Lord': 'spirit', 'Shadow Sprite': 'spirit', 'Glass Stalker': 'spirit',
    'Echo Shade': 'spirit', 'Mirror Shade': 'spirit', 'Null Shade': 'spirit',
    'Final Shade': 'spirit', 'Illusion Weaver': 'spirit', 'Shard Wraith': 'spirit',
    'Abyss Crawler': 'spirit', 'Fractured Golem': 'spirit', 'Shard Elemental': 'spirit',
    'Entropy Elemental': 'spirit', 'Entropy Wisp': 'spirit', 'Void Beast': 'spirit',
    'Void Spawn': 'spirit', 'Void Stalker': 'spirit', 'Void Tendril': 'spirit',
    'Void Wisp': 'spirit', 'Void Herald': 'spirit', 'Null Entity': 'spirit',
    'Hollow Crawler': 'spirit', 'Rift Walker': 'spirit', 'Dimensional Horror': 'spirit',
    'Expanse Horror': 'spirit', 'Reflection Horror': 'spirit', 'Unraveling Horror': 'spirit',
    'End Walker': 'spirit', 'Unborn Specter': 'spirit', 'The Doppelganger': 'spirit',
    'The Inevitable': 'spirit', 'The Nameless': 'spirit', 'Formless One': 'spirit',
    'Fear Monger': 'spirit', 'Dream Merchant': 'spirit', 'Proto Beast': 'spirit',
    'Overlord': 'spirit', 'Threshold Guardian': 'spirit',
    'Wailing Specter': 'spirit', 'Soul Drinker': 'spirit', 'Fortress Wraith': 'spirit',
    // stone
    'Stone Troll': 'stone', 'Tombstone Golem': 'stone', 'Mummified Pharaoh': 'stone',
    'Sarcophagus Golem': 'stone', 'Scrap Golem': 'stone', 'Obsidian Golem': 'stone',
    'Lava Hound': 'stone', 'Ash Crawler': 'stone', 'Ember Wraith': 'stone',
    'Scorched Golem': 'stone', 'Cinder Hound': 'stone', 'Lava Troll': 'stone',
    'Molten Sentinel': 'stone', 'Ridge Harpy': 'stone', 'Fossil Golem': 'stone',
    'Crown of Ash': 'stone', 'Magma Elemental': 'stone',
    // ice
    'Ice Mage': 'ice', 'Frozen Golem': 'ice', 'Frost Archer': 'ice',
    'Glacial Worm': 'ice', 'Ice Gargoyle': 'ice', 'Storm Harpy': 'ice',
    'Blizzard Wraith': 'ice', 'Avalanche Golem': 'ice', 'Frost Yeti': 'ice',
    'Ice Lich': 'ice', 'Frozen Revenant': 'ice', 'Frozen Titan': 'ice',
    'Frozen Leviathan': 'ice', 'Permafrost Crawler': 'ice', 'Tundra Specter': 'ice',
    'Blizzard Shade': 'ice', 'Crystal Elemental': 'ice', 'Frost Giant': 'ice',
    // dragon
    'Fire Drake': 'dragon', 'Wyvern Scout': 'dragon', 'Volcanic Drake': 'dragon',
    'Ancient Wyvern': 'dragon', 'Cinder Dragon': 'dragon', 'Ancient Dragon': 'dragon',
    // spider_web
    'Thread Golem': 'spider_web', 'Cocooned Skeleton': 'spider_web',
  };

  function getDeathGroup(mobName) {
    return MOB_DEATH_MAP[mobName] || 'goblin';
  }

  function getMaterial(mobName) {
    return MOB_MATERIAL_MAP[mobName] || 'flesh';
  }

  const DOUBLE_LAYER_MATERIALS = new Set(['dragon', 'metal', 'stone', 'void']);

  // Returns array of {audio, volume} for the material hit layers
  function buildMaterialAudios(material) {
    const rand = arr => arr[Math.floor(Math.random() * arr.length)];
    if (DOUBLE_LAYER_MATERIALS.has(material)) {
      const l1 = FILE_SOUNDS[`hit_${material}_1`];
      const l2 = FILE_SOUNDS[`hit_${material}_2`];
      if (!l1?.length || !l2?.length) return [];
      return [
        { audio: new Audio(rand(l1)), volume: _volume * 0.75 },
        { audio: new Audio(rand(l2)), volume: _volume * 0.75 },
      ];
    }
    const key = `hit_${material.replace(' ', '_')}`;
    const files = FILE_SOUNDS[key]?.length ? FILE_SOUNDS[key] : FILE_SOUNDS['hit_flesh'];
    if (!files?.length) return [];
    return [{ audio: new Audio(rand(files)), volume: _volume * 0.75 }];
  }

  function playHit(mobName, isCrit, swipeKey = 'sword_swipe') {
    const material = getMaterial(mobName);
    const matAudios = buildMaterialAudios(material);
    if (!matAudios.length) return;

    if (isCrit) {
      // swipe first, then crit + material layers after 200ms
      const swipeFiles = FILE_SOUNDS[swipeKey];
      const critFiles = FILE_SOUNDS['weapon_crit'];
      if (!swipeFiles?.length || !critFiles?.length) return;
      const swipeAudio = { audio: new Audio(swipeFiles[Math.floor(Math.random() * swipeFiles.length)]), volume: _volume };
      const critAudio = { audio: new Audio(critFiles[Math.floor(Math.random() * critFiles.length)]), volume: _volume };
      const all = [swipeAudio, critAudio, ...matAudios];
      Promise.all(all.map(({ audio }) =>
        new Promise(r => { audio.addEventListener('canplaythrough', r, { once: true }); audio.load(); })
      )).then(() => {
        swipeAudio.audio.play().catch(() => {});
        setTimeout(() => {
          critAudio.audio.volume = critAudio.volume; critAudio.audio.play().catch(() => {});
          matAudios.forEach(({ audio, volume }) => { audio.volume = volume; audio.play().catch(() => {}); });
        }, 200);
      });
      return;
    }

    // regular: swipe first, then material layers after 200ms
    const swipeFiles = FILE_SOUNDS[swipeKey];
    if (!swipeFiles?.length) return;
    const swipeAudio = { audio: new Audio(swipeFiles[Math.floor(Math.random() * swipeFiles.length)]), volume: _volume };
    const all = [swipeAudio, ...matAudios];
    Promise.all(all.map(({ audio }) =>
      new Promise(r => { audio.addEventListener('canplaythrough', r, { once: true }); audio.load(); })
    )).then(() => {
      swipeAudio.audio.play().catch(() => {});
      setTimeout(() => matAudios.forEach(({ audio, volume }) => { audio.volume = volume; audio.play().catch(() => {}); }), 200);
    });
  }

  // ── PUBLIC API ────────────────────────────────────────────────

  const SOUNDS = {
    // Оружие героя
    sword:        playSword,
    axe:          playAxe,
    mace:         playMace,
    shield_bash:  playShieldBash,

    // Монстры
    monster_hit:   playMonsterHit,
    monster_death: playMonsterDeath,

    // Игровые события
    correct:      playCorrect,
    wrong:        playWrong,
    gold:         playGold,
    victory:      playVictory,
    death:        playDeath,
    levelup:      playLevelUp,
    crit:         playCrit,
    dodge:        playDodge,
    block:        playBlock,

    // алиасы для обратной совместимости с dungeon.js / app.js
    sword_regular: playSword,
    sword_crit:    playCrit,
    sword_block:   () => playCombo('sword_swipe', 'weapon_block'),
    sword_miss:    () => playCombo('sword_swipe', 'weapon_miss'),
    timer_danger: playTimerDanger,
    portal:       playPortal,
  };

  return {
    play(id) {
      if (!_enabled) return;
      try {
        if (FILE_SOUNDS[id]) { playFileSound(id); return; }
        const fn = SOUNDS[id];
        if (fn) fn();
        else console.warn(`DungeonSounds: unknown sound "${id}"`);
      } catch (e) {
        console.warn('DungeonSounds error:', e);
      }
    },

    playHit(mobName, isCrit, weaponType = 'sword') {
      if (!_enabled) return;
      const swipeKey = `${weaponType}_swipe`;
      try { playHit(mobName, isCrit, swipeKey); } catch (e) { console.warn('DungeonSounds error:', e); }
    },

    playDeath(mobName) {
      if (!_enabled) return;
      try { playMonsterDeath(mobName); } catch (e) { console.warn('DungeonSounds error:', e); }
    },

    // Определяет тип звука по типу оружия героя
    playWeapon(weaponType, isShieldBash = false) {
      if (isShieldBash) { this.play('shield_bash'); return; }
      const map = { sword: 'sword', axe: 'axe', mace: 'mace' };
      this.play(map[weaponType] || 'sword');
    },

    playMobAttack(mob) {
      if (!_enabled) return;
      const key = MOB_SOUND_MAP[mob?.name];
      if (key) playFileSound(key);
    },

    setVolume(v) { _volume = Math.max(0, Math.min(1, v)); },
    setEnabled(v) { _enabled = v; },
    toggle() { _enabled = !_enabled; return _enabled; },
    isEnabled() { return _enabled; },
  };
})();
