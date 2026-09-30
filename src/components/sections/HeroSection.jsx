import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 20 }, () => "RIFQI SUSANTO");

function Tape({ top, rotate, opacity = 1, reverse = false }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 z-[-1] flex h-[62px] w-[152vw] min-w-[2200px] origin-center items-center overflow-hidden border-y border-black/20 bg-[linear-gradient(90deg,#ad8914_0%,#d6b01f_45%,#ba9417_100%)] shadow-[0_8px_25px_rgba(0,0,0,0.22)] max-[760px]:h-[45px] max-[760px]:min-w-[1300px]"
      style={{
        top,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        opacity,
      }}
      aria-hidden="true"
    >
      <div className={`tape-track ${reverse ? "tape-track-reverse" : ""}`}>
        {TAPE_TEXT.map((text, index) => (
          <span
            className="inline-flex items-center pr-10 text-[1rem] font-black tracking-[0.14em] whitespace-nowrap text-black/78 uppercase after:ml-10 after:content-['–'] max-[760px]:text-[0.72rem]"
            key={`${text}-${index}`}
          >
            {text}
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
      className="hero-surface relative isolate min-h-svh overflow-hidden"
      id="home"
    >
      <Tape top="-2%" rotate={9} opacity={0.58} />
      <Tape top="12%" rotate={-9} opacity={0.88} reverse />
      <Tape top="41%" rotate={-10} opacity={0.95} />
      <Tape top="55%" rotate={11} opacity={0.96} reverse />
      <Tape top="72%" rotate={-11} opacity={0.9} />
      <Tape top="88%" rotate={10} opacity={0.62} reverse />

      <div className="portfolio-shell relative z-[2] grid min-h-svh grid-cols-[minmax(0,1.12fr)_minmax(330px,0.88fr)] items-center gap-[clamp(60px,8vw,130px)] pt-[114px] pb-[90px] max-[980px]:grid-cols-1 max-[980px]:gap-14 max-[980px]:pt-[135px] max-[980px]:pb-[110px]">
        <div className="max-w-[700px]" data-reveal="left">
          <span className="inline-flex min-h-[25px] items-center gap-2 rounded-full border border-[#ffd400]/30 bg-[#ffd400]/8 px-3 py-1 text-[0.62rem] font-semibold text-[#917100] backdrop-blur-[5px] dark:text-[#d8b500]">
            <i className="h-[7px] w-[7px] animate-[status-pulse_1.8s_ease-in-out_infinite] rounded-full bg-[#21d26a]" />
            Open to work
          </span>

          <h1 className="display-font mt-8 font-black leading-[0.9] tracking-[-0.055em]">
            <span className="block text-[clamp(3.4rem,4.2vw,5rem)] max-[760px]:text-[clamp(3rem,14vw,4.7rem)]">
              Hi, I&apos;m
            </span>

            <strong className="mt-6 block whitespace-nowrap bg-[linear-gradient(90deg,#ffd400_0%,#ffae22_42%,#ef5b37_100%)] bg-clip-text text-[clamp(3.3rem,4.45vw,5.25rem)] font-black leading-[0.88] tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.35px_#181818] dark:[-webkit-text-stroke:1.35px_#f5f5f2] max-[760px]:whitespace-normal max-[760px]:text-[clamp(2.8rem,13vw,4.4rem)]">
              RIFQI SUSANTO
            </strong>
          </h1>

          <p className="mt-8 max-w-[645px] text-[clamp(0.9rem,0.95vw,1rem)] leading-[1.72] text-[#5d5d5d] dark:text-[#a0a0a0]">
            Information Systems student and Software Engineer focused on
            building practical web and mobile applications with maintainable
            architecture, clear interfaces, and reliable backend systems.
          </p>

          <div className="mt-8 flex items-start gap-10 max-[520px]:grid max-[520px]:grid-cols-3 max-[520px]:gap-3">
            {stats.map(([value, label]) => (
              <div className="grid" key={label}>
                <strong className="display-font text-[1.55rem] font-black leading-none tracking-[-0.05em] max-[520px]:text-[1.2rem]">
                  {value}
                </strong>

                <span className="mt-1 text-[0.62rem] text-[#717171] dark:text-[#777] max-[520px]:text-[0.51rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-6 text-[0.67rem] font-black text-[#111] shadow-[0_10px_28px_rgba(255,212,0,0.15)] transition duration-300 hover:-translate-y-[3px] hover:bg-[#ffe13a]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={14} />
              Contact Me
            </a>

            <a
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-black/20 bg-white/68 px-6 text-[0.67rem] font-black transition duration-300 hover:-translate-y-[3px] hover:border-[#c7a400] dark:border-white/16 dark:bg-[#0e0e0e]/78 dark:hover:border-[#ffd400]"
              href="#projects"
            >
              View Projects
            </a>
          </div>

          <div className="mt-9 flex max-w-[650px] items-center gap-6 border-t border-black/12 pt-5 text-[0.61rem] text-[#6c6c6c] dark:border-white/10 dark:text-[#818181] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-3">
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
          className="grid place-items-center max-[980px]:pb-7"
          data-reveal="right"
        >
          <div className="relative grid aspect-square w-[clamp(265px,18vw,335px)] animate-[soft-float_5.3s_ease-in-out_infinite] place-items-center max-[980px]:w-[min(320px,70vw)]">
            <div className="absolute inset-[-4px] animate-[avatar-ring_18s_linear_infinite] rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#cf4dff,#6267ff,#4bd8ff,#ffd400)]" />

            <div className="relative z-[2] h-full w-full overflow-hidden rounded-full bg-[#fbfbf8] p-[8px] shadow-[0_30px_80px_rgba(0,0,0,0.24)] dark:bg-[#070707] dark:shadow-[0_30px_85px_rgba(0,0,0,0.52)]">
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
        className="absolute bottom-5 left-1/2 z-[6] grid h-[38px] w-[23px] -translate-x-1/2 place-items-start rounded-full border-[1.5px] border-black/40 pt-[7px] dark:border-white/42"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span className="h-[7px] w-[3px] animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/55 dark:bg-white/55" />
      </a>
    </section>
  );
}
