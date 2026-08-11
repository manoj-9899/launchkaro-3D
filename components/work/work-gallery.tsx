'use client'

import { useState } from 'react'

import { ProjectCard } from '@/components/work/project-card'
import type { Project, ProjectIndustry } from '@/lib/content/projects'
import { cn } from '@/lib/utils'

interface WorkGalleryProps {
  projects: Project[]
  industries: ProjectIndustry[]
}

/**
 * Filterable portfolio grid. Filters are simple client-side state —
 * the full project list is rendered by the server and narrowed here.
 */
export function WorkGallery({ projects, industries }: WorkGalleryProps) {
  const [active, setActive] = useState<ProjectIndustry | 'All'>('All')

  const visible =
    active === 'All'
      ? projects
      : projects.filter((project) => project.industry === active)

  const filters: Array<ProjectIndustry | 'All'> = ['All', ...industries]

  return (
    <div className="flex flex-col gap-10">
      <div
        role="group"
        aria-label="Filter projects by business sector"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              'focus-visible:ring-ring/50 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:outline-none',
              active === filter
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background text-muted-foreground hover:text-foreground',
            )}
          >
            {filter === 'All' ? 'All sectors' : filter}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground py-12 leading-relaxed">
          No projects in this sector yet — choose another filter.
        </p>
      )}
    </div>
  )
}
