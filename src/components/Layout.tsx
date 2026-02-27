import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, List } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400">CPA Prep</h1>
      </header>

      <main className="flex-1 p-4 pb-20 max-w-3xl mx-auto w-full">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pb-safe">
        <div className="flex justify-around items-center h-16 max-w-3xl mx-auto">
          <Link 
            to="/" 
            className={`flex flex-col items-center p-2 ${isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link 
            to="/subjects" 
            className={`flex flex-col items-center p-2 ${isActive('/subjects') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
          >
            <BookOpen size={24} />
            <span className="text-xs mt-1">Subjects</span>
          </Link>
          <Link 
            to="/topics" 
            className={`flex flex-col items-center p-2 ${isActive('/topics') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
          >
            <List size={24} />
            <span className="text-xs mt-1">Topics</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
