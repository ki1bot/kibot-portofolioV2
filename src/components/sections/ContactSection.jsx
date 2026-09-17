import { CommentSection } from "../contact/CommentSection";
import { ContactForm } from "../contact/ContactForm";
import { SectionHeading } from "../common/SectionHeading";
import { SOCIAL_LINKS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function ContactSection({ comments, onCommentAdded, loading }) {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="site-container">
        <SectionHeading
          eyebrow="Get in touch"
          title="CONTACT"
          accent="ME."
          description="Punya project, ide kolaborasi, atau ingin berdiskusi soal pengembangan software? Hubungi saya melalui form atau kanal di bawah."
        />

        <div className="contact-grid">
          <div className="contact-profile" data-reveal>
            <div className="contact-profile-top">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
              />

              <div>
                <p>Software Engineer</p>

                <h3>{PERSONAL_INFO.fullName}</h3>

                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <p className="contact-profile-copy">
              Saya terbuka untuk diskusi project, kolaborasi, pengembangan
              produk, dan percakapan teknis yang relevan dengan software
              development.
            </p>

            <div className="social-list">
              {SOCIAL_LINKS.map((item) => (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  key={item.label}
                >
                  <span>{item.label}</span>

                  <strong>{item.value}</strong>

                  <b>↗</b>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card" data-reveal>
            <div className="form-card-heading">
              <span>START A CONVERSATION</span>

              <strong>02 / CONTACT</strong>
            </div>

            <ContactForm />
          </div>
        </div>

        {!loading ? (
          <CommentSection comments={comments} onAdded={onCommentAdded} />
        ) : null}
      </div>
    </section>
  );
}
