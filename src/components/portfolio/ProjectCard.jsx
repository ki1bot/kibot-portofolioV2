import { NavIcon } from "../common/NavIcon";

function getPrimaryTech(project) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return stack[0] || "Software";
}

function getTechTone(value) {
  const tech = String(value || "").toLowerCase();

  if (tech.includes("typescript")) {
    return ["#dbeafe", "#1d4ed8", "#3b82f6"];
  }

  if (tech.includes("go")) {
    return ["#cffafe", "#0e7490", "#06b6d4"];
  }

  if (tech.includes("laravel") || tech.includes("php")) {
    return ["#fee2e2", "#b91c1c", "#ef4444"];
  }

  if (tech.includes("java")) {
    return ["#ffedd5", "#c2410c", "#f97316"];
  }

  if (tech.includes("react") || tech.includes("next")) {
    return ["#e0f2fe", "#0369a1", "#0ea5e9"];
  }

  if (tech.includes("python")) {
    return ["#fef3c7", "#92400e", "#f59e0b"];
  }

  return ["#e5e7eb", "#374151", "#9ca3af"];
}

function formatDate(value) {
  if (!value) {
    return "Portfolio";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Portfolio";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function ProjectCard({ project }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  const primaryTech = getPrimaryTech(project);

  const [badgeBg, badgeFg, dotColor] = getTechTone(primaryTech);

  return (
    <article className="project-card">
      <div className="project-visual">
        <div className="laptop-shell">
          <div className="laptop-screen">
            {project.img ? (
              <img src={project.img} alt={project.title} loading="lazy" />
            ) : (
              <div className="project-image-fallback">{project.title}</div>
            )}
          </div>

          <div className="laptop-base" />
        </div>
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>
            <i
              style={{
                backgroundColor: dotColor,
              }}
            />

            {project.title}
          </h3>

          <span
            className="project-tech-badge"
            style={{
              backgroundColor: badgeBg,
              color: badgeFg,
            }}
          >
            {primaryTech}
          </span>
        </div>

        <p className="project-description">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="project-tags">
          {stack.slice(0, 6).map((item) => (
            <span key={`${project.id}-${item}`}>
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <div className="project-date">{formatDate(project.created_at)}</div>

        <div className="project-actions">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <NavIcon name="github" size={16} />
              CODE
            </a>
          ) : null}

          {project.link ? (
            <a
              className="is-primary"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              DEMO
              <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
