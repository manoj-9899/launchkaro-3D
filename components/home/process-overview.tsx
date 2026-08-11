import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/site/section'
import { process } from '@/lib/content/process'

/**
 * "Our Process" — four steps aimed at first-time website buyers.
 * Each step names the concrete deliverable the client receives.
 * Content lives in lib/content/process.ts.
 */
export function ProcessOverview() {
  return (
    <Section id="process" aria-label={process.eyebrow} className="scroll-mt-20">
      <SectionHeading
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
      />
      <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3">
            <span
              className="bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-full font-serif text-lg"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <h3 className="font-serif text-xl text-balance">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {step.deliverable}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <Button
          variant="outline"
          size="xl"
          nativeButton={false}
          render={<Link href="/audit" />}
        >
          Start with the free audit
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  )
}
