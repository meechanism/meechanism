import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Sidebar from "./layout/sidebar"
import GlobalStyle from "./globalStyles"

class Layout extends React.Component {
  render() {
    const { location, title, children, footerCredit } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <h1
    //       style={{
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={location.pathname === blogPath ? `/blog/` : `/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/blog/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <Wrapper>
        <GlobalStyle />
        <Sidebar />
        <Container>
          {/* <header>{header}</header> */}
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
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  position: relative;
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-size: ${rhythm(0.5)};
`

export default Layout
