/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

// Useful for blog posts
const Bio = props => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic2.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            instagram
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <Container>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who is probably twiddling her
        thumbs wondering what's next on the menu.
        {` `}
        <a href={`${social.github}`}>Github</a> | {` `}
        <a href={`${social.linkedin}`}>LinkedIn</a> | {` `}
        <a href={`${social.instagram}`}>Instagram</a>
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default Bio
