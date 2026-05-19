// ===================== DUNGEON POOLS =====================
// Content lives here — engine lives in dungeon.js
// Add new biomes / monsters / mechanics freely without touching the engine.

// ── BIOMES ───────────────────────────────────────────────────────────────────
const BIOME_POOL = [
  // ── Goblin ──
  { id:"goblin_cave",     name:"Goblin Cave",        theme:"goblin",   minFloor:1,  timerBase:0,  weight:10 },
  { id:"goblin_warcamp",  name:"Goblin Warcamp",     theme:"goblin",   minFloor:2,  timerBase:0,  weight:9  },
  { id:"mushroom_burrows",name:"Mushroom Burrows",   theme:"goblin",   minFloor:3,  timerBase:0,  weight:8  },
  { id:"scrapyard_pit",   name:"Scrapyard Pit",      theme:"goblin",   minFloor:4,  timerBase:0,  weight:7  },
  { id:"troll_bridge",    name:"Troll Bridge",       theme:"goblin",   minFloor:5,  timerBase:0,  weight:6  },
  // ── Spider ──
  { id:"spider_nest",     name:"Spider Nest",        theme:"spider",   minFloor:3,  timerBase:9,  weight:9  },
  { id:"webbed_catacombs",name:"Webbed Catacombs",   theme:"spider",   minFloor:4,  timerBase:9,  weight:8  },
  { id:"venom_marshes",   name:"Venom Marshes",      theme:"spider",   minFloor:5,  timerBase:8,  weight:7  },
  { id:"silk_labyrinth",  name:"Silk Labyrinth",     theme:"spider",   minFloor:6,  timerBase:8,  weight:6  },
  { id:"brood_hollow",    name:"Brood Hollow",       theme:"spider",   minFloor:7,  timerBase:8,  weight:5  },
  // ── Skeleton ──
  { id:"skeleton_crypt",  name:"Skeleton Crypt",     theme:"skeleton", minFloor:5,  timerBase:8,  weight:8  },
  { id:"cursed_graveyard",name:"Cursed Graveyard",   theme:"skeleton", minFloor:6,  timerBase:7,  weight:7  },
  { id:"bone_fortress",   name:"Bone Fortress",      theme:"skeleton", minFloor:7,  timerBase:7,  weight:6  },
  { id:"plague_sanctum",  name:"Plague Sanctum",     theme:"skeleton", minFloor:9,  timerBase:7,  weight:5  },
  { id:"tomb_forgotten",  name:"Tomb of the Forgotten",theme:"skeleton",minFloor:11,timerBase:6,  weight:4  },
  // ── Frozen ──
  { id:"frozen_fortress", name:"Frozen Fortress",    theme:"frozen",   minFloor:10, timerBase:7,  weight:6  },
  { id:"glacial_caverns", name:"Glacial Caverns",    theme:"frozen",   minFloor:12, timerBase:7,  weight:5  },
  { id:"blizzard_peak",   name:"Blizzard Peak",      theme:"frozen",   minFloor:14, timerBase:6,  weight:5  },
  { id:"permafrost_depths",name:"Permafrost Depths", theme:"frozen",   minFloor:16, timerBase:6,  weight:4  },
  { id:"shattered_tundra",name:"The Shattered Tundra",theme:"frozen",  minFloor:18, timerBase:6,  weight:3  },
  // ── Shadow ──
  { id:"shadow_realm",    name:"Shadow Realm",       theme:"shadow",   minFloor:20, timerBase:6,  weight:4  },
  { id:"obsidian_labyrinth",name:"Obsidian Labyrinth",theme:"shadow",  minFloor:22, timerBase:6,  weight:4  },
  { id:"void_between",    name:"Void Between Worlds",theme:"shadow",   minFloor:24, timerBase:5,  weight:3  },
  { id:"nightmare_bazaar",name:"Nightmare Bazaar",   theme:"shadow",   minFloor:26, timerBase:5,  weight:3  },
  { id:"hollow_mirror",   name:"The Hollow Mirror",  theme:"shadow",   minFloor:28, timerBase:5,  weight:2  },
  // ── Dragon ──
  { id:"dragon_peak",     name:"Dragon Peak",        theme:"dragon",   minFloor:35, timerBase:5,  weight:3  },
  { id:"scorched_wastes", name:"Scorched Wastes",    theme:"dragon",   minFloor:37, timerBase:5,  weight:3  },
  { id:"magma_depths",    name:"Magma Depths",       theme:"dragon",   minFloor:39, timerBase:4,  weight:2  },
  { id:"dragonbone_ridge",name:"Dragonbone Ridge",   theme:"dragon",   minFloor:42, timerBase:4,  weight:2  },
  { id:"ashen_throne",    name:"The Ashen Throne",   theme:"dragon",   minFloor:45, timerBase:4,  weight:2  },
  // ── Void ──
  { id:"void_abyss",      name:"Void Abyss",         theme:"void",     minFloor:50, timerBase:4,  weight:2  },
  { id:"shattered_expanse",name:"The Shattered Expanse",theme:"void",  minFloor:53, timerBase:4,  weight:2  },
  { id:"entropy_fields",  name:"Entropy Fields",     theme:"void",     minFloor:56, timerBase:3,  weight:2  },
  { id:"realm_unborn",    name:"Realm of the Unborn",theme:"void",     minFloor:60, timerBase:3,  weight:1  },
  { id:"last_threshold",  name:"The Last Threshold", theme:"void",     minFloor:65, timerBase:3,  weight:1  },
];

