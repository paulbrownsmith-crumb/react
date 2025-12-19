import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, RegisterCredentials } from '@/types/auth';
import { jwtUtils } from './jwt';
import { authApi } from './auth-api';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const initAuth = async () => {
      const tokens = jwtUtils.getStoredTokens();
      
      if (tokens?.accessToken && !jwtUtils.isTokenExpired(tokens.accessToken)) {
        try {
          const currentUser = await authApi.getCurrentUser();
          setUser(currentUser);
        } catch (error) {
          console.error('Failed to get current user:', error);
          jwtUtils.clearTokens();
        }
      } else if (tokens?.refreshToken && !jwtUtils.isTokenExpired(tokens.refreshToken)) {
        // Try to refresh the token
        try {
          const newTokens = await authApi.refreshToken(tokens.refreshToken);
          jwtUtils.storeTokens(newTokens);
          const currentUser = await authApi.getCurrentUser();
          setUser(currentUser);
        } catch (error) {
          console.error('Failed to refresh token:', error);
          jwtUtils.clearTokens();
        }
      }
      
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const { user, tokens } = await authApi.login(credentials);
    jwtUtils.storeTokens(tokens);
    setUser(user);
  };

  const register = async (credentials: RegisterCredentials) => {
    const { user, tokens } = await authApi.register(credentials);
    jwtUtils.storeTokens(tokens);
    setUser(user);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      jwtUtils.clearTokens();
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
