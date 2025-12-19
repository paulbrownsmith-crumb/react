import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  const { t } = useTranslation('common');

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('about')}</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">About Crumb Pet</h2>
            <p className="text-gray-700 mb-4">
              This is a React-based UI for crumb.pet with the following features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>TanStack Query for efficient data fetching and caching</li>
              <li>TanStack Router with Server-Side Rendering (SSR) support</li>
              <li>JWT-based authentication for secure user sessions</li>
              <li>i18next for internationalization (English and Spanish)</li>
              <li>Django template integration capabilities</li>
              <li>Tailwind CSS for responsive and modern styling</li>
              <li>React Testing Library for comprehensive unit tests</li>
              <li>TypeScript for type safety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
