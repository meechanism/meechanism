import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"
import { NavItem, Nav } from "../nav"
import MediaQuery from "../../utils/mediaQuery"
import colors from "../colors"
import { useScrollPosition } from "../../utils/onScroll"

const LOGO_DATA_URI = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLWN1c3RvbV8xIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJjdXN0b21fMSIgZGF0YS1uYW1lPSJjdXN0b20g4oCTIDEiIGNsaXAtcGF0aD0idXJsKCNjbGlwLWN1c3RvbV8xKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yIiBkYXRhLW5hbWU9IlBhdGggMiIgZD0iTTY3LjI1NywxMTcuOTM2bC00Ljg4LTYuNzQ5TDM5LjA1NCw3OC45MjZTNjEsNjguOTE5LDYwLjgsNTMuNDg0LDUwLjc3MiwzMi4wMDUsMzkuMDU0LDMyLDIxLjI0Niw0MS4yNzMsMjEuNTc2LDUxLjM0NCwzMC44NTQsNjUuNjgxLDM4LjYyLDY1LjE3NnMxMS4xMTYtNC4xLDEwLjk3Mi0xMS42OTItNy43MTMtMTAuNDUzLTExLjM3MS05LjRjLTEuNzE5LjUtNS4zOTUsMS45MTktNS4yLDYuMTM0czUuMDU3LDUuMjc5LDYuNjM5LDQuMzMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcuMjM3IC0yNC45NjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTIxLjU2MywxMTcuOTM2bDQuODgtNi43NDksMjMuMzI0LTMyLjI2UzI3LjgyMyw2OC45MTksMjguMDE3LDUzLjQ4NCwzOC4wNDcsMzIuMDA1LDQ5Ljc2NiwzMnMxNy44MDgsOS4yNzMsMTcuNDc4LDE5LjM0NFM1Ny45NjYsNjUuNjgxLDUwLjIsNjUuMTc2cy0xMS4xMTYtNC4xLTEwLjk3Mi0xMS42OTIsNy43MTMtMTAuNDUzLDExLjM3MS05LjRjMS43MTkuNSw1LjM5NSwxLjkxOSw1LjIsNi4xMzRzLTUuMDU3LDUuMjc5LTYuNjM5LDQuMzMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC40MTcgLTI0Ljk2OCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiLz4KICA8L2c+Cjwvc3ZnPgo=`

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

  ${MediaQuery.medium`
    width: 20px;
    height: 20px;
    background: #000;
    margin: 0;
    .gatsby-image-wrapper {height:0 !important;width:0}
    img { display: none; }
    padding: ${rhythm(1)};
    &:after{
      content: "MC";
      color: #fff;
    }
  `};
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
          <Logo src={LOGO_DATA_URI} />
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
