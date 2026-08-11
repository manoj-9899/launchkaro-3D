import Link from 'next/link'
import { ArrowRight, PhoneOff, Search, Smartphone, TimerOff } from 'lucide-react'

import { Section, SectionHeading } from '@/components/site/section'
import { site } from '@/lib/content/site'

const failures = [
  {
    icon: Smartphone,
    title: 'It looks cheap on a phone',
    body: 'Most of your customers only ever see your site on a phone. If it looks like a template from 2015, they assume the business is the same.',
  },
  {
    icon: Search,
    title: "Google can't find it",
    body: 'When someone nearby searches for what you do, your competitors show up first — and they get the call that should have been yours.',
  },
  {
    icon: PhoneOff,
    title: 'There is no easy next step',
    body: 'No booking button, no WhatsApp, a contact form nobody reads. Interested visitors leave because reaching you takes effort.',
  },
  {
    icon: TimerOff,
    title: 'It was launched and forgotten',
    body: 'Old menus, last season\u2019s prices, broken photos. A stale site quietly tells customers you\u2019ve stopped caring.',
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
        title="Most business websites are brochures nobody reads"
        description="A website should be your hardest-working salesperson. For most Indian businesses, it fails at that job for the same four reasons."
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
