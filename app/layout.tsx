import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Forum, Host_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';

const forum = Forum({
  weight: '400',
  variable: '--font-forum',
  subsets: ['latin'],
});

const hostGrotesk = Host_Grotesk({
  variable: '--font-host-grotesk',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Coregit Docs',
  description: 'Documentation for Coregit — Serverless Git for AI-native products',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${forum.variable} ${hostGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <body style={{ fontFamily: 'var(--font-host-grotesk), sans-serif' }}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
