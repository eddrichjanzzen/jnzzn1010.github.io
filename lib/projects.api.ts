import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const projectsDirectory = join(process.cwd(), '_content/projects');

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
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

    // explicitly convert the date into a string object to prevent nextjs parse issues
    if (field === 'date') {
      items[field] = data[field].toString();
    }
  });

  return items;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}
