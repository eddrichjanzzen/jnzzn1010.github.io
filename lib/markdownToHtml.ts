import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import emoji from 'remark-emoji';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(prism)
    .use(emoji)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
