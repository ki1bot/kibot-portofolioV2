import { PERSONAL_INFO } from "../../lib/portfolio";
import { TECH_CARDS } from "../../data/portfolioPage";

export function AboutSection({ projectCount = 0, certificateCount = 0 }) {
  const metrics = [
    { label: "EDUCATION", value: "S1" },
    { label: "PROJECTS SHIPPED", value: projectCount },
    { label: "CERTIFICATIONS", value: certificateCount },
    { label: "GPA", value: "3.75" },
  ];

  return (
    <section
      id="about"
      className="relative isolate min-h-svh overflow-hidden border-t border-black/[0.1] bg-[#f4f3ed] transition-colors duration-300 dark:border-white/[0.045] dark:bg-[#080808]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(17,17,16,0.105)_0px,rgba(17,17,16,0.105)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)]"
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

      <div className="relative z-10 mx-auto w-[min(1514px,calc(100%_-_96px))] pt-[56px] pb-[100px] max-[1500px]:w-[calc(100%_-_80px)] max-[1100px]:w-[min(900px,calc(100%_-_42px))] max-[760px]:w-[calc(100%_-_30px)] max-[760px]:pt-[82px] max-[760px]:pb-[90px]">
        <div className="max-w-[980px]" data-reveal="left">
          <span className="inline-flex min-h-[29px] items-center rounded-full border border-black/20 bg-white/40 px-[13px] font-mono text-[12px] leading-none font-bold tracking-[0.18em] text-[#58534a] uppercase dark:border-white/20 dark:bg-[#111111]/50 dark:text-[#cccccc]">
            // WHO AM I
          </span>

          <h2 className="mt-[19px] w-fit max-w-full font-sans text-[clamp(3.65rem,4.1vw,4.75rem)] leading-[0.87] font-black tracking-[-0.075em] uppercase max-[520px]:text-[clamp(3.2rem,13vw,4rem)]">
            <span className="block text-[#111111] dark:text-[#f2f2ef]">
              ABOUT
            </span>

            <span className="mt-[8px] block font-black text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.76)] dark:[-webkit-text-stroke:1.5px_rgba(242,242,239,0.82)]">
              ME.
            </span>
          </h2>

          <div
            className="mt-[22px] flex h-[4px] items-center gap-[12px]"
            aria-hidden="true"
          >
            <span className="block h-[4px] w-[64px] rounded-full bg-[#d7a700] dark:bg-[#ffd400]" />
            <span className="block h-[4px] w-[24px] rounded-full bg-[#9f7b00]/50 dark:bg-[#ffd400]/40" />
          </div>
        </div>

        <div
          className="relative mx-auto mt-[38px] h-[305px] w-[420px] max-w-full overflow-visible rounded-[7px] border border-black/[0.12] bg-[#fffdf8] shadow-[0_14px_35px_rgba(0,0,0,0.075)] transition-[background-color,border-color,box-shadow] duration-300 dark:border-[#292929] dark:bg-[#111111] dark:shadow-[0_12px_35px_rgba(0,0,0,0.3)] max-[560px]:flex max-[560px]:h-auto max-[560px]:min-h-[355px] max-[560px]:flex-col max-[560px]:items-center max-[560px]:gap-[18px] max-[560px]:px-[24px] max-[560px]:pt-[28px] max-[560px]:pb-[66px]"
          data-reveal="scale"
        >
          <div className="absolute top-[33px] left-[33px] h-[160px] w-[160px] overflow-hidden rounded-full border-[3px] border-[#d3a800] bg-[#181818] shadow-[0_6px_15px_rgba(0,0,0,0.12)] dark:border-[#ffd400] dark:shadow-[0_5px_18px_rgba(0,0,0,0.32)] max-[560px]:static max-[560px]:h-[150px] max-[560px]:w-[150px] max-[560px]:shrink-0">
            <img
              src={PERSONAL_INFO.profileImage}
              alt={`Foto profil ${PERSONAL_INFO.fullName}`}
              className="h-full w-full rounded-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute top-[35px] right-[27px] left-[217px] min-w-0 max-[560px]:static max-[560px]:w-full max-[560px]:max-w-[290px] max-[560px]:text-center">
            <h3 className="m-0 font-sans text-[20px] leading-[1.3] font-black tracking-[-0.045em] text-[#1b1b1b] uppercase dark:text-[#f3f3f0] max-[560px]:text-[23px]">
              {PERSONAL_INFO.fullName}
            </h3>

            <p className="mt-[12px] mb-0 text-[14px] leading-[1.65] font-normal text-[#62625f] dark:text-[#b6b6b6] max-[560px]:mt-[10px] max-[560px]:text-[13px]">
              Information Systems student and Software Engineer focused on
              full-stack development with React, Next.js, Laravel, and Node.js.
            </p>
          </div>

          <a
            href="/contact"
            aria-label={`Hubungi ${PERSONAL_INFO.fullName}`}
            className="absolute bottom-0 left-1/2 z-[5] inline-flex h-[48px] w-[200px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#d4aa00] bg-[#ffd400] px-[24px] text-center font-sans text-[15px] leading-none font-black tracking-[-0.025em] text-[#111111] uppercase shadow-[0_5px_16px_rgba(0,0,0,0.16)] outline-none transition-[background-color,box-shadow] duration-300 hover:bg-[#ffe033] hover:shadow-[0_9px_22px_rgba(255,212,0,0.22)] focus-visible:ring-[3px] focus-visible:ring-[#ffd400]/40 dark:border-[#ffd400] dark:bg-[#ffd400] dark:hover:bg-[#ffe033]"
          >
            CONTACT ME
          </a>
        </div>

        <div className="mx-auto mt-[130px] max-w-[1080px]" data-reveal="up">
          <div className="grid grid-cols-2 gap-[14px] md:grid-cols-4">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[10px] border border-black/10 bg-white/60 px-[20px] py-[22px] shadow-[0_8px_20px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-[#111111]"
              >
                <strong className="block text-[27px] leading-none font-black text-[#111111] dark:text-[#f3f3f0]">
                  {metric.value}
                </strong>

                <span className="mt-[11px] block font-mono text-[10px] leading-tight font-bold tracking-[0.1em] text-[#776b4b] dark:text-[#d1b85e]">
                  {metric.label}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-[46px] max-w-[830px] text-[15px] leading-[1.85] text-[#47453f] dark:text-[#b6b6b6]">
            <p>
              I&apos;m {PERSONAL_INFO.fullName}, an Information Systems student
              at Universitas Gunadarma. I enjoy developing web and mobile
              applications, solving technical problems, and creating software
              that is practical and maintainable.
            </p>

            <p className="mt-[14px]">
              My learning journey combines academic work, laboratory activities,
              independent projects, and collaboration with other developers.
            </p>
          </div>

          <h3 className="mt-[46px] font-mono text-[13px] font-black tracking-[0.16em] text-[#6d5600] uppercase dark:text-[#ffd400]">
            // STACK &amp; TOOLS
          </h3>

          <div className="mt-[20px] grid grid-cols-3 gap-[10px] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {TECH_CARDS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka website resmi ${item.name}`}
                className="group flex min-h-[94px] flex-col items-center justify-center gap-[10px] rounded-[10px] border border-black/[0.1] bg-white/65 p-[12px] text-center shadow-[0_5px_16px_rgba(0,0,0,0.045)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-[4px] hover:border-[#d4aa00]/70 focus-visible:outline-2 focus-visible:outline-[#d4aa00] dark:border-white/10 dark:bg-[#141414] dark:hover:border-[#ffd400]/50"
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`h-[33px] w-[40px] object-contain transition-transform duration-300 group-hover:scale-110 ${
                    item.invert ? "dark:invert" : ""
                  }`}
                />

                <span className="text-[10px] leading-tight font-bold text-[#242424] dark:text-[#e5e5e2]">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
