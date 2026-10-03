import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 40 }, () => "RIFQI");

const TAPE_CONFIG = [
  {
    centerY: "9%",
    rotate: 14.2,
    opacity: 0.58,
    reverse: false,
    duration: "46s",
  },
  {
    centerY: "5.5%",
    rotate: -11.8,
    opacity: 0.72,
    reverse: true,
    duration: "52s",
  },
  {
    centerY: "60%",
    rotate: 15.8,
    opacity: 0.88,
    reverse: true,
    duration: "48s",
  },
  {
    centerY: "62.5%",
    rotate: -14.4,
    opacity: 0.82,
    reverse: false,
    duration: "56s",
  },
];

function Tape({ centerY, rotate, opacity, reverse, duration }) {
  return (
    <div
      className="hero-tape pointer-events-none absolute left-1/2 z-0 flex h-[74px] w-[190vw] min-w-[2800px] origin-center items-center overflow-hidden border-y border-black/25 bg-[#bd8e19] max-[760px]:h-[52px] max-[760px]:min-w-[1700px]"
      style={{
        top: centerY,
        opacity,
        transform: `translate3d(-50%, -50%, 0) rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <div
        className="hero-tape-content flex w-max min-w-max items-center"
        style={{
          "--tape-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {TAPE_TEXT.map((text, index) => (
          <span
            className="inline-flex shrink-0 items-center pr-10 text-[clamp(1rem,1.06vw,1.26rem)] font-black tracking-[0.14em] whitespace-nowrap text-black/92 uppercase after:ml-10 after:text-black/88 after:content-['–'] max-[760px]:pr-7 max-[760px]:text-[0.76rem] max-[760px]:tracking-[0.12em] max-[760px]:after:ml-7"
            key={`${text}-${index}`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

function LocationIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
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
      className="relative isolate min-h-svh overflow-hidden bg-[#f7f7f3] dark:bg-[#080808]"
      id="home"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_73%_50%,rgba(104,61,168,0.055),transparent_23%),radial-gradient(circle_at_33%_42%,rgba(255,203,0,0.026),transparent_31%)] dark:bg-[radial-gradient(circle_at_72%_51%,rgba(101,55,165,0.13),transparent_23%),radial-gradient(circle_at_34%_42%,rgba(255,203,0,0.018),transparent_31%)]"
        aria-hidden="true"
      />

      {TAPE_CONFIG.map((tape, index) => (
        <Tape
          key={`${tape.centerY}-${tape.rotate}-${index}`}
          centerY={tape.centerY}
          rotate={tape.rotate}
          opacity={tape.opacity}
          reverse={tape.reverse}
          duration={tape.duration}
        />
      ))}

      <div
        className="hero-vignette pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-svh w-[min(1510px,calc(100%_-_80px))] grid-cols-[minmax(0,720px)_340px] items-center justify-start gap-[clamp(160px,14vw,270px)] pt-24 pb-24 max-[1540px]:grid-cols-[minmax(0,680px)_320px] max-[1540px]:gap-[clamp(100px,10vw,175px)] max-[1240px]:w-[min(1100px,calc(100%_-_64px))] max-[1240px]:grid-cols-[minmax(0,620px)_300px] max-[1240px]:gap-[90px] max-[1050px]:w-[min(100%_-_42px,900px)] max-[1050px]:grid-cols-1 max-[1050px]:gap-14 max-[1050px]:pt-[132px] max-[1050px]:pb-[112px] max-[760px]:w-[min(100%_-_30px,900px)] max-[760px]:gap-11 max-[760px]:pt-[116px]">
        <div
          className="w-full max-w-[720px] -translate-y-[16px] max-[1050px]:mx-auto max-[1050px]:translate-y-0 max-[760px]:text-center"
          data-reveal="left"
        >
          <span className="inline-flex min-h-[24px] items-center gap-2 rounded-full border border-[#cfa900]/30 bg-[#ffd400]/8 px-3 py-1 text-[0.6rem] font-semibold text-[#896b00] backdrop-blur-[6px] dark:border-[#ffd400]/24 dark:bg-[#ffd400]/[0.05] dark:text-[#d5ad20] max-[760px]:mx-auto">
            <i className="h-[7px] w-[7px] animate-[status-pulse_1.8s_ease-in-out_infinite] rounded-full bg-[#21d26a]" />
            Open to work
          </span>

          <h1 className="mt-[29px] font-black leading-[0.9] tracking-[-0.055em]">
            <span className="block text-[clamp(3.45rem,4.25vw,5.2rem)] text-[#151515] dark:text-[#f2f2ef] max-[760px]:text-[clamp(3rem,14vw,4.7rem)]">
              Hi, I&apos;m
            </span>

            <strong className="hero-name mt-[23px] block whitespace-nowrap text-[clamp(3.55rem,4.55vw,5.45rem)] font-black leading-[0.88] tracking-[-0.04em] max-[760px]:whitespace-normal max-[760px]:text-[clamp(2.8rem,13vw,4.4rem)]">
              RIFQI SUSANTO
            </strong>
          </h1>

          <p className="mt-[38px] max-w-[700px] text-[clamp(0.94rem,0.94vw,1.06rem)] leading-[1.72] text-[#62625f] dark:text-[#999996] max-[760px]:mx-auto max-[760px]:text-[0.9rem] max-[760px]:leading-[1.7]">
            Information Systems student and{" "}
            <span className="font-semibold text-[#987600] dark:text-[#d4ad20]">
              Software Engineer
            </span>{" "}
            focused on building practical web and mobile applications with
            maintainable architecture, clear interfaces, and reliable backend
            systems.
          </p>

          <div className="mt-[44px] flex items-start gap-[42px] max-[760px]:justify-center max-[520px]:grid max-[520px]:grid-cols-3 max-[520px]:gap-3">
            {stats.map(([value, label]) => (
              <div
                className="grid min-w-[50px] max-[760px]:justify-items-center"
                key={label}
              >
                <strong className="text-[1.75rem] font-black leading-none tracking-[-0.055em] text-[#171717] dark:text-[#f2f2ef] max-[520px]:text-[1.25rem]">
                  {value}
                </strong>

                <span className="mt-[6px] text-[0.61rem] text-[#747471] dark:text-[#858582] max-[520px]:text-[0.52rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[31px] flex flex-wrap gap-3.5 max-[760px]:justify-center max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-6 text-[0.67rem] font-black text-[#111] shadow-[0_10px_28px_rgba(255,212,0,0.13)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-[3px] hover:bg-[#ffe13a] hover:shadow-[0_14px_32px_rgba(255,212,0,0.18)]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-px">
                <NavIcon name="mail" size={15} />
              </span>
              Contact Me
            </a>

            <a
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-black/18 bg-white/50 px-6 text-[0.67rem] font-black text-[#161616] backdrop-blur-[8px] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-[3px] hover:border-[#c7a400] hover:bg-white/78 dark:border-white/14 dark:bg-[#0f0f0f]/72 dark:text-[#efefec] dark:hover:border-[#d6ad1d] dark:hover:bg-[#121212]/86"
              href="#projects"
            >
              View Projects
            </a>
          </div>

          <div className="mt-[43px] flex max-w-[700px] items-center gap-6 border-t border-black/10 pt-[18px] text-[0.6rem] text-[#696966] dark:border-white/10 dark:text-[#858582] max-[760px]:mx-auto max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-2.5">
            <a
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#8f7000] dark:hover:text-[#d5ad1d]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={14} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <LocationIcon size={14} />
              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>
        </div>

        <div
          className="grid -translate-y-[2px] place-items-center max-[1050px]:translate-y-0 max-[1050px]:pb-[16px]"
          data-reveal="right"
        >
          <div className="relative grid aspect-square w-[330px] animate-[soft-float_5.3s_ease-in-out_infinite] place-items-center max-[1540px]:w-[315px] max-[1240px]:w-[292px] max-[1050px]:w-[min(320px,70vw)]">
            <div
              className="hero-profile-ring absolute inset-[-22px] rounded-full opacity-[0.12] blur-[28px] dark:opacity-[0.19]"
              aria-hidden="true"
            />

            <div
              className="hero-profile-ring absolute inset-[-3px] animate-[avatar-ring_22s_linear_infinite] rounded-full"
              aria-hidden="true"
            />

            <div className="relative z-[2] h-full w-full overflow-hidden rounded-full bg-[#f7f7f3] p-[6px] shadow-[0_30px_86px_rgba(0,0,0,0.22)] dark:bg-[#080808] dark:shadow-[0_32px_88px_rgba(0,0,0,0.58)]">
              <img
                className="h-full w-full rounded-full bg-[#151515] object-cover object-center"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-[18px] left-1/2 z-20 grid h-[39px] w-6 -translate-x-1/2 place-items-start rounded-full border-[1.5px] border-black/40 pt-[7px] transition-colors duration-300 hover:border-[#987700] dark:border-white/42 dark:hover:border-[#d3aa1c]"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span className="h-[7px] w-[3px] animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/55 dark:bg-white/55" />
      </a>
    </section>
  );
}
