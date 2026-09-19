import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";

export function EducationSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-black/10 bg-[#f7f7f4] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.055)_0,rgba(17,17,17,0.055)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[#0a0a0a] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.048)_0,rgba(255,255,255,0.048)_1px,transparent_1px,transparent_8px)]"
      id="journey"
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1510px] py-28 pb-32 max-[960px]:w-[calc(100%_-_36px)] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:py-[90px] max-[760px]:pb-[105px]">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="JOURNEY."
          description="The education path that shaped my technical foundation, problem-solving process, and interest in software development."
        />

        <div className="relative mt-[54px] ml-[18px] max-w-[920px] pl-[45px] before:absolute before:inset-y-2 before:left-3 before:w-px before:bg-black/20 before:content-[''] dark:before:bg-white/20 max-[520px]:ml-0 max-[520px]:pl-[31px] max-[520px]:before:left-2">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="relative mb-[34px] last:mb-0"
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <span
                className="absolute top-[18px] left-[-45px] grid h-7 w-7 place-items-center rounded-full border-[3px] border-[#ffd400] bg-[#f7f7f4] dark:bg-[#0a0a0a] max-[520px]:left-[-31px] max-[520px]:h-[22px] max-[520px]:w-[22px] max-[520px]:border-2"
                aria-hidden="true"
              >
                <i className="h-2 w-2 rounded-full bg-[#ffd400] max-[520px]:h-1.5 max-[520px]:w-1.5" />
              </span>

              <div
                className={`rounded-2xl border bg-white/90 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.09)] dark:bg-[#111]/90 dark:shadow-[0_22px_65px_rgba(0,0,0,0.42)] max-[520px]:p-5 ${
                  index === 0
                    ? "border-[#ffd400]/45"
                    : "border-black/15 dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-[15px]">
                  <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] border border-[#ffd400]/45 bg-[#ffd400]/10 text-[0.65rem] font-black text-[#b28d00] dark:text-[#ffd400]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="m-0 text-[clamp(1rem,1.4vw,1.25rem)] font-black tracking-[-0.025em] uppercase">
                      {item.title}
                    </h3>

                    <strong className="mt-1 block text-[0.82rem] text-[#b28d00] dark:text-[#ffd400]">
                      {item.subtitle}
                    </strong>

                    <time className="mt-1 block text-[0.7rem] text-[#777] dark:text-[#767676]">
                      {item.period}
                    </time>
                  </div>
                </div>

                <ul className="mt-6 grid list-none gap-[11px] p-0">
                  {item.details.map((detail) => (
                    <li
                      className="relative pl-[17px] text-[0.82rem] leading-[1.65] text-[#555] before:absolute before:top-[0.7em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#ffd400] before:content-[''] dark:text-[#aaa]"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-[22px] flex flex-wrap gap-[7px]">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-black/15 bg-[#f1f1ee]/75 px-[11px] py-1.5 text-[0.61rem] text-[#777] dark:border-white/10 dark:bg-[#171717]/75 dark:text-[#767676]"
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
