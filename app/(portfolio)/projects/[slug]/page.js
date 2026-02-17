import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getProjectBySlug,
  getProjectSlugs,
  getAdjacentProjects,
} from "../../../../lib/projects"
import ProjectContent from "../../../../components/ProjectContent"

export function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Levan K.`,
    description:
      project.description || `${project.title} project by Levan Kotolashvili`,
  }
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { previous, next } = getAdjacentProjects(params.slug)

  return (
    <div className="project-detail">
      <h1 className="title">{project.title}</h1>

      {project.description && (
        <div className="project-description mt-4">{project.description}</div>
      )}

      <div className="project-details mt-4 mt-lg-5 d-flex flex-wrap align-items-center">
        {project.client && (
          <div className="project-details-item">
            <span className="project-details-title">Client</span>
            {project.clientWebsite ? (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={project.clientWebsite}
              >
                <span className="project-details-description">
                  {project.client}
                </span>
              </a>
            ) : (
              <span className="project-details-description">
                {project.client}
              </span>
            )}
          </div>
        )}

        {project.date && (
          <div className="project-details-item">
            <span className="project-details-title">Project Date</span>
            <span className="project-details-description">{project.date}</span>
          </div>
        )}

        {project.projectLink && (
          <div className="project-details-item ms-lg-auto align-items-lg-end">
            <a
              className="view-project"
              rel="noopener noreferrer"
              target="_blank"
              href={project.projectLink}
            >
              VIEW PROJECT
            </a>
          </div>
        )}
      </div>

      {project.featuredImage && (
        <div className="project-featured-image my-4 my-lg-5 pt-4">
          <Image
            src={project.featuredImage}
            alt={project.title}
            width={1200}
            height={900}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      )}

      <ProjectContent content={project.content} />

      <div
        className={`project-pagination d-flex mt-5 ${previous ? "justify-content-between" : "justify-content-end"}`}
      >
        {previous && (
          <Link
            className="project-pagination-link d-flex align-items-center"
            href={`/projects/${previous.slug}`}
          >
            <div className="d-flex align-items-center me-4">
              <svg
                width="12"
                height="28"
                viewBox="0 0 12 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 28C11.1945 28 11.3612 27.9089 11.5 27.7266C11.5556 27.6719 11.5973 27.6081 11.625 27.5352C11.6528 27.4622 11.6737 27.3848 11.6875 27.3027C11.7014 27.2207 11.7084 27.1387 11.7084 27.0566C11.7084 26.9746 11.7014 26.8971 11.6875 26.8242C11.6737 26.7513 11.6528 26.6784 11.625 26.6055C11.5973 26.5326 11.5556 26.4596 11.5 26.3867L2.00004 13.918L11.375 1.61328C11.4584 1.50391 11.5174 1.36719 11.5521 1.20312C11.5868 1.03906 11.5868 0.875 11.5521 0.710938C11.5174 0.546875 11.4584 0.410156 11.375 0.300781C11.2362 0.11849 11.066 0.0273438 10.8646 0.0273438C10.6632 0.0273438 10.4931 0.11849 10.3542 0.300781L0.479207 13.2617C0.340318 13.444 0.270874 13.6628 0.270874 13.918C0.270874 14.1732 0.340318 14.3919 0.479207 14.5742L10.5 27.7266C10.6389 27.9089 10.8056 28 11 28Z"
                  fill="black"
                />
              </svg>
            </div>
            <span className="project-pagination-title">{previous.title}</span>
          </Link>
        )}
        {next && (
          <Link
            className="project-pagination-link d-flex align-items-center"
            href={`/projects/${next.slug}`}
          >
            <span className="project-pagination-title">{next.title}</span>
            <div className="d-flex align-items-center ms-4">
              <svg
                width="12"
                height="28"
                viewBox="0 0 12 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00008 28C0.805636 28 0.63897 27.9089 0.500081 27.7266C0.444526 27.6719 0.402859 27.6081 0.375081 27.5352C0.347303 27.4622 0.32647 27.3848 0.312581 27.3027C0.298692 27.2207 0.291748 27.1387 0.291748 27.0566C0.291748 26.9746 0.298692 26.8971 0.312581 26.8242C0.32647 26.7513 0.347303 26.6784 0.375081 26.6055C0.402859 26.5326 0.444526 26.4596 0.500081 26.3867L10.0001 13.918L0.625081 1.61328C0.541748 1.50391 0.48272 1.36719 0.447998 1.20312C0.413276 1.03906 0.413276 0.875 0.447998 0.710938C0.48272 0.546875 0.541748 0.410156 0.625081 0.300781C0.76397 0.11849 0.934109 0.0273438 1.1355 0.0273438C1.33689 0.0273438 1.50703 0.11849 1.64591 0.300781L11.5209 13.2617C11.6598 13.444 11.7292 13.6628 11.7292 13.918C11.7292 14.1732 11.6598 14.3919 11.5209 14.5742L1.50008 27.7266C1.36119 27.9089 1.19453 28 1.00008 28Z"
                  fill="black"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
