function slugify(value) {
  return String(value || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(value) {
  if (!value) {
    return "Selected Work";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Selected Work";
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
  const reverse = index % 2 === 1;

  return (
    <article
      className="group overflow-hidden border border-white/10 bg-[#0c0c0c] transition duration-300 hover:border-white/22"
      data-reveal
    >
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
        <button
          type="button"
          className={`relative min-h-[410px] cursor-pointer overflow-hidden bg-[#111] text-left max-[900px]:aspect-video max-[900px]:min-h-0 ${
            reverse
              ? "order-2 border-l border-white/10 max-[900px]:order-none max-[900px]:border-l-0 max-[900px]:border-b"
              : "border-r border-white/10 max-[900px]:border-r-0 max-[900px]:border-b"
          }`}
          onClick={() => onOpen(project)}
          aria-label={`Buka detail ${project.title}`}
        >
          {project.img ? (
            <img
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:opacity-85"
              src={project.img}
              alt={project.title}
              loading="lazy"
            />
          ) : (
            <span className="grid h-full w-full place-items-center p-8 text-center text-3xl font-black text-white/25">
              {project.title}
            </span>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/75" />

          <span className="absolute top-5 left-5 border border-white/20 bg-black/65 px-3 py-2 font-mono text-[0.58rem] font-black tracking-[0.09em] text-white/70 uppercase backdrop-blur-md">
            Project {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute right-5 bottom-5 grid h-12 w-12 place-items-center border border-white/25 bg-black/65 font-mono text-sm text-white transition duration-300 group-hover:border-[#d8ff3e] group-hover:bg-[#d8ff3e] group-hover:text-black">
            ↗
          </span>
        </button>

        <div
          className={`flex min-h-[410px] flex-col p-[clamp(24px,4vw,44px)] ${
            reverse ? "order-1 max-[900px]:order-none" : ""
          }`}
        >
          <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
            <span className="max-w-[70%] overflow-hidden font-mono text-[0.58rem] tracking-[0.07em] text-white/30 text-ellipsis whitespace-nowrap">
              // {slug}
            </span>

            <span className="font-mono text-[0.58rem] font-black tracking-[0.06em] text-[#d8ff3e] uppercase">
              {primaryTech}
            </span>
          </div>

          <h3 className="mt-7 max-w-[600px] text-[clamp(1.9rem,3.8vw,3.2rem)] font-black leading-[0.98] tracking-[-0.06em]">
            {project.title}
          </h3>

          <p className="mt-6 line-clamp-4 text-[0.92rem] leading-[1.85] text-white/48">
            {project.description ||
              "Project software yang sedang dikembangkan."}
          </p>

          {stack.length ? (
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2.5">
              {stack.slice(0, 7).map((item) => (
                <span
                  className="font-mono text-[0.59rem] font-bold text-white/42 before:mr-0.5 before:text-[#d8ff3e] before:content-['#']"
                  key={`${project.id}-${item}`}
                >
                  {item.toLowerCase().replaceAll(" ", "-")}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
            <span className="font-mono text-[0.58rem] tracking-[0.05em] text-white/25 uppercase">
              {formatDate(project.created_at)}
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="border border-white/15 px-3.5 py-2.5 font-mono text-[0.58rem] font-black tracking-[0.06em] text-white/55 uppercase transition hover:border-white hover:text-white"
                onClick={() => onOpen(project)}
              >
                Details
              </button>

              {project.github ? (
                <a
                  className="border border-white/15 px-3.5 py-2.5 font-mono text-[0.58rem] font-black tracking-[0.06em] text-white/55 uppercase transition hover:border-[#d8ff3e] hover:text-[#d8ff3e]"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code ↗
                </a>
              ) : null}

              {project.link ? (
                <a
                  className="bg-[#d8ff3e] px-3.5 py-2.5 font-mono text-[0.58rem] font-black tracking-[0.06em] text-black uppercase transition hover:bg-white"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo ↗
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
