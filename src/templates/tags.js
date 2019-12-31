import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import { rhythm } from "../utils/typography"

const Date = styled.span`
  display: inline-block;
  font-family: monospace;
  margin-right: ${rhythm(1)};
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

List.Li = styled.li`
  margin: 0;
`


// Components
const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout location={location} title={tagHeader}>
      <h1>{tagHeader}</h1>
      <List>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date } = node.frontmatter
          return (
            <List.Li key={slug}>
              <Date>{date}</Date> <Link to={`blog${slug}`}>{title}</Link>
            </List.Li>
          )
        })}
      </List>
      <Link to="/tags">
        <Button marginTop="35px">View all tags</Button>
      </Link>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date (formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
