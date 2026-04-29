import { createContext, useState, useEffect, useContext } from 'react';
import { apiFetch } from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Just checking the buyer profile to see if token is valid.
        // We'll decode the token or use a specific /me endpoint, 
        // but for now let's just parse the JWT payload manually to get role
        // since we didn't add a GET /api/auth/me route.
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
      } catch (error) {
        console.error('Invalid token', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      const data = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      setToken(data.token);
      localStorage.setItem('token', data.token);
      
      const payload = JSON.parse(atob(data.token.split('.')[1]));
      setUser(payload);
      return payload;
    } catch (error) {
      throw error;
    }
  };

  const register = async (name, email, password, role) => {
    try {
      const data = await apiFetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, role }),
      });
      setToken(data.token);
      localStorage.setItem('token', data.token);
      
      const payload = JSON.parse(atob(data.token.split('.')[1]));
      setUser(payload);
      return payload;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
