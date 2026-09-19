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
      className="portfolio-texture relative overflow-hidden border-t border-black/10 dark:border-white/10"
      id="certificates"
    >
      <div className="portfolio-shell py-[108px] pb-[122px] max-[760px]:py-[88px] max-[760px]:pb-[100px]">
        <SectionHeading
          eyebrow="Proof of work"
          title="MY"
          accent="CERTS."
          description="Certificates and learning records that support my academic and software-development journey."
        />

        {loading ? (
          <div className="mt-10 grid min-h-[260px] place-items-center rounded-[14px] border border-black/14 bg-white/72 text-[0.72rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#111]/78">
            Loading certificates...
          </div>
        ) : total ? (
          <div
            className="relative mx-auto mt-[50px] max-w-[1220px] pb-8"
            data-reveal
          >
            <div className="grid grid-cols-[minmax(0,0.64fr)_minmax(0,1.36fr)_minmax(0,0.64fr)] items-center gap-4 max-[760px]:block">
              {total > 1 ? (
                <CertificateCard
                  certificate={certificates[previousIndex]}
                  position="previous"
                  onSelect={previous}
                />
              ) : null}

              <CertificateCard
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
            </div>

            <div className="relative z-[6] mx-auto -mt-4 flex w-fit items-center gap-2.5 rounded-full border border-black/18 bg-[#f1f1ee]/92 p-[6px_8px] shadow-[0_14px_42px_rgba(0,0,0,0.12)] backdrop-blur-[12px] dark:border-white/14 dark:bg-[#171717]/94 dark:shadow-[0_18px_50px_rgba(0,0,0,0.42)]">
              <button
                type="button"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/12 bg-white/86 transition hover:border-[#ffd400] disabled:cursor-default disabled:opacity-35 dark:border-white/10 dark:bg-[#101010]"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <NavIcon name="chevron-left" size={16} />
              </button>

              <strong className="min-w-[56px] text-center text-[0.68rem]">
                {currentIndex + 1} / {total}
              </strong>

              <button
                type="button"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/12 bg-white/86 transition hover:border-[#ffd400] disabled:cursor-default disabled:opacity-35 dark:border-white/10 dark:bg-[#101010]"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <NavIcon name="chevron-right" size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid min-h-[260px] place-items-center rounded-[14px] border border-black/14 bg-white/72 text-[0.72rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#111]/78">
            Belum ada certificate.
          </div>
        )}
      </div>
    </section>
  );
}
