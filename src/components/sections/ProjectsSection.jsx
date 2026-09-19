import { useMemo, useState } from "react";
import { ProjectCard } from "../portfolio/ProjectCard";
import { SectionHeading } from "../common/SectionHeading";
import { NavIcon } from "../common/NavIcon";

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
      className="relative overflow-hidden border-t border-black/10 bg-[#f7f7f4] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.055)_0,rgba(17,17,17,0.055)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[#0a0a0a] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.048)_0,rgba(255,255,255,0.048)_1px,transparent_1px,transparent_8px)]"
      id="projects"
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1510px] py-28 pb-32 max-[960px]:w-[calc(100%_-_36px)] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:py-[90px] max-[760px]:pb-[105px]">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div
          className="mt-[54px] flex items-end justify-between gap-[30px] max-[760px]:flex-col max-[760px]:items-start"
          data-reveal
        >
          <div className="grid gap-3">
            <span className="inline-flex w-fit rounded-full border border-black/25 px-3 py-[5px] font-mono text-[0.61rem] font-black tracking-[0.15em] text-[#555] dark:border-white/20 dark:text-[#aaa]">
              // ALL PROJECTS
            </span>

            <small className="text-[0.67rem] tracking-[0.025em] text-[#555] dark:text-[#aaa]">
              SHOWING {projects.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, projects.length)} OF{" "}
              {projects.length} PROJECTS
            </small>
          </div>

          <a
            className="inline-flex items-center gap-[7px] rounded-full border border-black/25 px-3 py-[5px] text-[0.7rem] text-[#555] transition-colors hover:border-[#caa700] hover:text-[#caa700] dark:border-white/20 dark:text-[#aaa] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400]"
            href="https://github.com/ki1bot"
            target="_blank"
            rel="noreferrer"
          >
            <NavIcon name="github" size={17} />
            @ki1bot
          </a>
        </div>

        {loading ? (
          <div className="mt-11 grid min-h-[280px] place-items-center rounded-[14px] border border-black/15 bg-white text-[0.74rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#111] dark:text-[#767676]">
            Loading projects...
          </div>
        ) : loadError ? (
          <div className="mt-11 grid min-h-[280px] place-items-center rounded-[14px] border border-red-400/30 bg-white text-[0.74rem] tracking-[0.1em] text-red-500 uppercase dark:bg-[#111] dark:text-red-400">
            {loadError}
          </div>
        ) : (
          <>
            <div className="mt-10 grid grid-cols-3 gap-[18px] max-[1180px]:grid-cols-2 max-[760px]:grid-cols-1">
              {visibleProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>

            {pageCount > 1 ? (
              <div
                className="mt-[42px] flex items-center justify-center gap-2.5 max-[520px]:gap-1.5"
                data-reveal
              >
                <button
                  type="button"
                  className="grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border border-black/15 bg-transparent text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/10 dark:text-[#aaa] max-[520px]:h-[34px] max-[520px]:w-[34px]"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
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
                    className={`grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border text-[0.72rem] font-black transition max-[520px]:h-[34px] max-[520px]:w-[34px] ${
                      item === currentPage
                        ? "border-[#ffd400] bg-[#ffd400] text-[#111]"
                        : "border-black/15 bg-transparent text-[#555] hover:border-[#ffd400] hover:bg-[#ffd400] hover:text-[#111] dark:border-white/10 dark:text-[#aaa]"
                    }`}
                    onClick={() => changePage(item)}
                    key={item}
                    aria-label={`Buka halaman ${item}`}
                    aria-current={item === currentPage ? "page" : undefined}
                  >
                    {item}
                  </button>
                ))}

                <button
                  type="button"
                  className="grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border border-black/15 bg-transparent text-[#555] transition disabled:cursor-default disabled:opacity-25 enabled:hover:border-[#ffd400] enabled:hover:bg-[#ffd400] enabled:hover:text-[#111] dark:border-white/10 dark:text-[#aaa] max-[520px]:h-[34px] max-[520px]:w-[34px]"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === pageCount}
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
