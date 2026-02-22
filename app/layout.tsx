import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'M&G Telemarketing | Insurance Telemarketing Partner',
  description: 'M&G Telemarketing partners with insurance agencies to provide outbound calling, warm introductions, and support for growth-focused insurance organizations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
