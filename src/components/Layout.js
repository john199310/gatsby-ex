import React from 'react'

import { rhythm } from '../utils/typography'
import Navbar from './Navbar'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const importedStyle = this.props.style
    const defaultStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(48),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    }
    return (
      <div style={finalStyle}>
        <Navbar />
        <br />
        {children}
      </div>
    )
  }
}

export default Layout
