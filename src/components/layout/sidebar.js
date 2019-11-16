import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"
import { NavItem, Nav } from "../nav"

const Wrapper = styled.div`
  width: ${rhythm(10)};
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
`

const Branding = styled.div`
  width: ${rhythm(10)};
  height: ${rhythm(10)};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0;
  border: 0;
  img {
    width: ${rhythm(9)};
    opacity: 1;
    transition: opacity 0.5s ease;
    &:hover {
      opacity: 0.5;
    }
  }
`

export const Sidebar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Branding>
          <img
            style={{ margin: 0 }}
            src="/mee-cha-logo.png"
            alt="Mee Cha logo"
          />
        </Branding>
      </Link>

      <Nav>
        <Link to="/about/">
          <NavItem>About</NavItem>
        </Link>

        <Link to="/projects/">
          <NavItem>Projects</NavItem>
        </Link>

        <Link to="/blog/">
          <NavItem>Articles</NavItem>
        </Link>

        <Link to="/contact/">
          <NavItem>Contact</NavItem>
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default Sidebar
