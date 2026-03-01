import { Link } from 'react-router-dom';
import { subjects, feedCards } from '../content/feedData';

export default function SubjectList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Mata Ujian</h2>
      <div className="space-y-3">
        {subjects.map((subject) => {
          const count = feedCards.filter(c => c.subject === subject.title).length;
          return (
            <Link 
              key={subject.id} 
              to={`/subjects/${subject.id}`}
              className="block bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  <span className="mr-2">{subject.icon}</span>
                  {subject.title}
                </h3>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                  {count} kartu
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
