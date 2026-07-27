import { Accessory } from "@/types";

/**
 * Cosmetic accessories for the rubber ducky avatar.
 * Players spend red beans to unlock them.
 * Visuals use emoji + CSS classes for now (easy to replace with real art later).
 */

export const ACCESSORIES: Accessory[] = [
  {
    id: "hat-bamboo",
    name: "竹叶帽",
    namePinyin: "zhúyè mào",
    description: "A soft bamboo leaf hat — classic Chinese countryside style.",
    price: 30,
    category: "hat",
    emoji: "🎋",
    cssClass: "acc-hat-bamboo",
  },
  {
    id: "hat-scholar",
    name: "书生帽",
    namePinyin: "shūshēng mào",
    description: "A traditional scholar’s hat. Looks very wise!",
    price: 50,
    category: "hat",
    emoji: "🎓",
    cssClass: "acc-hat-scholar",
  },
  {
    id: "glasses-round",
    name: "圆眼镜",
    namePinyin: "yuán yǎnjìng",
    description: "Cute round glasses for a studious ducky.",
    price: 25,
    category: "glasses",
    emoji: "👓",
    cssClass: "acc-glasses-round",
  },
  {
    id: "sunglasses",
    name: "太阳镜",
    namePinyin: "tàiyángjìng",
    description: "Cool sunglasses for sunny village adventures.",
    price: 40,
    category: "glasses",
    emoji: "🕶️",
    cssClass: "acc-sunglasses",
  },
  {
    id: "scarf-red",
    name: "红围巾",
    namePinyin: "hóng wéijīn",
    description: "A warm red scarf. Perfect for mountain paths.",
    price: 35,
    category: "scarf",
    emoji: "🧣",
    cssClass: "acc-scarf-red",
  },
  {
    id: "necklace-jade",
    name: "玉项链",
    namePinyin: "yù xiàngliàn",
    description: "A simple jade pendant for good luck.",
    price: 60,
    category: "necklace",
    emoji: "💎",
    cssClass: "acc-necklace-jade",
  },
  {
    id: "backpack-book",
    name: "书背包",
    namePinyin: "shū bēibāo",
    description: "A little backpack full of Chinese textbooks.",
    price: 45,
    category: "backpack",
    emoji: "🎒",
    cssClass: "acc-backpack",
  },
  {
    id: "flower-lotus",
    name: "莲花",
    namePinyin: "liánhuā",
    description: "A floating lotus flower. Elegant and pure.",
    price: 20,
    category: "flower",
    emoji: "🪷",
    cssClass: "acc-flower-lotus",
  },
  {
    id: "prop-sword",
    name: "木剑",
    namePinyin: "mù jiàn",
    description: "A wooden practice sword for martial arts lessons.",
    price: 70,
    category: "prop",
    emoji: "⚔️",
    cssClass: "acc-sword",
  },
  {
    id: "prop-fan",
    name: "折扇",
    namePinyin: "zhéshàn",
    description: "A folding fan. Wave it while reviewing vocabulary!",
    price: 55,
    category: "prop",
    emoji: "🪭",
    cssClass: "acc-fan",
  },
  {
    id: "hat-panda",
    name: "熊猫帽",
    namePinyin: "xióngmāo mào",
    description: "A fluffy panda hat. Everyone will smile at you.",
    price: 80,
    category: "hat",
    unlockLevel: 5,
    emoji: "🐼",
    cssClass: "acc-hat-panda",
  },
  {
    id: "necklace-lucky",
    name: "幸运红绳",
    namePinyin: "xìngyùn hóngshéng",
    description: "A red string bracelet for extra luck on quizzes.",
    price: 15,
    category: "necklace",
    emoji: "🧧",
    cssClass: "acc-lucky-string",
  },
];

export function getAccessoryById(id: string): Accessory | undefined {
  return ACCESSORIES.find((a) => a.id === id);
}

export function getAccessoriesByIds(ids: string[]): Accessory[] {
  return ids.map((id) => getAccessoryById(id)).filter(Boolean) as Accessory[];
}
