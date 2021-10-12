const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const blogTagTemplate = path.resolve(`src/templates/blogTagTemplate.js`);

  const result = await graphql(`
    {
      posts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.posts.edges.forEach(({ node }) => {
    if (typeof node.frontmatter.path == 'undefined') {
      node.frontmatter.path = '/blog/missing-path';
    }

    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    });
  });

  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    console.log(tag.fieldValue);
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: blogTagTemplate,
      context: {
        tag: tag.fieldValue
      }
    });
  });
};
