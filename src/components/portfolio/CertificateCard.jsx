export function CertificateCard({ certificate, index }) {
  const href = certificate.pdf_url || certificate.img || "";

  return (
    <a
      className="certificate-card"
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      data-reveal
    >
      <div className="certificate-image">
        {certificate.img ? (
          <img src={certificate.img} alt={certificate.title} loading="lazy" />
        ) : (
          <span>{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>

      <div className="certificate-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>

        <div>
          <p>Certificate</p>

          <h3>{certificate.title}</h3>
        </div>

        <span>↗</span>
      </div>
    </a>
  );
}
