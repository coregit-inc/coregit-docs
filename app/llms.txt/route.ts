import { source } from '@/lib/source';

export const revalidate = false;

export function GET() {
  const pages = source.getPages().map((page) => {
    return `- [${page.data.title}](${page.url}): ${page.data.description ?? ''}`;
  });

  const content = `# Coregit Documentation\n\n> Serverless Git for AI-native products\n\n## Pages\n\n${pages.join('\n')}`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
