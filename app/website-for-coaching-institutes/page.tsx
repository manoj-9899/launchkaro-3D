import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SectorTemplate } from '@/components/sectors/sector-template'
import { sectors } from '@/lib/content/sectors'

const sector = sectors['website-for-coaching-institutes']

export const metadata: Metadata = {
  title: sector.title,
  description: sector.metaDescription,
  openGraph: {
    title: sector.title,
    description: sector.metaDescription,
    url: 'https://launchkaro.in/website-for-coaching-institutes',
  },
  alternates: {
    canonical: '/website-for-coaching-institutes',
  },
}

export default function CoachingInstitutesPage() {
  if (!sector) notFound()
  return <SectorTemplate sector={sector} />
}
