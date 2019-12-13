import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/tagList"
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

const BlogPostTemplate = props => {
  const { data, location } = props
  const { markdownRemark: post, site } = data
  const { frontmatter } = post
  const siteTitle = site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <Title>{frontmatter.title}</Title>
      {frontmatter.date && <Date>{frontmatter.date}</Date>}

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      <TagList tags={frontmatter.tags} />
      <Bio />

      <ul
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
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
  }
`
