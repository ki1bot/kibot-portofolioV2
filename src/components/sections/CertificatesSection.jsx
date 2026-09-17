import { useState } from "react";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";

export function CertificatesSection({ certificates, loading }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 8);

  return (
    <section className="content-section certificates-section" id="certificates">
      <div className="site-container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="Learning records"
            title="MY"
            accent="CERTS."
            description="Sertifikasi dan program pembelajaran yang mendukung proses belajar saya di luar perkuliahan."
          />

          <div className="section-count" data-reveal>
            {loading ? "--" : String(certificates.length).padStart(2, "0")}

            <span>CERTIFICATES</span>
          </div>
        </div>

        {loading ? (
          <div className="loading-panel">Loading certificates...</div>
        ) : (
          <>
            <div className="certificates-grid">
              {visibleCertificates.map((certificate, index) => (
                <CertificateCard
                  certificate={certificate}
                  index={index}
                  key={certificate.id}
                />
              ))}
            </div>

            {certificates.length > 8 ? (
              <div className="section-center-action" data-reveal>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setShowAll((current) => !current)}
                >
                  {showAll ? "Show less" : "Show all certificates"}

                  <span>{showAll ? "↑" : "↓"}</span>
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
