'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getWhatsAppHref, site } from '@/lib/content/site'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="max-w-shell mx-auto flex h-16 w-full items-center justify-between px-5 md:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="accent"
            size="lg"
            nativeButton={false}
            render={
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            {site.ctas.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground -mr-1 flex size-10 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-border bg-background border-t md:hidden"
        >
          <div className="max-w-shell mx-auto flex w-full flex-col gap-1 px-5 py-4 md:px-8">
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:bg-muted rounded-md px-3 py-3 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button
                variant="accent"
                size="xl"
                className="w-full"
                nativeButton={false}
                render={
                  <a
                    href={getWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                onClick={() => setMenuOpen(false)}
              >
                {site.ctas.primary.label}
              </Button>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
