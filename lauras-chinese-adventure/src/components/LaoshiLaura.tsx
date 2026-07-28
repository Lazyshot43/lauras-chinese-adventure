"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LaoshiLauraProps {
  message?: string;
  mood?: "happy" | "proud" | "encouraging" | "thinking";
  className?: string;
  size?: "sm" | "md";
}

/**
 * Laoshi Laura – warm Chinese teacher character.
 * Inspired by the real Chinese Teacher Laura.
 * Currently uses a stylized avatar + speech bubble.
 * Later can be replaced with proper anime illustration of her.
 */
export function LaoshiLaura({
  message = "加油！你做得很好！",
  mood = "happy",
  className,
  size = "md",
}: LaoshiLauraProps) {
  const moodConfig = {
    happy: { emoji: "😊", color: "from-rose-200 to-orange-200", border: "border-rose-200" },
    proud: { emoji: "🌟", color: "from-amber-200 to-yellow-100", border: "border-amber-200" },
    encouraging: { emoji: "💪", color: "from-teal-100 to-emerald-100", border: "border-teal-200" },
    thinking: { emoji: "🤔", color: "from-stone-100 to-orange-50", border: "border-stone-200" },
  }[mood];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex items-start gap-3", className)}
    >
      {/* Avatar */}
      <div
        className={cn(
          "relative flex-shrink-0 rounded-full bg-gradient-to-br flex items-center justify-center shadow-md border-2",
          moodConfig.color,
          moodConfig.border,
          size === "sm" ? "w-12 h-12 text-2xl" : "w-16 h-16 text-3xl"
        )}
      >
        <span>{moodConfig.emoji}</span>
        {/* Small decorative hair pin / flower */}
        <span className="absolute -top-1 -right-1 text-sm">🌸</span>
      </div>

      {/* Speech bubble */}
      <div className="relative bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-md border border-red-100/70 max-w-xs">
        <p className="text-sm text-stone-700 leading-relaxed">
          <span className="font-semibold text-[var(--primary)]">Laoshi Laura：</span>{" "}
          {message}
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent" />
      </div>
    </motion.div>
  );
}
