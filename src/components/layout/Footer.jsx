import { NAV_ITEMS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#e4dfd4] py-16 dark:bg-[#121212]">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1.45fr_0.7fr_0.85fr] gap-[50px] px-6 max-[900px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:px-[15px]">
        <div className="max-[900px]:col-span-2 max-[700px]:col-auto">
          <a
            className="inline-flex items-center text-[clamp(2.6rem,6vw,5.5rem)] font-black leading-none tracking-[-0.08em]"
            href="#home"
          >
            RIFQI
            <span className="text-[#9fbe00] dark:text-[#d8ff3e]">.</span>
          </a>

          <p className="mt-5 max-w-[470px] leading-[1.7] text-[#68665f] dark:text-[#a7a49d]">
            Information Systems Student &amp; Software Engineer focused on
            building practical digital products.
          </p>
        </div>

        <div className="grid content-start gap-3">
          <p className="mb-1.5 font-mono text-[0.66rem] font-extrabold tracking-[0.08em] text-[#718800] dark:text-[#d8ff3e]">
            // NAVIGATE
          </p>

          {NAV_ITEMS.map((item) => (
            <a
              className="flex items-center justify-between border-b border-black/15 pb-2 text-[0.82rem] leading-[1.6] text-[#68665f] transition-colors hover:text-[#111111] dark:border-white/15 dark:text-[#a7a49d] dark:hover:text-[#f4f1e8]"
              href={`#${item.target}`}
              key={item.target}
            >
              {item.label}

              <span>→</span>
            </a>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <p className="mb-1.5 font-mono text-[0.66rem] font-extrabold tracking-[0.08em] text-[#718800] dark:text-[#d8ff3e]">
            // INFO
          </p>

          <span className="text-[0.82rem] leading-[1.6] text-[#68665f] dark:text-[#a7a49d]">
            {PERSONAL_INFO.location}
          </span>

          <a
            className="text-[0.82rem] leading-[1.6] text-[#68665f] transition-colors hover:text-[#111111] dark:text-[#a7a49d] dark:hover:text-[#f4f1e8]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            {PERSONAL_INFO.email}
          </a>

          <span className="text-[0.82rem] leading-[1.6] text-[#68665f] dark:text-[#a7a49d]">
            © {new Date().getFullYear()} Rifqi Susanto
          </span>
        </div>
      </div>
    </footer>
  );
}
