// Every fact and piece of copy that M&G may change lives here.
// Client-facing copy: no em dashes. Use periods and colons.

export const SITE_URL = 'https://mandgtelemarketingllc.com'

/** Portal login. Swap this one constant when the portal gets its own domain. */
export const PORTAL_LOGIN_URL = 'https://mg-portal.vercel.app/login'

export const CONTACT_EMAIL = 'mandgtelemarketing@gmail.com'

/**
 * Section 6 ("What you see") introduces the client portal.
 * Keep false until the portal is live for clients (Rollout 2).
 */
export const SHOW_PORTAL_SECTION = false

/**
 * Founders video: a 16:9 talking head of Matt and Gino, 60 to 90 seconds.
 * Leave null to show the "coming soon" placeholder. Set src to an MP4 in /public
 * (for example '/founders.mp4') or a hosted MP4 URL, plus an optional poster image.
 */
export const FOUNDERS_VIDEO: { src: string; poster?: string } | null = null

export const ORIGIN_STORY =
  'We created M&G Telemarketing after the rising cost of buying live call transfers became unsustainable for our own agencies. We wanted a more cost-effective, reliable way to generate our own live transfers, get more out of our lead spend, and focus on long-term growth. What started as a solution for our agencies became a way to help other agents do the same.'

export const PRICE_STANDARD = '$2,000'
export const PRICE_VOLUME = '$1,900'

export const NAV_LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
] as const

export const PROOF_STATS = [
  { value: 'Since 2024', label: 'run by agency owners' },
] as const

export type Testimonial = {
  name: string
  /** Agency or role, plus state. Shown under the name. */
  detail: string
  quote: string
}

/**
 * Client quotes, used with permission (customer reviews.docx, 2026-11-22).
 * To add one, append an entry. The layout wraps on its own.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kevin O'Rourke",
    detail: 'Oak Hill Insurance, GA',
    quote:
      "We were working with a different team that was not getting us the results we needed, so we brought in M&G, who immediately outperformed the previous group. Transfers to the agency increased with a higher level of intent. Matt and Gino come prepared with insight on what's working and what's not. On a scale of 1 to 10, I'd give them an 11!",
  },
  {
    name: 'Hal Beimel',
    detail: 'Allstate Agent, PA',
    quote:
      'Their telemarketers are professional and well trained. M&G is a great company to work with and they helped me reach my sales goals.',
  },
  {
    name: 'Rudy Surovick',
    detail: 'Agent, GA',
    quote: 'Best telemarketers I have used to date.',
  },
]

export const PROBLEMS = [
  'I buy leads that never get called enough.',
  'My producers should be quoting, not dialing.',
  'Hiring and managing callers is a second job.',
] as const

export const STEPS = [
  {
    title: 'Onboard',
    body: 'Account creation, lead vendor integration and dialer setup.',
  },
  {
    title: 'We dial',
    body: 'Your leads load into the dialer and get worked in a structured cadence.',
  },
  {
    title: 'Warm transfer',
    body: 'When a prospect is ready, we confirm the basics and introduce them live to your producer.',
  },
  {
    title: 'Review and adjust',
    body: 'Regular account reviews compare contact rates by lead vendor, so you put money where it converts.',
  },
] as const

export const STEPS_FOOTNOTE =
  'We recommend at least two lead vendors and 35 to 40 leads per telemarketer per day so your team never runs dry.'

export type Faq = { q: string; a: string | null }

/** An answer of null hides the question until M&G supply it. */
export const FAQS: Faq[] = [
  {
    q: 'Does M&G provide the leads?',
    a: 'No. You choose the lead vendors and own those contracts and the data. We can share what we see working across agencies.',
  },
  {
    q: 'What states do you work in?',
    a: "Tell us where you write business. We'll confirm we can cover it and set your states, call windows and guidelines during onboarding.",
  },
  {
    q: 'How do you handle compliance?',
    a: 'You are responsible for TCPA and DNC compliance for your leads and vendors. We follow proven scripting and standards and honor every do-not-call request.',
  },
  {
    q: 'Is there a long-term contract?',
    a: "No. It's month-to-month with autopay. To cancel, give 14 days' written notice before your next billing date.",
  },
  {
    q: 'How fast can we start?',
    a: 'Typically 5 to 7 business days from signing to dialing.',
  },
  {
    q: 'Who calls my leads?',
    a: 'You get a dedicated telemarketer assigned to your account.',
  },
  {
    q: 'What do you need from us?',
    a: 'Access to your lead vendor accounts, the states you write in, your call windows, and your scripts or approval of ours.',
  },
  {
    q: 'Can I add or remove telemarketers?',
    a: 'Usually on your contract date, since contracts run month to month. Other timing is handled case by case, and adding a telemarketer mid-month is prorated.',
  },
]

export const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA',
  'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM',
  'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
  'WV', 'WI', 'WY',
] as const

export const LEAD_VENDORS = ['EverQuote', 'MediaAlpha', 'QuoteWizard', 'SmartFinancial', 'Other'] as const

export const LEAD_SPEND = [
  { value: 'under-3k', label: 'Under $3,000' },
  { value: '3k-6k', label: '$3,000 to $6,000' },
  { value: '6k-10k', label: '$6,000 to $10,000' },
  { value: '10k-plus', label: '$10,000 or more' },
] as const

export const SEATS = ['1', '2', '3+'] as const
