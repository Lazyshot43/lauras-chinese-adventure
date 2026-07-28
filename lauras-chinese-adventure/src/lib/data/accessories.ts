import { Accessory } from "@/types";

/**
 * Cosmetic accessories for the rubber ducky avatar.
 * Inspired by Chinese Teacher Laura's real duck collection.
 * Soft, cute, and Chinese cultural themed.
 */

export const ACCESSORIES: Accessory[] = [
  {
    id: "flower-lotus",
    name: "莲花",
    namePinyin: "liánhuā",
    description: "A floating lotus flower. Elegant and pure.",
    price: 0,
    category: "flower",
    emoji: "🪷",
  },
  {
    id: "hat-bamboo",
    name: "竹叶帽",
    namePinyin: "zhúyè mào",
    description: "A soft bamboo leaf hat — classic Chinese countryside style.",
    price: 25,
    category: "hat",
    emoji: "🎋",
  },
  {
    id: "hat-scholar",
    name: "书生帽",
    namePinyin: "shūshēng mào",
    description: "A traditional scholar’s hat. Looks very wise!",
    price: 45,
    category: "hat",
    emoji: "🎓",
  },
  {
    id: "hat-crown",
    name: "小皇冠",
    namePinyin: "xiǎo huángguàn",
    description: "A sparkly little crown for a royal ducky.",
    price: 60,
    category: "hat",
    emoji: "👑",
  },
  {
    id: "hat-panda",
    name: "熊猫帽",
    namePinyin: "xióngmāo mào",
    description: "A fluffy panda hat. Everyone will smile at you.",
    price: 70,
    category: "hat",
    unlockLevel: 4,
    emoji: "🐼",
  },
  {
    id: "glasses-round",
    name: "圆眼镜",
    namePinyin: "yuán yǎnjìng",
    description: "Cute round glasses for a studious ducky.",
    price: 20,
    category: "glasses",
    emoji: "👓",
  },
  {
    id: "sunglasses",
    name: "太阳镜",
    namePinyin: "tàiyángjìng",
    description: "Cool sunglasses for sunny adventures.",
    price: 35,
    category: "glasses",
    emoji: "🕶️",
  },
  {
    id: "scarf-red",
    name: "红围巾",
    namePinyin: "hóng wéijīn",
    description: "A warm red scarf. Perfect for mountain paths.",
    price: 30,
    category: "scarf",
    emoji: "🧣",
  },
  {
    id: "necklace-jade",
    name: "玉项链",
    namePinyin: "yù xiàngliàn",
    description: "A simple jade pendant for good luck.",
    price: 55,
    category: "necklace",
    emoji: "💎",
  },
  {
    id: "necklace-lucky",
    name: "幸运红绳",
    namePinyin: "xìngyùn hóngshéng",
    description: "A red string bracelet for extra luck on quizzes.",
    price: 15,
    category: "necklace",
    emoji: "🧧",
  },
  {
    id: "backpack-book",
    name: "书背包",
    namePinyin: "shū bēibāo",
    description: "A little backpack full of Chinese textbooks.",
    price: 40,
    category: "backpack",
    emoji: "🎒",
  },
  {
    id: "prop-fan",
    name: "折扇",
    namePinyin: "zhéshàn",
    description: "A folding fan. Wave it while reviewing vocabulary!",
    price: 50,
    category: "prop",
    emoji: "🪭",
  },
  {
    id: "prop-sword",
    name: "木剑",
    namePinyin: "mù jiàn",
    description: "A wooden practice sword for martial arts lessons.",
    price: 65,
    category: "prop",
    emoji: "⚔️",
  },
  {
    id: "prop-camera",
    name: "小相机",
    namePinyin: "xiǎo xiàngjī",
    description: "A tiny camera for traveling ducks.",
    price: 45,
    category: "prop",
    emoji: "📷",
  },
  {
    id: "flower-peach",
    name: "桃花",
    namePinyin: "táohuā",
    description: "Soft peach blossoms for spring vibes.",
    price: 20,
    category: "flower",
    emoji: "🌸",
  },
  {
    id: "hat-opera",
    name: "戏曲头饰",
    namePinyin: "xìqǔ tóushì",
    description: "A colorful Chinese opera headdress. Very dramatic!",
    price: 90,
    category: "hat",
    unlockLevel: 8,
    emoji: "🎭",
  },
];

export function getAccessoryById(id: string): Accessory | undefined {
  return ACCESSORIES.find((a) => a.id === id);
}

export function getAccessoriesByIds(ids: string[]): Accessory[] {
  return ids.map((id) => getAccessoryById(id)).filter(Boolean) as Accessory[];
}
