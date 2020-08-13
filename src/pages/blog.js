import React from "react";
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = ({ data }) => {
    return (
        <Layout>
          <SEO title="Blog" />
          <ul>
          {data.allMarkdownRemark.edges.map((d) => {
              const post = d.node.frontmatter;
              const html = d.node.htmlAst;
              return (<div>
                        <Link to={post.path}><h5>{post.title}</h5></Link>
                        <p> {html.children[0].children[0].value} <Link to={post.path}>Read more...</Link>
</p>
                        <hr/>
                      </div>);
 })}
          </ul>
        </Layout>
    );
};

export default BlogPage;
export const query = graphql`
query blogPosts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          title
          date
        }
        headings {
          id
        }
        htmlAst
        timeToRead
      }
    }
  }
}
`
