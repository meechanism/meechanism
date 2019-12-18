import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'

import Colors from './colors'
import {rhythm} from '../utils/typography'

const Wrapper = styled.article`
    background: transparent;
    border-radius: 4px;
    color: ${Colors.black};
    display: flex;
    padding: 0;
    margin: 0 0 ${rhythm(1)};

    position: relative;
    transition: background 0.25s ease-in-out;
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

const ImgWrapper = styled.div`
    background: #ddd;
    min-width: 100px;
    max-width: 100px;
`

const Details = styled.div`
    padding:  ${rhythm(1 / 2)} ${rhythm(1)};
`

// Annoying we cant have dynamic variables in our graphql queries yet, so
// passing in data for now. https://github.com/gatsbyjs/gatsby/issues/10482
const ProjectTile = ({ data }) => {
  return (
    <Link to={`projects${data.fields.slug}`} key={data.fields.slug}>

    <Wrapper>
    {data.frontmatter.image &&
      <ImgWrapper>
        <Image
          fixed={data.frontmatter.image.childImageSharp.fixed}
          alt={data.frontmatter.title}
          style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 150,
          }}
          imgStyle={{
              borderRadius: `4px`,
          }}
          />
      </ImgWrapper>
      }

      <Details>
          <h3>{data.frontmatter.title}</h3>
          <em>{data.frontmatter.date}</em>
          <p>{data.frontmatter.description}</p>
      </Details>
    </Wrapper>
    </Link>
  )
}

const buildProjectTiles = (projectNodes) => {
    return projectNodes.map(project => <ProjectTile key={project.node.fields.slug} data={project.node}/>)
  }

export default buildProjectTiles
