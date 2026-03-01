import { useState } from 'react';
import type { FeedCard } from '../../content/feedData';

export default function QuizCard({ card }: { card: FeedCard }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === card.correctIndex;

  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-danger">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label" style={{ marginLeft: 'auto' }}>Quiz</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body" style={{ marginBottom: 16 }}>{card.content}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {card.options?.map((opt, i) => {
          let cls = 'k-quiz-option';
          if (selected !== null) {
            if (i === card.correctIndex) cls += ' k-quiz-option-correct';
            else if (i === selected) cls += ' k-quiz-option-wrong';
          }
          return (
            <button
              key={i}
              onClick={() => selected === null && setSelected(i)}
              className={cls}
              disabled={selected !== null}
            >
              <span style={{ fontWeight: 600, color: 'var(--color-text-600)', minWidth: 20 }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <>
          <div className={`k-callout ${isCorrect ? 'k-callout-success' : 'k-callout-warning'}`} style={{ marginTop: 16 }}>
            <p className="k-callout-title">{isCorrect ? '✅ Benar!' : `❌ Kurang tepat — jawaban: ${String.fromCharCode(65 + (card.correctIndex ?? 0))}`}</p>
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
