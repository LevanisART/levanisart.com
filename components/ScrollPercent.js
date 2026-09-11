'use client'

import { useEffect, useState } from 'react'

export default function ScrollPercent() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPercent(total > 0 ? Math.round((scrolled / total) * 100) : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="scroll-percent">{percent}%</div>
  )
}
