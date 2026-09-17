import { useState } from "react";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";

export function CertificatesSection({ certificates, loading }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 8);

  return (
    <section
      className="border-b border-black/15 bg-black/[0.025] py-[clamp(92px,10vw,148px)] dark:border-white/15 dark:bg-white/[0.02]"
      id="certificates"
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-[15px]">
        <div className="flex items-end justify-between gap-10 max-[700px]:grid max-[700px]:items-start">
          <SectionHeading
            eyebrow="Learning records"
            title="MY"
            accent="CERTS."
            description="Sertifikasi dan program pembelajaran yang mendukung proses belajar saya di luar perkuliahan."
          />

          <div
            className="shrink-0 text-right text-[clamp(3.2rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.07em] max-[700px]:text-left"
            data-reveal
          >
            {loading ? "--" : String(certificates.length).padStart(2, "0")}

            <span className="mt-2.5 block font-mono text-[0.67rem] tracking-[0.12em] text-[#68665f] dark:text-[#a7a49d]">
              CERTIFICATES
            </span>
          </div>
        </div>

        {loading ? (
          <div className="mt-[70px] grid min-h-[220px] place-items-center border border-black/15 bg-[#f7f3e9] font-mono text-[0.75rem] tracking-[0.1em] text-[#68665f] uppercase dark:border-white/15 dark:bg-[#121212] dark:text-[#a7a49d]">
            Loading certificates...
          </div>
        ) : (
          <>
            <div className="mt-[70px] grid grid-cols-4 gap-3.5 max-[1080px]:grid-cols-3 max-[700px]:mt-[46px] max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
              {visibleCertificates.map((certificate, index) => (
                <CertificateCard
                  certificate={certificate}
                  index={index}
                  key={certificate.id}
                />
              ))}
            </div>

            {certificates.length > 8 ? (
              <div className="mt-[42px] flex justify-center" data-reveal>
                <button
                  type="button"
                  className="inline-flex min-h-[50px] cursor-pointer items-center justify-center gap-3 border border-black/30 bg-[#f7f3e9] px-5 text-[0.76rem] font-black tracking-[0.08em] uppercase transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white dark:border-white/30 dark:bg-[#121212] dark:hover:bg-[#181818]"
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
