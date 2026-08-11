import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

import { ContactForm } from '@/components/contact/contact-form'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { getWhatsAppHref, site } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Contact — LaunchKaro',
  description:
    'Get in touch with LaunchKaro on WhatsApp or by email. A boutique web studio for Indian hotels, restaurants, wedding venues, coaching institutes, salons, and jewellers.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="spacious" aria-label="Contact">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            {/* Left: heading + direct options */}
            <div className="flex flex-col gap-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Contact
              </p>
              <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
                Talk to us the way you&apos;d talk to a friend
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                No sales scripts, no ticket numbers. Message us on WhatsApp —
                it&apos;s where we do most of our work with clients — or send
                an email if you prefer.
              </p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  variant="accent"
                  size="xl"
                  nativeButton={false}
                  render={
                    <a
                      href={getWhatsAppHref(
                        "Hi LaunchKaro! I'd like to talk about a website for my business.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <MessageCircle data-icon="inline-start" />
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  nativeButton={false}
                  render={<a href={`mailto:${site.contact.email}`} />}
                >
                  <Mail data-icon="inline-start" />
                  {site.contact.email}
                </Button>
              </div>

              <p className="text-muted-foreground text-sm">
                {site.contact.phone} · {site.contact.city}
              </p>
            </div>

            {/* Right: compact message form */}
            <div className="flex flex-col gap-8">
              <div className="bg-card border-border rounded-xl border p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-2">
                  <h2 className="font-serif text-2xl text-balance">
                    Or write it out here
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Three fields, then it opens in WhatsApp ready to send.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>

        <Section tone="card" spacing="compact" aria-label="Recommended first step">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-2xl flex-col gap-2">
              <h2 className="font-serif text-2xl text-balance">
                Not sure what to say? Start with the free audit.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                It&apos;s the first step of our process anyway — you tell us
                about your business, and we send back a plain-language review
                of how you show up online. No obligation.
              </p>
            </div>
            <Button
              variant="outline"
              size="xl"
              nativeButton={false}
              render={<Link href="/audit" />}
            >
              Get a Free Website Audit
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
