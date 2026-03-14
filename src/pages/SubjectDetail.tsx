import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { subjects, feedCards } from '../content/feedData';
import FeedCardRenderer from '../components/cards/FeedCardRenderer';
import { ChevronUp, ChevronDown, ArrowLeft, BookOpen, Flame } from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';
import { useProgress } from '../context/ProgressContext';

export default function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find(s => s.id === subjectId);
  const cards = feedCards.filter(c => subject && c.subject === subject.title);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { recordCardStudied } = useProgress();

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

  // Record card studied when slide changes (offset by 1 for header slide)
  useEffect(() => {
    if (activeIndex > 0 && subjectId) {
      recordCardStudied(subjectId);
    }
  }, [activeIndex, subjectId, recordCardStudied]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container || index < 0 || index >= cards.length) return;
    container.scrollTo({ top: index * container.clientHeight, behavior: 'smooth' });
  };

  if (!subject) {
    return (
      <div className="k-not-found">
        <p>Mata ujian tidak ditemukan</p>
        <Link to="/subjects">← Kembali</Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="k-feed">
      {/* Header slide */}
      <div className="k-feed-slide">
        <div className="k-feed-slide-inner k-feed-slide-inner--center">
          <div className="k-card k-card--center">
            <SubjectIcon id={subjectId!} size={48} />
            <h2 className="k-card-title">{subject.title}</h2>
            <p className="k-subject-detail-count">{cards.length} kartu belajar</p>
            <Link to="/subjects" className="k-subject-detail-back">
              <ArrowLeft size={16} /> Kembali
            </Link>
            <Link to={`/subjects/${subjectId}/formal`} className="k-formal-btn">
              <BookOpen size={16} />
              Materi Formal
            </Link>
          </div>
          <div className="k-swipe-hint">
            <ChevronUp size={20} />
            <span>Swipe up untuk mulai</span>
          </div>
        </div>
        <button onClick={() => scrollToIndex(1)} className="k-nav-arrow k-nav-arrow-down">
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Card slides */}
      {cards.map((card, index) => (
        <div key={card.id} className="k-feed-slide">
          <div className="k-feed-slide-inner">
            <div className="k-counter">
              <div className="k-counter-text">
                <Flame size={14} className="k-counter-flame" />
                {index + 1} / {cards.length}
              </div>
              <div className="k-dots">
                {Array.from({ length: Math.min(cards.length, 5) }, (_, i) => {
                  const dotIndex = activeIndex <= 2
                    ? i
                    : activeIndex >= cards.length - 2
                      ? cards.length - 5 + i
                      : activeIndex - 3 + i;
                  return (
                    <div
                      key={dotIndex}
                      className={`k-dot ${dotIndex === activeIndex - 1 ? 'k-dot-active' : 'k-dot-inactive'}`}
                    />
                  );
                })}
              </div>
            </div>
            <FeedCardRenderer card={card} />
          </div>
          {index >= 0 && (
            <button onClick={() => scrollToIndex(index)} className="k-nav-arrow k-nav-arrow-up">
              <ChevronUp size={20} />
            </button>
          )}
          {index < cards.length - 1 && (
            <button onClick={() => scrollToIndex(index + 2)} className="k-nav-arrow k-nav-arrow-down">
              <ChevronDown size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
