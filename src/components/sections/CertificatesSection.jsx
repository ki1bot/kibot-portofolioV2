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
      <div className="portfolio-shell py-[110px] pb-[125px] max-[760px]:py-[88px]">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="CERTS." />

        {loading ? (
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.68rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            Loading certificates...
          </div>
        ) : total ? (
          <div className="relative mt-[58px] min-h-[430px]" data-reveal="scale">
            {total > 1 ? (
              <div className="absolute top-1/2 left-[-23%] z-[1] h-[300px] w-[39%] -translate-y-1/2 max-[900px]:hidden">
                <CertificateCard
                  certificate={certificates[previousIndex]}
                  position="previous"
                  onSelect={previous}
                />
              </div>
            ) : null}

            <div className="relative z-[3] mx-auto w-[min(1020px,78vw)] max-[900px]:w-full">
              <CertificateCard
                key={certificates[currentIndex].id}
                certificate={certificates[currentIndex]}
                position="active"
              />

              <div className="absolute bottom-[-22px] left-1/2 z-[8] flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-black/18 bg-[#ededeb]/96 p-[6px_8px] shadow-[0_15px_45px_rgba(0,0,0,0.15)] backdrop-blur-[14px] dark:border-white/14 dark:bg-[#181818]/97 dark:shadow-[0_20px_55px_rgba(0,0,0,0.48)]">
                <button
                  type="button"
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-black/12 bg-white/85 transition hover:border-[#ffd400] disabled:cursor-default disabled:opacity-35 dark:border-white/10 dark:bg-[#0d0d0d]"
                  onClick={previous}
                  disabled={total <= 1}
                  aria-label="Sertifikat sebelumnya"
                >
                  <NavIcon name="chevron-left" size={16} />
                </button>

                <strong className="min-w-[62px] text-center text-[0.67rem]">
                  {currentIndex + 1} / {total}
                </strong>

                <button
                  type="button"
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-black/12 bg-white/85 transition hover:border-[#ffd400] disabled:cursor-default disabled:opacity-35 dark:border-white/10 dark:bg-[#0d0d0d]"
                  onClick={next}
                  disabled={total <= 1}
                  aria-label="Sertifikat berikutnya"
                >
                  <NavIcon name="chevron-right" size={16} />
                </button>
              </div>
            </div>

            {total > 1 ? (
              <div className="absolute top-1/2 right-[-23%] z-[1] h-[300px] w-[39%] -translate-y-1/2 max-[900px]:hidden">
                <CertificateCard
                  certificate={certificates[nextIndex]}
                  position="next"
                  onSelect={next}
                />
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.68rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            Belum ada certificate.
          </div>
        )}
      </div>
    </section>
  );
}
