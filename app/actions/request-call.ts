'use server'

import { redirect } from 'next/navigation'
import { contactSchema, formDataToInput, HONEYPOT_FIELD, toFieldErrors, type FieldErrors } from '@/lib/contact-schema'
import { sendRequestEmails } from '@/lib/email'
import { CONTACT_EMAIL } from '@/lib/site'

export type RequestCallState = {
  fieldErrors?: FieldErrors
  formError?: string
  /** What the visitor typed, so a failed submit doesn't wipe the form. */
  values?: ReturnType<typeof formDataToInput>
}

export async function requestCall(_prev: RequestCallState, formData: FormData): Promise<RequestCallState> {
  // Bots fill the hidden field. Send them to the same page a person sees, and send nothing.
  const trap = formData.get(HONEYPOT_FIELD)
  if (typeof trap === 'string' && trap.trim() !== '') redirect('/thank-you')

  const values = formDataToInput(formData)
  const parsed = contactSchema.safeParse(values)
  if (!parsed.success) {
    return { fieldErrors: toFieldErrors(parsed.error), formError: 'Check the highlighted fields.', values }
  }

  const sent = await sendRequestEmails(parsed.data)
  if (!sent.ok) {
    return {
      formError: `We couldn't send your request just now. Email us at ${CONTACT_EMAIL} and we'll get right back to you.`,
      values,
    }
  }

  redirect('/thank-you')
}
