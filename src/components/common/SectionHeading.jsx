export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-eyebrow">// {eyebrow}</span>

      <h2>
        <span>{title}</span>
        {accent ? <strong>{accent}</strong> : null}
      </h2>

      <div className="section-heading-bars" aria-hidden="true">
        <span />
        <span />
      </div>

      {description ? <p>{description}</p> : null}
    </div>
  );
}
