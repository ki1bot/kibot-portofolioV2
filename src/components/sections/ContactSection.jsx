import { PERSONAL_INFO } from "../../lib/portfolio";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section className="pattern-section contact-section" id="contact">
      <div className="section-container">
        <SectionHeading eyebrow="Get in touch" title="CONTACT" accent="ME." />

        <div className="contact-card" data-reveal>
          <div className="contact-avatar-ring">
            <div className="contact-avatar">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                loading="lazy"
              />
            </div>
          </div>

          <div className="contact-copy">
            <h3>RIFQI</h3>

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
