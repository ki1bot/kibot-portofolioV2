import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section
      className="portfolio-texture relative overflow-hidden border-t border-black/10 dark:border-white/10"
      id="contact"
    >
      <div className="portfolio-shell py-[108px] pb-[160px] max-[760px]:py-[88px] max-[760px]:pb-[132px]">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div
          className="relative mx-auto mt-[62px] grid min-h-[220px] w-[min(370px,calc(100%_-_24px))] grid-cols-[104px_minmax(0,1fr)] items-center gap-5 rounded-[8px] border border-black/20 bg-white/84 p-7 pb-9 shadow-[0_18px_52px_rgba(0,0,0,0.1)] dark:border-white/14 dark:bg-[#101010]/90 dark:shadow-[0_22px_60px_rgba(0,0,0,0.42)] max-[480px]:grid-cols-1 max-[480px]:justify-items-center max-[480px]:px-6 max-[480px]:pt-7 max-[480px]:pb-11 max-[480px]:text-center"
          data-reveal
        >
          <div className="grid aspect-square w-[104px] place-items-center rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#d64aff,#5b60ff,#49d4ff,#ffd400)] p-[2px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-white p-[6px] dark:bg-[#101010]">
              <img
                className="h-full w-full rounded-full bg-[#161616] object-cover"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h3 className="m-0 text-[1.05rem] font-black tracking-[-0.02em]">
              RIFQI
            </h3>

            <p className="mt-2.5 text-[0.72rem] leading-[1.62] text-[#5b5b5b] dark:text-[#9c9c9c]">
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>
          </div>

          <a
            className="absolute bottom-[-20px] left-1/2 inline-flex min-h-[41px] min-w-[166px] -translate-x-1/2 items-center justify-center rounded-full border border-[#c7a400] bg-[#ffd400] px-5 text-[0.66rem] font-black text-[#111] transition duration-200 hover:-translate-x-1/2 hover:-translate-y-[3px]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
