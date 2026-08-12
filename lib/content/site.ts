export interface NavLink {
  label: string
  href: string
}

export interface CtaLink {
  label: string
  href: string
}

export interface ContactInfo {
  email: string
  phone: string
  /** Digits only, with country code, e.g. "918805348821" */
  whatsappNumber: string
  /** Prefilled message for WhatsApp CTAs */
  whatsappMessage: string
  locationLine: string
  city: string
}

export interface SiteContent {
  name: string
  tagline: string
  description: string
  nav: NavLink[]
  ctas: {
    primary: CtaLink
    secondary: CtaLink
    audit: {
      eyebrow: string
      title: string
      body: string
      buttonLabel: string
      note: string
    }
  }
  contact: ContactInfo
  footer: {
    blurb: string
    legalLinks: NavLink[]
    craftedNote: string
  }
}

export const site: SiteContent = {
  name: 'LaunchKaro',
  tagline: 'Websites engineered to bring you customers.',
  description:
    'A boutique web studio crafting high-converting websites for restaurants, hotels, venues, institutes, salons, and jewellers across Maharashtra.',
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/#process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  ctas: {
    primary: { label: 'Get a Free Website Audit', href: '/audit' },
    secondary: { label: 'See Our Work', href: '/work' },
    audit: {
      eyebrow: 'Free Website Audit',
      title: 'Is your website losing you customers?',
      body: "Send us your website or business name. We'll review your Google rank, mobile speed, and local competitors and deliver a plain-language report on WhatsApp within 48 hours.",
      buttonLabel: 'Request My Free Audit',
      note: 'Takes 2 minutes. We reply on WhatsApp.',
    },
  },
  contact: {
    email: 'launchkaro.team@gmail.com',
    phone: '+91 88053 48821',
    whatsappNumber: '918805348821',
    whatsappMessage:
      "Hi LaunchKaro, I'd like a free website audit for my business.",
    locationLine: 'Based in Latur — working with businesses across Maharashtra',
    city: 'Latur, Maharashtra',
  },
  footer: {
    blurb:
      'LaunchKaro is a boutique web studio crafting high-converting websites for businesses across Maharashtra.',
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    craftedNote: 'Based in Latur — working with businesses across Maharashtra',
  },
}

/** Builds a wa.me link from the site contact info. */
export function getWhatsAppHref(message: string = site.contact.whatsappMessage): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`
}
