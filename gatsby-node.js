/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// gatsby-node.js

const path = require("path");
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ 
      node, 
      getNode, 
      basePath: 'pages' 
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}

/* … */

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogpostTemplate = path.resolve(`./src/templates/blogTemplate.js`);
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) throw result.errors;

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component: blogpostTemplate,
        context: {
          slug: post.node.fields.slug,
        },
      });
    });

    return null;
  });
};
