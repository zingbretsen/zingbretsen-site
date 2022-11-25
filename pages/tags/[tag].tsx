import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';

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
  let tags = [];
  let posts = getBlogPosts();

  if (typeof posts == 'undefined') {
    return { paths: [], fallback: true };
  }

  posts.map((p) => {
    if (typeof p.tags != 'undefined') {
      p.tags.map((t) => tags.push(t));
    }
  });

  tags = Array.from(new Set(tags));
  if (typeof tags != 'undefined') {
    tags = tags.map((t) => `/tags/${t}`);
  }

  return { paths: tags, fallback: false };
}

export async function getStaticProps({ params }) {
  let { tag } = params;
  let posts = getBlogPosts()
    .filter((p) => p.active)
    .filter((p) => {
      if (typeof p.tags != 'undefined') {
        return p.tags.indexOf(tag) >= 0;
      }
      return false;
    })
    .sort((a, b) => a.date < b.date);
  return { props: { tag, posts } };
}
