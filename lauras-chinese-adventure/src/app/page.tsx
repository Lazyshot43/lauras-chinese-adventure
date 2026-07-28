"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RubberDucky } from "@/components/RubberDucky";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 map-bg relative overflow-hidden">
      {/* Floating Chinese decorations */}
      <motion.div
        className="absolute top-16 left-8 text-4xl opacity-40 lantern-float"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      >
        🏮
      </motion.div>
      <motion.div
        className="absolute top-28 right-10 text-3xl opacity-35"
        animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
      >
        🏯
      </motion.div>
      <motion.div
        className="absolute bottom-36 left-12 text-3xl opacity-30"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
      >
        🎋
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-16 text-2xl opacity-25"
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🐼
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-6 text-2xl opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 1.2 }}
      >
        ☁️
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center z-10 max-w-lg"
      >
        <RubberDucky
          size="xl"
          bounce
          equipped={["hat-bamboo", "flower-lotus"]}
          showName
        />

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-stone-800 tracking-tight">
          Laura’s Chinese
          <span className="block text-[var(--primary)] mt-1">Adventure</span>
        </h1>

        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Join <span className="font-medium text-[var(--primary)]">Laoshi Laura</span> and
          her cute rubber ducks on a colorful journey through HSK 1 &amp; 2.
          Earn red beans, unlock accessories, and become a Chinese master!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="btn-primary text-lg px-8 py-4 glow-red">
            Start Adventure 🚀
          </Link>
          <Link href="/login" className="btn-secondary text-lg px-8 py-4">
            I already have an account
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-stone-500">
          <span className="px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700">
            Full HSK 1 + HSK 2
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">
            Progress saved
          </span>
          <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700">
            Global leaderboard
          </span>
        </div>
      </motion.div>
    </main>
  );
}
