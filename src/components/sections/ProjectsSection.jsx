import { useCallback, useState } from "react";
import { ProjectCard } from "../portfolio/ProjectCard";
import { ProjectModal } from "../portfolio/ProjectModal";
import { SectionHeading } from "../common/SectionHeading";

export function ProjectsSection({ projects, loading, loadError }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const visibleCount = Math.min(visibleProjects.length, projects.length);

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 py-[clamp(100px,11vw,155px)]"
      id="projects"
    >
      <div className="pointer-events-none absolute top-[25%] left-[-12%] h-[500px] w-[500px] rounded-full bg-[#d8ff3e]/[0.025] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Proof of work"
          title="MY"
          accent="PROJECTS."
          description="Selected products and experiments across frontend, backend, mobile, databases, APIs, integrations, and deployment."
        />

        <div
          className="mt-14 flex items-end justify-between gap-8 border-y border-white/10 py-5 max-[620px]:grid"
          data-reveal
        >
          <div>
            <p className="font-mono text-[0.64rem] font-black tracking-[0.11em] text-[#d8ff3e] uppercase">
              // Selected projects
            </p>

            <p className="mt-2 font-mono text-[0.58rem] tracking-[0.06em] text-white/30 uppercase">
              Showing {visibleCount} of {projects.length} projects
            </p>
          </div>

          <a
            className="group inline-flex items-center gap-3 font-mono text-[0.63rem] font-black tracking-[0.07em] text-white/42 uppercase transition-colors hover:text-[#d8ff3e]"
            href="https://github.com/ki1bot"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ki1bot
            <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {loading ? (
          <div className="mt-8 grid min-h-[300px] place-items-center border border-white/10 bg-white/[0.012]">
            <div className="text-center">
              <span className="mx-auto block h-3 w-3 animate-pulse bg-[#d8ff3e]" />

              <p className="mt-4 font-mono text-[0.62rem] font-black tracking-[0.12em] text-white/35 uppercase">
                Loading projects...
              </p>
            </div>
          </div>
        ) : loadError ? (
          <div className="mt-8 grid min-h-[260px] place-items-center border border-red-400/25 bg-red-400/[0.025] px-6 text-center font-mono text-[0.63rem] text-red-300 uppercase">
            {loadError}
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-5">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  project={project}
                  index={index}
                  key={project.id}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>

            {projects.length > 6 ? (
              <div
                className="mt-12 flex justify-center border-t border-white/10 pt-10"
                data-reveal
              >
                <button
                  type="button"
                  className="min-h-[50px] cursor-pointer border border-white/20 bg-white/[0.015] px-7 font-mono text-[0.63rem] font-black tracking-[0.09em] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black"
                  onClick={() => setShowAll((current) => !current)}
                >
                  {showAll ? "Show first 6 ↑" : "Show all projects ↓"}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  );
}
