export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[760px]" data-reveal>
      <p className="mb-[18px] font-mono text-xs font-extrabold tracking-[0.12em] text-[#718800] uppercase dark:text-[#d8ff3e]">
        // {eyebrow}
      </p>

      <h2 className="grid font-black text-[clamp(3.7rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.08em] uppercase max-[700px]:text-[clamp(3.3rem,17vw,6rem)]">
        {title}

        {accent ? <span className="text-outline">{accent}</span> : null}
      </h2>

      {description ? (
        <p className="mt-[26px] max-w-[610px] text-[0.97rem] leading-[1.8] text-[#68665f] dark:text-[#a7a49d]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
