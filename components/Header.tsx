import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { ButtonLink } from './ui'
import { NAV_LINKS, PORTAL_LOGIN_URL } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/60 bg-[#141311]/92 shadow-[0_8px_24px_rgb(0_0_0/0.35)] backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo size={40} />
          <span className="hidden font-display text-xl font-black uppercase tracking-wide min-[400px]:inline">
            M&amp;G Telemarketing
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[0.95rem] font-medium text-muted md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href={PORTAL_LOGIN_URL} className="flex items-center gap-2 transition-colors hover:text-ink">
            <span className="lamp scale-75" aria-hidden="true" />
            Client Login
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#book" className="!min-h-10 !px-4 !py-2 text-sm">
            Request a Call
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
      <div className="rail !h-[5px]" aria-hidden="true" />
    </header>
  )
}
