import { Link } from 'react-router-dom';
import { subjects, feedCards } from '../content/feedData';
import type { ExamLevel } from '../content/feedData';
import { BookOpen } from 'lucide-react';
import SubjectIcon from '../components/cards/SubjectIcon';
import { useProgress } from '../context/ProgressContext';

const levelLabels: Record<ExamLevel, string> = {
  'cafb': 'Level 1 — CAFB',
  'associate-ca': 'Level 2 — Associate CA',
  'ca': 'Level 3 — Chartered Accountant',
};

export default function SubjectList() {
  const { subjectProgress } = useProgress();

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
      {levelOrder.map(lvl => {
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
      })}
    </div>
  );
}
