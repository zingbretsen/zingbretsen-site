import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

import { Link } from 'next/link';

import BlogPostCard from '../components/blogpostcard';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout title={tagHeader}>
      <h1 className="blogtitle">{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          return <BlogPostCard key={node.frontmatter.title} post={node} />;
        })}
      </ul>
      <div className="blog-link">
        <Link to="/blog">Go back to the blog</Link>
        {' | '}
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};

export default Tags;

export async function getStaticProps(context) {
  const pageContext = {};
  const data = [];
  return {
    props: { pageContext, data } // will be passed to the page component as props
  };
}
