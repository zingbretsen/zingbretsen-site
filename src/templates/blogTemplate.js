import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { mdx } = data;
  const { frontmatter, body, excerpt } = mdx;
  return (
    <Layout title={frontmatter.title} description={excerpt}>
      <article>
        <h1 className="blogtitle">{frontmatter.title}</h1>
        <p className="blogdate">{frontmatter.date}</p>
        {frontmatter.edit ? <p className="edit-message">{'Edit: ' + frontmatter.edit}</p> : <></>}
        <div className="tags">
          <span>Tags: </span>
          {frontmatter.tags.map((tag) => (
            <Link className="blog-tag" key={tag} to={'/tags/' + tag}>
              {tag}
            </Link>
          ))}
        </div>
        <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
      </article>
      <div className="blog-link">
        <Link to="/blog">Go back to the blog</Link>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        edit
        tags
      }
    }
  }
`;
