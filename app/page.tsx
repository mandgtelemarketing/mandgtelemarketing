import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Proof } from '@/components/Proof'
import { RequestCallForm } from '@/components/RequestCallForm'
import { Faq, HowItWorks, PortalPreview, Pricing, Problem, Responsibility } from '@/components/Sections'
import { Section, SectionHeading } from '@/components/ui'
import { SHOW_PORTAL_SECTION } from '@/lib/site'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Problem />
        <HowItWorks />
        {SHOW_PORTAL_SECTION && <PortalPreview />}
        <Pricing />
        <Responsibility />
        <Faq />
        <Section id="book" className="bg-surface">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              kicker="Request a call"
              title="Talk to Gino or Matt."
              intro="Tell us a little about your agency. We'll reach out to set up a time that works for you."
            />
            <div className="rounded-[var(--radius)] border border-line bg-bg p-5 sm:p-8">
              <RequestCallForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
