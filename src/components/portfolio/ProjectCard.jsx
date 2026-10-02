import { NavIcon } from "../common/NavIcon";

function getPrimaryTech(project) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return stack[0] || "Software";
}

function getTechTone(value) {
  const tech = String(value || "").toLowerCase();

  if (tech.includes("typescript")) {
    return ["#dfe8ff", "#2e5fa8", "#3777db"];
  }

  if (tech.includes("go")) {
    return ["#d7f8fd", "#0e7490", "#06b6d4"];
  }

  if (tech.includes("laravel") || tech.includes("php")) {
    return ["#ffe4e4", "#b91c1c", "#ef4444"];
  }

  if (tech.includes("java")) {
    return ["#ffedd5", "#c2410c", "#f97316"];
  }

  if (tech.includes("react") || tech.includes("next")) {
    return ["#e0f2fe", "#0369a1", "#0ea5e9"];
  }

  if (tech.includes("python")) {
    return ["#fef3c7", "#92400e", "#f59e0b"];
  }

  if (tech.includes("flutter") || tech.includes("dart")) {
    return ["#e0f2fe", "#075985", "#38bdf8"];
  }

  return ["#e5e7eb", "#374151", "#9ca3af"];
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
  const [badgeBg, badgeFg, dotColor] = getTechTone(primaryTech);

  return (
    <article className="group relative isolate h-full overflow-hidden rounded-[11px] border border-black/13 bg-white/60 shadow-[0_9px_28px_rgba(0,0,0,0.045)] transition duration-300 after:pointer-events-none after:absolute after:inset-0 after:z-[5] after:translate-x-[-18%] after:rounded-[inherit] after:bg-[linear-gradient(115deg,transparent_22%,rgba(255,255,255,0.055)_48%,transparent_72%)] after:opacity-0 after:transition-all after:duration-[420ms] hover:-translate-y-1.5 hover:border-[#c7a400]/55 hover:shadow-[0_22px_52px_rgba(0,0,0,0.1)] hover:after:translate-x-[16%] hover:after:opacity-100 dark:border-white/10 dark:bg-[#0d0d0d]/92 dark:hover:border-[#ffd400]/45 dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
      <div className="grid min-h-[220px] place-items-center overflow-hidden border-b border-black/10 bg-[#252525] px-5 pt-6 pb-3 dark:border-white/8 max-[520px]:min-h-[195px]">
        <div className="relative w-[88%] max-w-[390px]">
          <div className="relative z-[2] aspect-video overflow-hidden rounded-t-[7px] rounded-b-[3px] border-2 border-[#222] bg-[#101010] px-[5px] pt-[5px] pb-[10px] shadow-[0_13px_28px_rgba(0,0,0,0.28)] before:absolute before:top-[2px] before:left-1/2 before:z-[5] before:h-[3px] before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-[#555] before:content-['']">
            {project.img ? (
              <img
                className="h-full w-full rounded-[2px] object-cover object-top transition duration-500 group-hover:scale-[1.025]"
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

          <div className="relative z-[1] -mt-[3px] -ml-[6%] h-[10px] w-[112%] rounded-b-[48%] bg-gradient-to-b from-[#868686] to-[#303030] shadow-[0_8px_12px_rgba(0,0,0,0.22)] after:absolute after:top-px after:left-1/2 after:h-[3px] after:w-[15%] after:-translate-x-1/2 after:rounded-b-[5px] after:bg-[#aaa] after:content-['']" />
        </div>
      </div>

      <div className="relative z-[2] px-[18px] pt-[17px] pb-[17px]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-2 text-[0.82rem] font-black leading-[1.35] tracking-[-0.018em]">
            <i
              className="h-[7px] w-[7px] shrink-0 rounded-full"
              style={{
                backgroundColor: dotColor,
              }}
            />

            <span className="truncate">{project.title}</span>
          </h3>

          <span
            className="shrink-0 rounded-full px-2.5 py-[5px] text-[0.49rem] font-black"
            style={{
              backgroundColor: badgeBg,
              color: badgeFg,
            }}
          >
            {primaryTech}
          </span>
        </div>

        <p className="mt-[13px] line-clamp-2 min-h-[44px] text-[0.67rem] leading-[1.62] text-[#626262] dark:text-[#999]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-2.5 flex min-h-7 flex-wrap gap-1.5">
          {stack.slice(0, 6).map((item) => (
            <span
              className="rounded-[4px] bg-black/[0.035] px-2 py-1 text-[0.47rem] text-[#6d6d6d] dark:bg-white/[0.045] dark:text-[#777]"
              key={`${project.id}-${item}`}
            >
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <time className="mt-2 block text-right text-[0.51rem] text-[#777]">
          {formatDate(project.created_at)}
        </time>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.github ? (
            <a
              className="inline-flex min-h-[37px] items-center justify-center gap-1.5 rounded-[6px] border border-black/19 bg-white/20 text-[0.59rem] font-black tracking-[0.02em] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a400] dark:border-white/14 dark:bg-white/[0.01] dark:hover:border-[#ffd400]"
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
              className={`inline-flex min-h-[37px] items-center justify-center gap-1.5 rounded-[6px] border border-[#c7a400] bg-[#ffd400] text-[0.59rem] font-black tracking-[0.02em] text-[#111] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffe13a] ${
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
