import { AboutSection } from "./components/sections/AboutSection";
import { BackToTop } from "./components/layout/BackToTop";
import { CertificatesSection } from "./components/sections/CertificatesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { Navbar } from "./components/layout/Navbar";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { useReveal } from "./hooks/useReveal";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { portfolio, loading, loadError, addComment } = usePortfolioData();

  const { theme, toggleTheme } = useTheme();

  useReveal(
    `${loading}:${portfolio.projects.length}:${portfolio.certificates.length}:${portfolio.comments.length}`,
  );

  const projectCount = loading ? "10+" : `${portfolio.projects.length}+`;

  const certificateCount = loading
    ? "14+"
    : `${portfolio.certificates.length}+`;

  return (
    <div className={`portfolio-shell ${theme === "light" ? "is-light" : ""}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection
          projectCount={projectCount}
          certificateCount={certificateCount}
        />

        <AboutSection
          projectCount={projectCount}
          certificateCount={certificateCount}
        />

        <EducationSection />

        <ProjectsSection
          projects={portfolio.projects}
          loading={loading}
          loadError={loadError}
        />

        <CertificatesSection
          certificates={portfolio.certificates}
          loading={loading}
        />

        <ContactSection
          comments={portfolio.comments}
          onCommentAdded={addComment}
          loading={loading}
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
