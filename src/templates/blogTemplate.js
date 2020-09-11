import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title="Zach Overflow Blog" description={frontmatter.title}>
      <h1 className="blogtitle">{frontmatter.title}</h1>
      <p className="blogdate">{frontmatter.date}</p>
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link to="/blog">Go back to the blog</Link>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
