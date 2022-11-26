import { readFileSync } from 'fs';

// export const getPost = (filename) => {
//   return readFileSync(`src/blog/${filename}`);
// };

// export const getFilenameFromSlug = (slug) => {
//   let files = getMdFiles().filter((name) => convertNameToSlug(name) == slug);
//   return files[0];
// };

// export const getPostFromSlug = (slug) => {
//   const filename = getFilenameFromSlug(slug);
//   const post = getPost(filename);
//   // MDX text - can be from a local file, database, anywhere
//   // const meta = getMeta(filename);
//   // const data = meta.data;
//   // const excerpt = meta.excerpt.replace(/\n/g, '');
//   return post;
// };

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
