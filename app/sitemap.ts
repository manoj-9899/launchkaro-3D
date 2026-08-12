import type { MetadataRoute } from 'next'
import { projects } from '@/lib/content/projects'
import { getAllSectors } from '@/lib/content/sectors'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://launchkaro.in'

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/work',
    '/audit',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const caseStudyRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const sectorRoutes = getAllSectors().map((sector) => ({
    url: `${baseUrl}/${sector.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...sectorRoutes, ...caseStudyRoutes]
}
