'use client'

import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="success-page">
      <div className="success-card">
        <h1>Thank you!</h1>
        <p>Thank you for reaching out to M&amp;G Telemarketing. We&apos;ve received your inquiry and we will be in touch!</p>
        <Link href="/">Back to Website</Link>
      </div>
      <style jsx>{`
        .success-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #141720 0, #050608 45%, #020305 100%);
          color: #f9fafb;
        }

        .success-card {
          max-width: 480px;
          margin: 1.5rem;
          padding: 2.2rem 2rem;
          border-radius: 1.4rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: radial-gradient(circle at top left, rgba(23, 195, 255, 0.18), #050608);
          text-align: center;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
        }

        h1 {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.95rem;
          opacity: 0.85;
          margin-bottom: 1.6rem;
        }

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.3rem;
          border-radius: 999px;
          border: none;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          font-weight: 600;
          background: linear-gradient(130deg, #17c3ff, #ff3366);
          color: #050608;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
          transition: filter 0.2s ease;
        }

        a:hover {
          filter: brightness(1.05);
        }
      `}</style>
    </div>
  )
}
