import { useState, useEffect, useRef, useCallback } from 'react';
import { generateFeedBatch } from '../content/feedData';
import type { FeedCard } from '../content/feedData';
import FeedCardRenderer from '../components/cards/FeedCardRenderer';
import { Flame, ChevronUp, ChevronDown } from 'lucide-react';

export default function Feed() {
  const [cards, setCards] = useState<FeedCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const existingIdsRef = useRef(new Set<string>());
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Load initial batch
  useEffect(() => {
    const batch = generateFeedBatch(existingIdsRef.current, 8);
    setCards(batch);
  }, []);

  // Infinite scroll via IntersectionObserver on sentinel
  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const batch = generateFeedBatch(existingIdsRef.current, 6);
      setCards(prev => [...prev, ...batch]);
      setLoading(false);
    }, 400);
  }, [loading]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: '200px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  // Track active card via scroll position
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

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container || index < 0 || index >= cards.length) return;
    container.scrollTo({ top: index * container.clientHeight, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollbarWidth: 'none' }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {cards.map((card, index) => (
        <div
          key={card.id}
          className="snap-start h-screen w-full flex items-center justify-center relative"
        >
          {/* Background gradient per card type */}
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />

          <div className="relative z-10 w-full max-w-lg px-4">
            {/* Card counter */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <Flame size={14} className="text-orange-500" />
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {index + 1} / {cards.length}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {cards.length > 0 && (
                  <>
                    {Array.from({ length: Math.min(cards.length, 5) }, (_, i) => {
                      const dotIndex = activeIndex <= 2
                        ? i
                        : activeIndex >= cards.length - 3
                          ? cards.length - 5 + i
                          : activeIndex - 2 + i;
                      return (
                        <div
                          key={dotIndex}
                          className={`rounded-full transition-all duration-300 ${
                            dotIndex === activeIndex
                              ? 'w-6 h-1.5 bg-blue-500'
                              : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </div>

            <FeedCardRenderer card={card} />

            {/* Swipe hint on first card */}
            {index === 0 && activeIndex === 0 && (
              <div className="mt-4 flex flex-col items-center animate-bounce">
                <ChevronUp size={20} className="text-gray-400" />
                <span className="text-xs text-gray-400">Swipe up</span>
              </div>
            )}
          </div>

          {/* Navigation arrows */}
          {index > 0 && (
            <button
              onClick={() => scrollToIndex(index - 1)}
              className="absolute top-20 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity"
            >
              <ChevronUp size={20} className="text-gray-500" />
            </button>
          )}
          {index < cards.length - 1 && (
            <button
              onClick={() => scrollToIndex(index + 1)}
              className="absolute bottom-24 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity"
            >
              <ChevronDown size={20} className="text-gray-500" />
            </button>
          )}
        </div>
      ))}

      {/* Sentinel for infinite scroll trigger */}
      <div ref={sentinelRef} className="h-4 snap-start" />
    </div>
  );
}
