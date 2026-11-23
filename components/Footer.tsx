import { CONTACT_EMAIL, NAV_LINKS, PORTAL_LOGIN_URL } from '@/lib/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div>
            <p className="font-display font-extrabold">M&amp;G Telemarketing</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted hover:text-ink">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href={PORTAL_LOGIN_URL} className="hover:text-ink">
            Client Login
          </a>
        </nav>
        <p className="text-sm text-muted">© {new Date().getFullYear()} M&amp;G Telemarketing LLC</p>
      </div>
    </footer>
  )
}
