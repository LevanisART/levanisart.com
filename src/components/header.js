import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from './navbar'
import Socials from './socials'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <h1 className="site-title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>

      <div className="d-flex flex-wrap">
        <Navigation />
        <Socials />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
