import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"
import { NavItem, Nav } from "../nav"
import MediaQuery from "../../utils/mediaQuery"
import colors from "../colors"
import { useScrollPosition } from "../../utils/onScroll"

const Wrapper = styled.div`
  background: ${colors.white};
  border-bottom: ${props => (props.isScrolled ? 1 : 0)}px solid ${colors.gray2};
  box-sizing: border-box;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: ${rhythm(0.25)};
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 2;

  ${MediaQuery.medium`
    padding: 0;
    margin: 0;
  `};
`

const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0;
  border: 0;
`
const Logo = styled.img`
  border-radius: 4px;
  margin: 0 ${rhythm(0.5)} 0 0;
  padding: 2px;
  width: ${rhythm(1.75)};
  height: ${rhythm(1.75)};

  &:hover {
    opacity: 1;
    background: ${colors.primary};
  }

  ${MediaQuery.medium`
    margin:  0 0 0 ${rhythm(0.25)};
    width: ${rhythm(1)};
    height: ${rhythm(1)};
  `};
`

export const Sidebar = () => {
  const [isScrolled, setScrolled] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      setScrolled(currPos.y > 0)
    },
    [isScrolled],
    null,
    true,
    300
  )

  return (
    <Wrapper isScrolled={isScrolled}>
      <Link to="/">
        <Branding>
          <Logo src="/ramhorn.svg" />
        </Branding>
      </Link>

      <Nav>
        <Link to="/about/" activeClassName="active">
          <NavItem>About</NavItem>
        </Link>

        <Link to="/blog/" activeClassName="active">
          <NavItem>Blog</NavItem>
        </Link>

        <Link to="/projects/" activeClassName="active">
          <NavItem>Projects</NavItem>
        </Link>

        <Link to="/contact/" activeClassName="active">
          <NavItem>Contact</NavItem>
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default Sidebar
