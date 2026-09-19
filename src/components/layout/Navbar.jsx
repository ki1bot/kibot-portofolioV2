import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.target),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 901) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-8 px-6 max-[700px]:h-16 max-[700px]:px-4">
        <a
          className="group inline-flex items-center gap-2 text-xl font-black tracking-[-0.06em]"
          href="#home"
          onClick={closeMenu}
        >
          <span>RIFQI</span>

          <span className="h-2.5 w-2.5 bg-[#d8ff3e] transition-transform group-hover:rotate-45" />
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 min-[901px]:flex"
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item, index) => {
            const active = activeSection === item.target;

            return (
              <a
                className={`group flex items-center gap-2 font-mono text-[0.64rem] font-black tracking-[0.1em] uppercase transition-colors ${
                  active ? "text-white" : "text-white/42 hover:text-white"
                }`}
                href={`#${item.target}`}
                key={item.target}
              >
                <span
                  className={`text-[0.55rem] ${
                    active ? "text-[#d8ff3e]" : "text-white/20"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          className="hidden min-h-10 items-center justify-center border border-white/20 px-4 font-mono text-[0.63rem] font-black tracking-[0.09em] uppercase transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black min-[901px]:inline-flex"
          href="#contact"
        >
          Let&apos;s talk ↗
        </a>

        <button
          type="button"
          className="relative h-10 w-10 cursor-pointer border border-white/20 bg-white/[0.025] min-[901px]:hidden"
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
        className={`fixed inset-x-0 top-[73px] z-40 overflow-hidden border-b bg-[#090909] transition-all duration-300 min-[901px]:hidden max-[700px]:top-[65px] ${
          menuOpen
            ? "max-h-[520px] border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-label="Navigasi mobile"
      >
        <div className="mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-4">
          {NAV_ITEMS.map((item, index) => (
            <a
              className="grid grid-cols-[44px_1fr_auto] items-center border-b border-white/10 py-4 text-lg font-black uppercase"
              href={`#${item.target}`}
              key={item.target}
              onClick={closeMenu}
            >
              <span className="font-mono text-[0.61rem] text-[#d8ff3e]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.label}</span>

              <span className="font-mono text-white/20">↘</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
