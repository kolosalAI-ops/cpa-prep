# CPA Prep — Kolosal Dark Premium Redesign

**Date:** 2026-03-14
**Status:** Approved
**Approach:** A — Dark-First CSS Rewrite

---

## Overview

Full visual and UX redesign of the CPA Prep app (React + TypeScript + Vite + Tailwind) using the Kolosal Vanilla design system, dark-first. Replaces the current white-base + `filter:invert()` dark hack with a proper dark-first CSS variable system. Adds a progress dashboard, micro-animations, typography overhaul, navigation cleanup, and a premium login screen.

**Core constraint:** No emoji used as icons anywhere — all icons must be proper SVGs via lucide-react. Emoji in card *content* (subject text, explanations) is out of scope — only icon usages are replaced.

---

## Design System Changes (`src/styles/kolosal.css`)

### Dark-First CSS Variables

Rewrite `:root` to dark-first values. **Variable cleanup:** `--color-accent-light` (`#F0F6FE`) is **deleted** — it was a light-mode-only value with no use in the dark design. A new token `--color-accent-mid` (`#3A94F2`) is added for the mid-blue used in icons and active states. These are different colors — `accent-light` is removed, `accent-mid` is new. All old references to `--color-accent-light` in `kolosal.css` must be updated: if they were used for subtle blue backgrounds, use `var(--color-accent-subtle)` instead; if used for icon/text color, use `var(--color-accent-mid)`.

**Token migration map for `kolosal.css` rewrite** — how old tokens map to new:

| Old token | New token |
|---|---|
| `--color-accent-light` | deleted; use `--color-accent-subtle` (backgrounds) or `--color-accent-mid` (text/icons) |
| `--color-neutral-*` | use `--color-grey-*` (unchanged) or `--color-text-*` depending on context |
| `--color-primary-500` | → `--color-accent` |
| `--color-primary-400` | → `--color-accent-mid` |
| `--color-grey-*` | kept as-is (already defined above) |
| `--color-information-50/100/200` | → `--color-information-bg` / `--color-information-border` / `--color-information-text` |
| `--color-warning-500` | → `--color-warning-icon` |
| `--color-success-*` (scale) | → semantic `--color-success-bg/border/text/icon` |
| `--color-danger-*` (scale) | → semantic `--color-danger-bg/border/text/icon` |

```css
:root {
  /* Backgrounds */
  --color-bg: #0D111A;               /* deepest background */
  --color-bg-secondary: #111827;     /* page background */
  --color-bg-tertiary: #1F2937;      /* surface / card background */

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
  --color-accent-mid: #3A94F2;       /* renamed from --color-accent-light */
  --color-accent-hover: #045DC1;
  --color-accent-subtle: rgba(16, 119, 227, 0.15);

  /* Semantic colors — dark-adapted */
  --color-success-bg: rgba(65, 184, 79, 0.1);
  --color-success-border: rgba(65, 184, 79, 0.3);
  --color-success-text: #D9F2DC;
  --color-success-icon: #41B84F;

  --color-danger-bg: rgba(255, 65, 65, 0.1);
  --color-danger-border: rgba(255, 65, 65, 0.2);
  --color-danger-text: #FFD9D9;
  --color-danger-icon: #FF4141;

  --color-warning-bg: rgba(245, 149, 16, 0.1);
  --color-warning-border: rgba(245, 149, 16, 0.2);
  --color-warning-text: #FFF0D9;
  --color-warning-icon: #F59510;

  --color-information-bg: rgba(58, 148, 242, 0.1);
  --color-information-border: rgba(58, 148, 242, 0.2);
  --color-information-text: #D9EAFD;
  --color-information-icon: #3A94F2;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);

  /* Radius — unchanged */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Transitions — unchanged */
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
}
```

Remove the `.dark .k-card { filter: invert() }` block entirely.

### New CSS Classes

All new classes belong in `kolosal.css`. No inline `style={}` props remain in any TSX file after this redesign.

