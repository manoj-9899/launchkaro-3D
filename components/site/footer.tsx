import Link from 'next/link'

import { getWhatsAppHref, site } from '@/lib/content/site'
import { services } from '@/lib/content/services'

export function Footer() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="max-w-shell mx-auto w-full px-5 py-16 md:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-2xl font-semibold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-pretty">
              {site.footer.blurb}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Explore
            </p>
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Services" className="flex flex-col gap-3">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Services
            </p>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Contact
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {site.contact.phone}
            </a>
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              WhatsApp us
            </a>
            <p className="text-muted-foreground text-sm">{site.contact.city}</p>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {site.name}. {site.footer.craftedNote}.
          </p>
          <div className="flex gap-6">
            {site.footer.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
