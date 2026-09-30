import { useMemo, useState } from "react";
import { NavIcon } from "../common/NavIcon";
import { ProjectCard } from "../portfolio/ProjectCard";
import { SectionHeading } from "../common/SectionHeading";

const PAGE_SIZE = 6;
const FILTERS = ["all", "web", "mobile"];

function isMobileProject(project) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];
  const normalized = stack.join(" ").toLowerCase();

  return ["flutter", "dart", "react native", "expo", "android", "ios"].some(
    (keyword) => normalized.includes(keyword),
  );
}

export function ProjectsSection({ projects, loading, loadError }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "mobile") {
      return projects.filter(isMobileProject);
    }

    if (filter === "web") {
      return projects.filter((project) => !isMobileProject(project));
    }

    return projects;
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
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="projects"
    >
      <div className="portfolio-shell py-[104px] pb-[118px] max-[760px]:py-[82px] max-[760px]:pb-[96px]">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div
          className="mt-[44px] flex items-end justify-between gap-7 max-[800px]:flex-col max-[800px]:items-start"
          data-reveal
        >
          <div className="grid gap-3">
            <span className="inline-flex w-fit rounded-full border border-black/18 bg-white/20 px-3 py-[5px] font-mono text-[0.55rem] font-black tracking-[0.15em] text-[#555] dark:border-white/13 dark:bg-white/[0.015] dark:text-[#aaa]">
              // ALL PROJECTS
            </span>

            <small className="text-[0.59rem] tracking-[0.03em] text-[#696969] dark:text-[#919191]">
              SHOWING{" "}
              {filteredProjects.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, filteredProjects.length)} OF{" "}
              {filteredProjects.length} PROJECTS
            </small>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-full border border-black/12 bg-white/36 p-1 dark:border-white/9 dark:bg-[#0c0c0c]/72">
              {FILTERS.map((item) => (
                <button
                  type="button"
                  className={`min-h-[28px] cursor-pointer rounded-full px-3 text-[0.55rem] font-black tracking-[0.05em] uppercase transition duration-200 ${
                    filter === item
                      ? "bg-[#ffd400] text-[#111] shadow-[0_4px_14px_rgba(255,212,0,0.18)]"
                      : "text-[#666] hover:text-[#111] dark:text-[#8c8c8c] dark:hover:text-white"
                  }`}
                  onClick={() => changeFilter(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              className="inline-flex min-h-[36px] items-center gap-2 rounded-full border border-black/16 bg-white/28 px-3 text-[0.61rem] text-[#5f5f5f] transition-colors hover:border-[#c7a400] hover:text-[#8f7000] dark:border-white/12 dark:bg-white/[0.015] dark:text-[#999] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400]"
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
          <div className="mt-9 grid min-h-[250px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.65rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/9 dark:bg-[#0d0d0d]/76">
            Loading projects...
          </div>
        ) : loadError ? (
          <div className="mt-9 grid min-h-[250px] place-items-center rounded-[12px] border border-red-400/30 bg-white/50 px-6 text-center text-[0.65rem] tracking-[0.08em] text-red-500 uppercase dark:bg-[#0d0d0d]/76 dark:text-red-400">
            {loadError}
          </div>
        ) : filteredProjects.length ? (
          <>
            <div className="mt-8 grid grid-cols-3 gap-[14px] max-[1120px]:grid-cols-2 max-[720px]:grid-cols-1">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 45}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {pageCount > 1 ? (
              <div
                className="mt-9 flex items-center justify-center gap-2 max-[520px]:gap-1.5"
                data-reveal
              >
                <button
                  type="button"
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/12 bg-white/28 text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/9 dark:bg-white/[0.015] dark:text-[#aaa]"
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
                      className={`grid h-9 w-9 cursor-pointer place-items-center rounded-full border text-[0.62rem] font-black transition ${
                        item === currentPage
                          ? "border-[#ffd400] bg-[#ffd400] text-[#111]"
                          : "border-black/12 bg-white/28 text-[#555] hover:border-[#ffd400] hover:bg-[#ffd400] hover:text-[#111] dark:border-white/9 dark:bg-white/[0.015] dark:text-[#aaa]"
                      }`}
                      onClick={() => changePage(item)}
                      key={item}
                      aria-label={`Buka halaman ${item}`}
                      aria-current={item === currentPage ? "page" : undefined}
                    >
                      {item}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/12 bg-white/28 text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/9 dark:bg-white/[0.015] dark:text-[#aaa]"
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
          <div className="mt-9 grid min-h-[220px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.65rem] tracking-[0.08em] text-[#777] uppercase dark:border-white/9 dark:bg-[#0d0d0d]/76">
            No projects in this category.
          </div>
        )}
      </div>
    </section>
  );
}
