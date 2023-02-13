import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const uvaProblemsDirectory = join(
  process.cwd(),
  '_content/coding-problems/uva'
);

export function getUVASlugs() {
  return fs.readdirSync(uvaProblemsDirectory);
}

export function getUVABySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(uvaProblemsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllUVAProblems(fields: string[] = []) {
  const slugs = getUVASlugs();
  const uva = slugs.map((slug) => getUVABySlug(slug, fields));
  return uva;
}
