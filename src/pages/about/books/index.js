import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../../components/Layout'

import toBeRead from '../../../data/to-be-read-books'
import inProgressFinished from '../../../data/in-progress-finished-books';
import BookDisplay from '../../../components/BookDisplay'

const Books = props => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: props.data.site.siteMetadata.description,
        },
      ]}
      title={`Books | ${props.data.site.siteMetadata.title}`}
    />

    <h2>Books</h2>
    <br />

    <h3>The Read List</h3>
    {inProgressFinished.map(book => (
      <BookDisplay {...book} />
    ))}

    <h3>To Be Read (TBR)</h3>
    {toBeRead.map(book => (
      <BookDisplay isUnread='true' {...book} />
    ))}
  </Layout>
)

export default Books

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
