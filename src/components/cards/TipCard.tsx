import type { FeedCard } from '../../content/feedData';

export default function TipCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-success">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label" style={{ marginLeft: 'auto' }}>Tips</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>
      {card.example && (
        <div className="k-example">
          <div className="k-example-label">📌 Contoh Penerapan</div>
          {card.example}
        </div>
      )}
      {card.mnemonic && (
        <div className="k-mnemonic">🧠 {card.mnemonic}</div>
      )}
      {card.keyTakeaway && (
        <div className="k-takeaway">
          <div className="k-takeaway-label">💡 Poin Kunci</div>
          {card.keyTakeaway}
        </div>
      )}
    </div>
  );
}
