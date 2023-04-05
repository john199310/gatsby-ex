import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import projects from './../../data/projects'
import Img from 'gatsby-image'

import '../../styles/styles.css'

const ProjectsIndex = props => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: props.data.site.siteMetadata.description,
          },
        ]}
        title={`Projects | ${props.data.site.siteMetadata.title}`}
      />
      <h2>Projects</h2>
      <br />
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Grid fluid>
          <Row>
            {projects.map(project => (
              <Col xs={12} sm={8} md={6} lg={4} key={project.title}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: 10
                  }}
                >
                  <Link
                    className="nav-link"
                    to={'/projects/view'}
                    state={project}
                    key={project.title}
                  >
                    {project.title}
                  </Link>
                  <Img
                    style={{
                      width: 250,
                      height: 200,
                      margin: 10,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                    }}
                    fluid={props.data[project.imageTag].childImageSharp.fluid}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </Layout>
  )
}

export default ProjectsIndex

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    insights: file(relativePath: { eq: "insights.png" }) {
      ...fluidImage
    }
    lazyFields: file(relativePath: { eq: "lazy-fields.png" }) {
      ...fluidImage
    }
    healthCheck: file(relativePath: { eq: "health-check.png" }) {
      ...fluidImage
    }
    comingSoon: file(relativePath: { eq: "coming-soon.png" }) {
      ...fluidImage
    }
    yeoman: file(relativePath: { eq: "yeoman.png" }) {
      ...fluidImage
    }
  }
`
