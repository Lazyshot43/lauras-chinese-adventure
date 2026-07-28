import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Calculate red beans earned from a quiz score (0–100) and time bonus */
export function calculateRedBeans(
  correctCount: number,
  totalQuestions: number,
  timeSeconds: number
): number {
  const accuracy = correctCount / totalQuestions;
  const base = Math.round(accuracy * 40); // up to 40 beans
  // Speed bonus: faster = more (cap at 20 extra)
  const idealTime = totalQuestions * 8; // ~8s per question ideal
  const speedRatio = Math.max(0, Math.min(1, idealTime / Math.max(timeSeconds, 1)));
  const speedBonus = Math.round(speedRatio * 20);
  // Perfect score bonus
  const perfectBonus = accuracy === 1 ? 15 : 0;
  return Math.max(5, base + speedBonus + perfectBonus); // minimum 5 beans for trying
}

/** Format Chinese + pinyin display helper */
export function formatHanzi(characters: string, pinyin: string): string {
  return `${characters} (${pinyin})`;
}
