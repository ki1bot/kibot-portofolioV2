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

export default function App() {
  const { portfolio, loading, loadError } = usePortfolioData();

  useReveal(
    `${loading}:${portfolio.projects.length}:${portfolio.certificates.length}`,
  );

  const projectCount = loading ? "10+" : `${portfolio.projects.length}+`;

  const certificateCount = loading
    ? "14+"
    : `${portfolio.certificates.length}+`;

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-[#090909] text-[#f5f5ef] antialiased">
      <Navbar />

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
      <BackToTop />
    </div>
  );
}
