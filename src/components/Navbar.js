import React, { Component } from 'react';
import { Link } from 'gatsby';


import './../styles/styles.css';

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link className="nav-link" activeClassName="nav-link nav-link-active" to={'/'}>
            Home
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link nav-link-active"
            to={'/about'}
          >
            About
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link nav-link-active"
            to={'/projects'}
          >
            Projects
          </Link>
          <Link className="nav-link" activeClassName="nav-link nav-link-active" to={'/blog'}>
            Blog
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
