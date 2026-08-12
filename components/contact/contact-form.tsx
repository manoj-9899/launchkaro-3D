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
 * Contact form — name, business type, message.
 * On submit, sends details asynchronously to launchkaro.team@gmail.com and
 * replaces the form with an inline success confirmation message on the same page.
 */
export function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      businessType,
      message: message.trim(),
      _subject: `New Contact Inquiry from ${name.trim()}`,
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
        setErrorMessage('Something went wrong sending your message. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage(
        'Network error while sending message. Please check your connection and try again.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-card border-border flex flex-col items-center gap-4 rounded-xl border p-8 text-center">
        <div className="bg-accent/10 text-accent flex size-12 items-center justify-center rounded-full">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="font-serif text-2xl font-normal">Message Received</h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Thanks — we&apos;ve received your details and will get back to you within 24 hours.
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
        <label htmlFor="contact-phone" className="text-sm font-medium">
          Phone / WhatsApp number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 88053 48821"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
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
            Sending Message...
          </>
        ) : (
          <>
            <Send className="size-5" />
            Send Message
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
