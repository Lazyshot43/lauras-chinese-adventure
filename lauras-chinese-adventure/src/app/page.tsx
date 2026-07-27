"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RubberDucky } from "@/components/RubberDucky";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 map-bg relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-30"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🏯
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-12 text-3xl opacity-25"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        🐼
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-2xl opacity-20"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🎋
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <RubberDucky size="xl" bounce equipped={["hat-bamboo", "flower-lotus"]} />

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-stone-800 tracking-tight">
          Laura’s Chinese
          <span className="block text-orange-500">Adventure</span>
        </h1>

        <p className="mt-4 text-lg text-stone-600 max-w-md mx-auto leading-relaxed">
          Join Laoshi Laura and your rubber ducky friend on a colorful journey
          through HSK 1 &amp; 2. Earn red beans, unlock cute accessories, and
          become a Chinese master!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="btn-primary text-lg px-8 py-4">
            Start Adventure 🚀
          </Link>
          <Link href="/login" className="btn-secondary text-lg px-8 py-4">
            I already have an account
          </Link>
        </div>

        <p className="mt-8 text-sm text-stone-400">
          Full HSK 1 + HSK 2 · Progress saved · Global leaderboard
        </p>
      </motion.div>
    </main>
  );
}
