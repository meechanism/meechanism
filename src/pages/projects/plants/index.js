import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../../components/layout"
import LatestBlog from "../../../components/latest-blog"
import SEO from "../../../components/seo"
import Header from "../../../components/header"
import buildProjectTiles from "../../../components/ProjectTile"

const PlantProjects = props => {
  const { location } = props
  const siteTitle = "Plant Projects"

  const results = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { project: { eq: "plants" } } }
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
        filter: { fileAbsolutePath: { regex: "/(projects/plants)/" } }
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
        <p>
          I've decided to document care instructions for my plants in case
          someone else needs to take care of them when I am away or for myself
          if I need a refresher. They are listed below!
        </p>
        {results.projectData.edges.length &&
          buildProjectTiles(results.projectData.edges)}

        <LatestBlog data={results.allMarkdownRemark} />
      </div>
    </Layout>
  )
}

export default PlantProjects
