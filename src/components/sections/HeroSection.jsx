import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

export function HeroSection({ projectCount, certificateCount }) {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="site-container hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="status-pill">
              <span />
              {PERSONAL_INFO.role}
            </p>

            <p className="hero-intro">Hi, I&apos;m</p>

            <h1 className="hero-title">
              RIFQI
              <span className="hero-title-outline">SUSANTO</span>
            </h1>

            <p className="hero-summary">
              Mahasiswa Sistem Informasi yang membangun website dan aplikasi
              dengan fokus pada struktur yang jelas, pengalaman pengguna, dan
              implementasi yang benar-benar bisa dipakai.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
                <span>↘</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Contact me
                <span>↗</span>
              </a>
            </div>

            <div className="hero-meta">
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                {PERSONAL_INFO.email}
              </a>

              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="profile-frame">
              <div className="profile-grid" />

              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
                fetchPriority="high"
              />

              <span className="profile-index">01 / PROFILE</span>

              <span className="profile-code">
                &lt;build / learn / repeat&gt;
              </span>
            </div>

            <div className="profile-stamp" aria-hidden="true">
              <span>SOFTWARE</span>
              <strong>↗</strong>
              <span>ENGINEER</span>
            </div>
          </div>
        </div>

        <div className="site-container hero-stats" data-reveal>
          <div className="stat-box">
            <strong>{projectCount}</strong>

            <span>Projects</span>
          </div>

          <div className="stat-box">
            <strong>{certificateCount}</strong>

            <span>Certificates</span>
          </div>

          <div className="stat-box">
            <strong>S1</strong>

            <span>Information Systems</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Technology stack">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" key={group} aria-hidden={group === 1}>
              {TECH_STACK.map((item) => (
                <span className="ticker-item" key={`${group}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
