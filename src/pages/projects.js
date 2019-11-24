import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"
import { scale } from "../utils/typography"
import Colors from "../components/colors"

const Title = styled.h2`
  ${scale(0.5)};
  margin: 0;
  font-weight: normal;
  text-transform: uppercase;
`

const Desc = styled.p`
  color: ${Colors.black};
  margin: 0;
`

const ALL_PROJECTS = [
  {
    title: "Code",
    description: "Coding projects and supplemental programming material",
    path: "code",
  },
  {
    title: "Drawing",
    description: "Drawings, illustrations, doodles, and all of the above.",
    path: "drawing",
  },
  {
    title: "Travel",
    description: "A collection of places I've traveled",
    path: "travel",
  },
  {
    title: "Watercolor",
    description: "My watercolor journey learning and stumbles along the way",
    path: "watercolor",
  },
]

const Project = ({ project }) => {
  return (
    <Link to={`projects/${project.path}/`}>
      <Card linked>
        <Title>{project.title}</Title>
        <Desc>{project.description}</Desc>
      </Card>
    </Link>
  )
}

const Page = props => {
  const { location } = props
  const siteTitle = "Projects"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>{siteTitle}</h1>
      <p>
        The following categories list things that I am practicing, learning, or
        doing!
      </p>
      {ALL_PROJECTS.map(project => (
        <Project project={project} key={project.path} />
      ))}
    </Layout>
  )
}

export default Page
