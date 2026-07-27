// Core types for Laura's Chinese Adventure

export interface VocabItem {
  id: string;
  characters: string;
  pinyin: string;
  english: string;
  exampleSentence?: {
    characters: string;
    pinyin: string;
    english: string;
  };
  hskLevel: 1 | 2;
  category?: string;
}

export interface Lesson {
  id: string;
  order: number;
  title: string;
  titlePinyin: string;
  description: string;
  learningGoals: string[];
  vocabIds: string[];
  quizQuestionIds: string[];
  unlockRequirement?: string; // previous lesson id
}

export interface QuizQuestion {
  id: string;
  type: "char-to-en" | "en-to-char";
  prompt: string; // characters+pinyin or english
  promptPinyin?: string; // only for char-to-en
  correctAnswer: string;
  options?: string[]; // for multiple choice
  explanation?: string;
  relatedVocabId: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  red_beans: number;
  equipped_accessories: string[]; // accessory ids
  owned_accessories: string[];
  completed_lessons: string[];
  current_lesson_id: string | null;
  total_score: number;
  created_at: string;
  updated_at: string;
}

export interface Accessory {
  id: string;
  name: string;
  namePinyin: string;
  description: string;
  price: number; // in red beans
  category: "hat" | "glasses" | "scarf" | "necklace" | "backpack" | "prop" | "flower";
  unlockLevel?: number; // min lessons completed
  emoji: string; // placeholder visual
  cssClass?: string; // for rendering on ducky
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  red_beans: number;
  completed_lessons: number;
  total_score: number;
}

export type StudyMode = "flashcards" | "review";
export type GameScreen = "map" | "study" | "quiz" | "store" | "leaderboard" | "profile";
