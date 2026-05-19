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
    const c = ctx();
    const now = c.currentTime;

    // Свист клинка (высокочастотный sweep вниз)
    const g1 = makeGain(0.18);
    const o1 = c.createOscillator();
    o1.type = 'sawtooth';
    o1.frequency.setValueAtTime(1800, now);
    o1.frequency.exponentialRampToValueAtTime(400, now + 0.12);
    expRamp(g1, 0.18, 0.001, now, now + 0.14);
    o1.connect(g1); o1.start(now); o1.stop(now + 0.14);

    // Металлический удар (шум + тональность)
    const g2 = makeGain(0.22);
    noise(0.08, g2, 4000);
    expRamp(g2, 0.22, 0.001, now + 0.08, now + 0.18);

    // Тональный удар
    const g3 = makeGain(0.12);
    const o3 = c.createOscillator();
    o3.type = 'triangle';
    o3.frequency.setValueAtTime(320, now + 0.07);
    o3.frequency.exponentialRampToValueAtTime(160, now + 0.2);
    expRamp(g3, 0.12, 0.001, now + 0.07, now + 0.22);
    o3.connect(g3); o3.start(now + 0.07); o3.stop(now + 0.22);
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

  // Монстр умирает — рычание + затухание
  function playMonsterDeath() {
    const c = ctx();
    const now = c.currentTime;

    const g1 = makeGain(0.28);
    const o1 = c.createOscillator();
    o1.type = 'sawtooth';
    o1.frequency.setValueAtTime(140, now);
    o1.frequency.exponentialRampToValueAtTime(25, now + 0.6);
    expRamp(g1, 0.28, 0.001, now, now + 0.65);
    o1.connect(g1); o1.start(now); o1.stop(now + 0.65);

    const g2 = makeGain(0.2);
    noise(0.3, g2, 1200);
    expRamp(g2, 0.2, 0.001, now + 0.1, now + 0.5);
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
    const c = ctx();
    const now = c.currentTime;
    const g = makeGain(0.22);
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(2200, now);
    o.frequency.exponentialRampToValueAtTime(440, now + 0.1);
    expRamp(g, 0.22, 0.001, now, now + 0.15);
    o.connect(g); o.start(now); o.stop(now + 0.15);
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
    const c = ctx();
    const now = c.currentTime;
    const g1 = makeGain(0.25);
    noise(0.06, g1, 5000);
    expRamp(g1, 0.25, 0.001, now, now + 0.2);
    const g2 = makeGain(0.18);
    const o2 = c.createOscillator();
    o2.type = 'triangle';
    o2.frequency.setValueAtTime(400, now);
    o2.frequency.exponentialRampToValueAtTime(200, now + 0.22);
    expRamp(g2, 0.18, 0.001, now, now + 0.28);
    o2.connect(g2); o2.start(now); o2.stop(now + 0.28);
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

  function files(dir, n) {
    const out = [];
    for (let i = 1; i <= n; i++) out.push(`${dir}${i}.mp3`);
    return out;
  }

  const FILE_SOUNDS = {
    // Hero sword
    sword_regular: files('sounds/sword/regular/', 3),
    sword_crit:    files('sounds/sword/crit/', 1),
    sword_miss:    files('sounds/sword/miss/', 1),
    sword_block:   files('sounds/sword/block/', 1),

    // Mob attacks
    mob_melee:          files('sounds/mobs/melee/', 4),
    mob_fist:           files('sounds/mobs/fist/', 5),
    mob_mage:           files('sounds/mobs/mage cast/', 4),
    mob_knights:        files('sounds/mobs/knights/', 4),
    mob_insects:        files('sounds/mobs/insects/', 6),
    mob_bow:            files('sounds/mobs/bow/', 6),
    mob_animals_flying: files('sounds/mobs/animals/flying animals/', 3),
    mob_animals_ground: files('sounds/mobs/animals/not flying animals/', 5),
    mob_animals_dragon: files('sounds/mobs/animals/dragons/', 3),
  };

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

  function playFileSound(key) {
    const files = FILE_SOUNDS[key];
    if (!files || !files.length) return;
    const path = files[Math.floor(Math.random() * files.length)];
    const audio = new Audio(path);
    audio.volume = _volume;
    audio.play().catch(() => {});
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
