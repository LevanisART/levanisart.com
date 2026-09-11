"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"

export default function HoverEnterLink({
  href,
  className = "",
  children,
  ariaLabel,
}) {
  const cursorRef = useRef(null)
  const [hover, setHover] = useState(false)

  const updatePosition = (e) => {
    const cursor = cursorRef.current
    if (!cursor) return
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
  }

  return (
    <Link
      href={href}
      className={`hover-enter-link ${className}`.trim()}
      aria-label={ariaLabel}
      onMouseEnter={(e) => {
        updatePosition(e)
        setHover(true)
      }}
      onMouseMove={updatePosition}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <span
        ref={cursorRef}
        className={`hover-enter-cursor${hover ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        Enter
      </span>
    </Link>
  )
}
