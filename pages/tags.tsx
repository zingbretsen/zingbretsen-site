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

interface blog_meta {
  title: String;
  tags?: [String];
  date: String;
  path: String;
  excerpt: String;
  active: Boolean;
  edit?: String;
}

export async function getStaticProps() {
  let tags = [];
  let posts = getBlogPosts().filter((p: blog_meta) => p.active);

  posts.map((p) => {
    p.tags?.map((t: String) => tags.push(t));
  });

  let tags_hash = new Map();
  for (let i = 0; i < tags.length; i++) {
    tags_hash.set(tags[i], (tags_hash.get(tags[i]) | 0) + 1);
  }

  tags = Array.from(new Set(tags));

  let tags_count = [];
  for (let i = 0; i < tags.length; i++) {
    let t = tags[i];
    tags_count.push([t, tags_hash.get(t)]);
  }

  return {
    props: { tags_count }
  };
}
