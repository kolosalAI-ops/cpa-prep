import { Link } from 'react-router-dom';

const subjects = [
  { id: 'financial-accounting', title: 'Financial Accounting', count: 12 },
  { id: 'auditing', title: 'Auditing & Attestation', count: 8 },
  { id: 'taxation', title: 'Taxation', count: 15 },
  { id: 'business-laws', title: 'Business Laws', count: 10 },
];

export default function SubjectList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Subjects</h2>
      <div className="space-y-3">
        {subjects.map((subject) => (
          <Link 
            key={subject.id} 
            to={`/subjects/${subject.id}`}
            className="block bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{subject.title}</h3>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                {subject.count} topics
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
