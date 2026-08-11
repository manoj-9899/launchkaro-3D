export interface Service {
  slug: string
  title: string
  /** Short one-liner used in cards and lists */
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
    slug: 'website-design',
    title: 'Website Design & Build',
    summary:
      'A premium, mobile-first website that makes customers trust you before they call.',
    description:
      'We design and build your website end-to-end — from copy and photography direction to launch. Every site is crafted to look premium on the phones your customers actually use, load fast on Indian networks, and turn visitors into enquiries.',
    industries: [
      'Hotels',
      'Restaurants',
      'Wedding Venues',
      'Coaching Institutes',
      'Salons',
      'Jewellers',
    ],
    deliverables: [
      'Custom design, not a template',
      'Mobile-first, fast-loading pages',
      'Enquiry and WhatsApp integration',
      'Photography and copy direction',
      'Launch on your own domain',
    ],
    whoFor:
      "Businesses whose current website — or lack of one — undersells them. You run a good hotel, restaurant, venue, institute, salon, or showroom, but when customers look you up, what they find doesn't match what you've built. Also for owners starting fresh who want to get it right the first time.",
    outcome:
      'Customers who find you online trust you before they call. Your website stops being an excuse and starts being the reason enquiries come in — from people who have already decided you look worth their money.',
  },
  {
    slug: 'local-seo',
    title: 'Google & Local Presence',
    summary:
      'Show up when nearby customers search for what you do.',
    description:
      'Most of your customers find you on Google — search and Maps — before they ever visit. We set up and optimise your Google Business Profile, local SEO, and reviews strategy so you appear where it matters.',
    industries: [
      'Restaurants',
      'Salons',
      'Coaching Institutes',
      'Jewellers',
    ],
    deliverables: [
      'Google Business Profile setup & optimisation',
      'Local SEO for your city and locality',
      'Review collection strategy',
      'Search performance reporting',
    ],
    whoFor:
      "Businesses that depend on local footfall and 'near me' searches. If a customer in your city searches for what you do and finds your competitor first — or finds you with old photos, wrong timings, and three unanswered reviews — this is for you.",
    outcome:
      "You show up when nearby customers are actively looking, with a profile that makes them choose you. More calls, more direction requests, more walk-ins — from people who were already ready to buy.",
  },
  {
    slug: 'booking-enquiry-systems',
    title: 'Bookings & Enquiries',
    summary:
      'Let customers book tables, rooms, appointments, or demos — without phone tag.',
    description:
      'We add booking and enquiry flows that fit how your business actually works: table reservations, room enquiries, salon appointments, batch registrations, or showroom visits — with WhatsApp confirmations your customers already understand.',
    industries: [
      'Hotels',
      'Restaurants',
      'Wedding Venues',
      'Salons',
      'Coaching Institutes',
    ],
    deliverables: [
      'Booking or enquiry flow tailored to your business',
      'WhatsApp notifications and confirmations',
      'Simple dashboard for your team',
      'No per-booking commission',
    ],
    whoFor:
      "Businesses losing bookings to missed calls and slow replies. If enquiries come in while you're serving customers, if your front desk is a WhatsApp inbox nobody owns, or if you're paying aggregator commissions on bookings that should be yours — this fixes that.",
    outcome:
      'Enquiries stop slipping through the cracks. Customers book at midnight without waiting for you to pick up, confirmations go out automatically, and every booking lands in one place your team actually checks — with no commission taken off the top.',
  },
  {
    slug: 'care-plans',
    title: 'Care & Growth Plans',
    summary:
      'We keep your site fresh, fast, and working — so you can run your business.',
    description:
      'A website is not a one-time purchase. Our monthly care plans cover updates, seasonal offers, new photos and menus, performance monitoring, and a direct line to us on WhatsApp when you need changes.',
    industries: [
      'Hotels',
      'Restaurants',
      'Wedding Venues',
      'Coaching Institutes',
      'Salons',
      'Jewellers',
    ],
    deliverables: [
      'Monthly content and offer updates',
      'Performance and uptime monitoring',
      'Priority WhatsApp support',
      'Quarterly improvement reviews',
    ],
    whoFor:
      "Owners who don't have time to be their own webmaster. If your menu changed six months ago but your website hasn't, if your Diwali offer never made it online, or if 'we should update the site' has been on your list all year — this is the plan that makes it someone else's job.",
    outcome:
      'Your website stays as current as your business. Seasonal offers go live on time, new photos and menus appear without you chasing anyone, and small problems get fixed before customers ever see them.',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
