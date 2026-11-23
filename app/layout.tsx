import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const heading = Archivo({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-heading', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

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
  themeColor: '#07080b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
