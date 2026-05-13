// ===================== DUNGEON CONFIG =====================
const DUNGEON_CONFIG = {
  1: {
    1: {
      name: "Goblin Cave", theme: "goblin",
      timerSec: 0,          // 0 = no timer
      goldReward: [0, 7],
      monsters: [
        { name:"Goblin Scout",   emoji:"👺", maxHp:[1,3], armor:0, dodge:0, block:0, dmg:[10,20], count:[2,7] },
        { name:"Goblin Warrior", emoji:"👹", maxHp:[1,4], armor:0, dodge:0, block:0, dmg:[15,25], count:[3,6] }
      ],
      boss: { name:"Goblin King", emoji:"👑", maxHp:[5,15], armor:0, dodge:0, block:0, dmg:[20,30], isBoss:true },
    },
    2: {
      name: "Spider Nest", theme: "spider",
      timerSec: 8,
      timerDmg: 8,          // damage when timer runs out
      goldReward: [1, 9],
      monsters: [
        { name:"Cave Spider",   emoji:"🕷️", maxHp:[2,5], armor:0, dodge:0.30, block:0, dmg:[12,18], poison:{dmg:[3,6],rounds:[2,4]}, count:[8,14] },
        { name:"Poison Spider", emoji:"🕸️", maxHp:[2,5], armor:0, dodge:0.30, block:0, dmg:[15,20], poison:{dmg:[4,8],rounds:[2,4]}, count:[6,12] },
      ],
      boss: { name:"Spider Queen", emoji:"🦂", maxHp:[10,20], armor:0, dodge:0.20, block:0, dmg:[25,40], poison:{dmg:8,rounds:4}, isBoss:true },
    },
    3: {
      name: "Skeleton Crypt", theme: "skeleton",
      timerSec: 6,
      timerDmg: 0,    // timer expiry triggers monster attack (no fixed dmg)
      goldReward: [2, 11],
      monsters: [
        // Pure armor — no shield, absorbs 1 hit
        { name:"Skeleton Warrior", emoji:"💀", maxHp:[2,4], armor:[0,3], dodge:0, block:0,          dmg:[14,22], count:[4,9] },
        // Shield — block chance, no armor
        { name:"Skeleton Guard",   emoji:"🦴", maxHp:[2,4], armor:[0,4],     dodge:0, block:[0.15,0.30], dmg:[14,22], count:[3,9] },
        // Both armor AND shield
        { name:"Dark Knight",      emoji:"⚔️",  maxHp:[2,5], armor:[3,7], dodge:0, block:[0.20,0.30], dmg:[18,25], count:[2,6] },
      ],
      // Boss: armor + shield + high HP
      boss: { name:"Bone Knight", emoji:"🗡️", maxHp:[20,40], armor:[5,10], dodge:0, block:[0.25,0.40], dmg:[22,50], isBoss:true },
    },
    4: {
      name: "Frozen Fortress", theme: "frozen",
      timerSec: 5,
      goldReward: [3, 13],
      monsters: [
        { name:"Ice Mage",     emoji:"🧊", maxHp:[2,5], armor:0,     dodge:0,          block:0,          dmg:[16,50], freeze:{rounds:[1,3]}, count:[5,10] },
        { name:"Frozen Golem", emoji:"🗿", maxHp:[5,10], armor:[3,10], dodge:0,          block:0,          dmg:[18,26], freeze:{rounds:[2,3]}, count:[3,5] },
        { name:"Wolf Rider",   emoji:"🐺", maxHp:[2,4], armor:0,     dodge:[0.25,0.40], block:0,         dmg:[16,24], freeze:{rounds:[1,2]}, count:[3,7] },
      ],
      boss: { name:"Frost Giant", emoji:"❄️", maxHp:[20,50], armor:[15,20], dodge:0, block:[0.15,0.40], dmg:[35,55], freeze:{rounds:[2,4]}, isBoss:true },
    },
    5: {
      name: "Shadow Dungeon", theme: "shadow",
      timerSec: 5,
      goldReward: [4, 15],
      monsters: [
        // Fast dodgy shades
        { name:"Shadow Sprite",  emoji:"👤", maxHp:[2,7], armor:0,     dodge:[0.15,0.25], block:0,          dmg:[18,26], count:[4,13] },
        // Tanky dark knights with block
        { name:"Dark Wraith",    emoji:"🌑", maxHp:[2,7], armor:0,     dodge:[0.10,0.20], block:[0.15,0.25], dmg:[18,26], count:[3,13] },
        // Glass cannon — low hp, high dodge
        { name:"Void Stalker",   emoji:"🕳️", maxHp:[1,7], armor:0,     dodge:[0.25,0.40], block:0,          dmg:[20,30], count:[3,11] },
      ],
      // Mini-boss: all mechanics — dodge + block + poison shadow aura
      boss: {
        name:"Shadow Lord", emoji:"👁️", maxHp:[25,65], armor:[7,15], dodge:[0.25,0.50], block:[0.20,0.30],
        dmg:[24,70], poison:{dmg:[5,20],rounds:[1,5]}, isBoss:true
      },
    },
    6: {
      name: "Dragon Mountain", theme: "dragon",
      timerSec: 4,
      goldReward: [5, 17],
      monsters: [
        // Heavy armored — need combos to break through
        { name:"Fire Drake",     emoji:"🦎", maxHp:[10,15], armor:[5,8], dodge:0,          block:0,          dmg:[20,40], count:[4,11] },
        // Shield + block — punishes single hits
        { name:"Dragon Knight",  emoji:"🏰", maxHp:[10,15], armor:[10,20], dodge:0,          block:[0.20,0.30], dmg:[20,30], count:[4,8] },
        // Dodge + armor combo — slippery and tough
        { name:"Wyvern Scout",   emoji:"🦅", maxHp:[7,13], armor:[2,7], dodge:[0.15,0.40], block:0,         dmg:[20,45], count:[5,11] },
      ],
      // Boss: everything — armor + block + dodge + high HP
      boss: {
        name:"Ancient Dragon", emoji:"🐉", maxHp:[40,80], armor:[15,30], dodge:[0.10,0.20], block:[0.25,0.35],
        dmg:[28,38], isBoss:true
      },
    },
    7: {
      name: "❓❓❓", theme: "boss",
      timerSec: 4,
      goldReward: [100],
      monsters: [],
      boss: {
        name: "Overlord", emoji: "👿",
        maxHp: [300], armor: [100], dodge: [0.25], block: [0.25],
        dmg: [45, 75], isBoss: true,
        phases: true,
        abilities: [
          { type: "freeze",    chance: 0.25, trigger: "per_turn"  },
          { type: "weaken",    chance: 0.35, trigger: "per_turn"  },
          { type: "stun_hero", chance: 0.35, trigger: "on_attack", duration: 2 },
        ],
      },
    },
  }
};
