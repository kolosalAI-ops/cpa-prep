import type { FeedCard } from '../../content/feedData';
import QuizCard from './QuizCard';
import FlashCard from './FlashCard';
import FactCard from './FactCard';
import TipCard from './TipCard';
import MaterialCard from './MaterialCard';

export default function FeedCardRenderer({ card }: { card: FeedCard }) {
  switch (card.type) {
    case 'flashcard':
      return <FlashCard card={card} />;
    case 'fact':
      return <FactCard card={card} />;
    case 'tip':
      return <TipCard card={card} />;
    case 'material':
      return <MaterialCard card={card} />;
    case 'quiz':
    default:
      return <QuizCard card={card} />;
  }
}
