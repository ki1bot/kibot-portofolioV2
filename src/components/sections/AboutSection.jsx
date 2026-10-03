import { TECH_CARDS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    ["Student", "CURRENT STATUS"],
    [projectCount, "PROJECTS SHIPPED"],
    [certificateCount.replace("+", ""), "CERTIFICATIONS"],
    ["S1", "INFORMATION SYSTEMS"],
  ];

  return (
    <section className="portfolio-section" id="about">
      <div className="portfolio-container">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="mt-12 grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-start gap-[clamp(48px,6vw,92px)] max-[1100px]:grid-cols-1 max-[1100px]:gap-12 max-[520px]:mt-9 max-[520px]:gap-10">
          <div data-reveal="left">
            <p className="mb-5 max-w-[690px] text-[0.88rem] leading-[1.82] text-[#62625f] dark:text-[#999996]">
              Hey there! I&apos;m{" "}
              <strong className="font-black text-[#111] dark:text-[#f3f3f0]">
                {PERSONAL_INFO.fullName}
              </strong>
              , an Information Systems student focused on software development
              across web and mobile applications.
            </p>

            <p className="mb-5 max-w-[690px] text-[0.88rem] leading-[1.82] text-[#62625f] dark:text-[#999996]">
              My work covers frontend, backend, databases, integrations, and
              deployment. I enjoy turning a clear problem into software that is
              practical, understandable, and maintainable as it grows.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-[380px]:grid-cols-1">
              {metrics.map(([value, label], index) => (
                <article
                  className={`min-h-[112px] rounded-[10px] border bg-white/48 p-5 backdrop-blur-[5px] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 dark:bg-[#101010]/78 max-[520px]:min-h-[98px] max-[520px]:p-4 ${
                    index === 3
                      ? "border-[#c7a400]/70 dark:border-[#ffd400]/56"
                      : "border-black/12 dark:border-white/10"
                  }`}
                  key={label}
                >
                  <strong className="block text-[1.7rem] font-black leading-none tracking-[-0.05em]">
                    {value}
                  </strong>

                  <small className="mt-3 block font-mono text-[0.56rem] font-black tracking-[0.13em] text-[#777] dark:text-[#999]">
                    {label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-[28px] border-l-[3px] border-[#ffd400] py-1 pl-5">
              <p className="m-0 text-[0.82rem] leading-[1.72] text-[#62625f] italic dark:text-[#999996]">
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer className="mt-2 text-[0.56rem] font-black tracking-[0.08em] text-[#947300] dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div data-reveal="right">
            <p className="mb-[25px] font-mono text-[0.6rem] font-black tracking-[0.2em] text-[#555] dark:text-[#aaa]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid grid-cols-6 gap-2.5 max-[1380px]:grid-cols-5 max-[1100px]:grid-cols-6 max-[760px]:grid-cols-4 max-[520px]:grid-cols-3 max-[380px]:gap-2">
              {TECH_CARDS.map((item, index) => (
                <a
                  className="group relative flex aspect-square min-w-0 flex-col items-center justify-center overflow-hidden rounded-[9px] border border-black/10 bg-white/52 px-2 py-3 outline-none backdrop-blur-[4px] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:z-[2] hover:-translate-y-1 hover:border-[#c7a400]/55 hover:bg-white/78 hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] dark:border-white/9 dark:bg-[#101010]/76 dark:hover:border-[#ffd400]/38 dark:hover:bg-[#151515] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)] focus-visible:ring-2 focus-visible:ring-[#ffd400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f8f5] dark:focus-visible:ring-offset-[#080808]"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--reveal-delay": `${Math.min(index * 18, 180)}ms` }}
                  key={item.name}
                  data-reveal="scale"
                  aria-label={`Buka website resmi ${item.name}`}
                  title={`Buka website resmi ${item.name}`}
                >
                  <img
                    className={`h-[31px] w-[31px] object-contain ${
                      item.invert ? "dark:invert" : ""
                    }`}
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    draggable="false"
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

                  <span className="mt-3 max-w-full overflow-hidden text-center text-[0.54rem] font-black text-ellipsis whitespace-nowrap">
                    {item.name}
                  </span>

                  <i className="absolute right-[7px] bottom-[6px] grid h-[17px] w-[17px] place-items-center rounded-full bg-black/[0.035] text-[0.43rem] not-italic transition duration-200 group-hover:translate-x-px group-hover:-translate-y-px dark:bg-white/[0.045]">
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
