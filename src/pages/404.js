import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>Welcome to a route that doesn't exist, have a bear!</p>
        <div
          style={{
            width: '100%',
            height: 0,
            paddingBottom: '70%',
            position: 'relative',
          }}
        >
          <iframe
            src="https://giphy.com/embed/dzaUX7CAG0Ihi"
            width="480"
            height="258"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <p>
            <a href="https://giphy.com/gifs/hello-hi-dzaUX7CAG0Ihi">
              via GIPHY
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
