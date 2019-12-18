import React from "react"
import {  graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Colors from "../components/colors"

const Title = styled.h1`
  margin: 0 0 ${rhythm(1 / 4)} 0;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  color: ${Colors.black};
  ${scale(0.85)};
`

const Date = styled.p`
  ${scale(0.05)};
`

const ProjectPostTemplate = props => {
  const { data, location } = props
  const { markdownRemark: post, site } = data
  const { frontmatter } = post
  const siteTitle = site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <Title>Project: {frontmatter.title}</Title>
      {frontmatter.date && <Date>Written: {frontmatter.date}</Date>}

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      {/* Fixme: separate blog and project tags */}
      {/* <TagList tags={frontmatter.tags} /> */}

      {/* <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`projects${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`projects${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul> */}
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
