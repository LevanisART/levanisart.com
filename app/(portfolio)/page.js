import React from "react"
import HomePage from "../../components/HomePage"
import { getProjects } from "../../lib/projects"

export default function Home() {
  const projects = getProjects()

  return (
    <HomePage projects={projects} />
  )
}
