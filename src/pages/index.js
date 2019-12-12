import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div``

const IndexPage = ({location}) => {
  const siteTitle = "Oh hi"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`Mee Cha`, `frontend`, `full-stack developer`, `Hmong`]}
      />

      <Wrapper>
        <h1>Oh hello</h1>
        <p>Didn't see you there.</p>
        <ul>
          <li><Link to="/blog/">Looking to read?</Link></li>
          <li><Link to="/projects/">Want to browse some projects?</Link></li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
