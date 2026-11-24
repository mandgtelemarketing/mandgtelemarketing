import { CONTACT_EMAIL, NAV_LINKS, PORTAL_LOGIN_URL } from '@/lib/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer>
      <div className="rail" aria-hidden="true" />
      <div className="bg-black/30 px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo size={52} />
            <div>
              <p className="font-display text-xl font-black uppercase">M&amp;G Telemarketing</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted transition-colors hover:text-ink">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
            <a href={PORTAL_LOGIN_URL} className="transition-colors hover:text-ink">
              Client Login
            </a>
          </nav>
          <p className="text-sm text-muted">© {new Date().getFullYear()} M&amp;G Telemarketing LLC</p>
        </div>
      </div>
    </footer>
  )
}
