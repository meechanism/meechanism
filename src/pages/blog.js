import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Colors from "../components/colors"
import Card from "../components/card"

const BlogHeader = styled.h3`
  margin: 0 0 ${rhythm(1 / 4)} 0;
  font-weight: normal;
  color: ${Colors.primary};
`

const BlogEntry = styled.article`
  border-radius: 4px;
  color: ${Colors.black};
  background: transparent;
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  margin: 0 0 ${rhythm(1)};

  position: relative;
  transition background 0.25s ease-in-out;
  &:hover {
    background: ${Colors.gray1};
  }
  p {
    margin: 0;
  }
  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    content: "";
    background-color: ${Colors.gray2};
  }

`

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

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
    <Card>
      <h3>Projects</h3>
      {list.map(project => (
        <span key={project}>{project} </span>
      ))}
    </Card>
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

      <h2>All Posts</h2>
      <PostWrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={`blog${node.fields.slug}`} key={node.fields.slug}>
              <BlogEntry>
                <BlogHeader>{title}</BlogHeader>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </BlogEntry>
            </Link>
          )
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
