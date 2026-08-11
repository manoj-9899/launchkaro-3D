import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/site/section'
import { getFeaturedProjects } from '@/lib/content/projects'
import { getWhatsAppHref } from '@/lib/content/site'

/**
 * Featured work pulled from projects.ts. Renders up to four project
 * cards; while the portfolio is empty, it shows an honest
 * "case studies coming" state instead of fake work.
 */
export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 4)

  return (
    <Section tone="card" aria-label="Featured projects">
      <SectionHeading
        eyebrow="Our work"
        title="Websites built to bring customers, not just compliments"
        description="Every project we take on is measured by one thing: did it bring the business more enquiries?"
      />
      {featured.length > 0 ? (
        <>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group focus-visible:ring-ring/50 flex flex-col gap-4 rounded-xl focus-visible:ring-3 focus-visible:outline-none"
              >
                <div className="relative aspect-3/2 overflow-hidden rounded-xl">
                  <Image
                    src={project.coverImage.src || '/placeholder.svg'}
                    alt={project.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-muted-foreground text-sm">
                    {project.industry}
                    {' · '}
                    {project.city}
                  </p>
                  <h3 className="font-serif text-xl text-balance">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button
              variant="outline"
              size="xl"
              nativeButton={false}
              render={<Link href="/work" />}
            >
              See the full portfolio
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </>
      ) : (
        <div className="border-border mt-10 grid gap-8 rounded-xl border border-dashed p-8 md:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:p-14">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-balance md:text-3xl">
              Our first case studies are being written
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {"We publish a project only after it has had time to prove itself — real results for a real business, not launch-day screenshots. In the meantime, we're happy to walk you through work in progress on a call."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <Button
              variant="default"
              size="xl"
              nativeButton={false}
              render={
                <a
                  href={getWhatsAppHref(
                    "Hi LaunchKaro! I'd love to see examples of your recent work.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle data-icon="inline-start" />
              Ask to see recent work
            </Button>
            <Button
              variant="outline"
              size="xl"
              nativeButton={false}
              render={<Link href="/work" />}
            >
              Visit the portfolio page
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      )}
    </Section>
  )
}
