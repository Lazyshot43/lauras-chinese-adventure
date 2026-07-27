"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/types";
import { cn } from "@/lib/utils";
import { LaoshiLaura } from "./LaoshiLaura";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (correctCount: number, timeSeconds: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime] = useState(Date.now());
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const handleSelect = (option: string) => {
    if (showFeedback || isFinished) return;
    setSelected(option);
    setShowFeedback(true);
    if (option === current.correctAnswer) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      setIsFinished(true);
      // correctCount already includes the current answer if it was correct
      // (we incremented it in handleSelect before showFeedback)
      onComplete(correctCount, elapsed);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  if (!current) return null;

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-stone-500 mb-1">
          <span>
            Question {currentIndex + 1} / {questions.length}
          </span>
          <span>{correctCount} correct so far</span>
        </div>
        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-400 to-rose-400"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="card-cute p-6"
        >
          {/* Prompt */}
          <div className="text-center mb-6">
            {current.type === "char-to-en" ? (
              <>
                <p className="text-sm text-stone-500 mb-2">What does this mean?</p>
                <p className="hanzi text-4xl font-medium text-stone-800">
                  {current.prompt}
                </p>
                {current.promptPinyin && (
                  <p className="text-lg text-orange-600 mt-1">{current.promptPinyin}</p>
                )}
              </>
            ) : (
              <>
                <p className="text-sm text-stone-500 mb-2">How do you say this in Chinese?</p>
                <p className="text-2xl font-semibold text-stone-800">{current.prompt}</p>
              </>
            )}
          </div>

          {/* Options */}
          <div className="grid gap-3">
            {(current.options || []).map((opt) => {
              const isCorrect = opt === current.correctAnswer;
              const isSelected = selected === opt;
              let style = "bg-white border-2 border-stone-200 hover:border-orange-300";
              if (showFeedback) {
                if (isCorrect) style = "bg-emerald-50 border-2 border-emerald-400";
                else if (isSelected) style = "bg-rose-50 border-2 border-rose-400";
              } else if (isSelected) {
                style = "bg-orange-50 border-2 border-orange-400";
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  disabled={showFeedback}
                  className={cn(
                    "w-full py-3 px-4 rounded-2xl text-left font-medium transition-all duration-200",
                    style,
                    current.type === "en-to-char" && "hanzi text-xl"
                  )}
                >
                  {opt}
                  {showFeedback && isCorrect && (
                    <span className="float-right text-emerald-600">✓</span>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <span className="float-right text-rose-500">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback + Next */}
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <LaoshiLaura
                mood={selected === current.correctAnswer ? "proud" : "encouraging"}
                message={
                  selected === current.correctAnswer
                    ? "太棒了！完全正确！👍"
                    : `没关系，正确答案是「${current.correctAnswer}」。继续加油！`
                }
                size="sm"
              />
              <button onClick={handleNext} className="btn-primary w-full mt-4">
                {isLast ? "See Results 🎉" : "Next Question →"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
