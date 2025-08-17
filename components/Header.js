'use client'

import Link from "next/link"
import React from "react"
import Navigation from './Navigation'

const Header = ({ siteTitle = "Levan K." }) => {
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="site-title">
          <Link href="/">
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

export default Header
