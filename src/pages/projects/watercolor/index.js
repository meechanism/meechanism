import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../../components/layout"
import LatestBlog from "../../../components/latest-blog"
import SEO from "../../../components/seo"

const WaterColorProjects = props => {
  const { location } = props
  const siteTitle = "Watercolor Projects"

  const results = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { project: { eq: "watercolor" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      <div>
        <h1>{siteTitle}</h1>

        <LatestBlog data={results.allMarkdownRemark} />
      </div>
    </Layout>
  )
}

export default WaterColorProjects
