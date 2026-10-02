import { TECH_CARDS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    ["◆", "Student", "CURRENT STATUS"],
    ["↗", projectCount, "PROJECTS SHIPPED"],
    ["★", certificateCount.replace("+", ""), "CERTIFICATIONS"],
    ["◆", "S1", "INFORMATION SYSTEMS"],
  ];

  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="about"
    >
      <div className="portfolio-shell py-[110px] pb-[125px] max-[760px]:py-[88px]">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="mt-[54px] grid grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] items-start gap-[56px] max-[1050px]:grid-cols-1 max-[1050px]:gap-14">
          <div data-reveal="left">
            <p className="mb-5 max-w-[700px] text-[0.87rem] leading-[1.8] text-[#5e5e5e] dark:text-[#9f9f9f]">
              Hey there! I&apos;m{" "}
              <strong className="font-black text-[#111] dark:text-[#f5f5f2]">
                {PERSONAL_INFO.fullName}
              </strong>
              , an Information Systems student focused on software development
              across web and mobile applications.
            </p>

            <p className="mb-5 max-w-[700px] text-[0.87rem] leading-[1.8] text-[#5e5e5e] dark:text-[#9f9f9f]">
              My work covers frontend, backend, databases, integrations, and
              deployment. I enjoy converting a clear problem into software that
              remains practical, understandable, and maintainable as it grows.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {metrics.map(([icon, value, label], index) => (
                <article
                  className={`min-h-[116px] rounded-[9px] border bg-white/46 p-5 shadow-[inset_0_1px_0_rgba(0,0,0,0.025)] transition duration-300 hover:-translate-y-1 dark:bg-[#0d0d0d]/82 ${
                    index === 3
                      ? "border-[#c7a400]/70 dark:border-[#ffd400]/65"
                      : "border-black/13 dark:border-white/10"
                  }`}
                  key={label}
                >
                  <span className="block text-[1rem] font-black text-[#b18c00] dark:text-[#ffd400]">
                    {icon}
                  </span>

                  <strong className="display-font mt-2.5 block text-[1.65rem] font-black leading-none tracking-[-0.045em]">
                    {value}
                  </strong>

                  <small className="mt-2 block font-mono text-[0.52rem] font-black tracking-[0.15em] text-[#777] dark:text-[#777]">
                    {label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-7 border-l-[3px] border-[#ffd400] py-1 pl-5">
              <p className="m-0 text-[0.82rem] leading-[1.7] text-[#5f5f5f] italic dark:text-[#9b9b9b]">
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer className="mt-2 text-[0.57rem] font-black tracking-[0.06em] text-[#947300] dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div data-reveal="right">
            <p className="mb-7 font-mono text-[0.61rem] font-black tracking-[0.2em] text-[#555] dark:text-[#aaa]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid grid-cols-6 gap-[8px] max-[1200px]:grid-cols-5 max-[1050px]:grid-cols-6 max-[760px]:grid-cols-4 max-[520px]:grid-cols-3">
              {TECH_CARDS.map((item, index) => (
                <a
                  className="tech-card relative flex aspect-square min-w-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[9px] border border-black/10 px-2 pt-3 pb-3 shadow-[0_8px_22px_rgba(0,0,0,0.05)] outline-none transition duration-300 hover:z-[2] hover:-translate-y-1.5 hover:scale-[1.025] hover:shadow-[0_14px_28px_rgba(0,0,0,0.16)] focus-visible:z-[3] focus-visible:-translate-y-1.5 focus-visible:scale-[1.025] focus-visible:ring-2 focus-visible:ring-[#ffd400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f8f5] dark:focus-visible:ring-offset-[#080808]"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                    "--reveal-delay": `${Math.min(index * 16, 180)}ms`,
                  }}
                  key={item.name}
                  data-reveal="scale"
                  aria-label={`Buka website resmi ${item.name}`}
                  title={`Buka website resmi ${item.name}`}
                >
                  <img
                    className="h-[31px] w-[31px] object-contain"
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    draggable="false"
                    style={{
                      filter: item.invert ? "invert(1)" : undefined,
                    }}
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      const fallback = event.currentTarget.nextElementSibling;

                      if (fallback) {
                        fallback.hidden = false;
                      }
                    }}
                  />

                  <strong
                    className="text-[1.05rem] font-black leading-none"
                    hidden
                  >
                    {item.mark}
                  </strong>

                  <span className="mt-3 max-w-full overflow-hidden text-center text-[0.48rem] font-black text-ellipsis whitespace-nowrap">
                    {item.name}
                  </span>

                  <i className="absolute right-[7px] bottom-[6px] grid h-[17px] w-[17px] place-items-center rounded-full bg-white/18 text-[0.43rem] not-italic transition duration-300 group-hover:-translate-y-0.5">
                    ↗
                  </i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
