import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Target, Zap, BookOpen, FileText, Flag, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { subjects } from '../content/feedData';
import SubjectIcon from '../components/cards/SubjectIcon';

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

      {/* Greeting header */}
      <div className="k-home-greeting">
        <div className="k-home-greeting-eyebrow">Selamat belajar</div>
        <div className="k-home-greeting-title">Persiapan Ujian CA</div>
        <div className="k-home-greeting-pills">
          <span className="k-home-pill k-home-pill--streak">
            <Flame size={12} />
            {streak} hari beruntun
          </span>
          <span className="k-home-pill k-home-pill--accuracy">
            <Target size={12} />
            {accuracy}% akurasi
          </span>
          <span className="k-home-pill k-home-pill--cards">
            {totalCardsStudied} kartu
          </span>
        </div>
      </div>

      {/* Subject story rings */}
      <div className="k-home-stories-scroll">
        {subjects.map(s => {
          const prog = subjectProgress[s.id];
          const isDone = prog && prog.studied >= prog.total && prog.total > 0;
          const hasStarted = prog && prog.studied > 0;
          const shortName = s.title.split(' ')[0];
          return (
            <Link
              key={s.id}
              to={`/subjects/${s.id}`}
              className="k-story"
            >
              <div className={`k-story-ring ${isDone ? 'k-story-ring--done' : hasStarted ? 'k-story-ring--active' : ''}`}>
                <div className="k-story-inner">
                  <SubjectIcon id={s.id} size={20} />
                </div>
              </div>
              <span className="k-story-label">{shortName}</span>
            </Link>
          );
        })}
      </div>

      {/* Continue CTA */}
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

      {/* 4 quick-action tiles */}
      <div className="k-home-actions">
        <Link to="/feed" className="k-home-action k-home-action--primary">
          <Zap size={22} className="k-home-action-icon" />
          <span className="k-home-action-label">Feed</span>
          <span className="k-home-action-sub">Scroll &amp; belajar</span>
        </Link>
        <Link to="/subjects" className="k-home-action">
          <BookOpen size={22} className="k-home-action-icon" />
          <span className="k-home-action-label">Mata Ujian</span>
          <span className="k-home-action-sub">14 mata ujian</span>
        </Link>
        <Link to="/subjects/pengantar-akuntansi/formal" className="k-home-action">
          <FileText size={22} className="k-home-action-icon" />
          <span className="k-home-action-label">Materi Formal</span>
          <span className="k-home-action-sub">Referensi lengkap</span>
        </Link>
        <Link to="/review" className="k-home-action">
          <Flag size={22} className="k-home-action-icon" />
          <span className="k-home-action-label">Review</span>
          <span className="k-home-action-sub">{reviewCount > 0 ? `${reviewCount} kartu` : 'Kartu ditandai'}</span>
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
