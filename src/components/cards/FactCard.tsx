import type { FeedCard } from '../../content/feedData';

export default function FactCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-warning">{card.subject}</span>
        {card.difficulty && (
          <span className={`k-difficulty k-difficulty-${card.difficulty}`}>{card.difficulty}</span>
        )}
        <span className="k-type-label" style={{ marginLeft: 'auto' }}>Fakta</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>
      {card.whyItMatters && (
        <div className="k-why-matters">
          <strong>Kenapa penting?</strong> {card.whyItMatters}
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
      {card.source && (
        <p className="k-source">📚 {card.source}</p>
      )}
    </div>
  );
}
