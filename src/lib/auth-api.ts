import { api } from './api';
import { User, LoginCredentials, RegisterCredentials, AuthTokens } from '@/types/auth';

interface LoginResponse {
  user: User;
  access: string;
  refresh: string;
}

interface RegisterResponse {
  user: User;
  access: string;
  refresh: string;
}

/**
 * Authentication API endpoints
 */
export const authApi = {
  /**
   * Login with credentials
   */
  login: async (credentials: LoginCredentials): Promise<{ user: User; tokens: AuthTokens }> => {
    const response = await api.post<LoginResponse>('/auth/login/', credentials);
    return {
      user: response.user,
      tokens: {
        accessToken: response.access,
        refreshToken: response.refresh,
      },
    };
  },

  /**
   * Register new user
   */
  register: async (credentials: RegisterCredentials): Promise<{ user: User; tokens: AuthTokens }> => {
    const response = await api.post<RegisterResponse>('/auth/register/', credentials);
    return {
      user: response.user,
      tokens: {
        accessToken: response.access,
        refreshToken: response.refresh,
      },
    };
  },

  /**
   * Refresh access token
   */
  refreshToken: async (refreshToken: string): Promise<AuthTokens> => {
    const response = await api.post<{ access: string }>('/auth/refresh/', { refresh: refreshToken });
    return {
      accessToken: response.access,
      refreshToken,
    };
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    await api.post('/auth/logout/');
  },

  /**
   * Get current user profile
   */
  getCurrentUser: async (): Promise<User> => {
    return api.get<User>('/auth/me/');
  },
};
