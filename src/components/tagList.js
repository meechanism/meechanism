import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Colors from "./colors"
import { rhythm } from "../utils/typography"
import StringUtil from "../utils/string"

const Wrapper = styled.div`
  text-transform: uppercase;
`

const LinkWrapper = styled.span`
  font-size: ${rhythm(0.5)};
  display: inline-block;
  margin: 0 ${rhythm(1 / 8)} ${rhythm(1)};
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 4)};
  background: ${Colors.gray1};

  a {
    color: ${Colors.black};
    box-shadow: 0 0;

    &:hover {
      opacity: 0.5;
    }
  }
`

export default ({ tags }) => {
  return (
    <Wrapper>
      Tags:
      {tags.map(tag => (
        <LinkWrapper key={tag}>
          <Link to={`/tags/${StringUtil.kebabCase(tag)}/`}>{tag}</Link>
        </LinkWrapper>
      ))}
    </Wrapper>
  )
}
