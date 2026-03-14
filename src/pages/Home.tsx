import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Target, CheckCircle, Zap, BookOpen, Info, ChevronDown, ChevronUp, FileText, Flag } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { subjects } from '../content/feedData';

export default function Home() {
  const { streak, accuracy, totalCardsStudied, subjectProgress, lastSubjectId, flaggedCardIds, wrongCardIds } = useProgress();
  const reviewCount = new Set([...flaggedCardIds, ...wrongCardIds]).size;
  const [showInfo, setShowInfo] = useState(false);

  const lastSubject = lastSubjectId ? subjects.find(s => s.id === lastSubjectId) : null;
  const remaining = lastSubjectId && subjectProgress[lastSubjectId]
    ? subjectProgress[lastSubjectId].total - subjectProgress[lastSubjectId].studied
    : 0;

  return (
    <div className="k-home">
      {/* Stats row */}
      <div className="k-stats-row">
        <div className="k-stat-card">
          <div className="k-stat-icon"><Flame size={20} /></div>
          <div className="k-stat-val">{streak}</div>
          <div className="k-stat-label">Hari Beruntun</div>
        </div>
        <div className="k-stat-card">
          <div className="k-stat-icon"><Target size={20} /></div>
          <div className="k-stat-val">{accuracy}%</div>
          <div className="k-stat-label">Akurasi Quiz</div>
        </div>
        <div className="k-stat-card">
          <div className="k-stat-icon"><CheckCircle size={20} /></div>
          <div className="k-stat-val">{totalCardsStudied}</div>
          <div className="k-stat-label">Kartu Selesai</div>
        </div>
      </div>

      {/* Hero CTA */}
      {lastSubject ? (
        <Link to={`/subjects/${lastSubjectId}`} className="k-hero-cta">
          <div className="k-hero-cta-eyebrow">Lanjut Belajar</div>
          <div className="k-hero-cta-title">{lastSubject.title}{remaining > 0 ? ` — ${remaining} kartu tersisa` : ''}</div>
          <span className="k-hero-cta-btn">Mulai Sekarang →</span>
        </Link>
      ) : (
        <Link to="/subjects" className="k-hero-cta-empty">
          Mulai belajar — pilih mata ujian
        </Link>
      )}

      {/* Review banner */}
      {reviewCount > 0 && (
        <Link to="/review" className="k-review-banner">
          <Flag size={16} />
          <span><strong>{reviewCount} kartu</strong> perlu direview</span>
          <span className="k-review-banner-arrow">→</span>
        </Link>
      )}

      {/* Quick links */}
      <div className="k-home-grid">
        <Link to="/feed" className="k-home-link k-home-link-primary">
          <Zap size={20} />
          <h3>Feed</h3>
          <p>Scroll &amp; belajar</p>
        </Link>
        <Link to="/subjects" className="k-home-link k-home-link-secondary">
          <BookOpen size={20} />
          <h3>Mata Ujian</h3>
          <p>Semua level</p>
        </Link>
        <Link to="/subjects" className="k-home-link k-home-link-formal">
          <FileText size={20} />
          <div>
            <h3>Materi Formal</h3>
            <p>Referensi lengkap</p>
          </div>
        </Link>
      </div>

      {/* Collapsible info */}
      <div className="k-info-box">
        <button
          className="k-info-toggle"
          onClick={() => setShowInfo(v => !v)}
          aria-expanded={showInfo}
        >
          <Info size={16} />
          <span>Info Ujian CA</span>
          {showInfo ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {showInfo && (
          <div className="k-info-box-items">
            <p><strong>3 Level</strong>: CAFB → Associate CA → Chartered Accountant</p>
            <p><strong>12 Mata Ujian</strong> total di semua level</p>
            <p><strong>Masa berlaku</strong>: 3 tahun per mata ujian</p>
          </div>
        )}
      </div>
    </div>
  );
}
