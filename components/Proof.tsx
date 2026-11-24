import { PROOF_STATS, TESTIMONIALS } from '@/lib/site'
import { Section } from './ui'

export function Proof() {
  return (
    <Section className="pt-6 sm:pt-10">
      {/* One engraved plate, not a stats grid */}
      <div className="brass screws flex flex-col items-center gap-3 rounded-[6px] px-8 py-6 text-center sm:flex-row sm:justify-center sm:gap-8" data-reveal>
        {PROOF_STATS.map((s, i) => (
          <p key={s.label} className="flex items-baseline gap-3">
            {i > 0 && <span aria-hidden="true" className="hidden h-6 w-px self-center bg-black/25 sm:block" />}
            <span className="font-display text-3xl font-black uppercase sm:text-4xl">{s.value}</span>
            <span className="plate-label text-[#3b2f17]">{s.label}</span>
          </p>
        ))}
      </div>

      {TESTIMONIALS.length > 0 && (
        <div className="mt-16">
          <p className="plate-label text-brass" data-reveal>
            From the agencies we work for
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr]">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className={`ivory flex flex-col rounded-[4px] ${i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 lg:[&_blockquote]:text-[1.5rem]' : ''}`}
              >
                <div className="flex items-center justify-between border-b border-black/10 px-6 py-3">
                  <span className="plate-label text-[0.72rem] text-ivory-muted">Line {String(i + 1).padStart(2, '0')}</span>
                  <span className="lamp" data-on="green" aria-hidden="true" />
                </div>
                <blockquote className={`flex-1 px-6 pt-5 ${i === 0 ? 'text-xl leading-relaxed lg:text-[1.35rem]' : 'text-[1.05rem]'}`}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="px-6 pb-6 pt-5">
                  <span className="block font-display text-lg font-extrabold uppercase">{t.name}</span>
                  <span className="text-sm text-ivory-muted">{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
