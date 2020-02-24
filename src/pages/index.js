import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"
import { rhythm } from "../utils/typography"
import colors from "../components/colors"
import { useMousePosition } from "../utils/onMouse"

const PageContainer = styled.div`
  text-align: center;
`

const Text = styled.p`
  margin: 0 0 ${rhythm(1 / 2)};
  text-align: ${props => (props.align ? props.align : "inherit")};
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: ${rhythm(1)};
`

const Hero = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -${rhythm(2)} 0 0;
`

const HeroText = styled.h1`
  font-weight: 800;
  color: transparent;
  font-size: ${rhythm(4)};
  background: ${colors.gray3} url("/hero-bg.jpg");
  background-position: ${props =>
    props.pos ? `${props.pos.x}% ${props.pos.y}%` : "0"};

  -webkit-background-clip: text;
  line-height: ${rhythm(4)};
  letter-spacing: -0.5rem;
  margin: 0 0 ${rhythm(1)};
`

const HeroSubtext = styled.h2`
  font-size: ${rhythm(0.75)};
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;
`

const IndexPage = props => {
  const siteTitle = "Greetings"
  const { data, location } = props
  const { latestBlogs } = data || {}
  const { edges: allBlogs } = latestBlogs

  const [mousePos, setMousePos] = useState(false)

  useMousePosition(
    val => {
      setMousePos(val)
    },
    [mousePos],
    20
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `Mee Cha`,
          `frontend`,
          `full stack developer`,
          `Hmong`,
          `React engineer`,
        ]}
      />
      <PageContainer>
        <Hero>
          <HeroSubtext>Not you, but </HeroSubtext>
          <HeroText pos={mousePos}>Mee Cha</HeroText>
          <HeroSubtext>Nerdy. Curious. Creative.</HeroSubtext>
        </Hero>

        {allBlogs.map(blog => (
          <BlogCard node={blog.node} key={blog.node.fields.slug} />
        ))}

        <Link to="/blog">
          <Text align="center">Read More &#8594;</Text>
        </Link>

        {/* <Wrapper>
          <Link to="projects/art">
            <LinkedCard margin={`0 ${rhythm(1 / 2)} ${rhythm(1 / 2)}`}>
              <h2>Art</h2>
              <Image
                fluid={data.gingko.childImageSharp.fluid}
                alt={`Gingko watercolor`}
                style={{
                  minHeight: 200,
                  minWidth: 200,
                  marginBottom: rhythm(1),
                }}
              />
            </LinkedCard>
          </Link>

          <Link to="projects/code">
            <LinkedCard margin={`0 ${rhythm(1 / 2)} ${rhythm(1 / 2)}`}>
              <h2>Code</h2>
              <Image
                fluid={data.code.childImageSharp.fluid}
                alt={`VS Code screenshot of this website`}
                style={{
                  minHeight: 200,
                  minWidth: 200,
                  marginBottom: rhythm(1),
                }}
              />
            </LinkedCard>
          </Link>
        </Wrapper> */}
      </PageContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    gingko: file(absolutePath: { regex: "/landing-gingko.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    code: file(absolutePath: { regex: "/landing-code.png/" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landingTop: file(absolutePath: { regex: "/landing-top.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    latestBlogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
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
            project
          }
        }
      }
    }
  }
`