// ── MONSTERS ─────────────────────────────────────────────────────────────────
const MONSTER_POOL = [
  // ── Goblin Cave (existing) ──
  { id:"goblin_scout",    name:"Goblin Scout",    emoji:"👺", biome:"goblin",   minFloor:1,  weight:10, hpMult:0.7, dmgMult:0.8, mechanics:[] },
  { id:"goblin_warrior",  name:"Goblin Warrior",  emoji:"👹", biome:"goblin",   minFloor:1,  weight:9,  hpMult:0.9, dmgMult:1.0, mechanics:[] },

  // ── Goblin Cave (new) ──
  { id:"goblin_shaman",   name:"Goblin Shaman",   emoji:"🧟", biome:"goblin",   minFloor:1,  weight:8,  hpMult:0.7, dmgMult:1.2, mechanics:["poison"] },
  { id:"goblin_brute",    name:"Goblin Brute",    emoji:"👊", biome:"goblin",   minFloor:2,  weight:7,  hpMult:1.4, dmgMult:1.1, mechanics:["armor"] },

  // ── Goblin Warcamp ──
  { id:"goblin_soldier",  name:"Goblin Soldier",  emoji:"🪖", biome:"goblin",   minFloor:2,  weight:9,  hpMult:0.9, dmgMult:0.9, mechanics:["armor"] },
  { id:"goblin_archer",   name:"Goblin Archer",   emoji:"🏹", biome:"goblin",   minFloor:2,  weight:8,  hpMult:0.6, dmgMult:1.3, mechanics:["dodge"] },
  { id:"goblin_berserker",name:"Goblin Berserker",emoji:"😤", biome:"goblin",   minFloor:3,  weight:7,  hpMult:0.8, dmgMult:1.4, mechanics:[] },
  { id:"war_drummer",     name:"War Drummer",     emoji:"🥁", biome:"goblin",   minFloor:3,  weight:6,  hpMult:1.0, dmgMult:0.8, mechanics:["block"] },

  // ── Mushroom Burrows ──
  { id:"spore_goblin",    name:"Spore Goblin",    emoji:"🍄", biome:"goblin",   minFloor:3,  weight:8,  hpMult:0.8, dmgMult:0.9, mechanics:["poison"] },
  { id:"mushroom_crawler",name:"Mushroom Crawler",emoji:"🌿", biome:"goblin",   minFloor:3,  weight:7,  hpMult:1.1, dmgMult:0.8, mechanics:["poison","armor"] },
  { id:"fungal_shaman",   name:"Fungal Shaman",   emoji:"☁️", biome:"goblin",   minFloor:4,  weight:6,  hpMult:0.7, dmgMult:1.2, mechanics:["poison","dodge"] },
  { id:"myconid_guard",   name:"Myconid Guard",   emoji:"🛡️", biome:"goblin",   minFloor:4,  weight:6,  hpMult:1.3, dmgMult:0.9, mechanics:["armor","block"] },

  // ── Scrapyard Pit ──
  { id:"junk_goblin",     name:"Junk Goblin",     emoji:"🔧", biome:"goblin",   minFloor:4,  weight:8,  hpMult:0.8, dmgMult:1.0, mechanics:[] },
  { id:"iron_scavenger",  name:"Iron Scavenger",  emoji:"⚙️", biome:"goblin",   minFloor:4,  weight:7,  hpMult:0.9, dmgMult:1.0, mechanics:["armor"] },
  { id:"scrap_golem",     name:"Scrap Golem",     emoji:"🤖", biome:"goblin",   minFloor:5,  weight:5,  hpMult:1.8, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"rust_knight",     name:"Rust Knight",     emoji:"⚔️", biome:"goblin",   minFloor:5,  weight:6,  hpMult:1.2, dmgMult:1.1, mechanics:["armor","block"] },

  // ── Troll Bridge ──
  { id:"river_troll",     name:"River Troll",     emoji:"🧌", biome:"goblin",   minFloor:5,  weight:7,  hpMult:1.5, dmgMult:1.0, mechanics:["armor"] },
  { id:"bridge_troll",    name:"Bridge Troll",    emoji:"🪨", biome:"goblin",   minFloor:5,  weight:6,  hpMult:1.7, dmgMult:1.1, mechanics:["armor","block"] },
  { id:"troll_shaman",    name:"Troll Shaman",    emoji:"🌊", biome:"goblin",   minFloor:6,  weight:5,  hpMult:1.0, dmgMult:1.2, mechanics:["poison","dodge"] },
  { id:"stone_troll",     name:"Stone Troll",     emoji:"🗿", biome:"goblin",   minFloor:6,  weight:5,  hpMult:2.0, dmgMult:0.9, mechanics:["armor","block"] },

  // ── Spider (existing + biome tag) ──
  { id:"cave_spider",     name:"Cave Spider",     emoji:"🕷️", biome:"spider",   minFloor:2,  weight:9,  hpMult:0.7, dmgMult:0.8, mechanics:["poison","dodge"] },

  // ── Spider Nest (new) ──
  { id:"web_spinner",     name:"Web Spinner",     emoji:"🕸️", biome:"spider",   minFloor:2,  weight:8,  hpMult:0.6, dmgMult:0.9, mechanics:["poison","block"] },
  { id:"spider_matriarch",name:"Spider Matriarch",emoji:"🦂", biome:"spider",   minFloor:3,  weight:6,  hpMult:1.1, dmgMult:1.1, mechanics:["poison","dodge","block"] },

  // ── Webbed Catacombs ──
  { id:"tomb_spider",     name:"Tomb Spider",     emoji:"🕷️", biome:"spider",   minFloor:4,  weight:8,  hpMult:0.9, dmgMult:1.0, mechanics:["poison","armor"] },
  { id:"silk_wraith",     name:"Silk Wraith",     emoji:"👻", biome:"spider",   minFloor:4,  weight:7,  hpMult:0.7, dmgMult:1.1, mechanics:["dodge","block"] },
  { id:"cocooned_skeleton",name:"Cocooned Skeleton",emoji:"💀",biome:"spider",  minFloor:4,  weight:6,  hpMult:1.0, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"crypt_crawler",   name:"Crypt Crawler",   emoji:"🦂", biome:"spider",   minFloor:5,  weight:7,  hpMult:0.8, dmgMult:1.0, mechanics:["poison","dodge"] },

  // ── Venom Marshes ──
  { id:"bog_spider",      name:"Bog Spider",      emoji:"🕷️", biome:"spider",   minFloor:5,  weight:8,  hpMult:0.8, dmgMult:1.0, mechanics:["poison"] },
  { id:"venom_drake",     name:"Venom Drake",     emoji:"🦎", biome:"spider",   minFloor:5,  weight:6,  hpMult:1.1, dmgMult:1.2, mechanics:["poison","armor"] },
  { id:"marsh_lurker",    name:"Marsh Lurker",    emoji:"🐊", biome:"spider",   minFloor:6,  weight:7,  hpMult:1.2, dmgMult:1.0, mechanics:["dodge","armor"] },
  { id:"swamp_hag",       name:"Swamp Hag",       emoji:"🧙", biome:"spider",   minFloor:6,  weight:6,  hpMult:0.8, dmgMult:1.3, mechanics:["poison","dodge"] },

  // ── Silk Labyrinth ──
  { id:"phantom_weaver",  name:"Phantom Weaver",  emoji:"🕸️", biome:"spider",   minFloor:6,  weight:7,  hpMult:0.7, dmgMult:1.2, mechanics:["dodge","block"] },
  { id:"mirror_spider",   name:"Mirror Spider",   emoji:"🪞", biome:"spider",   minFloor:7,  weight:6,  hpMult:0.8, dmgMult:1.1, mechanics:["dodge","dodge"] },
  { id:"thread_golem",    name:"Thread Golem",    emoji:"🧶", biome:"spider",   minFloor:7,  weight:5,  hpMult:1.5, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"silk_shade",      name:"Silk Shade",      emoji:"👤", biome:"spider",   minFloor:7,  weight:6,  hpMult:0.6, dmgMult:1.3, mechanics:["dodge","poison"] },

  // ── Brood Hollow ──
  { id:"broodling_swarm", name:"Broodling Swarm", emoji:"🕷️", biome:"spider",   minFloor:7,  weight:8,  hpMult:0.5, dmgMult:1.0, mechanics:["poison"] },
  { id:"egg_guardian",    name:"Egg Guardian",    emoji:"🥚", biome:"spider",   minFloor:8,  weight:6,  hpMult:1.4, dmgMult:0.8, mechanics:["armor","block"] },
  { id:"brood_tender",    name:"Brood Tender",    emoji:"🦂", biome:"spider",   minFloor:8,  weight:6,  hpMult:0.9, dmgMult:1.1, mechanics:["poison","dodge"] },
  { id:"hollow_crawler",  name:"Hollow Crawler",  emoji:"🕷️", biome:"spider",   minFloor:8,  weight:7,  hpMult:1.0, dmgMult:1.0, mechanics:["poison","armor"] },
  // ── Skeleton Crypt ──
  { id:"skeleton_warrior", name:"Skeleton Warrior", emoji:"💀", biome:"skeleton", minFloor:5,  weight:9,  hpMult:0.9, dmgMult:0.9, mechanics:["armor"] },
  { id:"skeleton_guard",   name:"Skeleton Guard",   emoji:"🦴", biome:"skeleton", minFloor:5,  weight:8,  hpMult:1.0, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"dark_knight",      name:"Dark Knight",      emoji:"⚔️", biome:"skeleton", minFloor:6,  weight:7,  hpMult:1.2, dmgMult:1.1, mechanics:["armor","block"] },
  { id:"bone_archer",      name:"Bone Archer",      emoji:"🏹", biome:"skeleton", minFloor:5,  weight:8,  hpMult:0.7, dmgMult:1.3, mechanics:["dodge"] },

  // ── Cursed Graveyard ──
  { id:"grave_revenant",   name:"Grave Revenant",   emoji:"☠️", biome:"skeleton", minFloor:6,  weight:8,  hpMult:1.0, dmgMult:1.0, mechanics:["dodge","poison"] },
  { id:"cursed_digger",    name:"Cursed Digger",     emoji:"⛏️", biome:"skeleton", minFloor:6,  weight:7,  hpMult:1.1, dmgMult:0.9, mechanics:["armor"] },
  { id:"wailing_specter",  name:"Wailing Specter",   emoji:"👻", biome:"skeleton", minFloor:6,  weight:7,  hpMult:0.6, dmgMult:1.2, mechanics:["dodge","block"] },
  { id:"tombstone_golem",  name:"Tombstone Golem",   emoji:"🗿", biome:"skeleton", minFloor:7,  weight:5,  hpMult:1.8, dmgMult:0.9, mechanics:["armor","block"] },

  // ── Bone Fortress ──
  { id:"bone_sentinel",    name:"Bone Sentinel",     emoji:"🛡️", biome:"skeleton", minFloor:7,  weight:7,  hpMult:1.2, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"catapult_skeleton",name:"Catapult Skeleton", emoji:"💣", biome:"skeleton", minFloor:7,  weight:6,  hpMult:0.7, dmgMult:1.4, mechanics:["dodge"] },
  { id:"fortress_wraith",  name:"Fortress Wraith",   emoji:"👁️", biome:"skeleton", minFloor:8,  weight:6,  hpMult:0.8, dmgMult:1.1, mechanics:["dodge","block"] },
  { id:"ossified_titan",   name:"Ossified Titan",    emoji:"🦴", biome:"skeleton", minFloor:8,  weight:4,  hpMult:2.0, dmgMult:1.0, mechanics:["armor","block"] },

  // ── Plague Sanctum ──
  { id:"plague_acolyte",   name:"Plague Acolyte",    emoji:"🧟", biome:"skeleton", minFloor:9,  weight:7,  hpMult:0.8, dmgMult:1.1, mechanics:["poison","dodge"] },
  { id:"rot_walker",       name:"Rot Walker",         emoji:"🦠", biome:"skeleton", minFloor:9,  weight:7,  hpMult:1.1, dmgMult:1.0, mechanics:["poison","armor"] },
  { id:"diseased_hound",   name:"Diseased Hound",     emoji:"🐕", biome:"skeleton", minFloor:9,  weight:6,  hpMult:0.8, dmgMult:1.1, mechanics:["poison","dodge"] },
  { id:"pestilence_shade", name:"Pestilence Shade",   emoji:"💀", biome:"skeleton", minFloor:10, weight:5,  hpMult:0.7, dmgMult:1.3, mechanics:["poison","dodge","block"] },

  // ── Tomb of the Forgotten ──
  { id:"ancient_revenant", name:"Ancient Revenant",  emoji:"☠️", biome:"skeleton", minFloor:11, weight:5,  hpMult:1.1, dmgMult:1.1, mechanics:["armor","dodge"] },
  { id:"mummified_pharaoh",name:"Mummified Pharaoh", emoji:"👑", biome:"skeleton", minFloor:11, weight:4,  hpMult:1.3, dmgMult:1.2, mechanics:["armor","block","poison"] },
  { id:"sarcophagus_golem",name:"Sarcophagus Golem", emoji:"⚰️", biome:"skeleton", minFloor:12, weight:4,  hpMult:1.9, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"soul_drinker",     name:"Soul Drinker",       emoji:"🩸", biome:"skeleton", minFloor:12, weight:4,  hpMult:0.9, dmgMult:1.4, mechanics:["poison","dodge","block"] },
  // ── Frozen Fortress (minFloor:10) ──
  { id:"ice_mage",          name:"Ice Mage",          emoji:"🧊", biome:"frozen", minFloor:10, weight:7, hpMult:0.8, dmgMult:1.3, mechanics:["freeze"] },
  { id:"wolf_rider",        name:"Wolf Rider",        emoji:"🐺", biome:"frozen", minFloor:10, weight:6, hpMult:0.8, dmgMult:1.0, mechanics:["dodge","freeze"] },
  { id:"frozen_golem",      name:"Frozen Golem",      emoji:"🗿", biome:"frozen", minFloor:10, weight:6, hpMult:1.8, dmgMult:0.9, mechanics:["armor","freeze"] },
  { id:"frost_archer",      name:"Frost Archer",      emoji:"🏹", biome:"frozen", minFloor:10, weight:7, hpMult:0.7, dmgMult:1.2, mechanics:["dodge","freeze"] },

  // ── Glacial Caverns (minFloor:12) ──
  { id:"crystal_elemental", name:"Crystal Elemental", emoji:"💎", biome:"frozen", minFloor:12, weight:7, hpMult:1.1, dmgMult:1.0, mechanics:["armor","freeze"] },
  { id:"glacial_worm",      name:"Glacial Worm",      emoji:"🐛", biome:"frozen", minFloor:12, weight:6, hpMult:1.3, dmgMult:0.9, mechanics:["armor","poison"] },
  { id:"ice_gargoyle",      name:"Ice Gargoyle",      emoji:"🦅", biome:"frozen", minFloor:12, weight:6, hpMult:0.9, dmgMult:1.1, mechanics:["dodge","freeze"] },
  { id:"frozen_revenant",   name:"Frozen Revenant",   emoji:"☠️", biome:"frozen", minFloor:12, weight:7, hpMult:0.8, dmgMult:1.1, mechanics:["dodge","block"] },

  // ── Blizzard Peak (minFloor:14) ──
  { id:"storm_harpy",       name:"Storm Harpy",       emoji:"🦅", biome:"frozen", minFloor:14, weight:7, hpMult:0.7, dmgMult:1.3, mechanics:["dodge"] },
  { id:"blizzard_wraith",   name:"Blizzard Wraith",   emoji:"🌨️", biome:"frozen", minFloor:14, weight:6, hpMult:0.6, dmgMult:1.2, mechanics:["dodge","block","freeze"] },
  { id:"avalanche_golem",   name:"Avalanche Golem",   emoji:"🪨", biome:"frozen", minFloor:14, weight:5, hpMult:1.8, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"frost_yeti",        name:"Frost Yeti",        emoji:"🐻", biome:"frozen", minFloor:14, weight:6, hpMult:1.4, dmgMult:1.1, mechanics:["armor","freeze"] },

  // ── Permafrost Depths (minFloor:16) ──
  { id:"permafrost_crawler",name:"Permafrost Crawler",emoji:"🦂", biome:"frozen", minFloor:16, weight:6, hpMult:1.1, dmgMult:1.0, mechanics:["armor","poison"] },
  { id:"frozen_leviathan",  name:"Frozen Leviathan",  emoji:"🐉", biome:"frozen", minFloor:16, weight:4, hpMult:2.0, dmgMult:1.0, mechanics:["armor","block","freeze"] },
  { id:"tundra_specter",    name:"Tundra Specter",    emoji:"👻", biome:"frozen", minFloor:16, weight:6, hpMult:0.7, dmgMult:1.2, mechanics:["dodge","freeze"] },
  { id:"ice_lich",          name:"Ice Lich",          emoji:"💀", biome:"frozen", minFloor:16, weight:5, hpMult:0.8, dmgMult:1.4, mechanics:["dodge","block","freeze"] },

  // ── Shattered Tundra (minFloor:18) ──
  { id:"shard_elemental",   name:"Shard Elemental",   emoji:"💠", biome:"frozen", minFloor:18, weight:5, hpMult:1.0, dmgMult:1.2, mechanics:["armor","dodge","freeze"] },
  { id:"tundra_wolf_pack",  name:"Tundra Wolf Pack",  emoji:"🐺", biome:"frozen", minFloor:18, weight:7, hpMult:0.5, dmgMult:1.0, mechanics:["dodge"] },
  { id:"frozen_titan",      name:"Frozen Titan",      emoji:"🗿", biome:"frozen", minFloor:18, weight:4, hpMult:2.2, dmgMult:1.0, mechanics:["armor","block"] },
  { id:"blizzard_shade",    name:"Blizzard Shade",    emoji:"🌪️", biome:"frozen", minFloor:18, weight:5, hpMult:0.7, dmgMult:1.3, mechanics:["dodge","block","freeze"] },
  // ── Shadow Realm (minFloor:20) ──
  { id:"shadow_sprite",    name:"Shadow Sprite",    emoji:"👤", biome:"shadow", minFloor:20, weight:6, hpMult:0.7, dmgMult:1.0, mechanics:["dodge"] },
  { id:"dark_wraith",      name:"Dark Wraith",      emoji:"🌑", biome:"shadow", minFloor:20, weight:6, hpMult:1.0, dmgMult:1.1, mechanics:["dodge","block"] },
  { id:"void_stalker",     name:"Void Stalker",     emoji:"🕳️", biome:"shadow", minFloor:20, weight:5, hpMult:0.6, dmgMult:1.4, mechanics:["dodge"] },
  { id:"shade_archer",     name:"Shade Archer",     emoji:"🏹", biome:"shadow", minFloor:20, weight:7, hpMult:0.6, dmgMult:1.3, mechanics:["dodge","poison"] },

  // ── Obsidian Labyrinth (minFloor:22) ──
  { id:"obsidian_golem",   name:"Obsidian Golem",   emoji:"🖤", biome:"shadow", minFloor:22, weight:5, hpMult:1.8, dmgMult:0.9, mechanics:["armor","block"] },
  { id:"mirror_shade",     name:"Mirror Shade",     emoji:"🪞", biome:"shadow", minFloor:22, weight:6, hpMult:0.7, dmgMult:1.2, mechanics:["dodge","block"] },
  { id:"labyrinth_horror", name:"Labyrinth Horror", emoji:"😱", biome:"shadow", minFloor:22, weight:5, hpMult:1.0, dmgMult:1.2, mechanics:["dodge","poison"] },
  { id:"glass_stalker",    name:"Glass Stalker",    emoji:"💎", biome:"shadow", minFloor:22, weight:7, hpMult:0.5, dmgMult:1.4, mechanics:["dodge"] },

  // ── Void Between Worlds (minFloor:24) ──
  { id:"void_wisp",        name:"Void Wisp",        emoji:"✨", biome:"shadow", minFloor:24, weight:6, hpMult:0.4, dmgMult:1.3, mechanics:["dodge","block"] },
  { id:"rift_walker",      name:"Rift Walker",      emoji:"🌀", biome:"shadow", minFloor:24, weight:6, hpMult:0.8, dmgMult:1.2, mechanics:["dodge"] },
  { id:"dimensional_horror",name:"Dimensional Horror",emoji:"👾",biome:"shadow",minFloor:24, weight:4, hpMult:1.2, dmgMult:1.3, mechanics:["dodge","block","poison"] },
  { id:"null_entity",      name:"Null Entity",      emoji:"⬛", biome:"shadow", minFloor:24, weight:5, hpMult:0.9, dmgMult:1.4, mechanics:["dodge","block"] },

  // ── Nightmare Bazaar (minFloor:26) ──
  { id:"dream_merchant",   name:"Dream Merchant",   emoji:"🎭", biome:"shadow", minFloor:26, weight:5, hpMult:0.7, dmgMult:1.3, mechanics:["dodge","poison"] },
  { id:"nightmare_hound",  name:"Nightmare Hound",  emoji:"🐕", biome:"shadow", minFloor:26, weight:7, hpMult:0.8, dmgMult:1.3, mechanics:["dodge"] },
  { id:"illusion_weaver",  name:"Illusion Weaver",  emoji:"🕸️", biome:"shadow", minFloor:26, weight:6, hpMult:0.6, dmgMult:1.4, mechanics:["dodge","block"] },
  { id:"fear_monger",      name:"Fear Monger",      emoji:"😨", biome:"shadow", minFloor:26, weight:5, hpMult:1.1, dmgMult:1.2, mechanics:["block","poison"] },

  // ── Hollow Mirror (minFloor:28) ──
  { id:"mirror_wraith",    name:"Mirror Wraith",    emoji:"🪞", biome:"shadow", minFloor:28, weight:5, hpMult:0.8, dmgMult:1.3, mechanics:["dodge","block"] },
  { id:"reflection_horror",name:"Reflection Horror",emoji:"👻", biome:"shadow", minFloor:28, weight:4, hpMult:1.0, dmgMult:1.4, mechanics:["dodge","block","poison"] },
  { id:"echo_shade",       name:"Echo Shade",       emoji:"💠", biome:"shadow", minFloor:28, weight:6, hpMult:0.6, dmgMult:1.5, mechanics:["dodge"] },
  { id:"the_doppelganger", name:"The Doppelganger", emoji:"🫥", biome:"shadow", minFloor:28, weight:3, hpMult:1.2, dmgMult:1.3, mechanics:["dodge","block"] },
  // ── Dragon Peak (minFloor:35) ──
  { id:"fire_drake",      name:"Fire Drake",      emoji:"🦎", biome:"dragon", minFloor:35, weight:6, hpMult:1.3, dmgMult:1.2, mechanics:["armor"] },
  { id:"dragon_knight",   name:"Dragon Knight",   emoji:"🏰", biome:"dragon", minFloor:35, weight:5, hpMult:1.4, dmgMult:1.1, mechanics:["armor","block"] },
  { id:"wyvern_scout",    name:"Wyvern Scout",    emoji:"🦅", biome:"dragon", minFloor:35, weight:5, hpMult:1.0, dmgMult:1.3, mechanics:["armor","dodge"] },
  { id:"lava_hound",      name:"Lava Hound",      emoji:"🐕", biome:"dragon", minFloor:35, weight:6, hpMult:0.9, dmgMult:1.2, mechanics:["armor","poison"] },

  // ── Scorched Wastes (minFloor:37) ──
  { id:"ash_crawler",     name:"Ash Crawler",     emoji:"🦂", biome:"dragon", minFloor:37, weight:6, hpMult:1.0, dmgMult:1.1, mechanics:["armor","dodge"] },
  { id:"ember_wraith",    name:"Ember Wraith",    emoji:"🔥", biome:"dragon", minFloor:37, weight:6, hpMult:0.7, dmgMult:1.3, mechanics:["dodge","poison"] },
  { id:"scorched_golem",  name:"Scorched Golem",  emoji:"🗿", biome:"dragon", minFloor:37, weight:5, hpMult:1.9, dmgMult:1.0, mechanics:["armor","block"] },
  { id:"cinder_hound",    name:"Cinder Hound",    emoji:"🐺", biome:"dragon", minFloor:37, weight:7, hpMult:0.8, dmgMult:1.2, mechanics:["dodge","poison"] },

  // ── Magma Depths (minFloor:39) ──
  { id:"magma_elemental", name:"Magma Elemental", emoji:"🌋", biome:"dragon", minFloor:39, weight:5, hpMult:1.3, dmgMult:1.2, mechanics:["armor","poison"] },
  { id:"lava_troll",      name:"Lava Troll",      emoji:"👹", biome:"dragon", minFloor:39, weight:5, hpMult:1.7, dmgMult:1.1, mechanics:["armor","block"] },
  { id:"molten_sentinel", name:"Molten Sentinel", emoji:"⚔️", biome:"dragon", minFloor:39, weight:4, hpMult:1.5, dmgMult:1.2, mechanics:["armor","block","poison"] },
  { id:"volcanic_drake",  name:"Volcanic Drake",  emoji:"🦎", biome:"dragon", minFloor:39, weight:5, hpMult:1.2, dmgMult:1.3, mechanics:["armor","dodge"] },

  // ── Dragonbone Ridge (minFloor:42) ──
  { id:"bone_drake",      name:"Bone Drake",      emoji:"💀", biome:"dragon", minFloor:42, weight:5, hpMult:1.3, dmgMult:1.2, mechanics:["armor","dodge"] },
  { id:"ridge_harpy",     name:"Ridge Harpy",     emoji:"🦅", biome:"dragon", minFloor:42, weight:6, hpMult:0.7, dmgMult:1.4, mechanics:["dodge"] },
  { id:"fossil_golem",    name:"Fossil Golem",    emoji:"🗿", biome:"dragon", minFloor:42, weight:4, hpMult:2.0, dmgMult:1.0, mechanics:["armor","block"] },
  { id:"ancient_wyvern",  name:"Ancient Wyvern",  emoji:"🐉", biome:"dragon", minFloor:42, weight:4, hpMult:1.4, dmgMult:1.3, mechanics:["armor","dodge","block"] },

  // ── Ashen Throne (minFloor:45) ──
  { id:"throne_wraith",   name:"Throne Wraith",   emoji:"👁️", biome:"dragon", minFloor:45, weight:4, hpMult:0.9, dmgMult:1.4, mechanics:["dodge","block","poison"] },
  { id:"ashen_knight",    name:"Ashen Knight",    emoji:"⚔️", biome:"dragon", minFloor:45, weight:5, hpMult:1.4, dmgMult:1.2, mechanics:["armor","block"] },
  { id:"cinder_dragon",   name:"Cinder Dragon",   emoji:"🐉", biome:"dragon", minFloor:45, weight:4, hpMult:1.6, dmgMult:1.3, mechanics:["armor","block","dodge"] },
  { id:"crown_of_ash",    name:"Crown of Ash",    emoji:"👑", biome:"dragon", minFloor:45, weight:3, hpMult:1.8, dmgMult:1.4, mechanics:["armor","block","dodge","poison"] },
  // ── Void Abyss (minFloor:50) ──
  { id:"void_beast",       name:"Void Beast",       emoji:"👾", biome:"void", minFloor:50, weight:5, hpMult:1.5, dmgMult:1.5, mechanics:["dodge","block","poison"] },
  { id:"void_spawn",       name:"Void Spawn",       emoji:"🌀", biome:"void", minFloor:50, weight:7, hpMult:0.6, dmgMult:1.3, mechanics:["dodge","block"] },
  { id:"abyss_crawler",    name:"Abyss Crawler",    emoji:"🕳️", biome:"void", minFloor:50, weight:6, hpMult:1.0, dmgMult:1.2, mechanics:["armor","dodge","poison"] },
  { id:"null_shade",       name:"Null Shade",       emoji:"⬛", biome:"void", minFloor:50, weight:6, hpMult:0.5, dmgMult:1.5, mechanics:["dodge","block"] },

  // ── Shattered Expanse (minFloor:53) ──
  { id:"expanse_horror",   name:"Expanse Horror",   emoji:"👁️", biome:"void", minFloor:53, weight:5, hpMult:1.1, dmgMult:1.3, mechanics:["dodge","block","poison"] },
  { id:"fractured_golem",  name:"Fractured Golem",  emoji:"🗿", biome:"void", minFloor:53, weight:5, hpMult:1.9, dmgMult:1.1, mechanics:["armor","block"] },
  { id:"shard_wraith",     name:"Shard Wraith",     emoji:"💠", biome:"void", minFloor:53, weight:6, hpMult:0.7, dmgMult:1.4, mechanics:["dodge","block"] },
  { id:"entropy_wisp",     name:"Entropy Wisp",     emoji:"✨", biome:"void", minFloor:53, weight:6, hpMult:0.4, dmgMult:1.5, mechanics:["dodge","poison"] },

  // ── Entropy Fields (minFloor:56) ──
  { id:"entropy_elemental",name:"Entropy Elemental",emoji:"🌑", biome:"void", minFloor:56, weight:5, hpMult:1.2, dmgMult:1.4, mechanics:["armor","dodge","poison"] },
  { id:"decay_walker",     name:"Decay Walker",     emoji:"🧟", biome:"void", minFloor:56, weight:5, hpMult:1.3, dmgMult:1.2, mechanics:["armor","poison"] },
  { id:"unraveling_horror",name:"Unraveling Horror",emoji:"👾", biome:"void", minFloor:56, weight:4, hpMult:1.0, dmgMult:1.5, mechanics:["dodge","block","poison"] },
  { id:"void_tendril",     name:"Void Tendril",     emoji:"🦑", biome:"void", minFloor:56, weight:6, hpMult:0.5, dmgMult:1.6, mechanics:["dodge","block"] },

  // ── Realm of the Unborn (minFloor:60) ──
  { id:"unborn_specter",   name:"Unborn Specter",   emoji:"👻", biome:"void", minFloor:60, weight:4, hpMult:0.8, dmgMult:1.5, mechanics:["dodge","block","poison"] },
  { id:"formless_one",     name:"Formless One",     emoji:"🌫️", biome:"void", minFloor:60, weight:5, hpMult:1.1, dmgMult:1.4, mechanics:["dodge","block"] },
  { id:"proto_beast",      name:"Proto Beast",      emoji:"🦕", biome:"void", minFloor:60, weight:4, hpMult:1.4, dmgMult:1.3, mechanics:["armor","dodge","poison"] },
  { id:"the_nameless",     name:"The Nameless",     emoji:"❓", biome:"void", minFloor:60, weight:3, hpMult:1.6, dmgMult:1.4, mechanics:["armor","block","dodge","poison"] },

  // ── The Last Threshold (minFloor:65) ──
  { id:"threshold_guardian",name:"Threshold Guardian",emoji:"🔮",biome:"void",minFloor:65, weight:4, hpMult:1.8, dmgMult:1.4, mechanics:["armor","block","dodge"] },
  { id:"end_walker",       name:"End Walker",       emoji:"💀", biome:"void", minFloor:65, weight:4, hpMult:1.0, dmgMult:1.6, mechanics:["dodge","block","poison"] },
  { id:"final_shade",      name:"Final Shade",      emoji:"🌒", biome:"void", minFloor:65, weight:4, hpMult:0.8, dmgMult:1.7, mechanics:["dodge","block"] },
  { id:"the_inevitable",   name:"The Inevitable",   emoji:"♾️", biome:"void", minFloor:65, weight:2, hpMult:2.0, dmgMult:1.8, mechanics:["armor","block","dodge","poison"] },
];

