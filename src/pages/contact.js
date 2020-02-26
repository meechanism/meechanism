import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ReactComment from "../components/react-comment"
import Header from "../components/header"

const NodeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${rhythm(0.6)};
  margin: 0;
`

const ContactAnchor = styled.a`
  box-shadow: 0 0;
  &:hover {
    opacity: 0.5;
  }
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

const IconCredit = () => (
  <p>
    Icons made by{" "}
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
      Freepik
    </a>{" "}
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      flaticon.com
    </a>
  </p>
)

const Contact = ({ location, data }) => {
  const siteTitle = "Contact"

  const { site } = data
  const { siteMetadata } = site
  const { social } = siteMetadata

  return (
    <Layout location={location} title={siteTitle} footerCredit={<IconCredit />}>
      <SEO title={siteTitle} />
      <Header>Contact</Header>
      <p>Need to get in touch with me? </p>

      <NodeWrapper>
        <Image
          fixed={data.email.childImageSharp.fixed}
          alt={`Email icon`}
          style={{
            margin: `${rhythm(0.5)} ${rhythm(1)} ${rhythm(0.5)} 0`,
            minWidth: 50,
          }}
        />
        <Email />
      </NodeWrapper>

      {Object.keys(social).map(currSocial => (
        <ContactAnchor
          href={social[currSocial]}
          key={currSocial}
          title={currSocial}
        >
          <Image
            fixed={data[currSocial].childImageSharp.fixed}
            alt={`${currSocial} icon`}
            style={{
              margin: `${rhythm(0.5)} ${rhythm(1)} ${rhythm(0.5)} 0`,
            }}
          />
        </ContactAnchor>
      ))}
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
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
    linkedin: file(absolutePath: { regex: "/contact-icons/linkedin/" }) {
      childImageSharp {
        fixed(width: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    github: file(absolutePath: { regex: "/contact-icons/web/" }) {
      childImageSharp {
        fixed(width: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    instagram: file(absolutePath: { regex: "/contact-icons/instagram/" }) {
      childImageSharp {
        fixed(width: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    email: file(absolutePath: { regex: "/contact-icons/email/" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
