import { useState } from "react";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";
import { NavIcon } from "../common/NavIcon";

export function CertificatesSection({ certificates, loading }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = certificates.length;

  function normalize(index) {
    if (!total) {
      return 0;
    }

    return (index + total) % total;
  }

  function previous() {
    setActiveIndex((current) => normalize(current - 1));
  }

  function next() {
    setActiveIndex((current) => normalize(current + 1));
  }

  const previousIndex = normalize(activeIndex - 1);

  const nextIndex = normalize(activeIndex + 1);

  return (
    <section className="pattern-section certificates-section" id="certificates">
      <div className="section-container">
        <SectionHeading
          eyebrow="Proof of work"
          title="MY"
          accent="CERTS."
          description="Certificates and learning records that support my academic and software-development journey."
        />

        {loading ? (
          <div className="section-state">Loading certificates...</div>
        ) : total ? (
          <div className="certificate-carousel" data-reveal>
            <div className="certificate-stage">
              {total > 1 ? (
                <CertificateCard
                  certificate={certificates[previousIndex]}
                  position="previous"
                  onSelect={previous}
                />
              ) : null}

              <CertificateCard
                certificate={certificates[activeIndex]}
                position="active"
              />

              {total > 1 ? (
                <CertificateCard
                  certificate={certificates[nextIndex]}
                  position="next"
                  onSelect={next}
                />
              ) : null}
            </div>

            <div className="certificate-controls">
              <button
                type="button"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <NavIcon name="chevron-left" size={18} />
              </button>

              <strong>
                {activeIndex + 1} / {total}
              </strong>

              <button
                type="button"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <NavIcon name="chevron-right" size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="section-state">Belum ada certificate.</div>
        )}
      </div>
    </section>
  );
}
