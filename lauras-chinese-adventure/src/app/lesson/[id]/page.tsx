"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { getLessonById, getQuestionsByIds } from "@/lib/data/lessons";
import { getVocabByIds } from "@/lib/data/vocab";
import { Header } from "@/components/Header";
import { Flashcard } from "@/components/Flashcard";
import { Quiz } from "@/components/Quiz";
import { LaoshiLaura } from "@/components/LaoshiLaura";
import { RubberDucky } from "@/components/RubberDucky";
import { calculateRedBeans } from "@/lib/utils";
import { UserProfile } from "@/types";

type Phase = "intro" | "study" | "quiz" | "results";

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [phase, setPhase] = useState<Phase>("intro");
  const [cardIndex, setCardIndex] = useState(0);
  const [beansEarned, setBeansEarned] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  const lesson = getLessonById(lessonId);
  const vocab = lesson ? getVocabByIds(lesson.vocabIds) : [];
  const questions = lesson ? getQuestionsByIds(lesson.quizQuestionIds) : [];

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (data) setProfile(data as UserProfile);
      setLoading(false);
    }
    load();
  }, [router, supabase]);

  // Lock check
  useEffect(() => {
    if (!profile || !lesson) return;
    const completed = profile.completed_lessons || [];
    if (
      lesson.unlockRequirement &&
      !completed.includes(lesson.unlockRequirement) &&
      !completed.includes(lesson.id)
    ) {
      router.push("/map");
    }
  }, [profile, lesson, router]);

  const handleQuizComplete = async (correct: number, timeSeconds: number) => {
    const total = questions.length;
    const beans = calculateRedBeans(correct, total, timeSeconds);
    setScore({ correct, total });
    setBeansEarned(beans);
    setPhase("results");

    if (!profile) return;

    const alreadyCompleted = profile.completed_lessons.includes(lessonId);
    const newCompleted = alreadyCompleted
      ? profile.completed_lessons
      : [...profile.completed_lessons, lessonId];

    await supabase
      .from("profiles")
      .update({
        red_beans: profile.red_beans + beans,
        completed_lessons: newCompleted,
        total_score: profile.total_score + correct,
        updated_at: new Date().toISOString(),
      })
      .eq("id", profile.id);

    // refresh local
    setProfile({
      ...profile,
      red_beans: profile.red_beans + beans,
      completed_lessons: newCompleted,
      total_score: profile.total_score + correct,
    });
  };

  if (loading || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RubberDucky size="lg" bounce />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        redBeans={profile?.red_beans}
        equipped={profile?.equipped_accessories}
        username={profile?.username}
      />

      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
        {/* Intro */}
        {phase === "intro" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center">
              <p className="text-sm text-orange-500 font-medium">
                Lesson {lesson.order}
              </p>
              <h1 className="hanzi text-3xl font-bold text-stone-800 mt-1">
                {lesson.title}
              </h1>
              <p className="text-orange-600">{lesson.titlePinyin}</p>
              <p className="text-stone-500 mt-3 max-w-md mx-auto">
                {lesson.description}
              </p>
            </div>

            <div className="card-cute p-5">
              <h3 className="font-semibold text-stone-700 mb-3">
                Learning Goals 🎯
              </h3>
              <ul className="space-y-2">
                {lesson.learningGoals.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="text-orange-400">•</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <LaoshiLaura
              mood="encouraging"
              message="先认真学习卡片，然后再做小测试。准备好了就点下面的按钮吧！"
            />

            <button
              onClick={() => setPhase("study")}
              className="btn-primary w-full text-lg py-4"
            >
              Start Studying 📚
            </button>
          </motion.div>
        )}

        {/* Study mode */}
        {phase === "study" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-stone-700">
                Study Cards ({cardIndex + 1}/{vocab.length})
              </h2>
              <button
                onClick={() => setPhase("quiz")}
                className="text-sm text-orange-600 hover:underline"
              >
                Skip to Quiz →
              </button>
            </div>

            {vocab[cardIndex] && (
              <Flashcard
                item={vocab[cardIndex]}
                onPrev={
                  cardIndex > 0
                    ? () => setCardIndex((i) => i - 1)
                    : undefined
                }
                onNext={
                  cardIndex < vocab.length - 1
                    ? () => setCardIndex((i) => i + 1)
                    : () => setPhase("quiz")
                }
              />
            )}

            {cardIndex === vocab.length - 1 && (
              <button
                onClick={() => setPhase("quiz")}
                className="btn-primary w-full mt-8"
              >
                I’m ready for the Quiz! ✍️
              </button>
            )}
          </motion.div>
        )}

        {/* Quiz */}
        {phase === "quiz" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-center font-semibold text-stone-700 mb-6">
              Quiz Time! 🧠
            </h2>
            <Quiz questions={questions} onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {/* Results */}
        {phase === "results" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <RubberDucky size="xl" bounce equipped={profile?.equipped_accessories} />
            <h2 className="text-3xl font-bold text-stone-800">
              {score.correct === score.total
                ? "Perfect! 🌟"
                : score.correct / score.total >= 0.7
                ? "Great job! 👏"
                : "Keep practicing! 💪"}
            </h2>
            <p className="text-xl text-stone-600">
              {score.correct} / {score.total} correct
            </p>
            <div className="inline-flex items-center gap-2 bg-rose-50 px-6 py-3 rounded-2xl border border-rose-100">
              <span className="text-2xl">🫘</span>
              <span className="text-2xl font-bold text-rose-600">
                +{beansEarned}
              </span>
              <span className="text-stone-500">red beans</span>
            </div>

            <LaoshiLaura
              mood={score.correct === score.total ? "proud" : "encouraging"}
              message={
                score.correct === score.total
                  ? "完美！你真是太棒了！这些红豆给你买好看的装饰吧！"
                  : "不错哦！多复习一下刚才的卡片，下次会更好的！"
              }
            />

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <button
                onClick={() => router.push("/map")}
                className="btn-primary px-8"
              >
                Back to Map
              </button>
              <button
                onClick={() => router.push("/store")}
                className="btn-secondary px-8"
              >
                Visit Store 🛍️
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
