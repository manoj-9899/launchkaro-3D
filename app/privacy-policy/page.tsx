import type { Metadata } from 'next'

import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Section } from '@/components/site/section'
import { site } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | LaunchKaro Web Studio',
  description:
    'Plain-language privacy policy for LaunchKaro. DPDP Act 2023 compliance and lead data rights.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <Section spacing="default" aria-label="Privacy Policy">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <div className="border-border flex flex-col gap-3 border-b pb-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Legal
              </p>
              <h1 className="font-serif text-4xl font-normal leading-tight text-balance md:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-sm">
                Last updated: August 11, 2026
              </p>
            </div>

            <div className="flex flex-col gap-8 leading-relaxed">
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  1. Overview &amp; DPDP Act Compliance
                </h2>
                <p className="text-muted-foreground text-pretty">
                  LaunchKaro (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a boutique web studio operating in India. We respect your privacy and are committed to protecting personal data in accordance with India&apos;s <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>.
                </p>
                <p className="text-muted-foreground text-pretty">
                  This Privacy Policy explains what information we collect when you request a website audit or contact us, how we use it, and your rights as a Data Principal under Indian law.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground text-pretty">
                  We only collect personal information that you voluntarily submit through our interactive website forms (such as our Free Website Audit form or Contact form). This includes:
                </p>
                <ul className="text-muted-foreground flex flex-col gap-2 pl-5 list-disc">
                  <li>Your name and contact details</li>
                  <li>WhatsApp phone number</li>
                  <li>Business name and business category</li>
                  <li>Website URL (if provided)</li>
                  <li>Message content or specific requirements you share with us</li>
                </ul>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  3. Purpose of Collection
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Your personal data is collected strictly for the following purposes:
                </p>
                <ul className="text-muted-foreground flex flex-col gap-2 pl-5 list-disc">
                  <li>Reviewing your digital presence and delivering your requested website audit report</li>
                  <li>Responding to inquiries and discussing potential project engagements on WhatsApp or email</li>
                  <li>Providing administrative and technical support related to your ongoing requests</li>
                </ul>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  4. Data Sharing &amp; Third Parties
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Submitting a form on LaunchKaro opens a prefilled message directly in WhatsApp or transmits your inquiry via secure email service providers. We rely on infrastructure provided by Meta (WhatsApp) and our website hosting provider solely to facilitate communications.
                </p>
                <p className="text-muted-foreground font-medium text-foreground text-pretty">
                  We never sell, rent, trade, or share your personal information with third-party advertisers, data brokers, or marketing agencies.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  5. Data Retention &amp; Security
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Because our forms initiate direct messaging conversations, we do not store lead data in a web database on this site. Communication records on WhatsApp and email are retained only for as long as necessary to fulfill your audit, consultation, or active business engagement.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  6. Your Data Rights
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Under the DPDP Act, 2023, you have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request complete erasure of your contact details from our records.
                </p>
                <p className="text-muted-foreground text-pretty">
                  To submit a privacy request or ask questions about your data, email us at{' '}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-foreground font-medium underline underline-offset-4 hover:no-underline"
                  >
                    {site.contact.email}
                  </a>
                  . We will respond promptly to all verified requests.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-normal text-balance">
                  7. No Advertising Cookies or Tracking
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Our website does not use non-essential advertising cookies, cross-site trackers, or third-party behavioral profiling tools. We believe in clean, privacy-respecting web design.
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
