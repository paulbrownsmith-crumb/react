import { useState, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const queryClient = useQueryClient();

  const login = useCallback(() => {
    setIsLoggedIn(true);
    // Invalidate to trigger a fresh fetch
    queryClient.invalidateQueries({ queryKey: ['user'] });
  }, [queryClient]);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    // Clear the cached user data
    queryClient.removeQueries({ queryKey: ['user'] });
  }, [queryClient]);

  return { isLoggedIn, login, logout };
}
