import { PERSONAL_INFO } from "../../lib/portfolio";

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    ["S1", "Information Systems"],
    [certificateCount, "Certs"],
  ];

  return (
    <section
      className="relative min-h-svh overflow-hidden border-b border-white/10 pt-[132px] pb-20 max-[700px]:pt-28"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(215,255,63,0.10),transparent_28rem)]" />

      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1.1fr)_minmax(330px,0.72fr)] items-center gap-[clamp(48px,8vw,112px)] px-6 max-[900px]:grid-cols-1 max-[700px]:px-4">
        <div data-reveal>
          <div className="mb-8 inline-flex items-center gap-2.5 border border-[#d7ff3f]/35 bg-[#d7ff3f]/[0.07] px-3 py-2 font-mono text-[0.68rem] font-bold tracking-[0.08em] text-[#d7ff3f] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#d7ff3f] shadow-[0_0_14px_#d7ff3f]" />
            Open to work
          </div>

          <h1 className="max-w-[760px] text-[clamp(3.7rem,8.7vw,7.4rem)] font-black leading-[0.88] tracking-[-0.075em] uppercase">
            <span className="block text-[0.26em] font-bold tracking-[0.02em] text-white/55 normal-case">
              Hi, I&apos;m
            </span>
            RIFQI
            <span className="block text-[#d7ff3f]">SUSANTO</span>
          </h1>

          <p className="mt-7 max-w-[680px] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.8] text-white/65">
            Software Engineer dan mahasiswa Sistem Informasi yang membangun web
            application dan mobile application dengan fokus pada struktur,
            usability, performa, dan maintainability.
          </p>

          <div className="mt-9 grid max-w-[620px] grid-cols-3 border-y border-white/10 max-[560px]:grid-cols-1">
            {stats.map(([value, label], index) => (
              <div
                className={`py-5 ${
                  index > 0
                    ? "border-l border-white/10 max-[560px]:border-l-0 max-[560px]:border-t"
                    : ""
                } ${index > 0 ? "pl-6 max-[560px]:pl-0" : ""}`}
                key={label}
              >
                <strong className="block text-3xl font-black tracking-[-0.05em] text-white">
                  {value}
                </strong>

                <span className="mt-1 block font-mono text-[0.62rem] font-bold tracking-[0.09em] text-white/45 uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
            <a
              className="inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#d7ff3f] px-6 font-mono text-[0.7rem] font-black tracking-[0.08em] text-[#090909] uppercase transition hover:-translate-y-1"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile ↗
            </a>

            <a
              className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-white/25 px-6 font-mono text-[0.7rem] font-black tracking-[0.08em] text-white uppercase transition hover:border-white hover:bg-white hover:text-black"
              href="#projects"
            >
              View Projects ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.68rem] text-white/45 max-[520px]:grid">
            <a
              className="transition-colors hover:text-[#d7ff3f]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              {PERSONAL_INFO.email}
            </a>

            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-[430px] max-[900px]:max-w-[520px]"
          data-reveal
        >
          <div className="absolute -top-5 -right-5 h-full w-full border border-[#d7ff3f]/35 max-[700px]:-top-3 max-[700px]:-right-3" />

          <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#111111]">
            <div className="profile-grid-pattern absolute inset-0 opacity-40" />

            <div className="absolute top-8 right-8 h-40 w-40 rounded-full bg-[#d7ff3f] blur-[1px] max-[520px]:h-28 max-[520px]:w-28" />

            <img
              className="absolute inset-0 z-[2] h-full w-full object-cover object-center saturate-[0.82] contrast-[1.06]"
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.fullName}
              fetchPriority="high"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[36%] bg-gradient-to-b from-transparent to-black/90" />

            <div className="absolute inset-x-5 bottom-5 z-[4] flex items-end justify-between gap-4 border-t border-white/25 pt-4 font-mono text-[0.62rem] tracking-[0.08em] text-white/70 uppercase">
              <span>{PERSONAL_INFO.headline}</span>

              <span>Bekasi, ID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
