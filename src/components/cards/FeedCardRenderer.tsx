import type { FeedCard } from '../../content/feedData';
import FlashCard from './FlashCard';
import QuizCard from './QuizCard';
import FactCard from './FactCard';
import TipCard from './TipCard';

export default function FeedCardRenderer({ card }: { card: FeedCard }) {
  switch (card.type) {
    case 'flashcard':
      return <FlashCard card={card} />;
    case 'quiz':
      return <QuizCard card={card} />;
    case 'fact':
      return <FactCard card={card} />;
    case 'tip':
      return <TipCard card={card} />;
  }
}
