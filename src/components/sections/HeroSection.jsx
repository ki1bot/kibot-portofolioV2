import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 14 }, () => "RIFQI SUSANTO");

function Tape({ top, rotate, opacity = 1, reverse = false }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 z-[-1] flex h-14 w-[138vw] min-w-[1900px] origin-center items-center overflow-hidden border-y border-black/20 bg-gradient-to-r from-[#f7d66e] via-[#edc84d] to-[#f7d66e] shadow-[0_8px_18px_rgba(0,0,0,0.16)] dark:from-[#c99d14] dark:via-[#e0b822] dark:to-[#c99d14] max-[760px]:h-[45px] max-[760px]:min-w-[1200px]"
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
            ? "animate-[tape-scroll_64s_linear_infinite] [animation-direction:reverse]"
            : "animate-[tape-scroll_58s_linear_infinite]"
        }`}
      >
        {TAPE_TEXT.map((item, index) => (
          <span
            className="inline-flex items-center gap-7 pr-9 text-[1.03rem] font-black tracking-[0.14em] whitespace-nowrap text-black/50 uppercase after:ml-7 after:content-['—'] dark:text-[#090909] max-[760px]:text-[0.78rem]"
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
      className="relative isolate min-h-svh overflow-hidden bg-[#fbfbf9] dark:bg-[#090909]"
      id="home"
    >
      <div
        className="pointer-events-none absolute right-[-10vw] bottom-[-24vh] z-[-3] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(126,72,180,0.13),transparent_65%)] blur-[15px]"
        aria-hidden="true"
      />

      <Tape top="2%" rotate={9} opacity={0.62} />
      <Tape top="12%" rotate={-11} opacity={0.92} reverse />
      <Tape top="43%" rotate={-12} opacity={0.92} />
      <Tape top="55%" rotate={13} opacity={0.96} reverse />
      <Tape top="73%" rotate={-14} opacity={0.86} />
      <Tape top="82%" rotate={12} opacity={0.58} reverse />

      <div className="relative z-[2] mx-auto grid min-h-svh w-[calc(100%_-_48px)] max-w-[1510px] grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] items-center gap-[clamp(60px,8vw,130px)] py-[92px] pt-[130px] max-[960px]:w-[calc(100%_-_36px)] max-[960px]:grid-cols-1 max-[960px]:gap-[70px] max-[960px]:pt-[150px] max-[960px]:pb-[120px] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:pt-[135px]">
        <div className="max-w-[700px] max-[960px]:max-w-[760px]" data-reveal>
          <span className="inline-flex min-h-[26px] items-center gap-2 rounded-full border border-[#ffd400]/35 bg-[#ffd400]/[0.06] px-3 py-1 text-[0.68rem] text-[#b28d00] dark:text-[#d9b800]">
            <i className="h-2 w-2 rounded-full bg-[#16dd5c] shadow-[0_0_12px_rgba(22,221,92,0.8)]" />
            Open to work
          </span>

          <h1 className="mt-[30px] font-black leading-[0.95] tracking-[-0.052em]">
            <span className="block text-[clamp(3.2rem,4.1vw,5.1rem)] max-[760px]:text-[clamp(3rem,14vw,4.5rem)]">
              Hi, I&apos;m
            </span>

            <strong className="mt-[22px] block bg-[linear-gradient(90deg,#ffd000_0%,#ff9c1b_48%,#eb4f3b_100%)] bg-clip-text text-[clamp(3.15rem,4vw,5rem)] font-black tracking-[-0.045em] text-transparent [-webkit-text-stroke:1.25px_#141414] dark:[-webkit-text-stroke:1.25px_#f4f4ef] max-[760px]:text-[clamp(2.5rem,11.8vw,4rem)]">
              RIFQI SUSANTO
            </strong>
          </h1>

          <p className="mt-9 max-w-[690px] text-[clamp(0.98rem,1.05vw,1.14rem)] leading-[1.72] text-[#555] dark:text-[#aaa]">
            Information Systems student and Software Engineer focused on
            building practical web and mobile applications with maintainable
            architecture, clear interfaces, and reliable backend systems.
          </p>

          <div className="mt-[34px] flex items-start gap-[34px] max-[760px]:gap-6 max-[520px]:grid max-[520px]:grid-cols-3 max-[520px]:gap-2.5">
            {stats.map(([value, label]) => (
              <div className="grid" key={label}>
                <strong className="text-[1.58rem] font-black tracking-[-0.04em] max-[520px]:text-[1.35rem]">
                  {value}
                </strong>

                <span className="mt-px text-[0.69rem] text-[#777] dark:text-[#767676] max-[520px]:text-[0.6rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[5px] border border-[#caa700] bg-[#ffd400] px-[26px] text-[0.76rem] font-black text-[#101010] shadow-[0_8px_25px_rgba(255,212,0,0.12)] transition duration-200 hover:-translate-y-[3px]"
              href="#projects"
            >
              <span>View Projects</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[5px] border border-black/25 bg-white/80 px-[26px] text-[0.76rem] font-black transition duration-200 hover:-translate-y-[3px] hover:border-[#caa700] dark:border-white/20 dark:bg-[#111]/80 dark:hover:border-[#ffd400]"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-11 flex max-w-[690px] items-center gap-[22px] border-t border-black/15 pt-[22px] text-[0.7rem] text-[#777] dark:border-white/10 dark:text-[#767676] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-[#caa700] dark:hover:text-[#ffd400]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={15} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border-2 border-[#777] dark:border-[#767676]" />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>

        <div
          className="grid place-items-center max-[960px]:pb-[50px]"
          data-reveal
        >
          <div className="grid aspect-square w-[clamp(260px,18vw,335px)] place-items-center rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#d64aff,#5b60ff,#49d4ff,#ffd400)] p-[3px] shadow-[0_24px_70px_rgba(0,0,0,0.2)] max-[960px]:w-[min(320px,70vw)]">
            <div className="h-full w-full overflow-hidden rounded-full bg-[#fbfbf9] p-[9px] dark:bg-[#090909]">
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
        className="absolute bottom-6 left-1/2 z-[5] grid h-9 w-[22px] -translate-x-1/2 place-items-start rounded-full border-2 border-black/45 pt-[7px] dark:border-white/45"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span className="h-[7px] w-[3px] animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/55 dark:bg-white/55" />
      </a>
    </section>
  );
}
