import type { FeedCard } from '../../content/feedData';

export default function FactCard({ card }: { card: FeedCard }) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl shadow-lg border border-amber-200 dark:border-amber-800 overflow-hidden">
      <div className="px-5 pt-4 pb-2 flex items-center gap-2">
        <span className="text-xs font-semibold bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full">
          {card.subject}
        </span>
        <span className="text-xs text-amber-500 font-medium">Quick Fact</span>
      </div>
      <div className="p-5 pt-3">
        <h3 className="font-bold text-xl mb-3">{card.title}</h3>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">{card.content}</p>
        {card.source && (
          <p className="text-xs text-amber-600 dark:text-amber-400 mt-4 italic">📚 {card.source}</p>
        )}
      </div>
    </div>
  );
}
