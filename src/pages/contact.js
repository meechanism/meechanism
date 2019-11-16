import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactComment from "../components/react-comment"

const Wrapper = styled.div``

const SocialName = styled.span`
  text-transform: uppercase;
  display: inline-block;
  margin-right: 5px;
`

// Breaks up email in attempt to block spam bots :|
const Email = () => {
  return (
    <>
      <ReactComment text="Hello" />
      mee
      <ReactComment text="there," />.<ReactComment text="I" />
      cha
      <ReactComment text="hope" />.<ReactComment text="you" />
      nism
      <ReactComment text="are" />@<ReactComment text="enjoying" />
      gmail
      <ReactComment text="yourself" />.<ReactComment text="!" />
      com
    </>
  )
}
class IndexPage extends React.Component {
  render() {
    const siteTitle = "Oh hi"

    return (
      <StaticQuery
        query={contactQuery}
        render={data => {
          const { site } = data
          const { siteMetadata } = site
          const { social } = siteMetadata

          return (
            <Layout location={this.props.location} title={siteTitle}>
              <SEO title="Contact" />

              <Wrapper>
                <h1>Contact</h1>
                <p>Need to get in touch with me?</p>
                <ul>
                  <li>
                    <SocialName>Email: </SocialName> <Email />
                  </li>
                  {Object.keys(social).map(currSocial => (
                    <li key={currSocial}>
                      <SocialName>{currSocial}: </SocialName>
                      <Link to={social[currSocial]}>{social[currSocial]}</Link>
                    </li>
                  ))}
                </ul>
              </Wrapper>
            </Layout>
          )
        }}
      />
    )
  }
}

const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        social {
          linkedin
          github
          instagram
        }
      }
    }
  }
`

export default IndexPage
