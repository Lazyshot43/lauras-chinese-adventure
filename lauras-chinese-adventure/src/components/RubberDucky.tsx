"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getAccessoriesByIds } from "@/lib/data/accessories";

interface RubberDuckyProps {
  size?: "sm" | "md" | "lg" | "xl";
  equipped?: string[];
  className?: string;
  bounce?: boolean;
  onClick?: () => void;
  showName?: boolean;
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-28 h-28",
  lg: "w-40 h-40",
  xl: "w-56 h-56",
};

/**
 * Cute anime-style rubber ducky inspired by Chinese Teacher Laura's real ducks.
 * Soft rounded body, big shiny eyes, little blush, and support for many accessories.
 */
export function RubberDucky({
  size = "md",
  equipped = [],
  className,
  bounce = false,
  onClick,
  showName = false,
}: RubberDuckyProps) {
  const accessories = getAccessoriesByIds(equipped);

  return (
    <motion.div
      className={cn(
        "relative inline-flex flex-col items-center justify-center select-none cursor-pointer ducky-stage",
        sizeMap[size],
        className
      )}
      animate={bounce ? { y: [0, -10, 0] } : undefined}
      transition={bounce ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : undefined}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Soft warm glow */}
        <div className="absolute inset-0 rounded-full bg-amber-100/50 blur-xl scale-90" />

        {/* Main body */}
        <div className="relative z-10 text-[1.15em] leading-none drop-shadow-md">
          🦆
        </div>

        {/* Anime blush */}
        <div className="absolute top-[42%] left-[18%] w-[12%] h-[8%] rounded-full bg-rose-300/55 blur-[2px]" />
        <div className="absolute top-[42%] right-[18%] w-[12%] h-[8%] rounded-full bg-rose-300/55 blur-[2px]" />

        {/* Accessories */}
        {accessories.map((acc) => {
          let pos = "absolute z-20 pointer-events-none";
          const s =
            size === "xl"
              ? "text-[0.55em]"
              : size === "lg"
              ? "text-[0.5em]"
              : "text-[0.45em]";

          if (acc.category === "hat") {
            pos += ` -top-[8%] left-1/2 -translate-x-1/2 ${s}`;
          } else if (acc.category === "glasses") {
            pos += ` top-[26%] left-1/2 -translate-x-1/2 ${s}`;
          } else if (acc.category === "scarf") {
            pos += ` bottom-[12%] left-1/2 -translate-x-1/2 ${s}`;
          } else if (acc.category === "necklace") {
            pos += ` bottom-[28%] left-1/2 -translate-x-1/2 ${s}`;
          } else if (acc.category === "backpack") {
            pos += ` top-[38%] -right-[6%] ${s}`;
          } else if (acc.category === "flower") {
            pos += ` -top-[4%] -right-[4%] ${s}`;
          } else if (acc.category === "prop") {
            pos += ` bottom-[2%] -right-[10%] ${s}`;
          }

          return (
            <span key={acc.id} className={pos} title={acc.name}>
              {acc.emoji}
            </span>
          );
        })}
      </div>

      {showName && (
        <div className="mt-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-medium text-amber-800 shadow-sm">
          小白白
        </div>
      )}
    </motion.div>
  );
}
