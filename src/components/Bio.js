import React from 'react'
import Tachyons from 'tachyons'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <div 
          className="tc">
          <img
            src={profilePic}
            alt={`Ian Busko`}
            className="br2 h3 w3 dib"
            style={{
              marginBottom: 0,
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
