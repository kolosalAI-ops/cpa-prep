import { useState } from 'react';
import type { FeedCard } from '../../content/feedData';

export default function QuizCard({ card }: { card: FeedCard }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === card.correctIndex;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="px-5 pt-4 pb-2 flex items-center gap-2">
        <span className="text-xs font-semibold bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
          {card.subject}
        </span>
        <span className="text-xs text-gray-400 font-medium">Quiz</span>
      </div>
      <div className="p-5 pt-3">
        <h3 className="font-bold text-xl mb-2">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">{card.content}</p>
        <div className="space-y-2">
          {card.options?.map((opt, i) => {
            let style = 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50';
            if (selected !== null) {
              if (i === card.correctIndex) style = 'border-green-400 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300';
              else if (i === selected) style = 'border-red-400 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300';
            }
            return (
              <button
                key={i}
                onClick={() => selected === null && setSelected(i)}
                className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${style} ${selected === null ? 'hover:border-purple-400 active:scale-[0.98]' : ''}`}
                disabled={selected !== null}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className={`mt-4 p-4 rounded-2xl text-sm ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300'}`}>
            <p className="font-semibold mb-1">{isCorrect ? '✅ Correct!' : '❌ Not quite'}</p>
            <p className="leading-relaxed">{card.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
