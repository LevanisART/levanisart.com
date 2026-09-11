import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug, getProjects } from "../../../../lib/projects"
import ScrollPercent from "../../../../components/ScrollPercent"

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project || project.comingSoon || project.hidden) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} - Levan K.`,
    description:
      project.detailDescription ||
      `${project.title} project by Levan Kotolashvili`,
  }
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project || project.comingSoon || project.hidden) notFound()

  const images = [
    project.featuredImage,
    ...(project.homeGallery || []),
  ].filter(Boolean)

  return (
    <div className="project-split">
      <aside className="project-split-left">
        <div className="project-split-left-top">
          <Link href="/" className="project-split-back">
            (BACK)
          </Link>

          <div className="project-split-info">
            <h1 className="project-split-title">{project.title}</h1>
            {project.detailDescription && (
              <p className="project-split-desc">{project.detailDescription}</p>
            )}
          </div>
        </div>

        <div className="project-split-meta">
          {project.projectLink && (
            <div className="project-split-meta-item">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-split-view-link"
              >
                VIEW PROJECT →
              </a>
            </div>
          )}
        </div>
      </aside>

      <div className="project-split-right">
        {images.map((src, i) => (
          <div key={i} className="project-split-image">
            <Image
              src={src}
              alt={`${project.title} ${i + 1}`}
              width={1200}
              height={900}
              style={{ width: "100%", height: "auto" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <ScrollPercent />
    </div>
  )
}
