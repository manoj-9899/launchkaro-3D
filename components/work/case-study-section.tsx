import type { CaseStudySection as CaseStudySectionData } from '@/lib/content/projects'

interface CaseStudyBlockProps {
  index: string
  section: CaseStudySectionData
}

/**
 * One narrative block of a case study (Business / Problem / Solution / Result).
 * Editorial two-column layout: numbered kicker on the left, prose on the right.
 */
export function CaseStudyBlock({ index, section }: CaseStudyBlockProps) {
  return (
    <div className="border-border grid gap-6 border-t pt-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <div className="flex items-baseline gap-4 lg:flex-col lg:gap-2">
        <span className="text-accent font-serif text-sm" aria-hidden="true">
          {index}
        </span>
        <h2 className="font-serif text-2xl text-balance md:text-3xl">
          {section.heading}
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-muted-foreground text-lg leading-relaxed text-pretty"
          >
            {paragraph}
          </p>
        ))}
        {section.points && section.points.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {section.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="bg-accent mt-2.5 size-1.5 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
