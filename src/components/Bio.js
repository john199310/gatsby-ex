import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import avatarPic from './../assets/images/avatar.jpg';
import { rhythm } from '../utils/typography';
import blogTag from './../data/bio-tag';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={avatarPic}
          alt={`Ryan Bruns`}
          style={{
            borderRadius: 48,
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{paddingTop: 10}}>{blogTag}</p>
      </div>
    )
  }
}

export default Bio
