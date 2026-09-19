import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";

export function EducationSection() {
  return (
    <section className="pattern-section journey-section" id="journey">
      <div className="section-container">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="JOURNEY."
          description="The education path that shaped my technical foundation, problem-solving process, and interest in software development."
        />

        <div className="journey-timeline">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className={`journey-item ${index === 0 ? "is-current" : ""}`}
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <span className="journey-node" aria-hidden="true">
                <i />
              </span>

              <div className="journey-card">
                <div className="journey-card-head">
                  <span className="journey-badge">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{item.title}</h3>

                    <strong>{item.subtitle}</strong>

                    <time>{item.period}</time>
                  </div>
                </div>

                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="journey-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
