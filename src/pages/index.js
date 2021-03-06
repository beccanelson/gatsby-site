import { graphql } from "gatsby"
import React from "react"
import About from "../components/about"
import Blog from "../components/writing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Appearances from "../components/appearances"
import Contact from "../components/contact"
import ModalProvider from "../containers/modal-provider"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <ModalProvider>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`becca`, `javascript`, `software engineer`]}
          />
          <About />
          <Appearances />
          <Blog />
          <Contact />
        </Layout>
      </ModalProvider>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
