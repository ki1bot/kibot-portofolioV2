export function ProjectCard({ project, index, onOpen }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  const featured = index === 0;

  return (
    <article
      className={`group overflow-hidden border border-black/15 bg-[#f7f3e9] transition duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:border-black/35 hover:shadow-[10px_10px_0_rgba(17,17,17,0.12)] dark:border-white/15 dark:bg-[#121212] dark:hover:border-white/35 dark:hover:shadow-[10px_10px_0_rgba(47,47,47,0.8)] ${
        featured ? "min-[901px]:col-span-2" : ""
      }`}
      data-reveal
    >
      <button
        type="button"
        className={`relative block w-full cursor-pointer overflow-hidden border-b border-black/15 bg-[#e4dfd4] text-left dark:border-white/15 dark:bg-[#0f0f0f] ${
          featured ? "min-[901px]:aspect-[21/8]" : "aspect-video"
        }`}
        onClick={() => onOpen(project)}
        aria-label={`Buka detail ${project.title}`}
      >
        {project.img ? (
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.035]"
            src={project.img}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <span className="grid h-full w-full place-items-center p-6 text-center text-[clamp(1.4rem,4vw,3rem)] font-black text-[#68665f] dark:text-[#a7a49d]">
            {project.title}
          </span>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/70" />

        <span className="absolute top-4 left-4 z-[2] border border-white/30 bg-black/50 px-2 py-[7px] font-mono text-[0.68rem] font-extrabold tracking-[0.08em] text-[#f5f2e9] uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="absolute right-[18px] bottom-4 z-[2] font-mono text-[0.68rem] font-extrabold tracking-[0.08em] text-[#f5f2e9] uppercase">
          View case ↗
        </span>
      </button>

      <div className="p-6 max-[700px]:p-[18px]">
        <div className="flex items-start justify-between gap-[18px]">
          <div>
            <p className="mb-[7px] font-mono text-[0.65rem] font-extrabold tracking-[0.1em] text-[#718800] uppercase dark:text-[#d8ff3e]">
              Featured project
            </p>

            <h3 className="m-0 text-[clamp(1.25rem,2.5vw,2rem)] font-bold leading-[1.15] tracking-[-0.045em]">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            className="h-[42px] w-[42px] shrink-0 cursor-pointer border border-black/15 bg-[#e4dfd4] text-[1.1rem] transition-colors hover:bg-[#b8df14] hover:text-[#101010] dark:border-white/15 dark:bg-[#0f0f0f] dark:hover:bg-[#d8ff3e] dark:hover:text-[#090909]"
            onClick={() => onOpen(project)}
            aria-label={`Detail ${project.title}`}
          >
            ↗
          </button>
        </div>

        <p className="mt-[18px] text-[0.92rem] leading-[1.75] text-[#68665f] dark:text-[#a7a49d]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-[22px] flex flex-wrap gap-[7px]">
          {stack.slice(0, 5).map((item) => (
            <span
              className="inline-flex min-h-7 items-center border border-black/15 bg-[#e4dfd4] px-[9px] font-mono text-[0.64rem] font-bold text-[#3d3b37] dark:border-white/15 dark:bg-[#0f0f0f] dark:text-[#cbc7bd]"
              key={`${project.id}-${item}`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-[26px] flex items-center justify-between gap-[18px] border-t border-black/15 pt-[18px] dark:border-white/15 max-[700px]:flex-col max-[700px]:items-start">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-3 bg-transparent p-0 text-[0.72rem] font-extrabold tracking-[0.06em] uppercase transition-colors hover:text-[#718800] dark:hover:text-[#d8ff3e]"
            onClick={() => onOpen(project)}
          >
            Detail project
            <span>→</span>
          </button>

          <div className="flex gap-3.5">
            {project.github ? (
              <a
                className="font-mono text-[0.68rem] text-[#68665f] transition-colors hover:text-[#111111] dark:text-[#a7a49d] dark:hover:text-[#f4f1e8]"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Code ↗
              </a>
            ) : null}

            {project.link ? (
              <a
                className="font-mono text-[0.68rem] text-[#68665f] transition-colors hover:text-[#111111] dark:text-[#a7a49d] dark:hover:text-[#f4f1e8]"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Live ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
