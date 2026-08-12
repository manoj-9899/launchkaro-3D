export interface Service {
  slug: string
  title: string
  /** Short homepage teaser text */
  teaser: string
  /** Short one-liner used in cards and lists on dedicated pages */
  summary: string
  /** Longer description used on detail sections */
  description: string
  /** Industries this service most commonly serves */
  industries: string[]
  /** What's included */
  deliverables: string[]
  /** Who this service is for — the situation, not just the industry */
  whoFor: string
  /** The business outcome this service is engineered to produce */
  outcome: string
}

export const services: Service[] = [
  {
    slug: 'new-website',
    title: 'New Website',
    teaser:
      'Custom mobile-first website built from scratch to launch your business online.',
    summary:
      'Complete digital setup built from scratch for businesses with no web presence.',
    description:
      'For businesses starting fresh with no web presence. Custom design, clear messaging, fast mobile loading, and direct WhatsApp enquiry integration so new customers can reach you immediately.',
    industries: [
      'Hotels & Resorts',
      'Restaurants & Cafés',
      'Wedding Venues',
      'Coaching Institutes',
      'Salons & Spas',
      'Jewellery Showrooms',
    ],
    deliverables: [
      'Custom mobile-first website design',
      'Direct WhatsApp enquiry integration',
      'Content structure and photo optimization',
      'Google search index registration',
      'Domain and hosting configuration',
    ],
    whoFor:
      'Businesses with no web presence looking to establish instant credibility.',
    outcome:
      'A professional digital storefront that captures local customer interest from day one.',
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    teaser:
      'Modern mobile-first overhaul for outdated, slow, or low-converting websites.',
    summary:
      'Complete visual and technical overhaul to turn bounce traffic into enquiries.',
    description:
      'For businesses with a dated or non-mobile-friendly website. We re-architect your layout, speed up loading times, and install direct WhatsApp action paths to stop losing customers to competitors.',
    industries: [
      'Hotels & Resorts',
      'Restaurants & Cafés',
      'Wedding Venues',
      'Coaching Institutes',
      'Salons & Spas',
      'Jewellery Showrooms',
    ],
    deliverables: [
      'Complete visual layout modernization',
      'Mobile performance and speed overhaul',
      'Streamlined lead paths & WhatsApp buttons',
      'SEO structure preservation and upgrade',
    ],
    whoFor:
      'Businesses losing leads to slow loading speeds or an outdated mobile experience.',
    outcome:
      'A fresh, high-performing site built to convert existing traffic into customer enquiries.',
  },
  {
    slug: 'google-presence',
    title: 'Google Presence Setup',
    teaser:
      'Google Business Profile optimization so nearby customers find you on Maps.',
    summary:
      'Local SEO and Maps setup to capture high-intent nearby searchers.',
    description:
      'Claiming, verifying, and optimizing your Google Business Profile alongside local search tags so customers searching for your services in your city find your business first.',
    industries: [
      'Restaurants & Cafés',
      'Salons & Spas',
      'Coaching Institutes',
      'Jewellery Showrooms',
    ],
    deliverables: [
      'Google Business Profile verification & setup',
      'Local search keyword & category tagging',
      'Photo gallery & menu/catalog upload',
      'Direct WhatsApp & phone call integration',
    ],
    whoFor:
      'Local businesses missing out on Google Maps traffic and local searchers.',
    outcome:
      'Top local search placement driving direct calls, directions, and walk-ins.',
  },
  {
    slug: 'care-and-updates',
    title: 'Care & Updates',
    teaser:
      'Optional ongoing support for menu changes, seasonal offers, and maintenance.',
    summary:
      'Monthly content updates, offer launches, and technical upkeep.',
    description:
      'Hassle-free maintenance and ongoing content updates. Whenever you have a menu change, festive offer, or new photos, send them on WhatsApp and they go live immediately.',
    industries: [
      'Hotels & Resorts',
      'Restaurants & Cafés',
      'Wedding Venues',
      'Coaching Institutes',
      'Salons & Spas',
      'Jewellery Showrooms',
    ],
    deliverables: [
      'Ongoing content, menu, and photo updates',
      'Technical maintenance & uptime checks',
      'Direct WhatsApp line for instant edits',
      'Periodic performance reviews',
    ],
    whoFor:
      'Owners who want continuous site maintenance without spending their own time.',
    outcome:
      'A website that stays accurate, fresh, and fully operational year-round.',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
