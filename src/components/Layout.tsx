import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, List, Zap, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="k-layout">
      <header className="k-header">
        <div className="k-header-spacer" />
        <h1 className="k-header-title">CA Prep 🇮🇩</h1>
        <button onClick={logout} className="k-header-logout" aria-label="Logout" title="Logout">
          <LogOut size={20} />
        </button>
      </header>

      <main className="k-main">
        <Outlet />
      </main>

      <nav className="k-bottom-nav">
        <div className="k-bottom-nav-inner">
          <Link to="/" className={`k-nav-link ${isActive('/') ? 'k-nav-link-active' : 'k-nav-link-inactive'}`}>
            <Home size={22} />
            <span className="k-nav-label">Home</span>
          </Link>
          <Link to="/feed" className={`k-nav-link ${isActive('/feed') ? 'k-nav-link-active' : 'k-nav-link-inactive'}`}>
            <Zap size={22} />
            <span className="k-nav-label">Feed</span>
          </Link>
          <Link to="/subjects" className={`k-nav-link ${isActive('/subjects') ? 'k-nav-link-active' : 'k-nav-link-inactive'}`}>
            <BookOpen size={22} />
            <span className="k-nav-label">Subjects</span>
          </Link>
          <Link to="/topics" className={`k-nav-link ${isActive('/topics') ? 'k-nav-link-active' : 'k-nav-link-inactive'}`}>
            <List size={22} />
            <span className="k-nav-label">Topics</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
