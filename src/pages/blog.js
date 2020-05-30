import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import BlogCard from "../components/blog-card"
import Header from "../components/header"

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PostWrapper = styled.div`
  margin: 20px 0 40px;
`

const Blog = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Header>Blog</Header>
      <Bio />

      <Wrapper>
        <h2>All Posts</h2>
        <Link to="tags">
          <Button>View all tags</Button>
        </Link>
      </Wrapper>

      <PostWrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <BlogCard node={node} key={title} />
        })}
      </PostWrapper>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            project
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
`
