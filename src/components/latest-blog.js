import React from "react"
import { Link } from "gatsby"

import Card from "./card"

// Annoying we cant have dynamic variables in our graphql queries yet, so
// passing in data for now. https://github.com/gatsbyjs/gatsby/issues/10482
const Component = ({ data }) => {
  const latestPost = data.edges.length
    ? data.edges[0].node
    : null

  return (
    <Card>
      <h4>Latest related blog post</h4>
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
