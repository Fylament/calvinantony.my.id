const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { paginate } = require('gatsby-awesome-pagination')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      articles:
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      blog:
      allMarkdownRemark(limit: 1000
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      project:
      allMarkdownRemark(limit: 1000
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()))
    return Promise.reject(result.errors)
  }
  const articles  = result.data.articles.edges
  const blog = result.data.blog.edges
  const project = result.data.project.edges

  paginate({
    createPage,
    items: blog,
    itemsPerPage: 3,
    pathPrefix: '/blog',
    component: path.resolve('src/templates/blog.js')
  });
  paginate({
    createPage,
    items: project,
    itemsPerPage: 3,
    pathPrefix: '/projects',
    component: path.resolve('src/templates/projects.js')
  });

  articles.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {  
        slug: edge.node.fields.slug,
      },
    })
  })
  // result.data.articles.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: path.resolve(`./src/templates/blog-post.js`),
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       slug: node.fields.slug,
  //     },
  //   })
  // })
  })
}