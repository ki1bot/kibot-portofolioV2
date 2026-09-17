import { useEffect } from "react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const features = Array.isArray(project.features) ? project.features : [];

  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <div
        className="project-modal"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${project.title}`}
      >
        <div className="modal-topbar">
          <span>PROJECT DETAIL</span>

          <button type="button" onClick={onClose} aria-label="Tutup modal">
            Close ×
          </button>
        </div>

        <div className="modal-media">
          {project.img ? (
            <img src={project.img} alt={project.title} />
          ) : (
            <span>{project.title}</span>
          )}
        </div>

        <div className="modal-content">
          <p className="project-kicker">Selected work</p>

          <h2>{project.title}</h2>

          <p className="modal-description">{project.description}</p>

          {features.length ? (
            <div className="modal-block">
              <p className="modal-label">Key features</p>

              <ul>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {stack.length ? (
            <div className="modal-block">
              <p className="modal-label">Stack</p>

              <div className="tag-list">
                {stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="modal-actions">
            {project.github ? (
              <a
                className="button button-secondary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Source code ↗
              </a>
            ) : null}

            {project.link ? (
              <a
                className="button button-primary"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Open project ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
