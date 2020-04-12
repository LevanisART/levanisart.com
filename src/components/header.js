import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from './navbar'

class Header extends React.Component {
  render() {
    const {siteTitle} = this.props;
    return (
      <header className="header">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h1 className="site-title">
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
  
          <div className="d-flex flex-wrap">
            <Navigation />
          </div>
        </div>
      </header>
    )
  }
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
