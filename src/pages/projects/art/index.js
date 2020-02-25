import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../../components/layout"
import LatestBlog from "../../../components/latest-blog"
import SEO from "../../../components/seo"
import Header from "../../../components/header"
import buildProjectTiles from "../../../components/ProjectTile"

const ArtProjects = props => {
  const { location } = props
  const siteTitle = "Art Projects"

  const results = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { project: { eq: "art" } } }
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
        filter: { fileAbsolutePath: { regex: "/(projects/art)/" } }
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

      <div>
        <Header>{siteTitle}</Header>
        {results.projectData.edges.length &&
          buildProjectTiles(results.projectData.edges)}

        <LatestBlog data={results.allMarkdownRemark} />
      </div>
    </Layout>
  )
}

export default ArtProjects
