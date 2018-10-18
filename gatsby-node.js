const { createFilePath } = require('gatsby-source-filesystem')
const path = require(`path`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Ensures we are processing only markdown files
  if (_.get(node, 'internal.type') === `MarkdownRemark`) {

    // Get the parent node
    const parent = getNode(_.get(node, "parent"))

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, "sourceInstanceName")
    })

    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                collection
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        if (node.fields.collection !== 'portfolio') {
          createPage({
            path: `${node.fields.collection}${node.fields.slug}`,
            component: path.resolve(`./src/templates/${node.fields.collection}.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        }
      })
      resolve()
    })
  })
}
