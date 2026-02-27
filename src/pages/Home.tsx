import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
        <p className="opacity-90">Ready to continue your CPA preparation?</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/subjects" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-1">Subjects</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Browse by category</p>
        </Link>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 opacity-50">
          <h3 className="font-semibold text-lg mb-1">Practice</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-semibold text-lg mb-3">Recent Activity</h3>
        <p className="text-gray-500 text-center py-4">No recent activity</p>
      </div>
    </div>
  );
}
