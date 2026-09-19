import { TECH_CARDS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    ["🔥", "Student", "CURRENT STATUS"],
    ["🚀", projectCount, "PROJECTS SHIPPED"],
    ["🏆", certificateCount.replace("+", ""), "CERTIFICATIONS"],
    ["🎓", "S1", "INFORMATION SYSTEMS"],
  ];

  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/10 dark:border-white/10"
      id="about"
    >
      <div className="portfolio-shell py-[108px] pb-[122px] max-[760px]:py-[88px] max-[760px]:pb-[100px]">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="mt-12 grid grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] items-start gap-[52px] max-[980px]:grid-cols-1 max-[980px]:gap-14">
          <div data-reveal>
            <p className="mb-5 max-w-[690px] text-[0.93rem] leading-[1.78] text-[#5c5c5c] dark:text-[#a0a0a0]">
              Hey there! I&apos;m{" "}
              <strong className="font-extrabold text-[#111] dark:text-[#f5f5f2]">
                {PERSONAL_INFO.fullName}
              </strong>
              , an Information Systems student focused on software development
              across web and mobile applications.
            </p>

            <p className="mb-5 max-w-[690px] text-[0.93rem] leading-[1.78] text-[#5c5c5c] dark:text-[#a0a0a0]">
              I work with frontend, backend, databases, integrations, and
              deployment. My goal is to turn a clear problem definition into
              software that is useful, maintainable, and straightforward to use.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {metrics.map(([icon, value, label]) => (
                <article
                  className="min-h-[118px] rounded-xl border border-black/14 bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(17,17,17,0.03)] dark:border-white/10 dark:bg-[#111]/78 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  key={label}
                >
                  <span className="block text-[1.1rem]" aria-hidden="true">
                    {icon}
                  </span>

                  <strong className="mt-2.5 block text-[1.65rem] font-black leading-none tracking-[-0.04em]">
                    {value}
                  </strong>

                  <small className="mt-1.5 block font-mono text-[0.54rem] font-black tracking-[0.14em] text-[#777] dark:text-[#777]">
                    {label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-6 border-l-[3px] border-[#ffd400] py-1 pl-5">
              <p className="m-0 text-[0.86rem] leading-[1.68] text-[#5c5c5c] italic dark:text-[#9d9d9d]">
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer className="mt-2 text-[0.62rem] font-black tracking-[0.05em] text-[#a88400] dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div data-reveal>
            <p className="mb-6 font-mono text-[0.65rem] font-black tracking-[0.2em] text-[#555] dark:text-[#aaa]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid grid-cols-6 gap-[8px] max-[1180px]:grid-cols-5 max-[980px]:grid-cols-6 max-[760px]:grid-cols-4 max-[520px]:grid-cols-3">
              {TECH_CARDS.map((item) => (
                <article
                  className="relative flex aspect-square min-w-0 flex-col items-center justify-center overflow-hidden rounded-[10px] border border-black/10 px-2 pt-3 pb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition duration-200 hover:z-[2] hover:-translate-y-1.5 hover:scale-[1.02] hover:saturate-[1.08]"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                  }}
                  key={item.name}
                >
                  <strong className="text-[clamp(0.95rem,1.25vw,1.35rem)] font-black leading-none">
                    {item.mark}
                  </strong>

                  <span className="mt-3.5 max-w-full overflow-hidden text-center text-[0.52rem] font-black text-ellipsis whitespace-nowrap">
                    {item.name}
                  </span>

                  <i className="absolute right-[8px] bottom-[7px] grid h-[17px] w-[17px] place-items-center rounded-full bg-white/20 text-[0.5rem] not-italic">
                    ↗
                  </i>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
