import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";

export function EducationSection() {
  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="journey"
    >
      <div className="portfolio-shell py-[110px] pb-[125px] max-[760px]:py-[88px]">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="EXPERIENCE."
          description="My academic and technical journey, from vocational education to Information Systems at Universitas Gunadarma."
        />

        <div className="relative mt-[58px] ml-4 max-w-[960px] pl-[48px] before:absolute before:inset-y-3 before:left-[12px] before:w-px before:bg-black/15 before:content-[''] dark:before:bg-white/14 max-[520px]:ml-0 max-[520px]:pl-[32px] max-[520px]:before:left-[9px]">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="relative mb-9 last:mb-0"
              key={`${item.period}-${item.title}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 55}ms` }}
            >
              <span
                className="absolute top-[22px] left-[-48px] grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-[#ffd400] bg-[#f8f8f5] shadow-[0_0_0_5px_rgba(255,212,0,0.06)] dark:bg-[#080808] max-[520px]:left-[-32px] max-[520px]:h-[20px] max-[520px]:w-[20px]"
                aria-hidden="true"
              >
                <i className="h-[7px] w-[7px] rounded-full bg-[#ffd400] max-[520px]:h-[5px] max-[520px]:w-[5px]" />
              </span>

              <div
                className={`rounded-[12px] border bg-white/55 p-7 shadow-[0_15px_45px_rgba(0,0,0,0.045)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 dark:bg-[#0d0d0d]/86 dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)] max-[520px]:p-5 ${
                  index === 0
                    ? "border-[#c7a400]/65 dark:border-[#ffd400]/55"
                    : "border-black/12 dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[9px] border border-[#ffd400]/38 bg-[#ffd400]/10 font-mono text-[0.61rem] font-black text-[#917100] dark:text-[#ffd400]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <span className="font-mono text-[0.5rem] font-black tracking-[0.13em] text-[#777] uppercase">
                      {item.category}
                    </span>

                    <h3 className="display-font mt-1 text-[clamp(0.95rem,1.15vw,1.12rem)] font-black leading-[1.32] tracking-[-0.02em] uppercase">
                      {item.title}
                    </h3>

                    <strong className="mt-1 block text-[0.76rem] text-[#9a7800] dark:text-[#ffd400]">
                      {item.subtitle}
                    </strong>

                    <time className="mt-1 block text-[0.63rem] text-[#777]">
                      {item.period}
                    </time>
                  </div>
                </div>

                <ul className="mt-5 grid list-none gap-3 p-0">
                  {item.details.map((detail) => (
                    <li
                      className="relative pl-4 text-[0.75rem] leading-[1.68] text-[#616161] before:absolute before:top-[0.72em] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#ffd400] before:content-[''] dark:text-[#9b9b9b]"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-[5px] text-[0.51rem] text-[#6f6f6f] dark:border-white/9 dark:bg-white/[0.04] dark:text-[#797979]"
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
