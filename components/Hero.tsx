import { ButtonLink } from './ui'
import { PRICE_STANDARD } from '@/lib/site'

// Text-only until M&G send a real photo of Gino and Matt (no stock photos).
// When it arrives, put it beside the origin story on wide screens.
export function Hero() {
  return (
    <section id="top" className="px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Telemarketing for insurance agencies
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold sm:text-6xl">
          Make your own live transfers. With a team built by agents.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          We&apos;re two agency owners who got tired of paying more and more for live transfers. So we built a
          telemarketing team that works your leads and warm-transfers live prospects to your producers.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#book">Request a Call</ButtonLink>
          <ButtonLink href="#pricing" variant="secondary">
            See Pricing
          </ButtonLink>
        </div>
        <p className="mt-5 text-sm text-muted">
          {PRICE_STANDARD} per telemarketer per month · Month-to-month · No long-term contract
        </p>

        <figure className="mt-14 max-w-3xl border-l-2 border-accent pl-5 sm:pl-6">
          <blockquote className="text-lg leading-relaxed text-ink/90">
            We created M&amp;G Telemarketing after the rising cost of buying live call transfers became unsustainable for
            our own agencies. We wanted a more cost-effective, reliable way to generate our own live transfers, get more
            out of our lead spend, and focus on long-term growth. What started as a solution for our agencies became a way
            to help other agents do the same.
          </blockquote>
          <figcaption className="mt-3 text-sm font-semibold text-muted">Gino and Matt, founders</figcaption>
        </figure>
      </div>
    </section>
  )
}
