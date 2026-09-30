import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";
import { NavIcon } from "../common/NavIcon";

export function Navbar() {
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
        rootMargin: "-15% 0px -72% 0px",
        threshold: [0.02, 0.12, 0.3, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-[18px] left-1/2 z-[100] -translate-x-1/2 max-[760px]:top-3">
      <nav
        className="flex items-center gap-[2px] rounded-full border border-black/14 bg-white/75 p-[5px] shadow-[0_12px_42px_rgba(0,0,0,0.1)] backdrop-blur-[20px] dark:border-white/12 dark:bg-[#0c0c0c]/88 dark:shadow-[0_16px_50px_rgba(0,0,0,0.36)]"
        aria-label="Navigasi utama"
      >
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.target;

          return (
            <a
              className={`flex h-[35px] min-w-[35px] items-center justify-center rounded-full border px-[9px] transition-all duration-300 max-[520px]:h-[31px] max-[520px]:min-w-[31px] max-[520px]:px-[7px] ${
                active
                  ? "gap-2 border-[#ffd400]/35 bg-[#ffd400]/10 text-[#967500] shadow-[inset_0_0_0_1px_rgba(255,212,0,0.04)] dark:text-[#ffd400]"
                  : "gap-0 border-transparent text-[#656565] hover:text-[#111] dark:text-[#939393] dark:hover:text-white"
              }`}
              href={`#${item.target}`}
              key={item.target}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <NavIcon name={item.icon} size={14} />

              <span
                className={`overflow-hidden whitespace-nowrap font-mono text-[0.59rem] font-black tracking-[0.075em] uppercase transition-all duration-300 max-[520px]:text-[0.51rem] ${
                  active
                    ? "max-w-[105px] translate-x-0 opacity-100"
                    : "max-w-0 -translate-x-1 opacity-0"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
