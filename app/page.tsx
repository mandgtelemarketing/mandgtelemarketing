'use client'

import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="page">
      <header>
        <div className="header-inner">
          <div className="logo-wrap">
            <div className="logo-mark">
              <Image
                src="/mg-logo.png.png"
                alt="M&G Telemarketing Logo"
                width={42}
                height={42}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="logo-text">
              <span>M&amp;G TELEMARKETING</span>
              <span>Insurance Telemarketing Partner</span>
            </div>
          </div>

          <nav id="nav">
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              className="nav-cta"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Strategy Call
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrapper hero-inner">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                <span>Insurance-Focused Telemarketing Partner</span>
              </div>

              <h1>
                Bold, compliant <span className="accent">telemarketing</span> for growth-minded agencies.
              </h1>

              <p className="hero-lead">
                M&amp;G Telemarketing plugs into your agency to help create more live conversations
                with prospects who are ready to talk, so your producers can focus on quoting and binding.
              </p>

              <div>
                <span className="pill"><strong>Insurance-specific</strong>&nbsp;outbound team</span>
                <span className="pill danger"><strong>$2,000</strong>&nbsp;flat monthly retainer</span>
              </div>

              <div className="hero-ctas">
                <button
                  className="btn btn-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Schedule a Discovery Call</span>
                  <span>→</span>
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrapper">
            <div className="section-header">
              <div>
                <div className="section-kicker">What We Do</div>
                <h2 className="section-title">Telemarketing that respects your brand &amp; your book.</h2>
              </div>
              <p className="section-subtitle">
                You bring the lead sources—auto, home, and multi-line opportunities. We bring the
                telemarketing team, talk paths, and consistency to turn data into live conversations.
              </p>
            </div>

            <div className="services-grid">
              <article className="card">
                <div className="card-label">Core Service</div>
                <h3>Live Warm Introductions</h3>
                <p>
                  Our team stays on the line, builds rapport, confirms basic details, and then
                  introduces the prospect directly to your producer before disconnecting.
                </p>
                <div className="tag-row">
                  <span className="tag">Warm transfer</span>
                  <span className="tag">Live connect</span>
                </div>
              </article>

              <article className="card">
                <div className="card-label">Lead Engine</div>
                <h3>Qualified Insurance Prospects</h3>
                <p>
                  We work your vendor-provided leads and aged data, with a focus on people who are
                  currently insured and truly in the market—not just &quot;shopping around.&quot;
                </p>
                <div className="tag-row">
                  <span className="tag">Auto &amp; home</span>
                  <span className="tag">Multi-line ready</span>
                </div>
              </article>

              <article className="card">
                <div className="card-label">Operations</div>
                <h3>Script &amp; Talk Path Optimization</h3>
                <p>
                  We collaborate on scripting, objection handling, and call flow that fits your
                  agency style and carrier requirements.
                </p>
                <div className="tag-row">
                  <span className="tag">Agency-aligned</span>
                  <span className="tag">Compliance-conscious</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrapper">
            <div className="section-header">
              <div>
                <div className="section-kicker">How It Works</div>
                <h2 className="section-title">Simple, transparent, and built to scale.</h2>
              </div>
              <p className="section-subtitle">
                We focus on clear expectations, realistic volume, and disciplined outbound calling
                that turns data into opportunities for your producers.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div>
                    <div className="step-title">Onboarding &amp; Targeting</div>
                    <p className="step-body">
                      We align on states, carriers, scripts, and appetite. You control the lead
                      vendors and data; we handle the telemarketing execution.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div>
                    <div className="step-title">Daily Lead Flow &amp; Dials</div>
                    <p className="step-body">
                      Leads are loaded, scrubbed through your tools where applicable, and then worked
                      in structured outbound blocks to generate live connects.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div>
                    <div className="step-title">Qualified Warm Introductions</div>
                    <p className="step-body">
                      When a prospect is ready, we confirm key details and warm transfer them directly
                      to your producers while staying on the line for a smooth handoff.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">4</div>
                  <div>
                    <div className="step-title">Ongoing Optimization</div>
                    <p className="step-body">
                      Together we track outcomes, refine talk paths, and adjust lead mixes so you&apos;re
                      spending time where it actually converts.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="process-side-card">
                <h3>Compliance &amp; Responsibility</h3>
                <ul className="check-list">
                  <li>
                    <span className="check-icon">✓</span>
                    <span>
                      <strong>You</strong> own the lead vendors, data quality, and TCPA/DNC compliance
                      for all leads.
                    </span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>
                      <strong>We</strong> operate within your internal standards, respect
                      do-not-call requests, and follow your expectations.
                    </span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>
                      Standard model: <strong>$2,000/month</strong>, autopay required, with a
                      two-week notice before the next billing cycle to pause or cancel.
                    </span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>
                      No long-term contracts, no fluff. Just calls, live introductions, and bound
                      policies.
                    </span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="wrapper">
            <div className="section-header">
              <div>
                <div className="section-kicker">Next Steps</div>
                <h2 className="section-title">Common questions, straight answers.</h2>
              </div>
              <p className="section-subtitle">
                If you&apos;re investing in leads or considering it, we should talk. Here are a few things
                agency owners usually ask us.
              </p>
            </div>

            <div className="faq-grid">
              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-q">Do you provide the leads?</div>
                  <div className="faq-a">
                    You control the lead vendors and sources. We can share ideas, but you own the
                    contracts, data, and compliance relationship with those vendors.
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-q">What states do you work in?</div>
                  <div className="faq-a">
                    We support U.S.-based agencies and confirm your preferred states, call windows,
                    and guidelines during onboarding.
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-q">How do you handle compliance?</div>
                  <div className="faq-a">
                    You&apos;re responsible for TCPA and DNC compliance related to the data and vendors.
                    We follow your internal standards and honor consumer do-not-call requests.
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-q">Is there a long-term contract?</div>
                  <div className="faq-a">
                    No. Our agreement is month-to-month at $2,000/month with autopay and requires a
                    two-week notice prior to your next billing date to pause or cancel.
                  </div>
                </div>
              </div>

              <div id="contact" className="contact-card">
                <h3>Start the Conversation</h3>
                <p>Share a few details and we&apos;ll follow up to schedule a no-pressure strategy call.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrapper footer-inner">
          <div>© {new Date().getFullYear()} M&amp;G Telemarketing LLC. All rights reserved.</div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
