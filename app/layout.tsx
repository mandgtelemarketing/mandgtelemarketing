import type { Metadata, Viewport } from 'next'
import { Big_Shoulders, Libre_Franklin } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

// Big Shoulders: heavy condensed, echoing the logo's "M&G". Libre Franklin for reading.
const heading = Big_Shoulders({ subsets: ['latin'], weight: 'variable', axes: ['opsz'], variable: '--font-heading', display: 'swap' })
const body = Libre_Franklin({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

const title = 'M&G Telemarketing | Telemarketing for Allstate Agencies'
const description =
  'A telemarketing team built by two agency owners. We work your leads and warm-transfer live prospects to your producers. $2,000 per telemarketer per month, month-to-month.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'M&G Telemarketing',
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
}

export const viewport: Viewport = {
  themeColor: '#07090d',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-accent-ink"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
