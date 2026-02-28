export type CardType = 'flashcard' | 'quiz' | 'fact' | 'tip';

export interface FeedCard {
  id: string;
  type: CardType;
  subject: string;
  title: string;
  content: string;
  // flashcard
  answer?: string;
  // quiz
  options?: string[];
  correctIndex?: number;
  explanation?: string;
  // fact
  source?: string;
}

// Variable ratio reinforcement: mixed content types in unpredictable order
export const feedCards: FeedCard[] = [
  {
    id: 'fc-1',
    type: 'flashcard',
    subject: 'Financial Accounting',
    title: 'What is Accrual Accounting?',
    content: 'Revenue and expenses are recognized when earned/incurred, not when cash is received/paid.',
    answer: 'Accrual accounting records transactions when they occur regardless of cash flow timing. This matches revenue with related expenses in the same period (matching principle).',
  },
  {
    id: 'q-1',
    type: 'quiz',
    subject: 'Auditing',
    title: 'Audit Opinion Types',
    content: 'Which audit opinion indicates financial statements are free from material misstatement?',
    options: ['Unqualified Opinion', 'Qualified Opinion', 'Adverse Opinion', 'Disclaimer of Opinion'],
    correctIndex: 0,
    explanation: 'An unqualified (clean) opinion means the auditor believes the financial statements are fairly presented in all material respects.',
  },
  {
    id: 'f-1',
    type: 'fact',
    subject: 'Financial Accounting',
    title: 'Did You Know?',
    content: 'The double-entry bookkeeping system was first codified by Luca Pacioli in 1494. Every transaction affects at least two accounts — debits must always equal credits.',
    source: 'Pacioli, "Summa de Arithmetica" (1494)',
  },
  {
    id: 't-1',
    type: 'tip',
    subject: 'Exam Strategy',
    title: '⏱️ Time Management Tip',
    content: 'On the CPA exam, allocate about 1.5 minutes per MCQ. Flag difficult questions and return to them — don\'t let one question eat your time.',
  },
  {
    id: 'fc-2',
    type: 'flashcard',
    subject: 'Taxation',
    title: 'What is a 1031 Exchange?',
    content: 'A tax-deferred exchange of like-kind real property used for business or investment purposes.',
    answer: 'Under IRC §1031, you can defer capital gains tax by reinvesting proceeds from the sale of investment property into a similar property within 180 days.',
  },
  {
    id: 'q-2',
    type: 'quiz',
    subject: 'Business Laws',
    title: 'Contract Law Basics',
    content: 'Which element is NOT required for a valid contract?',
    options: ['Offer and Acceptance', 'Consideration', 'Notarization', 'Legal Capacity'],
    correctIndex: 2,
    explanation: 'Notarization is not a general requirement for a valid contract. The essential elements are: offer, acceptance, consideration, capacity, and legality.',
  },
  {
    id: 'f-2',
    type: 'fact',
    subject: 'Auditing',
    title: 'Audit Fact',
    content: 'The Sarbanes-Oxley Act of 2002 (SOX) was enacted after Enron and WorldCom scandals. It requires CEO/CFO certification of financial statements and established the PCAOB.',
    source: 'Sarbanes-Oxley Act, Pub.L. 107–204',
  },
  {
    id: 't-2',
    type: 'tip',
    subject: 'Study Method',
    title: '🧠 Active Recall',
    content: 'Don\'t just re-read notes — test yourself! Active recall strengthens memory pathways. Try covering the answer and retrieving it from memory first.',
  },
  {
    id: 'fc-3',
    type: 'flashcard',
    subject: 'Financial Accounting',
    title: 'FIFO vs LIFO',
    content: 'In FIFO, oldest inventory is sold first. In LIFO, newest inventory is sold first.',
    answer: 'During rising prices: FIFO → higher ending inventory, higher net income, higher taxes. LIFO → lower ending inventory, lower net income, lower taxes (tax advantage).',
  },
  {
    id: 'q-3',
    type: 'quiz',
    subject: 'Financial Accounting',
    title: 'Depreciation Methods',
    content: 'Which depreciation method results in higher expense in early years?',
    options: ['Straight-Line', 'Double Declining Balance', 'Units of Production', 'Sum-of-Years Digits'],
    correctIndex: 1,
    explanation: 'Double Declining Balance is an accelerated method that charges more depreciation in early years: Rate = (2 / useful life) × book value.',
  },
  {
    id: 'f-3',
    type: 'fact',
    subject: 'Taxation',
    title: 'Tax Fact',
    content: 'The U.S. tax code (IRC) is over 10,000 pages long. The IRS receives over 150 million individual tax returns per year.',
    source: 'IRS Data Book',
  },
  {
    id: 't-3',
    type: 'tip',
    subject: 'Exam Strategy',
    title: '📝 Simulation Strategy',
    content: 'For Task-Based Simulations (TBS), read the entire scenario first before diving into exhibits. Identify what\'s being asked, then gather relevant data systematically.',
  },
  {
    id: 'fc-4',
    type: 'flashcard',
    subject: 'Auditing',
    title: 'What is Materiality?',
    content: 'The threshold above which missing or incorrect information in financial statements could influence decisions of users.',
    answer: 'Materiality is both quantitative (e.g., 5% of net income) and qualitative. Auditors set materiality levels during planning to determine the scope of audit procedures.',
  },
  {
    id: 'q-4',
    type: 'quiz',
    subject: 'Taxation',
    title: 'Filing Status',
    content: 'Which filing status generally provides the most favorable tax rates?',
    options: ['Single', 'Married Filing Jointly', 'Married Filing Separately', 'Head of Household'],
    correctIndex: 1,
    explanation: 'Married Filing Jointly typically offers the widest tax brackets and highest standard deduction, resulting in the lowest overall tax liability.',
  },
  {
    id: 'f-4',
    type: 'fact',
    subject: 'Business Laws',
    title: 'Legal Fact',
    content: 'An LLC combines the liability protection of a corporation with the tax flexibility of a partnership. Members are not personally liable for business debts.',
    source: 'Uniform Limited Liability Company Act',
  },
  {
    id: 't-4',
    type: 'tip',
    subject: 'Study Method',
    title: '🔄 Spaced Repetition',
    content: 'Review material at increasing intervals: 1 day, 3 days, 7 days, 14 days. This fights the forgetting curve and moves knowledge into long-term memory.',
  },
  {
    id: 'fc-5',
    type: 'flashcard',
    subject: 'Financial Accounting',
    title: 'Current Ratio',
    content: 'Current Ratio = Current Assets ÷ Current Liabilities',
    answer: 'Measures short-term liquidity. A ratio > 1 indicates the company can cover short-term obligations. Industry benchmarks vary, but 1.5–2.0 is generally considered healthy.',
  },
  {
    id: 'q-5',
    type: 'quiz',
    subject: 'Auditing',
    title: 'Internal Controls',
    content: 'Which component of internal control involves the "tone at the top"?',
    options: ['Control Activities', 'Risk Assessment', 'Control Environment', 'Monitoring'],
    correctIndex: 2,
    explanation: 'The Control Environment sets the organization\'s tone regarding integrity and ethical values. Management\'s philosophy and operating style ("tone at the top") are key factors.',
  },
  {
    id: 'f-5',
    type: 'fact',
    subject: 'Financial Accounting',
    title: 'GAAP Fact',
    content: 'There are 4 main financial statements under GAAP: Balance Sheet, Income Statement, Statement of Cash Flows, and Statement of Stockholders\' Equity.',
    source: 'FASB ASC 205',
  },
  {
    id: 't-5',
    type: 'tip',
    subject: 'Exam Strategy',
    title: '✅ Process of Elimination',
    content: 'On MCQs, eliminate obviously wrong answers first. Even narrowing from 4 to 2 options doubles your chance. The CPA exam often includes plausible distractors.',
  },
  {
    id: 'fc-6',
    type: 'flashcard',
    subject: 'Business Laws',
    title: 'Statute of Frauds',
    content: 'Certain contracts must be in writing to be enforceable.',
    answer: 'Contracts that must be written: sale of land, contracts not performable within 1 year, sale of goods ≥ $500 (UCC), suretyship, marriage consideration. Remember: MY LEGS.',
  },
  {
    id: 'q-6',
    type: 'quiz',
    subject: 'Financial Accounting',
    title: 'Cash Flow Classification',
    content: 'Where is "interest paid" classified under US GAAP?',
    options: ['Operating Activities', 'Investing Activities', 'Financing Activities', 'Can be any category'],
    correctIndex: 0,
    explanation: 'Under US GAAP, interest paid is classified as operating activities. Note: Under IFRS, interest paid can be classified as either operating or financing.',
  },
  {
    id: 'f-6',
    type: 'fact',
    subject: 'Auditing',
    title: 'CPA Exam Fact',
    content: 'The CPA Exam has 4 sections: AUD, FAR, REG, and BEC (now Core + Discipline). The overall pass rate hovers around 45-55% per section.',
    source: 'AICPA Uniform CPA Examination',
  },
  {
    id: 't-6',
    type: 'tip',
    subject: 'Study Method',
    title: '🎯 Focus Sessions',
    content: 'Use the Pomodoro technique: 25 minutes of focused study, 5 minute break. After 4 cycles, take a 15-30 minute break. Short bursts beat marathon sessions.',
  },
];

// Shuffle algorithm for variable ratio reinforcement
export function shuffleFeed(cards: FeedCard[]): FeedCard[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate infinite feed by cycling and re-shuffling
export function generateFeedBatch(existingIds: Set<string>, batchSize = 8): FeedCard[] {
  const shuffled = shuffleFeed(feedCards);
  const batch: FeedCard[] = [];
  let cycle = 0;
  
  while (batch.length < batchSize) {
    for (const card of shuffled) {
      const uniqueId = `${card.id}-${cycle}`;
      if (!existingIds.has(uniqueId)) {
        batch.push({ ...card, id: uniqueId });
        existingIds.add(uniqueId);
        if (batch.length >= batchSize) break;
      }
    }
    cycle++;
  }
  
  return batch;
}
