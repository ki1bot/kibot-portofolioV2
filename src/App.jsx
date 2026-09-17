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
    <div
      className={`${theme === "dark" ? "dark" : ""} relative min-h-screen overflow-x-hidden bg-[#eeeae0] text-[#111111] antialiased transition-colors duration-200 dark:bg-[#080808] dark:text-[#f4f1e8]`}
    >
      <div className="pointer-events-none fixed -left-40 top-[10vh] -z-10 h-[420px] w-[420px] rounded-full bg-[#d8ff3e]/10 blur-[120px]" />

      <div className="pointer-events-none fixed -right-40 top-[48vh] -z-10 h-[420px] w-[420px] rounded-full bg-black/5 blur-[120px] dark:bg-white/5" />

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
