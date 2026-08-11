import Image from 'next/image'
import Link from 'next/link'

import type { Project } from '@/lib/content/projects'

interface ProjectCardProps {
  project: Project
}

/** Portfolio card used on /work and anywhere projects are listed. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group focus-visible:ring-ring/50 flex flex-col gap-5 rounded-xl focus-visible:ring-3 focus-visible:outline-none"
    >
      <div className="relative aspect-3/2 overflow-hidden rounded-xl">
        <Image
          src={project.coverImage.src || '/placeholder.svg'}
          alt={project.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {project.isConcept ? (
          <span className="bg-background/90 text-foreground absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm">
            Concept Project
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm">
          {project.industry}
          {' · '}
          {project.city}
        </p>
        <h3 className="font-serif text-xl leading-snug text-balance group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4 md:text-2xl">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {project.summary}
        </p>
      </div>
    </Link>
  )
}
