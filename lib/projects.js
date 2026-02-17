import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "src/projects")

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .map((file) => file.replace(/\.md$/, ""))
}

export function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  // Convert relative image paths to absolute paths for Next.js
  let featuredImage = data.featuredImage
  if (featuredImage && featuredImage.startsWith("../")) {
    featuredImage = featuredImage.replace("../", "/")
  }

  return {
    slug,
    ...data,
    featuredImage,
    content,
  }
}

export function getProjects() {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))

  return projects
}

export function getProjectsByCategory(category) {
  return getProjects().filter(
    (p) => p.category && p.category.includes(category)
  )
}

export function getProjectsByPlatform(platform) {
  return getProjects().filter((p) => p.platform === platform)
}

export function getAdjacentProjects(slug) {
  const projects = getProjects()
  const index = projects.findIndex((p) => p.slug === slug)

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
