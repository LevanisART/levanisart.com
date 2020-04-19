const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark (sort: {order: ASC, fields: [frontmatter___date]})
      {
        edges {
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }  
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const projects = result.data.allMarkdownRemark.edges;

    projects.forEach(({node, previous, next}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/portfolio-project.js`),
        context: {
          slug: node.fields.slug,
          next,
          previous,
        },
      })
    })
  })
}