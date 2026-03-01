import type { FeedCard } from '../../content/feedData';
import QuizCard from './QuizCard';

export default function FeedCardRenderer({ card }: { card: FeedCard }) {
  return <QuizCard card={card} />;
}