**Dashboard stats:**
```css
.k-stat-card { background: var(--color-bg-tertiary); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 12px 10px; text-align: center; }
.k-stat-icon { color: var(--color-accent-mid); margin-bottom: 4px; }
.k-stat-val  { font-size: 1.5rem; font-weight: 800; color: var(--color-text-900); line-height: 1; }
.k-stat-label{ font-size: 0.6875rem; color: var(--color-text-500); margin-top: 4px; font-weight: 500; }
```

**Hero CTA:**
```css
.k-hero-cta { background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%); border-radius: var(--radius-xl); padding: 16px; position: relative; overflow: hidden; }
.k-hero-cta::after { content: ''; position: absolute; right: -24px; top: -24px; width: 96px; height: 96px; border-radius: 50%; background: rgba(255,255,255,0.08); pointer-events: none; }
.k-hero-cta-eyebrow { font-size: 0.6875rem; font-weight: 700; color: rgba(255,255,255,0.7); letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 4px; }
.k-hero-cta-title { font-size: 1rem; font-weight: 800; color: #fff; margin-bottom: 10px; line-height: 1.3; }
.k-hero-cta-btn { background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 6px 12px; border-radius: var(--radius-md); display: inline-block; text-decoration: none; }
.k-hero-cta-empty { background: var(--color-bg-tertiary); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 16px; text-align: center; color: var(--color-text-500); font-size: 0.875rem; }
```

**Progress bar (subject list):**
```css
.k-progress-bar  { height: 4px; background: var(--color-border); border-radius: 2px; overflow: hidden; width: 48px; }
.k-progress-fill { height: 100%; background: linear-gradient(90deg, var(--color-accent), var(--color-accent-mid)); border-radius: 2px; transition: width var(--transition-base); }
```

**Formula block (FormalMaterial):**
```css
.k-formula-block { background: var(--color-bg); border: 1px solid var(--color-border); border-left: 3px solid var(--color-accent-mid); border-radius: var(--radius-md); padding: 12px 14px; font-family: 'Courier New', Courier, monospace; font-size: 0.8125rem; color: var(--color-accent-mid); white-space: pre-wrap; margin: 12px 0; }
.k-formula-block-label { display: flex; align-items: center; gap: 6px; font-size: 0.6875rem; font-weight: 700; color: var(--color-text-500); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
```

**Skeleton shimmer:**
```css
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
.k-shimmer { background: linear-gradient(90deg, var(--color-bg-tertiary) 25%, var(--color-border) 50%, var(--color-bg-tertiary) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: var(--radius-md); }
```

**Additional utility classes (eliminate remaining inline styles):**
```css
/* Feed counter flame icon */
.k-counter-flame { color: var(--color-warning-icon); }

/* Login brand heading */
.k-login-brand { font-size: 1.5rem; font-weight: 800; color: var(--color-text-900); margin: 6px 0 4px; letter-spacing: -0.5px; }

/* SubjectDetail header helpers */
.k-subject-detail-count { color: var(--color-text-500); margin-top: 4px; }
.k-subject-detail-back  { color: var(--color-accent-mid); display: inline-flex; align-items: center; gap: 4px; margin-top: 12px; text-decoration: none; }

/* Quiz card layout */
.k-quiz-options      { display: flex; flex-direction: column; gap: 8px; }
.k-quiz-hint         { font-size: 0.75rem; color: var(--color-text-400); margin: 0 0 8px; font-style: italic; }
.k-quiz-submit       { margin-top: 12px; padding: 10px 24px; border-radius: var(--radius-md); border: none; background: var(--color-accent); color: #fff; font-weight: 600; cursor: pointer; width: 100%; font-size: 0.875rem; transition: background var(--transition-fast); }
.k-quiz-submit:hover { background: var(--color-accent-hover); }
.k-quiz-check-icon   { color: var(--color-accent-mid); }
.k-quiz-feedback     { margin-top: 16px; }

/* Type label — push right in flex header row */
.k-type-label { margin-left: auto; font-size: 0.6875rem; color: var(--color-text-500); font-weight: 600; }

/* Card body — quiz variant needs bottom margin */
.k-card-body--quiz { margin-bottom: 8px; }

/* FlashCard tap hint container */
.k-flashcard-hint { text-align: center; margin-top: 16px; }
```

