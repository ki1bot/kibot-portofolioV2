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
    <section className="portfolio-section" id="projects">
      <div className="portfolio-container">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div
          className="mt-11 flex items-end justify-between gap-7 max-[820px]:flex-col max-[820px]:items-start max-[520px]:mt-9"
          data-reveal
        >
          <div className="grid gap-3">
            <span className="inline-flex w-fit rounded-full border border-black/20 bg-white/20 px-3 py-[5px] font-mono text-[0.57rem] font-black tracking-[0.15em] text-[#555] dark:border-white/14 dark:bg-white/[0.015] dark:text-[#aaa]">
              // ALL PROJECTS
            </span>

            <small className="text-[0.61rem] tracking-[0.025em] text-[#676767] dark:text-[#929292]">
              SHOWING{" "}
              {filteredProjects.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, filteredProjects.length)} OF{" "}
              {filteredProjects.length} PROJECTS
            </small>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div
              className="flex items-center rounded-full border border-black/14 bg-white/30 p-1 dark:border-white/10 dark:bg-[#0c0c0c]/78 max-[520px]:w-full max-[520px]:justify-between"
              role="group"
              aria-label="Filter proyek"
            >
              {FILTERS.map((item) => (
                <button
                  type="button"
                className={`min-h-[40px] cursor-pointer rounded-full px-4 text-[0.62rem] font-black tracking-[0.04em] uppercase transition-[color,background-color,box-shadow] duration-300 max-[520px]:px-3 ${
                    filter === item.id
                      ? "bg-[#ffd400] text-[#111] shadow-[0_5px_16px_rgba(255,212,0,0.17)]"
                      : "text-[#666] hover:text-[#111] dark:text-[#999] dark:hover:text-white"
                  }`}
                  onClick={() => changeFilter(item.id)}
                  key={item.id}
                  aria-pressed={filter === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              className="inline-flex min-h-[39px] items-center gap-2 rounded-full border border-black/17 bg-white/24 px-3.5 text-[0.62rem] text-[#5f5f5f] transition-colors hover:border-[#c7a400] hover:text-[#8d6e00] dark:border-white/12 dark:bg-white/[0.015] dark:text-[#999] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400]"
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
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.68rem] tracking-[0.09em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            Loading projects...
          </div>
        ) : loadError ? (
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-red-400/30 bg-white/50 px-6 text-center text-[0.68rem] tracking-[0.09em] text-red-500 uppercase dark:bg-[#0d0d0d]/82 dark:text-red-400">
            {loadError}
          </div>
        ) : filteredProjects.length ? (
          <>
            <div className="mt-8 grid grid-cols-3 gap-5 max-[1120px]:grid-cols-2 max-[720px]:grid-cols-1 max-[520px]:gap-4">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-reveal
                  style={{
                    "--reveal-delay": `${(index % 3) * 70}ms`,
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {pageCount > 1 ? (
              <div
                className="mt-9 flex items-center justify-center gap-2"
                data-reveal
              >
                <button
                  type="button"
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/14 bg-white/25 text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/10 dark:bg-white/[0.015] dark:text-[#aaa]"
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
                      className={`grid h-9 w-9 cursor-pointer place-items-center rounded-full border text-[0.64rem] font-black transition ${
                        item === currentPage
                          ? "border-[#ffd400] bg-[#ffd400] text-[#111]"
                          : "border-black/14 bg-white/25 text-[#555] hover:border-[#ffd400] hover:bg-[#ffd400] hover:text-[#111] dark:border-white/10 dark:bg-white/[0.015] dark:text-[#aaa]"
                      }`}
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
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/14 bg-white/25 text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/10 dark:bg-white/[0.015] dark:text-[#aaa]"
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
          <div className="mt-10 grid min-h-[250px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.67rem] tracking-[0.08em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            No projects in this category.
          </div>
        )}
      </div>
    </section>
  );
}
