import type { Metadata } from 'next'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { WorkGallery } from '@/components/work/work-gallery'
import { getProjectIndustries, projects } from '@/lib/content/projects'

export const metadata: Metadata = {
  title: 'Selected Work in Maharashtra | LaunchKaro',
  description:
    'Selected website projects for restaurants, hotels, salons, and coaching institutes across Maharashtra.',
  alternates: {
    canonical: '/work',
  },
}

export default function WorkPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://launchkaro.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Selected Work',
        item: 'https://launchkaro.in/work',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <Section spacing="spacious" aria-label="Portfolio introduction">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Selected Work
            </p>
            <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
              Websites engineered for customer growth
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              Real design, strategic layout, and performance execution built for key business sectors.
            </p>
          </div>
        </Section>

        <Section spacing="compact" className="pb-24 md:pb-32" aria-label="Portfolio projects">
          <WorkGallery projects={projects} industries={getProjectIndustries()} />
        </Section>

        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
