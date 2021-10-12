import React from 'react';
import { Link, graphql, Image, navigate } from 'gatsby';

import Layout from '../components/layout';
import BlogPostCard from '../components/blogpostcard';

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog">
      <ul className="blogposts">
        {data.allMdx.edges.map((d) => {
          const post = d.node.frontmatter;
          const excerpt = d.node.excerpt;
          return <BlogPostCard key={post.title} post={post} excerpt={excerpt} />;
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
