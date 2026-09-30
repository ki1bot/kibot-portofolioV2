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
        className="group block w-full cursor-pointer overflow-hidden rounded-[8px] border border-black/10 bg-white/34 p-0 opacity-35 grayscale-[0.2] transition duration-300 hover:opacity-55 dark:border-white/8 dark:bg-[#111]/68 max-[760px]:hidden"
        onClick={onSelect}
        aria-label={`Pilih ${certificate.title}`}
      >
        <div className="aspect-[4/3] overflow-hidden bg-[#e5e5e2] dark:bg-[#171717]">
          {certificate.img ? (
            <img
              className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
              src={certificate.img}
              alt={certificate.title}
              loading="lazy"
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-[0.72rem] font-black tracking-[0.1em] text-[#777]">
              CERTIFICATE
            </div>
          )}
        </div>
      </button>
    );
  }

  return (
    <article className="relative z-[3] grid min-h-[330px] grid-cols-[0.4fr_0.6fr] overflow-hidden rounded-[9px] border border-[#c6a400]/42 bg-white/82 shadow-[0_22px_70px_rgba(0,0,0,0.13)] animate-[certificate-in_380ms_cubic-bezier(0.22,1,0.36,1)] dark:border-[#ffd400]/32 dark:bg-[#0d0d0d]/94 dark:shadow-[0_28px_80px_rgba(0,0,0,0.5)] max-[900px]:grid-cols-[0.45fr_0.55fr] max-[760px]:grid-cols-1">
      <div className="flex flex-col justify-center border-r border-black/10 px-7 py-7 dark:border-white/8 max-[760px]:border-r-0 max-[760px]:border-b">
        <p className="m-0 font-mono text-[0.55rem] font-black tracking-[0.14em] text-[#987600] uppercase dark:text-[#ffd400]">
          {issuer}
          {year ? ` · ${year}` : ""}
        </p>

        <h3 className="mt-2.5 text-[clamp(1rem,1.45vw,1.42rem)] font-black leading-[1.25] tracking-[-0.025em] uppercase">
          {certificate.title}
        </h3>

        <p className="mt-3.5 text-[0.65rem] leading-[1.65] text-[#666] dark:text-[#999]">
          Learning record and certificate supporting my software-development and
          academic journey.
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-black/10 bg-black/[0.025] px-2.5 py-[5px] text-[0.49rem] text-[#686868] dark:border-white/8 dark:bg-white/[0.035] dark:text-[#8b8b8b]">
            Certificate
          </span>

          <span className="rounded-full border border-black/10 bg-black/[0.025] px-2.5 py-[5px] text-[0.49rem] text-[#686868] dark:border-white/8 dark:bg-white/[0.035] dark:text-[#8b8b8b]">
            Learning
          </span>
        </div>

        {href ? (
          <a
            className="mt-5 inline-flex min-h-[34px] w-fit items-center rounded-[5px] border border-[#c7a400] bg-[#ffd400] px-3.5 text-[0.56rem] font-black text-[#111] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffe03a]"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            ↗ VIEW CERTIFICATE
          </a>
        ) : null}
      </div>

      <div className="grid min-h-[330px] place-items-center overflow-hidden bg-[#e6e6e3] p-3 dark:bg-[#181818] max-[760px]:min-h-0">
        {certificate.img ? (
          <img
            className="h-full max-h-[330px] w-full object-contain"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <div className="grid h-full min-h-[260px] w-full place-items-center text-[0.9rem] font-black tracking-[0.12em] text-[#777]">
            CERTIFICATE
          </div>
        )}
      </div>
    </article>
  );
}
