import { useMemo, useState } from "react";
import { NavIcon } from "../common/NavIcon";
import { ProjectCard } from "../portfolio/ProjectCard";
import { SectionHeading } from "../common/SectionHeading";

const PAGE_SIZE = 6;

const WORK_PROJECTS = new Set([
  "Sistem Marketplace Broker",
  "Azzahra Perwira",
  "Pelayanan Jasa AC",
]);

const FILTERS = [
  { id: "all", label: "All" },
  { id: "work", label: "Work" },
  { id: "side", label: "Side Projects" },
];

function getProjectCategory(project) {
  return WORK_PROJECTS.has(project.title) ? "work" : "side";
}

export function ProjectsSection({ projects, loading, loadError }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }

    return projects.filter((project) => getProjectCategory(project) === filter);
  }, [filter, projects]);

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);

  const visibleProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredProjects.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredProjects]);

  function changePage(nextPage) {
    if (nextPage < 1 || nextPage > pageCount || nextPage === currentPage) {
      return;
    }

    setPage(nextPage);
  }

  function changeFilter(nextFilter) {
    setFilter(nextFilter);
    setPage(1);
  }

  return (
    <section className="portfolio-texture portfolio-section" id="projects">
      <div className="portfolio-shell section-shell">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div className="projects-toolbar" data-reveal>
          <div className="projects-counter">
            <span>// ALL PROJECTS</span>

            <small>
              SHOWING{" "}
              {filteredProjects.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, filteredProjects.length)} OF{" "}
              {filteredProjects.length} PROJECTS
            </small>
          </div>

          <div className="projects-actions">
            <div className="project-filters">
              {FILTERS.map((item) => (
                <button
                  type="button"
                  className={filter === item.id ? "is-active" : ""}
                  onClick={() => changeFilter(item.id)}
                  key={item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              className="github-pill"
              href="https://github.com/ki1bot"
              target="_blank"
              rel="noreferrer"
            >
              <NavIcon name="github" size={15} />
              @ki1bot
            </a>
          </div>
        </div>

        {loading ? (
          <div className="projects-state">Loading projects...</div>
        ) : loadError ? (
          <div className="projects-state is-error">{loadError}</div>
        ) : filteredProjects.length ? (
          <>
            <div className="projects-grid">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-reveal
                  style={{
                    "--reveal-delay": `${index * 45}ms`,
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {pageCount > 1 ? (
              <div className="project-pagination" data-reveal>
                <button
                  type="button"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Halaman sebelumnya"
                >
                  <NavIcon name="chevron-left" size={14} />
                </button>

                {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                  (item) => (
                    <button
                      type="button"
                      className={item === currentPage ? "is-active" : ""}
                      onClick={() => changePage(item)}
                      key={item}
                      aria-current={item === currentPage ? "page" : undefined}
                    >
                      {item}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === pageCount}
                  aria-label="Halaman berikutnya"
                >
                  <NavIcon name="chevron-right" size={14} />
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="projects-state">No projects in this category.</div>
        )}
      </div>
    </section>
  );
}
