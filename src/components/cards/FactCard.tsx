import type { FeedCard } from '../../content/feedData';

export default function FactCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-warning">{card.subject}</span>
        <span className="k-type-label">Quick Fact</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>
      {card.source && (
        <p className="k-source">📚 {card.source}</p>
      )}
    </div>
  );
}
