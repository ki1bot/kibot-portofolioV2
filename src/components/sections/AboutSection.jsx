import { SectionHeading } from "../common/SectionHeading";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function AboutSection({ projectCount, certificateCount }) {
  return (
    <section className="content-section" id="about">
      <div className="site-container about-grid">
        <SectionHeading
          eyebrow="About me"
          title="ABOUT"
          accent="ME."
          description="Saya lebih tertarik membangun produk yang punya alur jelas daripada sekadar membuat tampilan yang terlihat ramai."
        />

        <div className="about-content" data-reveal>
          <p className="about-lead">
            Saya {PERSONAL_INFO.fullName}, mahasiswa Sistem Informasi yang
            berfokus pada pengembangan software, terutama web application dan
            mobile application.
          </p>

          <p>
            Project yang saya kerjakan mencakup Laravel, React, Next.js,
            TypeScript, PostgreSQL, Flutter, Java, sampai Golang. Fokus saya
            bukan mengumpulkan teknologi sebanyak mungkin, tetapi memahami kapan
            sebuah teknologi layak dipakai dan bagaimana menyusun sistem yang
            tetap mudah dikembangkan.
          </p>

          <p>
            Portfolio ini menampilkan project yang benar-benar saya bangun,
            proses belajar yang saya jalani, serta teknologi yang sedang saya
            gunakan dan perdalam.
          </p>

          <div className="about-metrics">
            <div className="metric-card">
              <span>01</span>
              <strong>{projectCount}</strong>
              <p>Projects built</p>
            </div>

            <div className="metric-card">
              <span>02</span>
              <strong>{certificateCount}</strong>
              <p>Certificates</p>
            </div>

            <div className="metric-card">
              <span>03</span>
              <strong>2024</strong>
              <p>University start</p>
            </div>

            <div className="metric-card">
              <span>04</span>
              <strong>BEKASI</strong>
              <p>Based in Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
