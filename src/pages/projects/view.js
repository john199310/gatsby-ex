import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from './../../components/Layout'

export class view extends Component {
  render() {
    const passedData = this.props.location.state
    const { title, description, image, website, chips } = passedData || {
      title: '',
      description: '',
      image: '',
      website: '',
      chips: [],
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${title}`}</title>
        </Helmet>
        <Link to="/projects">&larr; back</Link>
        <h2>{title}</h2>
        <div
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            marginTop: 10,
          }}
        >
          {chips.map(chip => (
            <div
              key={chip}
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                background: 'grey',
                display: 'inline-block',
                borderRadius: 42,
                padding: 0,
                height: 36,
                marginRight: 10,
                boxShadow:
                  '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
                transition: '0.2s ease-out',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  color: 'white',
                  weight: '400',
                  fontSize: '16px',
                  float: 'left',
                  padding: '4px 10px',
                }}
              >
                {chip}
              </span>
            </div>
          ))}
        </div>
        <img src={image} />
        <div>
          {description}
          <br />
          <br />
          {website && (
            <div>
              <a href={website} target="_new">
                Find out more!
              </a>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default view
