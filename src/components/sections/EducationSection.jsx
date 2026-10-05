import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { JourneyMap } from "./JourneyMap";

const JOURNEY_VISUALS = {
  "Universitas Gunadarma": {
    icon: "university",
  },
  "Sekolah Menengah Kejuruan (SMK)": {
    icon: "vocational",
  },
  "Sekolah Menengah Pertama (SMP)": {
    icon: "secondary",
  },
  "Sekolah Dasar (SD)": {
    icon: "primary",
  },
};

function JourneyAcademicIcon({ type, size = 23 }) {
  if (type === "university") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.2V16c3.7 2.4 8.3 2.4 12 0v-4.8" />
        <path d="M22 9v6" />
      </svg>
    );
  }

  if (type === "vocational") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5l7.1 7.1a2.2 2.2 0 1 1-3.1 3.1l-7.1-7.1a4 4 0 0 0-5 5l2.3-2.3L8.9 17l-2.3 2.3a4 4 0 0 0 5-5" />
      </svg>
    );
  }

  if (type === "secondary") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H11v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z" />
        <path d="M20 4.5A2.5 2.5 0 0 0 17.5 2H13v18h4.5A2.5 2.5 0 0 1 20 22V4.5Z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-5h6v5" />
      <path d="M8 11h2" />
      <path d="M14 11h2" />
    </svg>
  );
}

function getJourneyVisual(item) {
  return (
    JOURNEY_VISUALS[item.title] || {
      icon: "primary",
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

          <div
            className="mt-[48px] flex items-center gap-2.5 max-[760px]:mt-[40px]"
            aria-hidden="true"
          >
            <span className="h-[3px] w-[72px] rounded-full bg-[#ffd400]" />

            <span className="h-[3px] w-[28px] rounded-full bg-[#ffd400]/28" />
          </div>

          <p className="mt-7 max-w-[780px] text-[0.98rem] leading-[1.78] text-[#5c594f] dark:text-[#949491]">
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
                  className="relative mb-[34px] pl-[62px] last:mb-0 max-[520px]:pl-[43px]"
                  key={`${item.period}-${item.title}`}
                  data-reveal="left"
                  style={{
                    "--reveal-delay": `${index * 70}ms`,
                  }}
                >
                  <span
                    className="absolute top-[22px] left-0 z-[2] grid h-[31px] w-[31px] place-items-center rounded-full border-2 border-[#b99000] bg-[#fffaf0] shadow-[0_0_0_6px_rgba(199,156,0,0.07)] dark:border-[#ffd400] dark:bg-[#080808] dark:shadow-[0_0_0_6px_rgba(255,212,0,0.04)] max-[520px]:h-[23px] max-[520px]:w-[23px]"
                    aria-hidden="true"
                  >
                    <i className="h-[8px] w-[8px] rounded-full bg-[#c99a00] dark:bg-[#ffd400] max-[520px]:h-[5px] max-[520px]:w-[5px]" />
                  </span>

                  <div className="hero-projects-button relative cursor-default rounded-[13px] p-[31px] backdrop-blur-[10px] max-[520px]:p-[20px]">
                    <div className="flex min-w-0 items-start gap-[17px] max-[520px]:gap-[12px]">
                      <span
                        className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-[10px] border border-black/10 bg-black/[0.035] text-[#6d6656] dark:border-white/10 dark:bg-white/[0.045] dark:text-[#d2d2cd] max-[520px]:h-[44px] max-[520px]:w-[44px]"
                        aria-hidden="true"
                      >
                        <JourneyAcademicIcon type={visual.icon} size={22} />
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

                    <div className="mt-[23px] h-px bg-black/[0.075] dark:bg-white/[0.07]" />

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
                          className="inline-flex min-h-[27px] items-center rounded-full border border-black/[0.09] bg-black/[0.03] px-[10px] py-[5px] text-[0.55rem] font-medium text-[#6f6e69] dark:border-white/[0.085] dark:bg-white/[0.045] dark:text-[#959590]"
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
            className="w-full min-w-0 -translate-x-[26px] -translate-y-[110px] justify-self-center max-[1380px]:-translate-x-[14px] max-[1380px]:-translate-y-[90px] max-[1180px]:translate-x-0 max-[1180px]:translate-y-0 max-[1180px]:justify-self-center"
            data-scroll-side="right"
          >
            <JourneyMap />
          </div>
        </div>
      </div>
    </section>
  );
}
