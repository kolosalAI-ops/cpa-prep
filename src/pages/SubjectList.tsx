import { Link } from 'react-router-dom';
import { subjects, feedCards } from '../content/feedData';
import type { ExamLevel } from '../content/feedData';
import { BookOpen } from 'lucide-react';

const levelLabels: Record<ExamLevel, string> = {
  'cafb': 'Level 1 — CAFB',
  'associate-ca': 'Level 2 — Associate CA',
  'ca': 'Level 3 — Chartered Accountant',
};

export default function SubjectList() {
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
                return (
                  <div key={subject.id} className="k-subject-item-row">
                    <Link to={`/subjects/${subject.id}`} className="k-subject-link">
                      <span className="k-subject-name">
                        <span>{subject.icon}</span>
                        {subject.title}
                      </span>
                      <span className="k-subject-count">{count} kartu</span>
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
