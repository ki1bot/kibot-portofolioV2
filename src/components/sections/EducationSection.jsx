import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";
import { JourneyMap } from "./JourneyMap";

const JOURNEY_VISUALS = {
  "smk-patriot-1-bekasi": {
    icon: "vocational",
  },
  "pkl-dinas-perhubungan-kota-bekasi": {
    icon: "internship",
  },
  "universitas-gunadarma-kalimalang": {
    icon: "university",
  },
  "asisten-laboratorium-teknik-informatika": {
    icon: "laboratory",
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

  if (type === "internship") {
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
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    );
  }

  if (type === "laboratory") {
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
        <path d="M9 3h6" />
        <path d="M10 3v6.2L5.7 17a2.6 2.6 0 0 0 2.3 4h8a2.6 2.6 0 0 0 2.3-4L14 9.2V3" />
        <path d="M8 15h8" />
        <path d="M10 18h4" />
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
    JOURNEY_VISUALS[item.id] || {
      icon: "vocational",
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
        <SectionHeading
          eyebrow="Academic Journey"
          title="MY"
          accent="JOURNEY."
          eyebrowVariant="pill"
          extraDividerSpacing
          description="My academic and technical journey, from vocational education and field work practice to Information Systems study and laboratory assistance at Universitas Gunadarma."
        />

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
                  key={item.id}
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
            className="w-full min-w-0 -translate-x-[26px] -translate-y-[180px] justify-self-center max-[1380px]:-translate-x-[14px] max-[1380px]:-translate-y-[150px] max-[1180px]:translate-x-0 max-[1180px]:translate-y-0 max-[1180px]:justify-self-center"
            data-scroll-side="right"
          >
            <JourneyMap />
          </div>
        </div>
      </div>
    </section>
  );
}
