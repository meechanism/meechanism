import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../../components/layout"
import ListPosts from "../../../components/listPosts"
import SEO from "../../../components/seo"
import buildProjectTiles from "../../../components/ProjectTile"
import Header from "../../../components/header"

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
              date(formatString: "MMM DD, YYYY")
              title
            }
          }
        }
      }
      projectData: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(projects/code)/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
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
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Header>{siteTitle}</Header>
      {results.projectData.edges.length &&
        buildProjectTiles(results.projectData.edges)}
      <ListPosts data={results.blogData} />
    </Layout>
  )
}

export default Code
