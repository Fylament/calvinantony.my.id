import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>test page</h1>
    <p>Welcome to page X</p>
    <Link to="/page-2">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
