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

  return (
    <section
      className="border-b border-black/15 py-[clamp(92px,10vw,148px)] dark:border-white/15"
      id="projects"
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-[15px]">
        <div className="flex items-end justify-between gap-10 max-[700px]:grid max-[700px]:items-start">
          <SectionHeading
            eyebrow="Proof of work"
            title="MY"
            accent="PROJECTS."
            description="Beberapa project yang paling mewakili kemampuan saya dalam frontend, backend, database, dan integrasi layanan."
          />

          <div
            className="shrink-0 text-right text-[clamp(3.2rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.07em] max-[700px]:text-left"
            data-reveal
          >
            {loading ? "--" : String(projects.length).padStart(2, "0")}

            <span className="mt-2.5 block font-mono text-[0.67rem] tracking-[0.12em] text-[#68665f] dark:text-[#a7a49d]">
              PROJECTS
            </span>
          </div>
        </div>

        {loading ? (
          <div className="mt-[70px] grid min-h-[220px] place-items-center border border-black/15 bg-[#f7f3e9] font-mono text-[0.75rem] tracking-[0.1em] text-[#68665f] uppercase dark:border-white/15 dark:bg-[#121212] dark:text-[#a7a49d]">
            Loading projects...
          </div>
        ) : loadError ? (
          <div className="mt-[70px] grid min-h-[220px] place-items-center border border-red-400/30 bg-[#f7f3e9] font-mono text-[0.75rem] tracking-[0.1em] text-red-600 uppercase dark:bg-[#121212] dark:text-red-300">
            {loadError}
          </div>
        ) : (
          <>
            <div className="mt-[70px] grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1 max-[700px]:mt-[46px]">
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
              <div className="mt-[42px] flex justify-center" data-reveal>
                <button
                  type="button"
                  className="inline-flex min-h-[50px] cursor-pointer items-center justify-center gap-3 border border-black/30 bg-[#f7f3e9] px-5 text-[0.76rem] font-black tracking-[0.08em] uppercase transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white dark:border-white/30 dark:bg-[#121212] dark:hover:bg-[#181818]"
                  onClick={() => setShowAll((current) => !current)}
                >
                  {showAll ? "Show less" : "Show all projects"}
                  <span>{showAll ? "↑" : "↓"}</span>
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
