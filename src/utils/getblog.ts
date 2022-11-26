import { readFileSync } from 'fs';

export interface blog_meta {
  title: string;
  tags?: string[];
  date: string;
  path: string;
  excerpt: string;
  active: boolean;
  edit?: string;
}

export const getBlogPosts = () => {
  const posts: blog_meta[] = JSON.parse(
    readFileSync(`src/metadata.json`, { encoding: 'utf8', flag: 'r' })
  );
  return posts;
};
