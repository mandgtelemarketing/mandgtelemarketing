import { z } from 'zod'
import { LEAD_SPEND, LEAD_VENDORS, SEATS, US_STATES } from './site'

const spendValues = LEAD_SPEND.map((s) => s.value) as [string, ...string[]]
const stateValues = [...US_STATES] as [string, ...string[]]

/** Treats an empty or missing form value as "not given". */
const optional = <T extends z.ZodType>(schema: T) =>
  z.preprocess((v) => (v == null || (typeof v === 'string' && v.trim() === '') ? undefined : v), schema.optional())

/** Shared by the browser and the server action. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name.').max(100),
  email: z.string().trim().email('Enter a valid email.').max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v.replace(/\D/g, '').length >= 10, 'Enter a phone number with area code.'),
  agency: z.string().trim().min(2, 'Enter your agency name.').max(150),
  state: optional(z.enum(stateValues, 'Pick a state from the list.')),
  vendors: z.array(z.enum(LEAD_VENDORS)).max(LEAD_VENDORS.length).default([]),
  vendorOther: optional(z.string().trim().max(120)),
  spend: optional(z.enum(spendValues)),
  seats: optional(z.enum(SEATS)),
  notes: optional(z.string().trim().max(2000, 'Keep notes under 2,000 characters.')),
})

export type ContactInput = z.infer<typeof contactSchema>

export type FieldErrors = Partial<Record<keyof ContactInput, string>>

/** Reads the form into the shape the schema expects. */
export function formDataToInput(fd: FormData) {
  const text = (k: string) => {
    const v = fd.get(k)
    return typeof v === 'string' ? v : undefined
  }
  return {
    name: text('name') ?? '',
    email: text('email') ?? '',
    phone: text('phone') ?? '',
    agency: text('agency') ?? '',
    state: text('state'),
    vendors: fd.getAll('vendors').filter((v): v is string => typeof v === 'string'),
    vendorOther: text('vendorOther'),
    spend: text('spend'),
    seats: text('seats'),
    notes: text('notes'),
  }
}

export function toFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {}
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactInput | undefined
    if (key && !out[key]) out[key] = issue.message
  }
  return out
}

/** Hidden field. People never fill it; bots usually do. */
export const HONEYPOT_FIELD = 'website'
