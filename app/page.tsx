import { AuditCta } from '@/components/site/audit-cta'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Hero } from '@/components/home/hero'
import { Problem } from '@/components/home/problem'
import { ProcessOverview } from '@/components/home/process-overview'
import { ServicesOverview } from '@/components/home/services-overview'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <ServicesOverview />
        <FeaturedProjects />
        <ProcessOverview />
        <AuditCta />
      </main>
      <Footer />
    </>
  )
}
