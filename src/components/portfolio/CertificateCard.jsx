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

  return (
    <article
      className={`certificate-card certificate-${position}`}
      data-reveal={position === "active" ? "" : undefined}
      onClick={position !== "active" ? onSelect : undefined}
    >
      <div className="certificate-preview">
        {certificate.img ? (
          <img src={certificate.img} alt={certificate.title} loading="lazy" />
        ) : (
          <div className="certificate-fallback">CERTIFICATE</div>
        )}
      </div>

      <div className="certificate-info">
        <p>
          {issuer}
          {year ? ` · ${year}` : ""}
        </p>

        <h3>{certificate.title}</h3>

        <div className="certificate-tags">
          <span>Credential</span>
          <span>Achievement</span>
        </div>

        {href ? (
          <a
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
