import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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

const Contact = ({ location }) => {
  const siteTitle = "Oh hi"
  const data = useStaticQuery(graphql`
    query {
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
  `)

  const { site } = data
  const { siteMetadata } = site
  const { social } = siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
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
              <a href={social[currSocial]}>{social[currSocial]}</a>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default Contact
