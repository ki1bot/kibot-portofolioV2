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

  const positionClassName =
    position === "active"
      ? "relative z-[3] max-[760px]:mx-auto max-[760px]:w-full max-[760px]:max-w-[640px]"
      : "scale-90 cursor-pointer opacity-30 saturate-[0.65] transition duration-200 hover:opacity-50 max-[760px]:hidden";

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-black/15 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.09)] dark:border-white/10 dark:bg-[#111] dark:shadow-[0_22px_65px_rgba(0,0,0,0.42)] ${positionClassName}`}
      data-reveal={position === "active" ? "" : undefined}
      onClick={position !== "active" ? onSelect : undefined}
    >
      <div className="grid aspect-video place-items-center overflow-hidden border-b border-black/15 bg-[#f1f1ee] dark:border-white/10 dark:bg-[#171717]">
        {certificate.img ? (
          <img
            className="h-full w-full object-cover"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <div className="text-[1.2rem] font-black tracking-[0.1em] text-[#777] dark:text-[#767676]">
            CERTIFICATE
          </div>
        )}
      </div>

      <div className="px-6 pt-[22px] pb-7">
        <p className="m-0 text-[0.69rem] font-extrabold text-[#b28d00] dark:text-[#ffd400]">
          {issuer}
          {year ? ` · ${year}` : ""}
        </p>

        <h3 className="mt-2.5 text-[clamp(1.15rem,1.6vw,1.45rem)] leading-[1.35] tracking-[-0.025em]">
          {certificate.title}
        </h3>

        <div className="mt-3.5 flex flex-wrap gap-[7px]">
          <span className="rounded-full border border-black/15 px-2.5 py-[5px] text-[0.58rem] text-[#555] dark:border-white/10 dark:text-[#aaa]">
            Credential
          </span>

          <span className="rounded-full border border-black/15 px-2.5 py-[5px] text-[0.58rem] text-[#555] dark:border-white/10 dark:text-[#aaa]">
            Achievement
          </span>
        </div>

        {href ? (
          <a
            className="mt-[18px] inline-flex min-h-[38px] items-center rounded-md bg-[#ffd400] px-[15px] text-[0.67rem] font-black text-[#111]"
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            ↗ VIEW CERTIFICATE
          </a>
        ) : null}
      </div>
    </article>
  );
}
