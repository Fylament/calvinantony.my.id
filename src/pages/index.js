import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Reveal from "../components/reveal"
import RevealBlogs from "../components/revealBlogs"
import Slider from "../components/slider"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
    <div>
      <div className="a" id="home">
        <Reveal>
          <h1>Hello!</h1>
          <span>
          My name is Calvin. <br></br>
          Previously working as a data engineer, now focusing on developing creative campaigns 
          and exploring digital marketing methods.
          </span>
          <div className="next-button">
          </div>
        </Reveal>
      </div>
      <RevealBlogs>
      <div className="d" id="blogs">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
              >
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
              </Link>
            </div>
          ))}
      </div>
      </RevealBlogs>
      <RevealBlogs>
      <div className="d" id="projects">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
              >
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
              </Link>
            </div>
          ))}
      </div>
      </RevealBlogs>
      <div className="b" 
      data-sal="fade"
      data-sal-easing="ease">section B</div>
      <div className="c" 
      data-sal="slide-up">section C</div>
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