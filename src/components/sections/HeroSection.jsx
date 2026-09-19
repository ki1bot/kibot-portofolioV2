import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

const TICKER_ITEMS = Array.from({ length: 8 }, (_, index) => index);

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    [`${TECH_STACK.length}+`, "Technologies"],
    [certificateCount, "Certificates"],
  ];

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 pt-[72px] max-[700px]:pt-16"
      id="home"
    >
      <div className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-70" />

      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.025]" />

      <div className="pointer-events-none absolute top-[12%] right-[-10%] h-[560px] w-[560px] rounded-full bg-[#d8ff3e]/[0.055] blur-[120px]" />

      <div className="brand-ticker relative z-10 border-b border-white/10 bg-[#0c0c0c] py-3">
        <div className="brand-ticker-track">
          {TICKER_ITEMS.map((item) => (
            <span
              className="mx-5 font-mono text-[0.63rem] font-black tracking-[0.2em] text-white/32 uppercase"
              key={`first-${item}`}
            >
              RIFQI SUSANTO
              <span className="ml-10 text-[#d8ff3e]">✦</span>
            </span>
          ))}

          {TICKER_ITEMS.map((item) => (
            <span
              className="mx-5 font-mono text-[0.63rem] font-black tracking-[0.2em] text-white/32 uppercase"
              key={`second-${item}`}
            >
              RIFQI SUSANTO
              <span className="ml-10 text-[#d8ff3e]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-117px)] w-full max-w-[1240px] grid-cols-[minmax(0,1.12fr)_minmax(330px,0.68fr)] items-center gap-[clamp(55px,8vw,112px)] px-6 py-[clamp(70px,9vw,125px)] max-[940px]:grid-cols-1 max-[700px]:min-h-0 max-[700px]:px-4">
        <div data-reveal>
          <div className="mb-8 inline-flex items-center gap-3 border border-[#d8ff3e]/30 bg-[#d8ff3e]/[0.05] px-3.5 py-2 font-mono text-[0.63rem] font-black tracking-[0.1em] text-[#d8ff3e] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8ff3e] opacity-50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8ff3e]" />
            </span>
            Open to work
          </div>

          <p className="mb-4 font-mono text-[0.7rem] font-bold tracking-[0.13em] text-white/35 uppercase">
            Information Systems · Software Engineering
          </p>

          <h1 className="max-w-[830px] text-[clamp(4rem,8.5vw,8rem)] font-black leading-[0.82] tracking-[-0.08em] uppercase">
            <span className="block text-white/35">Hi, I&apos;m</span>

            <span className="block text-white">Rifqi</span>

            <span className="block text-outline">Susanto.</span>
          </h1>

          <p className="mt-8 max-w-[690px] text-[clamp(1rem,1.55vw,1.13rem)] leading-[1.9] text-white/54">
            Information Systems student and Software Engineer focused on
            building web, mobile, backend, database, and full-stack products
            with practical architecture and maintainable code.
          </p>

          <div className="mt-10 grid max-w-[690px] grid-cols-3 border-y border-white/10 max-[560px]:grid-cols-1">
            {stats.map(([value, label], index) => (
              <div
                className={`py-5 ${
                  index > 0
                    ? "border-l border-white/10 pl-7 max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:pl-0"
                    : ""
                }`}
                key={label}
              >
                <strong className="block text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.055em]">
                  {value}
                </strong>

                <span className="mt-2 block font-mono text-[0.59rem] font-black tracking-[0.1em] text-white/34 uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[52px] items-center justify-center bg-[#d8ff3e] px-6 font-mono text-[0.66rem] font-black tracking-[0.09em] text-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-white"
              href="#projects"
            >
              View projects
              <span className="ml-3">↘</span>
            </a>

            <a
              className="inline-flex min-h-[52px] items-center justify-center border border-white/22 bg-white/[0.02] px-6 font-mono text-[0.66rem] font-black tracking-[0.09em] uppercase transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
              href="#contact"
            >
              Contact me
              <span className="ml-3">↗</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.63rem] text-white/34 max-[520px]:grid">
            <a
              className="transition-colors hover:text-[#d8ff3e]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              {PERSONAL_INFO.email}
            </a>

            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-[430px] max-[940px]:max-w-[520px]"
          data-reveal
        >
          <div className="absolute -top-5 -right-5 h-full w-full border border-[#d8ff3e]/40 max-[700px]:-top-3 max-[700px]:-right-3" />

          <div className="absolute -bottom-5 -left-5 h-28 w-28 bg-[#d8ff3e] max-[700px]:-bottom-3 max-[700px]:-left-3" />

          <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#101010]">
            <div className="profile-grid-pattern absolute inset-0 opacity-35" />

            <div className="absolute top-[8%] right-[6%] h-[36%] w-[36%] rounded-full bg-[#d8ff3e]" />

            <div className="absolute top-5 left-5 z-[4] border border-white/15 bg-black/60 px-3 py-2 font-mono text-[0.57rem] font-black tracking-[0.08em] text-white/60 uppercase backdrop-blur-md">
              Based in Indonesia
            </div>

            <img
              className="absolute inset-0 z-[2] h-full w-full object-cover object-center saturate-[0.82] contrast-[1.05]"
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.fullName}
              fetchPriority="high"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[44%] bg-gradient-to-b from-transparent via-black/30 to-black" />

            <div className="absolute right-5 bottom-5 left-5 z-[4] border-t border-white/25 pt-4">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="font-mono text-[0.56rem] font-black tracking-[0.11em] text-[#d8ff3e] uppercase">
                    Current role
                  </p>

                  <p className="mt-1 text-[clamp(1.2rem,3vw,1.8rem)] font-black tracking-[-0.04em] uppercase">
                    {PERSONAL_INFO.headline}
                  </p>
                </div>

                <span className="font-mono text-[0.57rem] text-white/38">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
