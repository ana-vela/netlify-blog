import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ projects }) => (
  <article className="card ">
    <Link to={projects.frontmatter.path}>
      {!!projects.frontmatter.thumbnail && (
        <img src={projects.frontmatter.thumbnail} alt={projects.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="projects-title">
        <Link to={projects.frontmatter.path} className="projects-link">
          {projects.frontmatter.title}
        </Link>
      </h2>
      <div className="projects-meta">{projects.frontmatter.date}</div>
    </header>
  </article>
)
export default ProjectLink
