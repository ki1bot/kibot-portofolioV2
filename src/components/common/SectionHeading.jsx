export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[820px]" data-reveal>
      <span className="inline-flex min-h-7 items-center rounded-full border border-black/20 bg-white/25 px-3.5 py-[4px] font-mono text-[0.6rem] font-black tracking-[0.2em] text-[#555] uppercase backdrop-blur-[2px] dark:border-white/15 dark:bg-white/[0.015] dark:text-[#aaa]">
        // {eyebrow}
      </span>

      <h2 className="mt-7 w-fit text-[clamp(3.9rem,5vw,5.8rem)] font-black leading-[0.78] tracking-[-0.075em] uppercase max-[760px]:text-[clamp(3.15rem,16vw,5rem)]">
        <span className="block">{title}</span>

        {accent ? (
          <span className="mt-3 block text-transparent [-webkit-text-stroke:1.55px_rgba(17,17,17,0.8)] dark:[-webkit-text-stroke:1.55px_rgba(245,245,242,0.86)]">
            {accent}
          </span>
        ) : null}
      </h2>

      <div className="mt-7 flex items-center gap-3" aria-hidden="true">
        <span className="h-[3px] w-16 rounded-full bg-[#ffd400]" />
        <span className="h-[3px] w-6 rounded-full bg-[#ffd400]/35" />
      </div>

      {description ? (
        <p className="mt-6 max-w-[700px] text-[0.88rem] leading-[1.78] text-[#666] dark:text-[#9b9b9b]">
          {description}
        </p>
      ) : null}
    </div>
  );
}