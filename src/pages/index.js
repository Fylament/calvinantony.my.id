import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHero from "../components/landingHero"
import BlogRoll from "../components/blogRoll"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-bg h-full w-full">
      <LandingHero/>
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />  */}
      <div className="w-full h-96">
        <div className="container mx-auto px-5 grid-cols-2 grid">
            <div className="blog col-span-1 mx-5">
              <h1 className="font-oswald text-xl text-white font-light">Blog</h1>
              <BlogRoll/>
            </div>
            <div className="projects col-span-1 mx-5">
              <h1 className="font-oswald text-xl text-white font-light">Projects</h1>
              <BlogRoll/>
            </div>
            
        </div>
      </div>

    </div>
    
    <div>
      
    </div>
  </Layout>
)

export default IndexPage

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