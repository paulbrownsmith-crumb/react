import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

async function fetchUser(): Promise<User> {
  const response = await fetch('/api/user');
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response.json();
}

// enabled parameter:
// - Defaults to true for backwards compatibility - existing useUser() calls work without changes
// - When true: query fetches automatically on mount and refetches on window focus, network reconnect, etc.
// - When false: query is disabled and won't fetch; returns { data: undefined, isLoading: false }
// - Use case: pass isLoggedIn to only fetch user data when authenticated
//   Example: const { data: user } = useUser(isLoggedIn);
export function useUser(enabled = true) {
  return useQuery({
    // queryKey serves several purposes:
    // 1. Caching - Unique identifier for cached data. Components using the same key share cached results.
    // 2. Refetching - Manually refetch/invalidate by key: queryClient.invalidateQueries({ queryKey: ['user'] })
    // 3. Deduplication - Multiple components calling useUser() make only one network request.
    // 4. Dependencies - Include variables for unique caches: queryKey: ['user', userId]
    // Keys are arrays for hierarchical invalidation (e.g., invalidating ['user'] also invalidates ['user', 1])
    queryKey: ['user'],
    // queryFn is the function that fetches the data:
    // 1. Must return a Promise - TanStack Query handles the async state (loading, error, success).
    // 2. Should throw on error - Throwing an error triggers the error state; returning undefined does not.
    // 3. Receives context - Can access queryKey via ({ queryKey }) => fetch(`/api/user/${queryKey[1]}`)
    // 4. Runs automatically - Fetches on mount and refetches on window focus, network reconnect, or stale time.
    // 5. Can be any async function - fetch, axios, GraphQL client, etc.
    queryFn: fetchUser,
    // enabled controls whether the query runs automatically (see function comment above for details)
    enabled,
  });
}
