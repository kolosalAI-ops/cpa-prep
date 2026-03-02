import { useState } from 'react';
import type { FeedCard } from '../../content/feedData';

export default function QuizCard({ card }: { card: FeedCard }) {
  const isMulti = Array.isArray(card.correctIndices) && card.correctIndices.length > 0;
  const [selected, setSelected] = useState<number | null>(null);
  const [multiSelected, setMultiSelected] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const answered = isMulti ? submitted : selected !== null;
  const isCorrectSingle = selected === card.correctIndex;
  const isCorrectMulti = isMulti && submitted
    ? card.correctIndices!.length === multiSelected.size && card.correctIndices!.every(i => multiSelected.has(i))
    : false;
  const isCorrect = isMulti ? isCorrectMulti : isCorrectSingle;

  const toggleMulti = (i: number) => {
    if (submitted) return;
    setMultiSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const correctLabel = isMulti
    ? card.correctIndices!.map(i => String.fromCharCode(65 + i)).join(', ')
    : String.fromCharCode(65 + (card.correctIndex ?? 0));

  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-danger">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label" style={{ marginLeft: 'auto' }}>
          {isMulti ? 'Multi-Pilih' : 'Quiz'}
        </span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body" style={{ marginBottom: 8 }}>{card.content}</p>
      {isMulti && !submitted && (
        <p style={{ fontSize: 12, color: 'var(--color-text-400)', margin: '0 0 8px', fontStyle: 'italic' }}>
          Pilih semua jawaban yang benar ({card.correctIndices!.length} jawaban)
        </p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {card.options?.map((opt, i) => {
          let cls = 'k-quiz-option';
          if (isMulti) {
            if (!submitted && multiSelected.has(i)) cls += ' k-quiz-option-selected';
            if (submitted) {
              if (card.correctIndices!.includes(i)) cls += ' k-quiz-option-correct';
              else if (multiSelected.has(i)) cls += ' k-quiz-option-wrong';
            }
          } else {
            if (selected !== null) {
              if (i === card.correctIndex) cls += ' k-quiz-option-correct';
              else if (i === selected) cls += ' k-quiz-option-wrong';
            }
          }
          return (
            <button
              key={i}
              onClick={() => isMulti ? toggleMulti(i) : (selected === null && setSelected(i))}
              className={cls}
              disabled={answered}
            >
              <span style={{ fontWeight: 600, color: 'var(--color-text-600)', minWidth: 20 }}>
                {isMulti
                  ? (multiSelected.has(i) ? '☑' : '☐')
                  : `${String.fromCharCode(65 + i)}.`
                }
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {isMulti && !submitted && multiSelected.size > 0 && (
        <button
          onClick={() => setSubmitted(true)}
          className="k-quiz-submit"
          style={{ marginTop: 12, padding: '10px 24px', borderRadius: 'var(--radius-md)', border: 'none', background: 'var(--color-accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', width: '100%' }}
        >
          Periksa Jawaban
        </button>
      )}
      {answered && (
        <>
          <div className={`k-callout ${isCorrect ? 'k-callout-success' : 'k-callout-warning'}`} style={{ marginTop: 16 }}>
            <p className="k-callout-title">{isCorrect ? '✅ Benar!' : `❌ Kurang tepat — jawaban: ${correctLabel}`}</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{card.explanation}</p>
          </div>
          {card.reasoning && (
            <div className="k-reasoning">
              <div className="k-reasoning-label">🔍 Langkah Penalaran</div>
              {card.reasoning}
            </div>
          )}
          {card.example && (
            <div className="k-example">
              <div className="k-example-label">📌 Contoh</div>
              {card.example}
            </div>
          )}
          {card.keyTakeaway && (
            <div className="k-takeaway">
              <div className="k-takeaway-label">💡 Poin Kunci</div>
              {card.keyTakeaway}
            </div>
          )}
        </>
      )}
    </div>
  );
}
