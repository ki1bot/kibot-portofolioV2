import { NAV_ITEMS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070707]">
      <div className="overflow-hidden border-b border-white/10 py-8">
        <p className="pointer-events-none whitespace-nowrap text-center text-[clamp(4.5rem,13vw,12rem)] font-black leading-[0.75] tracking-[-0.085em] text-white/[0.025] uppercase">
          RIFQI SUSANTO · RIFQI SUSANTO
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1.35fr_0.7fr_0.95fr] gap-12 px-6 py-16 max-[900px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:px-4">
        <div className="max-[900px]:col-span-2 max-[700px]:col-auto">
          <a
            className="inline-flex items-center gap-3 text-[clamp(2.6rem,6vw,5rem)] font-black leading-none tracking-[-0.075em]"
            href="#home"
          >
            RIFQI
            <span className="h-4 w-4 bg-[#d8ff3e]" />
          </a>

          <p className="mt-6 max-w-[470px] text-[0.91rem] leading-[1.85] text-white/42">
            Information Systems student and Software Engineer focused on
            practical, maintainable, and user-focused web and mobile products.
          </p>

          <a
            className="mt-7 inline-flex items-center gap-3 font-mono text-[0.62rem] font-black tracking-[0.09em] text-[#d8ff3e] uppercase transition-colors hover:text-white"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            {PERSONAL_INFO.email}
            <span>↗</span>
          </a>

          <p className="mt-10 font-mono text-[0.57rem] tracking-[0.07em] text-white/22 uppercase">
            © {new Date().getFullYear()} Rifqi Susanto. All rights reserved.
          </p>
        </div>

        <div className="grid content-start gap-3">
          <p className="mb-3 font-mono text-[0.61rem] font-black tracking-[0.11em] text-[#d8ff3e] uppercase">
            // Navigate
          </p>

          {NAV_ITEMS.map((item, index) => (
            <a
              className="group flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-[0.82rem] text-white/42 transition-colors hover:text-white"
              href={`#${item.target}`}
              key={item.target}
            >
              <span>
                <span className="mr-3 font-mono text-[0.55rem] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.label}
              </span>

              <span className="text-white/15 transition-colors group-hover:text-[#d8ff3e]">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <p className="mb-3 font-mono text-[0.61rem] font-black tracking-[0.11em] text-[#d8ff3e] uppercase">
            // Info
          </p>

          <div className="border-b border-white/10 pb-4">
            <span className="block font-mono text-[0.55rem] tracking-[0.06em] text-white/22 uppercase">
              Location
            </span>

            <span className="mt-2 block text-[0.82rem] leading-[1.6] text-white/42">
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="border-b border-white/10 pb-4">
            <span className="block font-mono text-[0.55rem] tracking-[0.06em] text-white/22 uppercase">
              Status
            </span>

            <span className="mt-2 flex items-center gap-2 text-[0.82rem] text-white/42">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8ff3e]" />
              Open to work
            </span>
          </div>

          <div className="border-b border-white/10 pb-4">
            <span className="block font-mono text-[0.55rem] tracking-[0.06em] text-white/22 uppercase">
              Role
            </span>

            <span className="mt-2 block text-[0.82rem] text-white/42">
              {PERSONAL_INFO.headline}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-3 font-mono text-[0.59rem] font-black tracking-[0.06em] text-white/32 uppercase">
            <a
              className="transition-colors hover:text-[#d8ff3e]"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="transition-colors hover:text-[#d8ff3e]"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="transition-colors hover:text-[#d8ff3e]"
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
