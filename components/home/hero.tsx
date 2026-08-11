import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/site/section'
import { site } from '@/lib/content/site'

/**
 * Home hero — leads with the business outcome (more bookings and
 * enquiries), not the deliverable.
 */
export function Hero() {
  return (
    <Section spacing="spacious" aria-label="Introduction">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:gap-20">
        <div className="flex flex-col gap-6">
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            For hotels, restaurants, venues, institutes, salons &amp; jewellers
          </p>
          <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl xl:text-7xl">
            More bookings. More enquiries. A website that finally earns its
            keep.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty">
            {'Your customers judge your business on their phones before they ever call. We craft premium websites for Indian businesses that turn that first look into a booking.'}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              variant="accent"
              size="xl"
              nativeButton={false}
              render={<Link href={site.ctas.primary.href} />}
            >
              {site.ctas.primary.label}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              nativeButton={false}
              render={<Link href={site.ctas.secondary.href} />}
            >
              {site.ctas.secondary.label}
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            {site.ctas.audit.note}
          </p>
        </div>
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl md:aspect-3/4">
          <Image
            src="/images/hero-hospitality.png"
            alt="Warmly lit boutique Indian restaurant interior with brass lamps and linen-dressed tables"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  )
}
