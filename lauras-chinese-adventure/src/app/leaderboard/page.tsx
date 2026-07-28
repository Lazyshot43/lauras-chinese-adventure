"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { Header } from "@/components/Header";
import { RubberDucky } from "@/components/RubberDucky";
import { UserProfile, LeaderboardEntry } from "@/types";

export default function LeaderboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
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

      const { data: me } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (me) setProfile(me as UserProfile);

      // Global leaderboard by red_beans desc, then completed lessons
      const { data: board } = await supabase
        .from("profiles")
        .select("id, username, red_beans, completed_lessons, total_score")
        .order("red_beans", { ascending: false })
        .limit(50);

      if (board) {
        setEntries(
          board.map((row) => ({
            id: row.id,
            username: row.username,
            red_beans: row.red_beans,
            completed_lessons: (row.completed_lessons || []).length,
            total_score: row.total_score || 0,
          }))
        );
      }
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        redBeans={profile?.red_beans}
        equipped={profile?.equipped_accessories}
        username={profile?.username}
      />

      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-stone-800">
            Global Leaderboard 🏆
          </h1>
          <p className="text-stone-500 mt-1">
            Sorted by red beans earned
          </p>
        </div>

        <div className="space-y-3">
          {entries.map((entry, idx) => {
            const isMe = entry.id === profile?.id;
            const medal =
              idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : null;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
                className={cn(
                  "card-cute p-4 flex items-center gap-4",
                  isMe && "ring-2 ring-orange-300 bg-orange-50/50"
                )}
              >
                <div className="w-8 text-center font-bold text-stone-500">
                  {medal || idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-stone-800 truncate">
                    {entry.username}
                    {isMe && (
                      <span className="ml-2 text-xs text-orange-500">(you)</span>
                    )}
                  </p>
                  <p className="text-xs text-stone-500">
                    {entry.completed_lessons} lessons · score {entry.total_score}
                  </p>
                </div>
                <div className="flex items-center gap-1 font-bold text-rose-600">
                  <span>🫘</span>
                  {entry.red_beans}
                </div>
              </motion.div>
            );
          })}

          {entries.length === 0 && (
            <p className="text-center text-stone-400 py-12">
              No adventurers yet. Be the first!
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
