import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { feedCards } from '../content/feedData';
import type { FeedCard } from '../content/feedData';
import FeedCardRenderer from '../components/cards/FeedCardRenderer';
import { ChevronUp, ChevronDown, Flag, ArrowLeft } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export default function Review() {
  const { flaggedCardIds, wrongCardIds } = useProgress();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const reviewIds = Array.from(new Set([...wrongCardIds, ...flaggedCardIds]));
  const cards: FeedCard[] = reviewIds
    .map(id => feedCards.find(c => c.id === id))
    .filter((c): c is FeedCard => c !== undefined);

  const goToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container || isAnimatingRef.current) return;
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    isAnimatingRef.current = true;
    setActiveIndex(clamped);
    container.scrollTo({ top: clamped * container.clientHeight, behavior: 'smooth' });
    setTimeout(() => { isAnimatingRef.current = false; }, 400);
  }, [cards.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let touchDelta = 0;
    const SWIPE_THRESHOLD = 50;

    const isInnerScrollable = (target: EventTarget | null, deltaY: number): boolean => {
      let el = target as HTMLElement | null;
      while (el && el !== container) {
        if (el.classList.contains('k-feed-slide-inner') && el.scrollHeight > el.clientHeight) {
          const atTop = el.scrollTop <= 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if (deltaY > 0 && !atBottom) return true;
          if (deltaY < 0 && !atTop) return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      if (isInnerScrollable(e.target, e.deltaY)) return;
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
      if (!isInnerScrollable(e.target, touchDelta)) e.preventDefault();
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

  useEffect(() => {
    const onResize = () => {
      const container = containerRef.current;
      if (container) container.scrollTo({ top: activeIndex * container.clientHeight });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeIndex]);

  if (cards.length === 0) {
    return (
      <div className="k-review-empty">
        <Flag size={32} className="k-review-empty-icon" />
        <h2>Tidak ada kartu untuk direview</h2>
        <p>Tandai kartu atau jawab quiz secara salah — kartu tersebut akan muncul di sini.</p>
        <Link to="/" className="k-review-empty-back">
          <ArrowLeft size={16} /> Kembali ke Home
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="k-feed">
      {cards.map((card, index) => (
        <div key={card.id} className="k-feed-slide">
          <div className="k-feed-slide-inner">
            <div className="k-counter">
              <div className="k-counter-text">
                <Flag size={14} className="k-counter-flame" />
                {index + 1} / {cards.length}
              </div>
              <div className="k-review-mode-label">Mode Review</div>
            </div>
            <FeedCardRenderer card={card} />
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
