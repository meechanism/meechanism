import React from "react"
import { Link } from "gatsby"

import Card from "./card"

// Annoying we cant have dynamic variables in our graphql queries yet, so
// passing in data for now. https://github.com/gatsbyjs/gatsby/issues/10482
const Component = ({ data }) => {
  const latestPost = data.allMarkdownRemark.edges.length
    ? data.allMarkdownRemark.edges[0].node
    : null

  return (
    <Card>
      <h3>Latest related blog post</h3>
      {latestPost ? (
        <Link to={`blog${latestPost.fields.slug}`}>
          {latestPost.frontmatter.title}
        </Link>
      ) : (
        "None"
      )}
    </Card>
  )
}

export default Component
