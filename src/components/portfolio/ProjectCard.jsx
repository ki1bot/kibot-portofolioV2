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
    <article className="overflow-hidden rounded-[15px] border border-black/15 bg-white/90 shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-[5px] hover:border-[#ffd400]/45 hover:shadow-[0_18px_55px_rgba(0,0,0,0.09)] dark:border-white/10 dark:bg-[#111]/90 dark:hover:shadow-[0_22px_65px_rgba(0,0,0,0.42)]">
      <div className="grid min-h-[244px] place-items-center overflow-hidden border-b border-black/15 bg-[#e5e5e2] px-6 pt-[26px] pb-3 dark:border-white/10 dark:bg-[#202020] max-[520px]:min-h-[210px] max-[520px]:px-4">
        <div className="relative w-[88%] max-w-[420px]">
          <div className="relative z-[2] aspect-video overflow-hidden rounded-t-[10px] rounded-b-[5px] border-2 border-[#262626] bg-[#131313] px-[7px] pt-[7px] pb-[13px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] before:absolute before:top-[3px] before:left-1/2 before:z-[5] before:h-[3px] before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-[#555] before:content-['']">
            {project.img ? (
              <img
                className="h-full w-full rounded-[3px] object-cover object-top"
                src={project.img}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="grid h-full w-full place-items-center rounded-[3px] bg-[#1c1c1c] text-center font-black text-[#bdbdbd]">
                {project.title}
              </div>
            )}
          </div>

          <div className="relative z-[1] -mt-[3px] -ml-[6%] h-[11px] w-[112%] rounded-b-[45%] bg-gradient-to-b from-[#777] to-[#2e2e2e] shadow-[0_9px_13px_rgba(0,0,0,0.24)] after:absolute after:top-px after:left-1/2 after:h-[3px] after:w-[15%] after:-translate-x-1/2 after:rounded-b-[5px] after:bg-[#969696] after:content-['']" />
        </div>
      </div>

      <div className="px-5 pt-[19px] pb-[18px]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-[9px] text-[0.94rem] font-black leading-[1.35] tracking-[-0.018em]">
            <i
              className="h-2 w-2 shrink-0 rounded-full"
              style={{
                backgroundColor: dotColor,
              }}
            />

            {project.title}
          </h3>

          <span
            className="shrink-0 rounded-full px-2.5 py-[5px] text-[0.58rem] font-black"
            style={{
              backgroundColor: badgeBg,
              color: badgeFg,
            }}
          >
            {primaryTech}
          </span>
        </div>

        <p className="mt-[15px] line-clamp-2 min-h-[50px] text-[0.77rem] leading-[1.62] text-[#555] dark:text-[#aaa]">
          {project.description || "Project software yang sedang dikembangkan."}
        </p>

        <div className="mt-3 flex min-h-7 flex-wrap gap-1.5">
          {stack.slice(0, 6).map((item) => (
            <span
              className="rounded-[5px] bg-[#f1f1ee] px-2 py-[5px] text-[0.55rem] text-[#777] dark:bg-[#171717] dark:text-[#767676]"
              key={`${project.id}-${item}`}
            >
              #{item.toLowerCase().replaceAll(" ", "-")}
            </span>
          ))}
        </div>

        <div className="mt-[11px] text-right text-[0.6rem] text-[#777] dark:text-[#767676]">
          {formatDate(project.created_at)}
        </div>

        <div className="mt-[15px] grid grid-cols-2 gap-2">
          {project.github ? (
            <a
              className="inline-flex min-h-[39px] items-center justify-center gap-[7px] rounded-lg border border-black/25 text-[0.68rem] font-black tracking-[0.02em] transition duration-200 hover:-translate-y-0.5 hover:border-[#caa700] dark:border-white/20 dark:hover:border-[#ffd400]"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <NavIcon name="github" size={16} />
              CODE
            </a>
          ) : null}

          {project.link ? (
            <a
              className={`inline-flex min-h-[39px] items-center justify-center gap-[7px] rounded-lg border border-[#caa700] bg-[#ffd400] text-[0.68rem] font-black tracking-[0.02em] text-[#111] transition duration-200 hover:-translate-y-0.5 ${
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
