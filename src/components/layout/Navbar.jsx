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
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -66% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-[18px] left-1/2 z-[100] -translate-x-1/2 max-[760px]:top-3">
      <nav
        className="flex items-center gap-0.5 rounded-full border border-black/25 bg-white/80 p-[7px] shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-[18px] dark:border-white/20 dark:bg-[#0d0d0d]/80 max-[760px]:gap-0 max-[760px]:p-1.5"
        aria-label="Navigasi utama"
      >
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.target;

          return (
            <a
              className={`flex h-[34px] min-w-9 items-center justify-center rounded-full border px-2.5 text-[#555] transition-all duration-200 dark:text-[#aaa] max-[760px]:h-8 max-[760px]:min-w-8 max-[760px]:px-2 max-[520px]:min-w-[30px] max-[520px]:px-[7px] ${
                active
                  ? "gap-[7px] border-[#ffd400]/35 bg-[#ffd400]/10 text-[#b28d00] dark:text-[#ffd400] max-[520px]:gap-[5px]"
                  : "gap-0 border-transparent hover:text-[#111] dark:hover:text-white"
              }`}
              href={`#${item.target}`}
              key={item.target}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <NavIcon name={item.icon} size={15} />

              <span
                className={`overflow-hidden whitespace-nowrap font-mono text-[0.68rem] font-black tracking-[0.035em] uppercase transition-all duration-200 max-[520px]:text-[0.59rem] ${
                  active
                    ? "w-auto max-w-[110px] opacity-100 max-[520px]:max-w-[78px]"
                    : "w-0 max-w-0 opacity-0"
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
