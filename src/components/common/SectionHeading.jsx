export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div
      className="grid grid-cols-[minmax(0,1fr)_minmax(260px,0.45fr)] items-end gap-12 max-[800px]:grid-cols-1 max-[800px]:gap-7"
      data-reveal
    >
      <div>
        <p className="mb-5 font-mono text-[0.67rem] font-black tracking-[0.14em] text-[#d8ff3e] uppercase">
          // {eyebrow}
        </p>

        <h2 className="text-[clamp(3.9rem,8.5vw,7.6rem)] font-black leading-[0.82] tracking-[-0.078em] uppercase max-[700px]:text-[clamp(3.2rem,16vw,5.5rem)]">
          <span className="block">{title}</span>

          {accent ? (
            <span className="block text-[#d8ff3e]">{accent}</span>
          ) : null}
        </h2>
      </div>

      {description ? (
        <div className="border-t border-white/15 pt-5">
          <p className="max-w-[430px] text-[0.93rem] leading-[1.85] text-white/50">
            {description}
          </p>
        </div>
      ) : null}
    </div>
  );
}
