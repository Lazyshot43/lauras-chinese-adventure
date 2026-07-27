# Laura’s Chinese Adventure 🦆🇨🇳

A cute, highly animated web-based Chinese learning game. Students play as customizable rubber-ducky characters guided by **Laoshi Laura** through a charming Chinese-themed world.

**Built-in content:** Full HSK 1 + HSK 2 vocabulary, 12 progressive lessons, study cards, quizzes, red-bean economy, accessory store, and global leaderboard.

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion
- **Auth & Database**: Supabase (email/password + magic link, Postgres)
- **State**: Client-side React + Supabase realtime-ready profiles

---

## Quick Start (Local)

### 1. Install dependencies

```bash
cd lauras-chinese-adventure
npm install
```

### 2. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. In **Project Settings → API**, copy the **Project URL** and **anon/public key**.
3. Create `.env.local` in the project root:

```bash
cp .env.local.example .env.local
# then paste your values
```

### 3. Create the database table + RLS

In the Supabase SQL Editor, run:

```sql
-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  email text,
  red_beans integer not null default 20,
  equipped_accessories text[] not null default '{}',
  owned_accessories text[] not null default '{flower-lotus}',
  completed_lessons text[] not null default '{}',
  current_lesson_id text,
  total_score integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Optional: auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', 'Duckling' || substr(new.id::text, 1, 6)),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

### 4. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing
│   ├── login/ / signup/      # Auth
│   ├── map/                  # World map + lesson path
│   ├── lesson/[id]/         # Study + Quiz flow
│   ├── store/                # Red bean shop
│   ├── leaderboard/          # Global ranks
│   └── profile/              # User stats + logout
├── components/
│   ├── RubberDucky.tsx       # Avatar (emoji + accessory overlays)
│   ├── LaoshiLaura.tsx       # Teacher speech bubble (placeholder)
│   ├── Flashcard.tsx
│   ├── Quiz.tsx
│   └── Header.tsx
├── lib/
│   ├── data/
│   │   ├── vocab.ts          # Full HSK 1 + 2 vocabulary
│   │   ├── lessons.ts        # 12 lessons + quiz questions
│   │   └── accessories.ts    # Store items
│   ├── supabase/             # Browser + server clients
│   └── utils.ts
└── types/index.ts
```

---

## Core Game Rules (Implemented)

1. **Every Chinese character** is always shown with its pinyin.
2. Quizzes only use two formats:
   - Characters + pinyin → English
   - English → Characters (+ pinyin implied)
3. Lessons unlock sequentially (progress locked).
4. Red beans awarded by accuracy + speed.
5. Accessories are cosmetic and permanently saved.
6. Global leaderboard sorted by total red beans.

---

## How to Expand the Game

### Add HSK 3+ content

1. Append new entries to `src/lib/data/vocab.ts` (keep the same shape).
2. Create new lessons in `src/lib/data/lessons.ts` with higher `order` and proper `unlockRequirement`.
3. Add corresponding `QuizQuestion`s.
4. Optionally introduce a new “world” / map region later.

### New accessory categories or items

Just add objects to `ACCESSORIES` in `src/lib/data/accessories.ts`.  
The RubberDucky component already positions by `category`.

### New game modes

- Create a new route under `src/app/` (e.g. `/listening`).
- Reuse `Flashcard` / `Quiz` patterns or build new interactive components.
- Award beans the same way and update the profile row.

### Real illustrations

- Replace the emoji base in `RubberDucky.tsx` with an SVG or Next/Image.
- Replace the face circle in `LaoshiLaura.tsx` with a character sprite or Lottie animation.
- Keep the same prop interfaces so the rest of the app continues to work.

### Multiple worlds / maps

- Add a `worldId` field to lessons.
- Create a `WorldMap` component that filters lessons by world and shows different background art.

---

## Art Direction Notes (Placeholders)

| Element            | Current                  | Future idea                                      |
|--------------------|--------------------------|--------------------------------------------------|
| Rubber Ducky       | 🦆 emoji + overlay emojis | Soft 2D illustration, slight bounce idle         |
| Laoshi Laura       | Mood emoji in circle     | Warm, friendly Chinese teacher character, soft pastel palette |
| Map                | CSS radial gradients     | Hand-painted Chinese village / river / mountain path |
| Accessories        | Emoji                    | Matching illustrated items that clip onto ducky  |
| UI                 | Soft orange / teal / cream | Keep the same friendly palette                   |

---

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint
```

---

## License

MIT – feel free to fork, expand, and share with your students.

Made with ❤️ for language learners everywhere.  
加油！(Jiāyóu!)
