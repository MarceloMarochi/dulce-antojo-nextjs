import { useState } from 'react';
import { AUTH_CREDENTIALS } from '@/utils/constants';

interface UseAuthReturn {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string): boolean => {
    if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout
  };
};