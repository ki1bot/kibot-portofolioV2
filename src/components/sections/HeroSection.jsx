import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 24 }, () => "RIFQI SUSANTO");

function Tape({ top, rotate, opacity = 1, reverse = false }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 z-[-1] flex h-[66px] w-[155vw] min-w-[2200px] origin-center items-center overflow-hidden border-y border-black/20 bg-[linear-gradient(90deg,#a88415_0%,#d3aa1f_48%,#b38b16_100%)] shadow-[0_8px_25px_rgba(0,0,0,0.22)] max-[760px]:h-[46px] max-[760px]:min-w-[1300px]"
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
            ? "animate-[tape-marquee-reverse_64s_linear_infinite]"
            : "animate-[tape-marquee_58s_linear_infinite]"
        }`}
      >
        {TAPE_TEXT.map((text, index) => (
          <span
            className="inline-flex items-center pr-10 text-[1rem] font-black tracking-[0.14em] whitespace-nowrap text-black/80 uppercase after:ml-10 after:content-['–'] max-[760px]:pr-7 max-[760px]:text-[0.72rem] max-[760px]:after:ml-7"
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
    ["S1", "Student"],
    [certificateCount, "Certs"],
  ];

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden bg-[radial-gradient(circle_at_72%_49%,rgba(88,52,155,0.08),transparent_24%),#fbfbf8] dark:bg-[radial-gradient(circle_at_72%_49%,rgba(88,52,155,0.15),transparent_25%),#070707]"
      id="home"
    >
      <Tape top="-5%" rotate={9} opacity={0.48} />
      <Tape top="12%" rotate={-8} opacity={0.88} reverse />
      <Tape top="40%" rotate={9} opacity={0.88} />
      <Tape top="55%" rotate={-10} opacity={0.96} reverse />
      <Tape top="73%" rotate={10} opacity={0.9} />
      <Tape top="89%" rotate={-9} opacity={0.56} reverse />

      <div className="relative z-[2] mx-auto grid min-h-svh w-[min(1480px,calc(100%_-_56px))] grid-cols-[minmax(0,1.08fr)_minmax(330px,0.78fr)] items-center gap-[clamp(70px,8vw,140px)] pt-[112px] pb-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-14 max-[980px]:pt-[135px] max-[980px]:pb-[110px] max-[760px]:w-[min(100%_-_30px,1480px)]">
        <div className="max-w-[700px]" data-reveal="left">
          <span className="inline-flex min-h-[25px] items-center gap-2 rounded-full border border-[#ffd400]/30 bg-[#ffd400]/8 px-3 py-1 text-[0.62rem] font-semibold text-[#927200] backdrop-blur-[6px] dark:text-[#d6b300]">
            <i className="h-[7px] w-[7px] animate-[status-pulse_1.8s_ease-in-out_infinite] rounded-full bg-[#21d26a]" />
            Open to work
          </span>

          <h1 className="mt-[31px] font-sans font-black leading-[0.9] tracking-[-0.055em]">
            <span className="block text-[clamp(3.35rem,4.25vw,5.15rem)] max-[760px]:text-[clamp(3rem,14vw,4.7rem)]">
              Hi, I&apos;m
            </span>

            <strong className="mt-6 block whitespace-nowrap bg-[linear-gradient(90deg,#ffd400_0%,#ffb11f_38%,#ef6037_100%)] bg-clip-text text-[clamp(3.3rem,4.5vw,5.3rem)] font-black leading-[0.88] tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.2px_rgba(24,24,24,0.88)] dark:[-webkit-text-stroke:1.2px_rgba(245,245,242,0.82)] max-[760px]:whitespace-normal max-[760px]:text-[clamp(2.8rem,13vw,4.4rem)]">
              RIFQI SUSANTO
            </strong>
          </h1>

          <p className="mt-[29px] max-w-[655px] text-[clamp(0.9rem,0.95vw,1rem)] leading-[1.72] text-[#626262] dark:text-[#969696]">
            Information Systems student and Software Engineer focused on
            building practical web and mobile applications with maintainable
            architecture, clear interfaces, and reliable backend systems.
          </p>

          <div className="mt-7 flex items-start gap-[38px] max-[520px]:grid max-[520px]:grid-cols-3 max-[520px]:gap-3">
            {stats.map(([value, label]) => (
              <div className="grid" key={label}>
                <strong className="text-[1.55rem] font-black leading-none tracking-[-0.05em] max-[520px]:text-[1.2rem]">
                  {value}
                </strong>

                <span className="mt-1 text-[0.62rem] text-[#7e7e7e] max-[520px]:text-[0.51rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[29px] flex flex-wrap gap-3.5 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-6 text-[0.67rem] font-black text-[#111] shadow-[0_10px_28px_rgba(255,212,0,0.14)] transition duration-300 hover:-translate-y-[3px] hover:bg-[#ffe13a]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={15} />
              Contact Me
            </a>

            <a
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-black/20 bg-white/65 px-6 text-[0.67rem] font-black transition duration-300 hover:-translate-y-[3px] hover:border-[#c7a400] dark:border-white/14 dark:bg-[#101010]/78 dark:hover:border-[#ffd400]"
              href="#projects"
            >
              View Projects
            </a>
          </div>

          <div className="mt-[38px] flex max-w-[655px] items-center gap-6 border-t border-black/10 pt-[18px] text-[0.61rem] text-[#696969] dark:border-white/10 dark:text-[#858585] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-2.5">
            <a
              className="inline-flex items-center gap-2 transition hover:text-[#8f7000] dark:hover:text-[#ffd400]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={14} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <i className="h-[7px] w-[7px] rounded-full border-2 border-[#777]" />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>

        <div
          className="grid place-items-center max-[980px]:pb-[18px]"
          data-reveal="right"
        >
          <div className="relative grid aspect-square w-[clamp(270px,18.5vw,345px)] animate-[soft-float_5.3s_ease-in-out_infinite] place-items-center max-[980px]:w-[min(320px,70vw)]">
            <div className="absolute inset-[-4px] animate-[avatar-ring_18s_linear_infinite] rounded-full bg-[conic-gradient(from_210deg,#ffd400,#ff8a30,#cf4dff,#6267ff,#4bd8ff,#ffd400)]" />

            <div className="relative z-[2] h-full w-full overflow-hidden rounded-full bg-[#fbfbf8] p-2 shadow-[0_30px_85px_rgba(0,0,0,0.24)] dark:bg-[#070707] dark:shadow-[0_30px_85px_rgba(0,0,0,0.55)]">
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
        className="absolute bottom-[19px] left-1/2 z-[6] grid h-[39px] w-6 -translate-x-1/2 place-items-start rounded-full border-[1.5px] border-black/40 pt-[7px] dark:border-white/42"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span className="h-[7px] w-[3px] animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/55 dark:bg-white/55" />
      </a>
    </section>
  );
}
