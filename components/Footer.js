import React from "react"
import Socials from "./Socials"
import { Navbar, Nav } from "react-bootstrap"
import Link from "next/link"

const Footer = () => (
  <footer className="footer d-flex flex-column justify-content-center align-items-center">
    <Socials />

    <Navbar className="p-0">
      <Nav className="mr-auto">
        <div className="nav-item">
          <Link className="nav-link" href="/">
            Work
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </div>
      </Nav>
    </Navbar>
  </footer>
)

export default Footer
