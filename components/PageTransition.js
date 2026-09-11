'use client'

import { useRef, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PageTransition() {
  const router = useRouter()
  const overlayRef = useRef(null)
  const isAnimating = useRef(false)

  const navigate = useCallback((href) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const el = overlayRef.current
    if (!el) {
      router.push(href)
      isAnimating.current = false
      return
    }

    // Snap overlay off-screen to bottom
    el.style.transition = 'none'
    el.style.transform = 'translateY(100%)'
    el.offsetHeight // force reflow so transition resets

    // Slide overlay up to cover page (700ms)
    el.style.transition = 'transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)'
    el.style.transform = 'translateY(0%)'

    setTimeout(() => {
      router.push(href)

      // Hold on white, then reveal
      setTimeout(() => {
        document.documentElement.classList.add('page-entering')

        // Slide overlay off the top
        el.style.transition = 'transform 0.65s cubic-bezier(0.65, 0, 0.35, 1)'
        el.style.transform = 'translateY(-100%)'

        setTimeout(() => {
          isAnimating.current = false
          el.style.transition = 'none'
          el.style.transform = 'translateY(100%)'
          setTimeout(() => {
            document.documentElement.classList.remove('page-entering')
          }, 100)
        }, 680)
      }, 220)
    }, 720)
  }, [router])

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (
        !href ||
        anchor.target === '_blank' ||
        href.startsWith('http') ||
        href.startsWith('mailto') ||
        href.startsWith('tel') ||
        href.startsWith('#') ||
        href.startsWith('//')
      ) return
      // stopPropagation in capture phase prevents React's Link handler from
      // also calling router.push() - which for cached pages renders content
      // instantly before our overlay has a chance to cover it
      e.preventDefault()
      e.stopPropagation()
      navigate(href)
    }

    document.addEventListener('click', handleClick, { capture: true })
    return () => document.removeEventListener('click', handleClick, { capture: true })
  }, [navigate])

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#fff',
        transform: 'translateY(100%)',
        zIndex: 9998,
        pointerEvents: 'none',
      }}
    />
  )
}
