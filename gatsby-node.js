const path = require(`path`)
const StringUtil = require("./src/utils/string")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPostTmpl = path.resolve(`./src/templates/blog-post.js`)
  const projectPostTmpl = path.resolve(`./src/templates/project-post.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(
    `
      {
        # Alias the queries
        blogPosts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(blog)/" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                project
              }
            }
          }
        }

        projectPosts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                project
              }
            }
          }
        }

        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    // throw result.errors
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  // Create posts pages.
  const blogPosts = result.data.blogPosts.edges
  const projectPosts = result.data.projectPosts.edges

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPostTmpl,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  projectPosts.forEach((post, index) => {
    const previous =
      index === projectPosts.length - 1 ? null : projectPosts[index + 1].node
    const next = index === 0 ? null : projectPosts[index - 1].node

    createPage({
      path: `projects${post.node.fields.slug}`,
      component: projectPostTmpl,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${StringUtil.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  return null
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
