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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecf4 100%)',
      padding: 16,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 380,
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '40px 28px 32px',
        color: '#1a1a1a',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ fontSize: 48, display: 'block', marginBottom: 8 }}>🇮🇩</span>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111', margin: '0 0 4px' }}>CA Prep</h1>
          <p style={{ fontSize: 14, color: '#666', margin: 0 }}>Masuk untuk melanjutkan belajar</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6 }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              autoComplete="email"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1.5px solid #dee2e6',
                borderRadius: 10,
                fontSize: 15,
                color: '#111',
                background: '#f8f9fa',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = '#dee2e6'; e.target.style.background = '#f8f9fa'; }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6 }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                style={{
                  width: '100%',
                  padding: '10px 44px 10px 12px',
                  border: '1.5px solid #dee2e6',
                  borderRadius: 10,
                  fontSize: 15,
                  color: '#111',
                  background: '#f8f9fa',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = '#fff'; }}
                onBlur={e => { e.target.style.borderColor = '#dee2e6'; e.target.style.background = '#f8f9fa'; }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                style={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 18,
                  padding: 4,
                  lineHeight: 1,
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          {error && <p style={{ color: '#ef4444', fontSize: 13, margin: 0, textAlign: 'center' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: 12,
              background: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: 4,
            }}
          >
            Masuk
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: 12, color: '#999', margin: '20px 0 0' }}>
          Chartered Accountant Indonesia — IAI
        </p>
      </div>
    </div>
  );
}
