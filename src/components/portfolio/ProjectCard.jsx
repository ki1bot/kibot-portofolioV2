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

function formatTag(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\+/g, "plus")
    .replace(/#/g, "sharp")
    .replace(/\s+/g, "-");
}

function ExternalLinkIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9 9 3" />
      <path d="M5 3h4v4" />
    </svg>
  );
}

export function ProjectCard({ project }) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];
  const primaryTech = getPrimaryTech(project);
  const imageSource = project.img || "/logoKibot.png";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-black/[0.12] bg-[#f7f7f4] shadow-[0_8px_32px_rgba(0,0,0,0.045)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_22px_58px_rgba(0,0,0,0.11)] dark:border-white/[0.1] dark:bg-[#151515] dark:shadow-[0_12px_38px_rgba(0,0,0,0.24)] dark:hover:border-white/[0.16] dark:hover:shadow-[0_24px_64px_rgba(0,0,0,0.42)] motion-reduce:transform-none">
      <div className="relative aspect-[1.78] overflow-hidden border-b border-black/[0.08] bg-[#2b2b2b] dark:border-white/[0.07]">
        <img
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
          src={imageSource}
          alt={`${project.title} project preview`}
          loading="lazy"
          onError={(event) => {
            if (!event.currentTarget.src.endsWith("/logoKibot.png")) {
              event.currentTarget.src = "/logoKibot.png";
            }
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col px-[20px] pt-[19px] pb-[19px] max-[520px]:px-[17px] max-[520px]:pt-[17px] max-[520px]:pb-[17px]">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="flex min-w-0 items-start gap-[9px]">
            <span className="mt-[7px] h-[8px] w-[8px] shrink-0 rounded-full bg-[#4285f4] shadow-[0_0_0_3px_rgba(66,133,244,0.08)]" />

            <h3 className="min-w-0 text-[1.02rem] font-black leading-[1.4] tracking-[-0.03em] text-[#222220] dark:text-[#f3f3f0] max-[520px]:text-[0.98rem]">
              {project.title}
            </h3>
          </div>

          <span className="shrink-0 rounded-full bg-[#dce9ff] px-[11px] py-[6px] text-[0.57rem] font-extrabold leading-none tracking-[-0.01em] text-[#2457ad] dark:bg-[#dce9ff] dark:text-[#2457ad]">
            {primaryTech}
          </span>
        </div>

        <p className="mt-[13px] line-clamp-3 min-h-[66px] text-[0.79rem] font-normal leading-[1.72] tracking-[-0.01em] text-[#666662] dark:text-[#a1a19d] max-[520px]:text-[0.76rem]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-[14px] flex min-h-[48px] flex-wrap content-start gap-[6px]">
          {stack.slice(0, 7).map((item) => (
            <span
              className="inline-flex h-[23px] items-center rounded-[4px] border border-black/[0.07] bg-black/[0.035] px-[8px] text-[0.58rem] font-medium leading-none tracking-[-0.01em] text-[#6f6f6a] dark:border-white/[0.055] dark:bg-white/[0.04] dark:text-[#90908c]"
              key={`${project.id}-${item}`}
            >
              #{formatTag(item)}
            </span>
          ))}
        </div>

        <time className="mt-[8px] block text-right text-[0.59rem] font-medium leading-none text-[#777773] dark:text-[#92928e]">
          {formatDate(project.created_at)}
        </time>

        <div className="mt-[16px] grid grid-cols-2 gap-[9px]">
          {project.github ? (
            <a
              className={`inline-flex min-h-[41px] items-center justify-center gap-[7px] rounded-[10px] border border-black/[0.16] bg-transparent px-4 text-[0.64rem] font-black tracking-[0.06em] text-[#242423] transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-px hover:border-black/30 hover:bg-black/[0.035] dark:border-white/[0.16] dark:bg-[#121212] dark:text-[#f4f4f2] dark:hover:border-white/30 dark:hover:bg-[#181818] ${
                project.link ? "" : "col-span-2"
              }`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} source code on GitHub`}
            >
              <NavIcon name="github" size={15} />
              <span>CODE</span>
            </a>
          ) : null}

          {project.link ? (
            <a
              className={`inline-flex min-h-[41px] items-center justify-center gap-[8px] rounded-[10px] border border-[#ffc400] bg-[#ffc400] px-4 text-[0.64rem] font-black tracking-[0.06em] transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-[#ffd21a] hover:bg-[#ffd21a] hover:shadow-[0_8px_24px_rgba(255,196,0,0.18)] ${
                project.github ? "" : "col-span-2"
              }`}
              style={{ color: "#111111" }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} demo`}
            >
              <span>DEMO</span>
              <ExternalLinkIcon size={12} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
