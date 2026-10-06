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
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
      id="certificates"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(45deg,rgba(17,17,16,0.105)_0px,rgba(17,17,16,0.105)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,0,0.105),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(255,184,0,0.045),transparent_30%)] dark:bg-none"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.015))] dark:bg-none"
        aria-hidden="true"
      />

      <div className="portfolio-container">
        <SectionHeading eyebrow="Proof of work" title="MY" accent="CERTS" />

        {loading ? (
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.68rem] tracking-[0.09em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            Loading certificates...
          </div>
        ) : total ? (
          <div
            className="relative mx-auto mt-12 h-[510px] max-w-[1100px] max-[760px]:h-[440px] max-[520px]:h-[380px]"
            data-reveal="scale"
          >
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

              <strong
                aria-live="polite"
                className="min-w-[62px] text-center text-[0.67rem]"
              >
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
        ) : (
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.68rem] tracking-[0.09em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            Belum ada certificate.
          </div>
        )}
      </div>
    </section>
  );
}
