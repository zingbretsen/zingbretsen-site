import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import BlogPostCard from '../components/blogpostcard';

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog">
      <ul className="blogposts">
        {data.allMdx.edges.map((d) => {
          return <BlogPostCard key={d.node.frontmatter.title} post={d.node} />;
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;
export const query = graphql`
  query blogPosts {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
          id
          excerpt
          timeToRead
        }
      }
    }
  }
`;