---

## Page-by-Page Changes

### 1. `src/index.css`

Replace body styles to set the dark base:

```css
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text-900);
}
```

No other changes to `index.css`.

### 2. `src/styles/kolosal.css` — Full dark-first rewrite

- Replace all `:root` color tokens with dark-first values (see above)
- Rename `--color-accent-light` → `--color-accent-mid` everywhere in this file
- Update every `k-` class: backgrounds → dark surface tokens, borders → `--color-border`, text → dark text tokens
- Remove `filter: invert()` hack block
- Add all new component classes defined above
- Add `@keyframes k-card-in`:
  ```css
  @keyframes k-card-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  .k-card { animation: k-card-in 0.25s ease; }
  ```
- Add smooth transitions to `k-quiz-option`:
  ```css
  .k-quiz-option { transition: border-color var(--transition-fast), background var(--transition-fast); }
  ```
- Update `.k-badge-*` variants to use the new dark-adapted semantic color tokens
- Update `.k-callout-*` variants with dark semantic backgrounds

### 3. `src/pages/Login.tsx` — Premium login

**Visual changes:**
- Page background: full-screen `--color-bg` with a `radial-gradient(circle at 50% 0%, rgba(16,119,227,0.2), transparent)` pseudo-element glow above the card
- Logo: replace flag emoji with the inline `<CaLogoMark />` SVG component (see spec below)
- App name: `k-login-brand` — 1.5rem, weight 800, `--color-text-900`
- Form fields: `k-login-field` label + input; input uses `--color-bg-tertiary` background, `--color-border` border, `border-radius: var(--radius-md)`; on `:focus`: `border-color: var(--color-accent)` + `box-shadow: 0 0 0 3px var(--color-accent-subtle)`
- Submit button: `k-login-btn` — full width, blue gradient `linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))`, `box-shadow: 0 4px 16px rgba(16,119,227,0.35)`
- Password toggle: use lucide `Eye` / `EyeOff` (18px) instead of emoji
- Footer: `k-login-footer` — small muted text, `--color-text-500`

**`CaLogoMark` SVG spec** (inline in `Login.tsx`):
```tsx
// 48×48px viewBox
// Rounded rect: rx=12, fill="url(#ca-grad)"
// Gradient: #1077E3 → #045DC1 (135deg)
// Text "CA": font-size=22, font-weight=800, fill="white", text-anchor=middle, font-family=system-ui
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
```

**No structural changes** — same form logic, same `useAuth` hook.

### 4. `src/components/Layout.tsx` — Nav cleanup

**Changes:**
- Remove the "Topics" `<Link>` entirely (`/topics` → same as `/subjects`, redundant)
- Nav is now 3 items: **Home** (`/`), **Feed** (`/feed`), **Subjects** (`/subjects`)
- Active dot: each `k-nav-link` renders a `<span className="k-nav-dot" />` after the icon+label. The dot is always in the DOM; inactive links get `opacity: 0`, active links get `opacity: 1` with a scale spring.
  ```css
  .k-nav-dot { display: block; width: 4px; height: 4px; border-radius: 50%; background: var(--color-accent-mid); margin: 3px auto 0; opacity: 0; transform: scale(0.5); transition: opacity var(--transition-fast), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .k-nav-link-active .k-nav-dot { opacity: 1; transform: scale(1); }
  ```
- Header: `k-header` background → `var(--color-bg)`, bottom border → `1px solid var(--color-border)`
- Logout button: already uses lucide `LogOut` — keep as-is

### 5. `src/pages/Home.tsx` — Dashboard

