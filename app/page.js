import React from "react"
import Layout from "../components/Layout"
import HomePage from "../components/HomePage"
import { getProjects } from "../lib/projects"

export default function Home() {
  const projects = getProjects()
  
  return (
    <Layout>
      <HomePage projects={projects} />
    </Layout>
  )
}