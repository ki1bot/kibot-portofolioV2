export function CertificateCard({
  certificate,
  position = "active",
  onSelect,
}) {
  const href = certificate.pdf_url || certificate.img || "";
  const active = position === "active";

  const positionClass =
    position === "previous"
      ? "z-[1] -translate-x-[133%] -translate-y-1/2 scale-[0.84] opacity-[0.34] grayscale-[0.2] brightness-[0.72] hover:opacity-50 max-[760px]:-translate-x-[146%] max-[760px]:scale-[0.78]"
      : position === "next"
        ? "z-[1] translate-x-[33%] -translate-y-1/2 scale-[0.84] opacity-[0.34] grayscale-[0.2] brightness-[0.72] hover:opacity-50 max-[760px]:translate-x-[46%] max-[760px]:scale-[0.78]"
        : "z-[3] -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 animate-[certificate-enter_420ms_cubic-bezier(0.22,1,0.36,1)]";

  const cardClass = `absolute top-1/2 left-1/2 block w-[min(830px,64vw)] overflow-hidden rounded-[11px] border border-black/15 bg-white/70 p-0 shadow-[0_28px_80px_rgba(0,0,0,0.15)] transition-all duration-[420ms] dark:border-white/12 dark:bg-[#0d0d0d]/94 dark:shadow-[0_28px_80px_rgba(0,0,0,0.5)] max-[760px]:w-[min(760px,88vw)] ${positionClass}`;

  if (!active) {
    return (
      <button
        type="button"
        className={cardClass}
        onClick={onSelect}
        aria-label={`Pilih ${certificate.title}`}
      >
        <span className="grid min-h-[360px] place-items-center overflow-hidden bg-[#212121] max-[760px]:min-h-[300px] max-[520px]:min-h-[250px]">
          {certificate.img ? (
            <img
              className="max-h-[430px] w-full object-contain"
              src={certificate.img}
              alt={certificate.title}
              loading="lazy"
            />
          ) : (
            <span className="text-[0.85rem] font-black tracking-[0.12em] text-[#888]">
              CERTIFICATE
            </span>
          )}
        </span>
      </button>
    );
  }

  return (
    <div className={cardClass}>
      <div className="grid min-h-[360px] place-items-center overflow-hidden bg-[#212121] max-[760px]:min-h-[300px] max-[520px]:min-h-[250px]">
        {certificate.img ? (
          <img
            className="max-h-[430px] w-full object-contain"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <span className="text-[0.85rem] font-black tracking-[0.12em] text-[#888]">
            CERTIFICATE
          </span>
        )}
      </div>

      {href ? (
        <a
          className="absolute bottom-4 left-1/2 inline-flex min-h-[36px] -translate-x-1/2 items-center justify-center rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-4 text-[0.56rem] font-black whitespace-nowrap text-[#111] shadow-[0_8px_22px_rgba(255,212,0,0.18)] transition hover:-translate-x-1/2 hover:-translate-y-0.5 hover:bg-[#ffe13a]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          ↗ VIEW CERTIFICATE
        </a>
      ) : null}
    </div>
  );
}
