import { SectionHeading } from "../common/SectionHeading";
import { JOURNEY_ITEMS } from "../../data/portfolioPage";

export function EducationSection() {
  return (
    <section className="content-section journey-section" id="journey">
      <div className="site-container">
        <SectionHeading
          eyebrow="Learning path"
          title="MY"
          accent="JOURNEY."
          description="Riwayat pendidikan yang membentuk cara saya belajar, menyusun masalah, dan membangun software."
        />

        <div className="timeline">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="timeline-row"
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <div className="timeline-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="timeline-period">{item.period}</div>

              <div className="timeline-content">
                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>
              </div>

              <div className="timeline-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
