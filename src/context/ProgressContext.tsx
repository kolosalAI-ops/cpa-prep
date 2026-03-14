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
