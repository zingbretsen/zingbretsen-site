import fs from 'fs';
import path from 'path';
import { metadata, type PostMetadata } from '@/content/blog/metadata';

export interface BlogPost extends PostMetadata {
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const meta = metadata[slug];

      if (!meta) {
        return null;
      }

      return {
        slug,
        ...meta,
      };
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const meta = metadata[slug];

  if (!meta) {
    return undefined;
  }

  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return {
    slug,
    ...meta,
  };
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagCounts = new Map<string, number>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
