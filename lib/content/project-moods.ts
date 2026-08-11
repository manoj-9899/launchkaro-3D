import type { ProjectIndustry } from '@/lib/content/projects'

/**
 * Per-industry art direction for case-study pages.
 * Each mood stays inside the LaunchKaro design system (warm espresso/ivory
 * family, Fraunces + Instrument Sans) and only nudges the accent hue and
 * hero surface so a jeweller reads luxurious, a café warm, coaching credible.
 */
export interface ProjectMood {
  /** Scoped CSS custom-property overrides applied to the case-study page */
  cssVars: React.CSSProperties
  /** Whether the case-study hero uses the inverted (dark) surface */
  heroInverted: boolean
  /** One-word feel, used in the hero eyebrow, e.g. "Warmth" */
  keyword: string
}

const brass: ProjectMood = {
  cssVars: {},
  heroInverted: false,
  keyword: 'Presence',
}

export const projectMoods: Record<ProjectIndustry, ProjectMood> = {
  'Wedding Venue': {
    // Rose-brass: dusk warmth for celebration venues
    cssVars: {
      '--accent': 'oklch(0.68 0.105 55)',
      '--ring': 'oklch(0.68 0.105 55)',
    } as React.CSSProperties,
    heroInverted: false,
    keyword: 'Romance',
  },
  Restaurant: {
    // Terracotta: café warmth
    cssVars: {
      '--accent': 'oklch(0.62 0.115 45)',
      '--ring': 'oklch(0.62 0.115 45)',
    } as React.CSSProperties,
    heroInverted: false,
    keyword: 'Warmth',
  },
  Jeweller: {
    // Full brass on a dark hero: low-lit showroom luxury
    cssVars: {
      '--accent': 'oklch(0.74 0.12 80)',
      '--ring': 'oklch(0.74 0.12 80)',
    } as React.CSSProperties,
    heroInverted: true,
    keyword: 'Trust',
  },
  'Coaching Institute': {
    // Subdued bronze: calm, factual, credible
    cssVars: {
      '--accent': 'oklch(0.56 0.06 70)',
      '--ring': 'oklch(0.56 0.06 70)',
    } as React.CSSProperties,
    heroInverted: false,
    keyword: 'Credibility',
  },
  Salon: {
    // Soft blush-brass: fresh and light
    cssVars: {
      '--accent': 'oklch(0.7 0.085 35)',
      '--ring': 'oklch(0.7 0.085 35)',
    } as React.CSSProperties,
    heroInverted: false,
    keyword: 'Freshness',
  },
  Hotel: brass,
}
