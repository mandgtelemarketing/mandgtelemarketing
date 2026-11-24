'use client'

import { useEffect } from 'react'

/**
 * Marks [data-reveal] elements as shown when they scroll into view.
 * Content is visible by default; the hidden starting state only applies once
 * this runs and adds `js` to <html>, so nothing is lost without JavaScript.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('js')
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute('data-shown', '')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