**Layout (top to bottom):**
1. **Header** (from Layout — already present)
2. **Stats row** — 3 `k-stat-card` items in a `display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px`
   - Streak: `<Flame size={20} />`, value from `progress.streak`, label "Hari Beruntun"
   - Accuracy: `<Target size={20} />`, value `progress.accuracy + '%'`, label "Akurasi Quiz"
   - Cards done: `<CheckCircle size={20} />`, value `progress.totalCardsStudied`, label "Kartu Selesai"
3. **Hero CTA** — `k-hero-cta`:
   - If `progress.lastSubjectId !== null`: shows subject name + remaining cards count + link to `/subjects/${lastSubjectId}`
   - If `progress.lastSubjectId === null` (first launch): shows `k-hero-cta-empty` with text "Mulai belajar — pilih mata ujian" and link to `/subjects`
   - Remaining cards: `subjectProgress[lastSubjectId].total - subjectProgress[lastSubjectId].studied`
4. **Quick links grid** — 2-column grid:
   - Feed: lucide `Zap` icon, title "Feed", subtitle "Scroll & belajar", links to `/feed`
   - Subjects: lucide `BookOpen` icon, title "Mata Ujian", subtitle "Semua level", links to `/subjects`
5. **Info section** (collapsed by default):
   - Toggle with lucide `Info` icon + "Info Ujian CA" label
   - Expands to show the 3 info points (was `k-info-box`)
   - Use `useState(false)` for open/closed

Remove the static hero `k-hero` and `k-info-box` blocks.

### 6. `src/context/ProgressContext.tsx` — New file

**Exports from `ProgressContext.tsx`:**
- `ProgressProvider` — React context provider component (wraps children, manages state + localStorage)
- `useProgress()` — hook that returns `ProgressContextValue`; throws if used outside `<ProgressProvider>`

```typescript
interface ProgressState {
  streak: number;              // consecutive calendar days with any study activity
  lastStudiedDate: string;     // ISO date string "YYYY-MM-DD", empty string if never
  totalCardsStudied: number;   // total feed cards viewed (by activeIndex change)
  quizCorrect: number;         // total correct quiz answers
  quizTotal: number;           // total quiz answers submitted
  subjectProgress: Record<string, { studied: number; total: number }>;
  // key = subject ID (e.g. 'akuntansi-keuangan-dasar')
  // studied = cards viewed for this subject
  // total = derived from feedCards.filter(c => c.subject === subject.title).length, computed once on init
  lastSubjectId: string | null; // most recently studied subject ID
}

// Derived value (not stored):
// accuracy = quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) : 0
```

**Initialization:**
- On mount, read stored JSON from `localStorage.getItem('cpa-progress')`. If absent, start with zeroed state.
- Populate `subjectProgress[id].total` from `subjects` + `feedCards` on every init:
  ```typescript
  subjects.forEach(s => {
    const total = feedCards.filter(c => c.subject === s.title).length;
    state.subjectProgress[s.id] = { studied: state.subjectProgress[s.id]?.studied ?? 0, total };
  });
  ```
  This ensures `total` is always fresh from content data, never stale in localStorage.

**Actions:**
- `recordCardStudied(subjectId: string)`: if `subjectId` is not a key in `subjectProgress`, ignore the call (no orphaned entries). Otherwise: increment `totalCardsStudied` and `subjectProgress[subjectId].studied` (cap at `total`), set `lastSubjectId = subjectId`, update streak if `lastStudiedDate !== today`.
- `recordQuizAnswer(correct: boolean)`: increment `quizTotal`; if `correct`, increment `quizCorrect`.
- After every action, serialize state to `localStorage.setItem('cpa-progress', JSON.stringify(state))`.

**Streak logic:**
```typescript
const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
if (state.lastStudiedDate === '') {
  state.streak = 1;
} else if (state.lastStudiedDate === today) {
  // same day — no change to streak
} else {
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastStudiedDate === yesterday ? state.streak + 1 : 1;
}
state.lastStudiedDate = today;
```

