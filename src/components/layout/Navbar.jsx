import { useEffect, useState } from "react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "../common/HugeIcon";
import { NAV_ITEMS } from "../../data/site";
import { scrollToSection } from "../../lib/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function go(target) {
    setOpen(false);
    scrollToSection(target);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3.5 transition-all duration-200 sm:px-5 ${
        scrolled ? "pt-2.5" : "pt-3.5"
      }`}
    >
      <div
        className={`mx-auto flex min-h-[60px] w-full max-w-[1180px] items-center justify-between rounded-[18px] border px-4 shadow-2xl shadow-slate-950/20 backdrop-blur-xl transition-colors duration-200 ${
          scrolled
            ? "border-violet-400/20 bg-slate-950/90"
            : "border-white/10 bg-slate-950/70"
        }`}
      >
        <button
          type="button"
          onClick={() => go("home")}
          className="inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent text-[1.05rem] font-extrabold text-white"
          aria-label="Kembali ke Home"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-fuchsia-400 shadow-[0_0_22px_rgba(167,139,250,0.85)]" />
          Rifqi
        </button>

        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => go(item.target)}
              className="cursor-pointer rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-violet-500/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-violet-400/30 hover:bg-violet-500/10 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          <HugeIcon icon={open ? Cancel01Icon : Menu01Icon} size={22} />
        </button>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 grid w-full max-w-[1180px] gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-2.5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:hidden"
          aria-label="Navigasi mobile"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => go(item.target)}
              className="cursor-pointer rounded-xl px-3.5 py-3 text-left text-sm font-semibold text-slate-300 transition hover:bg-violet-500/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
