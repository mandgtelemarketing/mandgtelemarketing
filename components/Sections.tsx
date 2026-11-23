import { FAQS, PRICE_STANDARD, PRICE_VOLUME, PROBLEMS, STEPS, STEPS_FOOTNOTE } from '@/lib/site'
import { ButtonLink, Section, SectionHeading } from './ui'

export function Problem() {
  return (
    <Section>
      <SectionHeading kicker="Sound familiar?" title="Leads are expensive. Unworked leads cost more." />
      <div className="grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((p) => (
          <div key={p} className="rounded-[var(--radius)] border border-line bg-surface p-6">
            <p className="font-display text-xl font-bold leading-snug">&ldquo;{p}&rdquo;</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface">
      <SectionHeading kicker="How it works" title="Your leads, our dialers, your producers on the phone." />
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.title} className="rounded-[var(--radius)] border border-line bg-bg p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display font-extrabold text-accent-ink">
              {i + 1}
            </span>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-muted">{STEPS_FOOTNOTE}</p>
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

export function Pricing() {
  const card = 'flex flex-col rounded-[var(--radius)] border p-7 sm:p-8'
  return (
    <Section id="pricing">
      <SectionHeading kicker="Pricing" title="One flat price per telemarketer." />
      <div className="grid gap-5 md:grid-cols-2">
        <div className={`${card} border-line bg-surface`}>
          <h3 className="text-lg font-bold text-muted">1 to 2 telemarketers</h3>
          <p className="mt-4">
            <span className="font-display text-5xl font-extrabold">{PRICE_STANDARD}</span>
          </p>
          <p className="mt-2 text-muted">per telemarketer, per month</p>
        </div>
        <div className={`${card} border-accent bg-surface`}>
          <h3 className="text-lg font-bold text-muted">3 or more</h3>
          <p className="mt-4">
            <span className="font-display text-5xl font-extrabold">{PRICE_VOLUME}</span>
          </p>
          <p className="mt-2 text-muted">per telemarketer, per month</p>
          <p className="mt-5 font-semibold text-accent">Includes our inbound call team.</p>
        </div>
      </div>
      <div className="mt-8 max-w-3xl space-y-2 text-muted">
        <p>
          Month-to-month, paid by autopay. Cancel with 14 days&apos; written notice before your next billing date.
        </p>
        <p>No minimum term. We recommend giving a new team 90 days, and we&apos;ll talk it through on your intro call.</p>
      </div>
      <ButtonLink href="#book" className="mt-8">
        Request a Call
      </ButtonLink>
    </Section>
  )
}

export function Responsibility() {
  return (
    <Section className="bg-surface">
      <SectionHeading kicker="Who does what" title="Clear lines from day one." />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[var(--radius)] border border-line bg-bg p-6">
          <h3 className="text-xl font-bold">You</h3>
          <p className="mt-2 text-muted">
            Own your lead vendors and data, and TCPA and DNC compliance for those leads.
          </p>
        </div>
        <div className="rounded-[var(--radius)] border border-line bg-bg p-6">
          <h3 className="text-xl font-bold">We</h3>
          <p className="mt-2 text-muted">Follow your scripts and standards and honor every do-not-call request.</p>
        </div>
      </div>
    </Section>
  )
}

export function Faq() {
  const answered = FAQS.filter((f): f is { q: string; a: string } => f.a !== null)
  return (
    <Section id="faq">
      <SectionHeading kicker="FAQ" title="Straight answers." />
      <div className="max-w-3xl divide-y divide-line border-y border-line">
        {answered.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-lg font-semibold">
              {f.q}
              <span aria-hidden="true" className="text-2xl leading-none text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-5 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
