import { PERSONAL_INFO } from "../../lib/portfolio";
import { SOCIAL_LINKS } from "../../data/site";
import { HugeIcon } from "../common/HugeIcon";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section className="portfolio-section" id="contact">
      <div className="portfolio-container portfolio-container--contact">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div
          className="relative mx-auto mt-12 grid w-[min(900px,100%)] grid-cols-[200px_minmax(0,1fr)] items-center gap-9 rounded-[14px] border border-black/12 bg-[var(--card-bg)] p-9 shadow-[0_24px_70px_rgba(0,0,0,0.075)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)] max-[760px]:grid-cols-[140px_minmax(0,1fr)] max-[760px]:gap-6 max-[520px]:grid-cols-1 max-[520px]:justify-items-center max-[520px]:gap-5 max-[520px]:p-6 max-[520px]:text-center"
          data-reveal="scale"
        >
          <div className="relative grid aspect-square w-[164px] place-items-center rounded-full max-[760px]:w-[138px] max-[520px]:w-[148px]">
            <div className="hero-profile-ring absolute inset-0 rounded-full" />

            <div className="relative z-[2] h-[calc(100%_-_6px)] w-[calc(100%_-_6px)] overflow-hidden rounded-full bg-[var(--page-bg)] p-[6px]">
              <img
                className="h-full w-full rounded-full bg-[#161616] object-cover"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div className="min-w-0">
            <span className="font-mono text-[0.61rem] font-black tracking-[0.18em] text-[#987600] uppercase dark:text-[#d4ad20]">
              // SAY HELLO
            </span>

            <h3 className="mt-3 mb-0 text-[clamp(1.45rem,3vw,2rem)] font-black tracking-[-0.045em] uppercase">
              RIFQI SUSANTO
            </h3>

            <p className="mt-3 max-w-[570px] text-[0.82rem] leading-[1.75] text-[#626262] dark:text-[#9b9b9b]">
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 max-[520px]:grid-cols-2 max-[380px]:grid-cols-1">
              {SOCIAL_LINKS.map((item) => (
                <a
                  className="group flex min-h-[56px] min-w-0 items-center gap-3 rounded-[8px] border border-black/10 bg-white/45 px-3.5 py-2.5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#c7a400]/55 hover:bg-white/75 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-[#ffd400]/40 dark:hover:bg-white/[0.045]"
                  href={item.href}
                  target={
                    item.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  key={item.label}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffd400]/15 text-[#896b00] dark:text-[#e5be22]">
                    <HugeIcon icon={item.icon} size={16} strokeWidth={1.8} />
                  </span>
                  <span className="grid min-w-0 text-left">
                    <strong className="text-[0.65rem] font-bold">
                      {item.label}
                    </strong>
                    <span className="truncate text-[0.59rem] text-[#747471] dark:text-[#999]">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <a
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-6 text-[0.67rem] font-black text-[#111] shadow-[0_10px_28px_rgba(255,212,0,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe13a]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
