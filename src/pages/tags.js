import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import StringUtil from "../utils/string"

const List = styled.ul`
  margin: 0;
`

List.Li = styled.li`
  margin: 0;
`

const TagsPage = ({
  data: {
    location,
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <Layout location={location} title={title}>
      <Header>Tags</Header>
      <p>
        Each blog post is categorized by a list of tags. The entire tags list is
        here to help you filter out posts by the content that interests you.
      </p>
      <List>
        {group.map(tag => (
          <List.Li key={tag.fieldValue}>
            <Link to={`/tags/${StringUtil.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </List.Li>
        ))}
      </List>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
