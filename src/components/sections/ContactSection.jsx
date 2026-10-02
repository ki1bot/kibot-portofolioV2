import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section className="portfolio-texture portfolio-section" id="contact">
      <div className="portfolio-shell section-shell contact-shell">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div className="contact-card" data-reveal="scale">
          <div className="contact-avatar">
            <div className="contact-avatar-ring" />

            <div className="contact-avatar-inner">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div className="contact-copy">
            <h3>RIFQI SUSANTO</h3>

            <p>
              Information Systems student and Software Engineer focused on
              practical web and mobile application development.
            </p>
          </div>

          <a className="contact-button" href={`mailto:${PERSONAL_INFO.email}`}>
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
