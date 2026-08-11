import type { Metadata } from 'next'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { WorkGallery } from '@/components/work/work-gallery'
import { getProjectIndustries, projects } from '@/lib/content/projects'

export const metadata: Metadata = {
  title: 'Our Work — LaunchKaro',
  description:
    'Concept case studies for Indian businesses — wedding venues, cafés, jewellers, coaching institutes, and salons. See how we approach each sector.',
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="spacious" aria-label="Portfolio introduction">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Our work
            </p>
            <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
              How we&apos;d build it for your sector
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              These are concept projects — self-initiated case studies for
              fictional businesses, built to show exactly how we think about
              each sector: the business, the problem, the solution, and the
              result it&apos;s engineered for. Real client case studies will
              join them as they mature.
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
