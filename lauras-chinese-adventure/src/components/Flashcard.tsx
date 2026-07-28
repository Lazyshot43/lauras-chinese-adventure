"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VocabItem } from "@/types";
import { cn } from "@/lib/utils";

interface FlashcardProps {
  item: VocabItem;
  onNext?: () => void;
  onPrev?: () => void;
  showControls?: boolean;
}

export function Flashcard({ item, onNext, onPrev, showControls = true }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="relative h-56 cursor-pointer perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 card-cute flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-50 to-amber-50"
            >
              <span className="hanzi text-5xl font-medium text-stone-800 mb-2">
                {item.characters}
              </span>
              <span className="text-lg text-orange-600 font-medium tracking-wide">
                {item.pinyin}
              </span>
              <p className="mt-4 text-xs text-stone-400">Tap to reveal</p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 card-cute flex flex-col items-center justify-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50"
            >
              <span className="text-2xl font-semibold text-stone-800 text-center">
                {item.english}
              </span>
              {item.exampleSentence && (
                <div className="mt-4 text-center">
                  <p className="hanzi text-lg text-stone-700">
                    {item.exampleSentence.characters}
                  </p>
                  <p className="text-sm text-teal-600">{item.exampleSentence.pinyin}</p>
                  <p className="text-xs text-stone-500 mt-1">
                    {item.exampleSentence.english}
                  </p>
                </div>
              )}
              <p className="mt-4 text-xs text-stone-400">Tap to flip back</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showControls && (
        <div className="flex justify-between mt-4 px-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
              onPrev?.();
            }}
            className="btn-secondary text-sm py-2 px-4"
            disabled={!onPrev}
          >
            ← Prev
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
              onNext?.();
            }}
            className="btn-primary text-sm py-2 px-4"
            disabled={!onNext}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
