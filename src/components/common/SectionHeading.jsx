export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-eyebrow">// {eyebrow}</p>

      <h2 className="section-title">
        {title}

        {accent ? <span>{accent}</span> : null}
      </h2>

      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}
