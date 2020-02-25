import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { Pill, PillBox } from "../components/pill"
import { rhythm } from "../utils/typography"
import Colors from "../components/colors"

const ImageWrapper = styled.div`
  float: left;
`

const TextJustify = styled.p`
  text-align: justify;
`

const Ramhorn = styled.img`
  margin: 0 0 1rem;
  width: ${rhythm(5)};
  height: ${rhythm(5)};
`
const Center = styled.div`
  text-align: center;
`

// class About extends React.Component {
const About = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Mee" />
      <Header>Who am I?</Header>

      <ImageWrapper>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={"Photo of Mee Cha"}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 150,
          }}
          imgStyle={{
            borderRadius: `4px`,
          }}
        />
      </ImageWrapper>

      <TextJustify>
        I'm <em>Mee</em>, a first generation Hmong-American software engineer
        focusing on frontend. My background is in computer science and I
        currently live and work in the San Francisco Bay Area.
      </TextJustify>

      <TextJustify>
        I enjoy creating awesome UI/UX interfaces and learning the latest
        frontend technologies.
      </TextJustify>

      <TextJustify> My favorite devy things right now:</TextJustify>
      <PillBox>
        <Pill background={Colors.g1}>JavaScript/TypeScript</Pill>
        <Pill background={Colors.g1}>React + Hooks</Pill>
        <Pill background={Colors.g1}>Styled Components</Pill>
        <Pill background={Colors.g2}>VS Code</Pill>
        <Pill background={Colors.g2}>Git</Pill>
        <Pill background={Colors.g2}>HTML/CSS</Pill>
        <Pill background={Colors.g2}>UX/Accessibility</Pill>
        <Pill background={Colors.g3}>NodeJs/Express</Pill>
        <Pill background={Colors.g3}>Apollo/GraphQL</Pill>
        <Pill background={Colors.g4}>CI/CD</Pill>
      </PillBox>

      <TextJustify>
        My roots are video games and anime. I like to draw and paint when I am
        not coding away. But I also love reading sci-fi and fantasy.
      </TextJustify>

      <TextJustify>
        When I grow up, I want to run a bed and breakfast in a remote location.
        I will have chickens in the back yard and a fruitful garden to tend.
      </TextJustify>

      <h2>Code and Art</h2>

      <TextJustify>
        I'm no graphic designer, but if I had to complement my development with
        something, it would be design. I like dabbling with traditional and
        analog mediums (graphite, inks, paints), but I'm not traditionally
        trained and only practice for fun, relaxation, and general happiness.
      </TextJustify>

      <ImageWrapper>
        <Image
          fixed={data.watercolor.childImageSharp.fixed}
          alt={"Watercolor swatches"}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 300,
          }}
          imgStyle={{
            borderRadius: `4px`,
          }}
        />
      </ImageWrapper>

      <TextJustify>
        With a brain that thinks logically most of the day, my hands render very
        stiffly. I may be confining myself to artificial rules of perfection and
        boundaries. I have a hard time accepting this rigid style which is one
        of the primary reasons why I started experimenting with watercolor.
      </TextJustify>

      <TextJustify>
        Its nature is to flow organically. I love the loose expressive look, but
        it hurts the logical side of my brain to produce that style.
      </TextJustify>

      <h2>Logo</h2>
      <TextJustify>
        The graphic is a traditional Hmong motif of a <em>ram horn</em> and is
        usually found on embroidery. Why a ram? I like to think of myself as
        resilient and being found in unlikely places. I tend to find myself in
        predominately male spaces: engineering, the gym, and video game spaces.
      </TextJustify>

      <Center>
        <Ramhorn src="/ramhorn.svg" />
      </Center>
      <TextJustify>
        Why a ram? I like to think of myself as resilient and being found in
        unlikely places. I tend find myself in predominately male spaces:
        engineering, the gym, and video game spaces.
      </TextJustify>

      <h2>Life Methodologies</h2>

      <Image
        fluid={data.cactus.childImageSharp.fluid}
        alt={"Close up of potted cactus"}
        style={{
          margin: rhythm(1 / 2),
        }}
        imgStyle={{
          borderRadius: `4px`,
        }}
      />
      {/* https://www.pexels.com/@scottwebb */}

      <TextJustify>
        Whether encountering a conundrum or determining what to do next, it's
        always nice to refer to some set of beliefs that help shape and define
        who you are. The following generally describe me as a person:
      </TextJustify>
      <ul>
        <li>
          Solutions should be simple and concise: find the path of least
          resistance and reduce complexity!
        </li>
        <li>
          Strive to be a good human to others, your surroundings, and the earth:
          help those in need!
        </li>
        <li>You only have one body and mind: take care of yourself!</li>
        <li>
          Never stop learning: you are a student and there's always something to
          learn!
        </li>
      </ul>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic3.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 218) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    watercolor: file(absolutePath: { regex: "/watercolor-swatch.jpg/" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    cactus: file(absolutePath: { regex: "/botanical-cactus.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
