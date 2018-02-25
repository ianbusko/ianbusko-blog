import React from 'react'
import Tachyons from 'tachyons'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <div 
          className="tc">
          <img
            src={profilePic}
            alt={`Ian Busko`}
            className="br2 h3 w3 dib"
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
        </div>
        <p>
          Written by <strong>Ian Busko</strong>, a software developer from Lancaster, Pennsylvania.
        </p>
      </div>
    )
  }
}

export default Bio
