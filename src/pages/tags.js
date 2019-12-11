import React from "react"
import { Link, graphql } from "gatsby"

// Utilities
import Layout from "../components/layout"
import StringUtil from "../utils/string"

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
      <h1>Tags</h1>
      <p>
        Each blog post is categorized by a list of tags. The entire tags list is
        here to help you filter out posts by the content that interests you.
      </p>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${StringUtil.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
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