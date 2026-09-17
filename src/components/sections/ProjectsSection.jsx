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
      className="border-b border-white/10 py-[clamp(94px,10vw,145px)]"
      id="projects"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Proof of work"
          title="MY"
          accent="PROJECTS."
          description="Selected work across frontend, backend, databases, integrations, and deployment."
        />

        <div
          className="mt-14 flex items-end justify-between gap-6 border-y border-white/10 py-4 max-[620px]:grid"
          data-reveal
        >
          <div>
            <p className="font-mono text-[0.66rem] font-black tracking-[0.1em] text-[#d8ff3e] uppercase">
              // All Projects
            </p>

            <p className="mt-1 font-mono text-[0.61rem] tracking-[0.05em] text-white/35 uppercase">
              Showing {visibleCount} of {projects.length} projects
            </p>
          </div>

          <a
            className="font-mono text-[0.66rem] font-bold text-white/45 transition-colors hover:text-[#d8ff3e]"
            href="https://github.com/ki1bot"
            target="_blank"
            rel="noreferrer"
          >
            @ki1bot ↗
          </a>
        </div>

        {loading ? (
          <div className="mt-8 grid min-h-[220px] place-items-center border border-white/10 bg-white/[0.015] font-mono text-[0.66rem] tracking-[0.1em] text-white/40 uppercase">
            Loading projects...
          </div>
        ) : loadError ? (
          <div className="mt-8 grid min-h-[220px] place-items-center border border-red-400/30 bg-white/[0.015] font-mono text-[0.66rem] text-red-300 uppercase">
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
              <div className="mt-10 flex justify-center" data-reveal>
                <button
                  type="button"
                  className="min-h-[48px] cursor-pointer border border-white/20 px-6 font-mono text-[0.65rem] font-black tracking-[0.08em] text-white uppercase transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black"
                  onClick={() => setShowAll((current) => !current)}
                >
                  {showAll ? "Show first 6" : "Show all projects"}
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