**Context shape:**
```typescript
interface ProgressContextValue {
  streak: number;
  totalCardsStudied: number;
  accuracy: number; // derived
  subjectProgress: Record<string, { studied: number; total: number }>;
  lastSubjectId: string | null;
  recordCardStudied: (subjectId: string) => void;
  recordQuizAnswer: (correct: boolean) => void;
}
```

### 7. `src/pages/Feed.tsx` — Animations + progress

- In the `useEffect` that watches `activeIndex`, after updating scroll position, call `recordCardStudied` with the subject ID of the active card. Map title→ID: `subjects.find(s => s.title === cards[activeIndex]?.subject)?.id`. If no match, skip the call (do not pass raw title as fallback — orphaned entries are worse than a missed count).
- The `Flame` icon in the counter uses `color: 'var(--color-warning-500)'` inline. Replace with `className="k-counter-flame"` and add CSS: `.k-counter-flame { color: var(--color-warning-icon); }`.
- Add `k-card-in` animation — cards already use `k-feed-slide` / `k-card` structure; the animation fires on CSS class application, no additional TSX changes needed.

### 8. `src/pages/SubjectList.tsx` — Progress bars + SubjectIcon

- Import `useProgress` from `ProgressContext`
- For each subject row, render below the title/count:
  ```tsx
  <div className="k-progress-bar">
    <div
      className="k-progress-fill"
      style={{ width: `${Math.min(100, Math.round((subjectProgress[subject.id]?.studied ?? 0) / (subjectProgress[subject.id]?.total || 1) * 100))}%` }}
    />
  </div>
  ```
- Replace emoji `subject.icon` with `<SubjectIcon id={subject.id} size={16} />`
- The `BookOpen` formal material link icon is already a lucide SVG — keep it

### 9. `src/pages/SubjectDetail.tsx` — Dark polish

- Remove all inline `style={}` props; move values to `k-` classes in `kolosal.css`
- Replace `subject.icon` emoji with `<SubjectIcon id={subjectId} size={48} />`
- `--color-neutral-500` inline → use `var(--color-text-500)` via `k-subject-detail-count` class
- `--color-primary-500` inline → use `var(--color-accent-mid)` via `k-subject-detail-back` class
- `<Flame size={14} style={{ color: 'var(--color-warning-500)' }} />` in counter → replace with `<Flame size={14} className="k-counter-flame" />`
- "Materi Formal" link: already uses `k-formal-btn` + lucide `BookOpen` — ensure no emoji fallback
- Back link: already uses lucide `ArrowLeft` — keep

### 10. `src/pages/FormalMaterial.tsx` — Typography & SVG icons

**Subject icon:** Replace `<span className="k-formal-icon">{subject.icon}</span>` with `<SubjectIcon id={subjectId!} size={32} className="k-formal-icon" />`.

**`SectionRenderer` component changes:**
- Warning: `<AlertTriangle size={14} />` + text (remove ⚠️)
- Note items: `<Lightbulb size={14} />` + text (remove 💡)
- Examples label: `<Bookmark size={14} />` (remove 📌)
- Steps label: `<ListOrdered size={14} />` (remove 🔢)
- Rules label: `<ClipboardList size={14} />` (remove 📋)
- Diagram label: `<BarChart2 size={14} />` (remove 📊)
- Formula label: `<Hash size={14} />` (remove 🔣); replace `<pre>` with `<div className="k-formula-block">`
- TOC panel label: `<List size={16} />` (remove 📑)

**Chapter header:**
```tsx
<div className="k-formal-chapter-header">
  <span className="k-formal-chapter-number">BAB {currentPage + 1}</span>
  <h2 className="k-formal-chapter-title">{chapter.title}</h2>
  <p className="k-formal-chapter-desc">{chapter.description}</p>
</div>
```
```css
.k-formal-chapter-number { font-size: 0.6875rem; font-weight: 700; color: var(--color-accent-mid); letter-spacing: 0.5px; text-transform: uppercase; display: block; margin-bottom: 4px; }
.k-formal-chapter-title  { font-size: 1.25rem; font-weight: 800; color: var(--color-text-900); margin: 0 0 6px; }
.k-formal-chapter-desc   { font-size: 0.875rem; color: var(--color-text-500); margin: 0 0 20px; line-height: 1.5; }
```

