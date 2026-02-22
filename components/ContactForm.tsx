'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitContactForm } from '@/app/actions/contact'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        router.push('/success')
      } else {
        const errorMsg = result.error === 'Email service not configured'
          ? 'Email service not configured. Please contact the administrator.'
          : result.error || 'Failed to submit form. Please try again.'
        alert(errorMsg)
        setIsSubmitting(false)
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row-two">
        <div className="field-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="First & last name"
            required
          />
        </div>
        <div className="field-group">
          <label htmlFor="email">Work Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@youragency.com"
            required
          />
        </div>
      </div>

      <div className="form-row-two">
        <div className="field-group">
          <label htmlFor="agency">Agency Name</label>
          <input
            id="agency"
            type="text"
            name="agency"
            placeholder="Agency or organization name"
          />
        </div>
        <div className="field-group">
          <label htmlFor="state">Primary State</label>
          <input
            id="state"
            type="text"
            name="state"
            placeholder="e.g., PA, OH, MD"
          />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="budget">Monthly Lead &amp; TM Budget (Approx.)</label>
        <select id="budget" name="budget">
          <option value="">Select a range</option>
          <option value="under3k">Under $3,000</option>
          <option value="3to6k">$3,000 – $6,000</option>
          <option value="6to10k">$6,000 – $10,000</option>
          <option value="10kplus">$10,000+</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="message">What are you hoping to fix or improve?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Example: We have leads but not enough live conversations for our producers…"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: '0.3rem' }}
        disabled={isSubmitting}
      >
        <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
        <span>→</span>
      </button>
      <div className="form-footnote">
        Please avoid including sensitive customer or policy information in this form.
      </div>
    </form>
  )
}
