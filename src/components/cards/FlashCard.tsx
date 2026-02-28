import { useState } from 'react';
import type { FeedCard } from '../../content/feedData';

export default function FlashCard({ card }: { card: FeedCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer select-none active:scale-[0.98] transition-transform"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="px-5 pt-4 pb-2 flex items-center gap-2">
        <span className="text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
          {card.subject}
        </span>
        <span className="text-xs text-gray-400 font-medium">Flashcard</span>
      </div>
      <div className="p-5 pt-3 min-h-[140px] flex flex-col justify-center">
        <h3 className="font-bold text-xl mb-3">{card.title}</h3>
        {!flipped ? (
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{card.content}</p>
        ) : (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4">
            <p className="text-green-800 dark:text-green-300 text-sm leading-relaxed">{card.answer}</p>
          </div>
        )}
      </div>
      <div className="px-5 pb-4 text-center">
        <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
          {flipped ? '↑ Tap to see question' : '↓ Tap to reveal answer'}
        </span>
      </div>
    </div>
  );
}
