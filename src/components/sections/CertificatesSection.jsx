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
      className="portfolio-texture relative overflow-hidden border-t border-black/8 dark:border-white/8"
      id="certificates"
    >
      <div className="portfolio-shell py-[104px] pb-[118px] max-[760px]:py-[82px] max-[760px]:pb-[96px]">
        <SectionHeading
          eyebrow="Proof of learning"
          title="MY"
          accent="CERTS."
          description="Certificates and learning records that support my academic and software-development journey."
        />

        {loading ? (
          <div className="mt-10 grid min-h-[250px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.65rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/9 dark:bg-[#0d0d0d]/76">
            Loading certificates...
          </div>
        ) : total ? (
          <div
            className="relative mx-auto mt-[46px] max-w-[1380px] pb-8"
            data-reveal="scale"
          >
            <div className="grid grid-cols-[minmax(0,0.56fr)_minmax(0,1.45fr)_minmax(0,0.56fr)] items-center gap-4 max-[760px]:block">
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

            <div className="relative z-[6] mx-auto -mt-4 flex w-fit items-center gap-2.5 rounded-full border border-black/16 bg-[#f1f1ee]/94 p-[5px_7px] shadow-[0_14px_40px_rgba(0,0,0,0.11)] backdrop-blur-[12px] dark:border-white/12 dark:bg-[#161616]/96 dark:shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
              <button
                type="button"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/80 transition hover:border-[#ffd400] disabled:cursor-default disabled:opacity-35 dark:border-white/9 dark:bg-[#0d0d0d]"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <NavIcon name="chevron-left" size={15} />
              </button>

              <strong className="min-w-[56px] text-center text-[0.62rem]">
                {currentIndex + 1} / {total}
              </strong>

              <button
                type="button"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/80 transition hover:border-[#ffd400] disabled:cursor-default disabled:opacity-35 dark:border-white/9 dark:bg-[#0d0d0d]"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <NavIcon name="chevron-right" size={15} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid min-h-[250px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.65rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/9 dark:bg-[#0d0d0d]/76">
            Belum ada certificate.
          </div>
        )}
      </div>
    </section>
  );
}
