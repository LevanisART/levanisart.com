'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Socials from './Socials'

const Header = ({ siteTitle = "Levan K." }) => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change (PageTransition handles navigation,
  // so the menu dismisses once the pathname actually updates)
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isProjects = pathname === '/' || pathname.startsWith('/projects')
  const isContact = pathname === '/contact'

  return (
    <header className="header-figma">
      <div className="header-figma-inner">
        <h1 className="site-title">
          <Link href="/">{siteTitle}</Link>
        </h1>

        {/* Desktop nav - centered absolutely */}
        <nav className="header-figma-menu">
          <Link className={`nav-link${isProjects ? ' active' : ''}`} href="/">
            <span className="nav-paren">(</span>Projects<span className="nav-paren">)</span>
          </Link>
          <Link className={`nav-link${isContact ? ' active' : ''}`} href="/contact">
            <span className="nav-paren">(</span>Contact<span className="nav-paren">)</span>
          </Link>
        </nav>

        {/* Desktop socials */}
        <div className="header-figma-socials">
          <Socials compact />
        </div>

        {/* Mobile burger - reuses existing .burger animation */}
        <button
          className={`mobile-burger burger${menuOpen ? '' : ' collapsed'}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="burger-box">
            <div className="burger-inner" />
          </div>
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu-nav">
          <Link href="/" className={isProjects ? 'active' : ''}>
            <span className="nav-paren">(</span>Projects<span className="nav-paren">)</span>
          </Link>
          <Link href="/contact" className={isContact ? 'active' : ''}>
            <span className="nav-paren">(</span>Contact<span className="nav-paren">)</span>
          </Link>
        </nav>
        <div className="mobile-menu-socials">
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header
