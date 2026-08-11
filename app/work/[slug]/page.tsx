import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { CaseStudyBlock } from '@/components/work/case-study-section'
import { projectMoods } from '@/lib/content/project-moods'
import { getProject, projects } from '@/lib/content/projects'
import { getService } from '@/lib/content/services'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.clientName} — Concept Project — LaunchKaro`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const mood = projectMoods[project.industry]
  const services = project.serviceSlugs
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined)

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const { business, problem, solution, result } = project.caseStudy

  return (
    <div style={mood.cssVars}>
      <Header />
      <main>
        {/* Hero — surface adapts to the industry mood */}
        <Section
          tone={mood.heroInverted ? 'inverted' : 'default'}
          spacing="spacious"
          aria-label="Case study introduction"
        >
          <div className="flex flex-col gap-8">
            <Link
              href="/work"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All work
            </Link>
            <div className="flex max-w-4xl flex-col gap-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Concept Project · {project.industry} · {mood.keyword}
              </p>
              <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                {project.summary}
              </p>
            </div>
            <dl className="border-border flex flex-wrap gap-x-12 gap-y-4 border-t pt-6">
              <div className="flex flex-col gap-1">
                <dt className="text-muted-foreground text-xs tracking-widest uppercase">
                  Business
                </dt>
                <dd className="font-medium">{project.clientName}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-muted-foreground text-xs tracking-widest uppercase">
                  Sector
                </dt>
                <dd className="font-medium">{project.industry}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-muted-foreground text-xs tracking-widest uppercase">
                  City
                </dt>
                <dd className="font-medium">{project.city}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-muted-foreground text-xs tracking-widest uppercase">
                  Type
                </dt>
                <dd className="font-medium">Concept case study</dd>
              </div>
            </dl>
          </div>
        </Section>

        {/* Cover mockup */}
        <Section spacing="compact" aria-label="Project mockup">
          <div className="relative aspect-3/2 overflow-hidden rounded-xl md:aspect-2/1">
            <Image
              src={project.coverImage.src || '/placeholder.svg'}
              alt={project.coverImage.alt}
              fill
              priority
              sizes="(min-width: 1760px) 1660px, 100vw"
              className="object-cover"
            />
          </div>
        </Section>

        {/* Business → Problem → Solution → Result */}
        <Section aria-label="Case study narrative">
          <div className="flex flex-col gap-16 md:gap-20">
            <CaseStudyBlock index="01" section={business} />
            <CaseStudyBlock index="02" section={problem} />
            <CaseStudyBlock index="03" section={solution} />
            <div className="flex flex-col gap-10">
              <CaseStudyBlock index="04" section={result} />
              <div className="grid gap-4 lg:ml-auto lg:w-2/3 lg:grid-cols-1 lg:pl-4">
                {project.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="bg-card border-border rounded-xl border p-6"
                  >
                    <p className="font-serif text-lg leading-snug text-pretty md:text-xl">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Services + concept disclosure */}
        <Section tone="card" spacing="compact" aria-label="Services and project notes">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="font-serif text-2xl text-balance md:text-3xl">
              What this engagement includes
            </h2>
            <div className="flex flex-col gap-8">
              <ul className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href="/services"
                      className="border-border bg-background hover:text-foreground text-muted-foreground focus-visible:ring-ring/50 inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:outline-none"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                {project.clientName} is a concept project: a fictional business
                created by LaunchKaro to demonstrate our approach for the{' '}
                {project.industry.toLowerCase()} sector. The outcomes above are
                design targets, not measured client results.
              </p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="hover:text-accent inline-flex items-center gap-2 font-medium transition-colors"
              >
                Next case study: {nextProject.clientName}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Section>

        <AuditCta />
      </main>
      <Footer />
    </div>
  )
}
