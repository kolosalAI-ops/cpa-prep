import { useState, type FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function CaLogoMark() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ca-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1077E3" />
          <stop offset="100%" stopColor="#045DC1" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ca-grad)" />
      <text x="24" y="31" fontSize="22" fontWeight="800" fill="white" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">CA</text>
    </svg>
  );
}

export default function Login() {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(email.trim().toLowerCase(), password);
  };

  return (
    <div className="k-login-page">
      <div className="k-login-card">
        <div className="k-login-header">
          <CaLogoMark />
          <h1 className="k-login-brand">CA Prep</h1>
          <p>Masuk untuk melanjutkan belajar</p>
        </div>
        <form onSubmit={handleSubmit} className="k-login-form">
          <div className="k-login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="k-login-field">
            <label htmlFor="password">Password</label>
            <div className="k-login-pw-wrap">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="k-login-pw-toggle"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <p className="k-login-error">{error}</p>}
          <button type="submit" className="k-login-btn">Masuk</button>
        </form>
        <p className="k-login-footer">Chartered Accountant Indonesia — IAI</p>
      </div>
    </div>
  );
}
