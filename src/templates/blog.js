import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHero from "../components/landingHero"
import BlogRoll from "../components/blogRoll"
import FeaturedBlog from "../components/featuredBlog"
import Resume from "../components/resume"

const Blog = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-bg h-full w-full pt-10">
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />  */}
      <div className="w-full h-full">
        <div className="container mx-auto px-5 grid-cols-12 grid">
            <div className="blog col-span-12 lg:col-span-9 xl:col-span-7 mx-5">
              <h1 className="font-oswald text-xl text-white font-light">Blog</h1>
              <BlogRoll/>
            </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`