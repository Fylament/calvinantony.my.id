import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from "./previewCompatibleImage"


class BlogRoll extends React.Component{
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        return(
            <div className="">
                {posts && posts.map(({ node: post }) => (
                    <div key={post.id} className="mb-5 border p-3 border-transparent rounded-lg ring-yellow-500 ring-4 ring-opacity-20 ring-offset-1 ring-offset-yellow-500 grid grid-cols-4">
                        {post.frontmatter.featuredimage ? (
                            <div className="featured-thumbnail w-full col-span-1 ">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.featuredimage,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                          ) : null}
                        <div className="col-span-3 ml-5">
                          <Link to={post.fields.slug}>
                            <h2 className="font-oswald text-base font-normal text-primary mb-0">{post.frontmatter.title}</h2>
                          </Link>
                          <p className="font-open-sans text-xs font-light text-white mb-0">{post.excerpt}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        );
    }
}


BlogRoll.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }
  
export default () => (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { in: ["blog-post", "guides-post", "review-post", "news-post"] } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 140)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM D, YYYY")
                  featuredimage {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRoll data={data} count={count} />}
    />
  )