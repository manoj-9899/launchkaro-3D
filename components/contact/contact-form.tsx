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
 * Compact contact form — name, business type, message.
 * Same handling as the audit form: on submit, opens WhatsApp with the
 * details prefilled. No backend, nothing stored on this site.
 */
export function ContactForm() {
  const [name, setName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const lines = [
      `Hi LaunchKaro! I'm ${name.trim()}.`,
      `Business type: ${businessType}`,
      '',
      message.trim(),
    ]

    const href = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n'),
    )}`

    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Priya Sharma"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-business-type" className="text-sm font-medium">
          Business type
        </label>
        <select
          id="contact-business-type"
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
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us a little about your business and what you need."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${inputClasses} h-auto min-h-28 resize-y py-2.5 leading-relaxed`}
        />
      </div>

      <Button type="submit" variant="accent" size="xl" className="mt-2">
        <MessageCircle data-icon="inline-start" />
        Send via WhatsApp
      </Button>

      <p className="text-muted-foreground text-sm leading-relaxed">
        Submitting opens WhatsApp with your message prefilled — just press
        send. Nothing is stored on this site.
      </p>
    </form>
  )
}
