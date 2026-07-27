"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { RubberDucky } from "@/components/RubberDucky";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/map");
    router.refresh();
  };

  const handleMagicLink = async () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/map` },
    });

    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 map-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <RubberDucky size="lg" bounce />
          <h1 className="mt-4 text-2xl font-bold text-stone-800">Welcome back!</h1>
          <p className="text-stone-500 mt-1">Continue your Chinese adventure</p>
        </div>

        <div className="card-cute p-8">
          {magicLinkSent ? (
            <div className="text-center py-6">
              <p className="text-lg text-emerald-600 font-medium">Check your email! ✉️</p>
              <p className="text-sm text-stone-500 mt-2">
                We sent a magic link to {email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
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
                {loading ? "Signing in…" : "Sign In"}
              </button>

              <button
                type="button"
                onClick={handleMagicLink}
                disabled={loading}
                className="w-full text-sm text-orange-600 hover:text-orange-700 py-2"
              >
                Or send me a magic link instead
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-stone-500">
            New here?{" "}
            <Link href="/signup" className="text-orange-600 font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
