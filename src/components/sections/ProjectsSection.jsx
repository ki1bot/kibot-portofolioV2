import { useEffect, useMemo, useRef, useState } from "react";
import { NavIcon } from "../common/NavIcon";
import { ProjectCard } from "../portfolio/ProjectCard";
import { EyebrowBadge, SectionHeading } from "../common/SectionHeading";

const PAGE_SIZE = 6;

const WORK_PROJECTS = new Set([
  "Sistem Marketplace Broker",
  "Azzahra Perwira",
  "Pelayanan Jasa AC",
]);

const FILTERS = [
  { id: "all", label: "ALL" },
  { id: "work", label: "WORK" },
  { id: "side", label: "SIDE PROJECTS" },
];

const FILTER_TEXT_STYLE = {
  fontFamily:
    '"Inter", "Segoe UI", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
  fontSize: "12px",
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: "0.055em",
};

const GITHUB_TEXT_STYLE = {
  fontFamily:
    '"Inter", "Segoe UI", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "-0.015em",
};

function getProjectCategory(project) {
  return WORK_PROJECTS.has(project.title) ? "work" : "side";
}

export function ProjectsSection({ projects, loading, loadError }) {
  const sectionRef = useRef(null);

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

  const visibleProjectKey = visibleProjects
    .map((project) => project.id)
    .join("|");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || loading || loadError || !visibleProjects.length) {
      return undefined;
    }

    const cards = Array.from(
      section.querySelectorAll("[data-project-card]"),
    ).filter((element) => element instanceof HTMLElement);

    if (!cards.length) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      cards.forEach((card) => {
        card.classList.add("is-project-card-visible");
      });

      return undefined;
    }

    cards.forEach((card) => {
      card.classList.remove("is-project-card-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!(entry.target instanceof HTMLElement)) {
            return;
          }

          if (entry.isIntersecting && entry.intersectionRatio >= 0.08) {
            entry.target.classList.add("is-project-card-visible");

            return;
          }

          if (!entry.isIntersecting) {
            entry.target.classList.remove("is-project-card-visible");
          }
        });
      },
      {
        threshold: [0, 0.08, 0.18, 0.35],
        rootMargin: "0px 0px -4% 0px",
      },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleProjectKey, loading, loadError, visibleProjects.length]);

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
      ref={sectionRef}
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
      id="projects"
    >
      <style>
        {`
          .project-card-reveal {
            opacity: 0.04;
            transform: translate3d(0, 52px, 0) scale(0.985);
            transform-origin: center bottom;
            backface-visibility: hidden;
            will-change: opacity, transform;
            transition:
              opacity 760ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 920ms cubic-bezier(0.16, 1, 0.3, 1);
            transition-delay: 0ms;
          }

          .project-card-reveal.is-project-card-visible {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            transition-delay: var(--project-card-delay-desktop, 0ms);
          }

          @media (max-width: 1120px) {
            .project-card-reveal.is-project-card-visible {
              transition-delay: var(--project-card-delay-tablet, 0ms);
            }
          }

          @media (max-width: 720px) {
            .project-card-reveal {
              transform: translate3d(0, 38px, 0) scale(0.99);
              transition:
                opacity 650ms cubic-bezier(0.16, 1, 0.3, 1),
                transform 780ms cubic-bezier(0.16, 1, 0.3, 1);
            }

            .project-card-reveal.is-project-card-visible {
              transform: translate3d(0, 0, 0) scale(1);
              transition-delay: var(--project-card-delay-mobile, 0ms);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .project-card-reveal,
            .project-card-reveal.is-project-card-visible {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(17,17,16,0.105)_0px,rgba(17,17,16,0.105)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,0,0.105),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(255,184,0,0.045),transparent_30%)] dark:bg-none"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.015))] dark:bg-none"
        aria-hidden="true"
      />

      <div className="portfolio-container">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="PROJECTS." />

        <div
          className="mt-11 flex items-end justify-between gap-7 max-[820px]:flex-col max-[820px]:items-start max-[520px]:mt-9"
          data-reveal
        >
          <div className="grid gap-[11px]">
            <EyebrowBadge>ALL PROJECTS</EyebrowBadge>

            <small className="text-[0.76rem] font-medium leading-none tracking-[0.018em] text-[#666866] uppercase dark:text-[#999b9a] max-[520px]:text-[0.7rem]">
              SHOWING{" "}
              {filteredProjects.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, filteredProjects.length)} OF{" "}
              {filteredProjects.length} PROJECTS
            </small>
          </div>

          <div className="flex flex-wrap items-center gap-[8px] max-[520px]:w-full">
            <div
              className="flex h-[42px] items-center rounded-full border border-black/[0.13] bg-white/[0.12] p-[3px] dark:border-white/[0.11] dark:bg-[#101010]/88 max-[520px]:w-full"
              role="group"
              aria-label="Filter proyek"
            >
              {FILTERS.map((item) => {
                const sizeClass =
                  item.id === "all"
                    ? "w-[53px]"
                    : item.id === "work"
                      ? "w-[75px]"
                      : "w-[143px]";

                return (
                  <button
                    type="button"
                    className={`flex h-[34px] shrink-0 items-center justify-center rounded-full transition-[background-color,color,box-shadow] duration-200 max-[520px]:h-[34px] max-[520px]:flex-1 max-[520px]:w-auto ${sizeClass} ${
                      filter === item.id
                        ? "bg-[#ffcc00] text-[#080808] shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                        : "bg-transparent text-[#919493] hover:text-[#b8bab9] dark:text-[#929594] dark:hover:text-[#c1c3c2]"
                    }`}
                    onClick={() => changeFilter(item.id)}
                    key={item.id}
                    aria-pressed={filter === item.id}
                  >
                    <span
                      style={{
                        ...FILTER_TEXT_STYLE,
                        color: filter === item.id ? "#080808" : undefined,
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              className="inline-flex h-[42px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-black/[0.13] bg-white/[0.12] px-[15px] text-[#777a79] transition-[border-color,background-color,color] duration-200 hover:border-black/20 hover:bg-white/[0.2] hover:text-[#555856] dark:border-white/[0.11] dark:bg-[#101010]/88 dark:text-[#969997] dark:hover:border-white/[0.18] dark:hover:bg-[#131313] dark:hover:text-[#b9bbba] max-[520px]:h-[42px] max-[520px]:px-[14px]"
              href="https://github.com/ki1bot"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex h-[16px] items-center justify-center gap-[8px] leading-none">
                <span className="grid h-[16px] w-[16px] shrink-0 place-items-center leading-none [&>svg]:block">
                  <NavIcon name="github" size={15} />
                </span>

                <span
                  className="inline-flex h-[16px] items-center justify-center"
                  style={GITHUB_TEXT_STYLE}
                >
                  @ki1bot
                </span>
              </span>
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
                  <div
                    className="project-card-reveal h-full"
                    data-project-card
                    style={{
                      "--project-card-delay-desktop": `${(index % 3) * 90}ms`,
                      "--project-card-delay-tablet": `${(index % 2) * 90}ms`,
                      "--project-card-delay-mobile": "0ms",
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
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
