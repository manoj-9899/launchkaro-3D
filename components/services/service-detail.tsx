import { Check } from 'lucide-react'

import { Section } from '@/components/site/section'
import type { Service } from '@/lib/content/services'

interface ServiceDetailProps {
  service: Service
  index: number
}

/**
 * Full-width detail section for one service.
 * Alternates surface tone so each service reads as its own chapter.
 */
export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const isAlternate = index % 2 === 1

  return (
    <Section
      id={service.slug}
      tone={isAlternate ? 'card' : 'default'}
      className="scroll-mt-20"
      aria-label={service.title}
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* Left column: what it is */}
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
            {service.title}
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            {service.summary}
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {service.description}
          </p>

          <div className="mt-2 flex flex-col gap-3">
            <h3 className="text-sm font-medium tracking-widest uppercase">
              Who it&apos;s for
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {service.whoFor}
            </p>
            <p className="text-muted-foreground text-sm">
              {'Most often: '}
              {service.industries.join(', ').toLowerCase()}.
            </p>
          </div>
        </div>

        {/* Right column: what's included + outcome */}
        <div className="flex flex-col gap-8">
          <div className="bg-background/60 border-border flex flex-col gap-4 rounded-xl border p-6 md:p-8">
            <h3 className="text-sm font-medium tracking-widest uppercase">
              What&apos;s included
            </h3>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="text-accent mt-1 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-accent text-sm font-medium tracking-widest uppercase">
              The outcome
            </h3>
            <p className="font-serif text-xl leading-relaxed text-pretty md:text-2xl">
              {service.outcome}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
