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
}

const sizeMap = {
  sm: "w-16 h-16 text-3xl",
  md: "w-24 h-24 text-5xl",
  lg: "w-36 h-36 text-7xl",
  xl: "w-48 h-48 text-8xl",
};

/**
 * Cute CSS/emoji rubber ducky.
 * Accessories overlay as absolute positioned emojis.
 * Later: replace the base 🦆 with a custom SVG or image of Laoshi Laura’s ducky student.
 */
export function RubberDucky({
  size = "md",
  equipped = [],
  className,
  bounce = false,
  onClick,
}: RubberDuckyProps) {
  const accessories = getAccessoriesByIds(equipped);

  return (
    <motion.div
      className={cn(
        "relative inline-flex items-center justify-center select-none cursor-pointer",
        sizeMap[size],
        className
      )}
      animate={bounce ? { y: [0, -10, 0] } : undefined}
      transition={bounce ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" } : undefined}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Base ducky body */}
      <span className="relative z-10 drop-shadow-md">🦆</span>

      {/* Accessory overlays */}
      {accessories.map((acc) => {
        // Simple positioning by category
        let pos = "absolute z-20";
        if (acc.category === "hat") pos += " -top-2 left-1/2 -translate-x-1/2 text-[0.55em]";
        else if (acc.category === "glasses") pos += " top-[28%] left-1/2 -translate-x-1/2 text-[0.4em]";
        else if (acc.category === "scarf") pos += " bottom-[18%] left-1/2 -translate-x-1/2 text-[0.45em]";
        else if (acc.category === "necklace") pos += " bottom-[30%] left-1/2 -translate-x-1/2 text-[0.35em]";
        else if (acc.category === "backpack") pos += " top-[40%] -right-1 text-[0.4em]";
        else if (acc.category === "flower") pos += " -top-1 -right-1 text-[0.4em]";
        else if (acc.category === "prop") pos += " bottom-0 -right-2 text-[0.5em]";

        return (
          <span key={acc.id} className={pos} title={acc.name}>
            {acc.emoji}
          </span>
        );
      })}
    </motion.div>
  );
}
