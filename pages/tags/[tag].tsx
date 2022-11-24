import React from 'react';

import { getBlogPosts } from '../../src/utils/getblog';

import Link from 'next/link';

import Layout from '../../src/components/layout';
import BlogPostCard from '../../src/components/blogpostcard';

const BlogPost = ({ tag, posts }) => {
  return (
    <Layout meta={{ title: tag }} banner={undefined}>
      <Link href="/tags/">
        <a href="/tags/">back to tags</a>
      </Link>
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

  posts.map((p) => p.tags?.map((t) => tags.push(t)));

  tags = Array.from(new Set(tags)).map((t) => `/tags/${t}`);

  return { paths: tags, fallback: true };
}

export async function getStaticProps({ params }) {
  let { tag } = params;
  let posts = getBlogPosts()
    .filter((p) => p.active)
    .filter((p) => p.tags?.indexOf(tag) >= 0)
    .sort((a, b) => a.date < b.date);
  return { props: { tag, posts } };
}
