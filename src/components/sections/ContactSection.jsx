import { SectionHeading } from "../common/SectionHeading";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="portfolio-section relative !border-t !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(17,17,16,0.105)_0px,rgba(17,17,16,0.105)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.09)_0px,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_10px)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,0,0.105),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(255,184,0,0.045),transparent_30%)] dark:bg-none"
        aria-hidden="true"
      />

      <div className="portfolio-container portfolio-container--contact !pt-[56px] !pb-[110px] max-[760px]:!pt-[90px] max-[560px]:!pb-[100px]">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME" />

        <div
          className="relative mx-auto mt-[38px] h-[305px] w-[420px] max-w-full overflow-visible rounded-[7px] border border-black/[0.12] bg-[#fffdf8] shadow-[0_14px_35px_rgba(0,0,0,0.075)] transition-[background-color,border-color,box-shadow] duration-300 dark:border-[#292929] dark:bg-[#111111] dark:shadow-[0_12px_35px_rgba(0,0,0,0.3)] lg:translate-x-[36px] max-[560px]:flex max-[560px]:h-auto max-[560px]:min-h-[380px] max-[560px]:flex-col max-[560px]:items-center max-[560px]:gap-[18px] max-[560px]:px-[24px] max-[560px]:pt-[28px] max-[560px]:pb-[78px]"
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
              Software Engineer specializing in React, Laravel, and Node.js —
              building reliable web and mobile applications that deliver real
              value.
            </p>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label={`Hubungi ${PERSONAL_INFO.fullName} melalui email`}
            className="group absolute bottom-0 left-1/2 z-[10] inline-flex h-[48px] w-[200px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#d4aa00] bg-[#ffd400] px-[24px] text-center shadow-[0_5px_16px_rgba(0,0,0,0.16)] outline-none transition-[background-color,box-shadow] duration-300 hover:bg-[#ffe033] hover:shadow-[0_9px_22px_rgba(255,212,0,0.22)] focus-visible:ring-[3px] focus-visible:ring-[#ffd400]/40 dark:border-[#ffd400] dark:bg-[#ffd400]"
          >
            <span className="block font-sans text-[16px] leading-none font-black tracking-[-0.025em] whitespace-nowrap text-[#111111] uppercase">
              CONTACT ME
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
