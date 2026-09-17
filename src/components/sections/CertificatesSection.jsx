import { useState } from "react";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";

export function CertificatesSection({ certificates, loading }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section
      className="border-b border-white/10 bg-[#0d0d0d] py-[clamp(90px,10vw,140px)]"
      id="certificates"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Proof of learning"
          title="MY"
          accent="CERTS."
          description="Sertifikat, program pembelajaran, dan bukti kompetensi yang melengkapi proses belajar saya di luar perkuliahan."
        />

        {loading ? (
          <div className="mt-14 grid min-h-[220px] place-items-center border border-white/10 bg-white/[0.02] font-mono text-[0.68rem] text-white/45 uppercase">
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
                  className="min-h-[48px] cursor-pointer border border-white/20 px-6 font-mono text-[0.68rem] font-black tracking-[0.07em] text-white uppercase transition hover:border-[#d7ff3f] hover:bg-[#d7ff3f] hover:text-black"
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
