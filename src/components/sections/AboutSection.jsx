import { TECH_CARDS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    ["🔥", "Student", "CURRENT STATUS"],
    ["🚀", projectCount, "PROJECTS SHIPPED"],
    ["🏆", certificateCount.replace("+", ""), "CERTIFICATIONS"],
    ["🎓", "S1", "INFORMATION SYSTEMS"],
  ];

  return (
    <section className="portfolio-texture portfolio-section" id="about">
      <div className="portfolio-shell section-shell">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="about-layout">
          <div className="about-copy" data-reveal="left">
            <p>
              Hey there! I&apos;m <strong>{PERSONAL_INFO.fullName}</strong>, an
              Information Systems student focused on software development across
              web and mobile applications.
            </p>

            <p>
              My work covers frontend, backend, databases, integrations, and
              deployment. I enjoy converting a clear problem into software that
              remains practical, understandable, and maintainable as it grows.
            </p>

            <div className="about-metrics">
              {metrics.map(([icon, value, label], index) => (
                <article
                  className={`metric-card${index === 3 ? " is-accented" : ""}`}
                  key={label}
                >
                  <span className="metric-icon">{icon}</span>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </article>
              ))}
            </div>

            <blockquote className="about-quote">
              <p>
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer>— MY PHILOSOPHY</footer>
            </blockquote>
          </div>

          <div className="about-stack" data-reveal="right">
            <p className="stack-kicker">// STACK &amp; TOOLS</p>

            <div className="tech-grid">
              {TECH_CARDS.map((item, index) => (
                <a
                  className="tech-card"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                    "--reveal-delay": `${Math.min(index * 18, 180)}ms`,
                  }}
                  key={item.name}
                  data-reveal="scale"
                  aria-label={`Buka website resmi ${item.name}`}
                  title={`Buka website resmi ${item.name}`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    draggable="false"
                    style={{
                      filter: item.invert ? "invert(1)" : undefined,
                    }}
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      const fallback = event.currentTarget.nextElementSibling;

                      if (fallback) {
                        fallback.hidden = false;
                      }
                    }}
                  />

                  <strong hidden>{item.mark}</strong>
                  <span>{item.name}</span>
                  <i>↗</i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
