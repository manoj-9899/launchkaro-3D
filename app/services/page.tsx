import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section, SectionHeading } from '@/components/site/section'
import { ServiceDetail } from '@/components/services/service-detail'
import { services } from '@/lib/content/services'
import { getAllSectors } from '@/lib/content/sectors'

export const metadata: Metadata = {
  title: 'Website Design Services in Maharashtra | LaunchKaro',
  description:
    'Outcome-based website design, Google Maps setup, and care plans for businesses across Maharashtra. Free WhatsApp audit.',
  alternates: {
    canonical: '/services',
  },
}

const faqs = [
  {
    question: 'How long does a new website build take?',
    answer:
      'Most websites launch within 2 to 3 weeks once photos, menu items, and business details are finalized.',
  },
  {
    question: 'What does the free website audit cover?',
    answer:
      'A plain-language PDF report delivered to your WhatsApp reviewing mobile speed, Google Maps visibility, and 3 priority fixes.',
  },
  {
    question: 'Are there mandatory monthly charges?',
    answer:
      'No. Website builds have a clear fixed one-time price. Care & Updates plans are strictly optional ongoing support.',
  },
  {
    question: 'Will my website load fast on mobile networks in Maharashtra?',
    answer:
      'Yes. Every site is built mobile-first, optimized for fast performance on 4G networks across Maharashtra.',
  },
  {
    question: 'How do customer enquiries reach me?',
    answer:
      'Customer actions on your site open a prefilled WhatsApp message directly to your phone number and email.',
  },
]

export default function ServicesPage() {
  const allSectors = getAllSectors()

  const serviceSchemas = services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.title,
    provider: {
      '@type': 'ProfessionalService',
      name: 'LaunchKaro',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Maharashtra',
    },
    description: s.description,
  }))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
              Four services engineered to drive real business outcomes —
              enquiries, bookings, and local walk-ins across Maharashtra.
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

        {/* Sector Specific Solutions */}
        <Section aria-label="Websites by Sector">
          <SectionHeading
            eyebrow="Sector Solutions"
            title="Dedicated website design for key sectors"
            description="Explore our sector-specific approaches engineered for Maharashtra businesses."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allSectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/${sector.slug}`}
                className="bg-card border-border hover:border-accent group flex flex-col gap-3 rounded-xl border p-6 transition-colors"
              >
                <h3 className="font-serif text-xl text-balance group-hover:text-accent transition-colors">
                  {sector.sectorName}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {sector.subtitle}
                </p>
                <span className="text-foreground mt-auto inline-flex items-center gap-1 text-sm font-medium pt-2">
                  View {sector.sectorName} page
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        {/* FAQ Section */}
        <Section tone="card" aria-label="Frequently Asked Questions">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Clear answers on process, timelines, and deliverables."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="bg-background border-border flex flex-col gap-3 rounded-xl border p-6 md:p-8"
              >
                <h3 className="font-serif text-xl text-balance font-medium">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
