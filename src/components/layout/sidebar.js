import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../../utils/typography"
import { NavItem, Nav } from "../nav"
import MediaQuery from "../../utils/mediaQuery"

const Wrapper = styled.div`
  width: ${rhythm(10)};
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden;

  ${MediaQuery.medium`
    margin: 0;
    padding: 0;
    position: relative;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`

const Branding = styled.div`
  width: ${rhythm(10)};
  height: ${rhythm(10)};
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

export const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      logo: file(absolutePath: { regex: "/mee-cha-logo.png/" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { logo, author } = data
  return (
    <Wrapper>
      <Link to="/">
        <Branding>
          <Image
            fixed={logo.childImageSharp.fixed}
            alt={author}
            style={{
              margin: 0,
            }}
          />
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
