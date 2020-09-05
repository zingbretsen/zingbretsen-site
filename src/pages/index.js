import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout
      title="Home"
      banner={
        'Warning: Experimental site ahead! Rough edges will be sanded, content will be pushed.'
      }
    >
      {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
      <p>
        This site is being developed with Gatsby/React. There's no backend
        server! Blog posts will be generated from markdown documents.
      </p>
      <p>
        My first series of blog posts will be my "Superpowers" series: How Vim,
        Git, and Docker give you superpowers! After that, I will do deeper dives
        into those topics, as well as Python, R, JavaScript, and cloud
        infrastructure.
      </p>
      <p>If any of that interests you, please check back again soon!</p>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "dragonfly.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
