import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "src/projects")

const CATEGORY_TAG_COLOR = {
  "UI/UX Design": "tag-purple",
  "Front-end Development": "tag-blue",
  Shopify: "tag-pink",
  FinTech: "tag-pink",
  Crypto: "tag-purple",
}

function resolveAssetPath(value) {
  if (!value) return value
  return value.startsWith("../") ? value.replace("../", "/") : value
}

function deriveTags(data) {
  if (Array.isArray(data.tags) && data.tags.length > 0) return data.tags

  const labels = new Set()
  if (data.category) {
    data.category
      .split(/[,\n&]/)
      .map((s) => s.trim())
      .filter(Boolean)
      .forEach((c) => labels.add(c))
  }
  if (data.platform) labels.add(data.platform)

  return Array.from(labels)
    .slice(0, 2)
    .map((label) => ({
      label,
      color: CATEGORY_TAG_COLOR[label] || "tag-purple",
    }))
}

function deriveHomeDescription(data) {
  if (data.homeDescription) return data.homeDescription
  if (data.description) {
    const firstSentence = data.description.split(/(?<=\.)\s+/)[0]
    return firstSentence.length > 120
      ? firstSentence.slice(0, 120).trim() + "…"
      : firstSentence
  }
  // No explicit description → show nothing (don't echo client/platform,
  // which just duplicates the title and the platform tag)
  return ""
}

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const featuredImage = resolveAssetPath(data.featuredImage)
  const homeGallery = Array.isArray(data.homeGallery)
    ? data.homeGallery.map((src) => (src ? resolveAssetPath(src) : ""))
    : null

  return {
    slug,
    ...data,
    featuredImage,
    homeGallery,
    tags: deriveTags(data),
    homeDescription: deriveHomeDescription(data),
    detailDescription: data.description || data.homeDescription || null,
    layout: data.layout || 'row',
    comingSoon: !!data.comingSoon,
    hidden: !!data.hidden,
    content,
  }
}

function readAllProjects() {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .filter((p) => !p.hidden)
    .sort((a, b) => ((a.date || "") > (b.date || "") ? -1 : 1))
}

export function getProjects() {
  return readAllProjects().filter((p) => !p.comingSoon)
}

export function getUpcomingProjects() {
  return readAllProjects().filter((p) => p.comingSoon)
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
