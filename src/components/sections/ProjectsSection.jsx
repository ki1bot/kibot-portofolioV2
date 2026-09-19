import { useEffect, useMemo, useState } from "react";

import { ProjectCard } from "../portfolio/ProjectCard";
import { SectionHeading } from "../common/SectionHeading";
import { NavIcon } from "../common/NavIcon";

const PAGE_SIZE = 6;

export function ProjectsSection({ projects, loading, loadError }) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));

  useEffect(() => {
    if (page > pageCount) {
      setPage(pageCount);
    }
  }, [page, pageCount]);

  const visibleProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;

    return projects.slice(start, start + PAGE_SIZE);
  }, [page, projects]);

  function changePage(nextPage) {
    if (nextPage < 1 || nextPage > pageCount || nextPage === page) {
      return;
    }

    setPage(nextPage);
  }

  return (
    <section className="pattern-section projects-section" id="projects">
      <div className="section-container">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div className="project-toolbar" data-reveal>
          <div>
            <span>// ALL PROJECTS</span>

            <small>
              SHOWING {projects.length ? (page - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(page * PAGE_SIZE, projects.length)} OF {projects.length}{" "}
              PROJECTS
            </small>
          </div>

          <a href="https://github.com/ki1bot" target="_blank" rel="noreferrer">
            <NavIcon name="github" size={17} />
            @ki1bot
          </a>
        </div>

        {loading ? (
          <div className="section-state">Loading projects...</div>
        ) : loadError ? (
          <div className="section-state is-error">{loadError}</div>
        ) : (
          <>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>

            {pageCount > 1 ? (
              <div className="project-pagination" data-reveal>
                <button
                  type="button"
                  onClick={() => changePage(page - 1)}
                  disabled={page === 1}
                  aria-label="Halaman sebelumnya"
                >
                  <NavIcon name="chevron-left" size={15} />
                </button>

                {Array.from(
                  {
                    length: pageCount,
                  },
                  (_, index) => index + 1,
                ).map((item) => (
                  <button
                    type="button"
                    className={item === page ? "is-active" : ""}
                    onClick={() => changePage(item)}
                    key={item}
                    aria-label={`Buka halaman ${item}`}
                    aria-current={item === page ? "page" : undefined}
                  >
                    {item}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => changePage(page + 1)}
                  disabled={page === pageCount}
                  aria-label="Halaman berikutnya"
                >
                  <NavIcon name="chevron-right" size={15} />
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
