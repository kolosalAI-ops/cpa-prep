# Dark Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the CPA Prep app with a dark-first Kolosal Vanilla design system, replacing the filter-invert hack with proper CSS variables, adding a progress dashboard, SVG icons throughout, and micro-animations.

**Architecture:** All visual styles live in `src/styles/kolosal.css` using `k-` CSS class names — no inline `style={}` props in TSX files. A new `ProgressContext` backed by localStorage tracks study progress. A new `SubjectIcon` component maps subject IDs to lucide SVG icons.

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind (utility layer only) + lucide-react icons. Verification: `npm run build` (tsc + vite) after each task.

**Spec:** `docs/superpowers/specs/2026-03-14-kolosal-dark-premium-redesign.md`

---

## Chunk 1: CSS Foundation & Infrastructure

### Task 1: Replace CSS Variables (dark-first `:root`)

**Files:**
- Modify: `src/styles/kolosal.css`

- [ ] **Step 1: Replace the `:root` block**

Open `src/styles/kolosal.css`. Replace the entire `:root { ... }` block (everything from `:root {` to its closing `}`) with:

```css
:root {
  /* Backgrounds */
  --color-bg: #0D111A;
  --color-bg-secondary: #111827;
  --color-bg-tertiary: #1F2937;

  /* Text */
  --color-text-900: #F9FAFB;
  --color-text-800: #E5E7EB;
  --color-text-700: #D1D5DB;
  --color-text-600: #9CA3AF;
  --color-text-500: #6B7280;
  --color-text-400: #4B5563;

  /* Borders */
  --color-border: #374151;
  --color-border-strong: #4B5563;

  /* Accent */
  --color-accent: #1077E3;
  --color-accent-mid: #3A94F2;
  --color-accent-hover: #045DC1;
  --color-accent-subtle: rgba(16, 119, 227, 0.15);

  /* Grey scale */
  --color-grey-50: #F9FAFB;
  --color-grey-100: #F3F4F6;
  --color-grey-200: #E5E7EB;
  --color-grey-300: #D1D5DB;
  --color-grey-400: #9CA3AF;
  --color-grey-500: #6B7280;
  --color-grey-600: #4B5563;
  --color-grey-700: #374151;
  --color-grey-800: #1F2937;
  --color-grey-900: #111827;

  /* Semantic — dark-adapted */
  --color-success-bg:     rgba(65, 184, 79, 0.1);
  --color-success-border: rgba(65, 184, 79, 0.3);
  --color-success-text:   #D9F2DC;
  --color-success-icon:   #41B84F;

  --color-danger-bg:     rgba(255, 65, 65, 0.1);
  --color-danger-border: rgba(255, 65, 65, 0.2);
  --color-danger-text:   #FFD9D9;
  --color-danger-icon:   #FF4141;

  --color-warning-bg:     rgba(245, 149, 16, 0.1);
  --color-warning-border: rgba(245, 149, 16, 0.2);
  --color-warning-text:   #FFF0D9;
  --color-warning-icon:   #F59510;

  --color-information-bg:     rgba(58, 148, 242, 0.1);
  --color-information-border: rgba(58, 148, 242, 0.2);
  --color-information-text:   #D9EAFD;
  --color-information-icon:   #3A94F2;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
}
```

- [ ] **Step 2: Remove the dark filter hack**

Delete these lines from `kolosal.css`:
```css
/* --- Dark mode: invert light mode via filter --- */
.dark .k-card,
.dark .k-feed {
  filter: invert(1) hue-rotate(180deg);
}

.dark .k-feed {
  background: #111827;
}
```

- [ ] **Step 3: Do a global replace of old token references**

In `kolosal.css`, do find-and-replace for these old tokens (anywhere they appear in values). CSS variable resolution failures are **silent** — there are no build errors, so this step must be done completely.

**`--color-primary-*` — complete migration (all shades):**
- `var(--color-primary-50)` → `var(--color-accent-subtle)` (very subtle blue tint backgrounds)
- `var(--color-primary-100)` → `var(--color-accent-subtle)`
- `var(--color-primary-200)` → `var(--color-accent-subtle)`
- `var(--color-primary-300)` → `var(--color-accent-mid)`
- `var(--color-primary-400)` → `var(--color-accent-mid)`
- `var(--color-primary-500)` → `var(--color-accent)`
- `var(--color-primary-600)` → `var(--color-accent)`
- `var(--color-primary-700)` → `var(--color-accent-hover)`
- `var(--color-primary-800)` → `var(--color-accent-hover)`
- `var(--color-primary-900)` → `var(--color-accent-hover)`

After the replacement, do a final search for `--color-primary` in `kolosal.css` to confirm zero remaining references.

**Other old tokens:**
- `var(--color-accent-light)` → search confirms only 1 usage in the `:root` definition itself (deleted in Step 1); if any remain in `k-` class bodies, replace with `var(--color-accent-subtle)` for backgrounds or `var(--color-accent-mid)` for text/icons
- `var(--color-neutral-500)` → `var(--color-text-500)`
- `var(--color-neutral-400)` → `var(--color-text-600)`
- `var(--color-neutral-300)` → `var(--color-border-strong)`
- `var(--color-neutral-200)` → `var(--color-border)`
- `var(--color-warning-500)` → `var(--color-warning-icon)`
- `var(--color-success-50)` → `var(--color-success-bg)`
- `var(--color-success-100)` → `var(--color-success-bg)`
- `var(--color-danger-50)` → `var(--color-danger-bg)`
- `var(--color-information-50)` → `var(--color-information-bg)`
- `var(--color-information-100)` → `var(--color-information-bg)`

After all replacements, run this to verify no undefined variables remain:
```bash
grep -E 'var\(--color-(primary|neutral|accent-light|information-50|information-100|success-50|success-100|danger-50)' src/styles/kolosal.css
```
Expected: no output (zero matches).

- [ ] **Step 4: Update core component backgrounds to dark**

