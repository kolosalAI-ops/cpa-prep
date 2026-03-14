import { useState } from 'react';
import { ChevronDown, ChevronUp, Bookmark, Lightbulb, Brain, Flag } from 'lucide-react';
import type { FeedCard } from '../../content/feedData';
import { useProgress } from '../../context/ProgressContext';

export default function FlashCard({ card }: { card: FeedCard }) {
  const [flipped, setFlipped] = useState(false);
  const { toggleFlag, flaggedCardIds } = useProgress();
  const isFlagged = flaggedCardIds.includes(card.id);

  return (
    <div
      className={`k-card k-flashcard ${flipped ? 'k-flashcard--flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="k-flashcard-inner">
        {/* FRONT */}
        <div className="k-flashcard-front">
          <div className="k-card-header">
            <span className="k-badge k-badge-information">{card.subject}</span>
            {card.difficulty && (
              <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
            )}
            <span className="k-type-label">Flashcard</span>
          </div>
          <h3 className="k-card-title">{card.title}</h3>
          <p className="k-card-body">{card.content}</p>
          {card.mnemonic && (
            <div className="k-mnemonic"><Brain size={14} /> {card.mnemonic}</div>
          )}
          <div className="k-flashcard-hint">
            <span className="k-tap-hint"><ChevronDown size={14} /> Tap untuk lihat jawaban</span>
          </div>
        </div>

        {/* BACK */}
        <div className="k-flashcard-back">
          <div className="k-card-header">
            <span className="k-badge k-badge-information">{card.subject}</span>
            {card.difficulty && (
              <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
            )}
            <span className="k-type-label">Flashcard</span>
          </div>
          <h3 className="k-card-title">{card.title}</h3>
          <div className="k-callout k-callout-success">
            <p>{card.answer}</p>
          </div>
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
          <button
            className={`k-flag-btn ${isFlagged ? 'k-flag-btn--active' : ''}`}
            onClick={e => { e.stopPropagation(); toggleFlag(card.id); }}
          >
            <Flag size={14} />
            {isFlagged ? 'Ditandai' : 'Tandai untuk review'}
          </button>
          <div className="k-flashcard-hint">
            <span className="k-tap-hint"><ChevronUp size={14} /> Tap untuk lihat soal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
