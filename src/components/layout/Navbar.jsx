import { useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between gap-8 px-6 max-[700px]:h-16 max-[700px]:px-4">
        <a
          className="text-xl font-black tracking-[-0.06em] text-white"
          href="#home"
          onClick={closeMenu}
        >
          RIFQI
          <span className="text-[#d8ff3e]">.</span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 min-[901px]:flex"
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item) => (
            <a
              className="font-mono text-[0.67rem] font-bold tracking-[0.11em] text-white/50 uppercase transition-colors hover:text-white"
              href={`#${item.target}`}
              key={item.target}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden min-h-10 items-center justify-center border border-white/20 px-4 font-mono text-[0.65rem] font-black tracking-[0.09em] text-white uppercase transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black min-[901px]:inline-flex"
          href="#contact"
        >
          Contact ↗
        </a>

        <button
          type="button"
          className="relative h-10 w-10 cursor-pointer border border-white/20 bg-white/[0.03] min-[901px]:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Buka navigasi"
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-white transition-transform ${
              menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[5px]"
            }`}
          />

          <span
            className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-white transition-transform ${
              menuOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </div>

      <nav
        className={`fixed inset-x-0 top-[73px] z-40 overflow-hidden border-b bg-[#090909] transition-all duration-200 min-[901px]:hidden max-[700px]:top-[65px] ${
          menuOpen
            ? "max-h-[520px] border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-label="Navigasi mobile"
      >
        <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
          {NAV_ITEMS.map((item, index) => (
            <a
              className="grid grid-cols-[42px_1fr] items-center border-b border-white/10 py-4 text-lg font-black uppercase"
              href={`#${item.target}`}
              key={item.target}
              onClick={closeMenu}
            >
              <span className="font-mono text-[0.62rem] text-[#d8ff3e]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
