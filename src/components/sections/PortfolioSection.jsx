import { useState } from "react";
import { ArrowDown01Icon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "../animations/Reveal";
import { HugeIcon } from "../common/HugeIcon";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { ProjectCard } from "../portfolio/ProjectCard";
import { ProjectModal } from "../portfolio/ProjectModal";
import { TECH_STACK } from "../../lib/portfolio";

const TAB_BUTTON =
  "cursor-pointer rounded-xl px-4 py-2.5 text-xs font-bold whitespace-nowrap transition";

export function PortfolioSection({ projects, certificates }) {
  const [tab, setTab] = useState("projects");
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const initialCount = 5;

  const visibleProjects = expanded ? projects : projects.slice(0, initialCount);

  const remaining = Math.max(projects.length - initialCount, 0);

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-[1180px] px-4 py-24 sm:px-5 lg:py-28"
    >
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-xs font-bold tracking-wide text-violet-300">
          Portofolio Showcase
        </span>

        <h2 className="mt-2.5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-tight tracking-[-0.045em] text-white">
          Project, sertifikat, dan teknologi
        </h2>

        <p className="mt-3.5 leading-7 text-slate-400">
          Jelajahi project, sertifikat, dan teknologi yang saya gunakan dalam
          proses belajar dan pengembangan portofolio ini.
        </p>
      </Reveal>

      <div
        className="mx-auto mb-9 flex w-full max-w-max gap-1 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 p-1.5"
        role="tablist"
        aria-label="Portofolio"
      >
        <button
          type="button"
          className={`${TAB_BUTTON} ${
            tab === "projects"
              ? "bg-gradient-to-br from-violet-600/80 to-indigo-600/70 text-white shadow-lg shadow-violet-950/20"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }`}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>

        <button
          type="button"
          className={`${TAB_BUTTON} ${
            tab === "certificates"
              ? "bg-gradient-to-br from-violet-600/80 to-indigo-600/70 text-white shadow-lg shadow-violet-950/20"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }`}
          onClick={() => setTab("certificates")}
        >
          Certificates
        </button>

        <button
          type="button"
          className={`${TAB_BUTTON} ${
            tab === "tech"
              ? "bg-gradient-to-br from-violet-600/80 to-indigo-600/70 text-white shadow-lg shadow-violet-950/20"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }`}
          onClick={() => setTab("tech")}
        >
          Tech Stack
        </button>
      </div>

      {tab === "projects" && (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDetails={setSelectedProject}
              />
            ))}
          </div>

          {remaining > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mx-auto mt-8 flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 font-bold text-violet-200 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/15"
            >
              {expanded ? "Show Less" : `See More ${remaining}`}

              <span
                className={`transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              >
                <HugeIcon icon={ArrowDown01Icon} size={18} />
              </span>
            </button>
          )}
        </>
      )}

      {tab === "certificates" && (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.pdf_url || certificate.img}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/25"
            >
              <ImageWithFallback
                src={certificate.img}
                alt={certificate.title}
                className="aspect-[4/3] w-full bg-slate-950 object-cover"
                initials="CT"
              />

              <div className="p-4">
                <h3 className="text-sm font-bold text-white">
                  {certificate.title}
                </h3>

                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-violet-400">
                  Open Certificate
                  <HugeIcon icon={LinkSquare02Icon} size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {tab === "tech" && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {TECH_STACK.map((tech, index) => (
            <div
              key={tech}
              className="flex min-h-28 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/25"
            >
              <span className="text-[11px] font-extrabold text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong className="text-sm text-slate-200">{tech}</strong>
            </div>
          ))}
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
