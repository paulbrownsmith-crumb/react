import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/lib/auth-context';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const { t } = useTranslation('common');
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('welcome')}
          </h1>
          {isAuthenticated ? (
            <p className="text-xl text-gray-600">
              Welcome back, {user?.username || user?.email}!
            </p>
          ) : (
            <p className="text-xl text-gray-600">
              Please log in to continue
            </p>
          )}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">TanStack Query</h3>
              <p className="mt-2 text-sm text-gray-500">
                Powerful data fetching and caching for React
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">TanStack Router</h3>
              <p className="mt-2 text-sm text-gray-500">
                Type-safe routing with SSR support
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">JWT Auth</h3>
              <p className="mt-2 text-sm text-gray-500">
                Secure authentication with JSON Web Tokens
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">i18n</h3>
              <p className="mt-2 text-sm text-gray-500">
                Internationalization support for multiple languages
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Tailwind CSS</h3>
              <p className="mt-2 text-sm text-gray-500">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Django Integration</h3>
              <p className="mt-2 text-sm text-gray-500">
                Seamless integration with Django templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
