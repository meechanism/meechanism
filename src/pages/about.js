import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Mee" />
        <h1>Who am I?</h1>
        <p>
          I'm <em>Mee</em>, a first generation Hmong-American software engineer
          focusing on frontend. My background is in computer science and I
          currently live and work in the San Francisco Bay Area.
        </p>

        <p>
          I enjoy creating awesome UI/UX interfaces and learning the latest
          frontend technologies.
        </p>

        <p>
          My roots are video games and anime. I like to pewpew and paint when I
          have free time. But I also love reading sci-fi and fantasy. I seem to
          like flexing my creative outlets. ;)
        </p>

        <p>
          When I grow up, I want to run a bed and breakfast in a remote
          location. I will have chickens in the back yard and a fruitful garden
          to tend.
        </p>

        <h2>What's with the logo?</h2>
        <p>
          Thanks, glad you noticed my hard work. <em>*cue eyeroll*</em>
        </p>
        <p>
          To be honest, I'm no graphic designer, but if I had to complement my
          development with something, it would be design. I like dabbling with
          the arts (drawing/painting), but I'm not traditionally trained and
          only practice for fun.
        </p>

        <p>
          But with a brain that thinks logically most of the day, my hands
          render in a way that is very stiff, maybe confining myself to
          artificial rules of perfection and boundaries. I have a hard time
          accepting this rigid style. This is why I started experiementing with
          watercolor, since pigment and water color paints organically. I love
          the loose expressive look, but it hurts the logical side of my brain
          to produce that style.
        </p>

        <p>
          The logo/branding is an attempt to mimic my awkward rendering style of
          being a bit stiff and striving organicness. The graphic at the top is
          a traditional Hmong motif of a <em>ram horn</em> and is usually found
          on embroidery. The hand drawn looking webfont is Amatic SC.
        </p>

        <h2>Life Methodologies</h2>
        <p>
          Whether encountering a conundrum or determining what to do next, it's
          always nice to refer to some set of beliefs that help shape and define
          who you are. The following generally describe me as a person:
        </p>
        <ul>
          <li>
            Solutions should be simple and concise: find the path of least
            resistance!
          </li>
          <li>
            Strive to be a good human to others, your surroundings, and the
            earth: help those in need!
          </li>
          <li>You only have one body and mind: take care of yourself!</li>
          <li>
            Never stop learning: you are a student and there's always something
            to learn!
          </li>
        </ul>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