// ── MINIBOSSES ────────────────────────────────────────────────────────────────
const MINIBOSS_POOL = [
  { id:"goblin_king",    name:"Goblin King",    emoji:"👑", minFloor:1,  weight:10, hpMult:1.0, dmgMult:1.0, mechanics:[] },
  { id:"spider_queen",   name:"Spider Queen",   emoji:"🦂", minFloor:3,  weight:9,  hpMult:1.1, dmgMult:1.1, mechanics:["poison","dodge"] },
  { id:"bone_knight",    name:"Bone Knight",    emoji:"🗡️", minFloor:5,  weight:8,  hpMult:1.2, dmgMult:1.1, mechanics:["armor","block"] },
  { id:"frost_giant",    name:"Frost Giant",    emoji:"❄️", minFloor:10, weight:6,  hpMult:1.3, dmgMult:1.2, mechanics:["armor","block","freeze"] },
  { id:"shadow_lord",    name:"Shadow Lord",    emoji:"👁️", minFloor:20, weight:5,  hpMult:1.4, dmgMult:1.3, mechanics:["dodge","block","poison"] },
  { id:"ancient_dragon", name:"Ancient Dragon", emoji:"🐉", minFloor:35, weight:3,  hpMult:1.6, dmgMult:1.4, mechanics:["armor","block","dodge"] },
  { id:"void_herald",    name:"Void Herald",    emoji:"👿", minFloor:50, weight:2,  hpMult:1.8, dmgMult:1.5, mechanics:["dodge","block","poison","freeze"],
    phases:true,
    abilities:[
      { type:"freeze",    chance:0.20, trigger:"per_turn" },
      { type:"weaken",    chance:0.25, trigger:"per_turn" },
      { type:"stun_hero", chance:0.25, trigger:"on_attack", duration:2 },
    ]
  },
];

