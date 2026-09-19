import { useMemo, useState } from "react";
import { NavIcon } from "../common/NavIcon";
import { ProjectCard } from "../portfolio/ProjectCard";
import { SectionHeading } from "../common/SectionHeading";

const PAGE_SIZE = 6;

export function ProjectsSection({ projects, loading, loadError }) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);

  const visibleProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return projects.slice(start, start + PAGE_SIZE);
  }, [currentPage, projects]);

  function changePage(nextPage) {
    if (nextPage < 1 || nextPage > pageCount || nextPage === currentPage) {
      return;
    }

    setPage(nextPage);
  }

  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/10 dark:border-white/10"
      id="projects"
    >
      <div className="portfolio-shell py-[108px] pb-[122px] max-[760px]:py-[88px] max-[760px]:pb-[100px]">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div
          className="mt-[48px] flex items-end justify-between gap-7 max-[760px]:flex-col max-[760px]:items-start"
          data-reveal
        >
          <div className="grid gap-3">
            <span className="inline-flex w-fit rounded-full border border-black/20 px-3 py-[5px] font-mono text-[0.58rem] font-black tracking-[0.15em] text-[#555] dark:border-white/15 dark:text-[#aaa]">
              // ALL PROJECTS
            </span>

            <small className="text-[0.64rem] tracking-[0.025em] text-[#666] dark:text-[#999]">
              SHOWING {projects.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, projects.length)} OF{" "}
              {projects.length} PROJECTS
            </small>
          </div>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-[6px] text-[0.68rem] text-[#555] transition-colors hover:border-[#c7a400] hover:text-[#a88400] dark:border-white/15 dark:text-[#aaa] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400]"
            href="https://github.com/ki1bot"
            target="_blank"
            rel="noreferrer"
          >
            <NavIcon name="github" size={16} />
            @ki1bot
          </a>
        </div>

        {loading ? (
          <div className="mt-10 grid min-h-[260px] place-items-center rounded-[14px] border border-black/14 bg-white/72 text-[0.72rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#111]/78">
            Loading projects...
          </div>
        ) : loadError ? (
          <div className="mt-10 grid min-h-[260px] place-items-center rounded-[14px] border border-red-400/30 bg-white/72 text-[0.72rem] tracking-[0.1em] text-red-500 uppercase dark:bg-[#111]/78 dark:text-red-400">
            {loadError}
          </div>
        ) : (
          <>
            <div className="mt-9 grid grid-cols-3 gap-[16px] max-[1120px]:grid-cols-2 max-[720px]:grid-cols-1">
              {visibleProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>

            {pageCount > 1 ? (
              <div
                className="mt-9 flex items-center justify-center gap-2 max-[520px]:gap-1.5"
                data-reveal
              >
                <button
                  type="button"
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/14 bg-transparent text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/10 dark:text-[#aaa]"
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
                      className={`grid h-9 w-9 cursor-pointer place-items-center rounded-full border text-[0.68rem] font-black transition ${
                        item === currentPage
                          ? "border-[#ffd400] bg-[#ffd400] text-[#111]"
                          : "border-black/14 bg-transparent text-[#555] hover:border-[#ffd400] hover:bg-[#ffd400] hover:text-[#111] dark:border-white/10 dark:text-[#aaa]"
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
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/14 bg-transparent text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/10 dark:text-[#aaa]"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === pageCount}
                  aria-label="Halaman berikutnya"
                >
                  <NavIcon name="chevron-right" size={14} />
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
