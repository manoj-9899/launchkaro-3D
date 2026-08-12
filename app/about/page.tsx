import type { Metadata } from 'next'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section, SectionHeading } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'About Solo Web Designer in Latur | LaunchKaro',
  description:
    'Solo web designer based in Latur building high-converting websites for businesses across Maharashtra. Direct WhatsApp support.',
  alternates: {
    canonical: '/about',
  },
}

const beliefs = [
  {
    title: 'Your website should earn its keep',
    body: 'A website is an active salesperson, not a static online brochure. Every design decision I make focuses on generating customer enquiries, bookings, and walk-ins.',
  },
  {
    title: 'Direct line to the builder',
    body: 'You talk directly to me on WhatsApp. No account managers, no ticket queues, and no game of phone tag between sales reps and developers.',
  },
  {
    title: 'Built for local browsing habits',
    body: 'Fast loading on mobile networks, clear typography, and direct WhatsApp actions built specifically for how local customers browse and make decisions.',
  },
  {
    title: 'Zero agency overhead',
    body: 'As a solo studio, I do not charge for fancy office space or executive layers. You pay strictly for high-converting design, speed, and execution.',
  },
]

const soloAdvantages = [
  {
    title: 'Senior Execution Only',
    body: 'I personally handle your website design, messaging structure, and technical build from start to finish.',
  },
  {
    title: 'Fast Direct Support',
    body: 'Need a menu update or seasonal offer published? Message me on WhatsApp and it goes live without waiting in an agency queue.',
  },
  {
    title: 'Focused Client Intake',
    body: 'I deliberately limit the number of active projects I take on to ensure your business gets dedicated focus.',
  },
]

const differences = [
  {
    title: 'Direct WhatsApp Line',
    body: 'Reach me directly whenever you have a question or need an update.',
  },
  {
    title: 'Selective Project Intake',
    body: 'I limit project load so every site gets my full personal attention.',
  },
  {
    title: 'Sector-Focused Design',
    body: 'Layouts built around room bookings, table reservations, and lead forms.',
  },
  {
    title: 'Dedicated Care & Updates',
    body: 'Optional ongoing support to keep your content and offers fresh year-round.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="spacious" aria-label="About introduction">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              About LaunchKaro
            </p>
            <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
              One designer, direct answers, zero agency bloat
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              I run LaunchKaro as a solo web designer based in Latur, working with hospitality, retail, and service businesses across Maharashtra. When you work with LaunchKaro, you deal directly with the person who designs and builds your site.
            </p>
          </div>
        </Section>

        <Section tone="card" aria-label="My philosophy">
          <SectionHeading
            eyebrow="My approach"
            title="Websites are business tools, not decorative brochures"
            description="Four principles that guide every site I design and build."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="bg-background border-border flex flex-col gap-3 rounded-xl border p-6 md:p-8"
              >
                <h3 className="font-serif text-2xl text-balance">
                  {belief.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section aria-label="Why a solo studio">
          <div className="flex flex-col gap-10">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Why working directly matters
              </p>
              <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
                The advantage of working directly with your builder
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {soloAdvantages.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-card border-border flex flex-col gap-3 rounded-xl border p-6 md:p-8"
                >
                  <h3 className="font-serif text-xl text-balance">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="card" aria-label="How I work">
          <SectionHeading
            eyebrow="How I work"
            title="What working with LaunchKaro looks like"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differences.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 bg-background border-border rounded-xl border p-6">
                <h3 className="font-serif text-xl text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section aria-label="An honest note">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              An honest note
            </p>
            <p className="font-serif text-2xl leading-relaxed text-balance md:text-3xl">
              I focus on clear communication, fast loading speeds, and websites built to bring in real customer enquiries for businesses across Maharashtra.
            </p>
          </div>
        </Section>

        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
