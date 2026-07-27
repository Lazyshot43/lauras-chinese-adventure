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
 * Placeholder for Laoshi Laura (the teacher character).
 * Currently uses a warm emoji + speech bubble.
 * Later: replace with illustrated character sprites / Lottie / CSS art.
 */
export function LaoshiLaura({
  message = "加油！你做得很好！",
  mood = "happy",
  className,
  size = "md",
}: LaoshiLauraProps) {
  const moodEmoji = {
    happy: "😊",
    proud: "🌟",
    encouraging: "💪",
    thinking: "🤔",
  }[mood];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex items-start gap-3", className)}
    >
      <div
        className={cn(
          "flex-shrink-0 rounded-full bg-gradient-to-br from-orange-200 to-rose-200 flex items-center justify-center shadow-md border-2 border-orange-100",
          size === "sm" ? "w-12 h-12 text-2xl" : "w-16 h-16 text-3xl"
        )}
      >
        {/* Placeholder face – later: real Laura illustration */}
        <span>{moodEmoji}</span>
      </div>
      <div className="relative bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-md border border-orange-100 max-w-xs">
        <p className="text-sm text-stone-700 leading-relaxed">
          <span className="font-medium text-orange-600">Laoshi Laura：</span>{" "}
          {message}
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent" />
      </div>
    </motion.div>
  );
}
