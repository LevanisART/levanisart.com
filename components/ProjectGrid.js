'use client'

import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

const ProjectLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const ProjectTitle = styled.h3`
  color: #000;
  font-size: 22px;
  line-height: 37px;
  font-weight: 400;
  &:hover {
    color: #000;
  }
  @media(max-width: 575.98px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export default function ProjectGrid({ projects }) {
  return (
    <div className="projects row projects-row">
      {projects.map((project) => (
        <div key={project.slug} className="project col-md-6">
          <div className="d-flex flex-column">
            <ProjectLink href={`/projects/${project.slug}`}>
              <Image
                src={project.featuredImage}
                alt={project.title}
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
              <ProjectTitle className="mt-3 pt-1 align-self-center text-center">
                {project.title}
              </ProjectTitle>
            </ProjectLink>
          </div>
        </div>
      ))}
    </div>
  )
}
