import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";

export function EducationSection() {
  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="journey"
    >
      <div className="portfolio-shell py-[104px] pb-[118px] max-[760px]:py-[82px] max-[760px]:pb-[96px]">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="EXPERIENCE."
          description="My academic journey and technical development, from vocational education to Information Systems at Universitas Gunadarma."
        />

        <div className="relative mt-[48px] ml-3 max-w-[970px] pl-[44px] before:absolute before:inset-y-3 before:left-[11px] before:w-px before:bg-black/14 before:content-[''] dark:before:bg-white/14 max-[520px]:ml-0 max-[520px]:pl-[31px] max-[520px]:before:left-[8px]">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="relative mb-7 last:mb-0"
              key={`${item.period}-${item.title}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 55}ms` }}
            >
              <span
                className="absolute top-[20px] left-[-44px] grid h-[24px] w-[24px] place-items-center rounded-full border-[2px] border-[#ffd400] bg-[#f8f8f5] shadow-[0_0_0_5px_rgba(255,212,0,0.05)] dark:bg-[#090909] max-[520px]:left-[-31px] max-[520px]:h-[19px] max-[520px]:w-[19px]"
                aria-hidden="true"
              >
                <i className="h-[7px] w-[7px] rounded-full bg-[#ffd400] max-[520px]:h-[5px] max-[520px]:w-[5px]" />
              </span>

              <div
                className={`portfolio-card-shine rounded-[11px] border bg-white/54 p-6 shadow-[0_12px_38px_rgba(0,0,0,0.045)] backdrop-blur-[1px] transition duration-300 hover:-translate-y-0.5 dark:bg-[#0d0d0d]/82 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)] max-[520px]:p-5 ${
                  index === 0
                    ? "border-[#c7a400]/60 dark:border-[#ffd400]/58"
                    : "border-black/11 dark:border-white/9"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-[8px] border border-[#ffd400]/38 bg-[#ffd400]/10 font-mono text-[0.58rem] font-black text-[#8e6f00] dark:text-[#ffd400]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="m-0 text-[clamp(0.9rem,1.1vw,1.05rem)] font-black leading-[1.35] tracking-[-0.018em] uppercase">
                      {item.title}
                    </h3>

                    <strong className="mt-1 block text-[0.72rem] leading-[1.45] text-[#987600] dark:text-[#ffd400]">
                      {item.subtitle}
                    </strong>

                    <time className="mt-1 block text-[0.61rem] text-[#777]">
                      {item.period}
                    </time>
                  </div>
                </div>

                <ul className="mt-4 grid list-none gap-2.5 p-0">
                  {item.details.map((detail) => (
                    <li
                      className="relative pl-4 text-[0.72rem] leading-[1.65] text-[#616161] before:absolute before:top-[0.72em] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#ffd400] before:content-[''] dark:text-[#9b9b9b]"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-black/9 bg-black/[0.025] px-2.5 py-[5px] text-[0.51rem] text-[#6f6f6f] dark:border-white/8 dark:bg-white/[0.035] dark:text-[#777]"
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
