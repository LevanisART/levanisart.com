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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const projects = result.data.allMarkdownRemark.edges;

    projects.forEach(({node}, index) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/portfolio-project.js`),
        context: {
          slug: node.fields.slug,
          prev: index === 0 ? null : projects[index - 1].node,
          next: index === (projects.length - 1) ? null : projects[index + 1].node
        },
      })
    })
  })
}