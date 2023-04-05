import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import contactData from '../../data/contact'

const Contact = props => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: props.data.site.siteMetadata.description,
        },
      ]}
      title={`Contact | ${props.data.site.siteMetadata.title}`}
    />

    <h2>About</h2>
    <br />

    <div>
      Well, to be honest, I don't really know where too begin! To the few of you
      that may stumble upon this, hello! I never really thought I'd have my own
      piece of the internet pie like this. I came about my passion for web
      development, after seeing a few classmates way back in high school make
      some 3D Snake program and from that day I was hooked. I never knew what I
      wanted to be when I grew up, but from that day on I knew I wanted to do
      something with a computer.
    </div>
    <br />
    <div>
      Now, I currently live in the Metro Detroit Area, working to make
      communities a safer place with Tyler Technologies. I've even made a few
      projects I'd love to share in the <Link to={'/projects'}>Projects</Link>{' '}
      page listed above :)
    </div>
    <br />
    <div>
      If you're also curious if I've read any books recently - I have, some
      better than others - you can find that information at my{' '}
      <Link to={'/about/books'}>books </Link> page
    </div>
    <br />

    <h3>Myriad of ways to Contact Me </h3>
    <div>
      {Object.keys(contactData).map((key, index, array) => {
        if (contactData[key]) {
          return (
            <div style={{ display: 'inline' }}>
              <a key={key} href={contactData[key]} target="_new">
                {key}
              </a>
              {index < array.length - 1 ? ' / ': ''}
            </div>
          )
        }
      })}
    </div>
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
