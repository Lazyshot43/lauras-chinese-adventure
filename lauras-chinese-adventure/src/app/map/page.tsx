"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { LESSONS } from "@/lib/data/lessons";
import { Header } from "@/components/Header";
import { RubberDucky } from "@/components/RubberDucky";
import { LaoshiLaura } from "@/components/LaoshiLaura";
import { UserProfile } from "@/types";
import { cn } from "@/lib/utils";

export default function MapPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RubberDucky size="lg" bounce />
      </div>
    );
  }

  const completed = profile?.completed_lessons || [];
  const equipped = profile?.equipped_accessories || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        redBeans={profile?.red_beans}
        equipped={equipped}
        username={profile?.username}
      />

      <main className="flex-1 map-bg px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome banner */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
            <RubberDucky size="lg" equipped={equipped} bounce showName />
            <div>
              <h1 className="text-2xl font-bold text-stone-800">
                欢迎回来, {profile?.username || "Explorer"}!
              </h1>
              <p className="text-stone-500 mt-1">
                {completed.length} / {LESSONS.length} lessons completed ·{" "}
                <span className="text-[var(--primary)] font-medium">{profile?.red_beans || 0} 红豆</span>
              </p>
              <LaoshiLaura
                className="mt-4"
                size="sm"
                mood="happy"
                message={
                  completed.length === 0
                    ? "你好！准备好开始第一课了吗？跟着我和小白白一起学中文吧！"
                    : completed.length >= 12
                    ? "你太厉害了！全部课程都完成了！继续复习保持进步哦～"
                    : "继续加油！下一课在等着你呢！"
                }
              />
            </div>
          </div>

          {/* Lesson path */}
          <h2 className="text-lg font-semibold text-stone-700 mb-4 flex items-center gap-2">
            <span>🗺️</span> Your Learning Path
            <span className="text-sm font-normal text-stone-400">· 学习地图</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LESSONS.map((lesson, idx) => {
              const isCompleted = completed.includes(lesson.id);
              const isLocked =
                lesson.unlockRequirement &&
                !completed.includes(lesson.unlockRequirement) &&
                !isCompleted;
              const isNext =
                !isCompleted &&
                !isLocked &&
                (idx === 0 || completed.includes(LESSONS[idx - 1].id));

              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {isLocked ? (
                    <div className="card-cute p-5 opacity-60 cursor-not-allowed">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🔒</span>
                        <span className="text-sm font-medium text-stone-400">
                          Locked
                        </span>
                      </div>
                      <h3 className="hanzi font-semibold text-stone-500">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1">
                        {lesson.titlePinyin}
                      </p>
                    </div>
                  ) : (
                    <Link
                      href={`/lesson/${lesson.id}`}
                      className={cn(
                        "card-cute p-5 block transition-all hover:shadow-xl hover:-translate-y-1",
                        isNext && "ring-2 ring-orange-300 bg-orange-50/50",
                        isCompleted && "bg-emerald-50/40"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-orange-500">
                          Lesson {lesson.order}
                        </span>
                        {isCompleted && (
                          <span className="text-emerald-500 text-sm">✓ Done</span>
                        )}
                        {isNext && (
                          <span className="text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">
                            Next
                          </span>
                        )}
                      </div>
                      <h3 className="hanzi text-xl font-semibold text-stone-800">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-orange-600 mt-0.5">
                        {lesson.titlePinyin}
                      </p>
                      <p className="text-xs text-stone-500 mt-2 line-clamp-2">
                        {lesson.description}
                      </p>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
