import * as React from "react"
import PropTypes from "prop-types"
import BackgroundImage from 'gatsby-background-image'
import { Link, graphql, useStaticQuery } from 'gatsby'



const LandingHero = () => {
    const data = useStaticQuery(graphql`
    query {
        background: file(relativePath: { eq: "landing.jpg" }) {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
        }
    }
    `)
        const imageData = data.background.childImageSharp.fluid
        return(
            <div className="featured">
                <div className="w-full lg:h-96 h-60 featured-bg">
                    <BackgroundImage
                    className = "h-full"
                    fluid={imageData}
                    >
                    <div className="w-full h-full mx-auto px-5 text-center ">
                        <h1 className="relative top-1/3 font-oswald font-thin text-white text-base lg:text-2xl text-white px-5 justify-center">
                            Hello! I'm Calvin.<br/>
                            My work revolves around digital marketing and branding.<br/>
                            You can find my own write-ups and development notes here.
                        </h1>
                    </div>
                    </BackgroundImage>
                </div>
            </div>
                
            
        );
    }



export default LandingHero