export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-eyebrow">// {eyebrow}</span>

      <h2 className="section-title">
        <span className="section-title-solid">{title}</span>

        {accent ? (
          <span className="section-title-outline">{accent}</span>
        ) : null}
      </h2>

      <div className="section-accent-lines" aria-hidden="true">
        <span />
        <span />
      </div>

      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}
