import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

/** A switchboard key. The primary key carries a lit amber lamp. */
export function buttonClass(variant: Variant = 'primary', className = '') {
  return `key ${variant === 'primary' ? 'key-primary' : 'key-secondary'} ${className}`
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ComponentProps<'a'> & { variant?: Variant }) {
  return (
    <a className={buttonClass(variant, className)} {...props}>
      {children}
    </a>
  )
}

/** Oak cabinet rail between sections. */
export function Rail() {
  return <div className="rail" aria-hidden="true" />
}

export function Section({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

/** Brass designation plate over a heavy condensed heading. */
export function SectionHeading({
  kicker,
  title,
  intro,
  className = '',
}: {
  kicker: string
  title: string
  intro?: string
  className?: string
}) {
  return (
    <div className={`mb-12 max-w-3xl ${className}`} data-reveal>
      <p className="plate-label brass inline-block rounded-[4px] px-3 py-2">{kicker}</p>
      <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
    </div>
  )
}
