import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../../components/layout"
import ListPosts from "../../../components/listPosts"
import SEO from "../../../components/seo"
import Header from "../../../components/header"

const Travel = props => {
  const { location } = props
  const siteTitle = "Travel Projects"

  const results = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { project: { eq: "travel" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
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
        <Header>{siteTitle}</Header>
        <ListPosts data={results.allMarkdownRemark} />
      </div>
    </Layout>
  )
}

export default Travel
