'use server'

import { redirect } from 'next/navigation'
import { contactSchema, formDataToInput, HONEYPOT_FIELD, toFieldErrors, type FieldErrors } from '@/lib/contact-schema'
import { sendRequestEmails } from '@/lib/email'
import { CONTACT_EMAIL } from '@/lib/site'

export type RequestCallState = {
  fieldErrors?: FieldErrors
  formError?: string
}

export async function requestCall(_prev: RequestCallState, formData: FormData): Promise<RequestCallState> {
  // Bots fill the hidden field. Send them to the same page a person sees, and send nothing.
  const trap = formData.get(HONEYPOT_FIELD)
  if (typeof trap === 'string' && trap.trim() !== '') redirect('/thank-you')

  const parsed = contactSchema.safeParse(formDataToInput(formData))
  if (!parsed.success) {
    return { fieldErrors: toFieldErrors(parsed.error), formError: 'Check the highlighted fields.' }
  }

  const sent = await sendRequestEmails(parsed.data)
  if (!sent.ok) {
    return {
      formError: `We couldn't send your request just now. Email us at ${CONTACT_EMAIL} and we'll get right back to you.`,
    }
  }

  redirect('/thank-you')
}
