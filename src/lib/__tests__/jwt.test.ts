import { describe, it, expect, beforeEach, vi } from 'vitest';
import { jwtUtils } from '../jwt';

describe('jwtUtils', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('decodeToken', () => {
    it('should decode a valid JWT token', () => {
      // Create a sample JWT token (header.payload.signature)
      const payload = { sub: '1234567890', name: 'John Doe', exp: Math.floor(Date.now() / 1000) + 3600 };
      const encodedPayload = btoa(JSON.stringify(payload));
      const token = `header.${encodedPayload}.signature`;

      const decoded = jwtUtils.decodeToken(token);

      expect(decoded).toBeDefined();
      expect(decoded?.name).toBe('John Doe');
    });

    it('should return null for invalid token', () => {
      const decoded = jwtUtils.decodeToken('invalid-token');
      expect(decoded).toBeNull();
    });
  });

  describe('isTokenExpired', () => {
    it('should return false for non-expired token', () => {
      const payload = { exp: Math.floor(Date.now() / 1000) + 3600 };
      const encodedPayload = btoa(JSON.stringify(payload));
      const token = `header.${encodedPayload}.signature`;

      expect(jwtUtils.isTokenExpired(token)).toBe(false);
    });

    it('should return true for expired token', () => {
      const payload = { exp: Math.floor(Date.now() / 1000) - 3600 };
      const encodedPayload = btoa(JSON.stringify(payload));
      const token = `header.${encodedPayload}.signature`;

      expect(jwtUtils.isTokenExpired(token)).toBe(true);
    });
  });

  describe('token storage integration', () => {
    it('should handle token operations', () => {
      const tokens = {
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      };

      // Test storing
      expect(() => jwtUtils.storeTokens(tokens)).not.toThrow();

      // Test clearing
      expect(() => jwtUtils.clearTokens()).not.toThrow();

      // Test getting when empty
      const accessToken = jwtUtils.getAccessToken();
      const refreshToken = jwtUtils.getRefreshToken();
      
      // Should handle gracefully
      expect(accessToken).toBeNull();
      expect(refreshToken).toBeNull();
    });
  });
});
