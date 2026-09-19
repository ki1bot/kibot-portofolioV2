import { NAV_ITEMS, SOCIAL_LINKS } from "../../data/portfolioPage";

import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  const footerSocials = SOCIAL_LINKS.filter(
    (item) => item.label !== "Email",
  ).slice(0, 4);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home">
            RIFQI
            <span>.</span>
          </a>

          <p>
            Software Engineer focused on web, mobile, backend, database, and
            maintainable digital products.
          </p>

          <small>© {new Date().getFullYear()} All Rights Reserved</small>
        </div>

        <div className="footer-column">
          <h4>// NAVIGATE</h4>

          {NAV_ITEMS.map((item) => (
            <a href={`#${item.target}`} key={item.target}>
              → {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column footer-info">
          <h4>// INFO</h4>

          <p>
            <span>Location:</span> {PERSONAL_INFO.location}
          </p>

          <p>
            <span>Status:</span> Open to work
          </p>

          <p>
            <span>Role:</span> {PERSONAL_INFO.headline}
          </p>

          <div className="footer-socials">
            {footerSocials.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
