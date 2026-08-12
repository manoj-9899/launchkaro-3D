import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://launchkaro.in'),
  title: {
    default: 'Website Design in Latur | LaunchKaro Maharashtra',
    template: '%s | LaunchKaro',
  },
  description:
    'Website design for restaurants, hotels, salons, and businesses across Maharashtra. Based in Latur.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://launchkaro.in',
    siteName: 'LaunchKaro',
    title: 'Website Design in Latur | Websites for Maharashtra Businesses',
    description:
      'High-converting mobile websites and Google presence for restaurants, hotels, salons, and businesses across Maharashtra.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LaunchKaro — Website Design in Latur, Maharashtra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design in Latur | LaunchKaro',
    description:
      'High-converting mobile websites for businesses across Maharashtra.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: './',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f2ec',
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'LaunchKaro',
  url: 'https://launchkaro.in',
  logo: 'https://launchkaro.in/icon.svg',
  image: 'https://launchkaro.in/og-image.png',
  description:
    'Boutique web studio based in Latur crafting high-converting websites for businesses across Maharashtra.',
  email: 'launchkaro.team@gmail.com',
  telephone: '+918805348821',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Latur',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Maharashtra',
    },
    {
      '@type': 'City',
      name: 'Latur',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${fraunces.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
