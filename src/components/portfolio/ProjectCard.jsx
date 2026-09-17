function slugify(value) {
  return String(value || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(value) {
  if (!value) {
    return "Portfolio Project";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Portfolio Project";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function ProjectCard({ project, index, onOpen }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  const slug = slugify(project.title);

  const primaryTech = stack[0] || "Software";

  return (
    <article
      className="group grid grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] overflow-hidden border border-white/10 bg-[#0d0d0d] transition hover:border-white/20 max-[900px]:grid-cols-1"
      data-reveal
    >
      <button
        type="button"
        className="relative min-h-[360px] cursor-pointer overflow-hidden border-r border-white/10 bg-[#121212] text-left max-[900px]:min-h-0 max-[900px]:aspect-video max-[900px]:border-r-0 max-[900px]:border-b"
        onClick={() => onOpen(project)}
        aria-label={`Buka detail ${project.title}`}
      >
        {project.img ? (
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90"
            src={project.img}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <span className="grid h-full w-full place-items-center p-8 text-center text-3xl font-black text-white/35">
            {project.title}
          </span>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/65" />

        <span className="absolute top-4 left-4 border border-white/20 bg-black/60 px-2.5 py-2 font-mono text-[0.62rem] font-bold text-white/80 uppercase backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </button>

      <div className="flex min-h-[360px] flex-col p-[clamp(22px,3vw,36px)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <span className="font-mono text-[0.62rem] tracking-[0.08em] text-white/35">
            // {slug}
          </span>

          <span className="font-mono text-[0.62rem] font-bold text-[#d7ff3f]">
            {primaryTech}
          </span>
        </div>

        <h3 className="mt-6 text-[clamp(1.7rem,3.4vw,3rem)] font-black leading-[1.02] tracking-[-0.055em]">
          {project.title}
        </h3>

        <p className="mt-5 line-clamp-5 text-[0.92rem] leading-[1.8] text-white/55">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.slice(0, 7).map((item) => (
            <span
              className="font-mono text-[0.64rem] font-bold text-white/55 before:text-[#d7ff3f] before:content-['#']"
              key={`${project.id}-${item}`}
            >
              {item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-5 border-t border-white/10 pt-6">
          <span className="font-mono text-[0.64rem] text-white/35">
            {formatDate(project.created_at)}
          </span>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="border border-white/15 px-3 py-2 font-mono text-[0.62rem] font-black text-white/70 uppercase transition hover:border-white hover:text-white"
              onClick={() => onOpen(project)}
            >
              Details
            </button>

            {project.github ? (
              <a
                className="border border-white/15 px-3 py-2 font-mono text-[0.62rem] font-black text-white/70 uppercase transition hover:border-[#d7ff3f] hover:text-[#d7ff3f]"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            ) : null}

            {project.link ? (
              <a
                className="bg-[#d7ff3f] px-3 py-2 font-mono text-[0.62rem] font-black text-black uppercase transition hover:bg-white"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
