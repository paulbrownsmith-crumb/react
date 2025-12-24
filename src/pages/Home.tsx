import { useAuth } from '@/lib/auth-context';

function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            {isAuthenticated ? (
              <p className="text-xl text-gray-600">
                Welcome back, {user?.username || user?.email}!
              </p>
            ) : (
              <p className="text-xl text-gray-600">Please log in to continue</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
