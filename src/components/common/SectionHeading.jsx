export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[760px]" data-reveal>
      <p className="mb-5 font-mono text-[0.7rem] font-black tracking-[0.14em] text-[#d8ff3e] uppercase">
        // {eyebrow}
      </p>

      <h2 className="font-black text-[clamp(3.8rem,8.5vw,7.5rem)] leading-[0.82] tracking-[-0.075em] uppercase max-[700px]:text-[clamp(3.3rem,16vw,5.8rem)]">
        <span className="block">{title}</span>

        {accent ? <span className="block text-[#d8ff3e]">{accent}</span> : null}
      </h2>

      {description ? (
        <p className="mt-7 max-w-[620px] text-[0.98rem] leading-[1.85] text-white/55">
          {description}
        </p>
      ) : null}
    </div>
  );
}