**Table dark styling:**
```css
.k-formal-table { width: 100%; border-collapse: collapse; font-size: 0.8125rem; }
.k-formal-table thead tr { background: var(--color-bg); }
.k-formal-table th { padding: 8px 10px; text-align: left; font-weight: 700; color: var(--color-text-700); border-bottom: 1px solid var(--color-border-strong); }
.k-formal-table tbody tr:nth-child(odd)  { background: var(--color-bg-secondary); }
.k-formal-table tbody tr:nth-child(even) { background: var(--color-bg-tertiary); }
.k-formal-table td { padding: 7px 10px; color: var(--color-text-800); border-bottom: 1px solid var(--color-border); }
```

### 11. Card components — SVG icons + style cleanup

**All cards (`QuizCard`, `FlashCard`, `FactCard`, `TipCard`, `MaterialCard`):**
- Remove all inline `style={}` props — move to named `k-` classes
- Replace emoji labels with lucide icons as per Icon Audit table
- `FactCard` / `MaterialCard` source label 📚 → `<BookMarked size={14} />`
- `MaterialCard` type label 📘 → `<BookOpen size={14} />`

**`FlashCard.tsx` — 3D flip animation (requires DOM restructure):**

The existing flat conditional render must be replaced with a 3-layer structure:
```tsx
<div className={`k-card k-flashcard ${flipped ? 'k-flashcard--flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
  <div className="k-flashcard-inner">
    {/* FRONT */}
    <div className="k-flashcard-front">
      {/* card header, title, content, mnemonic */}
    </div>
    {/* BACK */}
    <div className="k-flashcard-back">
      {/* answer callout, example, key takeaway */}
    </div>
  </div>
</div>
```

Because both faces are `position: absolute`, the `.k-flashcard-inner` must be tall enough to show content. Use `min-height` but allow the card to grow:
```css
.k-flashcard { perspective: 800px; }
.k-flashcard-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.35s ease;
  min-height: 260px; /* baseline — content can exceed this */
}
.k-flashcard--flipped .k-flashcard-inner { transform: rotateY(180deg); }
.k-flashcard-front,
.k-flashcard-back {
  position: absolute; inset: 0;
  backface-visibility: hidden; -webkit-backface-visibility: hidden;
  overflow-y: auto; /* allow scrolling if content exceeds min-height */
}
.k-flashcard-back { transform: rotateY(180deg); }
```
The outer `.k-flashcard` wrapper uses `overflow: hidden` inherited from `.k-card` — remove `overflow: hidden` from `.k-card` if present, or override it on `.k-flashcard` so the absolute-positioned faces are not clipped.

**`QuizCard.tsx`:**
- Multi-select icons: `import { Square, CheckSquare, CheckCircle, XCircle } from 'lucide-react'`
  - Unchecked: `<Square size={14} />`
  - Checked: `<CheckSquare size={14} className="k-quiz-check-icon" />`
- Answer feedback strings: replace `'✅ Benar!'` with `<><CheckCircle size={14} /> Benar!</>` and `'❌ Kurang tepat'` with `<><XCircle size={14} /> Kurang tepat`. These are icon usages and must not remain as emoji.
- Call `recordQuizAnswer(isCorrect)` from `useProgress()` when single answer is selected (`setSelected(i)`) or multi-answer is submitted (`setSubmitted(true)`)
- Add these CSS classes to `kolosal.css` to eliminate remaining inline styles:
  ```css
  .k-quiz-options       { display: flex; flex-direction: column; gap: 8px; }
  .k-quiz-hint          { font-size: 0.75rem; color: var(--color-text-400); margin: 0 0 8px; font-style: italic; }
  .k-quiz-submit        { margin-top: 12px; padding: 10px 24px; border-radius: var(--radius-md); border: none; background: var(--color-accent); color: #fff; font-weight: 600; cursor: pointer; width: 100%; font-size: 0.875rem; transition: background var(--transition-fast); }
  .k-quiz-submit:hover  { background: var(--color-accent-hover); }
  .k-quiz-check-icon    { color: var(--color-accent-mid); }
  .k-quiz-feedback      { margin-top: 16px; }
  ```

**`FeedCardRenderer.tsx`:** No progress wiring needed here — wiring is in `Feed.tsx` (`recordCardStudied`) and `QuizCard.tsx` (`recordQuizAnswer`). Remove from Files Changed scope.

**`FlashCard.tsx` — tap hint placement:** The `.k-flashcard-hint` div appears **in both faces**. On the front face it shows `<ChevronDown size={14} /> Tap untuk lihat jawaban`; on the back face it shows `<ChevronUp size={14} /> Tap untuk lihat soal`. This replaces the existing single tap-hint div and its inline style.

### 12. `src/components/cards/SubjectIcon.tsx` — New component

```typescript
import { BookOpen, Calculator, Scale, TrendingUp, Search, Target, Layers, FileText, BarChart2, Briefcase, PieChart, Award, ClipboardList } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const subjectIconMap: Record<string, LucideIcon> = {
  'pengantar-akuntansi':      BookOpen,       // intro accounting
  'akuntansi-keuangan-dasar': Calculator,     // financial accounting
  'manajemen-bisnis-dasar':   Briefcase,      // business management
  'ekonomi-statistik':        PieChart,       // economics & statistics
  'pelaporan-korporat':       FileText,       // corporate reporting
  'manajemen-keuangan':       TrendingUp,     // financial management
  'manajemen-perpajakan':     Scale,          // tax management
  'audit-asurans':            Search,         // audit & assurance
  'akuntansi-manajemen':      BarChart2,      // management accounting
  'manajemen-stratejik':      Target,         // strategic management
  'studi-kasus-terpadu':      Layers,         // integrated case study
  'etika-tata-kelola':        Award,          // ethics & governance
  'psak-standar':             ClipboardList,  // PSAK standards (distinct from FileText)
  'strategi-ujian':           BookOpen,       // exam strategy (intentionally same as intro — both are general study)
};

// Fallback for any unmapped ID
const FALLBACK_ICON: LucideIcon = BookOpen;

interface SubjectIconProps { id: string; size?: number; className?: string; }

export default function SubjectIcon({ id, size = 20, className }: SubjectIconProps) {
  const Icon = subjectIconMap[id] ?? FALLBACK_ICON;
  return <Icon size={size} className={className} />;
}
```

---

## Icon Audit — Emoji → SVG Replacements

| Location | Old (emoji) | New (lucide SVG) |
|---|---|---|
| Login logo | 🇮🇩 | `<CaLogoMark />` custom SVG |
| Streak stat | 🔥 | `Flame` |
| Accuracy stat | 📊 | `Target` |
| Cards done stat | ✅ | `CheckCircle` |
| Feed counter | 🔥 | `Flame` |
| Password toggle | 👁️ / 🙈 | `Eye` / `EyeOff` |
| Formal warning | ⚠️ | `AlertTriangle` |
| Formal note | 💡 | `Lightbulb` |
| Formal example | 📌 | `Bookmark` |
| Formal steps label | 🔢 | `ListOrdered` |
| Formal rules label | 📋 | `ClipboardList` |
| Formal TOC label | 📑 | `List` |
| Formal diagram label | 📊 | `BarChart2` |
| Formal formula label | 🔣 | `Hash` |
| Card reasoning | 🔍 | `Search` |
| Card key takeaway | 💡 | `Lightbulb` |
| Card example | 📌 | `Bookmark` |
| Card mnemonic | 🧠 | `Brain` |
| Subject icons | various emoji | `<SubjectIcon id={...} />` |
| Quiz multi-select | ☐ / ☑ | `Square` / `CheckSquare` |
| Swipe hint chevron | text | `ChevronUp` (already lucide) |
| Card source label | 📚 | `BookMarked` |
| MaterialCard type label | 📘 | `BookOpen` |
| FormalMaterial subject icon | emoji | `<SubjectIcon id={subjectId} size={32} />` |

---

## Animation Spec

### Card entrance
```css
@keyframes k-card-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.k-card { animation: k-card-in 0.25s ease; }
```

### Skeleton shimmer
```css
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.k-shimmer {
  background: linear-gradient(90deg, var(--color-bg-tertiary) 25%, var(--color-border) 50%, var(--color-bg-tertiary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
```

### Flashcard flip (see FlashCard section for required DOM structure)
```css
.k-flashcard { perspective: 800px; overflow: visible !important; }
.k-flashcard-inner { position: relative; transform-style: preserve-3d; transition: transform 0.35s ease; min-height: 260px; /* authoritative value — 260px */ }
.k-flashcard--flipped .k-flashcard-inner { transform: rotateY(180deg); }
.k-flashcard-front,
.k-flashcard-back { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow-y: auto; }
.k-flashcard-back { transform: rotateY(180deg); }
```

### Nav active dot (spring scale)
```css
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

---

## Progress Context Architecture

```
src/
  context/
    AuthContext.tsx        (existing — unchanged)
    ProgressContext.tsx    (new)

ProgressContext consumed by:
  Home.tsx          → reads streak, accuracy, totalCardsStudied, lastSubjectId, subjectProgress
  SubjectList.tsx   → reads subjectProgress for progress bars
  Feed.tsx          → calls recordCardStudied(subjectId) on activeIndex change
  QuizCard.tsx      → calls recordQuizAnswer(correct) on answer selection/submission

NOT consumed by FeedCardRenderer — that remains a pure render-switcher.
```

---

## Files Changed

| File | Change Type |
|---|---|
| `src/styles/kolosal.css` | Full rewrite (dark-first tokens + all k- classes + animations) |
| `src/index.css` | `body { background: var(--color-bg); color: var(--color-text-900); }` only |
| `src/pages/Login.tsx` | Visual overhaul — CaLogoMark SVG, dark form, Eye/EyeOff toggle |
| `src/components/Layout.tsx` | Remove Topics nav, 3-item nav, nav-dot structure |
| `src/pages/Home.tsx` | Dashboard: stats row, hero CTA, quick links, collapsible info |
| `src/pages/SubjectList.tsx` | Progress bars, SubjectIcon component |
| `src/pages/SubjectDetail.tsx` | Remove inline styles, SubjectIcon, dark k- classes |
| `src/pages/FormalMaterial.tsx` | Typography, formula blocks, chapter header, lucide icons |
| `src/pages/Feed.tsx` | recordCardStudied on activeIndex change |
| `src/components/cards/QuizCard.tsx` | Square/CheckSquare icons, recordQuizAnswer, remove inline styles |
| `src/components/cards/FlashCard.tsx` | 3-layer DOM for CSS flip, lucide icons, remove inline styles |
| `src/components/cards/FactCard.tsx` | Lucide icons, remove inline styles |
| `src/components/cards/TipCard.tsx` | Lucide icons, remove inline styles |
| `src/components/cards/MaterialCard.tsx` | Lucide icons, remove inline styles |
| `src/components/cards/SubjectIcon.tsx` | **New** — full subject ID → lucide icon map with fallback |
| `src/context/ProgressContext.tsx` | **New** — localStorage progress tracking with streak logic |
| `src/App.tsx` | Wrap with `<ProgressProvider>`; also remove the `/topics` route (redundant with `/subjects`) |

---

## Out of Scope

- Backend / authentication changes
- Adding new content (cards, subjects, formal material)
- Desktop layout changes (remains mobile-first)
- Light mode toggle (dark-only redesign)
- Emoji in card *content text* (only icon usages replaced)
