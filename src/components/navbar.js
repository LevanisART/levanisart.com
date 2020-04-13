import React from 'react';
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap'
import Socials from './socials'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false
    }
  }

  update() {
    this.setState(prevState => ({
      navbarOpen: !prevState.navbarOpen
    }))
  }

  updateBodyStyle() {
    const body = document.querySelector('body');
    body.style.position = 'static';
  }

  componentDidUpdate() {
    const body = document.querySelector('body');
    const navbarbg = document.querySelector('.navbar-bg');

    if(this.state.navbarOpen === false) {
      body.style.position = 'static';
      navbarbg.style.background = 'none';
      navbarbg.style.visibility = 'hidden';
    } 
    if(this.state.navbarOpen === true) {
      body.style.position = 'fixed';
      navbarbg.style.background = '#FFF';
      navbarbg.style.visibility = 'visible';
    }
  }

  render() {
    return (
      <div>
        <div className="navbar-bg"></div>
        <Navbar collapseOnSelect expand="lg" className="p-0">
          <div className="header-burger d-flex align-items-center">
            <Navbar.Toggle 
              aria-controls="responsive-navbar-nav" 
              className="header-burger-btn burger"
              onClick={() => {
                this.update()
              }}
            >
              <div className="burger-box">
                <div className="burger-inner"></div>
              </div>
            </Navbar.Toggle>
          </div>
    
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <div className="nav-item">
                <Link activeClassName="active" className="nav-link" to="/" onClick={() => {this.updateBodyStyle()}}>Work</Link>
              </div>
              {/* <li className="nav-item">
                <Link activeClassName="active" className="nav-link" to="/about">About</Link>
              </li> */}
              <div className="nav-item">
                <Link activeClassName="active" className="nav-link" to="/contact" onClick={() => {this.updateBodyStyle()}}>Contact</Link>
              </div>
            </Nav>
            <Socials />
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;