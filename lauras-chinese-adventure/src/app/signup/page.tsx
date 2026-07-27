"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { RubberDucky } from "@/components/RubberDucky";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Create profile row
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: data.user.id,
        username,
        email,
        red_beans: 20, // starter beans
        equipped_accessories: [],
        owned_accessories: ["flower-lotus"], // free starter
        completed_lessons: [],
        current_lesson_id: "lesson-01",
        total_score: 0,
      });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        // Still continue – trigger may handle it
      }
    }

    router.push("/map");
    router.refresh();
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 map-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <RubberDucky size="lg" bounce equipped={["flower-lotus"]} />
          <h1 className="mt-4 text-2xl font-bold text-stone-800">Join the adventure!</h1>
          <p className="text-stone-500 mt-1">Create your account & pick a username</p>
        </div>

        <div className="card-cute p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
                maxLength={20}
                className="w-full px-4 py-3 rounded-2xl border border-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-orange-50/50"
                placeholder="DuckMaster88"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-orange-50/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-2xl border border-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-orange-50/50"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-sm text-rose-600 bg-rose-50 px-3 py-2 rounded-xl">
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Creating account…" : "Create Account & Start"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-stone-500">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-600 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
