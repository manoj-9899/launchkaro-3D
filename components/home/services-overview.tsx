import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/site/section'
import { services } from '@/lib/content/services'

/**
 * Outcome-focused overview of the four services from services.ts.
 * Cards lead with the summary (the outcome), not deliverable lists.
 */
export function ServicesOverview() {
  return (
    <Section aria-label="Services">
      <SectionHeading
        eyebrow="What we do"
        title="Everything your business needs to win customers online"
        description="Four services, one goal: turning the people who find you into the people who book you."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            className="group bg-card border-border focus-visible:ring-ring/50 flex flex-col gap-3 rounded-xl border p-6 transition-colors hover:border-accent focus-visible:ring-3 focus-visible:outline-none md:p-8"
          >
            <h3 className="font-serif text-2xl text-balance">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {service.summary}
            </p>
            <p className="text-muted-foreground mt-auto pt-2 text-sm">
              {'For '}
              {service.industries.slice(0, 3).join(', ').toLowerCase()}
              {service.industries.length > 3 ? ' & more' : ''}
            </p>
            <span className="text-foreground inline-flex items-center gap-1 text-sm font-medium">
              Learn more
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Button
          variant="outline"
          size="xl"
          nativeButton={false}
          render={<Link href="/services" />}
        >
          Explore all services
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  )
}
