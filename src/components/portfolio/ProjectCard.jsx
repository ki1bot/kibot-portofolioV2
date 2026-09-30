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
    <article className="portfolio-card-shine h-full overflow-hidden rounded-[10px] border border-black/12 bg-white/58 shadow-[0_8px_25px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1.5 hover:border-[#c9a700]/55 hover:shadow-[0_18px_45px_rgba(0,0,0,0.09)] dark:border-white/9 dark:bg-[#0d0d0d]/88 dark:hover:border-[#ffd400]/45 dark:hover:shadow-[0_22px_52px_rgba(0,0,0,0.34)]">
      <div className="grid min-h-[206px] place-items-center overflow-hidden border-b border-black/10 bg-[#e8e8e5] px-5 pt-6 pb-3 dark:border-white/8 dark:bg-[#202020] max-[520px]:min-h-[190px]">
        <div className="relative w-[88%] max-w-[390px]">
          <div className="relative z-[2] aspect-video overflow-hidden rounded-t-[7px] rounded-b-[3px] border-2 border-[#252525] bg-[#101010] px-[5px] pt-[5px] pb-[10px] shadow-[0_12px_24px_rgba(0,0,0,0.24)] before:absolute before:top-[2px] before:left-1/2 before:z-[5] before:h-[3px] before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-[#595959] before:content-['']">
            {project.img ? (
              <img
                className="h-full w-full rounded-[2px] object-cover object-top transition duration-500 hover:scale-[1.025]"
                src={project.img}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="grid h-full w-full place-items-center rounded-[2px] bg-[#1b1b1b] px-4 text-center text-[0.76rem] font-black text-[#bdbdbd]">
                {project.title}
              </div>
            )}
          </div>

          <div className="relative z-[1] -mt-[3px] -ml-[6%] h-[9px] w-[112%] rounded-b-[46%] bg-gradient-to-b from-[#858585] to-[#303030] shadow-[0_8px_12px_rgba(0,0,0,0.2)] after:absolute after:top-px after:left-1/2 after:h-[3px] after:w-[15%] after:-translate-x-1/2 after:rounded-b-[5px] after:bg-[#a1a1a1] after:content-['']" />
        </div>
      </div>

      <div className="px-[16px] pt-[15px] pb-[15px]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-2 text-[0.8rem] font-black leading-[1.35] tracking-[-0.016em]">
            <i
              className="h-[7px] w-[7px] shrink-0 rounded-full"
              style={{ backgroundColor: dotColor }}
            />

            <span className="truncate">{project.title}</span>
          </h3>

          <span
            className="shrink-0 rounded-full px-2 py-[4px] text-[0.48rem] font-black"
            style={{
              backgroundColor: badgeBg,
              color: badgeFg,
            }}
          >
            {primaryTech}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 min-h-[43px] text-[0.66rem] leading-[1.62] text-[#5e5e5e] dark:text-[#989898]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-3 flex min-h-6 flex-wrap gap-1.5">
          {stack.slice(0, 5).map((item) => (
            <span
              className="rounded-[4px] bg-black/[0.035] px-2 py-[4px] text-[0.47rem] text-[#6d6d6d] dark:bg-white/[0.045] dark:text-[#757575]"
              key={`${project.id}-${item}`}
            >
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <div className="mt-2.5 text-right text-[0.51rem] text-[#777]">
          {formatDate(project.created_at)}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.github ? (
            <a
              className="inline-flex min-h-[35px] items-center justify-center gap-1.5 rounded-[5px] border border-black/18 bg-white/25 text-[0.58rem] font-black tracking-[0.02em] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a400] dark:border-white/13 dark:bg-white/[0.01] dark:hover:border-[#ffd400]"
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
              className={`inline-flex min-h-[35px] items-center justify-center gap-1.5 rounded-[5px] border border-[#c7a400] bg-[#ffd400] text-[0.58rem] font-black tracking-[0.02em] text-[#111] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffe03a] ${
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
