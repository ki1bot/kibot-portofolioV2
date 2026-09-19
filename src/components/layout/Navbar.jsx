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
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.12, 0.3, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-[18px] left-1/2 z-[100] -translate-x-1/2 max-[760px]:top-3">
      <nav
        className="flex items-center rounded-full border border-black/15 bg-white/82 p-[6px] shadow-[0_10px_36px_rgba(0,0,0,0.12)] backdrop-blur-[18px] dark:border-white/12 dark:bg-[#0d0d0d]/86 max-[760px]:p-[5px]"
        aria-label="Navigasi utama"
      >
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.target;

          return (
            <a
              className={`flex h-[34px] min-w-[35px] items-center justify-center rounded-full border px-[9px] transition-all duration-200 max-[520px]:h-[31px] max-[520px]:min-w-[31px] max-[520px]:px-[7px] ${
                active
                  ? "gap-2 border-[#ffd400]/40 bg-[#ffd400]/10 text-[#a88400] dark:text-[#ffd400]"
                  : "gap-0 border-transparent text-[#5d5d5d] hover:text-[#111] dark:text-[#999] dark:hover:text-white"
              }`}
              href={`#${item.target}`}
              key={item.target}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <NavIcon name={item.icon} size={15} />

              <span
                className={`overflow-hidden whitespace-nowrap font-mono text-[0.64rem] font-black tracking-[0.05em] uppercase transition-all duration-200 max-[520px]:text-[0.56rem] ${
                  active ? "max-w-[112px] opacity-100" : "max-w-0 opacity-0"
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
