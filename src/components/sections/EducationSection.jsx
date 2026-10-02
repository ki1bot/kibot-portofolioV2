import { JOURNEY_ITEMS } from "../../data/portfolioPage";
import { SectionHeading } from "../common/SectionHeading";
import { NavIcon } from "../common/NavIcon";

export function EducationSection() {
  return (
    <section className="portfolio-texture portfolio-section" id="journey">
      <div className="portfolio-shell section-shell">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="EXPERIENCE."
          description="My academic and technical journey, from vocational education to Information Systems at Universitas Gunadarma."
        />

        <div className="experience-timeline">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="experience-item"
              key={`${item.period}-${item.title}`}
              data-reveal
              style={{
                "--reveal-delay": `${index * 70}ms`,
              }}
            >
              <span className="experience-node" aria-hidden="true">
                <i />
              </span>

              <div
                className={`experience-card${index === 0 ? " is-current" : ""}`}
              >
                <div className="experience-head">
                  <span className="experience-icon">
                    <NavIcon name="briefcase" size={16} />
                  </span>

                  <div>
                    <span className="experience-category">{item.category}</span>
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

                <div className="experience-tags">
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
