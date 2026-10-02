import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 24 }, () => "RIFQI SUSANTO");

function Tape({ top, rotate, opacity = 1, reverse = false }) {
  return (
    <div
      className="hero-tape"
      style={{
        top,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        opacity,
      }}
      aria-hidden="true"
    >
      <div className={`hero-tape-track${reverse ? " is-reverse" : ""}`}>
        {TAPE_TEXT.map((text, index) => (
          <span key={`${text}-${index}`}>{text}</span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    ["S1", "Student"],
    [certificateCount, "Certs"],
  ];

  return (
    <section className="hero-surface" id="home">
      <Tape top="-5%" rotate={9} opacity={0.48} />
      <Tape top="12%" rotate={-8} opacity={0.88} reverse />
      <Tape top="40%" rotate={9} opacity={0.88} />
      <Tape top="55%" rotate={-10} opacity={0.96} reverse />
      <Tape top="73%" rotate={10} opacity={0.9} />
      <Tape top="89%" rotate={-9} opacity={0.56} reverse />

      <div className="portfolio-shell hero-shell">
        <div className="hero-copy" data-reveal="left">
          <span className="hero-status">
            <i />
            Open to work
          </span>

          <h1 className="hero-title">
            <span>Hi, I&apos;m</span>
            <strong>RIFQI SUSANTO</strong>
          </h1>

          <p className="hero-description">
            Information Systems student and Software Engineer focused on
            building practical web and mobile applications with maintainable
            architecture, clear interfaces, and reliable backend systems.
          </p>

          <div className="hero-stats">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a
              className="button-primary"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <NavIcon name="mail" size={15} />
              Contact Me
            </a>

            <a className="button-secondary" href="#projects">
              View Projects
            </a>
          </div>

          <div className="hero-contact-line">
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <NavIcon name="mail" size={14} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span>
              <i />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>

        <div className="hero-portrait-wrap" data-reveal="right">
          <div className="hero-portrait">
            <div className="hero-portrait-ring" />

            <div className="hero-portrait-inner">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll ke About">
        <span />
      </a>
    </section>
  );
}
