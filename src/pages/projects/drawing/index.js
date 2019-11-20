import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const Drawing = props => {
  const { location } = props
  const siteTitle = "Watercolors"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />

      <div>
        <h1>{siteTitle}</h1>
        <p>Need to get in touch with me?</p>
      </div>
    </Layout>
  )
}

export default Drawing
