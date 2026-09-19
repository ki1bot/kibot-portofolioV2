import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-black/10 bg-[#f7f7f4] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.055)_0,rgba(17,17,17,0.055)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[#0a0a0a] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.048)_0,rgba(255,255,255,0.048)_1px,transparent_1px,transparent_8px)]"
      id="contact"
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1510px] py-28 pb-[180px] max-[960px]:w-[calc(100%_-_36px)] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:py-[90px] max-[760px]:pb-[150px]">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div
          className="relative mx-auto mt-[72px] grid min-h-[260px] w-[min(440px,calc(100%_-_24px))] grid-cols-[132px_minmax(0,1fr)] items-center gap-6 rounded-lg border border-black/25 bg-white p-[34px] pb-[42px] shadow-[0_18px_55px_rgba(0,0,0,0.09)] dark:border-white/20 dark:bg-[#111] dark:shadow-[0_22px_65px_rgba(0,0,0,0.42)] max-[520px]:grid-cols-1 max-[520px]:justify-items-center max-[520px]:px-6 max-[520px]:pt-[30px] max-[520px]:pb-12 max-[520px]:text-center"
          data-reveal
        >
          <div className="grid aspect-square w-[132px] place-items-center rounded-full bg-[#ffd400] p-[3px] max-[520px]:w-[120px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-white p-[7px] dark:bg-[#111]">
              <img
                className="h-full w-full rounded-full bg-[#161616] object-cover"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h3 className="m-0 text-xl font-black tracking-[-0.025em]">
              RIFQI
            </h3>

            <p className="mt-3 text-[0.78rem] leading-[1.6] text-[#555] dark:text-[#aaa]">
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>
          </div>

          <a
            className="absolute bottom-[-22px] left-1/2 inline-flex min-h-[45px] min-w-[196px] -translate-x-1/2 items-center justify-center rounded-full border border-[#caa700] bg-[#ffd400] text-[0.72rem] font-black text-[#111] transition duration-200 hover:-translate-x-1/2 hover:-translate-y-[3px]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
