import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjects, feedCards } from '../content/feedData';
import type { ExamLevel, FeedCard } from '../content/feedData';
import { BookOpen, Search, X } from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';
import FeedCardRenderer from '../components/cards/FeedCardRenderer';
import { useProgress } from '../context/ProgressContext';

type Difficulty = 'dasar' | 'menengah' | 'lanjutan';

const levelLabels: Record<ExamLevel, string> = {
  'cafb': 'Level 1 — CAFB',
  'associate-ca': 'Level 2 — Associate CA',
  'ca': 'Level 3 — Chartered Accountant',
};

const difficultyLabels: Record<Difficulty, string> = {
  dasar: 'Dasar',
  menengah: 'Menengah',
  lanjutan: 'Lanjutan',
};

const DIFFICULTIES: Difficulty[] = ['dasar', 'menengah', 'lanjutan'];

export default function SubjectList() {
  const { subjectProgress } = useProgress();
  const [query, setQuery] = useState('');
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | null>(null);

  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0 || activeDifficulty !== null;

  // Search results: match across card title, content, subject
  const searchResults: FeedCard[] = isSearching
    ? feedCards.filter(card => {
        const matchesDifficulty = activeDifficulty ? card.difficulty === activeDifficulty : true;
        const matchesQuery = q
          ? card.title.toLowerCase().includes(q) ||
            card.content.toLowerCase().includes(q) ||
            card.subject.toLowerCase().includes(q)
          : true;
        return matchesDifficulty && matchesQuery;
      })
    : [];

  const grouped = subjects.reduce((acc, s) => {
    const lvl = ('level' in s && s.level) ? s.level as ExamLevel : 'other';
    if (!acc[lvl]) acc[lvl] = [];
    acc[lvl].push(s);
    return acc;
  }, {} as Record<string, typeof subjects[number][]>);

  const levelOrder: (ExamLevel | 'other')[] = ['cafb', 'associate-ca', 'ca', 'other'];

  return (
    <div className="k-subject-list">
      <h2 className="k-subject-list-title">Mata Ujian</h2>

      {/* Search bar */}
      <div className="k-search-bar">
        <Search size={16} className="k-search-icon" />
        <input
          className="k-search-input"
          type="text"
          placeholder="Cari kartu, topik, atau mata ujian..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button className="k-search-clear" onClick={() => setQuery('')}>
            <X size={14} />
          </button>
        )}
      </div>

      {/* Difficulty filter chips */}
      <div className="k-filter-chips">
        {DIFFICULTIES.map(d => (
          <button
            key={d}
            className={`k-filter-chip k-filter-chip-${d} ${activeDifficulty === d ? 'k-filter-chip--active' : ''}`}
            onClick={() => setActiveDifficulty(prev => prev === d ? null : d)}
          >
            {difficultyLabels[d]}
          </button>
        ))}
      </div>

      {/* Search results */}
      {isSearching ? (
        <div className="k-search-results">
          {searchResults.length === 0 ? (
            <div className="k-search-empty">
              <p>Tidak ada kartu yang cocok.</p>
            </div>
          ) : (
            <>
              <div className="k-search-results-count">{searchResults.length} kartu ditemukan</div>
              {searchResults.map(card => (
                <div key={card.id} className="k-search-result-item">
                  <FeedCardRenderer card={card} />
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        /* Subject list */
        levelOrder.map(lvl => {
          const items = grouped[lvl];
          if (!items || items.length === 0) return null;
          return (
            <div key={lvl}>
              {lvl !== 'other' && (
                <div className="k-subject-level-label">{levelLabels[lvl as ExamLevel]}</div>
              )}
              <div className="k-subject-items">
                {items.map((subject) => {
                  const count = feedCards.filter(c => c.subject === subject.title).length;
                  const progress = subjectProgress[subject.id];
                  const pct = progress && progress.total > 0
                    ? Math.min(100, Math.round((progress.studied / progress.total) * 100))
                    : 0;
                  return (
                    <div key={subject.id} className="k-subject-item-row">
                      <Link to={`/subjects/${subject.id}`} className="k-subject-link">
                        <span className="k-subject-name">
                          <SubjectIcon id={subject.id} size={16} />
                          {subject.title}
                        </span>
                        <span className="k-subject-right">
                          <span className="k-subject-count">{count} kartu</span>
                          <div className="k-progress-bar">
                            <div className="k-progress-fill" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="k-subject-pct">{pct}%</span>
                        </span>
                      </Link>
                      <Link
                        to={`/subjects/${subject.id}/formal`}
                        className="k-subject-formal-link"
                        title="Materi Formal"
                      >
                        <BookOpen size={14} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
