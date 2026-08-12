import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section, SectionHeading } from '@/components/site/section'
import { Button } from '@/components/ui/button'
import type { SectorContent } from '@/lib/content/sectors'
import { projects } from '@/lib/content/projects'
import { getWhatsAppHref } from '@/lib/content/site'

interface SectorTemplateProps {
  sector: SectorContent
}

export function SectorTemplate({ sector }: SectorTemplateProps) {
  const matchingProjects = projects.filter(
    (p) => p.industry === sector.industryKey,
  )

  return (
    <>
      <Header />
      <main>
        {/* Sector Hero */}
        <Section spacing="spacious" aria-label={sector.h1}>
          <div className="flex max-w-4xl flex-col gap-6">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Websites for {sector.sectorName}
            </p>
            <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl lg:text-7xl">
              {sector.h1}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty">
              {sector.subtitle}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="accent"
                size="xl"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={
                  <a
                    href={getWhatsAppHref(
                      `Hi LaunchKaro, I'd like a free website audit for my ${sector.sectorName.toLowerCase()} business.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle data-icon="inline-start" />
                Get Free Audit on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={<Link href="/audit" />}
              >
                Request via Audit Form
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </Section>

        {/* Sector Problems */}
        <Section tone="card" aria-label={sector.problemTitle}>
          <SectionHeading
            eyebrow="Sector Challenges"
            title={sector.problemTitle}
            description={`Common online friction points hurting ${sector.sectorName.toLowerCase()} growth in local search.`}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sector.problems.map((problem) => (
              <article
                key={problem.title}
                className="bg-background border-border flex flex-col gap-3 rounded-xl border p-6 md:p-8"
              >
                <h3 className="font-serif text-2xl text-balance">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Sector Solutions */}
        <Section aria-label={sector.solutionTitle}>
          <SectionHeading
            eyebrow="Our Approach"
            title={sector.solutionTitle}
            description="Features engineered specifically to drive customer enquiries and footfall."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sector.solutions.map((solution) => (
              <article
                key={solution.title}
                className="bg-card border-border flex flex-col gap-3 rounded-xl border p-6 md:p-8"
              >
                <h3 className="font-serif text-xl text-balance">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Relevant Work Samples */}
        {matchingProjects.length > 0 ? (
          <Section tone="card" aria-label={`Relevant ${sector.sectorName} Work`}>
            <SectionHeading
              eyebrow="Selected Work"
              title={`Selected work for ${sector.sectorName.toLowerCase()}`}
              description="Design strategy and lead flows built for this sector."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {matchingProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group focus-visible:ring-ring/50 flex flex-col gap-3 rounded-xl focus-visible:ring-3 focus-visible:outline-none"
                >
                  <div className="relative aspect-3/2 overflow-hidden rounded-xl">
                    <Image
                      src={project.coverImage.src || '/placeholder.svg'}
                      alt={project.coverImage.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      {project.industry} · {project.city}
                    </p>
                    <h3 className="font-serif text-lg leading-snug text-balance">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {project.teaser}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        ) : null}

        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
