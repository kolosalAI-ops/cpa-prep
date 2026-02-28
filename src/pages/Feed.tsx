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
    <div ref={containerRef} className="k-feed">
      {cards.map((card, index) => (
        <div key={card.id} className="k-feed-slide">
          <div className="k-feed-slide-inner">
            <div className="k-counter">
              <div className="k-counter-text">
                <Flame size={14} style={{ color: 'var(--color-warning-500)' }} />
                {index + 1} / {cards.length}
              </div>
              <div className="k-dots">
                {cards.length > 0 && Array.from({ length: Math.min(cards.length, 5) }, (_, i) => {
                  const dotIndex = activeIndex <= 2
                    ? i
                    : activeIndex >= cards.length - 3
                      ? cards.length - 5 + i
                      : activeIndex - 2 + i;
                  return (
                    <div
                      key={dotIndex}
                      className={`k-dot ${dotIndex === activeIndex ? 'k-dot-active' : 'k-dot-inactive'}`}
                    />
                  );
                })}
              </div>
            </div>

            <FeedCardRenderer card={card} />

            {index === 0 && activeIndex === 0 && (
              <div className="k-swipe-hint">
                <ChevronUp size={20} />
                <span>Swipe up</span>
              </div>
            )}
          </div>

          {index > 0 && (
            <button onClick={() => scrollToIndex(index - 1)} className="k-nav-arrow k-nav-arrow-up">
              <ChevronUp size={20} />
            </button>
          )}
          {index < cards.length - 1 && (
            <button onClick={() => scrollToIndex(index + 1)} className="k-nav-arrow k-nav-arrow-down">
              <ChevronDown size={20} />
            </button>
          )}
        </div>
      ))}

      <div ref={sentinelRef} style={{ height: 16, scrollSnapAlign: 'start' }} />
    </div>
  );
}
