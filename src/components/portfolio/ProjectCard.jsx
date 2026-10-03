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

function createSlug(title) {
  return String(title || "project")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ProjectCard({ project }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];
  const primaryTech = getPrimaryTech(project);
  const slug = createSlug(project.title);

  return (
    <article className="group h-full overflow-hidden rounded-[11px] border border-black/12 bg-white/48 backdrop-blur-[5px] transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1 hover:border-[#c7a400]/52 hover:bg-white/68 hover:shadow-[0_22px_54px_rgba(0,0,0,0.09)] dark:border-white/10 dark:bg-[#101010]/82 dark:hover:border-[#ffd400]/38 dark:hover:bg-[#121212] dark:hover:shadow-[0_22px_54px_rgba(0,0,0,0.34)] motion-reduce:transform-none">
      <div className="relative aspect-[1.78] overflow-hidden border-b border-black/10 bg-[#e6e5df] dark:border-white/8 dark:bg-[#181818]">
        {project.img ? (
          <img
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            src={project.img}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[#171717] px-4 text-center text-[0.76rem] font-black text-[#bcbcbc]">
            {project.title}
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/38 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative z-[2] px-[18px] pt-[17px] pb-[18px]">
        <div className="flex items-center justify-between gap-3">
          <span className="min-w-0 truncate font-mono text-[0.5rem] font-black tracking-[0.12em] text-[#927100] uppercase dark:text-[#d5ad20]">
            // {slug}
          </span>

          <span className="shrink-0 rounded-full bg-[#ffd400]/13 px-2.5 py-[5px] text-[0.54rem] font-bold text-[#806300] dark:text-[#e5be22]">
            {primaryTech}
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-[45px] text-[0.98rem] font-black leading-[1.34] tracking-[-0.028em]">
          {project.title}
        </h3>

        <p className="mt-[10px] line-clamp-3 min-h-[61px] text-[0.75rem] leading-[1.68] text-[#62625f] dark:text-[#999996]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-3 flex min-h-7 flex-wrap gap-1.5">
          {stack.slice(0, 6).map((item) => (
            <span
              className="rounded-full border border-black/8 bg-black/[0.025] px-2 py-1 text-[0.58rem] text-[#6d6d69] dark:border-white/8 dark:bg-white/[0.035] dark:text-[#999]"
              key={`${project.id}-${item}`}
            >
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <time className="mt-2.5 block text-right text-[0.56rem] text-[#777]">
          {formatDate(project.created_at)}
        </time>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.github ? (
            <a
              className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-[6px] border border-black/14 bg-white/22 text-[0.61rem] font-black tracking-[0.02em] transition duration-200 hover:border-[#c7a400] hover:bg-white/55 dark:border-white/11 dark:bg-white/[0.01] dark:hover:border-[#ffd400]/55 dark:hover:bg-white/[0.03]"
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
              className={`inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-[6px] border border-[#c7a400] bg-[#ffd400] text-[0.61rem] font-black tracking-[0.02em] text-[#111] transition duration-200 hover:-translate-y-px hover:bg-[#ffe13a] ${
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
