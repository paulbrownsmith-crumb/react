import { AuthTokens } from '@/types/auth';

const TOKEN_KEY = 'auth_tokens';

export const jwtUtils = {
  /**
   * Decode JWT token payload (without verification)
   */
  decodeToken: (token: string): Record<string, unknown> | null => {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      const base64Url = parts[1];
      if (!base64Url) return null;
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  },

  /**
   * Check if token is expired
   */
  isTokenExpired: (token: string): boolean => {
    const decoded = jwtUtils.decodeToken(token);
    if (!decoded || !decoded.exp) return true;

    const expirationTime = (decoded.exp as number) * 1000;
    return Date.now() >= expirationTime;
  },

  /**
   * Store tokens in localStorage
   */
  storeTokens: (tokens: AuthTokens): void => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
  },

  /**
   * Get stored tokens from localStorage
   */
  getStoredTokens: (): AuthTokens | null => {
    const tokensStr = localStorage.getItem(TOKEN_KEY);
    if (!tokensStr) return null;

    try {
      return JSON.parse(tokensStr);
    } catch {
      return null;
    }
  },

  /**
   * Remove tokens from localStorage
   */
  clearTokens: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  /**
   * Get access token
   */
  getAccessToken: (): string | null => {
    const tokens = jwtUtils.getStoredTokens();
    return tokens?.accessToken || null;
  },

  /**
   * Get refresh token
   */
  getRefreshToken: (): string | null => {
    const tokens = jwtUtils.getStoredTokens();
    return tokens?.refreshToken || null;
  },
};
