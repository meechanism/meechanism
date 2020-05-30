import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { LinkedCard } from "./card"
import Colors from "./colors"
import MediaQuery from "../utils/mediaQuery"
import { rhythm } from "../utils/typography"

const TopWrapper = styled.div`
  display: flex;
`

const Desc = styled.div`
  margin: ${props => (props.hasImg ? `${rhythm(0.5)} 0 0` : 0)};
`

const ImgWrapper = styled.div`
  box-sizing: content-box;
  max-width: 150px;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  background: ${Colors.white};
  padding: 4px;
  border-radius: 2px;
  border: 4px solid ${Colors.gray1};
  margin: 0 ${rhythm(1)} ${rhythm(1)} 0;

  ${MediaQuery.medium`
    max-width: 100px;
  `};

  ${MediaQuery.small`
    margin: 0 ${rhythm(0.5)} ${rhythm(0.5)} 0;
  `};
`

export default ({ node }) => (
  <Link to={`/blog${node.fields.slug}`}>
    <LinkedCard textAlign={"left"}>
      <TopWrapper>
        {node.frontmatter.featuredImage && (
          <ImgWrapper>
            <Image
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              alt={node.frontmatter.title}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 150,
              }}
            />
          </ImgWrapper>
        )}
        <Desc hasImg={undefined !== node.frontmatter.featuredImage}>
          <em>{node.frontmatter.date}</em>
          <h4>{node.frontmatter.title}</h4>
          <p>{node.excerpt}</p>
        </Desc>
      </TopWrapper>
    </LinkedCard>
  </Link>
)
