import { readFile } from 'fs/promises';
import { join } from 'path';
import { source } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';

export async function getLLMText(page: InferPageType<typeof source>) {
  // Read raw MDX file and strip frontmatter
  const slugPath = page.slugs.join('/');
  const basePath = join(process.cwd(), 'content/docs');

  let raw: string;
  try {
    raw = await readFile(join(basePath, `${slugPath}.mdx`), 'utf-8');
  } catch {
    raw = await readFile(join(basePath, slugPath, 'index.mdx'), 'utf-8');
  }

  const content = raw.replace(/^---[\s\S]*?---\n*/, '');

  return `# ${page.data.title}\n\nURL: ${page.url}\n${page.data.description ? `\n${page.data.description}\n` : ''}\n${content}`;
}
