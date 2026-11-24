import { FAQS, PRICE_STANDARD, PRICE_VOLUME, PROBLEMS, STEPS, STEPS_FOOTNOTE } from '@/lib/site'
import { ButtonLink, Section, SectionHeading } from './ui'

export function Problem() {
  return (
    <Section>
      <SectionHeading kicker="Sound familiar?" title="Leads are expensive. Unworked leads cost more." />
      <ul className="divide-y divide-line border-y border-line">
        {PROBLEMS.map((p, i) => (
          <li key={p} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="flex items-center gap-5 py-6 sm:gap-8 sm:py-8">
            <span className="lamp scale-125" aria-hidden="true" />
            <p className="font-display text-[clamp(1.6rem,3.6vw,2.75rem)] font-extrabold uppercase leading-[1.02]">
              &ldquo;{p}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-black/25">
      <SectionHeading kicker="How it works" title="Your leads, our dialers, your producers on the phone." />
      <ol className="patch-row panel-inset relative grid gap-0 rounded-[10px] p-3 md:grid-cols-4" data-reveal>
        {/* The cord that patches each step to the next */}
        <span aria-hidden="true" className="patch-cord" />
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative px-5 py-7 md:px-6 md:py-8">
            <div className="flex items-center gap-4">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_38%_32%,#f2f6fb,#aeb8c7_55%,#555f70)] shadow-[0_3px_8px_rgb(0_0_0/0.6)]">
                <span className="h-4 w-4 rounded-full bg-black" />
              </span>
              <span className="patch-lamp lamp" style={{ transitionDelay: `${500 + i * 350}ms` }} aria-hidden="true" />
            </div>
            <p className="plate-label mt-6 text-brass">Step {i + 1}</p>
            <h3 className="mt-2 text-3xl">{s.title}</h3>
            <p className="mt-3 text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-muted" data-reveal>
        {STEPS_FOOTNOTE}
      </p>
    </Section>
  )
}

/** Shown only when SHOW_PORTAL_SECTION is true (after the portal opens to clients). */
export function PortalPreview() {
  return (
    <Section>
      <SectionHeading
        kicker="What you see"
        title="Your numbers, any time."
        intro="Log in any time and see your daily calls, contacts, transfers and new leads, broken down by lead vendor."
      />
      {/* Add one portal screenshot here, with sample data only. */}
    </Section>
  )
}

function RatePlate({ tier, price, note }: { tier: string; price: string; note?: string }) {
  return (
    <div className="brass screws flex flex-col rounded-[6px] px-7 pb-8 pt-10 sm:px-10" data-reveal>
      <p className="plate-label text-[#233044]">{tier}</p>
      <p className="mt-4 font-display text-[clamp(4rem,9vw,6rem)] font-black leading-none [text-shadow:0_1px_0_rgb(255_255_255/0.45),0_-1px_0_rgb(0_0_0/0.25)]">
        {price}
      </p>
      <p className="mt-2 font-semibold text-[#233044]">per telemarketer, per month</p>
      {note && (
        <p className="mt-6 flex items-center gap-2.5 border-t border-black/15 pt-5 font-semibold">
          <span className="lamp" data-on="green" aria-hidden="true" />
          {note}
        </p>
      )}
    </div>
  )
}

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading kicker="Pricing" title="One flat price per telemarketer." />
      <div className="grid gap-6 md:grid-cols-2">
        <RatePlate tier="1 to 2 telemarketers" price={PRICE_STANDARD} />
        <RatePlate tier="3 or more" price={PRICE_VOLUME} note="Includes our inbound call team." />
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-2xl space-y-2 text-muted" data-reveal>
          <p>
            Month-to-month, paid by autopay. Cancel with 14 days&apos; written notice before your next billing date.
          </p>
          <p>No minimum term. We recommend giving a new team 90 days, and we&apos;ll talk it through on your intro call.</p>
        </div>
        <ButtonLink href="#book">
          <span className="lamp" data-on="green" aria-hidden="true" />
          Request a Call
        </ButtonLink>
      </div>
    </Section>
  )
}

export function Responsibility() {
  return (
    <Section className="bg-black/25">
      <SectionHeading kicker="Who does what" title="Clear lines from day one." />
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { who: 'You', body: 'Own your lead vendors and data, and TCPA and DNC compliance for those leads.' },
          { who: 'We', body: 'Follow your scripts and standards and honor every do-not-call request.' },
        ].map((r, i) => (
          <div key={r.who} className="panel-inset rounded-[10px] p-7 sm:p-9" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
            <p className="ivory plate-label inline-block rounded-[2px] px-3 py-1.5">{r.who}</p>
            <p className="mt-5 text-xl leading-snug text-ink">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Faq() {
  const answered = FAQS.filter((f): f is { q: string; a: string } => f.a !== null)
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading kicker="FAQ" title="Straight answers." className="lg:sticky lg:top-28 lg:self-start" />
        <div className="divide-y divide-line border-y border-line">
          {answered.map((f) => (
            <details key={f.q} className="faq group">
              <summary className="flex cursor-pointer items-center gap-4 py-5 text-lg font-semibold transition-colors hover:text-amber">
                <span className="faq-lamp lamp" aria-hidden="true" />
                <span className="flex-1">{f.q}</span>
                <span aria-hidden="true" className="text-2xl leading-none text-brass transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-6 pl-[28px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
