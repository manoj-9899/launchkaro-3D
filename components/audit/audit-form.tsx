'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

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

/**
 * Free Website Audit request form.
 * On submit, opens WhatsApp with a prefilled message containing the details —
 * no backend required, and the conversation starts where we already reply.
 */
export function AuditForm() {
  const [businessName, setBusinessName] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const lines = [
      "Hi LaunchKaro! I'd like a free website audit.",
      '',
      `Business: ${businessName.trim()}`,
      `Type: ${businessType}`,
      websiteUrl.trim()
        ? `Website: ${websiteUrl.trim()}`
        : "Website: Don't have one yet",
      `WhatsApp: ${whatsappNumber.trim()}`,
    ]

    const href = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n'),
    )}`

    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          placeholder="+91 98765 43210"
          value={whatsappNumber}
          onChange={(event) => setWhatsappNumber(event.target.value)}
          className={inputClasses}
        />
      </div>

      <Button type="submit" variant="accent" size="xl" className="mt-2">
        <MessageCircle data-icon="inline-start" />
        Request My Free Audit
      </Button>

      <p className="text-muted-foreground text-sm leading-relaxed">
        Submitting opens WhatsApp with your details prefilled — just press
        send. Nothing is stored on this site.
      </p>
    </form>
  )
}
