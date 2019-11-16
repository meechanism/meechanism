import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends React.Component {
  render() {
    const siteTitle = "Projects"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />

        <h1>{siteTitle}</h1>
        <p>This area is work in progress. Come back soon for updates!</p>
      </Layout>
    )
  }
}

export default Page
