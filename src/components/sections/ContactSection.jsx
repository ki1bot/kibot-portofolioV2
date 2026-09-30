import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="contact"
    >
      <div className="portfolio-shell py-[104px] pb-[150px] max-[760px]:py-[82px] max-[760px]:pb-[128px]">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div
          className="portfolio-card-shine relative mx-auto mt-[58px] grid min-h-[205px] w-[min(430px,calc(100%_-_24px))] grid-cols-[116px_minmax(0,1fr)] items-center gap-5 rounded-[7px] border border-black/16 bg-white/58 p-7 pb-9 shadow-[0_18px_50px_rgba(0,0,0,0.08)] dark:border-white/11 dark:bg-[#0d0d0d]/92 dark:shadow-[0_24px_62px_rgba(0,0,0,0.4)] max-[480px]:grid-cols-1 max-[480px]:justify-items-center max-[480px]:px-6 max-[480px]:pt-7 max-[480px]:pb-11 max-[480px]:text-center"
          data-reveal="scale"
        >
          <div className="relative grid aspect-square w-[112px] place-items-center rounded-full">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#d64aff,#5b60ff,#49d4ff,#ffd400)]" />

            <div className="relative z-[2] h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] overflow-hidden rounded-full bg-white p-[6px] dark:bg-[#0d0d0d]">
              <img
                className="h-full w-full rounded-full bg-[#161616] object-cover"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h3 className="m-0 text-[1.08rem] font-black tracking-[-0.025em]">
              RIFQI SUSANTO
            </h3>

            <p className="mt-2.5 text-[0.69rem] leading-[1.62] text-[#5f5f5f] dark:text-[#9c9c9c]">
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>
          </div>

          <a
            className="absolute bottom-[-19px] left-1/2 inline-flex min-h-[39px] min-w-[158px] -translate-x-1/2 items-center justify-center rounded-full border border-[#c7a400] bg-[#ffd400] px-5 text-[0.61rem] font-black text-[#111] shadow-[0_10px_24px_rgba(255,212,0,0.13)] transition duration-200 hover:-translate-x-1/2 hover:-translate-y-[3px] hover:bg-[#ffe03a]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
