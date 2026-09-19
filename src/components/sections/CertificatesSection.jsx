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
      className="relative overflow-hidden border-t border-black/10 bg-[#f7f7f4] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.055)_0,rgba(17,17,17,0.055)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[#0a0a0a] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.048)_0,rgba(255,255,255,0.048)_1px,transparent_1px,transparent_8px)]"
      id="certificates"
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1510px] py-28 pb-32 max-[960px]:w-[calc(100%_-_36px)] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:py-[90px] max-[760px]:pb-[105px]">
        <SectionHeading
          eyebrow="Proof of work"
          title="MY"
          accent="CERTS."
          description="Certificates and learning records that support my academic and software-development journey."
        />

        {loading ? (
          <div className="mt-11 grid min-h-[280px] place-items-center rounded-[14px] border border-black/15 bg-white text-[0.74rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#111] dark:text-[#767676]">
            Loading certificates...
          </div>
        ) : total ? (
          <div className="relative mt-[54px] pb-7" data-reveal>
            <div className="grid grid-cols-[minmax(0,0.74fr)_minmax(0,1.28fr)_minmax(0,0.74fr)] items-center gap-5 max-[760px]:block">
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

            <div className="relative z-[6] mx-auto -mt-[17px] flex w-fit items-center gap-3 rounded-full border border-black/25 bg-[#f1f1ee] p-[7px_9px] shadow-[0_18px_55px_rgba(0,0,0,0.09)] dark:border-white/20 dark:bg-[#171717] dark:shadow-[0_22px_65px_rgba(0,0,0,0.42)]">
              <button
                type="button"
                className="grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border border-black/15 bg-white disabled:cursor-default disabled:opacity-35 dark:border-white/10 dark:bg-[#111]"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <NavIcon name="chevron-left" size={18} />
              </button>

              <strong className="min-w-[58px] text-center text-[0.72rem]">
                {currentIndex + 1} / {total}
              </strong>

              <button
                type="button"
                className="grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border border-black/15 bg-white disabled:cursor-default disabled:opacity-35 dark:border-white/10 dark:bg-[#111]"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <NavIcon name="chevron-right" size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-11 grid min-h-[280px] place-items-center rounded-[14px] border border-black/15 bg-white text-[0.74rem] tracking-[0.1em] text-[#777] uppercase dark:border-white/10 dark:bg-[#111] dark:text-[#767676]">
            Belum ada certificate.
          </div>
        )}
      </div>
    </section>
  );
}
