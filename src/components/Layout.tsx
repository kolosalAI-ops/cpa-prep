import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Zap, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navClass = (path: string) =>
    `k-nav-link ${isActive(path) ? 'k-nav-link-active' : 'k-nav-link-inactive'}`;

  return (
    <div className="k-layout">
      <header className="k-header">
        <div className="k-header-spacer" />
        <h1 className="k-header-title">CA Prep</h1>
        <button onClick={logout} className="k-header-logout" aria-label="Logout" title="Logout">
          <LogOut size={20} />
        </button>
      </header>

      <main className="k-main">
        <Outlet />
      </main>

      <nav className="k-bottom-nav">
        <div className="k-bottom-nav-inner">
          <Link to="/" className={navClass('/')}>
            <Home size={22} />
            <span className="k-nav-label">Home</span>
            <span className="k-nav-dot" />
          </Link>
          <Link to="/feed" className={navClass('/feed')}>
            <Zap size={22} />
            <span className="k-nav-label">Feed</span>
            <span className="k-nav-dot" />
          </Link>
          <Link to="/subjects" className={navClass('/subjects')}>
            <BookOpen size={22} />
            <span className="k-nav-label">Subjects</span>
            <span className="k-nav-dot" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
