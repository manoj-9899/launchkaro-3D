'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/lib/content/site'

const businessTypes = [
  'Hotel / Resort',
  'Restaurant / Café',
  'Wedding Venue / Banquet',
  'Coaching Institute',
  'Salon / Spa',
  'Jeweller / Showroom',
  'Other',
] as const

const inputClasses =
  'border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 h-11 w-full rounded-lg border px-3 text-base transition-colors focus-visible:ring-3 focus-visible:outline-none'

type Status = 'idle' | 'submitting' | 'success' | 'error'

/**
 * Free Website Audit request form.
 * On submit, sends details asynchronously to launchkaro.team@gmail.com and
 * replaces the form with an inline success confirmation message on the same page.
 */
export function AuditForm() {
  const [businessName, setBusinessName] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const payload = {
      businessName: businessName.trim(),
      businessType,
      websiteUrl: websiteUrl.trim() || 'Not provided',
      whatsappNumber: whatsappNumber.trim(),
      _subject: `New Free Audit Request: ${businessName.trim()}`,
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(
          'Something went wrong sending your audit request. Please try again or reach out on WhatsApp.',
        )
      }
    } catch {
      setStatus('error')
      setErrorMessage(
        'Network error while sending request. Please check your connection and try again.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-card border-border flex flex-col items-center gap-4 rounded-xl border p-8 text-center">
        <div className="bg-accent/10 text-accent flex size-12 items-center justify-center rounded-full">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="font-serif text-2xl font-normal">Audit Request Received</h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Thanks — we&apos;ve received your details and will get back to you with your free PDF website audit within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {status === 'error' ? (
        <div className="bg-destructive/10 border-destructive/30 text-destructive flex items-center gap-3 rounded-lg border p-4 text-sm">
          <AlertCircle className="size-5 shrink-0" />
          <p className="flex-1">{errorMessage}</p>
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <label htmlFor="business-name" className="text-sm font-medium">
          Business name
        </label>
        <input
          id="business-name"
          name="businessName"
          type="text"
          required
          autoComplete="organization"
          placeholder="e.g. Saffron Courtyard"
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="website-url" className="text-sm font-medium">
          Website URL{' '}
          <span className="text-muted-foreground font-normal">
            (optional — leave blank if you don&apos;t have one)
          </span>
        </label>
        <input
          id="website-url"
          name="websiteUrl"
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder="https://yourbusiness.in"
          value={websiteUrl}
          onChange={(event) => setWebsiteUrl(event.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="business-type" className="text-sm font-medium">
          Business type
        </label>
        <select
          id="business-type"
          name="businessType"
          required
          value={businessType}
          onChange={(event) => setBusinessType(event.target.value)}
          className={inputClasses}
        >
          <option value="" disabled>
            Select your business type
          </option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="whatsapp-number" className="text-sm font-medium">
          WhatsApp number
        </label>
        <input
          id="whatsapp-number"
          name="whatsappNumber"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 88053 48821"
          value={whatsappNumber}
          onChange={(event) => setWhatsappNumber(event.target.value)}
          className={inputClasses}
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="xl"
        className="mt-2"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send className="size-5" />
            Request My Free Audit
          </>
        )}
      </Button>

      <p className="text-muted-foreground text-xs leading-relaxed">
        By submitting, you agree to our{' '}
        <Link
          href="/privacy-policy"
          className="text-foreground underline underline-offset-2 hover:no-underline"
        >
          Privacy Policy
        </Link>
        . Your information is kept strictly confidential.
      </p>
    </form>
  )
}
