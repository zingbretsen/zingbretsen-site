import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <p>
        This site is being developed with Gatsby/React. There's no backend server! Blog posts will
        be generated from markdown documents.
      </p>
      <p>
        My first series of blog posts will be my "Superpowers" series: How Vim, Git, and Docker give
        you superpowers! After that, I will do deeper dives into those topics, as well as Python, R,
        JavaScript, and cloud infrastructure.
      </p>
      <p>If any of that interests you, please check back again soon!</p>
    </Layout>
  );
};

export default IndexPage;
