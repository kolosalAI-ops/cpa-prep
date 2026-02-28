import type { FeedCard } from '../../content/feedData';

export default function TipCard({ card }: { card: FeedCard }) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl shadow-lg border border-emerald-200 dark:border-emerald-800 overflow-hidden">
      <div className="px-5 pt-4 pb-2 flex items-center gap-2">
        <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">
          {card.subject}
        </span>
        <span className="text-xs text-emerald-500 font-medium">Pro Tip</span>
      </div>
      <div className="p-5 pt-3">
        <h3 className="font-bold text-xl mb-3">{card.title}</h3>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">{card.content}</p>
      </div>
    </div>
  );
}
