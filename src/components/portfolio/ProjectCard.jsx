import { LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "../common/HugeIcon";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function ProjectCard({ project, onDetails }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/25">
      <div className="aspect-video overflow-hidden bg-slate-950/70">
        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
          initials={project.title}
        />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>

        <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(project.tech_stack || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-3.5 text-xs font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/10"
            >
              Live Demo
              <HugeIcon icon={LinkSquare02Icon} size={15} />
            </a>
          ) : (
            <span className="inline-flex min-h-10 items-center rounded-xl border border-white/5 bg-white/[0.03] px-3.5 text-xs font-bold text-slate-600">
              No Demo
            </span>
          )}

          <button
            type="button"
            onClick={() => onDetails(project)}
            className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-indigo-600 px-3.5 text-xs font-bold text-white transition hover:-translate-y-0.5"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
