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

  if (!active) {
    return (
      <button
        type="button"
        className="block h-full w-full cursor-pointer overflow-hidden rounded-[10px] border border-black/12 bg-white/45 p-0 opacity-35 grayscale-[0.2] transition duration-300 hover:opacity-55 dark:border-white/10 dark:bg-[#111]/80"
        onClick={onSelect}
        aria-label={`Pilih ${certificate.title}`}
      >
        <div className="grid h-full min-h-[280px] place-items-center overflow-hidden bg-[#e4e4e1] p-5 dark:bg-[#171717]">
          {certificate.img ? (
            <img
              className="h-full max-h-[310px] w-full object-contain"
              src={certificate.img}
              alt={certificate.title}
              loading="lazy"
            />
          ) : (
            <span className="text-[0.72rem] font-black tracking-[0.1em] text-[#777]">
              CERTIFICATE
            </span>
          )}
        </div>
      </button>
    );
  }

  return (
    <article className="certificate-active grid min-h-[390px] grid-cols-[0.36fr_0.64fr] overflow-hidden rounded-[12px] border border-[#c7a400]/45 bg-white/78 shadow-[0_24px_75px_rgba(0,0,0,0.13)] dark:border-[#ffd400]/30 dark:bg-[#0d0d0d]/95 dark:shadow-[0_30px_90px_rgba(0,0,0,0.52)] max-[850px]:grid-cols-1">
      <div className="flex flex-col justify-center border-r border-black/10 px-8 py-8 dark:border-white/9 max-[850px]:border-r-0 max-[850px]:border-b">
        <p className="m-0 font-mono text-[0.57rem] font-black tracking-[0.16em] text-[#967500] uppercase dark:text-[#ffd400]">
          {issuer}
          {year ? ` · ${year}` : ""}
        </p>

        <h3 className="display-font mt-3 text-[clamp(1.08rem,1.6vw,1.55rem)] font-black leading-[1.2] tracking-[-0.025em] uppercase">
          {certificate.title}
        </h3>

        <p className="mt-4 text-[0.68rem] leading-[1.68] text-[#656565] dark:text-[#999]">
          Certificate and learning record supporting my academic and
          software-development journey.
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-[5px] text-[0.49rem] text-[#696969] dark:border-white/9 dark:bg-white/[0.04] dark:text-[#888]">
            Certificate
          </span>

          <span className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-[5px] text-[0.49rem] text-[#696969] dark:border-white/9 dark:bg-white/[0.04] dark:text-[#888]">
            Learning
          </span>
        </div>

        {href ? (
          <a
            className="mt-6 inline-flex min-h-[38px] w-fit items-center rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-4 text-[0.58rem] font-black text-[#111] shadow-[0_8px_22px_rgba(255,212,0,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffe13a]"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            ↗ VIEW CERTIFICATE
          </a>
        ) : null}
      </div>

      <div className="grid min-h-[390px] place-items-center overflow-hidden bg-[#e5e5e2] p-4 dark:bg-[#1a1a1a] max-[850px]:min-h-[260px]">
        {certificate.img ? (
          <img
            className="h-full max-h-[380px] w-full object-contain"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <div className="grid h-full min-h-[260px] place-items-center text-[0.9rem] font-black tracking-[0.12em] text-[#777]">
            CERTIFICATE
          </div>
        )}
      </div>
    </article>
  );
}
