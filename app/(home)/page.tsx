import Link from 'next/link';
import { CoregitLogo } from '@/components/coregit-logo';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <CoregitLogo className="size-16 mb-6 text-fd-foreground" />
      <h1
        className="text-4xl font-bold mb-4 text-fd-foreground"
        style={{ fontFamily: 'var(--font-forum)' }}
      >
        Coregit Documentation
      </h1>
      <p className="text-fd-muted-foreground text-lg mb-8 max-w-lg">
        Serverless Git for AI-native products. Create repos, commit files, and
        clone — all through a simple REST API.
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Get Started
      </Link>
    </main>
  );
}
