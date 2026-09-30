import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 20 }, () => "RIFQI SUSANTO");

function Tape({ top, rotate, opacity = 1, reverse = false, mobileTop }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 z-[-1] flex h-[58px] w-[150vw] min-w-[2100px] origin-center items-center overflow-hidden border-y border-black/20 bg-[linear-gradient(90deg,#b89416_0%,#dcb729_48%,#b08b10_100%)] shadow-[0_8px_28px_rgba(0,0,0,0.2)] max-[760px]:h-[44px] max-[760px]:min-w-[1250px]"
      style={{
        top: mobileTop || top,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        opacity,
      }}
      aria-hidden="true"
    >
      <div
        className={`flex w-max items-center will-change-transform ${
          reverse
            ? "animate-[tape-scroll-reverse_70s_linear_infinite]"
            : "animate-[tape-scroll_64s_linear_infinite]"
        }`}
      >
        {TAPE_TEXT.map((item, index) => (
          <span
            className="inline-flex items-center gap-8 pr-10 text-[0.96rem] font-black tracking-[0.16em] whitespace-nowrap text-black/76 uppercase after:ml-8 after:content-['—'] max-[760px]:text-[0.72rem]"
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
      className="relative isolate min-h-svh overflow-hidden bg-[#fbfbf8] dark:bg-[#070707]"
      id="home"
    >
      <div
        className="hero-grid-glow pointer-events-none absolute inset-0 z-[-3]"
        aria-hidden="true"
      />

      <Tape top="-1%" rotate={9} opacity={0.6} />
      <Tape top="11%" rotate={-9} opacity={0.9} reverse />
      <Tape top="36%" rotate={-10} opacity={0.97} />
      <Tape top="49%" rotate={11} opacity={0.96} reverse />
      <Tape top="70%" rotate={-12} opacity={0.9} />
      <Tape top="84%" rotate={10} opacity={0.66} reverse />

      <div className="portfolio-shell relative z-[2] grid min-h-svh grid-cols-[minmax(0,1.08fr)_minmax(315px,0.92fr)] items-center gap-[clamp(48px,7vw,112px)] pt-[116px] pb-[92px] max-[960px]:grid-cols-1 max-[960px]:gap-14 max-[960px]:pt-[138px] max-[960px]:pb-[110px]">
        <div className="max-w-[720px]" data-reveal="left">
          <span className="inline-flex min-h-[24px] items-center gap-2 rounded-full border border-[#ffd400]/24 bg-[#ffd400]/7 px-2.5 py-[3px] text-[0.61rem] font-semibold text-[#947300] backdrop-blur-[3px] dark:text-[#d4b200]">
            <i className="h-[7px] w-[7px] animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-[#24d164]" />
            Open to work
          </span>

          <h1 className="mt-7 font-black leading-[0.96] tracking-[-0.05em]">
            <span className="block text-[clamp(3rem,4vw,4.85rem)] max-[760px]:text-[clamp(3rem,14vw,4.7rem)]">
              Hi, I&apos;m
            </span>

            <strong className="mt-4 block max-w-[680px] bg-[linear-gradient(92deg,#ffd400_0%,#ffae24_43%,#ef6a36_100%)] bg-clip-text text-[clamp(3.15rem,4.4vw,5.2rem)] font-black leading-[0.9] tracking-[-0.045em] text-transparent [-webkit-text-stroke:1.35px_#171717] dark:[-webkit-text-stroke:1.35px_#f6f6f3] max-[760px]:text-[clamp(2.7rem,13vw,4.5rem)]">
              RIFQI SUSANTO
            </strong>
          </h1>

          <p className="mt-7 max-w-[650px] text-[clamp(0.88rem,0.95vw,1rem)] leading-[1.72] text-[#5e5e5e] dark:text-[#a0a0a0]">
            Information Systems student and Software Engineer focused on
            building practical web and mobile applications with maintainable
            architecture, clear interfaces, and reliable backend systems.
          </p>

          <div className="mt-7 flex items-start gap-9 max-[520px]:grid max-[520px]:grid-cols-3 max-[520px]:gap-3">
            {stats.map(([value, label]) => (
              <div className="grid" key={label}>
                <strong className="text-[1.55rem] font-black leading-none tracking-[-0.05em] max-[520px]:text-[1.2rem]">
                  {value}
                </strong>

                <span className="mt-1 text-[0.61rem] text-[#737373] dark:text-[#777] max-[520px]:text-[0.52rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-5 text-[0.67rem] font-black text-[#111] shadow-[0_10px_28px_rgba(255,212,0,0.12)] transition duration-300 hover:-translate-y-[3px] hover:bg-[#ffe03a]"
              href="#projects"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="inline-flex min-h-[42px] items-center justify-center rounded-[5px] border border-black/20 bg-white/72 px-5 text-[0.67rem] font-black transition duration-300 hover:-translate-y-[3px] hover:border-[#c7a400] dark:border-white/15 dark:bg-[#0e0e0e]/78 dark:hover:border-[#ffd400]"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex max-w-[650px] items-center gap-6 border-t border-black/12 pt-4 text-[0.61rem] text-[#6d6d6d] dark:border-white/9 dark:text-[#7f7f7f] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-[#8f7000] dark:hover:text-[#ffd400]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={13} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full border-2 border-[#777]" />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>

        <div
          className="grid place-items-center max-[960px]:pb-8"
          data-reveal="right"
        >
          <div className="relative grid aspect-square w-[clamp(246px,17vw,324px)] animate-[soft-float_5.4s_ease-in-out_infinite] place-items-center max-[960px]:w-[min(310px,72vw)]">
            <div className="absolute inset-[-4px] animate-[avatar-ring_16s_linear_infinite] rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#d84cff,#6668ff,#4ed8ff,#ffd400)] opacity-95" />

            <div className="relative z-[2] h-full w-full overflow-hidden rounded-full bg-[#fbfbf8] p-[8px] shadow-[0_28px_76px_rgba(0,0,0,0.22)] dark:bg-[#070707] dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
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
        className="absolute bottom-5 left-1/2 z-[5] grid h-[34px] w-[20px] -translate-x-1/2 place-items-start rounded-full border-[1.5px] border-black/38 pt-[6px] dark:border-white/42"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span className="h-[7px] w-[3px] animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/52 dark:bg-white/55" />
      </a>
    </section>
  );
}
