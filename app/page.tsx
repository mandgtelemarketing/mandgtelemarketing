import { Footer } from '@/components/Footer'
import { Founders } from '@/components/Founders'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Proof } from '@/components/Proof'
import { RequestCallForm } from '@/components/RequestCallForm'
import { Reveal } from '@/components/Reveal'
import { Faq, HowItWorks, PortalPreview, Pricing, Problem, Responsibility } from '@/components/Sections'
import { Rail, Section, SectionHeading } from '@/components/ui'
import { SHOW_PORTAL_SECTION } from '@/lib/site'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Rail />
        <Founders />
        <Rail />
        <Problem />
        <HowItWorks />
        {SHOW_PORTAL_SECTION && <PortalPreview />}
        <Pricing />
        <Responsibility />
        <Faq />
        <Rail />
        <Section id="book" className="bg-black/25">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
            <SectionHeading
              kicker="Request a call"
              title="Talk to Matt or Gino."
              intro="Tell us a little about your agency. We'll reach out to set up a time that works for you."
              className="lg:sticky lg:top-28 lg:self-start"
            />
            {/* The operator's call ticket */}
            <div className="overflow-hidden rounded-[10px] shadow-[0_30px_60px_rgb(0_0_0/0.5)]" data-reveal>
              <div className="ivory flex items-center justify-between px-5 py-3 sm:px-8">
                <span className="plate-label">Call request</span>
                <span className="lamp" data-on="amber" aria-hidden="true" />
              </div>
              <div className="panel-inset border-t-0 p-5 sm:p-8">
                <RequestCallForm />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <Reveal />
    </>
  )
}
