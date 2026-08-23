import { useEffect, useState } from "react";
import { BackToTop } from "./components/layout/BackToTop";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { getPortfolioData } from "./lib/portfolio";

export default function App() {
  const [portfolio, setPortfolio] = useState({
    projects: [],
    certificates: [],
    comments: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getPortfolioData()
      .then((data) => {
        if (active) {
          setPortfolio(data);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 antialiased">
      <div className="pointer-events-none fixed -left-40 top-[12vh] -z-20 h-[440px] w-[440px] rounded-full bg-violet-600/20 blur-[110px]" />
      <div className="pointer-events-none fixed -right-40 top-[48vh] -z-20 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-[110px]" />

      <Navbar />

      <main>
        <HeroSection />

        <EducationSection />

        <AboutSection
          projectCount={portfolio.projects.length}
          certificateCount={portfolio.certificates.length}
        />

        {loading ? (
          <section className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-9 text-center text-sm text-slate-400 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              Memuat data portofolio...
            </div>
          </section>
        ) : (
          <>
            <PortfolioSection
              projects={portfolio.projects}
              certificates={portfolio.certificates}
            />

            <ContactSection comments={portfolio.comments} />
          </>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
