import { AboutSection } from "./components/sections/AboutSection";
import { CertificatesSection } from "./components/sections/CertificatesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { FloatingControls } from "./components/layout/FloatingControls";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { Navbar } from "./components/layout/Navbar";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { useReveal } from "./hooks/useReveal";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { portfolio, loading, loadError } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();

  useReveal(
    `${loading}:${portfolio.projects.length}:${portfolio.certificates.length}:${theme}`,
  );

  const projectCount = loading ? "10+" : `${portfolio.projects.length}+`;

  const certificateCount = loading
    ? "14+"
    : `${portfolio.certificates.length}+`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f4] text-[#111111] transition-colors duration-200 dark:bg-[#0a0a0a] dark:text-[#f5f5f2]">
      <Navbar />

      <FloatingControls theme={theme} onToggleTheme={toggleTheme} />

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
  );
}
