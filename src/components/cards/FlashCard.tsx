import { useState } from 'react';
import type { FeedCard } from '../../content/feedData';

export default function FlashCard({ card }: { card: FeedCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="k-card k-flashcard" onClick={() => setFlipped(!flipped)}>
      <div className="k-card-header">
        <span className="k-badge k-badge-information">{card.subject}</span>
        <span className="k-type-label">Flashcard</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      {!flipped ? (
        <p className="k-card-body">{card.content}</p>
      ) : (
        <div className="k-callout k-callout-success">
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{card.answer}</p>
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span className="k-tap-hint">
          {flipped ? '↑ Tap to see question' : '↓ Tap to reveal answer'}
        </span>
      </div>
    </div>
  );
}
