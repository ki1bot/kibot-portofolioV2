import { useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#eeeae0]/90 backdrop-blur-xl dark:border-white/15 dark:bg-[#080808]/90">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1240px] items-center justify-between gap-7 px-6 max-[700px]:min-h-[68px] max-[700px]:px-[15px]">
        <a
          className="inline-flex items-center text-2xl font-black tracking-[-0.08em] max-[480px]:text-xl"
          href="#home"
          onClick={closeMenu}
        >
          RIFQI<span className="text-[#9fbe00] dark:text-[#d8ff3e]">.</span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 min-[901px]:flex"
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item) => (
            <a
              className="text-[0.72rem] font-extrabold tracking-[0.12em] text-[#3d3b37] uppercase transition-colors hover:text-[#718800] dark:text-[#cbc7bd] dark:hover:text-[#d8ff3e]"
              href={`#${item.target}`}
              key={item.target}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="min-h-[38px] cursor-pointer border border-black/20 bg-[#f7f3e9] px-3.5 text-[0.72rem] font-extrabold tracking-[0.12em] text-[#3d3b37] uppercase transition hover:-translate-y-px hover:border-black/40 dark:border-white/20 dark:bg-[#121212] dark:text-[#cbc7bd] dark:hover:border-white/40 max-[700px]:min-h-9 max-[700px]:px-2.5 max-[700px]:text-[0.64rem]"
            onClick={onToggleTheme}
            aria-label={`Gunakan tema ${theme === "dark" ? "terang" : "gelap"}`}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>

          <button
            type="button"
            className="relative hidden h-[38px] w-[42px] cursor-pointer border border-black/20 bg-[#f7f3e9] dark:border-white/20 dark:bg-[#121212] max-[900px]:block max-[700px]:h-9 max-[700px]:w-10"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Buka navigasi"
            aria-expanded={menuOpen}
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-[18px] -translate-x-1/2 bg-[#111111] transition-transform dark:bg-[#f4f1e8] ${
                menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[4px]"
              }`}
            />

            <span
              className={`absolute left-1/2 top-1/2 block h-px w-[18px] -translate-x-1/2 bg-[#111111] transition-transform dark:bg-[#f4f1e8] ${
                menuOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        className={`fixed inset-x-0 top-[77px] z-40 grid overflow-hidden border-b bg-[#eeeae0] transition-all duration-200 dark:bg-[#080808] min-[901px]:hidden max-[700px]:top-[69px] ${
          menuOpen
            ? "max-h-[520px] border-black/15 opacity-100 dark:border-white/15"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-label="Navigasi mobile"
      >
        {NAV_ITEMS.map((item, index) => (
          <a
            className="mx-auto grid w-full max-w-[1240px] grid-cols-[46px_1fr] border-b border-black/15 px-6 py-[17px] text-xl font-black tracking-[-0.035em] uppercase dark:border-white/15 max-[700px]:px-[15px]"
            href={`#${item.target}`}
            key={item.target}
            onClick={closeMenu}
          >
            <span className="font-mono text-[0.66rem] text-[#718800] dark:text-[#d8ff3e]">
              {String(index + 1).padStart(2, "0")}
            </span>

            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
