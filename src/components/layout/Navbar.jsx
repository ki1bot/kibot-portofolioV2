import { useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1180px] items-center justify-between gap-8 px-6 max-[700px]:min-h-[64px] max-[700px]:px-4">
        <a
          className="inline-flex items-center text-xl font-black tracking-[-0.06em]"
          href="#home"
          onClick={closeMenu}
        >
          RIFQI<span className="text-[#d7ff3f]">.</span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 min-[901px]:flex"
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item) => (
            <a
              className="font-mono text-[0.68rem] font-bold tracking-[0.1em] text-white/60 uppercase transition-colors hover:text-[#d7ff3f]"
              href={`#${item.target}`}
              key={item.target}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden min-h-10 items-center justify-center border border-white bg-white px-4 font-mono text-[0.68rem] font-black tracking-[0.08em] text-black uppercase transition hover:bg-[#d7ff3f] min-[901px]:inline-flex"
          href="#contact"
        >
          Let&apos;s talk ↗
        </a>

        <button
          type="button"
          className="relative hidden h-10 w-10 cursor-pointer border border-white/20 bg-white/[0.04] max-[900px]:block"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Buka navigasi"
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-white transition-transform ${
              menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-1"
            }`}
          />

          <span
            className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-white transition-transform ${
              menuOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <nav
        className={`fixed inset-x-0 top-[73px] z-40 grid overflow-hidden border-b bg-[#090909] transition-all duration-200 min-[901px]:hidden max-[700px]:top-[65px] ${
          menuOpen
            ? "max-h-[520px] border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-label="Navigasi mobile"
      >
        {NAV_ITEMS.map((item, index) => (
          <a
            className="mx-auto grid w-full max-w-[1180px] grid-cols-[42px_1fr] border-b border-white/10 px-6 py-4 text-lg font-black uppercase max-[700px]:px-4"
            href={`#${item.target}`}
            key={item.target}
            onClick={closeMenu}
          >
            <span className="font-mono text-[0.62rem] text-[#d7ff3f]">
              {String(index + 1).padStart(2, "0")}
            </span>

            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