// ── BIOME EVENTS ─────────────────────────────────────────────────────────────
// trigger:    when the event can fire during combat
//   per_round  = once when a new mob spawns
//   per_turn   = after each player answer
//   on_kill    = when a mob dies
//   always     = passive, activated at dungeon start (no roll needed)
//
// fireChance: probability the event fires each time its trigger occurs
//             (ignored for 'always' — those are always active)
//
// effect.type dispatcher (handled in dungeon.js applyBiomeEvent):
//   slowed         — timer -value seconds for `rounds` rounds
//   miss_attack    — hero attacks miss with `chance` probability for `rounds` rounds
//   weakened       — hero damage ×(1-pct) for `rounds` rounds
//   cursed         — random mob stat (armor/dodge/dmg) -value for roundsMin–roundsMax rounds
//   dot_second     — real-time dmg: `dmg` HP/sec for `durationMin`–`durationMax` sec
//                    (dragon burning_ground has no duration — lasts while mob is alive)
//   direct_dmg     — instant hero HP loss: hero.maxHp × pct
//   gold_loss      — lose pct of dungeon gold earned so far
//   hypothermia    — each stack: maxHp × pctPerStack, cap at `cap` fraction
//   ambush         — mob deals heroHpPct dmg to hero AND loses mobHpPct of its own HP
//   free_first_hit — current mob gets one free attack before combat starts
//   illusion_spawn — insert illusion mob before current mob (hpMult/dmgMult of original)
//   revive         — mob resurrects once with hpPct of its maxHp
//   buff_queue     — 1–`count[1]` random upcoming mobs gain +hpBonus HP
//   skip_turn      — hero's next answer is skipped (mob attacks)
//   heat_exhaustion— every `everyN` answers, timer -timerPenalty seconds (cumulative)
//   unstable_hp    — mob HP varies ±variance each round (visual instability)
//   strip_buff     — remove one random positive hero status
//   mob_power_up   — mob randomly gains HP/dmg/dodge boost
//   random_event   — apply one random event from another biome (tier tierMin–tierMax)

