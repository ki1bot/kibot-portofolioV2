import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";
import { NavIcon } from "../common/NavIcon";

export function EducationSection() {
  return (
    <section
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
      id="journey"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(45deg,rgba(17,17,16,0.105)_0px,rgba(17,17,16,0.105)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,0,0.105),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(255,184,0,0.045),transparent_30%)] dark:bg-none"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.015))] dark:bg-none"
        aria-hidden="true"
      />

      <div className="portfolio-container">
        <SectionHeading
          eyebrow="Academic journey"
          title="MY"
          accent="JOURNEY."
          description="My academic and technical journey, from vocational education to Information Systems at Universitas Gunadarma."
        />

        <div className="relative mx-auto mt-12 max-w-[1060px] pl-[54px] before:absolute before:inset-y-4 before:left-3 before:w-px before:bg-black/14 before:content-[''] dark:before:bg-white/13 max-[760px]:ml-0 max-[760px]:pl-[34px] max-[760px]:before:left-[9px]">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="relative mb-7 last:mb-0"
              key={`${item.period}-${item.title}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <span
                className="absolute top-[24px] left-[-54px] grid h-[27px] w-[27px] place-items-center rounded-full border-2 border-[#ffd400] bg-[#f7f7f3] shadow-[0_0_0_6px_rgba(255,212,0,0.05)] dark:bg-[#080808] max-[760px]:left-[-34px] max-[760px]:h-5 max-[760px]:w-5"
                aria-hidden="true"
              >
                <i className="h-[7px] w-[7px] rounded-full bg-[#ffd400] max-[760px]:h-[5px] max-[760px]:w-[5px]" />
              </span>

              <div
                className={`rounded-[12px] border bg-white/48 p-[28px] backdrop-blur-[5px] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#c7a400]/45 hover:shadow-[0_14px_34px_rgba(0,0,0,0.06)] dark:bg-[#101010]/78 dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.25)] max-[520px]:p-5 ${
                  index === 0
                    ? "border-[#c7a400]/64 dark:border-[#ffd400]/54"
                    : "border-black/12 dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-4 max-[520px]:gap-3">
                  <span className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[9px] border border-[#ffd400]/34 bg-[#ffd400]/9 text-[#917100] dark:text-[#ffd400] max-[520px]:h-[38px] max-[520px]:w-[38px]">
                    <NavIcon name="briefcase" size={16} />
                  </span>

                  <div>
                    <span className="font-mono text-[0.5rem] font-black tracking-[0.14em] text-[#777] uppercase">
                      {item.category}
                    </span>

                    <h3 className="mt-1 text-[clamp(1rem,1.2vw,1.18rem)] font-black leading-[1.32] tracking-[-0.02em] uppercase">
                      {item.title}
                    </h3>

                    <strong className="mt-1 block text-[0.76rem] text-[#9a7800] dark:text-[#ffd400]">
                      {item.subtitle}
                    </strong>

                    <time className="mt-1 block text-[0.62rem] text-[#777]">
                      {item.period}
                    </time>
                  </div>
                </div>

                <ul className="mt-[20px] grid list-none gap-2.5 p-0">
                  {item.details.map((detail) => (
                    <li
                      className="relative pl-4 text-[0.76rem] leading-[1.7] text-[#62625f] before:absolute before:top-[0.72em] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#ffd400] before:content-[''] dark:text-[#999996]"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-[18px] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-black/9 bg-black/[0.025] px-[9px] py-[5px] text-[0.5rem] text-[#777] dark:border-white/9 dark:bg-white/[0.035]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
