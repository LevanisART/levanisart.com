import React from "react"
import Socials from "./socials"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer d-flex flex-column justify-content-center align-items-center">
    <Socials />

    <Navbar className="p-0">
      <Nav className="mr-auto">
        <div className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/">
            Work
          </Link>
        </div>
        {/* <div className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/about">About</Link>
        </div> */}
        <div className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </Nav>
    </Navbar>
  </footer>
)

export default Footer