Find every `k-` class that sets `background` or `background-color` to a light value (white, `#fff`, `#F8F9FA`, `#F1F3F5`, etc.) and update. **These existing classes must be updated (they are present in the original file and used in TSX):**
- `.k-home-grid`, `.k-home-link`, `.k-home-link-primary`, `.k-home-link-secondary` — update background to `var(--color-bg-tertiary)`, border to `var(--color-border)`, text to `var(--color-text-900)`
- `.k-card` — background `var(--color-bg-tertiary)`, border `1px solid var(--color-border)`
- `.k-header` — background `var(--color-bg)`, border-bottom `1px solid var(--color-border)`
- `.k-bottom-nav`, `.k-bottom-nav-inner` — background `var(--color-bg)`, border-top `1px solid var(--color-border)`
- `.k-login-page` — background `var(--color-bg)` with radial-gradient glow
- `.k-login-card` — background `var(--color-bg-secondary)`, border `1px solid var(--color-border)`
- `.k-login-field input` — background `var(--color-bg-tertiary)`, border `1px solid var(--color-border)`, color `var(--color-text-900)`
- `.k-login-field input:focus` — `border-color: var(--color-accent); box-shadow: 0 0 0 3px var(--color-accent-subtle)`
- `.k-login-btn` — `background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))`, `box-shadow: 0 4px 16px rgba(16,119,227,0.35)`
- `.k-subject-list`, `.k-subject-item-row`, `.k-subject-link` — dark surfaces and borders
- `.k-badge-*` variants — update to use semantic dark token backgrounds (e.g. `k-badge-danger`: `background: var(--color-danger-bg); color: var(--color-danger-icon); border: 1px solid var(--color-danger-border)`)

General replacement rules:
- `background: #fff` or `background: white` → `background: var(--color-bg-tertiary)`
- `background: #F8F9FA` → `background: var(--color-bg-secondary)`
- `background: #F1F3F5` → `background: var(--color-bg)`
- `border-color: #E5E7EB` → `border-color: var(--color-border)`
- `color: #0D0E0F` or `#111827` (dark text on light bg) → `color: var(--color-text-900)`
- `color: #6A6F73` (muted text) → `color: var(--color-text-500)`

- [ ] **Step 5: Update `src/index.css` body background**

In `src/index.css`, update the body block to:
```css
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text-900);
}
```

- [ ] **Step 6: Verify build**

