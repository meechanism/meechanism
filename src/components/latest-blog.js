import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Card from "./card"
import { rhythm } from "../utils/typography"

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

List.Li = styled.li`
  margin: 0;
`

const Date = styled.span`
  display: inline-block;
  font-family: monospace;
  margin-right: ${rhythm(1)};

`

// Annoying we cant have dynamic variables in our graphql queries yet, so
// passing in data for now. https://github.com/gatsbyjs/gatsby/issues/10482
const LatestBlogPosts = ({ data }) => {
  const allPosts = data.edges;
  return (
    <Card>
      <h4>Related blog posts</h4>
      <List>
        {allPosts.map(edge =>
          <List.Li key={edge.node.fields.slug}>
          <Date>{edge.node.frontmatter.date}</Date> <Link to={`blog${edge.node.fields.slug}`}>
            {edge.node.frontmatter.title}
          </Link></List.Li>
        )}
      </List>
    </Card>
  )
}

export default LatestBlogPosts
