export function ProjectCard({ project, index, onOpen }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return (
    <article className="project-card" data-reveal>
      <button
        type="button"
        className="project-media"
        onClick={() => onOpen(project)}
        aria-label={`Buka detail ${project.title}`}
      >
        {project.img ? (
          <img src={project.img} alt={project.title} loading="lazy" />
        ) : (
          <span className="project-media-fallback">{project.title}</span>
        )}

        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="project-open-label">View case ↗</span>
      </button>

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <p className="project-kicker">Featured project</p>

            <h3>{project.title}</h3>
          </div>

          <button
            type="button"
            className="icon-button"
            onClick={() => onOpen(project)}
            aria-label={`Detail ${project.title}`}
          >
            ↗
          </button>
        </div>

        <p className="project-description">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="tag-list">
          {stack.slice(0, 5).map((item) => (
            <span className="tag" key={`${project.id}-${item}`}>
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <button
            type="button"
            className="text-link"
            onClick={() => onOpen(project)}
          >
            Detail project
            <span>→</span>
          </button>

          <div className="project-external-links">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                Code ↗
              </a>
            ) : null}

            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                Live ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
