import React from 'react';

import { getBlogPosts } from '../src/utils/getblog';

import Layout from '../src/components/layout';

import Link from 'next/link';

const BlogPage = ({ tags_count }) => {
  return (
    <Layout meta={{ title: 'Blog Tags' }} banner={undefined}>
      <ul className="taglist">
        {tags_count.map((d) => {
          return (
            <Link key={d[0]} href={`tags/${d[0]}`}>
              <p>
                <a href={`tags/${d[0]}`}>{`${d[0]} (${d[1]})`}</a>
              </p>
            </Link>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export async function getStaticProps() {
  let tags = [];
  const posts = getBlogPosts().filter((p) => p.active);

  posts.map((p) => {
    p.tags?.map((t: string) => tags.push(t));
  });

  const tags_hash = new Map();
  for (let i = 0; i < tags.length; i++) {
    tags_hash.set(tags[i], (tags_hash.get(tags[i]) | 0) + 1);
  }

  tags = Array.from(new Set(tags));

  const tags_count = [];
  for (let i = 0; i < tags.length; i++) {
    const t = tags[i];
    tags_count.push([t, tags_hash.get(t)]);
  }

  return {
    props: { tags_count }
  };
}
