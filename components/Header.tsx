import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { ButtonLink } from './ui'
import { NAV_LINKS, PORTAL_LOGIN_URL } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight">
          <Logo size={36} />
          <span className="hidden min-[400px]:inline">M&amp;G Telemarketing</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] text-muted md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href={PORTAL_LOGIN_URL} className="hover:text-ink">
            Client Login
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#book" className="px-4 py-2.5 text-sm">
            Request a Call
          </ButtonLink>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
