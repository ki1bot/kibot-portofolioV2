import { useState } from "react";
import { NAV_ITEMS } from "../../data/portfolioPage";

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-container nav-bar">
        <a className="brand" href="#home" onClick={closeMenu}>
          RIFQI<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => (
            <a href={`#${item.target}`} key={item.target}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Gunakan tema ${theme === "dark" ? "terang" : "gelap"}`}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Buka navigasi"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Navigasi mobile"
      >
        {NAV_ITEMS.map((item, index) => (
          <a href={`#${item.target}`} key={item.target} onClick={closeMenu}>
            <span>{String(index + 1).padStart(2, "0")}</span>

            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
