function getIssuer(title) {
  const value = String(title || "").toLowerCase();

  if (value.includes("dicoding")) {
    return "Dicoding";
  }

  if (value.includes("revou")) {
    return "RevoU";
  }

  if (value.includes("lsp")) {
    return "LSP";
  }

  if (value.includes("kompetensi")) {
    return "Sertifikat Kompetensi";
  }

  return "Certificate";
}

function getYear(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return String(date.getFullYear());
}

export function CertificateCard({
  certificate,
  position = "active",
  onSelect,
}) {
  const href = certificate.pdf_url || certificate.img || "";
  const issuer = getIssuer(certificate.title);
  const year = getYear(certificate.created_at);
  const active = position === "active";

  return (
    <article
      className={`overflow-hidden rounded-[12px] border bg-white/88 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition duration-300 dark:bg-[#101010]/92 dark:shadow-[0_24px_70px_rgba(0,0,0,0.46)] ${
        active
          ? "relative z-[3] border-[#ffd400]/42"
          : "cursor-pointer border-black/12 opacity-32 saturate-[0.72] hover:opacity-50 dark:border-white/10 max-[760px]:hidden"
      }`}
      onClick={active ? undefined : onSelect}
      onKeyDown={(event) => {
        if (!active && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onSelect?.();
        }
      }}
      role={active ? undefined : "button"}
      tabIndex={active ? undefined : 0}
      data-reveal={active ? "" : undefined}
    >
      <div className="grid aspect-[16/9] place-items-center overflow-hidden bg-[#e9e9e6] dark:bg-[#1a1a1a]">
        {certificate.img ? (
          <img
            className="h-full w-full object-contain"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <div className="text-[1rem] font-black tracking-[0.12em] text-[#777]">
            CERTIFICATE
          </div>
        )}
      </div>

      {active ? (
        <div className="border-t border-black/12 px-5 py-4 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="m-0 text-[0.62rem] font-black tracking-[0.04em] text-[#a88400] dark:text-[#ffd400]">
                {issuer}
                {year ? ` · ${year}` : ""}
              </p>

              <h3 className="mt-1.5 text-[clamp(0.96rem,1.25vw,1.18rem)] font-black leading-[1.4] tracking-[-0.02em]">
                {certificate.title}
              </h3>
            </div>

            {href ? (
              <a
                className="inline-flex min-h-[36px] shrink-0 items-center rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-3.5 text-[0.61rem] font-black text-[#111] transition duration-200 hover:-translate-y-0.5"
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                ↗ VIEW CERTIFICATE
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
