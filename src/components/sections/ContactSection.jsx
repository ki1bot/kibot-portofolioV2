import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="contact"
    >
      <div className="portfolio-shell py-[110px] pb-[165px] max-[760px]:py-[88px] max-[760px]:pb-[135px]">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div
          className="relative mx-auto mt-[66px] grid min-h-[255px] w-[min(430px,calc(100%_-_24px))] grid-cols-[125px_minmax(0,1fr)] items-center gap-6 rounded-[9px] border border-black/18 bg-white/55 p-7 pb-10 shadow-[0_20px_58px_rgba(0,0,0,0.09)] dark:border-white/12 dark:bg-[#0d0d0d]/94 dark:shadow-[0_27px_72px_rgba(0,0,0,0.45)] max-[500px]:grid-cols-1 max-[500px]:justify-items-center max-[500px]:text-center"
          data-reveal="scale"
        >
          <div className="relative grid aspect-square w-[125px] place-items-center rounded-full">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#d64aff,#5b60ff,#49d4ff,#ffd400)]" />

            <div className="relative z-[2] h-[calc(100%_-_5px)] w-[calc(100%_-_5px)] overflow-hidden rounded-full bg-white p-[6px] dark:bg-[#0d0d0d]">
              <img
                className="h-full w-full rounded-full bg-[#161616] object-cover"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h3 className="display-font m-0 text-[1.12rem] font-black tracking-[-0.025em] uppercase">
              RIFQI SUSANTO
            </h3>

            <p className="mt-3 text-[0.7rem] leading-[1.7] text-[#5e5e5e] dark:text-[#9b9b9b]">
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>
          </div>

          <a
            className="absolute bottom-[-21px] left-1/2 inline-flex min-h-[42px] min-w-[180px] -translate-x-1/2 items-center justify-center rounded-full border border-[#c7a400] bg-[#ffd400] px-5 text-[0.64rem] font-black text-[#111] shadow-[0_10px_25px_rgba(255,212,0,0.16)] transition duration-300 hover:-translate-x-1/2 hover:-translate-y-[3px] hover:bg-[#ffe13a]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
