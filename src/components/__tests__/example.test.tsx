import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Simple component for testing
function HelloWorld({ name }: { name: string }) {
  return <div>Hello, {name}!</div>;
}

describe('Example Component Tests', () => {
  it('should render hello world', () => {
    render(<HelloWorld name="World" />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('should render with different name', () => {
    render(<HelloWorld name="React" />);
    expect(screen.getByText('Hello, React!')).toBeInTheDocument();
  });
});

describe('QueryClient Integration', () => {
  it('should work with QueryClient', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const TestComponent = () => <div>Test</div>;

    render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
