import { useEffect } from "react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const features = Array.isArray(project.features) ? project.features : [];
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return (
    <div
      className="fixed inset-0 z-[120] grid place-items-center bg-black/80 p-7 backdrop-blur-[10px] max-[700px]:p-3.5"
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        className="max-h-[calc(100svh-56px)] w-full max-w-[980px] overflow-auto border border-black/40 bg-[#f7f3e9] shadow-[16px_16px_0_rgba(0,0,0,0.35)] dark:border-white/30 dark:bg-[#121212] dark:shadow-[16px_16px_0_rgba(0,0,0,0.5)] max-[700px]:max-h-[calc(100svh-28px)]"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${project.title}`}
      >
        <div className="flex min-h-[52px] items-center justify-between gap-[18px] border-b border-black/15 px-[18px] font-mono text-[0.68rem] font-extrabold text-[#68665f] dark:border-white/15 dark:text-[#a7a49d]">
          <span>PROJECT DETAIL</span>

          <button
            type="button"
            className="cursor-pointer bg-transparent text-[0.7rem] font-extrabold tracking-[0.08em] text-[#111111] uppercase dark:text-[#f4f1e8]"
            onClick={onClose}
            aria-label="Tutup modal"
          >
            Close ×
          </button>
        </div>

        <div className="grid aspect-[21/9] place-items-center overflow-hidden border-b border-black/15 bg-[#e4dfd4] dark:border-white/15 dark:bg-[#0f0f0f] max-[700px]:aspect-video">
          {project.img ? (
            <img
              className="h-full w-full object-cover"
              src={project.img}
              alt={project.title}
            />
          ) : (
            <span>{project.title}</span>
          )}
        </div>

        <div className="p-[clamp(24px,4vw,42px)]">
          <p className="mb-[7px] font-mono text-[0.65rem] font-extrabold tracking-[0.1em] text-[#718800] uppercase dark:text-[#d8ff3e]">
            Selected work
          </p>

          <h2 className="m-0 max-w-[760px] text-[clamp(2.4rem,6vw,5.2rem)] font-black leading-[0.95] tracking-[-0.07em] uppercase">
            {project.title}
          </h2>

          <p className="mt-6 max-w-[820px] leading-[1.8] text-[#68665f] dark:text-[#a7a49d]">
            {project.description}
          </p>

          {features.length ? (
            <div className="mt-[30px] border-t border-black/15 pt-6 dark:border-white/15">
              <p className="mb-[15px] font-mono text-[0.68rem] font-extrabold tracking-[0.1em] text-[#718800] uppercase dark:text-[#d8ff3e]">
                Key features
              </p>

              <ul className="m-0 grid list-none gap-2.5 p-0">
                {features.map((feature) => (
                  <li
                    className="relative pl-5 leading-[1.65] text-[#3d3b37] before:absolute before:top-[0.68em] before:left-0 before:h-[7px] before:w-[7px] before:bg-[#b8df14] before:content-[''] dark:text-[#cbc7bd] dark:before:bg-[#d8ff3e]"
                    key={feature}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {stack.length ? (
            <div className="mt-[30px] border-t border-black/15 pt-6 dark:border-white/15">
              <p className="mb-[15px] font-mono text-[0.68rem] font-extrabold tracking-[0.1em] text-[#718800] uppercase dark:text-[#d8ff3e]">
                Stack
              </p>

              <div className="flex flex-wrap gap-[7px]">
                {stack.map((item) => (
                  <span
                    className="inline-flex min-h-7 items-center border border-black/15 bg-[#e4dfd4] px-[9px] font-mono text-[0.64rem] font-bold text-[#3d3b37] dark:border-white/15 dark:bg-[#0f0f0f] dark:text-[#cbc7bd]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-[34px] flex flex-wrap gap-3">
            {project.github ? (
              <a
                className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-black/30 bg-[#f7f3e9] px-5 text-[0.76rem] font-black tracking-[0.08em] uppercase transition hover:-translate-x-0.5 hover:-translate-y-0.5 dark:border-white/30 dark:bg-[#121212]"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Source code ↗
              </a>
            ) : null}

            {project.link ? (
              <a
                className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-[#a8cc12] bg-[#b8df14] px-5 text-[0.76rem] font-black tracking-[0.08em] text-[#101010] uppercase shadow-[6px_6px_0_#151515] transition hover:-translate-x-0.5 hover:-translate-y-0.5 dark:border-[#d8ff3e] dark:bg-[#d8ff3e] dark:text-[#090909] dark:shadow-[6px_6px_0_#000000]"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Open project ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
