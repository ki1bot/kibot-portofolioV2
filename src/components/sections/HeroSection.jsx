import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 18 }, () => "RIFQI SUSANTO");

function Tape({ top, rotate, opacity = 1, reverse = false }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 z-[-1] flex h-[66px] w-[150vw] min-w-[2100px] origin-center items-center overflow-hidden border-y border-black/20 bg-gradient-to-r from-[#b99314] via-[#e0b92c] to-[#b99314] shadow-[0_8px_24px_rgba(0,0,0,0.28)] max-[760px]:h-[48px] max-[760px]:min-w-[1300px]"
      style={{
        top,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        opacity,
      }}
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center will-change-transform ${
          reverse
            ? "animate-[tape-scroll_72s_linear_infinite] [animation-direction:reverse]"
            : "animate-[tape-scroll_64s_linear_infinite]"
        }`}
      >
        {TAPE_TEXT.map((item, index) => (
          <span
            className="inline-flex items-center gap-8 pr-10 text-[1.05rem] font-black tracking-[0.12em] whitespace-nowrap text-black/72 uppercase after:ml-8 after:content-['—'] max-[760px]:text-[0.78rem]"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    ["S1", "Information Systems"],
    [certificateCount, "Certs"],
  ];

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden bg-[#fbfbf9] dark:bg-[#080808]"
      id="home"
    >
      <div
        className="pointer-events-none absolute right-[-8vw] bottom-[-24vh] z-[-2] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(97,50,170,0.15),transparent_66%)] blur-[18px]"
        aria-hidden="true"
      />

      <Tape top="-1%" rotate={10} opacity={0.56} />
      <Tape top="11%" rotate={-10} opacity={0.9} reverse />
      <Tape top="35%" rotate={-11} opacity={0.95} />
      <Tape top="48%" rotate={12} opacity={0.96} reverse />
      <Tape top="69%" rotate={-13} opacity={0.88} />
      <Tape top="83%" rotate={11} opacity={0.62} reverse />

      <div className="portfolio-shell relative z-[2] grid min-h-svh grid-cols-[minmax(0,1.06fr)_minmax(330px,0.94fr)] items-center gap-[clamp(52px,7vw,110px)] pt-[118px] pb-[90px] max-[960px]:grid-cols-1 max-[960px]:gap-16 max-[960px]:pt-[142px] max-[960px]:pb-[118px]">
        <div className="max-w-[690px]" data-reveal>
          <span className="inline-flex min-h-[25px] items-center gap-2 rounded-full border border-[#ffd400]/30 bg-[#ffd400]/8 px-3 py-1 text-[0.66rem] font-semibold text-[#9c7b00] dark:text-[#d6b500]">
            <i className="h-2 w-2 rounded-full bg-[#1bd760] shadow-[0_0_12px_rgba(27,215,96,0.8)]" />
            Open to work
          </span>

          <h1 className="mt-8 font-black leading-[0.96] tracking-[-0.052em]">
            <span className="block text-[clamp(3.1rem,3.7vw,4.5rem)] max-[760px]:text-[clamp(3rem,13.8vw,4.6rem)]">
              Hi, I&apos;m
            </span>

            <strong className="mt-5 block bg-[linear-gradient(90deg,#ffd000_0%,#ff9b1f_48%,#e9523c_100%)] bg-clip-text text-[clamp(3rem,3.65vw,4.45rem)] font-black tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.35px_#151515] dark:[-webkit-text-stroke:1.35px_#f5f5f2] max-[760px]:text-[clamp(2.55rem,11.5vw,4rem)]">
              RIFQI SUSANTO
            </strong>
          </h1>

          <p className="mt-8 max-w-[650px] text-[clamp(0.96rem,0.96vw,1.08rem)] leading-[1.72] text-[#595959] dark:text-[#aaa]">
            Information Systems student and Software Engineer focused on
            building practical web and mobile applications with maintainable
            architecture, clear interfaces, and reliable backend systems.
          </p>

          <div className="mt-8 flex items-start gap-8 max-[520px]:grid max-[520px]:grid-cols-3 max-[520px]:gap-3">
            {stats.map(([value, label]) => (
              <div className="grid" key={label}>
                <strong className="text-[1.55rem] font-black tracking-[-0.045em] max-[520px]:text-[1.28rem]">
                  {value}
                </strong>

                <span className="mt-0.5 text-[0.67rem] text-[#737373] dark:text-[#777] max-[520px]:text-[0.57rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-6 text-[0.72rem] font-black text-[#111] shadow-[0_10px_28px_rgba(255,212,0,0.13)] transition duration-200 hover:-translate-y-[3px]"
              href="#projects"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-black/22 bg-white/75 px-6 text-[0.72rem] font-black transition duration-200 hover:-translate-y-[3px] hover:border-[#c7a400] dark:border-white/18 dark:bg-[#101010]/78 dark:hover:border-[#ffd400]"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex max-w-[650px] items-center gap-6 border-t border-black/14 pt-5 text-[0.67rem] text-[#737373] dark:border-white/10 dark:text-[#777] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-[#a88400] dark:hover:text-[#ffd400]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={14} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border-2 border-[#777]" />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>

        <div className="grid place-items-center max-[960px]:pb-7" data-reveal>
          <div className="grid aspect-square w-[clamp(245px,16.2vw,315px)] animate-[soft-float_5s_ease-in-out_infinite] place-items-center rounded-full bg-[conic-gradient(from_205deg,#ffd400,#ff8a30,#d64aff,#5b60ff,#49d4ff,#ffd400)] p-[2px] shadow-[0_26px_72px_rgba(0,0,0,0.24)] max-[960px]:w-[min(310px,70vw)]">
            <div className="h-full w-full overflow-hidden rounded-full bg-[#fbfbf9] p-[8px] dark:bg-[#080808]">
              <img
                className="h-full w-full rounded-full bg-[#161616] object-cover object-center"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-6 left-1/2 z-[5] grid h-9 w-[22px] -translate-x-1/2 place-items-start rounded-full border-2 border-black/42 pt-[7px] dark:border-white/45"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span className="h-[7px] w-[3px] animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/55 dark:bg-white/55" />
      </a>
    </section>
  );
}
