export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[980px]" data-reveal>
      <span className="inline-flex min-h-[30px] items-center rounded-full border border-black/20 bg-white/20 px-3.5 py-[5px] font-mono text-[0.58rem] font-black tracking-[0.22em] text-[#555] uppercase backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.015] dark:text-[#aaa]">
        // {eyebrow}
      </span>

      <h2 className="mt-7 w-fit max-w-full font-sans text-[clamp(4rem,6.1vw,7.25rem)] font-black leading-[0.8] tracking-[-0.078em] uppercase max-[760px]:text-[clamp(3rem,14vw,4.25rem)]">
        <span className="block">{title}</span>

        {accent ? (
          <strong className="mt-[18px] block font-black text-transparent [-webkit-text-stroke:1.4px_rgba(17,17,17,0.78)] dark:[-webkit-text-stroke:1.4px_rgba(244,244,241,0.82)]">
            {accent}
          </strong>
        ) : null}
      </h2>

      <div className="mt-7 flex items-center gap-2.5" aria-hidden="true">
        <span className="h-1 w-[66px] rounded-full bg-[#ffd400]" />
        <span className="h-1 w-[25px] rounded-full bg-[#ffd400]/30" />
      </div>

      {description ? (
        <p className="mt-7 max-w-[720px] text-[0.88rem] leading-[1.72] text-[#656565] dark:text-[#969696]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
