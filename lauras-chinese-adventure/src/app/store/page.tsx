"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { ACCESSORIES } from "@/lib/data/accessories";
import { Header } from "@/components/Header";
import { RubberDucky } from "@/components/RubberDucky";
import { UserProfile, Accessory } from "@/types";
import { cn } from "@/lib/utils";

export default function StorePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [buying, setBuying] = useState<string | null>(null);
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

  const handleBuy = async (acc: Accessory) => {
    if (!profile || profile.red_beans < acc.price) return;
    if (profile.owned_accessories.includes(acc.id)) return;

    setBuying(acc.id);
    const newOwned = [...profile.owned_accessories, acc.id];
    const newBeans = profile.red_beans - acc.price;

    const { error } = await supabase
      .from("profiles")
      .update({
        owned_accessories: newOwned,
        red_beans: newBeans,
        updated_at: new Date().toISOString(),
      })
      .eq("id", profile.id);

    if (!error) {
      setProfile({ ...profile, owned_accessories: newOwned, red_beans: newBeans });
    }
    setBuying(null);
  };

  const handleEquip = async (accId: string) => {
    if (!profile) return;
    const owned = profile.owned_accessories.includes(accId);
    if (!owned) return;

    // Toggle equip (simple: one per category for now, but allow multiple)
    let newEquipped = [...profile.equipped_accessories];
    if (newEquipped.includes(accId)) {
      newEquipped = newEquipped.filter((id) => id !== accId);
    } else {
      // Optional: unequip same category
      const acc = ACCESSORIES.find((a) => a.id === accId);
      if (acc) {
        newEquipped = newEquipped.filter((id) => {
          const other = ACCESSORIES.find((a) => a.id === id);
          return other?.category !== acc.category;
        });
      }
      newEquipped.push(accId);
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        equipped_accessories: newEquipped,
        updated_at: new Date().toISOString(),
      })
      .eq("id", profile.id);

    if (!error) {
      setProfile({ ...profile, equipped_accessories: newEquipped });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RubberDucky size="lg" bounce />
      </div>
    );
  }

  const owned = profile?.owned_accessories || [];
  const equipped = profile?.equipped_accessories || [];
  const beans = profile?.red_beans || 0;
  const completedCount = profile?.completed_lessons?.length || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header redBeans={beans} equipped={equipped} username={profile?.username} />

      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <RubberDucky size="xl" equipped={equipped} bounce showName />
          <h1 className="mt-4 text-2xl font-bold text-stone-800">
            小白白的商店 🛍️
          </h1>
          <p className="text-stone-500 mt-1">
            Spend 红豆 to dress up your ducky · 用红豆装扮小白白
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACCESSORIES.map((acc, idx) => {
            const isOwned = owned.includes(acc.id);
            const isEquipped = equipped.includes(acc.id);
            const canAfford = beans >= acc.price;
            const levelLocked =
              acc.unlockLevel !== undefined && completedCount < acc.unlockLevel;

            return (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className={cn(
                  "card-cute p-5 flex flex-col",
                  isEquipped && "ring-2 ring-orange-300"
                )}
              >
                <div className="text-4xl mb-3 text-center">{acc.emoji}</div>
                <h3 className="hanzi font-semibold text-stone-800 text-center">
                  {acc.name}
                </h3>
                <p className="text-xs text-orange-600 text-center mb-1">
                  {acc.namePinyin}
                </p>
                <p className="text-xs text-stone-500 text-center flex-1 mb-4">
                  {acc.description}
                </p>

                {levelLocked ? (
                  <button disabled className="btn-secondary opacity-50 text-sm py-2">
                    🔒 Complete {acc.unlockLevel} lessons
                  </button>
                ) : isOwned ? (
                  <button
                    onClick={() => handleEquip(acc.id)}
                    className={cn(
                      "text-sm py-2 rounded-2xl font-medium transition-all",
                      isEquipped
                        ? "bg-orange-200 text-orange-800"
                        : "bg-stone-100 text-stone-700 hover:bg-orange-50"
                    )}
                  >
                    {isEquipped ? "✓ Equipped" : "Equip"}
                  </button>
                ) : (
                  <button
                    onClick={() => handleBuy(acc)}
                    disabled={!canAfford || buying === acc.id}
                    className={cn(
                      "btn-primary text-sm py-2",
                      !canAfford && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {buying === acc.id
                      ? "Buying…"
                      : `Buy for ${acc.price} 🫘`}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
