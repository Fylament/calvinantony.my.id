import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from 'gatsby'


class BlogRoll extends React.Component{
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        return(
            <div className="">
                {posts && posts.map(({ node: post }) => (
                    <div key={post.id} className="mb-5">
                        <h2 className="font-oswald text-base font-normal text-primary mb-0">{post.frontmatter.title}</h2>
                        <p className="font-open-sans text-xs font-light text-white mb-0">{post.excerpt}</p>
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
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRoll data={data} count={count} />}
    />
  )