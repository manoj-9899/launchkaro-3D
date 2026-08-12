import type { ProjectIndustry } from './projects'

export interface SectorProblem {
  title: string
  description: string
}

export interface SectorSolution {
  title: string
  description: string
}

export interface SectorContent {
  slug: string
  sectorName: string
  title: string
  metaDescription: string
  h1: string
  subtitle: string
  problemTitle: string
  problems: SectorProblem[]
  solutionTitle: string
  solutions: SectorSolution[]
  industryKey: ProjectIndustry
}

export const sectors: Record<string, SectorContent> = {
  'website-for-restaurants': {
    slug: 'website-for-restaurants',
    sectorName: 'Restaurants & Cafés',
    title: 'Website Design for Restaurants in Maharashtra | LaunchKaro',
    metaDescription:
      'Custom mobile websites and digital menus for restaurants and cafés across Maharashtra. Fast loading, Google Maps SEO, and WhatsApp table bookings.',
    h1: 'Website Design for Restaurants & Cafés in Maharashtra',
    subtitle:
      'Turn local Google searches and Instagram browsers into table reservations and walk-ins.',
    problemTitle: 'Why traditional restaurant marketing loses customers',
    problems: [
      {
        title: 'Unreadable Mobile PDF Menus',
        description:
          'PDF rate cards and unreadable menu images force customers to pinch and zoom on small screens, losing orders to nearby chains.',
      },
      {
        title: 'Quiet Weekday Mornings & Afternoons',
        description:
          'Without dedicated remote-work seating pages or lunch combo offers online, tables stay empty outside weekend rush hours.',
      },
      {
        title: 'Unclaimed Google Maps Traffic',
        description:
          'Nearby customers searching for "café near me" or "best family dinner spot" find competitors because your local listing lacks photos and menu links.',
      },
    ],
    solutionTitle: 'How a LaunchKaro restaurant site fills your tables',
    solutions: [
      {
        title: 'Instant Mobile HTML Bestseller Menu',
        description:
          'Fast-loading digital menu highlighting your signature dishes with high-quality photos and clear prices.',
      },
      {
        title: 'Direct WhatsApp Table & Group Reservations',
        description:
          'Frictionless 3-step booking flow so guests reserve tables or private dining directly with your front desk.',
      },
      {
        title: 'Google Business Profile & Local SEO Setup',
        description:
          'Optimized Google Maps listing that ranks top in your locality when nearby customers search for food.',
      },
    ],
    industryKey: 'Restaurant',
  },
  'website-for-hotels': {
    slug: 'website-for-hotels',
    sectorName: 'Hotels & Resorts',
    title: 'Website Design for Hotels in Maharashtra | LaunchKaro',
    metaDescription:
      'Direct booking websites for hotels and resorts across Maharashtra. Zero commission, fast mobile loading, and direct WhatsApp room enquiries.',
    h1: 'Website Design for Hotels & Resorts in Maharashtra',
    subtitle:
      'Capture direct, commission-free room bookings and wedding venue enquiries.',
    problemTitle: 'Why hotel owners lose revenue to aggregators',
    problems: [
      {
        title: 'Paying 20%+ Commissions to OTAs',
        description:
          'Relying solely on third-party booking platforms burns profit margins on repeat guests and corporate bookings.',
      },
      {
        title: 'Hidden Room & Venue Photos',
        description:
          'Families planning weddings or weekend getaways want high-resolution venue tours and dusk lighting views, not compressed thumbnails.',
      },
      {
        title: 'Slow DM Availability Replies',
        description:
          'Overnight room availability enquiries on Instagram or WhatsApp wait hours for front desk replies, losing guests to competitors.',
      },
    ],
    solutionTitle: 'How a LaunchKaro hotel site drives direct bookings',
    solutions: [
      {
        title: 'Dusk-First Visual Room & Banquet Walkthrough',
        description:
          'Full-screen gallery showcasing rooms, lawn space, and dining amenities to pre-qualify high-intent guests.',
      },
      {
        title: 'Direct WhatsApp Room & Availability Flow',
        description:
          '24/7 direct inquiry form capturing guest count, check-in dates, and room preferences with zero third-party commission.',
      },
      {
        title: 'Corporate & Wedding Package Highlights',
        description:
          'Dedicated package sections that convert event planners and family decision-makers before site visits.',
      },
    ],
    industryKey: 'Wedding Venue',
  },
  'website-for-salons': {
    slug: 'website-for-salons',
    sectorName: 'Salons & Spas',
    title: 'Website Design for Salons in Maharashtra | LaunchKaro',
    metaDescription:
      'Appointment booking websites for salons and spas across Maharashtra. Price menus, stylist portfolios, and 24/7 WhatsApp bookings.',
    h1: 'Website Design for Salons & Spas in Maharashtra',
    subtitle:
      'Book appointments 24/7 while your stylists focus on clients.',
    problemTitle: 'Why salons lose appointment bookings',
    problems: [
      {
        title: 'Overnight DM Requests Go Unanswered',
        description:
          'Clients booking late-night appointments wait hours for front-desk Instagram replies, switching to rival salons.',
      },
      {
        title: 'Unclear Service Pricing',
        description:
          'Without a transparent online service menu, new clients hesitate to book premium hair and skin treatments.',
      },
      {
        title: 'Third-Party Aggregator Fees',
        description:
          'Paying app commissions on loyal repeat clients cuts deeply into your monthly treatment margins.',
      },
    ],
    solutionTitle: 'How a LaunchKaro salon site keeps your chairs full',
    solutions: [
      {
        title: 'Transparent Treatment Price List',
        description:
          'Categorized price menu for hair, skin, bridal, and spa services with clear descriptions.',
      },
      {
        title: 'Stylist Specialty Portfolios',
        description:
          'Visual galleries highlighting signature hair color, styling, and makeover transformations.',
      },
      {
        title: '24/7 Instant WhatsApp Appointment Booking',
        description:
          'Direct appointment request flow letting clients pick services, preferred time slots, and stylists.',
      },
    ],
    industryKey: 'Salon',
  },
  'website-for-coaching-institutes': {
    slug: 'website-for-coaching-institutes',
    sectorName: 'Coaching Institutes',
    title: 'Website Design for Coaching Institutes | LaunchKaro',
    metaDescription:
      'High-converting websites for coaching institutes across Maharashtra. Faculty profiles, verifiable results, and demo class signups.',
    h1: 'Website Design for Coaching Institutes in Maharashtra',
    subtitle:
      'Build parental trust with verifiable results and instant demo class bookings.',
    problemTitle: 'Why generic coaching websites fail to enroll students',
    problems: [
      {
        title: 'Generic Billboard Result Claims',
        description:
          'Exaggerated topper claims without batch size details damage credibility with discerning parents.',
      },
      {
        title: 'Hidden Faculty Credentials',
        description:
          'Parents want to know who is teaching their children before paying admission fees.',
      },
      {
        title: 'Overwhelmed Admission Phone Lines',
        description:
          'Busy admission phone lines during peak admission months result in lost student inquiries.',
      },
    ],
    solutionTitle: 'How a LaunchKaro institute site drives demo class enrolments',
    solutions: [
      {
        title: 'Verifiable Contextual Results Showcase',
        description:
          'Structured results breakdown displaying batch sizes, rank progress, and student testimonials.',
      },
      {
        title: 'Detailed Faculty Experience Profiles',
        description:
          'Transparent teacher profiles highlighting qualifications, teaching experience, and subject mastery.',
      },
      {
        title: 'Instant Demo Class & Counselling Signups',
        description:
          'Direct WhatsApp booking form allowing parents to schedule free demo classes and career counselling sessions.',
      },
    ],
    industryKey: 'Coaching Institute',
  },
}

export function getSector(slug: string): SectorContent | undefined {
  return sectors[slug]
}

export function getAllSectors(): SectorContent[] {
  return Object.values(sectors)
}
