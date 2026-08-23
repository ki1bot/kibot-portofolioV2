import { useEffect } from "react";
import {
  Cancel01Icon,
  CodeIcon,
  Download01Icon,
  LinkSquare02Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeIcon } from "../common/HugeIcon";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/85 p-3 backdrop-blur-xl sm:p-6"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-[900px] overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/50 sm:max-h-[88vh]"
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${project.title}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-20 grid h-11 w-11 cursor-pointer place-items-center rounded-2xl border border-white/10 bg-slate-950/85 text-white backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-violet-500/15"
          aria-label="Tutup detail"
        >
          <HugeIcon icon={Cancel01Icon} size={22} />
        </button>

        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="aspect-[16/7] w-full rounded-t-3xl bg-slate-950 object-cover"
          initials={project.title}
        />

        <div className="p-5 sm:p-7">
          <span className="text-xs font-bold tracking-wide text-violet-300">
            Project Detail
          </span>

          <h2 className="mt-2 text-[clamp(1.8rem,5vw,2.8rem)] font-black tracking-[-0.04em] text-white">
            {project.title}
          </h2>

          <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

          {project.features?.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 font-bold text-white">Fitur Utama</h3>

              <ul className="grid gap-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-0.5 shrink-0 text-violet-400">
                      <HugeIcon icon={Tick02Icon} size={18} />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tech_stack?.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 font-bold text-white">Tech Stack</h3>

              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-indigo-600 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                Live Demo
                <HugeIcon icon={LinkSquare02Icon} size={17} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/30"
              >
                <HugeIcon icon={CodeIcon} size={17} />
                GitHub
              </a>
            )}

            {project.pdf && (
              <a
                href={project.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/30"
              >
                <HugeIcon icon={Download01Icon} size={17} />
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
