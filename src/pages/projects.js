import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"
import { scale } from "../utils/typography"
import Colors from "../components/colors"
import Header from "../components/header"

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
    title: "Travel",
    description: "A collection of places I've traveled",
    path: "travel",
  },
  {
    title: "Art/Craft",
    description:
      "Drawings, illustrations, watercolor, mixed media, photography, DIY, and all of the creative things",
    path: "art",
  },
  {
    title: "Plants",
    description: "Becoming a responsible plant mom",
    path: "plants",
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
      <Header>{siteTitle}</Header>
      <p>
        The following categories list things that I am practicing, learning, or
        doing! A lot of the content on this site can fit into the categories of:
        code, art, and life. It turns out "Travel" is most of what I do outside
        of the digital and analog.
      </p>
      {ALL_PROJECTS.map(project => (
        <Project project={project} key={project.path} />
      ))}
    </Layout>
  )
}

export default Page
