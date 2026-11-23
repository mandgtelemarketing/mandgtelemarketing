import { PROOF_STATS, TESTIMONIALS } from '@/lib/site'
import { Section } from './ui'

export function Proof() {
  return (
    <Section className="border-y border-line bg-surface">
      <dl className="flex flex-wrap gap-x-14 gap-y-6">
        {PROOF_STATS.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="mt-1 text-muted">{s.label}</dt>
            <dd className="font-display text-4xl font-extrabold text-ink sm:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>

      {TESTIMONIALS.length > 0 && (
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-[var(--radius)] border border-line bg-bg p-6">
              <blockquote className="flex-1 text-ink/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5">
                <span className="block font-semibold">{t.name}</span>
                <span className="text-sm text-muted">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </Section>
  )
}
