import { LoadingScreen } from "./components/common/LoadingScreen";
import { FloatingControls } from "./components/layout/FloatingControls";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AboutSection } from "./components/sections/AboutSection";
import { CertificatesSection } from "./components/sections/CertificatesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { useReveal } from "./hooks/useReveal";
import { useSectionScrollTransition } from "./hooks/useSectionScrollTransition";

export default function App() {
  const { portfolio, loading, loadError } = usePortfolioData();

  useReveal(
    `${loading}:${portfolio.projects.length}:${portfolio.certificates.length}`,
  );

  useSectionScrollTransition();

  const projectCount = loading ? "10+" : `${portfolio.projects.length}+`;

  const certificateCount = loading
    ? "14+"
    : `${portfolio.certificates.length}+`;

  return (
    <>
      <LoadingScreen />

      <div className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--ink)] transition-colors duration-300">
        <Navbar />

        <FloatingControls />

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

          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
