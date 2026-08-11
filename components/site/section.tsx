import { cn } from '@/lib/utils'

type SectionTone = 'default' | 'card' | 'inverted'

interface SectionProps extends React.ComponentProps<'section'> {
  /** Visual treatment of the section surface */
  tone?: SectionTone
  /** Constrain and center inner content */
  contained?: boolean
  /** Vertical padding scale */
  spacing?: 'default' | 'compact' | 'spacious'
}

const toneClasses: Record<SectionTone, string> = {
  default: 'bg-background text-foreground',
  card: 'bg-card text-card-foreground',
  inverted: 'dark bg-background text-foreground',
}

const spacingClasses = {
  compact: 'py-10 md:py-14',
  default: 'py-16 md:py-24',
  spacious: 'py-24 md:py-36',
}

export function Section({
  tone = 'default',
  contained = true,
  spacing = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {contained ? (
        <div className="mx-auto w-full max-w-shell px-5 md:px-8 lg:px-12 xl:px-16">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

interface SectionHeadingProps extends React.ComponentProps<'div'> {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-accent text-sm font-medium tracking-widest uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}
