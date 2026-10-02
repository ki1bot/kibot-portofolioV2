import { useState } from "react";
import { NavIcon } from "../common/NavIcon";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";

export function CertificatesSection({ certificates, loading }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = certificates.length;

  function normalize(index) {
    if (!total) {
      return 0;
    }

    return (index + total) % total;
  }

  const currentIndex = normalize(activeIndex);
  const previousIndex = normalize(currentIndex - 1);
  const nextIndex = normalize(currentIndex + 1);

  function previous() {
    setActiveIndex((current) => normalize(current - 1));
  }

  function next() {
    setActiveIndex((current) => normalize(current + 1));
  }

  return (
    <section
      className="portfolio-texture portfolio-section certificate-section"
      id="certificates"
    >
      <div className="portfolio-shell section-shell">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="CERTS." />

        {loading ? (
          <div className="projects-state">Loading certificates...</div>
        ) : total ? (
          <div className="certificate-stage" data-reveal="scale">
            {total > 1 ? (
              <CertificateCard
                certificate={certificates[previousIndex]}
                position="previous"
                onSelect={previous}
              />
            ) : null}

            <CertificateCard
              key={certificates[currentIndex].id}
              certificate={certificates[currentIndex]}
              position="active"
            />

            {total > 1 ? (
              <CertificateCard
                certificate={certificates[nextIndex]}
                position="next"
                onSelect={next}
              />
            ) : null}

            <div className="certificate-controls">
              <button
                type="button"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <NavIcon name="chevron-left" size={16} />
              </button>

              <strong>
                {currentIndex + 1} / {total}
              </strong>

              <button
                type="button"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <NavIcon name="chevron-right" size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="projects-state">Belum ada certificate.</div>
        )}
      </div>
    </section>
  );
}
