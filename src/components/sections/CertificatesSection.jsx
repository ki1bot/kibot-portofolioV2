import { useState } from "react";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";

export function CertificatesSection({ certificates, loading }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section
      className="border-b border-white/10 bg-[#0d0d0d] py-[clamp(94px,10vw,145px)]"
      id="certificates"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Proof of work"
          title="MY"
          accent="CERTS."
          description="Certificates and learning records that support my academic and software-development journey."
        />

        {loading ? (
          <div className="mt-14 grid min-h-[220px] place-items-center border border-white/10 bg-white/[0.015] font-mono text-[0.66rem] tracking-[0.1em] text-white/40 uppercase">
            Loading certificates...
          </div>
        ) : (
          <>
            <div className="mt-14 grid grid-cols-2 gap-3 max-[900px]:grid-cols-1">
              {visibleCertificates.map((certificate, index) => (
                <CertificateCard
                  certificate={certificate}
                  index={index}
                  key={certificate.id}
                />
              ))}
            </div>

            {certificates.length > 6 ? (
              <div className="mt-10 flex justify-center" data-reveal>
                <button
                  type="button"
                  className="min-h-[48px] cursor-pointer border border-white/20 px-6 font-mono text-[0.65rem] font-black tracking-[0.08em] text-white uppercase transition hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black"
                  onClick={() => setShowAll((current) => !current)}
                >
                  {showAll ? "Show less" : "Show all certificates"}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
