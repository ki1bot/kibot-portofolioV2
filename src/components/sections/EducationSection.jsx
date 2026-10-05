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
      className="portfolio-section !border-[#d7ccb1] !bg-[#f5f1e6] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
      id="journey"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(45deg,rgba(70,58,31,0.07)_0px,rgba(70,58,31,0.07)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,0,0.14),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(199,153,0,0.055),transparent_31%)] dark:bg-none"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.06))] dark:bg-none"
        aria-hidden="true"
      />

      <div className="portfolio-container">
        <div className="max-w-[940px]" data-reveal="left">
          <span className="inline-flex min-h-[31px] items-center gap-2.5 rounded-full border border-[#b99a43]/45 bg-[#fffaf0]/92 px-[14px] font-mono text-[0.6rem] font-black tracking-[0.2em] text-[#6f5500] shadow-[0_5px_18px_rgba(95,70,0,0.07)] backdrop-blur-[5px] dark:border-white/[0.13] dark:bg-[#111]/72 dark:text-[#aaa9a3] dark:shadow-none">
            <span className="text-[#b28600] dark:text-[#ffd400]">//</span>
            Academic Journey
          </span>

          <h2 className="mt-[29px] w-fit max-w-full font-sans text-[clamp(4.7rem,6.9vw,8.1rem)] font-black leading-[0.77] tracking-[-0.075em] uppercase max-[760px]:text-[clamp(3.4rem,14vw,4.9rem)]">
            <span className="block text-[#18150f] dark:text-[#f2f2ef]">MY</span>

            <strong className="mt-[20px] block font-black text-transparent [-webkit-text-stroke:1.6px_rgba(40,33,19,0.72)] dark:[-webkit-text-stroke:1.6px_rgba(242,242,239,0.82)]">
              JOURNEY.
            </strong>
          </h2>

          <div className="mt-8 flex items-center gap-3" aria-hidden="true">
            <span className="h-[4px] w-[76px] rounded-full bg-[#c99d00] shadow-[0_2px_8px_rgba(190,145,0,0.16)] dark:bg-[#ffd400]" />

            <span className="h-[4px] w-[29px] rounded-full bg-[#a98400]/40 dark:bg-[#ffd400]/28" />
          </div>

          <p className="mt-8 max-w-[780px] text-[0.98rem] leading-[1.78] text-[#5c594f] dark:text-[#949491]">
            My academic and technical journey, from vocational education to
            Information Systems at Universitas Gunadarma.
          </p>
        </div>

        <div className="mt-[68px] grid w-full grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] items-start gap-x-[clamp(82px,6.5vw,128px)] gap-y-16 max-[1180px]:mx-auto max-[1180px]:max-w-[820px] max-[1180px]:grid-cols-1 max-[760px]:mt-12">
          <div
            className="relative w-full before:absolute before:top-[24px] before:bottom-[24px] before:left-[15px] before:w-px before:bg-[#a8914d]/35 before:content-[''] dark:before:bg-white/[0.13] max-[520px]:before:left-[11px]"
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
                    className="absolute top-[22px] left-0 z-[2] grid h-[31px] w-[31px] place-items-center rounded-full border-2 border-[#b99000] bg-[#fffaf0] shadow-[0_0_0_6px_rgba(199,156,0,0.07)] transition-[border-color,background-color,box-shadow,transform] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:border-[#d0a100] group-hover:bg-[#fff3b5] dark:border-[#ffd400] dark:bg-[#080808] dark:shadow-[0_0_0_6px_rgba(255,212,0,0.04)] max-[520px]:h-[23px] max-[520px]:w-[23px]"
                    aria-hidden="true"
                  >
                    <i className="h-[8px] w-[8px] rounded-full bg-[#c99a00] dark:bg-[#ffd400] max-[520px]:h-[5px] max-[520px]:w-[5px]" />
                  </span>

                  <div className="relative cursor-default rounded-[13px] border border-[#d8ccae] bg-[#fffdf8]/92 p-[31px] shadow-[0_8px_22px_rgba(67,52,9,0.055)] backdrop-blur-[5px] transition-[background-color,border-color,box-shadow] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#b98c00]/65 hover:bg-[#fff6cf] hover:shadow-[0_12px_28px_rgba(120,88,0,0.1)] dark:border-[#343434] dark:bg-[#0f0f0f] dark:shadow-none dark:hover:border-[#d4aa00] dark:hover:bg-[#1b170d] dark:hover:shadow-none max-[520px]:p-[20px]">
                    <div className="flex min-w-0 items-start gap-[17px] max-[520px]:gap-[12px]">
                      <span
                        className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[9px] border border-[#d4c59e] bg-[#f7efda] font-mono text-[0.63rem] font-black tracking-[-0.025em] text-[#6e6040] transition-[background-color,border-color,color,transform] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:border-[#c09920]/45 group-hover:bg-[#ffeeb0] group-hover:text-[#795d00] dark:border-white/10 dark:bg-white/[0.045] dark:text-[#c2c2bd] dark:group-hover:border-[#ffd400]/25 dark:group-hover:bg-[#ffd400]/8 dark:group-hover:text-[#ffd400] max-[520px]:h-[41px] max-[520px]:w-[41px] max-[520px]:text-[0.52rem]"
                        aria-hidden="true"
                      >
                        {visual.mark}
                      </span>

                      <div className="min-w-0 flex-1 pt-[1px]">
                        <span className="block font-mono text-[0.56rem] font-black tracking-[0.17em] text-[#746e60] uppercase dark:text-[#888883]">
                          {item.category}
                        </span>

                        <h3 className="mt-[6px] text-[clamp(1.08rem,1.25vw,1.3rem)] font-black leading-[1.27] tracking-[-0.03em] text-[#222019] uppercase dark:text-[#f0f0ed]">
                          {item.title}
                        </h3>

                        <strong className="mt-[6px] block text-[0.82rem] font-extrabold leading-[1.45] text-[#8d6b00] dark:text-[#ffd400]">
                          {item.subtitle}
                        </strong>

                        <time className="mt-[5px] block text-[0.68rem] font-medium text-[#756f62] dark:text-[#898984]">
                          {item.period}
                        </time>
                      </div>
                    </div>

                    <div className="mt-[23px] h-px bg-[#a68f59]/18 dark:bg-white/[0.07]" />

                    <ul className="mt-[19px] grid list-none gap-[12px] p-0">
                      {item.details.map((detail) => (
                        <li
                          className="relative pl-[20px] text-[0.82rem] leading-[1.72] text-[#57544d] before:absolute before:top-[0.72em] before:left-0 before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#c89a00] before:content-[''] dark:text-[#aaa9a5] dark:before:bg-[#ffd400] max-[520px]:text-[0.72rem]"
                          key={detail}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-[22px] flex flex-wrap gap-[7px]">
                      {item.tags.map((tag) => (
                        <span
                          className="inline-flex min-h-[27px] items-center rounded-full border border-[#d7cdb4] bg-[#f7f1e3] px-[10px] py-[5px] text-[0.55rem] font-medium text-[#686257] transition-[border-color,background-color,color] duration-[340ms] group-hover:border-[#c6a345]/35 group-hover:bg-[#fff0b5]/65 group-hover:text-[#715700] dark:border-white/[0.085] dark:bg-white/[0.045] dark:text-[#959590] dark:group-hover:border-[#ffd400]/12"
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
