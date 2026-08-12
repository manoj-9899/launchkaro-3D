import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getWhatsAppHref, site } from '@/lib/content/site'
import { services } from '@/lib/content/services'

export function Footer() {
  return (
    <footer className="dark bg-background text-foreground border-border border-t">
      {/* MOBILE FOOTER (< md): 5 Stacked Sections with Horizontal Dividers */}
      <div className="mx-auto w-full max-w-shell px-5 py-6 md:hidden">
        <div className="flex flex-col">
          {/* 1. BRAND BLOCK */}
          <div className="pb-5">
            <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">
              High-converting websites for businesses across Maharashtra.
            </p>
          </div>

          {/* Divider 1 */}
          <div className="border-t border-border/60" />

          {/* 2. NAV GRID */}
          <div className="py-5 grid grid-cols-2 gap-x-6 gap-y-5">
            {/* Top-Left: Explore */}
            <nav aria-label="Explore" className="flex flex-col gap-1.5">
              <p className="text-accent text-[11px] font-semibold tracking-widest uppercase">
                Explore
              </p>
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Top-Right: Services */}
            <nav aria-label="Services" className="flex flex-col gap-1.5">
              <p className="text-accent text-[11px] font-semibold tracking-widest uppercase">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>

            {/* Bottom-Left: Sectors */}
            <nav aria-label="Sectors" className="flex flex-col gap-1.5">
              <p className="text-accent text-[11px] font-semibold tracking-widest uppercase">
                Sectors
              </p>
              <Link
                href="/website-for-restaurants"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Restaurants
              </Link>
              <Link
                href="/website-for-hotels"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Hotels &amp; Resorts
              </Link>
              <Link
                href="/website-for-salons"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Salons &amp; Spas
              </Link>
              <Link
                href="/website-for-coaching-institutes"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Coaching Institutes
              </Link>
            </nav>

            {/* Bottom-Right: Legal */}
            <nav aria-label="Legal" className="flex flex-col gap-1.5">
              <p className="text-accent text-[11px] font-semibold tracking-widest uppercase">
                Legal &amp; Info
              </p>
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/audit"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Free Website Audit
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground text-xs py-0.5 transition-colors"
              >
                Get In Touch
              </Link>
            </nav>
          </div>

          {/* Divider 2 */}
          <div className="border-t border-border/60" />

          {/* 3. CONTACT BLOCK */}
          <div className="py-5 flex flex-col gap-2.5">
            <p className="text-accent text-[11px] font-semibold tracking-widest uppercase mb-0.5">
              Contact
            </p>
            {/* Row 1: Email */}
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors break-words max-w-full"
            >
              <Mail className="size-4 text-accent shrink-0" aria-hidden="true" />
              <span>{site.contact.email}</span>
            </a>
            {/* Row 2: Phone */}
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="size-4 text-accent shrink-0" aria-hidden="true" />
              <span>{site.contact.phone}</span>
            </a>
            {/* Row 3: WhatsApp */}
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="size-4 text-accent shrink-0" aria-hidden="true" />
              <span>WhatsApp us ({site.contact.phone})</span>
            </a>
          </div>

          {/* Divider 3 */}
          <div className="border-t border-border/60" />

          {/* 4. CTA BUTTON */}
          <div className="py-5">
            <Button
              variant="accent"
              size="lg"
              className="w-full justify-center gap-2 text-sm"
              nativeButton={false}
              render={
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="size-4 shrink-0" />
              <span>Get a Free Website Audit</span>
            </Button>
          </div>

          {/* Divider 4 */}
          <div className="border-t border-border/60" />

          {/* 5. BOTTOM BAR */}
          <div className="pt-5 flex flex-col gap-3 text-xs text-muted-foreground">
            {/* Row 1: Pin icon + location text */}
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="size-3.5 text-accent shrink-0" aria-hidden="true" />
              <span>Based in Latur — working across Maharashtra</span>
            </div>
            {/* Row 2: Copyright on left, Privacy & Terms links on right */}
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span>&copy; {new Date().getFullYear()} LaunchKaro.</span>
              <div className="flex items-center gap-3">
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <span className="text-muted-foreground/40">·</span>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= md): Standard 5-Column Studio Layout */}
      <div className="hidden md:block mx-auto w-full max-w-shell px-8 py-16 lg:px-12 xl:px-16">
        <div className="grid grid-cols-5 gap-10">
          {/* Column 1: Brand & Blurb */}
          <div className="flex flex-col gap-4 col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty max-w-xs">
              {site.footer.blurb}
            </p>
          </div>

          {/* Column 2: Explore */}
          <nav aria-label="Desktop Navigation" className="flex flex-col gap-3">
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

          {/* Column 3: Services */}
          <nav aria-label="Desktop Services" className="flex flex-col gap-3">
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

          {/* Column 4: Sectors */}
          <nav aria-label="Desktop Sectors" className="flex flex-col gap-3">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Sectors
            </p>
            <Link
              href="/website-for-restaurants"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Restaurants
            </Link>
            <Link
              href="/website-for-hotels"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Hotels &amp; Resorts
            </Link>
            <Link
              href="/website-for-salons"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Salons &amp; Spas
            </Link>
            <Link
              href="/website-for-coaching-institutes"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Coaching Institutes
            </Link>
          </nav>

          {/* Column 5: Contact */}
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
            <p className="text-muted-foreground text-sm">{site.contact.locationLine}</p>
          </div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="border-border mt-12 flex items-center justify-between border-t pt-8 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {site.contact.locationLine}.
          </p>
          <div className="flex gap-6">
            {site.footer.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
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
