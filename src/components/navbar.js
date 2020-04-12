import React from 'react';
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-0">
      <div class="header-burger" data-animation-role="header-element" id="yui_3_17_2_1_1586697336123_212">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-burger-btn burger">
          <div class="burger-box">
            <div class="burger-inner"></div>
          </div>
        </Navbar.Toggle>
      </div>

      <Navbar.Collapse id="responsive-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;