import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/site/section'
import { getWhatsAppHref, site } from '@/lib/content/site'
import { cn } from '@/lib/utils'

interface AuditCtaProps {
  className?: string
}

/**
 * Reusable "Free Website Audit" call-to-action block.
 * Drop into any page as a closing conversion section.
 */
export function AuditCta({ className }: AuditCtaProps) {
  const { audit } = site.ctas

  return (
    <Section tone="inverted" className={cn(className)} aria-label={audit.eyebrow}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
        <div className="flex flex-col gap-6">
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            {audit.eyebrow}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl lg:text-6xl">
            {audit.title}
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {audit.body}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
          <Button
            variant="accent"
            size="xl"
            nativeButton={false}
            render={
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle data-icon="inline-start" />
            {audit.buttonLabel}
          </Button>
          <Button
            variant="outline"
            size="xl"
            nativeButton={false}
            render={<Link href="/audit" />}
          >
            Use short audit form
            <ArrowRight data-icon="inline-end" />
          </Button>
          </div>
          <p className="text-muted-foreground text-sm">{audit.note}</p>
        </div>
      </div>
    </Section>
  )
}
