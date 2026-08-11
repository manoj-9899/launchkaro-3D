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
  /** Short one-liner used in cards and lists */
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
    clientName: 'Saanjh Baagh',
    industry: 'Wedding Venue',
    city: 'Jaipur',
    isConcept: true,
    summary:
      'A concept website for a heritage garden venue — built to turn Instagram browsers into site-visit bookings.',
    description:
      'Saanjh Baagh is a concept project: a fictional heritage garden wedding venue in Jaipur, designed to show how we approach venue websites — where the product being sold is a feeling, and the conversion is a site visit.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'Saanjh Baagh is a 4-acre heritage garden venue on the outskirts of Jaipur — frangipani-lined lawns, a restored 19th-century baradari as the mandap backdrop, and capacity for 200 to 1,200 guests. Most enquiries come from couples and parents who found the venue on Instagram or through a wedding planner.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Venues like this typically have no real website — a WhatsApp number in an Instagram bio and a PDF rate card. Families researching a once-in-a-lifetime spend are asked to make a shortlist decision from nine square crops and a forwarded price list.',
          'The result: enquiries arrive cold, half of them outside the venue’s budget band, and the team spends hours on calls that never convert to a site visit.',
        ],
        points: [
          'No way to feel the venue at dusk — the hour it actually sells',
          'No capacity, layout, or season information before the first call',
          'Every enquiry unqualified: budget, date, and guest count unknown',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'We designed the site around the golden hour — full-bleed dusk photography, a virtual walk of the ceremony-to-dinner flow, and honest capacity and season pages so families self-qualify before they ever call.',
          'The enquiry flow asks the three questions the venue team always asks first — date window, guest count, budget band — and confirms on WhatsApp, where these conversations actually live.',
        ],
        points: [
          'Dusk-first photography direction and a "your evening here" walkthrough',
          'Capacity, layout, and monsoon-season pages that pre-answer the first call',
          'A three-question enquiry form with WhatsApp confirmation',
          'Planner-facing page with floor plans and vendor policies',
        ],
      },
      result: {
        heading: 'The intended result',
        paragraphs: [
          'As a concept project, these are the outcomes this design is engineered for — the numbers we would measure against for a real venue of this profile.',
        ],
      },
    },
    outcomes: [
      'Enquiries arrive pre-qualified by date, guest count, and budget',
      'More site-visit bookings from the same Instagram traffic',
      'Fewer hours lost to calls that were never a fit',
    ],
    serviceSlugs: ['website-design', 'booking-enquiry-systems'],
    coverImage: {
      src: '/images/projects/saanjh-baagh-cover.png',
      alt: 'Website mockup for Saanjh Baagh, a heritage garden wedding venue, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'daana-coffee-house',
    title: 'A café site that fills tables on weekday mornings',
    clientName: 'Daana Coffee House',
    industry: 'Restaurant',
    city: 'Pune',
    isConcept: true,
    summary:
      'A concept website for a neighbourhood café — warm, fast, and built to convert Google searches into walk-ins.',
    description:
      'Daana Coffee House is a concept project: a fictional single-origin café in Pune, designed to show how we approach restaurant and café websites — where Google Maps is the front door and the menu is the salesperson.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'Daana is a 40-seat specialty coffee house in a Pune residential neighbourhood — house-roasted single origins, an all-day brunch menu, and a loyal weekend crowd. Nearly every new customer finds it by searching "cafes near me" on Google Maps.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Cafés like Daana live and die by their Google presence, but most have a listing with old photos, an unreadable menu PDF, and no answer to the questions people actually ask: is there seating right now, is it laptop-friendly, do they take reservations for six?',
          'Weekends are full; the business problem is Tuesday at 11am.',
        ],
        points: [
          'Menu trapped in a PDF that takes 20 seconds to load on mobile data',
          'No weekday story — the same site sells Saturday brunch and Tuesday coffee',
          'Google Business Profile unmanaged: old hours, unanswered reviews',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'We built the site mobile-first around the two moments that matter: the person on Maps deciding in 10 seconds, and the regular checking if the seasonal menu changed.',
          'A fast HTML menu with photographs of the ten bestsellers, a weekday page selling the café as a workspace, and a Google Business Profile kept as fresh as the pastry case.',
        ],
        points: [
          'One-tap menu that loads instantly on mobile data — no PDF',
          'A "weekdays at Daana" page for the laptop-and-flat-white crowd',
          'Table enquiries for groups of five plus, confirmed on WhatsApp',
          'Google Business Profile optimisation with a review-reply rhythm',
        ],
      },
      result: {
        heading: 'The intended result',
        paragraphs: [
          'As a concept project, these are the outcomes this design is engineered for — the metrics we would track for a real café of this size.',
        ],
      },
    },
    outcomes: [
      'Higher Maps-to-visit conversion from a menu people can actually read',
      'Weekday footfall lifted by selling the café as a workspace',
      'Group bookings captured instead of lost to phone tag',
    ],
    serviceSlugs: ['website-design', 'local-seo', 'booking-enquiry-systems'],
    coverImage: {
      src: '/images/projects/daana-coffee-cover.png',
      alt: 'Website mockup for Daana Coffee House, a specialty café, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'ratanlal-and-sons-jewellers',
    title: 'A jeweller’s website that earns three generations of trust',
    clientName: 'Ratanlal & Sons',
    industry: 'Jeweller',
    city: 'Ahmedabad',
    isConcept: true,
    summary:
      'A concept website for a legacy family jeweller — built to bring the showroom’s trust online and book private viewings.',
    description:
      'Ratanlal & Sons is a concept project: a fictional third-generation jewellery house in Ahmedabad, designed to show how we approach jeweller websites — where trust is the product and the conversion is a showroom appointment.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'Ratanlal & Sons is a third-generation jewellery house in Ahmedabad’s Manek Chowk — known for bridal polki sets, BIS-hallmarked gold, and customers whose grandmothers bought from the same counter. Big purchases still happen in person, over tea, across a velvet tray.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'A jeweller’s reputation is built over decades in a showroom — and lost in three seconds on a bad website. Younger buyers research online first, and a legacy house with no digital presence quietly loses the wedding shortlist to chain stores with polished apps.',
          'The family’s dilemma: e-commerce feels wrong for lakh-rupee purchases, but invisibility is worse.',
        ],
        points: [
          'No online proof of the craftsmanship the showroom is famous for',
          'Wedding shoppers shortlist online before they ever visit Manek Chowk',
          'Hallmarking, buyback, and making-charge policies explained only in person',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'We designed a website that behaves like the showroom: unhurried, low-lit, and generous with proof. No cart, no checkout — the site’s single conversion is a private viewing appointment.',
          'Collection pages photograph the polki work the way a counter light does, and a plainly written trust page covers hallmarking, buyback, and making charges — the questions families are too polite to ask first.',
        ],
        points: [
          'Dark, editorial collection pages with macro craftsmanship photography',
          'A "how we price" trust page: hallmarking, buyback, making charges',
          'Private viewing appointments with WhatsApp confirmation',
          'Three-generation story page anchoring the house’s legacy',
        ],
      },
      result: {
        heading: 'The intended result',
        paragraphs: [
          'As a concept project, these are the outcomes this design is engineered for — what we would measure for a real jewellery house of this standing.',
        ],
      },
    },
    outcomes: [
      'Wedding shortlists won before the family ever visits the showroom',
      'Private viewing appointments from a website with no checkout',
      'Trust questions answered online, so counter time is spent selling',
    ],
    serviceSlugs: ['website-design', 'local-seo'],
    coverImage: {
      src: '/images/projects/ratanlal-jewellers-cover.png',
      alt: 'Website mockup for Ratanlal & Sons, a legacy jewellery house, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'drishti-classes',
    title: 'A coaching website that parents trust with results',
    clientName: 'Drishti Classes',
    industry: 'Coaching Institute',
    city: 'Indore',
    isConcept: true,
    summary:
      'A concept website for a JEE/NEET coaching institute — built on verifiable results, faculty depth, and demo-class bookings.',
    description:
      'Drishti Classes is a concept project: a fictional JEE and NEET coaching institute in Indore, designed to show how we approach education websites — where parents are the real audience and credibility is the entire pitch.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'Drishti Classes coaches around 800 students a year for JEE and NEET from two centres in Indore — small batches, faculty who stay for years, and results that hold up without creative counting. Admissions peak in a frantic six-week window after board exams.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Coaching marketing has a credibility crisis: every institute claims toppers, and parents have learned to distrust the posters. A website that shouts ranks in neon gradients reads exactly like the billboards families already ignore.',
          'Meanwhile the decision-makers — parents — want answers no coaching site gives plainly: who exactly teaches, how big are batches, what happens when a child falls behind.',
        ],
        points: [
          'Results claims indistinguishable from every competitor’s',
          'Faculty — the real differentiator — hidden behind stock photos',
          'Admission enquiries arriving by phone in one overwhelming season',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'We designed the site like a prospectus, not a poster: calm, factual, and generous with the details parents actually weigh. Results are published with batch sizes and years — verifiable, not vague.',
          'Every faculty member gets a real profile with qualifications and years at the institute, and a demo-class booking flow spreads the admission-season load out of the phone line.',
        ],
        points: [
          'Results published with context: batch size, year, verifiable ranks',
          'Faculty profiles with qualifications, subjects, and tenure',
          'Demo-class and counselling bookings with WhatsApp confirmation',
          'A parents’ FAQ covering batch size, doubt support, and fees',
        ],
      },
      result: {
        heading: 'The intended result',
        paragraphs: [
          'As a concept project, these are the outcomes this design is engineered for — what admission season should look like for an institute of this size.',
        ],
      },
    },
    outcomes: [
      'Demo-class bookings replace an overwhelmed admission phone line',
      'Parents arrive at counselling already convinced by faculty depth',
      'Credible, contextual results that stand apart from topper posters',
    ],
    serviceSlugs: ['website-design', 'booking-enquiry-systems', 'local-seo'],
    coverImage: {
      src: '/images/projects/drishti-classes-cover.png',
      alt: 'Website mockup for Drishti Classes, a JEE and NEET coaching institute, shown on a laptop and phone',
    },
    gallery: [],
    featured: true,
  },
  {
    slug: 'mirra-salon',
    title: 'A salon website that books chairs while stylists work',
    clientName: 'Mirra Salon',
    industry: 'Salon',
    city: 'Bengaluru',
    isConcept: true,
    summary:
      'A concept website for a neighbourhood salon — transparent pricing, stylist profiles, and appointments without phone tag.',
    description:
      'Mirra Salon is a concept project: a fictional unisex salon in Bengaluru’s Indiranagar, designed to show how we approach salon websites — where the booking is the business and the stylist is the brand.',
    caseStudy: {
      business: {
        heading: 'The business',
        paragraphs: [
          'Mirra is an eight-chair unisex salon in Indiranagar — colour work is the specialty, regulars book the same stylist for years, and Saturday slots go by Wednesday. New clients come from Instagram and Google in roughly equal measure.',
        ],
      },
      problem: {
        heading: 'The problem',
        paragraphs: [
          'Salons lose bookings in the gap between intent and confirmation: a client DMs at 11pm, the front desk replies at 10am, and by then she’s booked elsewhere. Pricing lives on a laminated card at reception, so every enquiry starts with "how much for balayage?"',
          'Aggregator apps fill the gap — and take a commission on clients the salon’s own reputation earned.',
        ],
        points: [
          'Bookings lost overnight while DMs wait for the front desk',
          'No public pricing, so every enquiry is the same first question',
          'Aggregator commissions on regulars who would book direct',
        ],
      },
      solution: {
        heading: 'The solution',
        paragraphs: [
          'We built the site around the 11pm booking: full service menu with transparent pricing, stylist profiles with their colour portfolios, and an appointment request flow that confirms on WhatsApp by morning.',
          'The design is fresh and light — closer to a skincare brand than a price list — because for a salon, the website is the first impression of the chair.',
        ],
        points: [
          'Full price list online — every service, every level of stylist',
          'Stylist profiles with specialties and Instagram portfolios',
          'Appointment requests any hour, confirmed on WhatsApp',
          'Direct booking that sidesteps aggregator commissions',
        ],
      },
      result: {
        heading: 'The intended result',
        paragraphs: [
          'As a concept project, these are the outcomes this design is engineered for — the difference direct booking makes to an eight-chair salon.',
        ],
      },
    },
    outcomes: [
      'Overnight enquiries captured instead of lost to competitors',
      'Fewer "how much?" calls — pricing answers itself',
      'Commission-free direct bookings from regulars and referrals',
    ],
    serviceSlugs: ['website-design', 'booking-enquiry-systems', 'local-seo'],
    coverImage: {
      src: '/images/projects/mirra-salon-cover.png',
      alt: 'Website mockup for Mirra Salon, a Bengaluru unisex salon, shown on a laptop and phone',
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
