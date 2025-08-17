'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { Navbar, Nav } from 'react-bootstrap'
import Socials from './Socials'

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const updateBodyStyle = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');
      const navbarbg = document.querySelector('.navbar-bg');

      if (!navbarOpen) {
        if (body) body.style.position = 'static';
        if (navbarbg) {
          navbarbg.style.background = 'none';
          navbarbg.style.visibility = 'hidden';
        }
      } else {
        if (body) body.style.position = 'fixed';
        if (navbarbg) {
          navbarbg.style.background = '#FFF';
          navbarbg.style.visibility = 'visible';
        }
      }
    }
  }, [navbarOpen]);

  return (
    <div>
      <div className="navbar-bg"></div>
      <Navbar collapseOnSelect expand="lg" className="p-0" expanded={navbarOpen}>
        <div className="header-burger d-flex align-items-center">
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            className={`header-burger-btn burger ${navbarOpen ? '' : 'collapsed'}`}
            onClick={toggleNavbar}
          >
            <div className="burger-box">
              <div className="burger-inner"></div>
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="nav-item">
              <Link className="nav-link" href="/" onClick={updateBodyStyle}>Work</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" href="/contact" onClick={updateBodyStyle}>Contact</Link>
            </div>
          </Nav>
          <Socials />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
