import { PERSONAL_INFO } from "../../lib/portfolio";
import { SOCIAL_LINKS } from "../../data/site";
import { HugeIcon } from "../common/HugeIcon";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
      id="contact"
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

      <div className="portfolio-container portfolio-container--contact">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME" />

        <div
          className="relative mx-auto mt-12 grid w-[min(980px,100%)] grid-cols-[210px_minmax(0,1fr)] items-center gap-10 rounded-[14px] border border-black/12 bg-white/48 p-9 shadow-[0_24px_70px_rgba(0,0,0,0.075)] backdrop-blur-[6px] dark:border-white/10 dark:bg-[#101010]/82 dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)] max-[760px]:grid-cols-[145px_minmax(0,1fr)] max-[760px]:gap-6 max-[520px]:grid-cols-1 max-[520px]:justify-items-center max-[520px]:gap-5 max-[520px]:p-6 max-[520px]:text-center"
          data-reveal="scale"
        >
          <div className="relative grid aspect-square w-[174px] place-items-center rounded-full max-[760px]:w-[138px] max-[520px]:w-[150px]">
            <div className="hero-profile-ring absolute inset-0 rounded-full" />

            <div className="hero-profile-ring absolute inset-[-14px] rounded-full opacity-[0.1] blur-[18px] dark:opacity-[0.16]" />

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
            <span className="font-mono text-[0.6rem] font-black tracking-[0.18em] text-[#987600] uppercase dark:text-[#d4ad20]">
              // SAY HELLO
            </span>

            <h3 className="mt-3 mb-0 text-[clamp(1.55rem,3vw,2.15rem)] font-black tracking-[-0.045em] uppercase">
              RIFQI
            </h3>

            <p className="mt-3 max-w-[600px] text-[0.82rem] leading-[1.76] text-[#62625f] dark:text-[#999996]">
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 max-[520px]:grid-cols-2 max-[380px]:grid-cols-1">
              {SOCIAL_LINKS.map((item) => (
                <a
                  className="group flex min-h-[58px] min-w-0 items-center gap-3 rounded-[8px] border border-black/10 bg-white/44 px-3.5 py-2.5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#c7a400]/55 hover:bg-white/72 dark:border-white/9 dark:bg-white/[0.024] dark:hover:border-[#ffd400]/38 dark:hover:bg-white/[0.045]"
                  href={item.href}
                  target={
                    item.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  key={item.label}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffd400]/13 text-[#896b00] dark:text-[#e5be22]">
                    <HugeIcon icon={item.icon} size={16} strokeWidth={1.8} />
                  </span>

                  <span className="grid min-w-0 text-left">
                    <strong className="text-[0.64rem] font-bold">
                      {item.label}
                    </strong>

                    <span className="truncate text-[0.58rem] text-[#747471] dark:text-[#999]">
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
