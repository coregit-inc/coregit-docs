import { source } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';

export async function getLLMText(page: InferPageType<typeof source>) {
  const content = await page.data.load();
  return `# ${page.data.title}\n\nURL: ${page.url}\n${page.data.description ? `\n${page.data.description}\n` : ''}\n${content.body.toString()}`;
}
