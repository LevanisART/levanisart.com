import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjectSlugs } from '../../../lib/projects'
import Layout from '../../../components/Layout'
import ProjectContent from '../../../components/ProjectContent'

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
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Levan K.`,
    description: project.description || `${project.title} project by Levan Kotolashvili`,
  }
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Layout>
      <div className="project-detail">
        <h1 className="title">{project.title}</h1>
        {project.projectLink && (
          <div className="project-link mb-4">
            <a 
              href={project.projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              View Live Project
            </a>
          </div>
        )}
        <ProjectContent content={project.content} />
      </div>
    </Layout>
  )
}