const BIOME_EVENTS = {
  goblin: [
    { id:'trap_triggered',    tier:1, trigger:'per_turn',  fireChance:0.25,
      effect:{ type:'slowed', value:1.5, rounds:1 }, dmgPct:0.03,
      label:'🪤 Trap', desc:'Наступил в ловушку — замедлен и получает урон' },

    { id:'missing_coins',     tier:2, trigger:'per_round', fireChance:0.40,
      effect:{ type:'gold_loss', pct:0.20 },
      label:'💰 Missing Coins', desc:'Гоблины украли часть золота' },

    { id:'explosive_scrap',   tier:2, trigger:'per_round', fireChance:0.35,
      effect:{ type:'direct_dmg', pct:0.08 },
      label:'🧨 Explosive Scrap', desc:'Взрыв — герой получает урон' },

    { id:'toxic_spores',      tier:3, trigger:'per_round', fireChance:0.50,
      effect:{ type:'miss_attack', chance:0.15, rounds:1 },
      label:'🍄 Toxic Spores', desc:'Споры снижают точность атаки' },

    { id:'ambush',            tier:3, trigger:'per_turn',  fireChance:0.20,
      effect:{ type:'ambush', heroHpPct:0.05, mobHpPct:0.30 },
      label:'⚠️ Ambush', desc:'Моб берёт себя на таран — урон обоим' },
  ],

  spider: [
    { id:'sticky_web',        tier:1, trigger:'per_turn',  fireChance:0.30,
      effect:{ type:'slowed', value:2.0, rounds:1 },
      label:'🕸️ Sticky Web', desc:'Паутина замедляет героя' },

    { id:'venomous_air',      tier:2, trigger:'per_round', fireChance:0.40,
      effect:{ type:'dot_second', dmg:1, roundsMin:2, roundsMax:5, dotEmoji:'☠️' },
      label:'☠️ Venomous Air', desc:'Ядовитый воздух — урон каждую секунду на N раундов' },

    { id:'web_fog',           tier:2, trigger:'per_round', fireChance:0.45,
      effect:{ type:'miss_attack', chance:0.20, rounds:1 },
      label:'🌫️ Web Fog', desc:'Туман из паутины снижает точность' },

    { id:'egg_cluster',       tier:3, trigger:'on_kill',   fireChance:0.30,
      effect:{ type:'multi_spawn', count:3, hpMult:0.15, dmgMult:0.20,
               spawnName:'Baby Spider', spawnEmoji:'🕷️', dodge:0.10 },
      label:'🥚 Egg Cluster', desc:'Из яйца вылупляются 3 маленьких паучка' },

    { id:'something_crawls',  tier:3, trigger:'per_round', fireChance:0.30,
      effect:{ type:'free_first_hit' },
      label:'🕷️ Something Crawls', desc:'Что-то ползёт — моб атакует первым' },
  ],

  skeleton: [
    { id:'funeral_bell',      tier:2, trigger:'per_round', fireChance:0.45,
      effect:{ type:'buff_queue', hpBonus:0.25, countMin:1, countMax:3 },
      label:'🔔 Funeral Bell', desc:'Колокол — случайные мобы в очереди жирнее' },

    { id:'haunting_presence', tier:2, trigger:'per_round', fireChance:0.40,
      effect:{ type:'weakened', pct:0.25, rounds:1 },
      label:'👻 Haunting Presence', desc:'Призрак давит — урон героя снижен' },

    { id:'ancient_curse',     tier:3, trigger:'per_round', fireChance:0.35,
      effect:{ type:'cursed', value:1, roundsMin:2, roundsMax:4 },
      label:'☠️ Ancient Curse', desc:'Проклятие снижает один случайный стат' },

    { id:'restless_dead',     tier:4, trigger:'on_kill',   fireChance:0.20,
      effect:{ type:'revive', hpPct:0.30 },
      label:'🪦 Restless Dead', desc:'Мёртвый встаёт снова с 30% HP' },
  ],

  frozen: [
    { id:'frostbite',         tier:1, trigger:'per_round', fireChance:0.50,
      effect:{ type:'slowed', value:2.0, rounds:1 },
      label:'🥶 Frostbite', desc:'Обморожение замедляет реакцию' },

    { id:'blizzard',          tier:3, trigger:'per_round', fireChance:0.30,
      effect:{ type:'miss_attack', chance:0.25, roundsMin:2, roundsMax:4 },
      label:'🌨️ Blizzard', desc:'Метель снижает точность на несколько раундов' },

    { id:'freezing_wind',     tier:4, trigger:'per_turn',  fireChance:0.25,
      effect:{ type:'skip_turn' },
      label:'❄️ Freezing Wind', desc:'Ледяной ветер — следующий ход пропускается' },

    { id:'hypothermia',       tier:4, trigger:'per_round', fireChance:0.60,
      effect:{ type:'hypothermia', pctPerStack:0.03, cap:0.80 },
      label:'💙 Hypothermia', desc:'Переохлаждение постепенно снижает макс. HP' },
  ],

  shadow: [
    { id:'living_shadows',    tier:2, trigger:'per_round', fireChance:0.35,
      effect:{ type:'illusion_spawn', hpMult:0.80, dmgMult:0.30 },
      label:'🌑 Living Shadows', desc:'Тень материализуется перед мобом' },

    { id:'false_reflection',  tier:2, trigger:'per_round', fireChance:0.35,
      effect:{ type:'illusion_spawn', hpMult:0.80, dmgMult:0.30 },
      label:'🪞 False Reflection', desc:'Отражение появляется как слабый двойник' },

    { id:'whispers',          tier:3, trigger:'per_round', fireChance:0.40,
      effect:{ type:'random_event', tierMin:1, tierMax:2 },
      label:'👁️ Whispers', desc:'Шёпот из тьмы — случайный слабый эффект' },

    { id:'reality_shift',     tier:4, trigger:'per_round', fireChance:0.25,
      effect:{ type:'random_event', tierMin:3, tierMax:3 },
      label:'🔮 Reality Shift', desc:'Реальность искажается — средний случайный эффект' },
  ],

  dragon: [
    { id:'dragon_fear',       tier:2, trigger:'per_round', fireChance:0.40,
      effect:{ type:'weakened', pct:0.30, rounds:2 },
      label:'🐉 Dragon Fear', desc:'Страх дракона — урон героя снижен' },

    { id:'falling_ember',     tier:3, trigger:'per_round', fireChance:0.35,
      effect:{ type:'weakened', pct:0.30, roundsMin:1, roundsMax:3 },
      label:'☄️ Falling Ember', desc:'Падающий уголь — урон снижен на несколько раундов' },

    { id:'burning_ground',    tier:3, trigger:'always',    fireChance:1.00,
      effect:{ type:'dot_second', dmg:1, dotEmoji:'🔥' },
      label:'🔥 Burning Ground', desc:'Земля горит — урон каждую секунду пока жив моб' },

    { id:'lava_burst',        tier:4, trigger:'on_kill',   fireChance:0.35,
      effect:{ type:'direct_dmg', pct:0.15 },
      label:'🌋 Lava Burst', desc:'Взрыв лавы после смерти моба' },

    { id:'heat_exhaustion',   tier:4, trigger:'per_turn',  fireChance:1.00,
      effect:{ type:'heat_exhaustion', timerPenalty:0.5, everyN:5 },
      label:'🌡️ Heat Exhaustion', desc:'Жара истощает — таймер сжимается с каждым ответом' },
  ],

  void: [
    { id:'unstable_form',     tier:2, trigger:'per_round', fireChance:0.45,
      effect:{ type:'unstable_hp', variance:0.20 },
      label:'❓ Unstable Form', desc:'HP моба нестабильно — меняется каждый раунд' },

    { id:'entropy_surge',     tier:3, trigger:'per_turn',  fireChance:0.20,
      effect:{ type:'strip_buff' },
      label:'📉 Entropy Surge', desc:'Энтропия снимает один положительный эффект героя' },

    { id:'reality_tear',      tier:4, trigger:'per_turn',  fireChance:0.25,
      effect:{ type:'random_event', tierMin:2, tierMax:3 },
      label:'🌀 Reality Tear', desc:'Разрыв реальности — случайный средний эффект' },

    { id:'existence_collapse', tier:5, trigger:'per_turn', fireChance:0.20,
      effect:{ type:'mob_power_up', options:['hp','dmg','dodge'],
               magnitude:{ hp:0.25, dmg:0.15, dodge:0.10 } },
      label:'⚫ Existence Collapse', desc:'Коллапс бытия — моб случайно усиливается' },
  ],
};

