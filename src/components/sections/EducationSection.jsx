import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";
import { NavIcon } from "../common/NavIcon";

export function EducationSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-black/8 bg-[#f8f8f5] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.04)_0,rgba(17,17,17,0.04)_1px,transparent_1px,transparent_8px)] dark:border-white/8 dark:bg-[#080808] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.043)_0,rgba(255,255,255,0.043)_1px,transparent_1px,transparent_8px)]"
      id="journey"
    >
      <div className="mx-auto w-[min(1480px,calc(100%_-_56px))] py-[108px] pb-[126px] max-[760px]:w-[min(100%_-_30px,1480px)] max-[760px]:py-[88px] max-[760px]:pb-[98px]">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="EXPERIENCE."
          description="My academic and technical journey, from vocational education to Information Systems at Universitas Gunadarma."
        />

        <div className="relative mt-[58px] ml-[15px] max-w-[930px] pl-[50px] before:absolute before:inset-y-4 before:left-3 before:w-px before:bg-black/15 before:content-[''] dark:before:bg-white/14 max-[760px]:ml-0 max-[760px]:pl-[34px] max-[760px]:before:left-[9px]">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="relative mb-[34px] last:mb-0"
              key={`${item.period}-${item.title}`}
              data-reveal
              style={{
                "--reveal-delay": `${index * 70}ms`,
              }}
            >
              <span
                className="absolute top-[22px] left-[-50px] grid h-[27px] w-[27px] place-items-center rounded-full border-2 border-[#ffd400] bg-[#f8f8f5] shadow-[0_0_0_5px_rgba(255,212,0,0.055)] dark:bg-[#080808] max-[760px]:left-[-34px] max-[760px]:h-5 max-[760px]:w-5"
                aria-hidden="true"
              >
                <i className="h-[7px] w-[7px] rounded-full bg-[#ffd400] max-[760px]:h-[5px] max-[760px]:w-[5px]" />
              </span>

              <div
                className={`rounded-[12px] border bg-white/60 p-[27px] shadow-[0_18px_48px_rgba(0,0,0,0.05)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-[#c7a400]/40 dark:bg-[#0d0d0d]/90 dark:shadow-[0_18px_48px_rgba(0,0,0,0.28)] max-[520px]:p-5 ${
                  index === 0
                    ? "border-[#c7a400]/65 dark:border-[#ffd400]/60"
                    : "border-black/13 dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-4 max-[520px]:gap-3">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[9px] border border-[#ffd400]/38 bg-[#ffd400]/10 text-[#917100] dark:text-[#ffd400] max-[520px]:h-[38px] max-[520px]:w-[38px]">
                    <NavIcon name="briefcase" size={16} />
                  </span>

                  <div>
                    <span className="font-mono text-[0.5rem] font-black tracking-[0.13em] text-[#777] uppercase">
                      {item.category}
                    </span>

                    <h3 className="mt-1 text-[clamp(0.98rem,1.15vw,1.14rem)] font-black leading-[1.32] tracking-[-0.02em] uppercase">
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

                <ul className="mt-[19px] grid list-none gap-2.5 p-0">
                  {item.details.map((detail) => (
                    <li
                      className="relative pl-4 text-[0.75rem] leading-[1.68] text-[#626262] before:absolute before:top-[0.72em] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#ffd400] before:content-[''] dark:text-[#9a9a9a]"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-[17px] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-black/10 bg-black/[0.025] px-[9px] py-[5px] text-[0.51rem] text-[#777] dark:border-white/9 dark:bg-white/[0.035]"
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
