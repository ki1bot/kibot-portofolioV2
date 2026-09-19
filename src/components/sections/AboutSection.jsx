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
    <section className="pattern-section about-section" id="about">
      <div className="section-container">
        <SectionHeading eyebrow="Who am I" title="ABOUT" accent="ME." />

        <div className="about-layout">
          <div className="about-copy" data-reveal>
            <p>
              Hey there! I&apos;m <strong>{PERSONAL_INFO.fullName}</strong>, an
              Information Systems student focused on software development across
              web and mobile applications.
            </p>

            <p>
              I work with frontend, backend, databases, integrations, and
              deployment. My goal is to turn a clear problem definition into
              software that is useful, maintainable, and straightforward to use.
            </p>

            <div className="about-metrics">
              {metrics.map(([icon, value, label]) => (
                <article className="metric-card" key={label}>
                  <span className="metric-icon" aria-hidden="true">
                    {icon}
                  </span>

                  <strong>{value}</strong>

                  <small>{label}</small>
                </article>
              ))}
            </div>

            <blockquote className="philosophy-card">
              <p>
                “Clean code should not only work, but remain understandable and
                maintainable as the project grows.”
              </p>

              <footer>— MY PHILOSOPHY</footer>
            </blockquote>
          </div>

          <div className="about-stack" data-reveal>
            <p className="stack-label">// STACK &amp; TOOLS</p>

            <div className="tech-grid">
              {TECH_CARDS.map((item) => (
                <article
                  className="tech-card"
                  style={{
                    backgroundColor: item.bg,
                    color: item.fg,
                  }}
                  key={item.name}
                >
                  <strong className="tech-mark">{item.mark}</strong>

                  <span>{item.name}</span>

                  <i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
