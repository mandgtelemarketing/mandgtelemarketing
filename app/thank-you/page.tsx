import type { Metadata } from 'next'
import { Logo } from '@/components/Logo'
import { ButtonLink } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Thanks | M&G Telemarketing',
  robots: { index: false },
  alternates: { canonical: '/thank-you' },
}

export default function ThankYou() {
  return (
    <main id="main" className="flex min-h-dvh items-center justify-center px-4">
      <div className="max-w-md rounded-[var(--radius)] border border-line bg-surface p-8 text-center">
        <div className="flex justify-center">
          <Logo size={56} />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold">Thanks. We got it.</h1>
        <p className="mt-3 text-muted">
          Gino or Matt will reach out to set up a time. Check your inbox for a confirmation.
        </p>
        <ButtonLink href="/" variant="secondary" className="mt-7">
          Back to the site
        </ButtonLink>
      </div>
    </main>
  )
}
