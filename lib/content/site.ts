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
  /** Digits only, with country code, e.g. "919876543210" */
  whatsappNumber: string
  /** Prefilled message for WhatsApp CTAs */
  whatsappMessage: string
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
  tagline: 'Websites that make your business look as good as it is.',
  description:
    'A boutique web studio for Indian businesses — hotels, restaurants, wedding venues, coaching institutes, salons, and jewellers. Premium design, built to bring you enquiries.',
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
      body: "Send us your current website — or tell us you don't have one yet. We'll review how you show up on Google, on mobile, and against your competitors, and send you a plain-language report within 48 hours. No jargon, no obligation.",
      buttonLabel: 'Request My Free Audit',
      note: 'Takes 2 minutes. We reply on WhatsApp.',
    },
  },
  contact: {
    email: 'hello@launchkaro.in',
    phone: '+91 98765 43210',
    whatsappNumber: '919876543210',
    whatsappMessage:
      "Hi LaunchKaro! I'd like a free website audit for my business.",
    city: 'Mumbai, India',
  },
  footer: {
    blurb:
      'LaunchKaro is a boutique web studio crafting premium websites for Indian hospitality, education, and retail businesses.',
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    craftedNote: 'Crafted with care in India',
  },
}

/** Builds a wa.me link from the site contact info. */
export function getWhatsAppHref(message: string = site.contact.whatsappMessage): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`
}
