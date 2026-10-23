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

export function CertificatesSection({ certificates = [], loading }) {
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
      id="certificates"
      className="portfolio-section !border-black/[0.1] !bg-[#f4f3ed] !bg-none before:!bg-none dark:!border-white/[0.045] dark:!bg-[#080808]"
    >
      <style>
        {`
          #certificates {
            --certificate-card-background: #fffdf7;
            --certificate-card-border: rgba(75, 62, 34, 0.17);
            --certificate-card-shadow:
              0 28px 76px rgba(78, 62, 31, 0.16),
              0 4px 20px rgba(78, 62, 31, 0.06);

            --certificate-card-surface:
              linear-gradient(
                145deg,
                #ffffff 0%,
                #fffdf7 42%,
                #f0e9d9 100%
              );

            --certificate-image-background: #f5f1e8;
            --certificate-image-border: rgba(70, 59, 40, 0.12);

            --certificate-title-color: #181818;
            --certificate-description-color: #595751;
            --certificate-issuer-color: #876700;

            --certificate-tag-background: rgba(255, 248, 230, 0.88);
            --certificate-tag-border: rgba(103, 84, 37, 0.3);
            --certificate-tag-color: #39342b;

            --certificate-ring-color: rgba(68, 52, 21, 0.07);

            --certificate-overlay-desktop:
              linear-gradient(
                90deg,
                rgba(255, 253, 247, 1) 0%,
                rgba(255, 253, 247, 0.99) 19%,
                rgba(255, 253, 247, 0.94) 29%,
                rgba(255, 253, 247, 0.75) 39%,
                rgba(255, 253, 247, 0.3) 51%,
                rgba(255, 253, 247, 0) 63%
              );

            --certificate-overlay-tablet:
              linear-gradient(
                90deg,
                rgba(255, 253, 247, 1) 0%,
                rgba(255, 253, 247, 0.99) 29%,
                rgba(255, 253, 247, 0.87) 45%,
                rgba(255, 253, 247, 0.4) 66%,
                rgba(255, 253, 247, 0) 83%
              );

            --certificate-overlay-mobile:
              linear-gradient(
                90deg,
                rgba(255, 253, 247, 1) 0%,
                rgba(255, 253, 247, 0.99) 38%,
                rgba(255, 253, 247, 0.85) 58%,
                rgba(255, 253, 247, 0.32) 80%,
                rgba(255, 253, 247, 0) 96%
              );
          }

          .dark #certificates {
            --certificate-card-background: #202020;
            --certificate-card-border: rgba(255, 255, 255, 0.085);
            --certificate-card-shadow:
              0 30px 90px rgba(0, 0, 0, 0.48);

            --certificate-card-surface:
              linear-gradient(
                180deg,
                #292929 0%,
                #1a1a1a 58%,
                #111111 100%
              );

            --certificate-image-background: #263541;
            --certificate-image-border: transparent;

            --certificate-title-color: #ffffff;
            --certificate-description-color: #c5c5c5;
            --certificate-issuer-color: #fdc600;

            --certificate-tag-background: rgba(0, 0, 0, 0.08);
            --certificate-tag-border: rgba(255, 255, 255, 0.27);
            --certificate-tag-color: #f0f0f0;

            --certificate-ring-color: rgba(255, 255, 255, 0.035);

            --certificate-overlay-desktop:
              linear-gradient(
                90deg,
                rgba(15, 15, 15, 0.995) 0%,
                rgba(15, 15, 15, 0.985) 19%,
                rgba(15, 15, 15, 0.93) 28%,
                rgba(15, 15, 15, 0.72) 37%,
                rgba(15, 15, 15, 0.25) 48%,
                rgba(15, 15, 15, 0) 57%
              );

            --certificate-overlay-tablet:
              linear-gradient(
                90deg,
                rgba(15, 15, 15, 0.995) 0%,
                rgba(15, 15, 15, 0.98) 28%,
                rgba(15, 15, 15, 0.78) 45%,
                rgba(15, 15, 15, 0.24) 67%,
                rgba(15, 15, 15, 0) 82%
              );

            --certificate-overlay-mobile:
              linear-gradient(
                90deg,
                rgba(15, 15, 15, 0.995) 0%,
                rgba(15, 15, 15, 0.97) 36%,
                rgba(15, 15, 15, 0.72) 57%,
                rgba(15, 15, 15, 0.18) 78%,
                rgba(15, 15, 15, 0) 92%
              );
          }

          #certificates .certificate-showcase-card {
            opacity: var(--certificate-opacity);
            background: var(--certificate-card-background);
            border-color: var(--certificate-card-border);
            box-shadow: var(--certificate-card-shadow);

            filter:
              grayscale(var(--certificate-grayscale));

            transform:
              translate(-50%, -50%)
              translate3d(var(--certificate-x), 0, 0)
              scale(var(--certificate-scale));

            transform-origin: center center;
            backface-visibility: hidden;
            will-change: transform, opacity, filter;

            transition:
              transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 430ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 470ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 220ms ease,
              box-shadow 470ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .dark #certificates .certificate-showcase-card {
            filter:
              brightness(var(--certificate-brightness))
              grayscale(var(--certificate-grayscale));
          }

          #certificates .certificate-showcase-card[role="button"] {
            opacity: 0.58;
          }

          .dark #certificates .certificate-showcase-card[role="button"] {
            opacity: var(--certificate-opacity);
          }

          #certificates .certificate-showcase-card[role="button"]:hover {
            border-color: rgba(163, 125, 23, 0.42);
          }

          .dark #certificates .certificate-showcase-card[role="button"]:hover {
            border-color: rgba(255, 255, 255, 0.13);
          }

          #certificates .certificate-showcase-card[aria-current="true"] {
            opacity: 1;
            box-shadow:
              0 34px 88px rgba(75, 59, 25, 0.2),
              0 0 0 1px rgba(76, 59, 20, 0.035);
          }

          .dark #certificates .certificate-showcase-card[aria-current="true"] {
            box-shadow:
              0 34px 100px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.012);
          }

          #certificates .certificate-showcase-card > div:first-child {
            background: var(--certificate-card-surface);
          }

          #certificates .certificate-showcase-card > div:nth-child(2) {
            background: var(--certificate-image-background);
            border: 1px solid var(--certificate-image-border);
            border-radius: 4px;
          }

          #certificates .certificate-card-overlay {
            opacity: 0;
            background: var(--certificate-overlay-desktop);

            transition:
              opacity 150ms cubic-bezier(0.22, 1, 0.36, 1);

            transition-delay: 0ms;
          }

          #certificates .certificate-card-overlay.is-active {
            opacity: 1;
            transition-duration: 280ms;
            transition-delay: 150ms;
          }

          #certificates .certificate-card-copy {
            opacity: 0;
            transform: translate3d(-16px, 0, 0);

            transition:
              opacity 150ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 200ms cubic-bezier(0.22, 1, 0.36, 1);

            transition-delay: 0ms;
          }

          #certificates .certificate-card-copy.is-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);

            transition:
              opacity 280ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 360ms cubic-bezier(0.22, 1, 0.36, 1);

            transition-delay: 170ms;
          }

          #certificates .certificate-card-copy > div > div:first-child {
            color: var(--certificate-issuer-color);
          }

          #certificates .certificate-card-copy h3 {
            color: var(--certificate-title-color);
          }

          #certificates .certificate-card-copy p {
            color: var(--certificate-description-color);
          }

          #certificates .certificate-card-copy span.rounded-full {
            color: var(--certificate-tag-color);
            background: var(--certificate-tag-background);
            border-color: var(--certificate-tag-border);
          }

          #certificates .certificate-showcase-card > div:last-child {
            box-shadow:
              inset 0 0 0 1px var(--certificate-ring-color);
          }

          @media (max-width: 760px) {
            #certificates .certificate-showcase-card {
              transition:
                transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
                opacity 390ms cubic-bezier(0.22, 1, 0.36, 1),
                filter 430ms cubic-bezier(0.22, 1, 0.36, 1),
                border-color 200ms ease,
                box-shadow 430ms cubic-bezier(0.22, 1, 0.36, 1);
            }

            #certificates .certificate-card-overlay {
              background: var(--certificate-overlay-tablet);
            }

            #certificates .certificate-card-overlay.is-active {
              transition-delay: 120ms;
            }

            #certificates .certificate-card-copy.is-active {
              transition-delay: 140ms;
            }
          }

          @media (max-width: 520px) {
            #certificates .certificate-card-overlay {
              background: var(--certificate-overlay-mobile);
            }

            #certificates .certificate-showcase-card[role="button"] {
              opacity: 0.42;
            }

            .dark #certificates .certificate-showcase-card[role="button"] {
              opacity: var(--certificate-opacity);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            #certificates .certificate-showcase-card,
            #certificates .certificate-card-overlay,
            #certificates .certificate-card-copy {
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
        <SectionHeading eyebrow="Proof of work" title="MY" accent="CERTS" />

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
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[76%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9c8051]/10 blur-[90px] dark:bg-black/42" />

            {carouselCertificates.map(({ certificate, offset }) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                offset={offset}
                onSelect={() => selectCertificate(offset)}
              />
            ))}

            <div className="absolute bottom-[-10px] left-1/2 z-[30] flex h-[58px] -translate-x-1/2 items-center gap-[4px] rounded-full border border-[#d7cdb6] bg-[#fffaf0]/95 p-[7px] shadow-[0_12px_32px_rgba(82,67,36,0.16)] backdrop-blur-[18px] dark:border-white/[0.09] dark:bg-[#171717]/97 dark:shadow-[0_16px_45px_rgba(0,0,0,0.48)] max-[1600px]:bottom-[-8px] max-[1600px]:h-[54px] max-[1600px]:p-[6px] max-[760px]:bottom-[-4px] max-[760px]:h-[50px] max-[760px]:p-[5px] max-[520px]:h-[46px]">
              <button
                type="button"
                className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-full border border-[#d9cfba] bg-[#f3ebdb] text-[#423b30] transition-[transform,background-color,border-color,color] duration-200 enabled:hover:-translate-x-px enabled:hover:border-[#b99528] enabled:hover:bg-[#ffe5a0] enabled:hover:text-[#30250e] disabled:cursor-default disabled:opacity-35 dark:border-white/[0.07] dark:bg-[#292929] dark:text-[#e7e7e7] dark:enabled:hover:border-[#fac600]/60 dark:enabled:hover:bg-[#343434] dark:enabled:hover:text-[#fac600] max-[1600px]:h-[40px] max-[1600px]:w-[40px] max-[760px]:h-[38px] max-[760px]:w-[38px] max-[520px]:h-[35px] max-[520px]:w-[35px]"
                onClick={previous}
                disabled={total <= 1}
                aria-label="Sertifikat sebelumnya"
              >
                <span className="grid place-items-center max-[1600px]:scale-[0.94]">
                  <NavIcon name="chevron-left" size={17} />
                </span>
              </button>

              <strong
                aria-live="polite"
                className="min-w-[76px] px-[5px] text-center text-[12px] font-extrabold leading-none tracking-[-0.01em] text-[#28241d] dark:text-white max-[1600px]:min-w-[70px] max-[1600px]:text-[11px] max-[760px]:min-w-[64px] max-[760px]:text-[10px] max-[520px]:min-w-[58px] max-[520px]:text-[9px]"
              >
                {currentIndex + 1} / {total}
              </strong>

              <button
                type="button"
                className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-full border border-[#d9cfba] bg-[#f3ebdb] text-[#423b30] transition-[transform,background-color,border-color,color] duration-200 enabled:hover:translate-x-px enabled:hover:border-[#b99528] enabled:hover:bg-[#ffe5a0] enabled:hover:text-[#30250e] disabled:cursor-default disabled:opacity-35 dark:border-white/[0.07] dark:bg-[#292929] dark:text-[#e7e7e7] dark:enabled:hover:border-[#fac600]/60 dark:enabled:hover:bg-[#343434] dark:enabled:hover:text-[#fac600] max-[1600px]:h-[40px] max-[1600px]:w-[40px] max-[760px]:h-[38px] max-[760px]:w-[38px] max-[520px]:h-[35px] max-[520px]:w-[35px]"
                onClick={next}
                disabled={total <= 1}
                aria-label="Sertifikat berikutnya"
              >
                <span className="grid place-items-center max-[1600px]:scale-[0.94]">
                  <NavIcon name="chevron-right" size={17} />
                </span>
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
