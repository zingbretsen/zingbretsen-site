import React from 'react';
import { Link, graphql, Image, navigate } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog">
      <ul className="blogposts">
        {data.allMarkdownRemark.edges.map((d) => {
          const post = d.node.frontmatter;
          const html = d.node.htmlAst;
          return (
            <li
              className="blogpost"
              key={post.path}
              onClick={() => navigate(post.path)}
            >
              <div>
                <div>
                  <h5>Ohai</h5>
                </div>
                <div className="spacer" />
                <div>
                  <h5>{post.title} </h5>
                  <p> {html.children[0].children[0].value} </p>
                </div>
                {/* </Link> */}
              </div>
            </li>
          );
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
`;
