"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import HoverEnterLink from "./HoverEnterLink"

/* ── Shared tag row ── */
function TagRow({ tags }) {
  if (!tags?.length) return null
  return (
    <div className="project-row-tags">
      {tags.map((t) => (
        <span key={t.label} className={`project-tag ${t.color}`}>
          <span className="project-tag-dot" />
          {t.label}
        </span>
      ))}
    </div>
  )
}

/* ── Layout: row (default) ── */
function ProjectRow({ project }) {
  const tags = project.tags || []
  const description = project.homeDescription || ""
  const gallery = project.comingSoon ? null : project.homeGallery
  const isInternal = project.slug && !project.comingSoon

  const ImageWrapper = ({ children }) =>
    isInternal ? (
      <HoverEnterLink
        href={`/projects/${project.slug}`}
        className="project-row-image-link"
        ariaLabel={`Open ${project.title}`}
      >
        {children}
      </HoverEnterLink>
    ) : (
      <div className="project-row-image-link">{children}</div>
    )

  return (
    <article className="project-row">
      <div className="project-row-meta">
        {isInternal ? (
          <Link href={`/projects/${project.slug}`} className="project-row-title-link">
            <h3 className="project-row-title">{project.title}</h3>
          </Link>
        ) : (
          <h3 className="project-row-title">{project.title}</h3>
        )}
        <TagRow tags={tags} />
      </div>

      <ImageWrapper>
        <div className={`project-row-image${project.comingSoon ? " project-row-image-placeholder" : ""}`}>
          {project.comingSoon ? (
            <span className="project-row-image-placeholder-label">Coming soon</span>
          ) : (
            <Image
              src={project.featuredImage}
              alt={project.title}
              width={1800}
              height={1240}
              sizes="(max-width: 991.98px) 100vw, 70vw"
            />
          )}
        </div>
      </ImageWrapper>

      {description && (
        <p className="project-row-description">
          {description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}

      {gallery && gallery.length > 0 && (
        <div className="project-row-gallery" style={{ "--gallery-cols": gallery.length }}>
          {gallery.map((src, i) =>
            src ? (
              <HoverEnterLink
                key={`${src}-${i}`}
                href={`/projects/${project.slug}`}
                className="project-row-gallery-item"
                ariaLabel={`Open ${project.title}`}
              >
                <Image
                  src={src}
                  alt={`${project.title} preview ${i + 1}`}
                  width={900}
                  height={1600}
                  sizes="(max-width: 991.98px) 100vw, 30vw"
                />
              </HoverEnterLink>
            ) : (
              <div key={`gap-${i}`} className="project-row-gallery-item project-row-gallery-item-blank" aria-hidden="true" />
            )
          )}
        </div>
      )}
    </article>
  )
}

/* ── Layout: wide - horizontal image strip beside meta ── */
function ProjectWide({ project }) {
  const tags = project.tags || []
  const description = project.homeDescription || ""
  const href = `/projects/${project.slug}`
  const allImages = [project.featuredImage, ...(project.homeGallery || [])].filter(Boolean)

  return (
    <article className="project-wide">
      <div className="project-wide-header">
        <div className="project-wide-meta">
          <Link href={href} className="project-row-title-link">
            <h3 className="project-row-title">{project.title}</h3>
          </Link>
          <TagRow tags={tags} />
        </div>
        {description && (
          <p className="project-wide-desc">{description}</p>
        )}
      </div>

      <div className="project-wide-images">
        {allImages.map((src, i) => (
          <HoverEnterLink
            key={i}
            href={href}
            className="project-wide-image"
            ariaLabel={`Open ${project.title}`}
          >
            <Image
              src={src}
              alt={`${project.title} ${i + 1}`}
              width={1200}
              height={800}
              sizes="(max-width: 991.98px) 80vw, 30vw"
              style={{ width: "100%", height: "auto" }}
            />
          </HoverEnterLink>
        ))}
      </div>
    </article>
  )
}

/* ── Layout: grid - 2-column image grid ── */
function ProjectGrid({ project }) {
  const tags = project.tags || []
  const description = project.homeDescription || ""
  const href = `/projects/${project.slug}`
  const allImages = [project.featuredImage, ...(project.homeGallery || [])].filter(Boolean)

  return (
    <article className="project-grid-block">
      <div className="project-grid-block-header">
        <div className="project-wide-meta">
          <Link href={href} className="project-row-title-link">
            <h3 className="project-row-title">{project.title}</h3>
          </Link>
          <TagRow tags={tags} />
        </div>
        {description && (
          <p className="project-wide-desc">{description}</p>
        )}
      </div>

      <div className="project-grid-block-images">
        {allImages.map((src, i) => (
          <HoverEnterLink
            key={i}
            href={href}
            className="project-grid-block-image"
            ariaLabel={`Open ${project.title}`}
          >
            <Image
              src={src}
              alt={`${project.title} ${i + 1}`}
              width={900}
              height={700}
              sizes="(max-width: 991.98px) 50vw, 25vw"
              style={{ width: "100%", height: "auto" }}
            />
          </HoverEnterLink>
        ))}
      </div>
    </article>
  )
}

/* ── Layout: split - large hero left, images stacked right ── */
function ProjectFeature({ project }) {
  const tags = project.tags || []
  const description = project.homeDescription || ""
  const href = `/projects/${project.slug}`
  const [hero, ...rest] = [project.featuredImage, ...(project.homeGallery || [])].filter(Boolean)

  return (
    <article className="project-feature">
      <div className="project-feature-header">
        <div className="project-wide-meta">
          <Link href={href} className="project-row-title-link">
            <h3 className="project-row-title">{project.title}</h3>
          </Link>
          <TagRow tags={tags} />
        </div>
        {description && (
          <p className="project-wide-desc">{description}</p>
        )}
      </div>

      <div className="project-feature-images">
        {hero && (
          <HoverEnterLink href={href} className="project-feature-hero" ariaLabel={`Open ${project.title}`}>
            <Image
              src={hero}
              alt={`${project.title} 1`}
              width={1200}
              height={1400}
              sizes="(max-width: 991.98px) 100vw, 45vw"
            />
          </HoverEnterLink>
        )}
        {rest.length > 0 && (
          <div className="project-feature-stack">
            {rest.map((src, i) => (
              <HoverEnterLink
                key={i}
                href={href}
                className="project-feature-stack-item"
                ariaLabel={`Open ${project.title}`}
              >
                <Image
                  src={src}
                  alt={`${project.title} ${i + 2}`}
                  width={1000}
                  height={700}
                  sizes="(max-width: 991.98px) 100vw, 35vw"
                />
              </HoverEnterLink>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

/* ── Layout switcher ── */
function ProjectEntry({ project }) {
  if (project.layout === "wide") return <ProjectWide project={project} />
  if (project.layout === "grid") return <ProjectGrid project={project} />
  if (project.layout === "split") return <ProjectFeature project={project} />
  return <ProjectRow project={project} />
}

export default function HomePage({ projects = [], upcomingProjects = [] }) {
  return (
    <div className="home-figma">
      <aside className="home-sidebar">
        <span className="home-sidebar-label">Projects</span>
      </aside>

      <div className="home-content">
        {projects.map((p) => (
          <ProjectEntry key={p.slug} project={p} />
        ))}

        {upcomingProjects.length > 0 && (
          <>
            <div className="home-divider">
              <span>Enjoy what&rsquo;s coming.Enjoy</span>
            </div>
            {upcomingProjects.map((p) => (
              <ProjectEntry key={p.slug} project={p} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
