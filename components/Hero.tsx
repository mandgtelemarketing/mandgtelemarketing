import { ButtonLink } from './ui'
import { Switchboard } from './Switchboard'
import { PRICE_STANDARD } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-20">
      {/* Warm light falling on the cabinet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[760px] rounded-full bg-[radial-gradient(closest-side,rgb(255_180_58/0.13),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div>
          <p className="plate-label flex items-center gap-2.5 text-brass">
            <span className="lamp" data-on="amber" aria-hidden="true" />
            Telemarketing for insurance agencies
          </p>
          <h1 className="mt-6 text-[clamp(2.9rem,5.2vw,4.4rem)]">
            Make your own live transfers.{' '}
            <span className="text-amber">With a team built by agents.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted sm:text-xl">
            We&apos;re two agency owners who got tired of paying more and more for live transfers. So we built a
            telemarketing team that works your leads and warm-transfers live prospects to your producers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <ButtonLink href="#book">
              <span className="lamp" data-on="green" aria-hidden="true" />
              Request a Call
            </ButtonLink>
            <ButtonLink href="#pricing" variant="secondary">
              See Pricing
            </ButtonLink>
          </div>
          <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[0.95rem] text-muted">
            <span className="font-semibold text-ink">{PRICE_STANDARD} per telemarketer per month</span>
            <span aria-hidden="true" className="text-brass">·</span>
            <span>Month-to-month</span>
            <span aria-hidden="true" className="text-brass">·</span>
            <span>No long-term contract</span>
          </p>
        </div>

        <div className="relative">
          <Switchboard />
        </div>
      </div>
    </section>
  )
}
