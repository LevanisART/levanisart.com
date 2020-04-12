import React from "react"
import Socials from './socials'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "gatsby"

const Footer = () => (
  <footer class="footer d-flex flex-column justify-content-center align-items-center">
    <Socials />

    <Navbar className="p-0">
      <Nav className="mr-auto">
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/">Work</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/contact">Contact</Link>
        </li>
      </Nav>
    </Navbar>

  </footer>
)

export default Footer;