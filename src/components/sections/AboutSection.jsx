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
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="about"
    >
      <div className="portfolio-shell py-[104px] pb-[118px] max-[760px]:py-[82px] max-[760px]:pb-[96px]">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="mt-11 grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-[54px] max-[980px]:grid-cols-1 max-[980px]:gap-14">
          <div data-reveal="left">
            <p className="mb-5 max-w-[690px] text-[0.86rem] leading-[1.78] text-[#5e5e5e] dark:text-[#9e9e9e]">
              Hey there! I&apos;m{" "}
              <strong className="font-extrabold text-[#111] dark:text-[#f4f4f1]">
                {PERSONAL_INFO.fullName}
              </strong>
              , an Information Systems student focused on software development
              across web and mobile applications.
            </p>

            <p className="mb-5 max-w-[690px] text-[0.86rem] leading-[1.78] text-[#5e5e5e] dark:text-[#9e9e9e]">
              I work with frontend, backend, databases, integrations, and
              deployment. My goal is to turn a clear problem definition into
              software that is useful, maintainable, and straightforward to use.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {metrics.map(([icon, value, label], index) => (
                <article
                  className={`portfolio-card-shine min-h-[104px] rounded-[9px] border bg-white/56 p-[18px] shadow-[inset_0_1px_0_rgba(17,17,17,0.025)] transition duration-300 hover:-translate-y-1 dark:bg-[#0d0d0d]/78 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] ${
                    index === 2
                      ? "border-[#c9a700]/72 dark:border-[#ffd400]/72"
                      : "border-black/12 dark:border-white/9"
                  }`}
                  key={label}
                >
                  <span className="block text-[1rem]" aria-hidden="true">
                    {icon}
                  </span>

                  <strong className="mt-2 block text-[1.55rem] font-black leading-none tracking-[-0.045em]">
                    {value}
                  </strong>

                  <small className="mt-1.5 block font-mono text-[0.51rem] font-black tracking-[0.14em] text-[#777] dark:text-[#757575]">
                    {label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-7 border-l-[3px] border-[#ffd400] py-1 pl-4">
              <p className="m-0 text-[0.8rem] leading-[1.68] text-[#606060] italic dark:text-[#969696]">
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer className="mt-2 text-[0.56rem] font-black tracking-[0.06em] text-[#987600] dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div data-reveal="right">
            <p className="mb-5 font-mono text-[0.6rem] font-black tracking-[0.2em] text-[#565656] dark:text-[#aaa]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid grid-cols-6 gap-[7px] max-[1180px]:grid-cols-5 max-[980px]:grid-cols-6 max-[760px]:grid-cols-4 max-[520px]:grid-cols-3">
              {TECH_CARDS.map((item, index) => (
                <article
                  className="relative flex aspect-square min-w-0 flex-col items-center justify-center overflow-hidden rounded-[8px] border border-black/10 px-2 pt-3 pb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:z-[2] hover:-translate-y-1.5 hover:scale-[1.025] hover:saturate-[1.08]"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                    "--reveal-delay": `${Math.min(index * 18, 180)}ms`,
                  }}
                  key={item.name}
                  data-reveal="scale"
                >
                  <strong className="text-[clamp(0.9rem,1.18vw,1.28rem)] font-black leading-none">
                    {item.mark}
                  </strong>

                  <span className="mt-3 max-w-full overflow-hidden text-center text-[0.48rem] font-black text-ellipsis whitespace-nowrap">
                    {item.name}
                  </span>

                  <i className="absolute right-[7px] bottom-[6px] grid h-[15px] w-[15px] place-items-center rounded-full bg-white/20 text-[0.44rem] not-italic">
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
