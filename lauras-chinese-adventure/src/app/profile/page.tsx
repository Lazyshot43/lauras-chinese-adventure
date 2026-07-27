"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Header } from "@/components/Header";
import { RubberDucky } from "@/components/RubberDucky";
import { UserProfile } from "@/types";
import { LESSONS } from "@/lib/data/lessons";

export default function ProfilePage() {
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RubberDucky size="lg" bounce />
      </div>
    );
  }

  const completed = profile?.completed_lessons?.length || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        redBeans={profile?.red_beans}
        equipped={profile?.equipped_accessories}
        username={profile?.username}
      />

      <main className="flex-1 px-4 py-8 max-w-lg mx-auto w-full">
        <div className="text-center mb-8">
          <RubberDucky
            size="xl"
            equipped={profile?.equipped_accessories}
            bounce
          />
          <h1 className="mt-4 text-2xl font-bold text-stone-800">
            {profile?.username}
          </h1>
          <p className="text-stone-500 text-sm">{profile?.email}</p>
        </div>

        <div className="card-cute p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-stone-600">Red Beans</span>
            <span className="font-bold text-rose-600 text-lg">
              🫘 {profile?.red_beans}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-600">Lessons Completed</span>
            <span className="font-bold text-stone-800">
              {completed} / {LESSONS.length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-600">Total Quiz Score</span>
            <span className="font-bold text-stone-800">
              {profile?.total_score || 0}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-600">Accessories Owned</span>
            <span className="font-bold text-stone-800">
              {profile?.owned_accessories?.length || 0}
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full py-3 rounded-2xl border-2 border-stone-200 text-stone-600 font-medium hover:bg-stone-50 transition-colors"
        >
          Sign Out
        </button>
      </main>
    </div>
  );
}
