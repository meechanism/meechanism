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
  text-align: ${props => props.align ? props.align : 'inherit'};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap ;
  justify-content: center;
  align-items: stretch;
  margin-top: ${rhythm(1)};
`;

const Card = styled.div`
  border-bottom: 2px solid transparent;
  ${props => props.background ? props.background : `background: ${Colors.gray1}`};
  transition: border-bottom 0.25s ease-in-out;
  border-radius: 4px;

  margin: ${props => props.margin ? props.margin: `0 0 ${rhythm(1)}`};
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(0)};
  flex-grow: 1;
  text-align: ${props => props.textAlign ? props.textAlign : 'inherit'};
  color: ${props => props.color ? props.color : Colors.black};

  ${props => props.unlinked ? null : `&:hover {
    border-bottom: 2px solid ${Colors.primary};

    h2, h4, em {
      color: ${Colors.primary};
    }`}
  }
`;

const IndexPage = (props) => {
  const siteTitle = "Greetings"
  const { data, location } = props
  const { latestBlogs } = data || {};
  const { edges: allBlogs } = latestBlogs

  console.log("data: ", data.landingTop.childImageSharp.fluid)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`Mee Cha`, `frontend`, `full stack developer`, `Hmong`, `React engineer`]}
      />
      <PageContainer>
        <Card unlinked color={Colors.white} background={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(100, 55, 55, 0.5)),
          url("${data.landingTop.childImageSharp.fluid.src}"); background-size: cover;`}>
          <h1>{siteTitle}</h1>
          <Text>I'm Mee. I build things. </Text>
          <Text>I play with the digital and analog.</Text>
          <Text>I'm curious. I learn. I write.</Text>
        </Card>

        {allBlogs.map(blog =>
          <Link to={`blog${blog.node.fields.slug}`}>
            <Card textAlign={'left'}>
                <em>{blog.node.frontmatter.date}</em>
                <h4>{blog.node.frontmatter.title}</h4>
                <p>{blog.node.excerpt}</p>
                {/* Continue reading &#8594; */}
            </Card>
          </Link>
        )}

        <Link to="blog">
          <Text align="right">Read More &#8594;</Text>
        </Link>

        <Wrapper>
          <Link to="projects/art"><Card margin={`0 ${rhythm(1)} ${rhythm(1)} 0`}>
            <h2>Art</h2>
            <Image
              fluid={data.gingko.childImageSharp.fluid}
              alt={`Gingko watercolor`}
              style={{
                minHeight: 200,
                minWidth: 200,
                marginBottom: rhythm(1)
              }}
            />
          </Card></Link>

          <Link to="projects/code"><Card>
            <h2>Code</h2>
            <Image
              fluid={data.code.childImageSharp.fluid}
              alt={`VS Code screenshot of this website`}
              style={{
                minHeight: 200,
                minWidth: 200,
                marginBottom: rhythm(1)
              }}
            />
          </Card></Link>
        </Wrapper>
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
    latestBlogs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
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
