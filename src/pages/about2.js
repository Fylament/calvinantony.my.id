import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-bg">
        <div className="container mx-auto lg:px-60 m:px-20 px-7 py-10">
          <h1 className="font-oswald text-primary">About</h1>
          <div className="font-open-sans text-white text-sm text-justify">
              <p>Calvin is a Computer Science fresh graduate, currently working on improving his knowledge and experience at digital marketing. 
                 Growing up closely with computer and console games, Calvin made technology inseparable from his daily life.  <br></br><br></br>
                 
                 So naturally he went to follow his passion, taking computer science degree and get to focus on artificial intelligence in his study.
                 Nearing the end of his study, Calvin took part as an intern data engineer, assisting multifinance companies in data organization and processing. It was new and exciting for Calvin, but not quite what he's looking for.
                <br></br><br></br>
                It was at the end of 2020 that Calvin got introduced to the field of digital marketing. Started out as another method of building side-hustles on the internet, but quickly became his passion projects. 
                It was the balance of experimentation and ever-growing results that got him hooked in. From then on, buckled with his social media and event marketing experience back in college, as well as his keenness and experience with technology, he sets out on a new journey. 
                The world of digital marketing is a vast world of opportunity. 
                <br></br><br></br>
                Since then it has been constant trials and errors. It began with blogging: researching keywords, finding a prospectable niches and topics, on-page SEO, link building, social media marketing, web development, Content Management System, creating evergreen articles and analytics with ahrefs and google analytics. 
                Later E-commerce platform was also taken under his hood: Email marketing, social media advertisement, google local business, automation, and so on. Focusing on analytics, Calvin has taken Google Analytics Individual Qualification exam to ensure his knowledge has met the required standard.  
                To this day there are still a lot of things to explore. Affiliate program and SEM are among the things yet to be traversed. 
                These untested methods and future opportunities are the main driving forces for his journey.
                <br></br><br></br>
                Calvin recently began documenting his personal projects. He is always interested in a challenge and new opportunities. Reach out to calvin.antony32@gmail.com to connect! opportunities and new connections are very welcomed.
              </p>
          </div>
        </div>
      </div>
  </Layout>
)

export default About
