import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import BlogCard from '../components/blog-card'

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const getProjectsByPosts = posts => {
  const projects = posts.map(post => {
    let projectName = post.node.frontmatter.project
    if (undefined === projectName || "" === projectName) {
      projectName = "Other"
    }
    return projectName
  })

  return projects.filter(onlyUnique)
}

const ProjectList = ({ list }) => {
  return (
    <>
      <h2>Filters</h2>
      {list.map(project => (
        <span key={project}>{project} </span>
      ))}
    </>
  )
}

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
      <h1>Blog</h1>
      <Bio />
      {/* <ProjectList list={getProjectsByPosts(posts)} /> */}

      <Wrapper>
        <h2>All Posts</h2>
        <Link to="tags"><Button>View all tags</Button></Link>
      </Wrapper>

      <PostWrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (<BlogCard node={node}/>)
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
      filter: {fileAbsolutePath: {regex: "/(blog)/"}},
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
          }
        }
      }
    }
  }
`
