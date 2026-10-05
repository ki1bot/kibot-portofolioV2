import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { JourneyMap } from "./JourneyMap";

const JOURNEY_VISUALS = {
  "Universitas Gunadarma": {
    mark: "UG",
  },
  "Sekolah Menengah Kejuruan (SMK)": {
    mark: "SMK",
  },
  "Sekolah Menengah Pertama (SMP)": {
    mark: "SMP",
  },
  "Sekolah Dasar (SD)": {
    mark: "SD",
  },
};

function getJourneyVisual(item) {
  return (
    JOURNEY_VISUALS[item.title] || {
      mark: "EDU",
    }
  );
}

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
        <div className="max-w-[940px]" data-reveal="left">
          <span className="inline-flex min-h-[31px] items-center gap-2.5 rounded-full border border-[#9d7a11]/35 bg-[#fffdf6]/76 px-[14px] font-mono text-[0.6rem] font-black tracking-[0.2em] text-[#725700] uppercase shadow-[0_4px_14px_rgba(95,70,0,0.05)] backdrop-blur-[5px] dark:border-white/[0.13] dark:bg-[#111]/72 dark:text-[#aaa9a3] dark:shadow-none">
            <span className="text-[#ba8e00] dark:text-[#ffd400]">//</span>
            Academic Journey
          </span>

          <h2 className="mt-[29px] w-fit max-w-full font-sans text-[clamp(4.7rem,6.9vw,8.1rem)] font-black leading-[0.77] tracking-[-0.075em] uppercase max-[760px]:text-[clamp(3.4rem,14vw,4.9rem)]">
            <span className="block text-[#111] dark:text-[#f2f2ef]">MY</span>

            <strong className="mt-[20px] block font-black text-transparent [-webkit-text-stroke:1.6px_rgba(17,17,17,0.76)] dark:[-webkit-text-stroke:1.6px_rgba(242,242,239,0.82)]">
              JOURNEY.
            </strong>
          </h2>

          <div className="mt-8 flex items-center gap-3" aria-hidden="true">
            <span className="h-[4px] w-[76px] rounded-full bg-[#d1a100] shadow-[0_1px_5px_rgba(190,145,0,0.14)] dark:bg-[#ffd400]" />

            <span className="h-[4px] w-[29px] rounded-full bg-[#b28a00]/35 dark:bg-[#ffd400]/28" />
          </div>

          <p className="mt-8 max-w-[780px] text-[0.98rem] leading-[1.78] text-[#666663] dark:text-[#949491]">
            My academic and technical journey, from vocational education to
            Information Systems at Universitas Gunadarma.
          </p>
        </div>

        <div className="mt-[68px] grid w-full grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] items-start gap-x-[clamp(82px,6.5vw,128px)] gap-y-16 max-[1180px]:mx-auto max-[1180px]:max-w-[820px] max-[1180px]:grid-cols-1 max-[760px]:mt-12">
          <div
            className="relative w-full before:absolute before:top-[24px] before:bottom-[24px] before:left-[15px] before:w-px before:bg-black/16 before:content-[''] dark:before:bg-white/[0.13] max-[520px]:before:left-[11px]"
            data-scroll-side="left"
          >
            {JOURNEY_ITEMS.map((item, index) => {
              const visual = getJourneyVisual(item);

              return (
                <article
                  className="group relative mb-[34px] pl-[62px] last:mb-0 max-[520px]:pl-[43px]"
                  key={`${item.period}-${item.title}`}
                  data-reveal="left"
                  style={{
                    "--reveal-delay": `${index * 70}ms`,
                  }}
                >
                  <span
                    className="absolute top-[22px] left-0 z-[2] grid h-[31px] w-[31px] place-items-center rounded-full border-2 border-[#c59a00] bg-[#f4f3ed] shadow-[0_0_0_6px_rgba(255,212,0,0.045)] transition-[border-color,background-color,box-shadow,transform] duration-300 group-hover:scale-105 dark:border-[#ffd400] dark:bg-[#080808] dark:shadow-[0_0_0_6px_rgba(255,212,0,0.04)] max-[520px]:h-[23px] max-[520px]:w-[23px]"
                    aria-hidden="true"
                  >
                    <i className="h-[8px] w-[8px] rounded-full bg-[#d2a400] dark:bg-[#ffd400] max-[520px]:h-[5px] max-[520px]:w-[5px]" />
                  </span>

                  <div className="relative rounded-[13px] border border-black/11 bg-white/52 p-[31px] shadow-[0_10px_28px_rgba(38,29,4,0.035)] backdrop-blur-[4px] transition-[transform,border-color,background-color,box-shadow] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[2px] group-hover:border-black/18 group-hover:bg-white/68 group-hover:shadow-[0_16px_34px_rgba(55,42,3,0.055)] dark:border-white/[0.085] dark:bg-[#151515]/92 dark:group-hover:border-white/[0.16] dark:group-hover:bg-[#181818] dark:group-hover:shadow-[0_16px_38px_rgba(0,0,0,0.28)] max-[520px]:p-[20px]">
                    <div className="flex min-w-0 items-start gap-[17px] max-[520px]:gap-[12px]">
                      <span
                        className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[9px] border border-black/10 bg-black/[0.035] font-mono text-[0.63rem] font-black tracking-[-0.025em] text-[#595852] transition-[background-color,border-color,color,transform] duration-300 group-hover:scale-[1.025] dark:border-white/10 dark:bg-white/[0.045] dark:text-[#c2c2bd] max-[520px]:h-[41px] max-[520px]:w-[41px] max-[520px]:text-[0.52rem]"
                        aria-hidden="true"
                      >
                        {visual.mark}
                      </span>

                      <div className="min-w-0 flex-1 pt-[1px]">
                        <span className="block font-mono text-[0.56rem] font-black tracking-[0.17em] text-[#77766f] uppercase dark:text-[#888883]">
                          {item.category}
                        </span>

                        <h3 className="mt-[6px] text-[clamp(1.08rem,1.25vw,1.3rem)] font-black leading-[1.27] tracking-[-0.03em] text-[#171716] uppercase dark:text-[#f0f0ed]">
                          {item.title}
                        </h3>

                        <strong className="mt-[6px] block text-[0.82rem] font-extrabold leading-[1.45] text-[#9a7600] dark:text-[#ffd400]">
                          {item.subtitle}
                        </strong>

                        <time className="mt-[5px] block text-[0.68rem] font-medium text-[#77766f] dark:text-[#898984]">
                          {item.period}
                        </time>
                      </div>
                    </div>

                    <div className="mt-[23px] h-px bg-black/[0.075] dark:bg-white/[0.07]" />

                    <ul className="mt-[19px] grid list-none gap-[12px] p-0">
                      {item.details.map((detail) => (
                        <li
                          className="relative pl-[20px] text-[0.82rem] leading-[1.72] text-[#5f5e59] before:absolute before:top-[0.72em] before:left-0 before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#d1a200] before:content-[''] dark:text-[#aaa9a5] dark:before:bg-[#ffd400] max-[520px]:text-[0.72rem]"
                          key={detail}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-[22px] flex flex-wrap gap-[7px]">
                      {item.tags.map((tag) => (
                        <span
                          className="inline-flex min-h-[27px] items-center rounded-full border border-black/[0.09] bg-black/[0.03] px-[10px] py-[5px] text-[0.55rem] font-medium text-[#6f6e69] transition-[border-color,background-color,color] duration-300 group-hover:border-black/[0.14] dark:border-white/[0.085] dark:bg-white/[0.045] dark:text-[#959590] dark:group-hover:border-white/[0.14]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="w-full min-w-0 justify-self-end max-[1180px]:justify-self-center"
            data-scroll-side="right"
          >
            <JourneyMap />
          </div>
        </div>
      </div>
    </section>
  );
}
