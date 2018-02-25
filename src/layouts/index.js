import React from 'react'
import Link from 'gatsby-link'
import 'tachyons'

const Header = () => (
  <div>
    <div>
      <h1 className="fw3 mt4 mb1">
        <Link to="/" className="link dark-gray">
          ian busko.
        </Link>
      </h1>
    </div>
  </div>
)

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div className="sans-serif dark-gray mw-100 mw7-l center-l ph3 ph5-ns">
        {/* TODO: META TAGS */}
        <Header />
        <div className="mv4">{children()}</div>
      </div>
    )
  }
}

export default Template
