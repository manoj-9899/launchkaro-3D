import type { Metadata } from 'next'

import { AuditForm } from '@/components/audit/audit-form'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'Free Website Audit — LaunchKaro',
  description:
    'Get a free, plain-language review of how your business shows up on Google, on mobile, and against your competitors. No jargon, no obligation. We reply on WhatsApp within 48 hours.',
}

const whatWeCheck = [
  {
    title: 'How you look on Google',
    body: 'What customers actually find when they search your business — your listing, photos, reviews, and whether competitors show up first.',
  },
  {
    title: 'How your site works on mobile',
    body: 'Speed, readability, and whether a customer on a phone can find your number, menu, or booking option without hunting for it.',
  },
  {
    title: 'How you compare to competitors',
    body: "A frank look at the businesses fighting for your customers online, and where they're ahead or behind you.",
  },
  {
    title: 'What to fix first',
    body: 'A short, prioritised list — the two or three changes that would make the biggest difference, whether you work with us or not.',
  },
]

const nextSteps = [
  {
    step: '1',
    title: 'You send your details',
    body: "The form opens WhatsApp with everything prefilled — one tap and it's with us.",
  },
  {
    step: '2',
    title: 'We review, by hand',
    body: 'A real person looks at your Google presence, your website (if you have one), and your local competitors. No automated reports.',
  },
  {
    step: '3',
    title: 'You get the audit within 48 hours',
    body: "A plain-language summary on WhatsApp: what's working, what's costing you customers, and what to fix first. No obligation to go further.",
  },
]

export default function AuditPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="spacious" aria-label="Free website audit">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            {/* Left: pitch */}
            <div className="flex flex-col gap-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Free Website Audit
              </p>
              <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
                Find out what your online presence is costing you
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Whether you have a website that isn&apos;t pulling its weight
                or no website at all, we&apos;ll review how your business shows
                up where customers actually look — and send you a
                plain-language report on WhatsApp. Free, honest, no obligation.
              </p>

              <div className="mt-4 flex flex-col gap-6">
                <h2 className="text-sm font-medium tracking-widest uppercase">
                  What we check
                </h2>
                <ul className="flex flex-col gap-5">
                  {whatWeCheck.map((item) => (
                    <li key={item.title} className="flex flex-col gap-1">
                      <h3 className="font-serif text-xl text-balance">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="flex flex-col gap-8">
              <div className="bg-card border-border rounded-xl border p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-2">
                  <h2 className="font-serif text-2xl text-balance">
                    Request your free audit
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Takes 2 minutes. We reply on WhatsApp.
                  </p>
                </div>
                <AuditForm />
              </div>
            </div>
          </div>
        </Section>

        <Section tone="card" aria-label="What happens next">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              What happens next
            </p>
            <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
              From form to audit in three steps
            </h2>
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {nextSteps.map((item) => (
              <li key={item.step} className="flex flex-col gap-3">
                <span
                  className="border-accent text-accent flex size-10 items-center justify-center rounded-full border font-serif text-lg"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="font-serif text-xl text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>
      </main>
      <Footer />
    </>
  )
}
