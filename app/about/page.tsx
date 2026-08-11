import type { Metadata } from 'next'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section, SectionHeading } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'About — LaunchKaro',
  description:
    'LaunchKaro is a boutique web studio for Indian businesses. Our philosophy, how we work differently, and why small teams build better websites.',
}

const beliefs = [
  {
    title: 'Your website should earn its keep',
    body: "A website is not a formality or a digital visiting card. It's the first employee your customers meet — and it should be measured the same way: does it bring in enquiries, bookings, and walk-ins? If it doesn't, it's not done.",
  },
  {
    title: 'Premium is a standard, not a price tag',
    body: 'Indian customers judge a business in seconds, on a phone, often on a patchy network. Premium means the site loads fast, reads clearly, looks trustworthy, and makes the next step obvious. Nothing decorative survives if it slows that down.',
  },
  {
    title: 'Plain language, always',
    body: "You shouldn't need to learn our vocabulary to work with us. We explain everything — what we're building, why, and what it costs — in the language you run your business in. If we can't explain a recommendation simply, we don't make it.",
  },
  {
    title: 'Built for how India actually browses',
    body: "Mobile-first is not a buzzword here — it's the reality of your customers. WhatsApp is where they want to talk. Google Maps is where they find you. We build for those habits, not for design awards.",
  },
]

const differences = [
  {
    title: 'You talk to the people doing the work',
    body: 'No account managers, no handoffs, no "let me check with the team." The person who understands your business is the person building your site — and you can reach them on WhatsApp.',
  },
  {
    title: 'Few projects, taken seriously',
    body: "We deliberately keep our project load small. That's the trade a boutique studio makes: fewer clients, more attention. Your project is never the small one in the queue.",
  },
  {
    title: 'Sector focus, not general practice',
    body: "We work with hospitality, education, and retail businesses — hotels, restaurants, wedding venues, coaching institutes, salons, jewellers. We know what a room enquiry, a batch registration, and a showroom visit are worth, so we don't start from zero on your business.",
  },
  {
    title: 'We stay after launch',
    body: "Most websites die of neglect, not bad design. Our care plans exist because a site that isn't updated stops working. We'd rather be your long-term web team than a vendor you never hear from again.",
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
              A small studio, on purpose
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              LaunchKaro is a boutique web studio for Indian businesses — the
              hotels, restaurants, wedding venues, coaching institutes, salons,
              and jewellers that are excellent at what they do but undersold by
              how they look online. We&apos;re small, we&apos;re deliberate
              about staying small, and we believe that&apos;s exactly why our
              work is better.
            </p>
          </div>
        </Section>

        <Section tone="card" aria-label="Our philosophy">
          <SectionHeading
            eyebrow="What we believe"
            title="Websites are business tools, not brochures"
            description="Everything we build follows four convictions. If a decision doesn't serve one of these, we don't make it."
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

        <Section aria-label="Why a boutique studio">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div className="flex flex-col gap-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Why boutique
              </p>
              <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
                The case for a small studio
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="leading-relaxed text-pretty">
                Most Indian SMBs get their website from one of two places: a
                freelancer who disappears after launch, or a large agency where
                your project is handled by whoever is free that week. Both can
                produce a website. Neither is built to care whether it works.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                A boutique studio is the third option. Small enough that the
                people you talk to are the people doing the work. Focused
                enough to know your sector instead of learning it on your
                budget. And invested enough to stay after launch, because our
                reputation is built on a handful of businesses doing well — not
                on volume.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We won&apos;t pretend to be bigger than we are. No invented
                team pages, no borrowed logos, no &quot;offices&quot; in five
                cities. What you see is what you work with — and we&apos;d
                rather earn trust through the work than through claims.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="card" aria-label="How we work differently">
          <SectionHeading
            eyebrow="How we're different"
            title="What working with LaunchKaro actually looks like"
          />
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {differences.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="font-serif text-2xl text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section aria-label="An honest note">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              An honest note
            </p>
            <p className="font-serif text-2xl leading-relaxed text-balance md:text-3xl">
              We&apos;re a young studio. Our portfolio is concept work built to
              show how we think, and it will fill with real client results as
              they mature. What we can promise today is the thing that
              doesn&apos;t need years to prove: full attention, plain answers,
              and work we&apos;re prepared to stand behind.
            </p>
          </div>
        </Section>

        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
