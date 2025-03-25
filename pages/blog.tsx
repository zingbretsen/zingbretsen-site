import React from 'react';

import { getBlogPosts } from '../src/utils/getblog';

import Layout from '../src/components/layout';
import BlogPostCard from '../src/components/blogpostcard';

const BlogPage = ({ posts }) => {
  return (
    <Layout title="Zing Blog" meta={{ title: 'Blog Posts' }}>
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

export default BlogPage;

export async function getStaticProps() {
  let frontmatters = getBlogPosts()
    .filter((p) => p.active)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: { posts: frontmatters }
  };
}
