import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  error: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

const CREDENTIAL_HASH = '61f4631f63585cf6212df249db13da642fa46c431da7830fa5c38802b60e9d6b';
const SESSION_KEY = 'cpa-prep-auth';

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true'
  );
  const [error, setError] = useState('');

  const login = useCallback((email: string, password: string) => {
    setError('');
    sha256(`${email}:${password}`).then(hash => {
      if (hash === CREDENTIAL_HASH) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setIsAuthenticated(true);
      } else {
        setError('Email atau password salah');
      }
    });
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
