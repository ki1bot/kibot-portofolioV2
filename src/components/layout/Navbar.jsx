import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";
import { NavIcon } from "../common/NavIcon";

const INACTIVE_ITEM_WIDTH = 42;

const ACTIVE_ITEM_WIDTHS = {
  home: 92,
  about: 100,
  journey: 132,
  projects: 122,
  certificates: 150,
  contact: 116,
};

const ACTIVE_LABEL_LEFT = {
  home: 34,
  about: 37,
  journey: 37,
  projects: 37,
  certificates: 37,
  contact: 37,
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const programmaticScrollRef = useRef(false);
  const unlockTimerRef = useRef(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.target),
    ).filter(Boolean);

    let frameId = null;

    const releaseNavigationLock = () => {
      programmaticScrollRef.current = false;

      if (unlockTimerRef.current !== null) {
        window.clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = null;
      }
    };

    const updateActiveSection = () => {
      frameId = null;

      if (programmaticScrollRef.current) {
        return;
      }

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
      if (programmaticScrollRef.current || frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const handleManualScrollStart = () => {
      if (!programmaticScrollRef.current) {
        return;
      }

      releaseNavigationLock();

      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    const handleKeyDown = (event) => {
      const scrollKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];

      if (scrollKeys.includes(event.key)) {
        handleManualScrollStart();
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scrollend", releaseNavigationLock, {
      passive: true,
    });
    window.addEventListener("wheel", handleManualScrollStart, {
      passive: true,
    });
    window.addEventListener("touchstart", handleManualScrollStart, {
      passive: true,
    });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scrollend", releaseNavigationLock);
      window.removeEventListener("wheel", handleManualScrollStart);
      window.removeEventListener("touchstart", handleManualScrollStart);
      window.removeEventListener("keydown", handleKeyDown);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      if (unlockTimerRef.current !== null) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  const handleNavigation = (event, target) => {
    event.preventDefault();

    const section = document.getElementById(target);

    if (!section) {
      return;
    }

    if (unlockTimerRef.current !== null) {
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = null;
    }

    programmaticScrollRef.current = true;
    setActiveSection(target);
    window.history.replaceState(null, "", `#${target}`);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    unlockTimerRef.current = window.setTimeout(() => {
      programmaticScrollRef.current = false;
      unlockTimerRef.current = null;
    }, 1500);
  };

  return (
    <header className="fixed top-[17px] left-1/2 z-[100] -translate-x-1/2 max-[520px]:top-3">
      <nav
        className="main-navigation flex items-center rounded-full border border-black/10 bg-white/52 p-[6px] shadow-[0_12px_34px_rgba(0,0,0,0.11),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[16px] dark:border-white/[0.11] dark:bg-[#090909]/58 dark:shadow-[0_12px_34px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.025)] max-[520px]:p-[5px]"
        aria-label="Navigasi utama"
      >
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.target;
          const label =
            item.target === "certificates" ? "Certificates" : item.label;
          const activeWidth = ACTIVE_ITEM_WIDTHS[item.target] ?? 116;
          const labelLeft = ACTIVE_LABEL_LEFT[item.target] ?? 37;

          return (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => handleNavigation(event, item.target)}
              aria-label={label}
              aria-current={active ? "location" : undefined}
              title={!active ? label : undefined}
              style={{
                "--item-width": `${active ? activeWidth : INACTIVE_ITEM_WIDTH}px`,
              }}
              className={`group relative h-[37px] w-[var(--item-width)] shrink-0 transform-gpu overflow-hidden rounded-full border outline-none transition-[width,color,background-color,border-color,box-shadow] duration-[430ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[width] focus-visible:ring-2 focus-visible:ring-[#f4bb16]/45 max-[520px]:h-[38px] ${
                active
                  ? "border-[#bc900d]/35 bg-[#ffd400]/13 shadow-[inset_0_1px_0_rgba(255,214,70,0.055)] dark:border-[#7a5e10] dark:bg-[#2a2108]/82"
                  : "border-transparent"
              }`}
            >
              <span
                className={`absolute inset-y-0 left-[10px] flex w-[18px] items-center justify-center transform-gpu transition-[color,transform] duration-300 ${
                  active
                    ? "scale-100 text-[#a67f00] dark:text-[#f1bd17]"
                    : "scale-[0.98] text-[#555] group-hover:scale-100 group-hover:text-[#9b7700] dark:text-[#e6e6e2] dark:group-hover:text-[#f1bd17]"
                }`}
              >
                <NavIcon name={item.icon} size={16} />
              </span>

              <span
                style={{ left: `${labelLeft}px` }}
                className={`absolute inset-y-0 flex items-center whitespace-nowrap transition-[opacity,transform] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? "translate-x-0 opacity-100 delay-[90ms]"
                    : "-translate-x-[4px] opacity-0 delay-0"
                }`}
              >
                <span className="block text-[11px] leading-none font-black tracking-[0.045em] text-[#9b7700] uppercase dark:text-[#f1bd17] max-[520px]:text-[10px]">
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
