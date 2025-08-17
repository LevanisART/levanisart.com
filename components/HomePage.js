'use client'

import React, { useState } from "react"
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

// For now, let's use static data since getProjects might have issues with server-side execution
const staticProjects = [
  {
    slug: 'clothio',
    title: 'Clothio E-commerce',
    category: ['Front-end Development'],
    featuredImage: '/images/projects/clothio/featured.png',
    date: '2020-04-24'
  },
  {
    slug: 'revelwear',
    title: 'Revelwear',
    category: ['Front-end Development'],
    featuredImage: '/images/projects/revelwear/featured.png',
    date: '2020-04-20'
  },
  {
    slug: 'thewanderclub',
    title: 'The Wander Club',
    category: ['Front-end Development'],
    featuredImage: '/images/projects/thewanderclub/featured.png',
    date: '2020-04-18'
  },
  {
    slug: 'us-plus-health',
    title: 'US Plus Health',
    category: ['UI/UX Design'],
    featuredImage: '/images/projects/us-plus-health/featured.png',
    date: '2020-04-15'
  },
  {
    slug: 'wake-up-foods',
    title: 'Wake Up Foods',
    category: ['UI/UX Design'],
    featuredImage: '/images/projects/wake-up-foods/featured.png',
    date: '2020-04-10'
  },
  {
    slug: 'mobile-banking-app',
    title: 'Mobile Banking App',
    category: ['UI/UX Design'],
    featuredImage: '/images/projects/mobile-banking-app.png',
    date: '2020-04-05'
  }
];

export default function HomePage({ projects = staticProjects }) {
  const categories = ["All", "UI/UX Design", "Front-end Development"];

  const [state, setState] = useState({
    filteredData: projects,
    activeCategory: "All"
  });

  const changeCategory = (category) => {
    const filteredData = projects.filter(project => 
      project.category.includes(category)
    );
    const activeCategory = category;
    setState({ filteredData, activeCategory })
  }

  const filteredProjects = state.activeCategory !== "All" ? state.filteredData : projects;

  return (
    <>
      <h2 className="job-title">UX Engineer</h2>
      
      <div className="projects row projects-row">
        {
          filteredProjects.map((project) => (
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
          ))
        }
      </div>
    </>
  )
}
