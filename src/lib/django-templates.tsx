import React from 'react';

/**
 * Django template integration utilities
 * Allows importing and rendering Django templates within React components
 */

interface DjangoTemplateProps {
  templateUrl: string;
  context?: Record<string, unknown>;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Component to load and render Django templates
 */
export const DjangoTemplate: React.FC<DjangoTemplateProps> = ({
  templateUrl,
  context = {},
  onLoad,
  onError,
}) => {
  const [html, setHtml] = React.useState<string>('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchTemplate = async () => {
      try {
        setLoading(true);
        setError(null);

        // Build query string from context
        const queryParams = new URLSearchParams();
        Object.entries(context).forEach(([key, value]) => {
          queryParams.append(key, String(value));
        });

        const url = queryParams.toString()
          ? `${templateUrl}?${queryParams.toString()}`
          : templateUrl;

        const response = await fetch(url, {
          headers: {
            'Accept': 'text/html',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch template: ${response.statusText}`);
        }

        const htmlContent = await response.text();
        setHtml(htmlContent);
        onLoad?.();
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        onError?.(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [templateUrl, context, onLoad, onError]);

  if (loading) {
    return <div className="django-template-loading">Loading template...</div>;
  }

  if (error) {
    return <div className="django-template-error">Error loading template: {error.message}</div>;
  }

  return (
    <div
      className="django-template-container"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Hook to fetch Django template as HTML string
 */
export const useDjangoTemplate = (
  templateUrl: string,
  context: Record<string, unknown> = {}
) => {
  const [html, setHtml] = React.useState<string>('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchTemplate = async () => {
      try {
        setLoading(true);
        setError(null);

        const queryParams = new URLSearchParams();
        Object.entries(context).forEach(([key, value]) => {
          queryParams.append(key, String(value));
        });

        const url = queryParams.toString()
          ? `${templateUrl}?${queryParams.toString()}`
          : templateUrl;

        const response = await fetch(url, {
          headers: {
            'Accept': 'text/html',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch template: ${response.statusText}`);
        }

        const htmlContent = await response.text();
        setHtml(htmlContent);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [templateUrl, context]);

  return { html, loading, error };
};

/**
 * Utility to inject React components into Django template placeholders
 * @param containerId - The ID of the container element
 * Note: Component injection requires manual React root creation by the calling code
 */
export const injectReactComponents = (
  containerId: string
): void => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = document.createElement('div');
    container.appendChild(root);
    // This would need a separate React root creation
    // which should be handled by the calling code
    console.warn('Component injection requires manual root creation');
  }
};
