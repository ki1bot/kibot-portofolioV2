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
    <header className="floating-nav-wrap">
      <nav className="floating-nav" aria-label="Navigasi utama">
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.target;

          return (
            <a
              className={`floating-nav-item ${active ? "is-active" : ""}`}
              href={`#${item.target}`}
              key={item.target}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <NavIcon name={item.icon} size={15} />

              <span className="floating-nav-label">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
