import { NAV_ITEMS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#home">
            RIFQI<span>.</span>
          </a>

          <p>
            Information Systems Student &amp; Software Engineer focused on
            building practical digital products.
          </p>
        </div>

        <div className="footer-nav">
          <p>// NAVIGATE</p>

          {NAV_ITEMS.map((item) => (
            <a href={`#${item.target}`} key={item.target}>
              {item.label}
              <span>→</span>
            </a>
          ))}
        </div>

        <div className="footer-info">
          <p>// INFO</p>

          <span>{PERSONAL_INFO.location}</span>

          <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>

          <span>© {new Date().getFullYear()} Rifqi</span>
        </div>
      </div>
    </footer>
  );
}
