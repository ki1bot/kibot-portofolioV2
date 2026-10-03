import { NavIcon } from "../common/NavIcon";

function getPrimaryTech(project) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return stack[0] || "Software";
}

function formatDate(value) {
  if (!value) {
    return "Portfolio";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Portfolio";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function ProjectCard({ project }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];
  const primaryTech = getPrimaryTech(project);

  return (
    <article className="group h-full overflow-hidden rounded-[11px] border border-black/12 bg-[var(--card-bg)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#c7a400]/50 hover:shadow-[0_20px_48px_rgba(0,0,0,0.09)] dark:hover:border-[#ffd400]/40 dark:hover:shadow-[0_20px_48px_rgba(0,0,0,0.3)] motion-reduce:transform-none">
      <div className="relative aspect-[1.78] overflow-hidden border-b border-black/10 bg-[#e6e5df] dark:border-white/8 dark:bg-[#181818]">
        {project.img ? (
          <img
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            src={project.img}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[#171717] px-4 text-center text-[0.76rem] font-black text-[#bcbcbc]">
            {project.title}
          </div>
        )}
      </div>

      <div className="relative z-[2] px-[18px] pt-[17px] pb-[17px]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 truncate text-[0.94rem] font-black leading-[1.35] tracking-[-0.025em]">
            {project.title}
          </h3>

          <span className="shrink-0 rounded-full bg-[#ffd400]/15 px-2.5 py-[5px] text-[0.56rem] font-bold text-[#806300] dark:text-[#e5be22]">
            {primaryTech}
          </span>
        </div>

        <p className="mt-[11px] line-clamp-3 min-h-[60px] text-[0.75rem] leading-[1.68] text-[#626262] dark:text-[#999]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-2.5 flex min-h-7 flex-wrap gap-1.5">
          {stack.slice(0, 6).map((item) => (
            <span
              className="rounded-full border border-black/8 bg-black/[0.025] px-2 py-1 text-[0.6rem] text-[#6d6d6d] dark:border-white/8 dark:bg-white/[0.035] dark:text-[#999]"
              key={`${project.id}-${item}`}
            >
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <time className="mt-2 block text-right text-[0.58rem] text-[#777]">
          {formatDate(project.created_at)}
        </time>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.github ? (
            <a
              className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-[6px] border border-black/14 bg-white/20 text-[0.62rem] font-black tracking-[0.02em] transition duration-200 hover:border-[#c7a400] dark:border-white/12 dark:bg-white/[0.01] dark:hover:border-[#ffd400]"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <NavIcon name="github" size={14} />
              CODE
            </a>
          ) : null}

          {project.link ? (
            <a
              className={`inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-[6px] border border-[#c7a400] bg-[#ffd400] text-[0.62rem] font-black tracking-[0.02em] text-[#111] transition duration-200 hover:bg-[#ffe13a] ${
                project.github ? "" : "col-span-2"
              }`}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              DEMO
              <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
