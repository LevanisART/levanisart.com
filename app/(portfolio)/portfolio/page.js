import { getProjectsByCategory } from "../../../lib/projects"
import ProjectGrid from "../../../components/ProjectGrid"

export const metadata = {
  title: "UI/UX Design - Levan K.",
  description: "UI/UX Design projects by Levan Kotolashvili",
}

export default function PortfolioPage() {
  const projects = getProjectsByCategory("UI/UX Design")

  return (
    <div>
      <h1 className="title pb-3">UX/UI Design Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  )
}
