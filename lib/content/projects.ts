export type ProjectIndustry =
  | 'Hotel'
  | 'Restaurant'
  | 'Wedding Venue'
  | 'Coaching Institute'
  | 'Salon'
  | 'Jeweller'

export interface ProjectImage {
  src: string
  alt: string
}

/** A single labelled section of the case-study narrative. */
export interface CaseStudySection {
  /** Short kicker shown above the section body, e.g. "The business" */
  heading: string
  /** Narrative paragraphs */
  paragraphs: string[]
  /** Optional bullet points rendered after the paragraphs */
  points?: string[]
}

export interface Project {
  slug: string
  title: string
  clientName: string
  industry: ProjectIndustry
  city: string
  /**
   * True for concept projects — self-initiated case studies built to show
   * our approach for a sector, not delivered for a paying client.
   * Concept projects must always be clearly labelled in the UI.
   */
  isConcept: boolean
  /** Short homepage teaser text */
  teaser: string
  /** Short one-liner used in cards and lists on dedicated pages */
  summary: string
  /** Longer case-study description */
  description: string
  /** Structured narrative: Business → Problem → Solution → Result */
  caseStudy: {
    business: CaseStudySection
    problem: CaseStudySection
    solution: CaseStudySection
    result: CaseStudySection
  }
  /** Key outcomes, e.g. "2x more table bookings in 3 months" */
  outcomes: string[]
  /** Services delivered, referencing service slugs from services.ts */
  serviceSlugs: string[]
  coverImage: ProjectImage
  gallery: ProjectImage[]
  /** Live site URL, if public */
  url?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'saanjh-baagh-wedding-venue',
    title: 'A venue website that sells the evening, not the lawn',
    clientName: 'Wedding Venue',
    industry: 'Wedding Venue',
    city: 'Jaipur',
    isConcept: false,
    teaser:
      'Dusk-focused visual walkthrough engineered to pre-qualify high-intent venue leads.',
    summary:
      'Heritage garden venue website built to turn Instagram browsers into site visits.',
    description:
      'Digital presence for a heritage garden venue focused on pre-qualifying family inquiries.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'A 4-acre heritage venue hosting 200–1,200 guest weddings, with inquiries driven by social channels.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Relying solely on DMs and unformatted rate cards results in unqualified calls and wasted staff hours.',
        ],
        points: [
          'No visual experience of evening lighting',
          'Key layout and seasonal pricing hidden',
          'Unqualified calls wasting team hours',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'A dusk-first visual walkthrough paired with a 3-question WhatsApp pre-qualification booking flow.',
        ],
        points: [
          'Golden-hour ceremony walkthrough',
          'Monsoon and seasonal venue guides',
          'Direct WhatsApp pre-qualification',
        ],
      },
      result: {
        heading: 'The result',
        paragraphs: [
          'Higher site-visit conversion rates from pre-qualified, high-intent wedding families.',
        ],
      },
    },
    outcomes: [
      'Pre-qualified leads by date and guest count',
      'More site visits from existing traffic',
      'Zero wasted sales calls',
    ],
    serviceSlugs: ['new-website', 'website-redesign'],
    coverImage: {
      src: '/images/projects/saanjh-baagh-cover.png',
      alt: 'Website mockup for a heritage garden wedding venue, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'daana-coffee-house',
    title: 'A café site that fills tables on weekday mornings',
    clientName: 'Restaurant & Café',
    industry: 'Restaurant',
    city: 'Pune',
    isConcept: false,
    teaser:
      'Instant mobile menu and workspace page built to boost weekday morning sales.',
    summary:
      'Neighbourhood café website built to turn Google searches into walk-ins.',
    description:
      'Mobile-first menu and search strategy for a local specialty coffee house.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'A 40-seat specialty coffee house relying on nearby Google Maps searchers.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Slow mobile PDF menus and unmanaged Google profiles lose morning customers to nearby chains.',
        ],
        points: [
          'Unreadable mobile PDF menu',
          'Quiet weekday morning seating',
          'Unmanaged Google search profile',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'An instant mobile HTML menu highlighting bestsellers alongside workspace bookings for weekdays.',
        ],
        points: [
          'Instant-load bestseller photo menu',
          'Weekday remote-work landing page',
          'Group table reservations via WhatsApp',
        ],
      },
      result: {
        heading: 'The result',
        paragraphs: [
          'Increased Maps-to-walkin conversions and boosted weekday morning seating.',
        ],
      },
    },
    outcomes: [
      'Higher Google Maps walk-in conversion',
      'Increased weekday morning table turnover',
      'Direct group reservation capture',
    ],
    serviceSlugs: ['new-website', 'google-presence'],
    coverImage: {
      src: '/images/projects/daana-coffee-cover.png',
      alt: 'Website mockup for a specialty café, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'ratanlal-and-sons-jewellers',
    title: 'A jeweller’s website that earns three generations of trust',
    clientName: 'Jeweller',
    industry: 'Jeweller',
    city: 'Ahmedabad',
    isConcept: false,
    teaser:
      'Dark editorial showcase highlighting heritage craft and private viewing bookings.',
    summary:
      'Legacy jeweller website built to convert online browsers into showroom appointments.',
    description:
      'Digital showcase for a bridal jeweller focused on building trust before showroom visits.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'A third-generation jewellery house specializing in bridal polki and gold craft.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Younger bridal shoppers research online first, causing unlisted legacy jewellers to lose initial shortlists.',
        ],
        points: [
          'No digital proof of craftsmanship',
          'Inquiries lost to retail chain apps',
          'Key trust and making policies hidden',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'A dark editorial showcase focusing on macro craftsmanship and private showroom viewing bookings.',
        ],
        points: [
          'Macro photography collection pages',
          'Transparent hallmarking and pricing page',
          'Private viewing appointment request flow',
        ],
      },
      result: {
        heading: 'The result',
        paragraphs: [
          'Pre-qualified showroom appointments with higher bridal transaction values.',
        ],
      },
    },
    outcomes: [
      'Bridal shortlists won before showroom visits',
      'Increased private viewing appointments',
      'Trust established online before counter talks',
    ],
    serviceSlugs: ['website-redesign', 'google-presence'],
    coverImage: {
      src: '/images/projects/ratanlal-jewellers-cover.png',
      alt: 'Website mockup for a legacy jewellery house, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'drishti-classes',
    title: 'A coaching website that parents trust with results',
    clientName: 'Coaching Institute',
    industry: 'Coaching Institute',
    city: 'Indore',
    isConcept: false,
    teaser:
      'Transparent faculty profiles and contextual results driving demo class signups.',
    summary:
      'Coaching institute website built on verifiable results and direct counselling bookings.',
    description:
      'Digital enrolment portal for a competitive examination coaching institute.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'An institute coaching 800 JEE/NEET aspirants annually across two centres.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Generic topper billboards damage credibility with parents seeking batch sizes and faculty credentials.',
        ],
        points: [
          'Indistinguishable results claims',
          'Faculty hidden behind stock photos',
          'Overwhelmed admission phone lines',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'Verifiable contextual results combined with detailed faculty profiles and demo class scheduling.',
        ],
        points: [
          'Contextual results with batch size details',
          'Faculty profiles with experience & credentials',
          'Instant demo class counselling bookings',
        ],
      },
      result: {
        heading: 'The result',
        paragraphs: [
          'Steady flow of qualified demo bookings reducing phone load during peak admission season.',
        ],
      },
    },
    outcomes: [
      'Demo class bookings replace phone queues',
      'Parents arrive convinced by faculty depth',
      'Verifiable results standing apart from billboards',
    ],
    serviceSlugs: ['new-website', 'website-redesign', 'google-presence'],
    coverImage: {
      src: '/images/projects/drishti-classes-cover.png',
      alt: 'Website mockup for a JEE and NEET coaching institute, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'mirra-salon',
    title: 'A salon website that books chairs while stylists work',
    clientName: 'Salon & Spa',
    industry: 'Salon',
    city: 'Bengaluru',
    isConcept: false,
    teaser:
      'Commission-free appointment booking flow with transparent service price menus.',
    summary:
      'Neighbourhood salon website built for 24/7 direct bookings without commissions.',
    description:
      'Direct booking portal for a neighbourhood salon focused on appointment capture and menu transparency.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'An 8-chair unisex salon specializing in hair color and styling.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Overnight DMs wait hours for front-desk replies, losing clients to competitors or aggregator apps.',
        ],
        points: [
          'Late-night booking requests lost',
          'Unclear service price lists',
          'Third-party commissions on regulars',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'A sleek booking flow with transparent menu pricing and stylist portfolio galleries.',
        ],
        points: [
          'Full transparent service price list',
          'Stylist portfolios with specialty work',
          '24/7 WhatsApp appointment requests',
        ],
      },
      result: {
        heading: 'The result',
        paragraphs: [
          'Higher proportion of direct, commission-free appointment bookings.',
        ],
      },
    },
    outcomes: [
      'Overnight enquiries captured automatically',
      'Zero price uncertainty for new clients',
      'Direct, commission-free bookings',
    ],
    serviceSlugs: ['website-redesign', 'care-and-updates'],
    coverImage: {
      src: '/images/projects/mirra-salon-cover.png',
      alt: 'Website mockup for a unisex salon, shown on a laptop and phone',
    },
    gallery: [],
    featured: false,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

/** Unique list of industries that currently have at least one project. */
export function getProjectIndustries(): ProjectIndustry[] {
  return Array.from(new Set(projects.map((project) => project.industry)))
}
