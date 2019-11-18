import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = props => {
  const { data, location } = props
  const siteTitle = "Projects"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>{siteTitle}</h1>
      This area is still under construction! Come back soon!
    </Layout>
  )
}
export default Page

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          extension
          dir
          modifiedTime
        }
      }
    }
  }
`
