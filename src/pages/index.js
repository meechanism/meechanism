import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const Wrapper = styled.div``

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Oh hi"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Mee Cha`, `frontend`, `full-stack developer`, `Hmong`]}
        />

        <Wrapper>
          <h1>Oh hi</h1>
          <p>Didn't see you there.</p>
          <Link to="/blog/">
            <Button marginTop="35px">Looking to read?</Button>
          </Link>
          <Link to="/projects/">
            <Button marginTop="35px">See some stuff?</Button>
          </Link>
        </Wrapper>
      </Layout>
    )
  }
}

export default IndexPage
