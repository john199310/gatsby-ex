import React from 'react'
import { graphql } from 'gatsby'
import Hemlet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import './index.css'

const SiteIndex = props => (
  <Layout>
    <div className="layout-default">
      <Hemlet>
        <title>{props.data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={props.data.site.siteMetadata.description}
        />
      </Hemlet>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Img
          style={{
            width: 400,
            borderRadius: 4,
          }}
          fluid={props.data.ryan.childImageSharp.fluid}
          alt={props.data.site.siteMetadata.title}
        />
      </div>
      <div className="text-section">
        <div className="header-style">
          Hi! I'm Ryan. I'm a software developer, <br /> coffee lover, &
          tinkerer.
        </div>
        <div className="brief-description">
          I love the ability to see my vision become a reality, whether that's
          something to save me keystrokes or something to generate code for
          work, I love to optimize. Stripping the problem to the essentials is
          what I love. I also love to help teach whenever I can, so if you want
          a mentor, hit me up. I'd love to help!
          <br />
          <br />
          Since you made it here, here's a{' '}
          <a href="https://media.tenor.com/images/00760d23371272db216da7919ce7c884/tenor.gif">
            gif!
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    ryan: file(relativePath: { eq: "ryan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
