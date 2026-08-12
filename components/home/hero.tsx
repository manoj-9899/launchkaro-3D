import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/site/section'
import { getWhatsAppHref, site } from '@/lib/content/site'

/**
 * Home hero — leads with the business outcome (more bookings and
 * enquiries), not the deliverable.
 */
export function Hero() {
  return (
    <Section
      spacing="default"
      className="min-h-[calc(100svh-4rem)] min-h-[calc(100vh-4rem)] md:min-h-0 flex flex-col justify-center py-8 sm:py-12 md:py-20"
      aria-label="Introduction"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:gap-20">
        <div className="flex flex-col gap-5 sm:gap-6">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase">
            For hotels, restaurants, venues, institutes, salons &amp; jewellers
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-[1.15] text-balance">
            Turn online interest into bookings and enquiries.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed text-pretty">
            We craft high-converting websites for Indian hospitality, retail, and service businesses.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              variant="accent"
              size="xl"
              className="w-full sm:w-auto"
              nativeButton={false}
              render={
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {site.ctas.primary.label}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
              nativeButton={false}
              render={<Link href={site.ctas.secondary.href} />}
            >
              {site.ctas.secondary.label}
            </Button>
          </div>
          <p className="hidden sm:block text-muted-foreground text-sm">
            {site.ctas.audit.note}
          </p>
        </div>
        <div className="hidden md:block relative aspect-4/3 w-full max-h-[480px] overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-hospitality.png"
            alt="Warmly lit boutique Indian restaurant interior with brass lamps and linen-dressed tables"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </Section>
  )
}
