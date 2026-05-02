import { createContext, useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { apiFetch } from '../utils/api';
import {
  setCredentials,
  clearCredentials,
  setAuthLoading,
} from '../store/slices/authSlice';
import { clearUserProfile } from '../store/slices/userSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        dispatch(setAuthLoading(false));
        return;
      }

      try {
        // Decode JWT payload to get role/user info (no /me endpoint needed)
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
        // Sync into Redux store
        dispatch(setCredentials({ token }));
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

      // Sync into Redux store
      dispatch(setCredentials({ token: data.token }));

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

      // Sync into Redux store
      dispatch(setCredentials({ token: data.token }));

      return payload;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');

    // Clear Redux store
    dispatch(clearCredentials());
    dispatch(clearUserProfile());
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
