# Crumb Pet React UI

A modern React-based UI for crumb.pet with comprehensive features including TanStack Query, TanStack Router, SSR, JWT authentication, internationalization, and Django template integration.

## Features

- **TanStack Query** - Powerful data fetching and caching
- **TanStack Router** - Type-safe routing with SSR support
- **JWT Authentication** - Secure user session management
- **i18next** - Internationalization support (English, Spanish)
- **Django Template Integration** - Seamlessly integrate Django templates
- **Tailwind CSS** - Modern, responsive styling
- **React Testing Library** - Comprehensive unit testing
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests with UI
npm test:ui
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # React components
├── hooks/            # Custom React hooks
├── lib/              # Core utilities and configurations
│   ├── api.ts        # API client with JWT support
│   ├── auth-api.ts   # Authentication API endpoints
│   ├── auth-context.tsx  # Auth context and provider
│   ├── django-templates.tsx  # Django template integration
│   ├── i18n.ts       # i18next configuration
│   └── jwt.ts        # JWT utilities
├── routes/           # TanStack Router routes
│   ├── __root.tsx    # Root layout
│   ├── index.tsx     # Home page
│   ├── about.tsx     # About page
│   └── login.tsx     # Login page
├── test/             # Test setup and utilities
├── types/            # TypeScript type definitions
└── main.tsx          # Application entry point
```

## Authentication

The application uses JWT (JSON Web Tokens) for authentication. The auth system includes:

- Login/Register functionality
- Token storage in localStorage
- Automatic token refresh
- Protected routes
- User context available throughout the app

### Using Auth in Components

```tsx
import { useAuth } from '@/lib/auth-context';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  // Your component logic
}
```

## Internationalization (i18n)

The app supports multiple languages using i18next. Translation files are located in `public/locales/`.

### Using Translations

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  
  return <h1>{t('welcome')}</h1>;
}
```

### Adding New Languages

1. Create a new folder in `public/locales/` (e.g., `fr/`)
2. Add translation JSON files (common.json, auth.json, errors.json)
3. Configure in `src/lib/i18n.ts` if needed

## Django Template Integration

The app includes utilities to integrate Django templates:

### Using Django Templates

```tsx
import { DjangoTemplate } from '@/lib/django-templates';

function MyComponent() {
  return (
    <DjangoTemplate
      templateUrl="/api/templates/my-template/"
      context={{ userId: 123 }}
      onLoad={() => console.log('Template loaded')}
    />
  );
}
```

### Using the Hook

```tsx
import { useDjangoTemplate } from '@/lib/django-templates';

function MyComponent() {
  const { html, loading, error } = useDjangoTemplate(
    '/api/templates/my-template/',
    { userId: 123 }
  );
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

## API Configuration

Configure the API base URL in your environment variables:

```bash
VITE_API_BASE_URL=http://localhost:8000/api
```

Create a `.env.local` file for local development:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## TanStack Query

Use TanStack Query for data fetching:

```tsx
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['items'],
    queryFn: () => api.get('/items/'),
  });
  
  // Your component logic
}
```

## Routing

Routes are defined in `src/routes/`. TanStack Router provides type-safe routing:

```tsx
import { Link } from '@tanstack/react-router';

function MyComponent() {
  return <Link to="/about">About</Link>;
}
```

## Styling with Tailwind CSS

The project uses Tailwind CSS for styling. Use utility classes directly in your components:

```tsx
function MyComponent() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
      Hello, Tailwind!
    </div>
  );
}
```

## Testing

Tests are written using Vitest and React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

MIT
