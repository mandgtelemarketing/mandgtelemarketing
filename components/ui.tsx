import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold transition-colors min-h-11'
const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
  secondary: 'border border-line text-ink hover:border-muted',
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  ...props
}: ComponentProps<'a'> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />
}

export function buttonClass(variant: Variant = 'primary', className = '') {
  return `${base} ${variants[variant]} ${className}`
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
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">{kicker}</p>
      <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  )
}