```bash
cd /Users/evintleovonzko/Documents/Works/Kolosal/cpa-prep && npm run build
```
Expected: Build succeeds (no TypeScript errors; CSS errors don't fail Vite build but watch for any warnings about missing variables).

- [ ] **Step 7: Commit**

```bash
git add src/styles/kolosal.css src/index.css
git commit -m "style: dark-first CSS variables, remove filter-invert hack"
```

---

### Task 2: Add New CSS Component Classes

**Files:**
- Modify: `src/styles/kolosal.css`

- [ ] **Step 1: Add animation keyframes**

Append to `kolosal.css`:

```css
/* ============================================
   ANIMATIONS
   ============================================ */

@keyframes k-card-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Scope animation to feed slides only — using .k-feed-slide-inner > .k-card
   prevents re-animation on every React re-render of non-feed cards */
.k-feed-slide-inner > .k-card { animation: k-card-in 0.25s ease; }

.k-shimmer {
  background: linear-gradient(90deg, var(--color-bg-tertiary) 25%, var(--color-border) 50%, var(--color-bg-tertiary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
```

- [ ] **Step 2: Add dashboard stat card classes**

```css
/* ============================================
   HOME DASHBOARD
   ============================================ */

.k-stats-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}

.k-stat-card {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 12px 8px;
  text-align: center;
}

.k-stat-icon { color: var(--color-accent-mid); margin-bottom: 4px; display: flex; justify-content: center; }
.k-stat-val  { font-size: 1.5rem; font-weight: 800; color: var(--color-text-900); line-height: 1; }
.k-stat-label{ font-size: 0.6875rem; color: var(--color-text-500); margin-top: 4px; font-weight: 500; }

/* Hero CTA */
.k-hero-cta {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
  border-radius: var(--radius-xl);
  padding: 16px;
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
  text-decoration: none;
  display: block;
}
.k-hero-cta::after {
  content: '';
  position: absolute;
  right: -24px; top: -24px;
  width: 96px; height: 96px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  pointer-events: none;
}
.k-hero-cta-eyebrow {
  font-size: 0.6875rem; font-weight: 700;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 4px;
}
.k-hero-cta-title {
  font-size: 1rem; font-weight: 800;
  color: #fff; margin-bottom: 10px; line-height: 1.3;
}
.k-hero-cta-btn {
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff; font-size: 0.75rem; font-weight: 700;
  padding: 6px 12px; border-radius: var(--radius-md);
  display: inline-block; text-decoration: none;
}
.k-hero-cta-empty {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 16px; text-align: center;
  color: var(--color-text-500); font-size: 0.875rem;
  margin-bottom: 12px;
}
```

- [ ] **Step 3: Add progress bar, quiz, flashcard, and utility classes**

```css
/* ============================================
   PROGRESS BARS
   ============================================ */

.k-progress-bar {
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
  width: 48px;
}
.k-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-mid));
  border-radius: 2px;
  transition: width var(--transition-base);
}

/* ============================================
   FORMULA BLOCKS (FormalMaterial)
   ============================================ */

.k-formula-block {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent-mid);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8125rem;
  color: var(--color-accent-mid);
  white-space: pre-wrap;
  margin: 12px 0;
}
.k-formula-block-label {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.6875rem; font-weight: 700;
  color: var(--color-text-500);
  text-transform: uppercase; letter-spacing: 0.5px;
  margin-bottom: 6px;
}

/* ============================================
   QUIZ CARD
   ============================================ */

.k-quiz-options     { display: flex; flex-direction: column; gap: 8px; }
.k-quiz-hint        { font-size: 0.75rem; color: var(--color-text-400); margin: 0 0 8px; font-style: italic; }
.k-quiz-submit      { margin-top: 12px; padding: 10px 24px; border-radius: var(--radius-md); border: none; background: var(--color-accent); color: #fff; font-weight: 600; cursor: pointer; width: 100%; font-size: 0.875rem; transition: background var(--transition-fast); }
.k-quiz-submit:hover{ background: var(--color-accent-hover); }
.k-quiz-check-icon  { color: var(--color-accent-mid); }
.k-quiz-feedback    { margin-top: 16px; }
.k-card-body--quiz  { margin-bottom: 8px; }
.k-quiz-option      { transition: border-color var(--transition-fast), background var(--transition-fast); }

/* ============================================
   FLASHCARD 3D FLIP
   ============================================ */

.k-flashcard { perspective: 800px; overflow: visible !important; }
.k-flashcard-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.35s ease;
  min-height: 260px;
}
.k-flashcard--flipped .k-flashcard-inner { transform: rotateY(180deg); }
.k-flashcard-front,
.k-flashcard-back {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow-y: auto;
}
.k-flashcard-back  { transform: rotateY(180deg); }
.k-flashcard-hint  { text-align: center; margin-top: 16px; }

/* ============================================
   MISC UTILITIES
   ============================================ */

/* Type label — right-aligned in flex card header */
.k-type-label { margin-left: auto; font-size: 0.6875rem; color: var(--color-text-500); font-weight: 600; }

/* Counter flame icon */
.k-counter-flame { color: var(--color-warning-icon); }

/* Login brand heading */
.k-login-brand { font-size: 1.5rem; font-weight: 800; color: var(--color-text-900); margin: 6px 0 4px; letter-spacing: -0.5px; }

/* SubjectDetail helpers */
.k-subject-detail-count { color: var(--color-text-500); margin-top: 4px; }
.k-subject-detail-back  { color: var(--color-accent-mid); display: inline-flex; align-items: center; gap: 4px; margin-top: 12px; text-decoration: none; }

/* Formal material chapter header */
.k-formal-chapter-number { font-size: 0.6875rem; font-weight: 700; color: var(--color-accent-mid); letter-spacing: 0.5px; text-transform: uppercase; display: block; margin-bottom: 4px; }
.k-formal-chapter-title  { font-size: 1.25rem; font-weight: 800; color: var(--color-text-900); margin: 0 0 6px; }
.k-formal-chapter-desc   { font-size: 0.875rem; color: var(--color-text-500); margin: 0 0 20px; line-height: 1.5; }

/* Formal material table dark */
.k-formal-table          { width: 100%; border-collapse: collapse; font-size: 0.8125rem; }
.k-formal-table thead tr { background: var(--color-bg); }
.k-formal-table th       { padding: 8px 10px; text-align: left; font-weight: 700; color: var(--color-text-700); border-bottom: 1px solid var(--color-border-strong); }
.k-formal-table tbody tr:nth-child(odd)  { background: var(--color-bg-secondary); }
.k-formal-table tbody tr:nth-child(even) { background: var(--color-bg-tertiary); }
.k-formal-table td { padding: 7px 10px; color: var(--color-text-800); border-bottom: 1px solid var(--color-border); }

/* Nav active dot */
.k-nav-dot {
  display: block;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--color-accent-mid);
  margin: 3px auto 0;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity var(--transition-fast), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.k-nav-link-active .k-nav-dot { opacity: 1; transform: scale(1); }
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 5: Commit**

```bash
git add src/styles/kolosal.css
git commit -m "style: add dark premium component classes and animations"
```

---

### Task 3: ProgressContext

**Files:**
- Create: `src/context/ProgressContext.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { subjects, feedCards } from '../content/feedData';

interface ProgressState {
  streak: number;
  lastStudiedDate: string;
  totalCardsStudied: number;
  quizCorrect: number;
  quizTotal: number;
  subjectProgress: Record<string, { studied: number; total: number }>;
  lastSubjectId: string | null;
}

interface ProgressContextValue {
  streak: number;
  totalCardsStudied: number;
  accuracy: number;
  subjectProgress: Record<string, { studied: number; total: number }>;
  lastSubjectId: string | null;
  recordCardStudied: (subjectId: string) => void;
  recordQuizAnswer: (correct: boolean) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const STORAGE_KEY = 'cpa-progress';

function buildInitialState(stored: Partial<ProgressState> = {}): ProgressState {
  const base: ProgressState = {
    streak: stored.streak ?? 0,
    lastStudiedDate: stored.lastStudiedDate ?? '',
    totalCardsStudied: stored.totalCardsStudied ?? 0,
    quizCorrect: stored.quizCorrect ?? 0,
    quizTotal: stored.quizTotal ?? 0,
    subjectProgress: stored.subjectProgress ?? {},
    lastSubjectId: stored.lastSubjectId ?? null,
  };
  // Always recompute totals from content data so they're never stale
  subjects.forEach(s => {
    const total = feedCards.filter(c => c.subject === s.title).length;
    base.subjectProgress[s.id] = {
      studied: base.subjectProgress[s.id]?.studied ?? 0,
      total,
    };
  });
  return base;
}

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function getYesterday(): string {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return buildInitialState(raw ? JSON.parse(raw) : {});
    } catch {
      return buildInitialState();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const recordCardStudied = useCallback((subjectId: string) => {
    setState(prev => {
      if (!(subjectId in prev.subjectProgress)) return prev; // ignore unknown ids
      const today = getToday();
      const entry = prev.subjectProgress[subjectId];
      const newStudied = Math.min(entry.studied + 1, entry.total);

      let newStreak = prev.streak;
      let newLastDate = prev.lastStudiedDate;
      if (prev.lastStudiedDate !== today) {
        newStreak = prev.lastStudiedDate === getYesterday() ? prev.streak + 1 : 1;
        if (prev.lastStudiedDate === '') newStreak = 1;
        newLastDate = today;
      }

      return {
        ...prev,
        streak: newStreak,
        lastStudiedDate: newLastDate,
        totalCardsStudied: prev.totalCardsStudied + 1,
        lastSubjectId: subjectId,
        subjectProgress: {
          ...prev.subjectProgress,
          [subjectId]: { ...entry, studied: newStudied },
        },
      };
    });
  }, []);

  const recordQuizAnswer = useCallback((correct: boolean) => {
    setState(prev => ({
      ...prev,
      quizTotal: prev.quizTotal + 1,
      quizCorrect: correct ? prev.quizCorrect + 1 : prev.quizCorrect,
    }));
  }, []);

  const accuracy = state.quizTotal > 0
    ? Math.round((state.quizCorrect / state.quizTotal) * 100)
    : 0;

  return (
    <ProgressContext.Provider value={{
      streak: state.streak,
      totalCardsStudied: state.totalCardsStudied,
      accuracy,
      subjectProgress: state.subjectProgress,
      lastSubjectId: state.lastSubjectId,
      recordCardStudied,
      recordQuizAnswer,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}
```

- [ ] **Step 2: Verify string alignment between subjects and feedCards**

Run this quick check to confirm subject titles match feedCard subjects (mismatches produce silent zero-totals):

```bash
node -e "
const { subjects, feedCards } = require('./src/content/feedData.ts') 2>/dev/null || (() => {
  // fallback: grep check
  process.exit(0);
})();
subjects.forEach(s => {
  const n = feedCards.filter(c => c.subject === s.title).length;
  console.log(s.id, ':', n, 'cards');
});
" 2>/dev/null || grep -c "subject:" src/content/feedData.ts
```

If `node` can't run TS directly, visually confirm in `src/content/feedData.ts` that each `subjects[n].title` value (e.g. `'Pengantar Akuntansi & Bisnis'`) appears verbatim in at least one `feedCards` entry's `subject` field.

- [ ] **Step 3: Verify TypeScript**

```bash
npm run build
```
Expected: Exits 0. If there's a type error about `subjects` or `feedCards` not having `id`/`title`, check that the import path and field names match `src/content/feedData.ts`.

- [ ] **Step 4: Commit**

```bash
git add src/context/ProgressContext.tsx
git commit -m "feat: add ProgressContext with localStorage streak tracking"
```

---

### Task 4: SubjectIcon Component

**Files:**
- Create: `src/components/cards/SubjectIcon.tsx`

- [ ] **Step 1: Create the file**

```tsx
import {
  BookOpen, Calculator, Scale, TrendingUp, Search,
  Target, Layers, FileText, BarChart2, Briefcase,
  PieChart, Award, ClipboardList,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const subjectIconMap: Record<string, LucideIcon> = {
  'pengantar-akuntansi':      BookOpen,
  'akuntansi-keuangan-dasar': Calculator,
  'manajemen-bisnis-dasar':   Briefcase,
  'ekonomi-statistik':        PieChart,
  'pelaporan-korporat':       FileText,
  'manajemen-keuangan':       TrendingUp,
  'manajemen-perpajakan':     Scale,
  'audit-asurans':            Search,
  'akuntansi-manajemen':      BarChart2,
  'manajemen-stratejik':      Target,
  'studi-kasus-terpadu':      Layers,
  'etika-tata-kelola':        Award,
  'psak-standar':             ClipboardList,
  'strategi-ujian':           BookOpen,
};

interface SubjectIconProps {
  id: string;
  size?: number;
  className?: string;
}

export default function SubjectIcon({ id, size = 20, className }: SubjectIconProps) {
  const Icon = subjectIconMap[id] ?? BookOpen;
  return <Icon size={size} className={className} />;
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/cards/SubjectIcon.tsx
git commit -m "feat: add SubjectIcon component mapping IDs to lucide SVGs"
```

---

### Task 5: Wire ProgressProvider in App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add ProgressProvider and remove /topics route**

Replace the contents of `src/App.tsx`:

```tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Feed from './pages/Feed';
import SubjectList from './pages/SubjectList';
import SubjectDetail from './pages/SubjectDetail';
import FormalMaterial from './pages/FormalMaterial';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <ProgressProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="subjects" element={<SubjectList />} />
          <Route path="subjects/:subjectId" element={<SubjectDetail />} />
          <Route path="subjects/:subjectId/formal" element={<FormalMaterial />} />
          <Route path="*" element={<div className="k-not-found">Not Found</div>} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}

export default App;
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wrap app with ProgressProvider, remove duplicate /topics route"
```

---

## Chunk 2: Navigation, Login, and Home

### Task 6: Layout — 3-item nav with active dot

**Files:**
- Modify: `src/components/Layout.tsx`

- [ ] **Step 1: Update Layout.tsx**

Replace the full file:

```tsx
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Zap, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navClass = (path: string) =>
    `k-nav-link ${isActive(path) ? 'k-nav-link-active' : 'k-nav-link-inactive'}`;

  return (
    <div className="k-layout">
      <header className="k-header">
        <div className="k-header-spacer" />
        <h1 className="k-header-title">CA Prep</h1>
        <button onClick={logout} className="k-header-logout" aria-label="Logout" title="Logout">
          <LogOut size={20} />
        </button>
      </header>

      <main className="k-main">
        <Outlet />
      </main>

      <nav className="k-bottom-nav">
        <div className="k-bottom-nav-inner">
          <Link to="/" className={navClass('/')}>
            <Home size={22} />
            <span className="k-nav-label">Home</span>
            <span className="k-nav-dot" />
          </Link>
          <Link to="/feed" className={navClass('/feed')}>
            <Zap size={22} />
            <span className="k-nav-label">Feed</span>
            <span className="k-nav-dot" />
          </Link>
          <Link to="/subjects" className={navClass('/subjects')}>
            <BookOpen size={22} />
            <span className="k-nav-label">Subjects</span>
            <span className="k-nav-dot" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Layout.tsx
git commit -m "feat: 3-item nav with active dot spring animation"
```

---

### Task 7: Login — Premium dark redesign

**Files:**
- Modify: `src/pages/Login.tsx`

- [ ] **Step 1: Update Login.tsx**

Replace the full file:

```tsx
import { useState, type FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function CaLogoMark() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ca-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1077E3" />
          <stop offset="100%" stopColor="#045DC1" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ca-grad)" />
      <text x="24" y="31" fontSize="22" fontWeight="800" fill="white" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">CA</text>
    </svg>
  );
}

export default function Login() {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(email.trim().toLowerCase(), password);
  };

  return (
    <div className="k-login-page">
      <div className="k-login-card">
        <div className="k-login-header">
          <CaLogoMark />
          <h1 className="k-login-brand">CA Prep</h1>
          <p>Masuk untuk melanjutkan belajar</p>
        </div>
        <form onSubmit={handleSubmit} className="k-login-form">
          <div className="k-login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="k-login-field">
            <label htmlFor="password">Password</label>
            <div className="k-login-pw-wrap">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="k-login-pw-toggle"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <p className="k-login-error">{error}</p>}
          <button type="submit" className="k-login-btn">Masuk</button>
        </form>
        <p className="k-login-footer">Chartered Accountant Indonesia — IAI</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Login.tsx
git commit -m "feat: premium dark login with SVG logo mark and Eye/EyeOff toggle"
```

---

### Task 8: Home — Dashboard with stats and hero CTA

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Update Home.tsx**

Replace the full file:

```tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Target, CheckCircle, Zap, BookOpen, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { subjects } from '../content/feedData';

export default function Home() {
  const { streak, accuracy, totalCardsStudied, subjectProgress, lastSubjectId } = useProgress();
  const [showInfo, setShowInfo] = useState(false);

  const lastSubject = lastSubjectId ? subjects.find(s => s.id === lastSubjectId) : null;
  const remaining = lastSubjectId && subjectProgress[lastSubjectId]
    ? subjectProgress[lastSubjectId].total - subjectProgress[lastSubjectId].studied
    : 0;

  return (
    <div className="k-home">
      {/* Stats row */}
      <div className="k-stats-row">
        <div className="k-stat-card">
          <div className="k-stat-icon"><Flame size={20} /></div>
          <div className="k-stat-val">{streak}</div>
          <div className="k-stat-label">Hari Beruntun</div>
        </div>
        <div className="k-stat-card">
          <div className="k-stat-icon"><Target size={20} /></div>
          <div className="k-stat-val">{accuracy}%</div>
          <div className="k-stat-label">Akurasi Quiz</div>
        </div>
        <div className="k-stat-card">
          <div className="k-stat-icon"><CheckCircle size={20} /></div>
          <div className="k-stat-val">{totalCardsStudied}</div>
          <div className="k-stat-label">Kartu Selesai</div>
        </div>
      </div>

      {/* Hero CTA */}
      {lastSubject ? (
        <Link to={`/subjects/${lastSubjectId}`} className="k-hero-cta">
          <div className="k-hero-cta-eyebrow">Lanjut Belajar</div>
          <div className="k-hero-cta-title">{lastSubject.title}{remaining > 0 ? ` — ${remaining} kartu tersisa` : ''}</div>
          <span className="k-hero-cta-btn">Mulai Sekarang →</span>
        </Link>
      ) : (
        <Link to="/subjects" className="k-hero-cta-empty">
          Mulai belajar — pilih mata ujian
        </Link>
      )}

      {/* Quick links */}
      <div className="k-home-grid">
        <Link to="/feed" className="k-home-link k-home-link-primary">
          <Zap size={20} />
          <h3>Feed</h3>
          <p>Scroll &amp; belajar</p>
        </Link>
        <Link to="/subjects" className="k-home-link k-home-link-secondary">
          <BookOpen size={20} />
          <h3>Mata Ujian</h3>
          <p>Semua level</p>
        </Link>
      </div>

      {/* Collapsible info */}
      <div className="k-info-box">
        <button
          className="k-info-toggle"
          onClick={() => setShowInfo(v => !v)}
          aria-expanded={showInfo}
        >
          <Info size={16} />
          <span>Info Ujian CA</span>
          {showInfo ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {showInfo && (
          <div className="k-info-box-items">
            <p><strong>3 Level</strong>: CAFB → Associate CA → Chartered Accountant</p>
            <p><strong>12 Mata Ujian</strong> total di semua level</p>
            <p><strong>Masa berlaku</strong>: 3 tahun per mata ujian</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add `k-info-toggle` CSS to kolosal.css**

Append to `kolosal.css`:

```css
.k-info-toggle {
  display: flex; align-items: center; gap: 6px;
  background: none; border: none; cursor: pointer;
  color: var(--color-text-600); font-size: 0.875rem; font-weight: 600;
  padding: 0; width: 100%;
}
.k-info-toggle:hover { color: var(--color-text-800); }
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.tsx src/styles/kolosal.css
git commit -m "feat: home dashboard with stats, hero CTA, and collapsible info"
```

---

## Chunk 3: Subject Pages, Feed, and FormalMaterial

### Task 9: SubjectList — Progress bars and SubjectIcon

**Files:**
- Modify: `src/pages/SubjectList.tsx`

- [ ] **Step 1: Update SubjectList.tsx**

Replace the full file:

```tsx
import { Link } from 'react-router-dom';
import { subjects, feedCards } from '../content/feedData';
import type { ExamLevel } from '../content/feedData';
import { BookOpen } from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';
import { useProgress } from '../context/ProgressContext';

const levelLabels: Record<ExamLevel, string> = {
  'cafb': 'Level 1 — CAFB',
  'associate-ca': 'Level 2 — Associate CA',
  'ca': 'Level 3 — Chartered Accountant',
};

export default function SubjectList() {
  const { subjectProgress } = useProgress();

  const grouped = subjects.reduce((acc, s) => {
    const lvl = ('level' in s && s.level) ? s.level as ExamLevel : 'other';
    if (!acc[lvl]) acc[lvl] = [];
    acc[lvl].push(s);
    return acc;
  }, {} as Record<string, typeof subjects[number][]>);

  const levelOrder: (ExamLevel | 'other')[] = ['cafb', 'associate-ca', 'ca', 'other'];

  return (
    <div className="k-subject-list">
      <h2 className="k-subject-list-title">Mata Ujian</h2>
      {levelOrder.map(lvl => {
        const items = grouped[lvl];
        if (!items || items.length === 0) return null;
        return (
          <div key={lvl}>
            {lvl !== 'other' && (
              <div className="k-subject-level-label">{levelLabels[lvl as ExamLevel]}</div>
            )}
            <div className="k-subject-items">
              {items.map((subject) => {
                const count = feedCards.filter(c => c.subject === subject.title).length;
                const progress = subjectProgress[subject.id];
                const pct = progress && progress.total > 0
                  ? Math.min(100, Math.round((progress.studied / progress.total) * 100))
                  : 0;
                return (
                  <div key={subject.id} className="k-subject-item-row">
                    <Link to={`/subjects/${subject.id}`} className="k-subject-link">
                      <span className="k-subject-name">
                        <SubjectIcon id={subject.id} size={16} />
                        {subject.title}
                      </span>
                      <span className="k-subject-right">
                        <span className="k-subject-count">{count} kartu</span>
                        <div className="k-progress-bar">
                          <div className="k-progress-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="k-subject-pct">{pct}%</span>
                      </span>
                    </Link>
                    <Link
                      to={`/subjects/${subject.id}/formal`}
                      className="k-subject-formal-link"
                      title="Materi Formal"
                    >
                      <BookOpen size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Add `k-subject-right` and `k-subject-pct` CSS**

Append to `kolosal.css`:

```css
.k-subject-right { display: flex; align-items: center; gap: 8px; }
.k-subject-pct   { font-size: 0.6875rem; color: var(--color-text-500); min-width: 28px; text-align: right; }
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/pages/SubjectList.tsx src/styles/kolosal.css
git commit -m "feat: subject list with progress bars and SubjectIcon SVGs"
```

---

### Task 10: SubjectDetail — Dark polish

**Files:**
- Modify: `src/pages/SubjectDetail.tsx`

- [ ] **Step 1: Update SubjectDetail.tsx**

Replace the full file:

```tsx
import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { subjects, feedCards } from '../content/feedData';
import FeedCardRenderer from '../components/cards/FeedCardRenderer';
import { ChevronUp, ChevronDown, ArrowLeft, BookOpen, Flame } from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';
import { useProgress } from '../context/ProgressContext';

export default function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find(s => s.id === subjectId);
  const cards = feedCards.filter(c => subject && c.subject === subject.title);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { recordCardStudied } = useProgress();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const index = Math.round(container.scrollTop / container.clientHeight);
      setActiveIndex(index);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Record card studied when slide changes (offset by 1 for header slide)
  useEffect(() => {
    if (activeIndex > 0 && subjectId) {
      recordCardStudied(subjectId);
    }
  }, [activeIndex, subjectId, recordCardStudied]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container || index < 0 || index >= cards.length) return;
    container.scrollTo({ top: index * container.clientHeight, behavior: 'smooth' });
  };

  if (!subject) {
    return (
      <div className="k-not-found">
        <p>Mata ujian tidak ditemukan</p>
        <Link to="/subjects">← Kembali</Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="k-feed">
      {/* Header slide */}
      <div className="k-feed-slide">
        <div className="k-feed-slide-inner k-feed-slide-inner--center">
          <div className="k-card k-card--center">
            <SubjectIcon id={subjectId!} size={48} />
            <h2 className="k-card-title">{subject.title}</h2>
            <p className="k-subject-detail-count">{cards.length} kartu belajar</p>
            <Link to="/subjects" className="k-subject-detail-back">
              <ArrowLeft size={16} /> Kembali
            </Link>
            <Link to={`/subjects/${subjectId}/formal`} className="k-formal-btn">
              <BookOpen size={16} />
              Materi Formal
            </Link>
          </div>
          <div className="k-swipe-hint">
            <ChevronUp size={20} />
            <span>Swipe up untuk mulai</span>
          </div>
        </div>
        <button onClick={() => scrollToIndex(1)} className="k-nav-arrow k-nav-arrow-down">
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Card slides */}
      {cards.map((card, index) => (
        <div key={card.id} className="k-feed-slide">
          <div className="k-feed-slide-inner">
            <div className="k-counter">
              <div className="k-counter-text">
                <Flame size={14} className="k-counter-flame" />
                {index + 1} / {cards.length}
              </div>
              <div className="k-dots">
                {Array.from({ length: Math.min(cards.length, 5) }, (_, i) => {
                  const dotIndex = activeIndex <= 2
                    ? i
                    : activeIndex >= cards.length - 2
                      ? cards.length - 5 + i
                      : activeIndex - 3 + i;
                  return (
                    <div
                      key={dotIndex}
                      className={`k-dot ${dotIndex === activeIndex - 1 ? 'k-dot-active' : 'k-dot-inactive'}`}
                    />
                  );
                })}
              </div>
            </div>
            <FeedCardRenderer card={card} />
          </div>
          {index >= 0 && (
            <button onClick={() => scrollToIndex(index)} className="k-nav-arrow k-nav-arrow-up">
              <ChevronUp size={20} />
            </button>
          )}
          {index < cards.length - 1 && (
            <button onClick={() => scrollToIndex(index + 2)} className="k-nav-arrow k-nav-arrow-down">
              <ChevronDown size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Add helper CSS classes**

Append to `kolosal.css`:

```css
.k-feed-slide-inner--center { justify-content: center; }
.k-card--center { text-align: center; }
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/pages/SubjectDetail.tsx src/styles/kolosal.css
git commit -m "feat: SubjectDetail dark polish with SubjectIcon and progress recording"
```

---

### Task 11: Feed — Card animation and progress recording

**Files:**
- Modify: `src/pages/Feed.tsx`

- [ ] **Step 1: Add progress recording and fix Flame inline style**

The only changes to `Feed.tsx` are:
1. Import `useProgress` and `subjects`
2. Add `useEffect` to call `recordCardStudied` when `activeIndex` changes
3. Replace `<Flame size={14} style={{ color: 'var(--color-warning-500)' }}>` with `<Flame size={14} className="k-counter-flame" />`

Find the imports at the top of `src/pages/Feed.tsx` and add:
```tsx
import { useProgress } from '../context/ProgressContext';
import { subjects } from '../content/feedData';
```

Find the existing `useCallback`, `useEffect` declarations and add this new effect after the existing ones:
```tsx
// Record card studied when active card changes
const { recordCardStudied } = useProgress();
useEffect(() => {
  const card = cards[activeIndex];
  if (!card) return;
  const subjectId = subjects.find(s => s.title === card.subject)?.id;
  if (subjectId) recordCardStudied(subjectId);
}, [activeIndex, cards, recordCardStudied]);
```

Find `<Flame size={14} style={{ color: 'var(--color-warning-500)' }} />` and replace with:
```tsx
<Flame size={14} className="k-counter-flame" />
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Feed.tsx
git commit -m "feat: feed records card studied progress and fixes Flame inline style"
```

---

### Task 12: FormalMaterial — Typography, formula blocks, SVG icons

**Files:**
- Modify: `src/pages/FormalMaterial.tsx`

- [ ] **Step 1: Replace imports and SectionRenderer**

Replace the imports block at the top of `src/pages/FormalMaterial.tsx`:

```tsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { subjects } from '../content/feedData';
import { formalMaterials } from '../content/formalData';
import type { FormalSection } from '../content/formalData';
import {
  ArrowLeft, ChevronLeft, ChevronRight, BookOpen, List,
  AlertTriangle, Lightbulb, Bookmark, ListOrdered,
  ClipboardList, BarChart2, Hash,
} from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';
```

Replace the `SectionRenderer` component:

```tsx
function SectionRenderer({ section }: { section: FormalSection }) {
  return (
    <div className="k-formal-section" id={section.id}>
      <h3 className="k-formal-section-title">{section.title}</h3>
      <p className="k-formal-section-content">{section.content}</p>

      {section.rules && section.rules.length > 0 && (
        <div className="k-formal-rules">
          <div className="k-formal-rules-label">
            <ClipboardList size={14} /> Aturan / Ketentuan
          </div>
          <ul>
            {section.rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </div>
      )}

      {section.steps && section.steps.length > 0 && (
        <div className="k-formal-steps">
          <div className="k-formal-steps-label">
            <ListOrdered size={14} /> Langkah-langkah
          </div>
          <ol>
            {section.steps.map((step, i) => (
              <li key={i}>
                <span className="k-formal-step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {section.tables?.map((table, ti) => (
        <div key={ti} className="k-formal-table-wrapper">
          {table.caption && <div className="k-formal-table-caption">{table.caption}</div>}
          <div className="k-formal-table-scroll">
            <table className="k-formal-table">
              <thead>
                <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {section.formula && (
        <div>
          <div className="k-formula-block-label"><Hash size={14} /> Rumus</div>
          <div className="k-formula-block">{section.formula}</div>
        </div>
      )}

      {section.diagram && (
        <div className="k-formal-diagram">
          <div className="k-formal-diagram-label"><BarChart2 size={14} /> Diagram</div>
          <pre>{section.diagram}</pre>
        </div>
      )}

      {section.examples && section.examples.length > 0 && (
        <div className="k-formal-examples">
          <div className="k-formal-examples-label"><Bookmark size={14} /> Contoh</div>
          {section.examples.map((ex, i) => (
            <div key={i} className="k-formal-example-item">{ex}</div>
          ))}
        </div>
      )}

      {section.notes && section.notes.length > 0 && (
        <div className="k-formal-notes">
          {section.notes.map((note, i) => (
            <div key={i} className="k-formal-note-item">
              <Lightbulb size={14} /> {note}
            </div>
          ))}
        </div>
      )}

      {section.warning && (
        <div className="k-formal-warning">
          <AlertTriangle size={14} /> {section.warning}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Update FormalMaterial component subject icon and chapter header**

In the `FormalMaterial` component's return, find:
```tsx
<span className="k-formal-icon">{subject.icon}</span>
```
Replace with:
```tsx
<SubjectIcon id={subjectId!} size={32} className="k-formal-icon" />
```

Find the chapter header block and replace with:
```tsx
<div className="k-formal-chapter-header">
  <span className="k-formal-chapter-number">BAB {currentPage + 1}</span>
  <h2 className="k-formal-chapter-title">{chapter.title}</h2>
  <p className="k-formal-chapter-desc">{chapter.description}</p>
</div>
```

Find the TOC label:
```tsx
<div className="k-formal-toc-label">📑 Daftar Isi</div>
```
Replace with:
```tsx
<div className="k-formal-toc-label"><List size={16} /> Daftar Isi</div>
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/pages/FormalMaterial.tsx
git commit -m "feat: FormalMaterial dark typography, formula blocks, SVG icons"
```

---

## Chunk 4: Card Components

### Task 13: QuizCard — SVG icons and progress recording

**Files:**
- Modify: `src/components/cards/QuizCard.tsx`

- [ ] **Step 1: Replace QuizCard.tsx**

```tsx
import { useState } from 'react';
import { Square, CheckSquare, CheckCircle, XCircle, Search, Lightbulb, Bookmark } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';
import { useProgress } from '../../context/ProgressContext';

export default function QuizCard({ card }: { card: FeedCard }) {
  const isMulti = Array.isArray(card.correctIndices) && card.correctIndices.length > 0;
  const [selected, setSelected] = useState<number | null>(null);
  const [multiSelected, setMultiSelected] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const { recordQuizAnswer } = useProgress();

  const answered = isMulti ? submitted : selected !== null;
  const isCorrectSingle = selected === card.correctIndex;
  const isCorrectMulti = isMulti && submitted
    ? card.correctIndices!.length === multiSelected.size && card.correctIndices!.every(i => multiSelected.has(i))
    : false;
  const isCorrect = isMulti ? isCorrectMulti : isCorrectSingle;

  const handleSingleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    recordQuizAnswer(i === card.correctIndex);
  };

  const toggleMulti = (i: number) => {
    if (submitted) return;
    setMultiSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleSubmitMulti = () => {
    setSubmitted(true);
    recordQuizAnswer(
      card.correctIndices!.length === multiSelected.size &&
      card.correctIndices!.every(i => multiSelected.has(i))
    );
  };

  const correctLabel = isMulti
    ? card.correctIndices!.map(i => String.fromCharCode(65 + i)).join(', ')
    : String.fromCharCode(65 + (card.correctIndex ?? 0));

  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-danger">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label">{isMulti ? 'Multi-Pilih' : 'Quiz'}</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body k-card-body--quiz">{card.content}</p>
      {isMulti && !submitted && (
        <p className="k-quiz-hint">
          Pilih semua jawaban yang benar ({card.correctIndices!.length} jawaban)
        </p>
      )}
      <div className="k-quiz-options">
        {card.options?.map((opt, i) => {
          let cls = 'k-quiz-option';
          if (isMulti) {
            if (!submitted && multiSelected.has(i)) cls += ' k-quiz-option-selected';
            if (submitted) {
              if (card.correctIndices!.includes(i)) cls += ' k-quiz-option-correct';
              else if (multiSelected.has(i)) cls += ' k-quiz-option-wrong';
            }
          } else {
            if (selected !== null) {
              if (i === card.correctIndex) cls += ' k-quiz-option-correct';
              else if (i === selected) cls += ' k-quiz-option-wrong';
            }
          }
          return (
            <button
              key={i}
              onClick={() => isMulti ? toggleMulti(i) : handleSingleSelect(i)}
              className={cls}
              disabled={answered}
            >
              <span className="k-quiz-check-icon">
                {isMulti
                  ? (multiSelected.has(i) ? <CheckSquare size={14} /> : <Square size={14} />)
                  : <span>{String.fromCharCode(65 + i)}.</span>
                }
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {isMulti && !submitted && multiSelected.size > 0 && (
        <button onClick={handleSubmitMulti} className="k-quiz-submit">
          Periksa Jawaban
        </button>
      )}
      {answered && (
        <div className="k-quiz-feedback">
          <div className={`k-callout ${isCorrect ? 'k-callout-success' : 'k-callout-warning'}`}>
            <p className="k-callout-title">
              {isCorrect
                ? <><CheckCircle size={14} /> Benar!</>
                : <><XCircle size={14} /> Kurang tepat — jawaban: {correctLabel}</>
              }
            </p>
            <p>{card.explanation}</p>
          </div>
          {card.reasoning && (
            <div className="k-reasoning">
              <div className="k-reasoning-label"><Search size={14} /> Langkah Penalaran</div>
              {card.reasoning}
            </div>
          )}
          {card.example && (
            <div className="k-example">
              <div className="k-example-label"><Bookmark size={14} /> Contoh</div>
              {card.example}
            </div>
          )}
          {card.keyTakeaway && (
            <div className="k-takeaway">
              <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
              {card.keyTakeaway}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/cards/QuizCard.tsx
git commit -m "feat: QuizCard SVG icons, recordQuizAnswer, no inline styles"
```

---

### Task 14: FlashCard — 3D flip animation and SVG icons

**Files:**
- Modify: `src/components/cards/FlashCard.tsx`

- [ ] **Step 1: Replace FlashCard.tsx**

```tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp, Bookmark, Lightbulb, Brain } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';

export default function FlashCard({ card }: { card: FeedCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`k-card k-flashcard ${flipped ? 'k-flashcard--flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="k-flashcard-inner">
        {/* FRONT */}
        <div className="k-flashcard-front">
          <div className="k-card-header">
            <span className="k-badge k-badge-information">{card.subject}</span>
            {card.difficulty && (
              <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
            )}
            <span className="k-type-label">Flashcard</span>
          </div>
          <h3 className="k-card-title">{card.title}</h3>
          <p className="k-card-body">{card.content}</p>
          {card.mnemonic && (
            <div className="k-mnemonic"><Brain size={14} /> {card.mnemonic}</div>
          )}
          <div className="k-flashcard-hint">
            <span className="k-tap-hint"><ChevronDown size={14} /> Tap untuk lihat jawaban</span>
          </div>
        </div>

        {/* BACK */}
        <div className="k-flashcard-back">
          <div className="k-card-header">
            <span className="k-badge k-badge-information">{card.subject}</span>
            {card.difficulty && (
              <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
            )}
            <span className="k-type-label">Flashcard</span>
          </div>
          <h3 className="k-card-title">{card.title}</h3>
          <div className="k-callout k-callout-success">
            <p>{card.answer}</p>
          </div>
          {card.example && (
            <div className="k-example">
              <div className="k-example-label"><Bookmark size={14} /> Contoh</div>
              {card.example}
            </div>
          )}
          {card.keyTakeaway && (
            <div className="k-takeaway">
              <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
              {card.keyTakeaway}
            </div>
          )}
          <div className="k-flashcard-hint">
            <span className="k-tap-hint"><ChevronUp size={14} /> Tap untuk lihat soal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/cards/FlashCard.tsx
git commit -m "feat: FlashCard 3D CSS flip animation, SVG icons, no inline styles"
```

---

### Task 15: FactCard, TipCard, MaterialCard — SVG icons

**Files:**
- Modify: `src/components/cards/FactCard.tsx`
- Modify: `src/components/cards/TipCard.tsx`
- Modify: `src/components/cards/MaterialCard.tsx`

- [ ] **Step 1: Replace FactCard.tsx**

```tsx
import { Bookmark, Lightbulb, BookMarked } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';

export default function FactCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-warning">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label">Fakta</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>
      {card.whyItMatters && (
        <div className="k-why-matters">
          <strong>Kenapa penting?</strong> {card.whyItMatters}
        </div>
      )}
      {card.example && (
        <div className="k-example">
          <div className="k-example-label"><Bookmark size={14} /> Contoh</div>
          {card.example}
        </div>
      )}
      {card.keyTakeaway && (
        <div className="k-takeaway">
          <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
          {card.keyTakeaway}
        </div>
      )}
      {card.source && (
        <p className="k-source"><BookMarked size={14} /> {card.source}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Replace TipCard.tsx**

```tsx
import { Bookmark, Lightbulb, Brain } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';

export default function TipCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-success">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label">Tips</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>
      {card.example && (
        <div className="k-example">
          <div className="k-example-label"><Bookmark size={14} /> Contoh Penerapan</div>
          {card.example}
        </div>
      )}
      {card.mnemonic && (
        <div className="k-mnemonic"><Brain size={14} /> {card.mnemonic}</div>
      )}
      {card.keyTakeaway && (
        <div className="k-takeaway">
          <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
          {card.keyTakeaway}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Replace MaterialCard.tsx**

```tsx
import { Bookmark, Lightbulb, Brain, BookOpen, ClipboardList, ListOrdered, BarChart2, BookMarked } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';

export default function MaterialCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card k-material-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-primary">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label"><BookOpen size={12} /> Materi</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>

      {card.sections?.map((section, i) => (
        <div key={i} className="k-material-section">
          <h4 className="k-material-section-heading">{section.heading}</h4>
          <p className="k-material-section-body">{section.body}</p>
        </div>
      ))}

      {card.rules && card.rules.length > 0 && (
        <div className="k-material-rules">
          <div className="k-material-rules-label"><ClipboardList size={14} /> Aturan / Ketentuan</div>
          <ul className="k-material-rules-list">
            {card.rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </div>
      )}

      {card.steps && card.steps.length > 0 && (
        <div className="k-material-steps">
          <div className="k-material-steps-label"><ListOrdered size={14} /> Langkah-langkah</div>
          <ol className="k-material-steps-list">
            {card.steps.map((step, i) => (
              <li key={i}>
                <span className="k-step-number">{i + 1}</span>
                <span className="k-step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {card.tables?.map((table, ti) => (
        <div key={ti} className="k-material-table-wrapper">
          {table.caption && <div className="k-material-table-caption">{table.caption}</div>}
          <div className="k-material-table-scroll">
            <table className="k-material-table">
              <thead>
                <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {card.diagram && (
        <div className="k-material-diagram">
          <div className="k-material-diagram-label"><BarChart2 size={14} /> Diagram</div>
          <pre className="k-material-diagram-content">{card.diagram}</pre>
        </div>
      )}

      {card.example && (
        <div className="k-example">
          <div className="k-example-label"><Bookmark size={14} /> Contoh</div>
          {card.example}
        </div>
      )}

      {card.mnemonic && (
        <div className="k-mnemonic"><Brain size={14} /> {card.mnemonic}</div>
      )}

      {card.keyTakeaway && (
        <div className="k-takeaway">
          <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
          {card.keyTakeaway}
        </div>
      )}

      {card.source && (
        <p className="k-source"><BookMarked size={14} /> {card.source}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: Exits 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/cards/FactCard.tsx src/components/cards/TipCard.tsx src/components/cards/MaterialCard.tsx
git commit -m "feat: FactCard, TipCard, MaterialCard SVG icons, no inline styles"
```

---

### Task 16: Final visual verification

- [ ] **Step 1: Verify ProgressProvider and critical CSS are in place**

```bash
grep -n "ProgressProvider" src/App.tsx
```
Expected: at least 2 matches (import line + JSX usage).

```bash
grep -n "k-flashcard-inner" src/styles/kolosal.css
```
Expected: at least 1 match confirming the 3D flip CSS is present.

```bash
grep -n "k-formal-chapter-number" src/styles/kolosal.css
```
Expected: at least 1 match confirming the chapter header CSS is present.

- [ ] **Step 2: Run dev server**

```bash
npm run dev
```

Open `http://localhost:5173` in a browser.

- [ ] **Step 3: Visual checklist**

Login screen:
- [ ] Dark background with blue glow
- [ ] "CA" SVG logo mark visible (blue rounded square)
- [ ] Eye/EyeOff icons in password field

Home page (after login):
- [ ] Stats row: streak, accuracy, cards done (all 0 on first load)
- [ ] Hero CTA shows "Mulai belajar" empty state (first load)
- [ ] Quick links: Feed and Mata Ujian with lucide icons
- [ ] Info section collapsible

Feed page:
- [ ] Cards visible with dark surface background
- [ ] Flame icon uses CSS class (not inline style)
- [ ] Quiz card: correct answer turns green, wrong turns red
- [ ] No emoji icons visible anywhere

Subject list:
- [ ] SVG icons per subject (no emoji)
- [ ] Progress bars visible (0% on first load)
- [ ] Formal Material book icon works

Subject detail:
- [ ] SVG subject icon in header slide
- [ ] Card counter uses Flame with correct color

Formal material:
- [ ] SVG subject icon in header
- [ ] Chapter header: blue "BAB N" label, large bold title
- [ ] Formula blocks: blue left-border, monospace font
- [ ] Warning/note/example icons are SVG (not emoji)

Flashcard:
- [ ] Tapping flips card with 3D animation
- [ ] Back face shows answer

- [ ] **Step 4: Run final lint + build**

```bash
npm run lint && npm run build
```
Expected: Both exit 0 (or lint warnings only — no errors).

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete dark premium redesign — all screens verified"
```
