import { useState, useEffect, useRef, useCallback } from 'react';
import { generateFeedBatch } from '../content/feedData';
import type { FeedCard } from '../content/feedData';
import FeedCardRenderer from '../components/cards/FeedCardRenderer';
import { Flame, ChevronUp, ChevronDown } from 'lucide-react';

export default function Feed() {
  const [cards, setCards] = useState<FeedCard[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const existingIdsRef = useRef(new Set<string>());
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const isAnimatingRef = useRef(false);

  // Load initial batch
  useEffect(() => {
    const batch = generateFeedBatch(existingIdsRef.current, 8);
    setCards(batch);
  }, []);

  // Load more cards when near the end
  const maybeLoadMore = useCallback((index: number, total: number) => {
    if (index >= total - 3 && !loadingRef.current) {
      loadingRef.current = true;
      setTimeout(() => {
        const batch = generateFeedBatch(existingIdsRef.current, 6);
        setCards(prev => [...prev, ...batch]);
        loadingRef.current = false;
      }, 400);
    }
  }, []);

  const goToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container || isAnimatingRef.current) return;
    setCards(prev => {
      const clamped = Math.max(0, Math.min(index, prev.length - 1));
      isAnimatingRef.current = true;
      setActiveIndex(clamped);
      container.scrollTo({ top: clamped * container.clientHeight, behavior: 'smooth' });
      maybeLoadMore(clamped, prev.length);
      setTimeout(() => { isAnimatingRef.current = false; }, 400);
      return prev;
    });
  }, [maybeLoadMore]);

  // Prevent native scroll — use touch/wheel to move one card at a time
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let touchDelta = 0;
    const SWIPE_THRESHOLD = 50;

    // Check if target is inside a scrollable inner container that hasn't reached its bounds
    const isInnerScrollable = (target: EventTarget | null, deltaY: number): boolean => {
      let el = target as HTMLElement | null;
      while (el && el !== container) {
        if (el.classList.contains('k-feed-slide-inner') && el.scrollHeight > el.clientHeight) {
          const atTop = el.scrollTop <= 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if (deltaY > 0 && !atBottom) return true;  // scrolling down, not at bottom
          if (deltaY < 0 && !atTop) return true;     // scrolling up, not at top
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      if (isInnerScrollable(e.target, e.deltaY)) return; // let inner scroll naturally
      e.preventDefault();
      if (isAnimatingRef.current) return;
      if (e.deltaY > 30) goToIndex(activeIndex + 1);
      else if (e.deltaY < -30) goToIndex(activeIndex - 1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchDelta = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      touchDelta = touchStartY - e.touches[0].clientY;
      if (!isInnerScrollable(e.target, touchDelta)) {
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (isAnimatingRef.current) return;
      if (touchDelta > SWIPE_THRESHOLD) goToIndex(activeIndex + 1);
      else if (touchDelta < -SWIPE_THRESHOLD) goToIndex(activeIndex - 1);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); goToIndex(activeIndex + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); goToIndex(activeIndex - 1); }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, goToIndex]);

  // Sync scroll position on resize
  useEffect(() => {
    const onResize = () => {
      const container = containerRef.current;
      if (container) container.scrollTo({ top: activeIndex * container.clientHeight });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeIndex]);

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
            <button onClick={() => goToIndex(index - 1)} className="k-nav-arrow k-nav-arrow-up">
              <ChevronUp size={20} />
            </button>
          )}
          {index < cards.length - 1 && (
            <button onClick={() => goToIndex(index + 1)} className="k-nav-arrow k-nav-arrow-down">
              <ChevronDown size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
