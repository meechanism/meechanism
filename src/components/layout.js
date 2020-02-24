import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import MainMenu from "./layout/mainMenu"
import GlobalStyle from "./globalStyles"
import MediaQuery from "../utils/mediaQuery"

const Layout = ({ children, footerCredit }) => (
  <Wrapper>
    <GlobalStyle />
    <MainMenu />
    <Container>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}. Built and maintained by Mee.
        {footerCredit && footerCredit}
      </Footer>
    </Container>
  </Wrapper>
)

const Container = styled.div`
  margin: ${rhythm(2)} auto;
  max-width: ${rhythm(28)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  position: relative;

  ${MediaQuery.medium`
    margin: ${rhythm(2)} 0 0;
    padding: ${rhythm(0.5)};
    max-width: 100%;
  `};
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: ${rhythm(2)} ${rhythm(1)} ${rhythm(1)};
  font-size: ${rhythm(0.5)};
`

export default Layout
