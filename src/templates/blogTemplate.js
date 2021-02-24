import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

export default function Template({ data }) {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  return (
    <Layout title="Zach Overflow Blog" description={frontmatter.title}>
      <h1 className="blogtitle">{frontmatter.title}</h1>
      <p className="blogdate">{frontmatter.date}</p>
      <div className="blog-post">
        <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
        <Link to="/blog">Go back to the blog</Link>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
