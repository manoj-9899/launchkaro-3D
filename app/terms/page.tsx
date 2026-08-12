import type { Metadata } from 'next'

import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { site } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Terms of Service | LaunchKaro Web Studio',
  description:
    'Terms of Service for LaunchKaro. Site content, advisory audit terms, intellectual property, and client contracts.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="default" aria-label="Terms of Service">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <div className="border-border flex flex-col gap-3 border-b pb-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Legal
              </p>
              <h1 className="font-serif text-4xl font-normal leading-tight text-balance md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-sm">
                Last updated: August 11, 2026
              </p>
            </div>

            <div className="flex flex-col gap-8 leading-relaxed">
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  1. Informational Content &amp; Portfolio Demonstrations
                </h2>
                <p className="text-muted-foreground text-pretty">
                  All information, design demonstrations, and portfolio materials published on LaunchKaro are provided for general informational and illustrative purposes to show our technical and strategic approach for specific business sectors.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  2. Free Website Audit Disclaimer
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Our Free Website Audit is a complementary, plain-language advisory review of your business&apos;s digital presence. It is offered &quot;as is&quot; for guidance only. While we share honest recommendations based on industry best practices, the audit does not constitute a legal or commercial guarantee of specific traffic, revenue, or search engine rankings.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  3. Intellectual Property
                </h2>
                <p className="text-muted-foreground text-pretty">
                  All content, original site designs, brand identity assets, visual graphics, code, and copy on this website are the exclusive intellectual property of LaunchKaro, unless otherwise noted.
                </p>
                <p className="text-muted-foreground text-pretty">
                  You may not copy, reproduce, re-distribute, or reverse-engineer our proprietary designs or website content without prior written permission from LaunchKaro.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  4. Client Engagements &amp; Separate Agreements
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Browsing this website or requesting an audit does not establish a formal client contract. All commissioned web development, custom design projects, deliverables, timelines, pricing, and IP transfer terms are governed exclusively by separate written agreements signed between LaunchKaro and the client.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  5. Contact Information
                </h2>
                <p className="text-muted-foreground text-pretty">
                  If you have questions regarding these terms, please contact us at{' '}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-foreground font-medium underline underline-offset-4 hover:no-underline"
                  >
                    {site.contact.email}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
