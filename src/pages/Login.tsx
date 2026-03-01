import { useState, type FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';

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
          <span className="k-login-logo">🇮🇩</span>
          <h1>CA Prep</h1>
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
                {showPassword ? '🙈' : '👁️'}
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
