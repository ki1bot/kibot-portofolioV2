import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";
import { NavIcon } from "../common/NavIcon";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.target),
    ).filter(Boolean);

    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;

      const marker = Math.min(window.innerHeight * 0.28, 260);
      let currentSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= marker) {
          currentSection = section.id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        currentSection = sections.at(-1)?.id ?? currentSection;
      }

      setActiveSection((current) =>
        current === currentSection ? current : currentSection,
      );
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleNavigation = (event, target) => {
    event.preventDefault();

    const section = document.getElementById(target);

    if (!section) {
      return;
    }

    setActiveSection(target);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${target}`);
  };

  return (
    <header className="fixed top-[18px] left-1/2 z-[100] -translate-x-1/2 max-[520px]:top-3">
      <nav
        className="flex items-center gap-0 rounded-full border border-black/10 bg-white/75 p-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-[14px] dark:border-white/10 dark:bg-[#0b0b0b]/78 dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)] max-[520px]:p-[6px]"
        aria-label="Navigasi utama"
      >
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.target;
          const label =
            item.target === "certificates" ? "Certificates" : item.label;

          return (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => handleNavigation(event, item.target)}
              aria-label={label}
              aria-current={active ? "location" : undefined}
              className={`flex h-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full border px-[14px] transition-[color,background-color,border-color,box-shadow] duration-200 ease-out max-[520px]:h-[32px] max-[520px]:px-[12px] ${
                active
                  ? "border-[#c6a300]/40 bg-[#ffd400]/12 text-[#9a7600] shadow-[inset_0_0_0_1px_rgba(255,212,0,0.02)] dark:border-[#ffd400]/30 dark:bg-[#ffd400]/12 dark:text-[#ffd400]"
                  : "border-transparent text-[#5f5f5f] hover:text-[#111] dark:text-[#dddddd] dark:hover:text-white"
              }`}
            >
              <span className="grid h-4 w-4 shrink-0 place-items-center">
                <NavIcon name={item.icon} size={16} />
              </span>

              <span
                className={`overflow-hidden whitespace-nowrap transition-[max-width,margin,opacity,transform] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? "ml-[10px] max-w-[150px] translate-x-0 opacity-100"
                    : "ml-0 max-w-0 -translate-x-1 opacity-0"
                }`}
              >
                <span className="block text-[12px] leading-none font-black tracking-[0.065em] uppercase max-[520px]:text-[10px]">
                  {label}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
