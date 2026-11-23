import 'server-only'
import { Resend } from 'resend'
import { CONTACT_EMAIL, LEAD_SPEND } from './site'
import type { ContactInput } from './contact-schema'

export type SendResult = { ok: true } | { ok: false; reason: 'not_configured' | 'send_failed' }

type Mail = { to: string; subject: string; text: string; replyTo?: string }

function config() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM,
    to: process.env.CONTACT_TO || CONTACT_EMAIL,
    dryRun: process.env.CONTACT_DRY_RUN === '1' && process.env.NODE_ENV !== 'production',
  }
}

/** Header values must stay on one line, whatever a visitor posts. */
function oneLine(s: string) {
  return s.replace(/[\u0000-\u001f\u007f\u2028\u2029]+/g, ' ').trim()
}

/** Plain-text emails only, so nothing a visitor types can inject HTML. */
export function notificationEmail(input: ContactInput, to: string): Mail {
  const spend = LEAD_SPEND.find((s) => s.value === input.spend)?.label
  const vendors = [...input.vendors.filter((v) => v !== 'Other'), input.vendorOther ? `Other: ${input.vendorOther}` : input.vendors.includes('Other') ? 'Other' : null]
    .filter(Boolean)
    .join(', ')
  const lines = [
    'New call request from the website.',
    '',
    `Name: ${input.name}`,
    `Agency: ${input.agency}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `State: ${input.state ?? 'Not given'}`,
    `Lead vendors: ${vendors || 'Not given'}`,
    `Monthly lead spend: ${spend ?? 'Not given'}`,
    `Telemarketers: ${input.seats ?? 'Not given'}`,
    '',
    'Notes:',
    input.notes ?? 'None',
    '',
    'Reply to this email to answer them directly.',
  ]
  return {
    to,
    replyTo: input.email,
    subject: oneLine(`Call request: ${input.name}, ${input.agency}`),
    text: lines.join('\n'),
  }
}

export function confirmationEmail(input: ContactInput): Mail {
  const first = input.name.split(/\s+/)[0]
  return {
    to: input.email,
    subject: 'We got your request',
    text: [
      `Hi ${first},`,
      '',
      'Thanks. Gino or Matt will reach out to set up a time.',
      '',
      'M&G Telemarketing',
      'https://mandgtelemarketingllc.com',
    ].join('\n'),
  }
}

/**
 * Sends M&G the request, then the visitor a confirmation.
 * The request to M&G must go through; a failed confirmation is logged, not shown.
 */
export async function sendRequestEmails(input: ContactInput): Promise<SendResult> {
  const cfg = config()
  const notify = notificationEmail(input, cfg.to)
  const confirm = confirmationEmail(input)

  if (cfg.dryRun) {
    console.info('[contact] dry run, not sending:\n', JSON.stringify({ notify, confirm }, null, 2))
    return { ok: true }
  }
  if (!cfg.apiKey || !cfg.from) {
    console.error('[contact] RESEND_API_KEY or CONTACT_FROM is not set')
    return { ok: false, reason: 'not_configured' }
  }

  const resend = new Resend(cfg.apiKey)
  try {
    const first = await resend.emails.send({ from: cfg.from, ...notify })
    if (first.error) {
      console.error('[contact] notification failed:', first.error)
      return { ok: false, reason: 'send_failed' }
    }
  } catch (err) {
    // A network failure throws instead of returning { error }. Still show the visitor the fallback.
    console.error('[contact] notification threw:', err)
    return { ok: false, reason: 'send_failed' }
  }

  try {
    const second = await resend.emails.send({ from: cfg.from, ...confirm, replyTo: cfg.to })
    if (second.error) console.error('[contact] confirmation failed:', second.error)
  } catch (err) {
    console.error('[contact] confirmation threw:', err)
  }

  return { ok: true }
}
