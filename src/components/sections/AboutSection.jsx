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
      className="relative overflow-hidden border-t border-black/8 bg-[#f8f8f5] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.04)_0,rgba(17,17,17,0.04)_1px,transparent_1px,transparent_8px)] dark:border-white/8 dark:bg-[#080808] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.043)_0,rgba(255,255,255,0.043)_1px,transparent_1px,transparent_8px)]"
      id="about"
    >
      <div className="mx-auto w-[min(1480px,calc(100%_-_56px))] py-[108px] pb-[126px] max-[760px]:w-[min(100%_-_30px,1480px)] max-[760px]:py-[88px] max-[760px]:pb-[98px]">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="mt-[54px] grid grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] items-start gap-[56px] max-[1050px]:grid-cols-1 max-[1050px]:gap-[54px]">
          <div data-reveal="left">
            <p className="mb-5 max-w-[700px] text-[0.87rem] leading-[1.8] text-[#626262] dark:text-[#9a9a9a]">
              Hey there! I&apos;m{" "}
              <strong className="font-black text-[#111] dark:text-[#f4f4f1]">
                {PERSONAL_INFO.fullName}
              </strong>
              , an Information Systems student focused on software development
              across web and mobile applications.
            </p>

            <p className="mb-5 max-w-[700px] text-[0.87rem] leading-[1.8] text-[#626262] dark:text-[#9a9a9a]">
              My work covers frontend, backend, databases, integrations, and
              deployment. I enjoy converting a clear problem into software that
              remains practical, understandable, and maintainable as it grows.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {metrics.map(([icon, value, label], index) => (
                <article
                  className={`min-h-[116px] rounded-[9px] border bg-white/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-1 dark:bg-[#0d0d0d]/90 ${
                    index === 3
                      ? "border-[#c7a400]/70 dark:border-[#ffd400]/60"
                      : "border-black/14 dark:border-white/12"
                  }`}
                  key={label}
                >
                  <span className="block text-[1rem]">{icon}</span>

                  <strong className="mt-2.5 block text-[1.65rem] font-black leading-none tracking-[-0.045em]">
                    {value}
                  </strong>

                  <small className="mt-2 block font-mono text-[0.52rem] font-black tracking-[0.15em] text-[#777]">
                    {label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-[26px] border-l-[3px] border-[#ffd400] py-1 pl-5">
              <p className="m-0 text-[0.82rem] leading-[1.7] text-[#626262] italic dark:text-[#9a9a9a]">
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer className="mt-2 text-[0.57rem] font-black tracking-[0.06em] text-[#947300] dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div data-reveal="right">
            <p className="mb-[25px] font-mono text-[0.61rem] font-black tracking-[0.2em] text-[#555] dark:text-[#aaa]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid grid-cols-6 gap-2 max-[1200px]:grid-cols-5 max-[1050px]:grid-cols-6 max-[760px]:grid-cols-4 max-[520px]:grid-cols-3">
              {TECH_CARDS.map((item, index) => (
                <a
                  className="group relative isolate flex aspect-square min-w-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[9px] border border-black/10 px-2 pt-3 pb-3 shadow-[0_8px_22px_rgba(0,0,0,0.06)] outline-none transition duration-300 after:pointer-events-none after:absolute after:inset-0 after:z-[-1] after:rounded-[inherit] after:bg-[linear-gradient(145deg,rgba(255,255,255,0.16),transparent_43%,rgba(0,0,0,0.08))] hover:z-[2] hover:-translate-y-1.5 hover:scale-[1.025] hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)] focus-visible:ring-2 focus-visible:ring-[#ffd400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f8f5] dark:focus-visible:ring-offset-[#080808]"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                    "--reveal-delay": `${Math.min(index * 18, 180)}ms`,
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

                  <i className="absolute right-[7px] bottom-[6px] grid h-[17px] w-[17px] place-items-center rounded-full bg-white/18 text-[0.43rem] not-italic transition duration-200 group-hover:translate-x-px group-hover:-translate-y-px">
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
