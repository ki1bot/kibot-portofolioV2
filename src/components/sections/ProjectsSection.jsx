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
    <section className="content-section projects-section" id="projects">
      <div className="site-container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="Proof of work"
            title="MY"
            accent="PROJECTS."
            description="Beberapa project yang paling mewakili kemampuan saya dalam frontend, backend, database, dan integrasi layanan."
          />

          <div className="section-count" data-reveal>
            {loading ? "--" : String(projects.length).padStart(2, "0")}

            <span>PROJECTS</span>
          </div>
        </div>

        {loading ? (
          <div className="loading-panel">Loading projects...</div>
        ) : loadError ? (
          <div className="loading-panel error">{loadError}</div>
        ) : (
          <>
            <div className="projects-grid">
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
              <div className="section-center-action" data-reveal>
                <button
                  type="button"
                  className="button button-secondary"
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
