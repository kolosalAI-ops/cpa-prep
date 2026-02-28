export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-pulse">
      <div className="px-4 pt-3 pb-1 flex gap-2">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-full" />
        <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
      </div>
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
}
