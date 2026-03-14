import { useState } from 'react';
import { Square, CheckSquare, CheckCircle, XCircle, Search, Lightbulb, Bookmark } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';
import { useProgress } from '../../context/ProgressContext';

export default function QuizCard({ card }: { card: FeedCard }) {
  const isMulti = Array.isArray(card.correctIndices) && card.correctIndices.length > 0;
  const [selected, setSelected] = useState<number | null>(null);
  const [multiSelected, setMultiSelected] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const { recordQuizAnswer } = useProgress();

  const answered = isMulti ? submitted : selected !== null;
  const isCorrectSingle = selected === card.correctIndex;
  const isCorrectMulti = isMulti && submitted
    ? card.correctIndices!.length === multiSelected.size && card.correctIndices!.every(i => multiSelected.has(i))
    : false;
  const isCorrect = isMulti ? isCorrectMulti : isCorrectSingle;

  const handleSingleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    recordQuizAnswer(i === card.correctIndex);
  };

  const toggleMulti = (i: number) => {
    if (submitted) return;
    setMultiSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleSubmitMulti = () => {
    setSubmitted(true);
    recordQuizAnswer(
      card.correctIndices!.length === multiSelected.size &&
      card.correctIndices!.every(i => multiSelected.has(i))
    );
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
        <span className="k-type-label">{isMulti ? 'Multi-Pilih' : 'Quiz'}</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body k-card-body--quiz">{card.content}</p>
      {isMulti && !submitted && (
        <p className="k-quiz-hint">
          Pilih semua jawaban yang benar ({card.correctIndices!.length} jawaban)
        </p>
      )}
      <div className="k-quiz-options">
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
              onClick={() => isMulti ? toggleMulti(i) : handleSingleSelect(i)}
              className={cls}
              disabled={answered}
            >
              <span className="k-quiz-check-icon">
                {isMulti
                  ? (multiSelected.has(i) ? <CheckSquare size={14} /> : <Square size={14} />)
                  : <span>{String.fromCharCode(65 + i)}.</span>
                }
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {isMulti && !submitted && multiSelected.size > 0 && (
        <button onClick={handleSubmitMulti} className="k-quiz-submit">
          Periksa Jawaban
        </button>
      )}
      {answered && (
        <div className="k-quiz-feedback">
          <div className={`k-callout ${isCorrect ? 'k-callout-success' : 'k-callout-warning'}`}>
            <p className="k-callout-title">
              {isCorrect
                ? <><CheckCircle size={14} /> Benar!</>
                : <><XCircle size={14} /> Kurang tepat — jawaban: {correctLabel}</>
              }
            </p>
            <p>{card.explanation}</p>
          </div>
          {card.reasoning && (
            <div className="k-reasoning">
              <div className="k-reasoning-label"><Search size={14} /> Langkah Penalaran</div>
              {card.reasoning}
            </div>
          )}
          {card.example && (
            <div className="k-example">
              <div className="k-example-label"><Bookmark size={14} /> Contoh</div>
              {card.example}
            </div>
          )}
          {card.keyTakeaway && (
            <div className="k-takeaway">
              <div className="k-takeaway-label"><Lightbulb size={14} /> Poin Kunci</div>
              {card.keyTakeaway}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
