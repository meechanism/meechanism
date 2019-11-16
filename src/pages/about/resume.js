import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Mee's Resume"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Resume</h1>
        <p>my resume here</p>
      </Layout>
    )
  }
}

export default IndexPage
