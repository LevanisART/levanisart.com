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
              <li className="nav-item">
                <Link activeClassName="active" className="nav-link" to="/">Work</Link>
              </li>
              {/* <li className="nav-item">
                <Link activeClassName="active" className="nav-link" to="/about">About</Link>
              </li> */}
              <li className="nav-item">
                <Link activeClassName="active" className="nav-link" to="/contact">Contact</Link>
              </li>
            </Nav>
            <Socials />
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;