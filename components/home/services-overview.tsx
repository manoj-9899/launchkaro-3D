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
        title="Everything needed to win customers online"
        description="Four focused services engineered to convert visitors into direct bookings."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            className="group bg-card border-border focus-visible:ring-ring/50 flex flex-col gap-4 rounded-xl border p-6 transition-colors hover:border-accent focus-visible:ring-3 focus-visible:outline-none md:p-8"
          >
            <h3 className="font-serif text-2xl text-balance">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {service.teaser}
            </p>
            <span className="text-foreground mt-auto inline-flex items-center gap-1 text-sm font-medium pt-2">
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
