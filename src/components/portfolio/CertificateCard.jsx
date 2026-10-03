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
        : "z-[3] -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 animate-[certificate-enter_520ms_cubic-bezier(0.16,1,0.3,1)]";

  const cardClass = `absolute top-1/2 left-1/2 block w-[min(760px,64vw)] overflow-hidden rounded-[11px] border border-black/12 bg-[var(--card-bg)] p-0 shadow-[0_24px_70px_rgba(0,0,0,0.14)] transition-[translate,scale,opacity,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.44)] max-[760px]:w-[min(620px,88vw)] ${positionClass}`;

  if (!active) {
    return (
      <button
        type="button"
        className={cardClass}
        onClick={onSelect}
        aria-label={`Pilih ${certificate.title}`}
      >
        <span className="grid min-h-[320px] place-items-center overflow-hidden bg-[#e7e6e0] dark:bg-[#191919] max-[760px]:min-h-[270px] max-[520px]:min-h-[220px]">
          {certificate.img ? (
            <img
              className="max-h-[380px] w-full object-contain max-[760px]:max-h-[320px] max-[520px]:max-h-[250px]"
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
        <span className="block border-t border-black/10 px-5 py-4 text-left dark:border-white/10 max-[520px]:px-4">
          <span className="font-mono text-[0.55rem] font-bold tracking-[0.15em] text-[#8d7000] uppercase dark:text-[#d4ad20]">
            Certificate
          </span>
          <span className="mt-1 block line-clamp-1 text-[0.84rem] font-black leading-[1.4]">
            {certificate.title}
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className={cardClass}>
      <div className="grid min-h-[320px] place-items-center overflow-hidden bg-[#e7e6e0] dark:bg-[#191919] max-[760px]:min-h-[270px] max-[520px]:min-h-[220px]">
        {certificate.img ? (
          <img
            className="max-h-[380px] w-full object-contain max-[760px]:max-h-[320px] max-[520px]:max-h-[250px]"
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
          className="absolute top-3 right-3 inline-flex min-h-[34px] items-center justify-center rounded-full border border-[#c7a400] bg-[#ffd400] px-4 text-[0.58rem] font-black whitespace-nowrap text-[#111] shadow-[0_8px_22px_rgba(255,212,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#ffe13a]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          ↗ VIEW CERTIFICATE
        </a>
      ) : null}

      <div className="border-t border-black/10 px-5 py-4 dark:border-white/10 max-[520px]:px-4">
        <span className="font-mono text-[0.55rem] font-bold tracking-[0.15em] text-[#8d7000] uppercase dark:text-[#d4ad20]">
          Certificate{" "}
          {certificate.created_at
            ? `· ${new Date(certificate.created_at).getFullYear()}`
            : ""}
        </span>
        <h3 className="mt-1 mb-0 line-clamp-1 text-[0.84rem] font-black leading-[1.4]">
          {certificate.title}
        </h3>
      </div>
    </div>
  );
}
