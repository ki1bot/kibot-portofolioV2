import { NAV_ITEMS } from "../../data/portfolioPage";
import { SOCIAL_LINKS } from "../../data/site";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { HugeIcon } from "../common/HugeIcon";

export function Footer() {
  const footerSocials = SOCIAL_LINKS.slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="portfolio-shell footer-grid">
        <div className="footer-brand">
          <a href="#home">RIFQI</a>

          <p>
            Software Engineer dan mahasiswa Sistem Informasi yang berfokus pada
            pengembangan web, mobile, backend, database, serta produk digital
            yang mudah dipelihara.
          </p>

          <div className="footer-socials">
            {footerSocials.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.label}
                aria-label={item.label}
                title={item.label}
              >
                <HugeIcon icon={item.icon} size={16} strokeWidth={1.7} />
              </a>
            ))}
          </div>

          <small>© {new Date().getFullYear()} All Rights Reserved</small>
        </div>

        <div className="footer-panel">
          <h4>// NAVIGATE</h4>

          <nav>
            {NAV_ITEMS.map((item) => (
              <a href={`#${item.target}`} key={item.target}>
                → {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-panel">
          <h4>// INFO</h4>

          <div className="footer-info">
            <p>
              <strong>Location:</strong> {PERSONAL_INFO.location}
            </p>

            <p>
              <strong>Status:</strong> Open to work
            </p>

            <p>
              <strong>Role:</strong> {PERSONAL_INFO.headline}
            </p>

            <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
