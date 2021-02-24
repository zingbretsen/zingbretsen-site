import React from "react";
import { Link, graphql, Image, navigate } from "gatsby";

import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog">
      <ul className="blogposts">
        {data.allMdx.edges.map((d) => {
          const post = d.node.frontmatter;
          const excerpt = d.node.excerpt;
          return (
            <li
              className="blogpost"
              key={post.path}
              onClick={() => navigate(post.path)}
            >
              <div>
                <div className="spacer" />
                <div>
                  <h5>{post.title} </h5>
                  <p> {excerpt} </p>
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
