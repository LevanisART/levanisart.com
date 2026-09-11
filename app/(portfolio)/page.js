import React from "react"
import HomePage from "../../components/HomePage"
import { getProjects, getUpcomingProjects } from "../../lib/projects"

export default function Home() {
  return (
    <HomePage
      projects={getProjects()}
      upcomingProjects={getUpcomingProjects()}
    />
  )
}
