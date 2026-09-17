import { NAV_ITEMS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0b] py-16">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[1.35fr_0.7fr_0.95fr] gap-12 px-6 max-[900px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:px-4">
        <div className="max-[900px]:col-span-2 max-[700px]:col-auto">
          <a
            className="inline-flex items-center text-[clamp(2.6rem,6vw,5rem)] font-black leading-none tracking-[-0.075em]"
            href="#home"
          >
            RIFQI
            <span className="text-[#d8ff3e]">.</span>
          </a>

          <p className="mt-5 max-w-[450px] text-[0.9rem] leading-[1.8] text-white/45">
            Information Systems student and Software Engineer focused on
            practical, maintainable web and mobile products.
          </p>

          <p className="mt-8 font-mono text-[0.61rem] tracking-[0.06em] text-white/30 uppercase">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <div className="grid content-start gap-3">
          <p className="mb-2 font-mono text-[0.63rem] font-black tracking-[0.09em] text-[#d8ff3e] uppercase">
            // Navigate
          </p>

          {NAV_ITEMS.map((item) => (
            <a
              className="flex items-center gap-2 border-b border-white/10 pb-2.5 text-[0.82rem] text-white/45 transition-colors hover:text-white"
              href={`#${item.target}`}
              key={item.target}
            >
              <span className="text-[#d8ff3e]">→</span>

              {item.label}
            </a>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <p className="mb-2 font-mono text-[0.63rem] font-black tracking-[0.09em] text-[#d8ff3e] uppercase">
            // Info
          </p>

          <div className="border-b border-white/10 pb-3">
            <span className="block font-mono text-[0.58rem] text-white/28 uppercase">
              Location
            </span>

            <span className="mt-1 block text-[0.82rem] leading-[1.5] text-white/48">
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="border-b border-white/10 pb-3">
            <span className="block font-mono text-[0.58rem] text-white/28 uppercase">
              Availability
            </span>

            <span className="mt-1 block text-[0.82rem] text-white/48">
              Open to work
            </span>
          </div>

          <a
            className="pt-1 text-[0.82rem] text-white/45 transition-colors hover:text-[#d8ff3e]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
