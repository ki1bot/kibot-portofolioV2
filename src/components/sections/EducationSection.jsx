import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";

export function EducationSection() {
  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/10 dark:border-white/10"
      id="journey"
    >
      <div className="portfolio-shell py-[108px] pb-[122px] max-[760px]:py-[88px] max-[760px]:pb-[100px]">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="EXPERIENCE."
          description="My academic journey and technical development, from vocational education to Information Systems at Universitas Gunadarma."
        />

        <div className="relative mt-[52px] ml-4 max-w-[940px] pl-[45px] before:absolute before:inset-y-2 before:left-3 before:w-px before:bg-black/18 before:content-[''] dark:before:bg-white/16 max-[520px]:ml-0 max-[520px]:pl-[31px] max-[520px]:before:left-2">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="relative mb-8 last:mb-0"
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
                className={`rounded-[14px] border bg-white/78 p-7 shadow-[0_14px_42px_rgba(0,0,0,0.06)] backdrop-blur-[2px] dark:bg-[#101010]/82 dark:shadow-[0_20px_55px_rgba(0,0,0,0.35)] max-[520px]:p-5 ${
                  index === 0
                    ? "border-[#ffd400]/42"
                    : "border-black/14 dark:border-white/10"
                }`}
              >
                <div className="flex items-start gap-[15px]">
                  <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[9px] border border-[#ffd400]/42 bg-[#ffd400]/10 font-mono text-[0.62rem] font-black text-[#9b7900] dark:text-[#ffd400]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="m-0 text-[clamp(0.98rem,1.22vw,1.18rem)] font-black tracking-[-0.02em] uppercase">
                      {item.title}
                    </h3>

                    <strong className="mt-1 block text-[0.8rem] text-[#a88400] dark:text-[#ffd400]">
                      {item.subtitle}
                    </strong>

                    <time className="mt-1 block text-[0.68rem] text-[#777]">
                      {item.period}
                    </time>
                  </div>
                </div>

                <ul className="mt-5 grid list-none gap-2.5 p-0">
                  {item.details.map((detail) => (
                    <li
                      className="relative pl-4 text-[0.79rem] leading-[1.67] text-[#5f5f5f] before:absolute before:top-[0.7em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#ffd400] before:content-[''] dark:text-[#9e9e9e]"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-black/12 bg-[#f1f1ee]/75 px-2.5 py-1.5 text-[0.57rem] text-[#6f6f6f] dark:border-white/10 dark:bg-[#171717]/78 dark:text-[#7d7d7d]"
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
