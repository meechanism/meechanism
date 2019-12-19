import React from "react"
import {Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Colors from '../components/colors'
import {rhythm} from '../utils/typography'

const PageContainer = styled.div`
  text-align: center;
`;

const Text = styled.p`
  margin: 0 0 ${rhythm(1/2)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap ;
  justify-content: center;
  align-items: stretch;
  margin-top: ${rhythm(1)};
`;

const Card = styled.div`
  background: ${Colors.gray1};
  margin: ${props => props.margin ? props.margin: `0 0 ${rhythm(1)}`};
  padding: ${rhythm(1)};
  border-radius: 4px;
  flex-grow: 1;
  text-align: ${props => props.textAlign ? props.textAlign : 'inherit'};
`;

const IndexPage = (props) => {
  const siteTitle = "Oh hello"
  const { data, location } = props
  const { latestBlog } = data || {};

  const { edges } = latestBlog
  const blog = edges.length ? edges[0].node : {};

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`Mee Cha`, `frontend`, `full stack developer`, `Hmong`, `React engineer`]}
      />
      <PageContainer>
        <h1>{siteTitle}</h1>
        <Text>I'm Mee. I play with the digital and analog.</Text>
        <Text>I also record some of my experiences learning.</Text>
        <Text>I hope to continue learning all kinds of things.</Text>

        <Wrapper>
          <Card margin={`0 ${rhythm(1)} ${rhythm(1)} 0`}>
            <h2>Art</h2>
            <Image
              fluid={data.gingko.childImageSharp.fluid}
              alt={`Gingko watercolor`}
              style={{
                marginBottom: rhythm(1 / 2),
              }}
            />
            <Text><Link to="projects/art">View art projects &#8594;</Link></Text>
          </Card>
          <Card>
            <h2>Code</h2>
            <Image
              fluid={data.code.childImageSharp.fluid}
              alt={`VS Code screenshot of this website`}
              style={{
                marginBottom: rhythm(1 / 2),
              }}
            />
            <Text><Link to="projects/code">View code projects &#8594;</Link></Text>
          </Card>
        </Wrapper>

        <Card textAlign={'left'}>
          <h2>Latest Blog Post</h2>
          <em>{blog.frontmatter.date}</em>
          <h4>{blog.frontmatter.title}</h4>

          <p>{blog.excerpt}</p>
          <Link to={`blog${blog.fields.slug}`}>Continue reading &#8594;</Link>
        </Card>
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
    latestBlog: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 1) {
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
