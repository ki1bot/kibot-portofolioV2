import { NavIcon } from "../common/NavIcon";

function getPrimaryTech(project) {
  const stack = Array.isArray(project.tech_stack) ? project.tech_stack : [];

  return stack[0] || "Software";
}

function getTechTone(value) {
  const tech = String(value || "").toLowerCase();

  if (tech.includes("typescript")) {
    return ["#dbeafe", "#1d4ed8", "#3b82f6"];
  }

  if (tech.includes("go")) {
    return ["#cffafe", "#0e7490", "#06b6d4"];
  }

  if (tech.includes("laravel") || tech.includes("php")) {
    return ["#fee2e2", "#b91c1c", "#ef4444"];
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
    <article className="overflow-hidden rounded-[13px] border border-black/14 bg-white/82 shadow-[0_8px_26px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1.5 hover:border-[#ffd400]/45 hover:shadow-[0_17px_48px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-[#101010]/84 dark:hover:shadow-[0_22px_56px_rgba(0,0,0,0.38)]">
      <div className="grid min-h-[220px] place-items-center overflow-hidden border-b border-black/12 bg-[#e4e4e0] px-5 pt-6 pb-3 dark:border-white/10 dark:bg-[#1b1b1b] max-[520px]:min-h-[198px]">
        <div className="relative w-[88%] max-w-[390px]">
          <div className="relative z-[2] aspect-video overflow-hidden rounded-t-[8px] rounded-b-[4px] border-2 border-[#242424] bg-[#121212] px-[6px] pt-[6px] pb-[11px] shadow-[0_12px_24px_rgba(0,0,0,0.24)] before:absolute before:top-[2px] before:left-1/2 before:z-[5] before:h-[3px] before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-[#555] before:content-['']">
            {project.img ? (
              <img
                className="h-full w-full rounded-[2px] object-cover object-top"
                src={project.img}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="grid h-full w-full place-items-center rounded-[2px] bg-[#1c1c1c] px-4 text-center text-[0.8rem] font-black text-[#bdbdbd]">
                {project.title}
              </div>
            )}
          </div>

          <div className="relative z-[1] -mt-[3px] -ml-[6%] h-[10px] w-[112%] rounded-b-[45%] bg-gradient-to-b from-[#777] to-[#2d2d2d] shadow-[0_8px_12px_rgba(0,0,0,0.24)] after:absolute after:top-px after:left-1/2 after:h-[3px] after:w-[15%] after:-translate-x-1/2 after:rounded-b-[5px] after:bg-[#969696] after:content-['']" />
        </div>
      </div>

      <div className="px-[18px] pt-[17px] pb-[17px]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-2 text-[0.9rem] font-black leading-[1.35] tracking-[-0.018em]">
            <i
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: dotColor }}
            />
            <span className="truncate">{project.title}</span>
          </h3>

          <span
            className="shrink-0 rounded-full px-2.5 py-[5px] text-[0.54rem] font-black"
            style={{
              backgroundColor: badgeBg,
              color: badgeFg,
            }}
          >
            {primaryTech}
          </span>
        </div>

        <p className="mt-3.5 line-clamp-2 min-h-[47px] text-[0.73rem] leading-[1.62] text-[#5b5b5b] dark:text-[#9d9d9d]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-3 flex min-h-7 flex-wrap gap-1.5">
          {stack.slice(0, 5).map((item) => (
            <span
              className="rounded-[5px] bg-[#efefec] px-2 py-[5px] text-[0.52rem] text-[#707070] dark:bg-[#181818] dark:text-[#777]"
              key={`${project.id}-${item}`}
            >
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <div className="mt-2.5 text-right text-[0.57rem] text-[#777]">
          {formatDate(project.created_at)}
        </div>

        <div className="mt-3.5 grid grid-cols-2 gap-2">
          {project.github ? (
            <a
              className="inline-flex min-h-[37px] items-center justify-center gap-1.5 rounded-[6px] border border-black/20 text-[0.64rem] font-black tracking-[0.02em] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a400] dark:border-white/16 dark:hover:border-[#ffd400]"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <NavIcon name="github" size={15} />
              CODE
            </a>
          ) : null}

          {project.link ? (
            <a
              className={`inline-flex min-h-[37px] items-center justify-center gap-1.5 rounded-[6px] border border-[#c7a400] bg-[#ffd400] text-[0.64rem] font-black tracking-[0.02em] text-[#111] transition duration-200 hover:-translate-y-0.5 ${
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
