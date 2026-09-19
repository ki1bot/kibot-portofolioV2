export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[760px]" data-reveal>
      <span className="inline-flex min-h-7 items-center rounded-full border border-black/20 px-3.5 py-[4px] font-mono text-[0.62rem] font-black tracking-[0.2em] text-[#555] uppercase dark:border-white/15 dark:text-[#aaa]">
        // {eyebrow}
      </span>

      <h2 className="mt-7 w-fit text-[clamp(3.8rem,4.2vw,5rem)] font-black leading-[0.82] tracking-[-0.07em] uppercase max-[760px]:text-[clamp(3.35rem,16vw,5rem)]">
        <span className="block">{title}</span>

        {accent ? (
          <span className="mt-2 block text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.78)] dark:[-webkit-text-stroke:1.5px_rgba(245,245,242,0.82)]">
            {accent}
          </span>
        ) : null}
      </h2>

      <div className="mt-6 flex items-center gap-3" aria-hidden="true">
        <span className="h-[3px] w-16 bg-[#ffd400]" />
        <span className="h-[3px] w-6 bg-[#ffd400]/35" />
      </div>

      {description ? (
        <p className="mt-6 max-w-[650px] text-[0.9rem] leading-[1.75] text-[#666] dark:text-[#9b9b9b]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
