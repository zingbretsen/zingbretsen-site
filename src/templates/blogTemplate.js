import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { PageHeader, ArrowLeft } from 'antd';

import Layout from "../components/layout";
import SEO from "../components/seo";


export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
        <SEO title="Zach Overflow Blog" />
          <PageHeader className="site-page-header"
                      title={frontmatter.title}
                      subTitle={frontmatter.date}
          />

            <div className="blog-post">
            <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
            />
            </div>

        <Link to="/blog">Go back to the blog</Link>
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
