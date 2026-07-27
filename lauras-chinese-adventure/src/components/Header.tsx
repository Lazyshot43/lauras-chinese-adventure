"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RubberDucky } from "./RubberDucky";
import { cn } from "@/lib/utils";

interface HeaderProps {
  redBeans?: number;
  equipped?: string[];
  username?: string;
}

export function Header({ redBeans = 0, equipped = [], username }: HeaderProps) {
  const pathname = usePathname();

  const nav = [
    { href: "/map", label: "Map", emoji: "🗺️" },
    { href: "/store", label: "Store", emoji: "🛍️" },
    { href: "/leaderboard", label: "Ranks", emoji: "🏆" },
    { href: "/profile", label: "Me", emoji: "👤" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/map" className="flex items-center gap-2">
          <RubberDucky size="sm" equipped={equipped} />
          <div className="hidden sm:block">
            <p className="font-bold text-stone-800 leading-tight">Laura’s Chinese</p>
            <p className="text-xs text-orange-500">Adventure</p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 rounded-xl text-sm font-medium transition-colors",
                pathname.startsWith(item.href)
                  ? "bg-orange-100 text-orange-700"
                  : "text-stone-600 hover:bg-orange-50"
              )}
            >
              <span className="mr-1">{item.emoji}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
            <span className="text-lg bean-bounce">🫘</span>
            <span className="font-bold text-rose-700">{redBeans}</span>
          </div>
          {username && (
            <span className="hidden md:inline text-sm text-stone-500 max-w-[100px] truncate">
              {username}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
