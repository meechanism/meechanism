import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Card from "./card"
import { rhythm } from "../utils/typography"
import MediaQuery from "../utils/mediaQuery"

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`
List.Li = styled.li`
  margin: 0;
`

const Meta = styled.span`
  display: inline-block;
  font-family: monospace;
  margin-right: ${rhythm(1)};
  text-transform: uppercase;

  ${MediaQuery.medium`
    display: block;
  `};
`

const TYPE_TO_URL_MAP = {
  project: "projects",
  blog: "blog",
}

// Annoying we cant have dynamic variables in our graphql queries yet, so
// passing in data for now. https://github.com/gatsbyjs/gatsby/issues/10482
const ListPosts = ({ data, label = "Related blog posts" }) => {
  const allPosts = data.edges
  return (
    <Card>
      <h4>{label}</h4>
      <List>
        {allPosts.map(edge => {
          const type = edge.node.frontmatter.type
            ? edge.node.frontmatter.type
            : "blog"
          const mappedUrl = TYPE_TO_URL_MAP[type]

          const date = edge.node.frontmatter.date
          let meta = "Post"
          if (date) meta = date
          else if (type) meta = type

          return (
            <List.Li key={edge.node.fields.slug}>
              <Meta>{meta}</Meta>{" "}
              <Link to={`/${mappedUrl}${edge.node.fields.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </List.Li>
          )
        })}
      </List>
    </Card>
  )
}

export default ListPosts
