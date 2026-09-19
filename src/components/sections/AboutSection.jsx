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
      className="relative overflow-hidden border-t border-black/10 bg-[#f7f7f4] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.055)_0,rgba(17,17,17,0.055)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[#0a0a0a] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.048)_0,rgba(255,255,255,0.048)_1px,transparent_1px,transparent_8px)]"
      id="about"
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1510px] py-28 pb-32 max-[960px]:w-[calc(100%_-_36px)] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:py-[90px] max-[760px]:pb-[105px]">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="mt-12 grid grid-cols-2 items-start gap-[42px] max-[1180px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] max-[960px]:grid-cols-1 max-[960px]:gap-16">
          <div data-reveal>
            <p className="mb-5 max-w-[710px] text-[0.97rem] leading-[1.75] text-[#555] dark:text-[#aaa]">
              Hey there! I&apos;m{" "}
              <strong className="font-extrabold text-[#111] dark:text-[#f5f5f2]">
                {PERSONAL_INFO.fullName}
              </strong>
              , an Information Systems student focused on software development
              across web and mobile applications.
            </p>

            <p className="mb-5 max-w-[710px] text-[0.97rem] leading-[1.75] text-[#555] dark:text-[#aaa]">
              I work with frontend, backend, databases, integrations, and
              deployment. My goal is to turn a clear problem definition into
              software that is useful, maintainable, and straightforward to use.
            </p>

            <div className="mt-[42px] grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {metrics.map(([icon, value, label]) => (
                <article
                  className="min-h-[132px] rounded-xl border border-black/15 bg-white/80 p-[22px] shadow-[inset_0_1px_0_rgba(17,17,17,0.03)] dark:border-white/10 dark:bg-[#111]/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  key={label}
                >
                  <span className="block text-xl" aria-hidden="true">
                    {icon}
                  </span>

                  <strong className="mt-3 block text-[1.75rem] font-black leading-none tracking-[-0.04em]">
                    {value}
                  </strong>

                  <small className="mt-[7px] block font-mono text-[0.57rem] font-black tracking-[0.14em] text-[#777] dark:text-[#767676]">
                    {label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-6 border-l-[3px] border-[#ffd400] py-1 pl-5">
              <p className="m-0 text-[0.9rem] leading-[1.65] text-[#555] italic dark:text-[#aaa]">
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer className="mt-2 text-[0.65rem] font-black tracking-[0.045em] text-[#b28d00] dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div data-reveal>
            <p className="mb-6 font-mono text-[0.68rem] font-black tracking-[0.2em] text-[#555] dark:text-[#aaa]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid grid-cols-6 gap-[9px] max-[1180px]:grid-cols-5 max-[960px]:grid-cols-6 max-[760px]:grid-cols-4 max-[520px]:grid-cols-3">
              {TECH_CARDS.map((item) => (
                <article
                  className="relative flex aspect-square min-w-0 flex-col items-center justify-center overflow-hidden rounded-xl border border-black/10 px-2 pt-[13px] pb-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-200 hover:z-[2] hover:-translate-y-[5px] hover:scale-[1.025] hover:saturate-[1.08] hover:brightness-[1.03]"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                  }}
                  key={item.name}
                >
                  <strong className="text-[clamp(1rem,1.45vw,1.55rem)] font-black leading-none">
                    {item.mark}
                  </strong>

                  <span className="mt-[15px] max-w-full overflow-hidden text-center text-[0.56rem] font-black text-ellipsis whitespace-nowrap">
                    {item.name}
                  </span>

                  <i className="absolute right-[9px] bottom-2 grid h-[18px] w-[18px] place-items-center rounded-full bg-white/20 text-[0.55rem] not-italic">
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
