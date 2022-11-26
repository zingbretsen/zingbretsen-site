import React from 'react';

import { getBlogPosts, blog_meta } from '../../src/utils/getblog';

import Link from 'next/link';

import Layout from '../../src/components/layout';
import BlogPostCard from '../../src/components/blogpostcard';

const BlogPost = ({ tag, posts }) => {
  return (
    <Layout meta={{ title: tag }} banner={undefined}>
      <Link href="/tags/">back to tags</Link>
      <ul className="blogposts">
        {posts.map((d) => {
          return (
            <BlogPostCard
              key={d.slug}
              title={d.title}
              path={`/blog/${d.path}`}
              excerpt={d.excerpt}
            />
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const tags: string[] = [];
  const posts = getBlogPosts();

  posts.map((p) => {
    p.tags?.map((t) => tags.push(t));
  });

  const paths = [...tags].map((t) => `/tags/${t}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { tag } = params;
  const posts: blog_meta[] = getBlogPosts()
    .filter((p) => p.active)
    .filter((p) => {
      if (typeof p.tags != 'undefined') {
        return p.tags.indexOf(tag) >= 0;
      }
      return false;
    })
    .sort((a, b) => Number(a.date < b.date));
  return { props: { tag, posts } };
}
