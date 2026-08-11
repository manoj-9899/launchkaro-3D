import type { Metadata } from 'next'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { ServiceDetail } from '@/components/services/service-detail'
import { services } from '@/lib/content/services'

export const metadata: Metadata = {
  title: 'Services — LaunchKaro',
  description:
    'Website design, Google & local presence, booking systems, and care plans for Indian hotels, restaurants, wedding venues, coaching institutes, salons, and jewellers.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="spacious" aria-label="Services introduction">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Services
            </p>
            <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
              Four services. One job: bringing you customers.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              We don&apos;t sell websites as decoration. Every service below
              exists because it moves a number your business cares about —
              enquiries, bookings, walk-ins. Here&apos;s what each one is,
              who it&apos;s for, and what it changes.
            </p>
          </div>

          <nav aria-label="Jump to a service" className="mt-12">
            <ul className="flex flex-wrap gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`#${service.slug}`}
                    className="border-border bg-card hover:border-accent focus-visible:ring-ring/50 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:outline-none"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Section>

        {services.map((service, index) => (
          <ServiceDetail key={service.slug} service={service} index={index} />
        ))}

        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
