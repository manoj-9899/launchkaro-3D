import Link from 'next/link'
import { ArrowRight, PhoneOff, Search, Smartphone, TimerOff } from 'lucide-react'

import { Section, SectionHeading } from '@/components/site/section'
import { site } from '@/lib/content/site'

const failures = [
  {
    icon: Smartphone,
    title: 'Looks outdated on phones',
    body: 'If your site breaks on mobile, customers assume your service is the same.',
  },
  {
    icon: Search,
    title: "Hidden on Google search",
    body: 'Nearby searchers find competitors first and make calls elsewhere.',
  },
  {
    icon: PhoneOff,
    title: 'No clear action button',
    body: 'Missing WhatsApp links and booking options drive visitors away.',
  },
  {
    icon: TimerOff,
    title: 'Stale and forgotten',
    body: 'Outdated menus and old photos signal a neglected business.',
  },
]

/**
 * "The Problem" — names the reasons most SMB websites fail to
 * bring in customers, in the owner's language.
 */
export function Problem() {
  return (
    <Section tone="card" aria-label="Why most business websites fail">
      <SectionHeading
        eyebrow="The problem"
        title="Most business websites fail to bring customers"
        description="Four common flaws prevent visitors from converting into bookings."
      />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {failures.map((failure) => (
          <div key={failure.title} className="flex flex-col gap-3">
            <failure.icon className="text-accent size-5" aria-hidden="true" />
            <h3 className="font-serif text-xl">{failure.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {failure.body}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-pretty">
        {'Wondering which of these is costing you customers? '}
        <Link
          href={site.ctas.primary.href}
          className="text-foreground inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:no-underline"
        >
          Find out with a free audit
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </p>
    </Section>
  )
}
