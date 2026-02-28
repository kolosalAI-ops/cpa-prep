import type { FeedCard } from '../../content/feedData';

export default function TipCard({ card }: { card: FeedCard }) {
  return (
    <div className="k-card">
      <div className="k-card-header">
        <span className="k-badge k-badge-success">{card.subject}</span>
        <span className="k-type-label">Pro Tip</span>
      </div>
      <h3 className="k-card-title">{card.title}</h3>
      <p className="k-card-body">{card.content}</p>
    </div>
  );
}
