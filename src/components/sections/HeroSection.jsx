import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

export function HeroSection({ projectCount, certificateCount }) {
  return (
    <>
      <section
        className="min-h-svh border-b border-black/15 px-0 pt-[150px] pb-[72px] dark:border-white/15 max-[900px]:pt-[132px] max-[700px]:pt-28 max-[700px]:pb-[54px]"
        id="home"
      >
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] items-center gap-[clamp(44px,7vw,96px)] px-6 max-[900px]:grid-cols-1 max-[700px]:gap-11 max-[700px]:px-[15px]">
          <div className="relative" data-reveal>
            <p className="mb-[38px] inline-flex items-center gap-2.5 border border-black/20 bg-[#f7f3e9] px-3 py-[9px] text-[0.7rem] font-extrabold tracking-[0.13em] text-[#3d3b37] uppercase dark:border-white/20 dark:bg-[#121212] dark:text-[#cbc7bd] max-[700px]:mb-[26px]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#9fbe00] shadow-[0_0_0_5px_rgba(184,223,20,0.15)] dark:bg-[#d8ff3e] dark:shadow-[0_0_0_5px_rgba(216,255,62,0.13)]" />
              {PERSONAL_INFO.role}
            </p>

            <p className="mb-1.5 font-mono text-[clamp(0.78rem,1.4vw,0.95rem)] font-bold tracking-[0.12em] text-[#68665f] uppercase dark:text-[#a7a49d]">
              Hi, I&apos;m
            </p>

            <h1 className="grid text-[clamp(4.4rem,10.8vw,9.2rem)] font-black leading-[0.82] tracking-[-0.085em] uppercase max-[700px]:text-[clamp(4rem,20vw,6.8rem)] max-[480px]:text-[clamp(3.5rem,19vw,5.2rem)]">
              RIFQI
              <span className="text-outline">SUSANTO</span>
            </h1>

            <p className="mt-9 max-w-[700px] text-[clamp(1rem,1.7vw,1.18rem)] leading-[1.8] text-[#3d3b37] dark:text-[#cbc7bd] max-[700px]:mt-[26px]">
              Mahasiswa Sistem Informasi yang membangun website dan aplikasi
              dengan fokus pada struktur yang jelas, pengalaman pengguna, dan
              implementasi yang benar-benar bisa dipakai.
            </p>

            <div className="mt-[34px] flex flex-wrap gap-3.5 max-[700px]:grid max-[700px]:grid-cols-1">
              <a
                className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-[#a8cc12] bg-[#b8df14] px-5 text-[0.76rem] font-black tracking-[0.08em] text-[#101010] uppercase shadow-[6px_6px_0_#151515] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#151515] dark:border-[#d8ff3e] dark:bg-[#d8ff3e] dark:text-[#090909] dark:shadow-[6px_6px_0_#000000] dark:hover:shadow-[9px_9px_0_#000000]"
                href="#projects"
              >
                View projects
                <span>↘</span>
              </a>

              <a
                className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-black/30 bg-[#f7f3e9] px-5 text-[0.76rem] font-black tracking-[0.08em] uppercase transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white dark:border-white/30 dark:bg-[#121212] dark:hover:bg-[#181818]"
                href="#contact"
              >
                Contact me
                <span>↗</span>
              </a>
            </div>

            <div className="mt-[34px] flex flex-wrap gap-x-[26px] gap-y-3 font-mono text-[0.72rem] text-[#68665f] dark:text-[#a7a49d] max-[700px]:grid max-[700px]:gap-2">
              <a
                className="transition-colors hover:text-[#718800] dark:hover:text-[#d8ff3e]"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                {PERSONAL_INFO.email}
              </a>

              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          <div
            className="relative w-full max-w-[500px] justify-self-end max-[900px]:max-w-[580px] max-[900px]:justify-self-start"
            data-reveal
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-black/30 bg-[#f7f3e9] shadow-[18px_18px_0_rgba(17,17,17,0.15)] dark:border-white/30 dark:bg-[#121212] dark:shadow-[18px_18px_0_rgba(47,47,47,0.7)] max-[900px]:aspect-[5/4] max-[700px]:aspect-[4/5] max-[700px]:shadow-[10px_10px_0_rgba(17,17,17,0.15)] dark:max-[700px]:shadow-[10px_10px_0_rgba(47,47,47,0.7)]">
              <div className="profile-grid-pattern absolute inset-0" />

              <div className="absolute top-[8%] right-[8%] z-[1] aspect-square w-[44%] rounded-full bg-[#b8df14] dark:bg-[#d8ff3e]" />

              <img
                className="absolute inset-0 z-[2] h-full w-full object-cover object-center saturate-[0.86] contrast-[1.04]"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                fetchPriority="high"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[32%] bg-gradient-to-b from-transparent to-black/75" />

              <span className="absolute top-[18px] left-[18px] z-[4] bg-black/55 px-[9px] py-[7px] font-mono text-[0.67rem] font-bold tracking-[0.12em] text-[#f7f5ef] uppercase">
                01 / PROFILE
              </span>

              <span className="absolute right-5 bottom-[18px] left-5 z-[4] font-mono text-[0.67rem] font-bold tracking-[0.12em] text-[#f7f5ef] uppercase max-[480px]:text-[0.58rem]">
                &lt;build / learn / repeat&gt;
              </span>
            </div>

            <div
              className="absolute right-[-36px] bottom-[34px] z-[8] grid h-[116px] w-[116px] rotate-[9deg] place-items-center rounded-full border border-[#111111] bg-[#b8df14] font-mono text-[0.58rem] font-black tracking-[0.14em] text-[#101010] uppercase dark:border-[#f4f1e8] dark:bg-[#d8ff3e] dark:text-[#090909] max-[1080px]:right-[-16px] max-[700px]:right-[10px] max-[700px]:bottom-[18px] max-[700px]:h-[92px] max-[700px]:w-[92px]"
              aria-hidden="true"
            >
              <span>SOFTWARE</span>
              <strong className="text-2xl">↗</strong>
              <span>ENGINEER</span>
            </div>
          </div>
        </div>

        <div
          className="mx-auto mt-[76px] grid w-full max-w-[1240px] grid-cols-3 border-t border-l border-black/15 px-6 dark:border-white/15 max-[700px]:mt-[54px] max-[700px]:grid-cols-1 max-[700px]:px-[15px]"
          data-reveal
        >
          {[
            [projectCount, "Projects"],
            [certificateCount, "Certificates"],
            ["S1", "Information Systems"],
          ].map(([value, label]) => (
            <div
              className="flex min-h-[116px] items-end justify-between gap-5 border-r border-b border-black/15 bg-black/[0.025] p-[22px] dark:border-white/15 dark:bg-white/[0.025] max-[700px]:min-h-24"
              key={label}
            >
              <strong className="text-[clamp(2.3rem,5vw,4.4rem)] font-black leading-[0.85] tracking-[-0.07em]">
                {value}
              </strong>

              <span className="max-w-[110px] text-right text-[0.7rem] font-extrabold leading-[1.45] tracking-[0.08em] text-[#68665f] uppercase dark:text-[#a7a49d]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="overflow-hidden border-b border-black/15 bg-[#b8df14] text-[#101010] dark:border-white/15 dark:bg-[#d8ff3e] dark:text-[#090909]">
        <div className="ticker-track flex w-max">
          {[0, 1].map((group) => (
            <div
              className="flex shrink-0 items-center"
              key={group}
              aria-hidden={group === 1}
            >
              {TECH_STACK.map((item) => (
                <span
                  className="inline-flex items-center gap-[18px] whitespace-nowrap px-[18px] py-4 text-[0.74rem] font-black tracking-[0.08em] uppercase after:h-1.5 after:w-1.5 after:rounded-full after:bg-current after:content-['']"
                  key={`${group}-${item}`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
