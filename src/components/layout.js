import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Sidebar from "./layout/sidebar"
import GlobalStyle from "./globalStyles"
import MediaQuery from '../utils/mediaQuery'

class Layout extends React.Component {
  render() {
    const { children, footerCredit } = this.props;
    return (
      <Wrapper>
        <GlobalStyle />
        <Sidebar />
        <Container>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}. Built and maintained by Mee.
            {footerCredit && footerCredit}
          </Footer>
        </Container>
      </Wrapper>
    )
  }
}

const Container = styled.div`
  margin: 0 0 0 ${rhythm(12)};
  max-width: ${rhythm(28)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  position: relative;

  ${MediaQuery.medium`
    margin: ${rhythm(1)} 0 0;
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
