'use client'

import { useRef } from 'react'
import { NAV_LINKS, PORTAL_LOGIN_URL } from '@/lib/site'

/** Collapsed menu for small screens. Closes on a link tap, Escape, or a tap outside. */
export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null)
  const close = () => {
    if (ref.current) ref.current.open = false
  }

  return (
    <details
      ref={ref}
      className="relative md:hidden"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && ref.current?.open) {
          close()
          ref.current.querySelector('summary')?.focus()
        }
      }}
      onBlur={(e) => {
        if (ref.current?.open && !ref.current.contains(e.relatedTarget as Node | null)) close()
      }}
    >
      <summary
        aria-label="Menu"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="absolute right-0 mt-2 w-52 rounded-[var(--radius)] border border-line bg-surface p-2 shadow-2xl">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close} className="block rounded-lg px-3 py-2.5 hover:bg-surface-2">
            {l.label}
          </a>
        ))}
        <a href={PORTAL_LOGIN_URL} onClick={close} className="block rounded-lg px-3 py-2.5 hover:bg-surface-2">
          Client Login
        </a>
      </div>
    </details>
  )
}
