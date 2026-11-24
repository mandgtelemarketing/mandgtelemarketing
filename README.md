# M&G Telemarketing website

One-page marketing site for M&G Telemarketing, plus `/thank-you`. Next.js (App Router), React, TypeScript and Tailwind, hosted on Netlify.

## Run it

```bash
bun install
```

```bash
CONTACT_DRY_RUN=1 bun run dev
```

With `CONTACT_DRY_RUN=1`, form emails are printed to the terminal instead of sent (ignored in production).

## Check it

```bash
bun run typecheck && bun run build
```

## Where things live

- `lib/site.ts`: every fact and piece of copy M&G may change: prices, the portal login link, testimonials, FAQ, form options, and the `SHOW_PORTAL_SECTION` flag. To add a review, append to `TESTIMONIALS`. A FAQ answer of `null` hides that question.
- `lib/contact-schema.ts`: form validation, shared by the browser and the server.
- `lib/email.ts` and `app/actions/request-call.ts`: the Request a Call form. Sends M&G a notification (reply-to set to the prospect) and the prospect a confirmation, through Resend.
- `components/`: page sections.

## Environment (Netlify)

See `.env.example`. `RESEND_API_KEY` and `CONTACT_FROM` (an address on a Resend-verified domain) are required for the form to send. `CONTACT_TO` defaults to `mandgtelemarketing@gmail.com`.

Client-facing copy uses no em dashes.
