import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

const Page = props => {
  const { data, location } = props
  console.log("*******data: ", data)
  // const posts = data.allMarkdownRemark.edges
  const siteTitle = "Projects"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                style={{ boxShadow: `none` }}
                to={`blog${node.fields.slug}`}
              >
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })} */}
      <Link to="/">
        <Button marginTop="85px">Go Home</Button>
      </Link>
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
