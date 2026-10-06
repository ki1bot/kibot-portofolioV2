import { useMemo, useState } from "react";
import { NavIcon } from "../common/NavIcon";
import { CertificateCard } from "../portfolio/CertificateCard";
import { SectionHeading } from "../common/SectionHeading";

function normalizeIndex(index, total) {
  if (!total) {
    return 0;
  }

  return (index + total) % total;
}

function getCarouselOffset(index, activeIndex, total) {
  if (!total) {
    return 0;
  }

  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

export function CertificatesSection({ certificates, loading }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = certificates.length;
  const currentIndex = normalizeIndex(activeIndex, total);

  const carouselCertificates = useMemo(
    () =>
      certificates.map((certificate, index) => ({
        certificate,
        offset: getCarouselOffset(index, currentIndex, total),
      })),
    [certificates, currentIndex, total],
  );

  function previous() {
    if (total <= 1) {
      return;
    }

    setActiveIndex((current) => normalizeIndex(current - 1, total));
  }

  function next() {
    if (total <= 1) {
      return;
    }

    setActiveIndex((current) => normalizeIndex(current + 1, total));
  }

  function selectCertificate(offset) {
    if (offset === -1) {
      previous();
      return;
    }

    if (offset === 1) {
      next();
    }
  }

  function handleCarouselKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  }

  return (
    <section
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
      id="certificates"
    >
      <style>
        {`
          .certificate-showcase-card {
            opacity: var(--certificate-opacity);
            filter:
              brightness(var(--certificate-brightness))
              grayscale(var(--certificate-grayscale));
            transform:
              translate(-50%, -50%)
              translate3d(var(--certificate-x), 0, 0)
              scale(var(--certificate-scale));
            transform-origin: center center;
            backface-visibility: hidden;
            will-change: transform, opacity, filter;
            transition:
              transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 460ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 220ms ease,
              box-shadow 460ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .certificate-showcase-card[role="button"]:hover {
            border-color: rgba(255, 255, 255, 0.13);
          }

          .certificate-showcase-card[aria-current="true"] {
            box-shadow:
              0 34px 100px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.012);
          }

          .certificate-card-overlay {
            opacity: 0;
            background:
              linear-gradient(
                90deg,
                rgba(15, 15, 15, 0.995) 0%,
                rgba(15, 15, 15, 0.985) 19%,
                rgba(15, 15, 15, 0.93) 28%,
                rgba(15, 15, 15, 0.72) 37%,
                rgba(15, 15, 15, 0.25) 48%,
                rgba(15, 15, 15, 0) 57%
              );
            transition:
              opacity 300ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .certificate-card-overlay.is-active {
            opacity: 1;
          }

          .certificate-card-copy {
            opacity: 0;
            transform: translate3d(-18px, 0, 0);
            transition:
              opacity 300ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .certificate-card-copy.is-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          @media (max-width: 760px) {
            .certificate-showcase-card {
              transition:
                transform 480ms cubic-bezier(0.22, 1, 0.36, 1),
                opacity 380ms cubic-bezier(0.22, 1, 0.36, 1),
                filter 420ms cubic-bezier(0.22, 1, 0.36, 1),
                border-color 200ms ease,
                box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1);
            }

            .certificate-card-overlay {
              background:
                linear-gradient(
                  90deg,
                  rgba(15, 15, 15, 0.995) 0%,
                  rgba(15, 15, 15, 0.98) 28%,
                  rgba(15, 15, 15, 0.78) 45%,
                  rgba(15, 15, 15, 0.24) 67%,
                  rgba(15, 15, 15, 0) 82%
                );
            }
          }

          @media (max-width: 520px) {
            .certificate-card-overlay {
              background:
                linear-gradient(
                  90deg,
                  rgba(15, 15, 15, 0.995) 0%,
                  rgba(15, 15, 15, 0.97) 36%,
                  rgba(15, 15, 15, 0.72) 57%,
                  rgba(15, 15, 15, 0.18) 78%,
                  rgba(15, 15, 15, 0) 92%
                );
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .certificate-showcase-card,
            .certificate-card-overlay,
            .certificate-card-copy {
              transition: none;
            }
          }
        `}
      </style>

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
        <SectionHeading eyebrow="Proof of work" title="MY" accent="CERTS." />

        {loading ? (
          <div className="mt-10 grid min-h-[280px] place-items-center rounded-[12px] border border-black/12 bg-white/50 text-[0.68rem] tracking-[0.09em] text-[#777] uppercase dark:border-white/10 dark:bg-[#0d0d0d]/82">
            Loading certificates...
          </div>
        ) : total ? (
          <div
            className="relative mx-auto mt-[78px] h-[540px] w-full max-[1100px]:mt-[64px] max-[1100px]:h-[485px] max-[760px]:mt-[54px] max-[760px]:h-[430px] max-[520px]:mt-[46px] max-[520px]:h-[390px]"
            data-reveal="scale"
            tabIndex={0}
            onKeyDown={handleCarouselKeyDown}
            aria-label="Certificate carousel"
          >
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[76%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-[90px] dark:bg-black/42" />

            {carouselCertificates.map(({ certificate, offset }) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                offset={offset}
                onSelect={() => selectCertificate(offset)}
              />
            ))}

            <div className="absolute bottom-[-10px] left-1/2 z-[30] flex h-[58px] -translate-x-1/2 items-center gap-[4px] rounded-full border border-white/[0.09] bg-[#171717]/97 p-[7px] shadow-[0_16px_45px_rgba(0,0,0,0.48)] backdrop-blur-[18px] max-[1100px]:bottom-[-8px] max-[760px]:bottom-[-4px] max-[760px]:h-[52px] max-[760px]:p-[6px] max-[520px]:h-[48px]">
              <button
                type="button"
                className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-full border border-white/[0.07] bg-[#292929] text-[#e7e7e7] transition-[transform,background-color,border-color,color] duration-200 enabled:hover:-translate-x-px enabled:hover:border-[#fdc600]/60 enabled:hover:bg-[#343434] enabled:hover:text-[#fdc600] disabled:cursor-default disabled:opacity-35 max-[760px]:h-[38px] max-[760px]:w-[38px] max-[520px]:h-[35px] max-[520px]:w-[35px]"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <NavIcon name="chevron-left" size={17} />
              </button>

              <strong
                aria-live="polite"
                className="min-w-[76px] px-[5px] text-center text-[12px] font-black leading-none tracking-[-0.01em] text-white max-[760px]:min-w-[66px] max-[760px]:text-[11px] max-[520px]:min-w-[60px] max-[520px]:text-[10px]"
              >
                {currentIndex + 1} / {total}
              </strong>

              <button
                type="button"
                className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-full border border-white/[0.07] bg-[#292929] text-[#e7e7e7] transition-[transform,background-color,border-color,color] duration-200 enabled:hover:translate-x-px enabled:hover:border-[#fdc600]/60 enabled:hover:bg-[#343434] enabled:hover:text-[#fdc600] disabled:cursor-default disabled:opacity-35 max-[760px]:h-[38px] max-[760px]:w-[38px] max-[520px]:h-[35px] max-[520px]:w-[35px]"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <NavIcon name="chevron-right" size={17} />
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
