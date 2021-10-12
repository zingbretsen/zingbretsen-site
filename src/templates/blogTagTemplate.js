import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

import { Link, graphql } from 'gatsby';

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
          const { frontmatter, excerpt } = node;
          return <BlogPostCard key={frontmatter.title} post={frontmatter} excerpt={excerpt} />;
        })}
      </ul>
      <Link to="/blog">Go back to the blog</Link>
      {' | '}
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(limit: 2000, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
          }
          excerpt
        }
      }
    }
  }
`;
