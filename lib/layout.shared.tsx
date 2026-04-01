import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { CoregitLogo } from '@/components/coregit-logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-forum)' }}>
          <CoregitLogo className="size-6" />
          Coregit
        </span>
      ),
      url: 'https://coregit.dev',
    },
    links: [
      { text: 'Docs', url: '/docs', active: 'nested-url' },
      { text: 'App', url: 'https://app.coregit.dev', active: 'none' },
    ],
  };
}
