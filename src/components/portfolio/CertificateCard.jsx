export function CertificateCard({
  certificate,
  position = "active",
  onSelect,
}) {
  const href = certificate.pdf_url || certificate.img || "";
  const active = position === "active";
  const className = `certificate-slide is-${position}`;

  if (!active) {
    return (
      <button
        type="button"
        className={className}
        onClick={onSelect}
        aria-label={`Pilih ${certificate.title}`}
      >
        <span className="certificate-media">
          {certificate.img ? (
            <img src={certificate.img} alt={certificate.title} loading="lazy" />
          ) : (
            <span className="certificate-fallback">CERTIFICATE</span>
          )}
        </span>
      </button>
    );
  }

  return (
    <a
      className={className}
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      aria-label={href ? `Buka ${certificate.title}` : certificate.title}
    >
      <span className="certificate-media">
        {certificate.img ? (
          <img src={certificate.img} alt={certificate.title} loading="lazy" />
        ) : (
          <span className="certificate-fallback">CERTIFICATE</span>
        )}
      </span>
    </a>
  );
}
