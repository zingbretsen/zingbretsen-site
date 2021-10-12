import React from 'react';
import { Link, graphql, Image, navigate } from 'gatsby';

import Layout from '../components/layout';

const TagsPage = ({ data }) => {
  let allMdx = data.allMdx;
  return (
    <Layout title="Tags">
      <h1>Tags</h1>
      <ul className="tagsposts">
        {allMdx.group.map((d) => {
          return (
            <li key={d.fieldValue}>
              <Link to={'/tags/' + d.fieldValue}>{d.fieldValue + ' (' + d.totalCount + ')'}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
