import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import { rhythm } from '../../utils/typography';

const BlogIndex = (props) => (
  <Layout location={props.location} title={props.data.site.siteMetadata.title}>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: props.data.site.siteMetadata.description }]}
      title={`Blog | ${props.data.site.siteMetadata.title}`}
    />
    <h2>Blog</h2>
    {props.data.allMarkdownRemark.edges.map(({ node }) => {
      const title = node.frontmatter.title || node.frontmatter.path
      return (
        <div key={node.frontmatter.path}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}
  </Layout>
)
export default BlogIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            type
          }
        }
      }
    }
  }
`
