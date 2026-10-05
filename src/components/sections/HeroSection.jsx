import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const CV_DRIVE_URL =
  "https://drive.google.com/drive/folders/1SmhgvKkpRICHDnnvEH3dTHS-72bmsp16?usp=sharing";

const TAPE_TEXT = Array.from({ length: 36 }, () => "RIFQI");

const TAPE_CONFIG = [
  {
    centerY: "10%",
    rotate: 14,
    opacity: 0.58,
    reverse: false,
    duration: "64s",
    delay: "-9s",
  },
  {
    centerY: "9.5%",
    rotate: -12,
    opacity: 0.72,
    reverse: true,
    duration: "72s",
    delay: "-18s",
  },
  {
    centerY: "68.2%",
    rotate: 17,
    opacity: 0.88,
    reverse: true,
    duration: "68s",
    delay: "-25s",
  },
  {
    centerY: "65.3%",
    rotate: -15,
    opacity: 0.82,
    reverse: false,
    duration: "76s",
    delay: "-34s",
  },
];

function Tape({ centerY, rotate, opacity, reverse, duration, delay }) {
  return (
    <div
      className="hero-tape pointer-events-none absolute left-1/2 z-0 flex h-[74px] w-[190vw] min-w-[3000px] origin-center items-center overflow-hidden border-y border-black/20 bg-[#d6a51a] dark:border-black/30 dark:bg-[#a77d16] max-[760px]:h-[52px] max-[760px]:min-w-[1800px]"
      style={{
        top: centerY,
        opacity,
        transform: `translate3d(-50%, -50%, 0) rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <div
        className="hero-tape-content"
        style={{
          "--tape-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
          animationDelay: delay,
        }}
      >
        {[0, 1].map((copyIndex) => (
          <div className="hero-tape-copy" key={copyIndex}>
            {TAPE_TEXT.map((text, index) => (
              <span
                className="inline-flex shrink-0 items-center whitespace-nowrap text-[clamp(1rem,1.22vw,1.45rem)] font-black tracking-[0.13em] text-black/90 uppercase dark:text-black/95 max-[760px]:text-[0.78rem] max-[760px]:tracking-[0.11em]"
                key={`${copyIndex}-${text}-${index}`}
              >
                <span>{text}</span>

                <span
                  className="grid w-[52px] shrink-0 place-items-center text-center leading-none tracking-normal max-[760px]:w-[38px]"
                  aria-hidden="true"
                >
                  -
                </span>
              </span>
            ))}
          </div>
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

function DownloadIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v11" />
      <path d="m7.5 10 4.5 4.5 4.5-4.5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    [certificateCount, "Certs"],
  ];

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden bg-[#f4f3ed] transition-colors duration-300 dark:bg-[#080808]"
      id="home"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_48%,rgba(114,73,177,0.07),transparent_24%),radial-gradient(circle_at_32%_43%,rgba(220,170,20,0.085),transparent_32%)] dark:bg-[radial-gradient(circle_at_72%_51%,rgba(101,55,165,0.13),transparent_23%),radial-gradient(circle_at_34%_42%,rgba(255,203,0,0.018),transparent_31%)]"
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
          delay={tape.delay}
        />
      ))}

      <div
        className="hero-vignette pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-svh w-[min(1540px,calc(100%_-_56px))] grid-cols-[minmax(0,720px)_320px] items-center justify-between gap-[80px] pt-24 pb-24 max-[1540px]:w-[min(1380px,calc(100%_-_52px))] max-[1540px]:grid-cols-[minmax(0,660px)_300px] max-[1540px]:gap-[70px] max-[1240px]:w-[min(1100px,calc(100%_-_64px))] max-[1240px]:grid-cols-[minmax(0,620px)_290px] max-[1240px]:gap-[85px] max-[1050px]:w-[min(100%_-_42px,900px)] max-[1050px]:grid-cols-1 max-[1050px]:gap-14 max-[1050px]:pt-[132px] max-[1050px]:pb-[112px] max-[760px]:w-[min(100%_-_30px,900px)] max-[760px]:gap-11 max-[760px]:pt-[116px]">
        <div
          className="w-full max-w-[720px] translate-x-[150px] -translate-y-[4px] max-[1540px]:translate-x-[105px] max-[1380px]:translate-x-[70px] max-[1240px]:translate-x-0 max-[1050px]:mx-auto max-[1050px]:translate-y-0 max-[760px]:text-center"
          data-reveal="left"
        >
          <span className="inline-flex min-h-[24px] items-center gap-2 rounded-full border border-[#b78b0a]/30 bg-white/55 px-3 py-1 text-[0.68rem] font-semibold text-[#7a5d00] shadow-[0_5px_18px_rgba(116,87,0,0.05)] backdrop-blur-[8px] transition-[color,background-color,border-color,box-shadow] duration-300 ease-out dark:border-[#ffd400]/24 dark:bg-[#ffd400]/[0.05] dark:text-[#d5ad20] dark:shadow-none max-[760px]:mx-auto max-[760px]:text-[0.64rem]">
            <i className="h-[7px] w-[7px] animate-[status-pulse_1.8s_ease-in-out_infinite] rounded-full bg-[#20c965]" />
            Open to work
          </span>

          <h1 className="mt-[29px] font-black leading-[0.9] tracking-[-0.055em]">
            <span className="block text-[clamp(3.45rem,4.2vw,5.1rem)] text-[#151514] transition-colors duration-300 ease-out dark:text-[#f5f5f2] max-[760px]:text-[clamp(3rem,14vw,4.7rem)]">
              Hi, I&apos;m
            </span>

            <strong className="hero-name mt-[23px] inline-grid w-max max-w-full text-[clamp(3.55rem,4.5vw,5.4rem)] font-black leading-[0.88] tracking-[-0.04em] max-[760px]:text-[clamp(2.8rem,13vw,4.4rem)]">
              <span className="block whitespace-nowrap">SOFTWARE</span>

              <span className="block whitespace-nowrap">ENGINEERING</span>
            </strong>
          </h1>

          <p className="mt-[38px] max-w-[720px] text-[clamp(1.02rem,1vw,1.12rem)] leading-[1.72] text-[#3f3f3b] transition-colors duration-300 ease-out dark:text-[#b8b8b3] max-[760px]:mx-auto max-[760px]:text-[0.95rem] max-[760px]:leading-[1.7]">
            Information Systems student and{" "}
            <span className="font-semibold text-[#765a00] transition-colors duration-300 ease-out dark:text-[#f0c42d]">
              Software Engineer
            </span>{" "}
            focused on building practical web and mobile applications with
            maintainable architecture, clear interfaces, and reliable backend
            systems.
          </p>

          <div className="mt-[44px] grid w-fit grid-cols-2 gap-[18px] max-[760px]:mx-auto max-[520px]:gap-[14px]">
            {stats.map(([value, label]) => (
              <div
                className="grid min-w-[72px] justify-items-center text-center"
                key={label}
              >
                <strong className="text-[2.05rem] font-black leading-none tracking-[-0.055em] text-[#181817] transition-colors duration-300 ease-out dark:text-[#f2f2ef] max-[760px]:text-[1.9rem] max-[520px]:text-[1.45rem]">
                  {value}
                </strong>

                <span className="mt-[7px] text-center text-[0.78rem] leading-none font-medium text-[#5d5d58] transition-colors duration-300 ease-out dark:text-[#a7a7a2] max-[760px]:text-[0.74rem] max-[520px]:text-[0.62rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[31px] flex flex-wrap gap-3.5 max-[760px]:justify-center max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="hero-download-button group inline-flex min-h-[44px] items-center justify-center rounded-[5px] px-6 text-[0.74rem] font-black"
              href={CV_DRIVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hero-download-content inline-flex items-center gap-2.5">
                <span className="transition-transform duration-300 ease-out group-hover:-translate-y-px">
                  <DownloadIcon size={15} />
                </span>

                <span>Download CV</span>
              </span>
            </a>

            <a
              className="hero-projects-button inline-flex min-h-[44px] items-center justify-center rounded-[5px] px-6 text-[0.74rem] font-black backdrop-blur-[10px]"
              href="/projects"
            >
              <span className="hero-projects-content">View Projects</span>
            </a>
          </div>

          <div className="mt-[43px] flex max-w-[720px] items-center gap-6 border-t border-black/12 pt-[18px] text-[0.72rem] text-[#454541] transition-[color,border-color] duration-300 ease-out dark:border-white/10 dark:text-[#b5b5b0] max-[760px]:mx-auto max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-2.5 max-[520px]:text-[0.68rem]">
            <a
              className="inline-flex items-center gap-2 transition-colors duration-300 ease-out hover:text-[#765a00] dark:hover:text-[#f1c632]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={14} />

              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center gap-2 transition-colors duration-300 ease-out">
              <LocationIcon size={14} />

              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>
        </div>

        <div
          className="grid -translate-x-[180px] -translate-y-[1px] place-items-center max-[1540px]:-translate-x-[130px] max-[1380px]:-translate-x-[90px] max-[1240px]:translate-x-0 max-[1050px]:translate-y-0 max-[1050px]:pb-[16px]"
          data-reveal="right"
        >
          <div className="relative grid aspect-square w-[320px] place-items-center max-[1540px]:w-[300px] max-[1240px]:w-[286px] max-[1050px]:w-[min(320px,70vw)]">
            <div
              className="hero-profile-ring absolute inset-[-22px] rounded-full opacity-[0.09] blur-[28px] dark:opacity-[0.19]"
              aria-hidden="true"
            />

            <div
              className="hero-profile-ring absolute inset-0 animate-[avatar-ring_22s_linear_infinite] rounded-full"
              aria-hidden="true"
            />

            <div className="absolute inset-[3px] z-[2] overflow-hidden rounded-full bg-[#f4f3ed] p-[4px] shadow-[0_24px_70px_rgba(41,35,17,0.16)] transition-[background-color,box-shadow] duration-300 ease-out dark:bg-[#080808] dark:shadow-[0_32px_88px_rgba(0,0,0,0.58)]">
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
        className="absolute bottom-[18px] left-1/2 z-20 h-[39px] w-6 -translate-x-1/2 rounded-full border-[1.5px] border-black/45 transition-colors duration-300 ease-out hover:border-[#8b6a00] dark:border-white/42 dark:hover:border-[#d3aa1c]"
        href="/about"
        aria-label="Scroll ke bagian About"
      >
        <span className="absolute top-[7px] left-1/2 block h-[7px] w-[3px] -translate-x-1/2">
          <span className="block h-full w-full animate-[scroll-dot_1.7s_ease-in-out_infinite] rounded-full bg-black/60 transition-colors duration-300 ease-out dark:bg-white/55" />
        </span>
      </a>
    </section>
  );
}
