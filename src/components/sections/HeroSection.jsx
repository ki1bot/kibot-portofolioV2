import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

const TAPE_TEXT = Array.from({ length: 14 }, () => "RIFQI SUSANTO");

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
      <div
        className={`hero-tape-track ${
          reverse ? "hero-tape-track-reverse" : ""
        }`}
      >
        {TAPE_TEXT.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection({ projectCount, certificateCount }) {
  const stats = [
    [projectCount, "Projects"],
    ["S1", "Information Systems"],
    [certificateCount, "Certs"],
  ];

  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" aria-hidden="true" />

      <Tape top="2%" rotate={9} opacity={0.62} />

      <Tape top="12%" rotate={-11} opacity={0.92} reverse />

      <Tape top="43%" rotate={-12} opacity={0.92} />

      <Tape top="55%" rotate={13} opacity={0.96} reverse />

      <Tape top="73%" rotate={-14} opacity={0.86} />

      <Tape top="82%" rotate={12} opacity={0.58} reverse />

      <div className="hero-inner">
        <div className="hero-copy" data-reveal>
          <span className="availability-pill">
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
            <a className="button-primary" href="#projects">
              <span>View Projects</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <NavIcon name="mail" size={15} />

              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="hero-location">
              <span className="location-dot" />
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>

        <div className="hero-profile-wrap" data-reveal>
          <div className="hero-profile-ring">
            <div className="hero-profile">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        className="scroll-indicator"
        href="#about"
        aria-label="Scroll ke bagian About"
      >
        <span />
      </a>
    </section>
  );
}
