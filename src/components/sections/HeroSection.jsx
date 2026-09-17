import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    [`${TECH_STACK.length}+`, "Technologies"],
    [certificateCount, "Certs"],
  ];

  return (
    <section
      className="relative min-h-svh overflow-hidden border-b border-white/10 pt-[138px] pb-20 max-[700px]:pt-28"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(216,255,62,0.08),transparent_26rem)]" />

      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1.12fr)_minmax(320px,0.72fr)] items-center gap-[clamp(50px,8vw,108px)] px-6 max-[900px]:grid-cols-1 max-[700px]:px-4">
        <div data-reveal>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#d8ff3e]/35 bg-[#d8ff3e]/[0.06] px-3.5 py-2 font-mono text-[0.67rem] font-black tracking-[0.08em] text-[#d8ff3e] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#d8ff3e] shadow-[0_0_14px_rgba(216,255,62,0.9)]" />
            Open to work
          </div>

          <h1 className="max-w-[800px] text-[clamp(3.5rem,8vw,7.2rem)] font-black leading-[0.9] tracking-[-0.07em] uppercase">
            <span className="text-white/55">Hi, I&apos;m </span>

            <span className="text-white">RIFQI SUSANTO</span>
          </h1>

          <p className="mt-7 max-w-[690px] text-[clamp(1rem,1.55vw,1.13rem)] leading-[1.85] text-white/60">
            Information Systems student and Software Engineer focused on web and
            mobile application development — building practical, maintainable,
            and user-focused digital products.
          </p>

          <div className="mt-9 grid max-w-[650px] grid-cols-3 border-y border-white/10 max-[560px]:grid-cols-1">
            {stats.map(([value, label], index) => (
              <div
                className={`py-5 ${
                  index > 0
                    ? "border-l border-white/10 pl-7 max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:pl-0"
                    : ""
                }`}
                key={label}
              >
                <strong className="block text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.05em]">
                  {value}
                </strong>

                <span className="mt-2 block font-mono text-[0.62rem] font-bold tracking-[0.09em] text-white/40 uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[50px] items-center justify-center bg-[#d8ff3e] px-6 font-mono text-[0.68rem] font-black tracking-[0.08em] text-black uppercase transition hover:-translate-y-1 hover:bg-white"
              href="#projects"
            >
              View Projects
            </a>

            <a
              className="inline-flex min-h-[50px] items-center justify-center border border-white/25 px-6 font-mono text-[0.68rem] font-black tracking-[0.08em] text-white uppercase transition hover:border-white hover:bg-white hover:text-black"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.66rem] text-white/40 max-[520px]:grid">
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
          className="relative mx-auto w-full max-w-[420px] max-[900px]:max-w-[500px]"
          data-reveal
        >
          <div className="absolute -top-4 -right-4 h-full w-full border border-[#d8ff3e]/35 max-[700px]:-top-2.5 max-[700px]:-right-2.5" />

          <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#111]">
            <div className="profile-grid-pattern absolute inset-0 opacity-35" />

            <div className="absolute top-[8%] right-[8%] h-[38%] w-[38%] rounded-full bg-[#d8ff3e]" />

            <img
              className="absolute inset-0 z-[2] h-full w-full object-cover object-center saturate-[0.84] contrast-[1.05]"
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.fullName}
              fetchPriority="high"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[40%] bg-gradient-to-b from-transparent to-black/90" />

            <div className="absolute right-5 bottom-5 left-5 z-[4] flex items-end justify-between gap-4 border-t border-white/25 pt-4 font-mono text-[0.6rem] font-bold tracking-[0.07em] text-white/65 uppercase">
              <span>{PERSONAL_INFO.headline}</span>

              <span>Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
