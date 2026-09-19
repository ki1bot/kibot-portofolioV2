export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[920px]" data-reveal>
      <span className="inline-flex min-h-7 items-center rounded-full border border-black/25 px-3.5 py-[3px] font-mono text-[0.63rem] font-black tracking-[0.2em] text-[#555] uppercase dark:border-white/20 dark:text-[#aaa]">
        // {eyebrow}
      </span>

      <h2 className="mt-8 grid w-fit text-[clamp(4.4rem,6.4vw,7.6rem)] font-black leading-[0.82] tracking-[-0.075em] uppercase max-[760px]:text-[clamp(3.7rem,18vw,6rem)]">
        <span className="block">{title}</span>

        {accent ? (
          <span className="mt-2.5 block text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.78)] dark:[-webkit-text-stroke:1.5px_rgba(245,245,242,0.78)]">
            {accent}
          </span>
        ) : null}
      </h2>

      <div className="mt-[31px] flex items-center gap-3" aria-hidden="true">
        <span className="h-1 w-16 bg-[#ffd400]" />
        <span className="h-1 w-[25px] bg-[#ffd400]/40" />
      </div>

      {description ? (
        <p className="mt-[30px] max-w-[660px] text-[0.95rem] leading-[1.7] text-[#555] dark:text-[#aaa]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
