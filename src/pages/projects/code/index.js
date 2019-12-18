import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../../components/layout"
import LatestBlog from "../../../components/latest-blog"
import SEO from "../../../components/seo"
import buildProjectTiles from "../../../components/ProjectTile"

const Code = props => {
  const { location } = props
  const siteTitle = "Coding Projects"

  const results = useStaticQuery(graphql`
    query {
      blogData: allMarkdownRemark(
        filter: { frontmatter: { project: { eq: "code" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
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
      projectData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects\/code)/"}}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              project
              title
              description
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>{siteTitle}</h1>
      <h2>Professional</h2>
      {results.projectData.edges.length && buildProjectTiles(results.projectData.edges)}
      <LatestBlog data={results.blogData} />
    </Layout>
  )
}

export default Code