// ── BIOME EVENT ROLLER ────────────────────────────────────────────────────────
// Called before each floor to determine which events are active for this run.
// Returns array of active event objects (may be empty).
function rollBiomeEvents(theme, floor) {
  // Probability of activation per tier [t1, t2, t3, t4, t5], indexed by tier-1
  const TIER_CHANCES = [
    { maxFloor:5,   w:[0.45, 0.10, 0.03, 0.00, 0.00] },
    { maxFloor:15,  w:[0.45, 0.20, 0.08, 0.02, 0.00] },
    { maxFloor:30,  w:[0.45, 0.30, 0.18, 0.07, 0.01] },
    { maxFloor:50,  w:[0.45, 0.40, 0.30, 0.18, 0.05] },
    { maxFloor:65,  w:[0.45, 0.45, 0.42, 0.32, 0.14] },
    { maxFloor:999, w:[0.45, 0.45, 0.45, 0.42, 0.28] },
  ];
  const row = TIER_CHANCES.find(t => floor <= t.maxFloor) ?? TIER_CHANCES[TIER_CHANCES.length - 1];
  const pool = BIOME_EVENTS[theme] ?? [];
  return pool.filter(ev => Math.random() < row.w[ev.tier - 1]);
}

// ── MECHANIC DEFINITIONS ──────────────────────────────────────────────────────
const MECHANIC_DEFS = {
  poison: (stats, floor) => ({ poison: { dmg: Math.max(2, Math.round(stats.dmg * 0.30)), rounds: 2 + Math.floor(floor / 20) } }),
  freeze: (_s, floor)   => ({ freeze: { rounds: 1 + Math.floor(floor / 15) } }),
  armor:  (stats)       => ({ currentArmor: Math.max(1, Math.round(stats.armor)) }),
  dodge:  (_s, floor)   => ({ dodge: Math.min(0.50, 0.15 + floor * 0.004) }),
  block:  (_s, floor)   => ({ block: Math.min(0.45, 0.15 + floor * 0.003) }),
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function weightedRandom(pool) {
  const total = pool.reduce((s, x) => s + (x.weight ?? 1), 0);
  let r = Math.random() * total;
  for (const item of pool) { r -= (item.weight ?? 1); if (r <= 0) return item; }
  return pool[pool.length - 1];
}

function weightedSample(pool, n) {
  const result = [], remaining = [...pool];
  for (let i = 0; i < Math.min(n, remaining.length); i++) {
    const pick = weightedRandom(remaining);
    result.push(pick);
    remaining.splice(remaining.indexOf(pick), 1);
  }
  return result;
}

// ── STAT FORMULA ──────────────────────────────────────────────────────────────
function getMonsterStats(heroLevel, floor, difficulty = "normal") {
  const DIFF = { easy:0.7, normal:1.0, hard:1.4, nightmare:2.0 };
  const expectedFloor = heroLevel * 0.8;
  const challenge = Math.max(0.4, floor / Math.max(1, expectedFloor));
  const mult = challenge * (DIFF[difficulty] ?? 1.0);
  return {
    hp:    Math.max(2,  Math.round((40 + floor * 10) * mult)),
    dmg:   Math.max(5,  Math.round((8  + floor * 2.5) * mult)),
    armor: Math.max(0,  Math.round((floor / 10) * mult)),
    count: Math.min(15, 3 + Math.floor(floor / 8)),
  };
}

function applyMechanicsToMob(stats, mechanics, floor) {
  const extra = {};
  for (const mech of mechanics) {
    const def = MECHANIC_DEFS[mech];
    if (def) Object.assign(extra, def(stats, floor));
  }
  return extra;
}

// ── MAIN GENERATOR ────────────────────────────────────────────────────────────
// Returns cfg object identical in shape to DUNGEON_CONFIG entries.
function generateDungeon(setId, floor, heroLevel, difficulty = "normal") {
  const f = Math.max(1, floor);

  // Biome
  const biome = weightedRandom(BIOME_POOL.filter(b => b.minFloor <= f));

  // Timer: portals use floor-based brackets (independent of biome).
  // Floors 1-5: 10s, 6-10: 9s, 11-15: 8s ... min 4s.
  const timerSec = Math.max(4, 10 - Math.floor((f - 1) / 5));

  // Gold
  const DIFF_GOLD = { easy:0.7, normal:1.0, hard:1.3, nightmare:1.8 };
  const goldBase = Math.round((3 + f * 1.2) * (DIFF_GOLD[difficulty] ?? 1));
  const goldReward = [Math.max(1, goldBase - 3), goldBase + 5];

  // Monster types — filtered by biome theme AND floor
  const availMonsters = MONSTER_POOL.filter(m => m.biome === biome.theme && m.minFloor <= f);
  // Fallback to any floor-appropriate mobs if biome has none yet
  const pool = availMonsters.length >= 2 ? availMonsters : MONSTER_POOL.filter(m => m.minFloor <= f);
  const pickedTypes = weightedSample(pool, f < 5 ? 2 : 3);

  // Base stats
  const base = getMonsterStats(heroLevel, f, difficulty);

  // Build monster entries (ranges — rollMob handles the actual roll)
  const monsters = pickedTypes.map(t => {
    const hp  = Math.max(1, Math.round(base.hp  * (t.hpMult  ?? 1)));
    const dmg = Math.max(1, Math.round(base.dmg * (t.dmgMult ?? 1)));
    const arm = Math.max(0, Math.round(base.armor * (t.hpMult ?? 1)));

    // How many mechanics active for this mob at this floor
    const mechCount = f < 5 ? 1 : f < 15 ? 2 : t.mechanics.length;
    const activeMechs = t.mechanics.slice(0, mechCount);
    const extras = applyMechanicsToMob({ hp, dmg, armor: arm }, activeMechs, f);

    return {
      name:  t.name,
      emoji: t.emoji,
      maxHp: [Math.max(1, hp - Math.round(hp * 0.15)), hp + Math.round(hp * 0.15)],
      dmg:   [Math.max(1, dmg - Math.round(dmg * 0.15)), dmg + Math.round(dmg * 0.15)],
      armor: arm > 0 ? [0, arm] : 0,
      dodge: 0,
      block: 0,
      count: [Math.max(2, base.count - 2), base.count + 2],
      ...extras,
    };
  });

  // Portal Guardian — replaces random miniboss in procedural dungeons.
  // Tier scales every 5 floors: appearance, stats, and mechanics grow progressively.
  const GUARDIAN_TIERS = [
    { minFloor:  1, tier: 1, name:"Portal Guardian",      aura:"stone",     color:"#6b7280", glow:"rgba(107,114,128,0.50)", hpMult:3.0, dmgMult:1.00, mechanics:[] },
    { minFloor:  5, tier: 2, name:"Iron Guardian",        aura:"iron",      color:"#64748b", glow:"rgba(100,116,139,0.55)", hpMult:3.2, dmgMult:1.05, mechanics:[] },
    { minFloor: 10, tier: 3, name:"Thorned Guardian",     aura:"thorn",     color:"#16a34a", glow:"rgba(22,163,74,0.55)",   hpMult:3.5, dmgMult:1.10, mechanics:["armor"] },
    { minFloor: 15, tier: 4, name:"Frost Guardian",       aura:"frost",     color:"#38bdf8", glow:"rgba(56,189,248,0.55)",  hpMult:3.7, dmgMult:1.15, mechanics:["armor"] },
    { minFloor: 20, tier: 5, name:"Shadow Guardian",      aura:"shadow",    color:"#7c3aed", glow:"rgba(124,58,237,0.60)",  hpMult:4.0, dmgMult:1.20, mechanics:["armor","block"] },
    { minFloor: 25, tier: 6, name:"Tempest Guardian",     aura:"tempest",   color:"#facc15", glow:"rgba(250,204,21,0.55)",  hpMult:4.2, dmgMult:1.25, mechanics:["armor","block"] },
    { minFloor: 30, tier: 7, name:"Infernal Guardian",    aura:"fire",      color:"#ef4444", glow:"rgba(239,68,68,0.60)",   hpMult:4.5, dmgMult:1.30, mechanics:["armor","block","dodge"] },
    { minFloor: 35, tier: 8, name:"Magma Guardian",       aura:"magma",     color:"#f97316", glow:"rgba(249,115,22,0.60)",  hpMult:4.8, dmgMult:1.35, mechanics:["armor","block","dodge"] },
    { minFloor: 40, tier: 9, name:"Arcane Guardian",      aura:"arcane",    color:"#818cf8", glow:"rgba(129,140,248,0.60)", hpMult:5.0, dmgMult:1.40, mechanics:["armor","block","dodge"] },
    { minFloor: 45, tier:10, name:"Void Guardian",        aura:"void",      color:"#e879f9", glow:"rgba(232,121,249,0.65)", hpMult:5.2, dmgMult:1.45, mechanics:["armor","block","dodge"] },
    { minFloor: 50, tier:11, name:"Celestial Guardian",   aura:"celestial", color:"#fbbf24", glow:"rgba(251,191,36,0.65)",  hpMult:5.5, dmgMult:1.50, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 55, tier:12, name:"Abyssal Guardian",     aura:"abyss",     color:"#3b82f6", glow:"rgba(59,130,246,0.65)",  hpMult:5.8, dmgMult:1.55, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 60, tier:13, name:"Radiant Guardian",     aura:"radiant",   color:"#f0abfc", glow:"rgba(240,171,252,0.65)", hpMult:6.0, dmgMult:1.60, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 65, tier:14, name:"Chaos Guardian",       aura:"chaos",     color:"#fb923c", glow:"rgba(251,146,60,0.65)",  hpMult:6.3, dmgMult:1.65, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 70, tier:15, name:"Ancient Guardian",     aura:"ancient",   color:"#b45309", glow:"rgba(180,83,9,0.65)",    hpMult:6.6, dmgMult:1.70, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 75, tier:16, name:"Spectral Guardian",    aura:"spectral",  color:"#67e8f9", glow:"rgba(103,232,249,0.65)", hpMult:7.0, dmgMult:1.75, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 80, tier:17, name:"Titan Guardian",       aura:"titan",     color:"#9ca3af", glow:"rgba(156,163,175,0.70)", hpMult:7.5, dmgMult:1.80, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 85, tier:18, name:"Rift Guardian",        aura:"rift",      color:"#4ade80", glow:"rgba(74,222,128,0.70)",  hpMult:8.0, dmgMult:1.90, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 90, tier:19, name:"Sovereign Guardian",   aura:"sovereign", color:"#dc2626", glow:"rgba(220,38,38,0.75)",   hpMult:9.0, dmgMult:2.00, mechanics:["armor","block","dodge","poison"] },
    { minFloor: 95, tier:20, name:"Eternal Guardian",     aura:"eternal",   color:"#e2e8f0", glow:"rgba(226,232,240,0.80)", hpMult:10.0,dmgMult:2.20, mechanics:["armor","block","dodge","poison"] },
  ];
  const guardianTier = [...GUARDIAN_TIERS].reverse().find(t => f >= t.minFloor) || GUARDIAN_TIERS[0];

  const bossHp  = Math.max(10, Math.round(base.hp  * guardianTier.hpMult));
  const bossDmg = Math.max(8,  Math.round(base.dmg * guardianTier.dmgMult));
  const bossArm = Math.max(0,  Math.round(base.armor * (guardianTier.hpMult * 0.4)));

  const bossExtras = applyMechanicsToMob({ hp: bossHp, dmg: bossDmg, armor: bossArm }, guardianTier.mechanics, f);

  const boss = {
    name:  guardianTier.name,
    emoji: "🔮",
    isGuardian: true,
    guardianTier: guardianTier.tier,
    guardianAura: guardianTier.aura,
    guardianColor: guardianTier.color,
    guardianGlow: guardianTier.glow,
    maxHp: [Math.max(5, bossHp - 10), bossHp + 10],
    dmg:   [Math.max(5, bossDmg - 5), bossDmg + 5],
    armor: bossArm > 0 ? [Math.max(0, bossArm - 3), bossArm + 3] : 0,
    dodge: 0,
    block: 0,
    isBoss: true,
    ...bossExtras,
  };

  const biomeEvents = rollBiomeEvents(biome.theme, f);

  return {
    name: biome.name,
    theme: biome.theme,
    locationId: biome.id,
    timerSec,
    timerDmg: 0,
    goldReward,
    monsters,
    boss,
    comboSystem: true,
    biomeEvents,
    // Meta
    floor: f, setId, difficulty, heroLevel,
    _generated: true,
  };
}

// ── LEGACY CONFIG (Set 1, kept for backward compatibility) ────────────────────
const DUNGEON_CONFIG = {
  1: {
    1: {
      name: "Goblin Cave", theme: "goblin", timerSec: 0, goldReward: [0, 7],
      monsters: [
        { name:"Goblin Scout",   emoji:"👺", maxHp:[1,3],  armor:0, dodge:0, block:0, dmg:[10,20], count:[2,7] },
        { name:"Goblin Warrior", emoji:"👹", maxHp:[1,4],  armor:0, dodge:0, block:0, dmg:[15,25], count:[3,6] }
      ],
      boss: { name:"Goblin King", emoji:"👑", maxHp:[5,15], armor:0, dodge:0, block:0, dmg:[20,30], isBoss:true },
    },
    2: {
      name: "Spider Nest", theme: "spider", timerSec: 8, timerDmg: 8, goldReward: [1, 9],
      monsters: [
        { name:"Cave Spider",   emoji:"🕷️", maxHp:[2,5], armor:0, dodge:0.30, block:0, dmg:[12,18], poison:{dmg:[3,6],rounds:[2,4]}, count:[8,14] },
        { name:"Poison Spider", emoji:"🕸️", maxHp:[2,5], armor:0, dodge:0.30, block:0, dmg:[15,20], poison:{dmg:[4,8],rounds:[2,4]}, count:[6,12] },
      ],
      boss: { name:"Spider Queen", emoji:"🦂", maxHp:[10,20], armor:0, dodge:0.20, block:0, dmg:[25,40], poison:{dmg:8,rounds:4}, isBoss:true },
    },
    3: {
      name: "Skeleton Crypt", theme: "skeleton", timerSec: 6, timerDmg: 0, goldReward: [2, 11],
      monsters: [
        { name:"Skeleton Warrior", emoji:"💀", maxHp:[2,4], armor:[0,3], dodge:0, block:0,           dmg:[14,22], count:[4,9] },
        { name:"Skeleton Guard",   emoji:"🦴", maxHp:[2,4], armor:[0,4], dodge:0, block:[0.15,0.30], dmg:[14,22], count:[3,9] },
        { name:"Dark Knight",      emoji:"⚔️", maxHp:[2,5], armor:[3,7], dodge:0, block:[0.20,0.30], dmg:[18,25], count:[2,6] },
      ],
      boss: { name:"Bone Knight", emoji:"🗡️", maxHp:[20,40], armor:[5,10], dodge:0, block:[0.25,0.40], dmg:[22,50], isBoss:true },
    },
    4: {
      name: "Frozen Fortress", theme: "frozen", timerSec: 5, goldReward: [3, 13],
      monsters: [
        { name:"Ice Mage",     emoji:"🧊", maxHp:[2,5],  armor:0,      dodge:0,           block:0, dmg:[16,50], freeze:{rounds:[1,3]}, count:[5,10] },
        { name:"Frozen Golem", emoji:"🗿", maxHp:[5,10], armor:[3,10], dodge:0,           block:0, dmg:[18,26], freeze:{rounds:[2,3]}, count:[3,5]  },
        { name:"Wolf Rider",   emoji:"🐺", maxHp:[2,4],  armor:0,      dodge:[0.25,0.40], block:0, dmg:[16,24], freeze:{rounds:[1,2]}, count:[3,7]  },
      ],
      boss: { name:"Frost Giant", emoji:"❄️", maxHp:[20,50], armor:[15,20], dodge:0, block:[0.15,0.40], dmg:[35,55], freeze:{rounds:[2,4]}, isBoss:true },
    },
    5: {
      name: "Shadow Dungeon", theme: "shadow", timerSec: 5, goldReward: [4, 15],
      monsters: [
        { name:"Shadow Sprite", emoji:"👤", maxHp:[2,7], armor:0, dodge:[0.15,0.25], block:0,           dmg:[18,26], count:[4,13] },
        { name:"Dark Wraith",   emoji:"🌑", maxHp:[2,7], armor:0, dodge:[0.10,0.20], block:[0.15,0.25], dmg:[18,26], count:[3,13] },
        { name:"Void Stalker",  emoji:"🕳️", maxHp:[1,7], armor:0, dodge:[0.25,0.40], block:0,           dmg:[20,30], count:[3,11] },
      ],
      boss: { name:"Shadow Lord", emoji:"👁️", maxHp:[25,65], armor:[7,15], dodge:[0.25,0.50], block:[0.20,0.30], dmg:[24,70], poison:{dmg:[5,20],rounds:[1,5]}, isBoss:true },
    },
    6: {
      name: "Dragon Mountain", theme: "dragon", timerSec: 4, goldReward: [5, 17],
      monsters: [
        { name:"Fire Drake",    emoji:"🦎", maxHp:[10,15], armor:[5,8],   dodge:0,           block:0,           dmg:[20,40], count:[4,11] },
        { name:"Dragon Knight", emoji:"🏰", maxHp:[10,15], armor:[10,20], dodge:0,           block:[0.20,0.30], dmg:[20,30], count:[4,8]  },
        { name:"Wyvern Scout",  emoji:"🦅", maxHp:[7,13],  armor:[2,7],   dodge:[0.15,0.40], block:0,           dmg:[20,45], count:[5,11] },
      ],
      boss: { name:"Ancient Dragon", emoji:"🐉", maxHp:[40,80], armor:[15,30], dodge:[0.10,0.20], block:[0.25,0.35], dmg:[28,38], isBoss:true },
    },
    7: {
      name: "❓❓❓", theme: "boss", timerSec: 4, goldReward: [100], monsters: [],
      boss: {
        name:"Overlord", emoji:"👿", maxHp:[300], armor:[100], dodge:[0.25], block:[0.25], dmg:[45,75], isBoss:true, phases:true,
        abilities:[
          { type:"freeze",    chance:0.25, trigger:"per_turn"  },
          { type:"weaken",    chance:0.35, trigger:"per_turn"  },
          { type:"stun_hero", chance:0.35, trigger:"on_attack", duration:2 },
        ],
      },
    },
  }
};
