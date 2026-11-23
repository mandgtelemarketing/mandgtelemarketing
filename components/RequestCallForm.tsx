'use client'

import { useActionState, useState, type FormEvent } from 'react'
import { requestCall, type RequestCallState } from '@/app/actions/request-call'
import { contactSchema, formDataToInput, HONEYPOT_FIELD, toFieldErrors, type FieldErrors } from '@/lib/contact-schema'
import { LEAD_SPEND, LEAD_VENDORS, SEATS, US_STATES } from '@/lib/site'
import { buttonClass } from './ui'

const input =
  'w-full rounded-lg border border-line bg-bg px-3.5 py-3 text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none aria-[invalid=true]:border-danger'

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {required && <span className="text-muted"> (required)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export function RequestCallForm() {
  const [state, formAction, pending] = useActionState<RequestCallState, FormData>(requestCall, {})
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null)
  const errors = clientErrors ?? state.fieldErrors ?? {}

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const parsed = contactSchema.safeParse(formDataToInput(new FormData(e.currentTarget)))
    if (!parsed.success) {
      e.preventDefault()
      const fe = toFieldErrors(parsed.error)
      setClientErrors(fe)
      const first = Object.keys(fe)[0]
      if (first) document.getElementById(first)?.focus()
      return
    }
    setClientErrors(null)
  }

  const a11y = (k: keyof FieldErrors) =>
    errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `${k}-error` } : {}

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name} required>
          <input id="name" name="name" autoComplete="name" className={input} {...a11y('name')} />
        </Field>
        <Field id="agency" label="Agency name" error={errors.agency} required>
          <input id="agency" name="agency" autoComplete="organization" className={input} {...a11y('agency')} />
        </Field>
        <Field id="email" label="Work email" error={errors.email} required>
          <input id="email" name="email" type="email" autoComplete="email" className={input} {...a11y('email')} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone} required>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={input} {...a11y('phone')} />
        </Field>
        <Field id="state" label="State" error={errors.state}>
          <select id="state" name="state" defaultValue="" className={input} {...a11y('state')}>
            <option value="">Select a state</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field id="spend" label="Monthly lead spend" error={errors.spend}>
          <select id="spend" name="spend" defaultValue="" className={input} {...a11y('spend')}>
            <option value="">Select a range</option>
            {LEAD_SPEND.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">Lead vendors you use</legend>
        <div className="flex flex-wrap gap-2">
          {LEAD_VENDORS.map((v) => (
            <label
              key={v}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 has-[:checked]:border-accent has-[:checked]:text-accent"
            >
              <input type="checkbox" name="vendors" value={v} className="accent-[var(--accent)]" />
              {v}
            </label>
          ))}
        </div>
        <input
          id="vendorOther"
          name="vendorOther"
          aria-label="Other lead vendors"
          placeholder="Other vendors (optional)"
          className={`${input} mt-3`}
        />
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">How many telemarketers are you thinking about?</legend>
        <div className="flex gap-2">
          {SEATS.map((s) => (
            <label
              key={s}
              className="flex min-h-11 min-w-16 cursor-pointer items-center justify-center rounded-full border border-line px-4 py-2 has-[:checked]:border-accent has-[:checked]:text-accent"
            >
              <input type="radio" name="seats" value={s} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="notes" label="Anything we should know?" error={errors.notes}>
        <textarea id="notes" name="notes" rows={4} className={input} {...a11y('notes')} />
      </Field>

      {/* Honeypot: hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this empty</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      {(clientErrors ? 'Check the highlighted fields.' : state.formError) && (
        <p role="alert" className="rounded-lg border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-ink">
          {clientErrors ? 'Check the highlighted fields.' : state.formError}
        </p>
      )}

      <button type="submit" disabled={pending} className={buttonClass('primary', 'w-full sm:w-auto disabled:opacity-60')}>
        {pending ? 'Sending...' : 'Request a Call'}
      </button>
      <p className="text-sm text-muted">Please don&apos;t include customer or policy details in this form.</p>
    </form>
  )
}
