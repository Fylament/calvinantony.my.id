import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="bg-bg">
        <div className="container mx-auto lg:px-40 m:px-20 px-7">
          <h1 className="font-oswald text-primary">{post.frontmatter.title}</h1>
          <div className="font-open-sans text-white text-sm" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}


BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`