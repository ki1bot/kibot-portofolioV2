import { PERSONAL_INFO } from "../../lib/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
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

      <div className="portfolio-container portfolio-container--contact !pt-[56px] !pb-[74px] max-[760px]:!pt-[76px] max-[520px]:!pb-[85px]">
        <div className="max-w-[980px]" data-reveal>
          <span className="inline-flex min-h-[29px] items-center rounded-full border border-black/20 bg-white/40 px-[13px] font-mono text-[12px] leading-none font-bold tracking-[0.18em] text-[#58534a] uppercase dark:border-white/20 dark:bg-[#111111]/50 dark:text-[#cccccc]">
            // GET IN TOUCH
          </span>

          <h2 className="mt-[19px] w-fit max-w-full font-sans text-[clamp(3.65rem,4.1vw,4.75rem)] leading-[0.87] font-black tracking-[-0.075em] uppercase max-[520px]:text-[clamp(3.2rem,13vw,4rem)]">
            <span className="block text-[#111111] dark:text-[#f2f2ef]">
              CONTACT
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
          className="relative mx-auto mt-[38px] grid h-[305px] w-[420px] max-w-full grid-cols-[160px_minmax(0,1fr)] items-start gap-[24px] overflow-visible rounded-[7px] border border-black/[0.12] bg-[#fffdf8] px-[33px] pt-[33px] pb-[42px] shadow-[0_14px_35px_rgba(0,0,0,0.075)] transition-[background-color,border-color,box-shadow] duration-300 dark:border-[#292929] dark:bg-[#111111] dark:shadow-[0_12px_35px_rgba(0,0,0,0.3)] max-[520px]:h-auto max-[520px]:min-h-[365px] max-[520px]:grid-cols-1 max-[520px]:justify-items-center max-[520px]:gap-[18px] max-[520px]:px-[25px] max-[520px]:pt-[29px] max-[520px]:pb-[65px] max-[520px]:text-center"
          data-reveal="scale"
        >
          <div className="relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#d3a800] bg-[#181818] shadow-[0_6px_15px_rgba(0,0,0,0.12)] dark:border-[#ffd400] dark:shadow-[0_5px_18px_rgba(0,0,0,0.32)]">
            <img
              src={PERSONAL_INFO.profileImage}
              alt={`Foto profil ${PERSONAL_INFO.fullName}`}
              className="h-full w-full rounded-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="min-w-0 pt-[4px] max-[520px]:pt-0">
            <h3 className="m-0 font-sans text-[24px] leading-[1.2] font-black tracking-[-0.045em] text-[#1b1b1b] uppercase dark:text-[#f3f3f0] max-[520px]:text-[25px]">
              {PERSONAL_INFO.name}
            </h3>

            <p className="mt-[12px] mb-0 text-[14px] leading-[1.65] font-normal text-[#62625f] dark:text-[#b6b6b6] max-[520px]:mx-auto max-[520px]:max-w-[280px]">
              Software Engineer specializing in React, Laravel, and Flutter,
              with experience in backend systems — building practical and
              scalable web applications.
            </p>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label={`Hubungi ${PERSONAL_INFO.fullName} melalui email`}
            className="absolute bottom-0 left-1/2 z-[5] inline-flex h-[48px] w-[200px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#d4aa00] bg-[#ffd400] px-[24px] text-center font-sans text-[15px] leading-none font-black tracking-[-0.025em] text-[#111111] uppercase shadow-[0_5px_16px_rgba(0,0,0,0.16)] outline-none transition-[background-color,box-shadow,transform] duration-300 hover:-translate-x-1/2 hover:translate-y-[40%] hover:bg-[#ffe033] hover:shadow-[0_9px_22px_rgba(255,212,0,0.22)] focus-visible:ring-[3px] focus-visible:ring-[#ffd400]/40 active:translate-y-1/2 dark:border-[#ffd400] dark:bg-[#ffd400] dark:hover:bg-[#ffe033]"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
