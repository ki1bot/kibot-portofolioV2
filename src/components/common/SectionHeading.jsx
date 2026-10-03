export function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-[980px]" data-reveal>
      <span className="font-mono text-[0.62rem] font-black tracking-[0.2em] text-[#9b7900] uppercase dark:text-[#d6ad1d]">
        // {eyebrow}
      </span>

      <h2 className="mt-5 w-fit max-w-full font-sans text-[clamp(4.2rem,6.2vw,7.4rem)] font-black leading-[0.79] tracking-[-0.075em] uppercase max-[760px]:text-[clamp(3.2rem,14vw,4.6rem)]">
        <span className="block text-[#111] dark:text-[#f2f2ef]">{title}</span>

        {accent ? (
          <strong className="mt-[18px] block font-black text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.76)] dark:[-webkit-text-stroke:1.5px_rgba(242,242,239,0.82)]">
            {accent}
          </strong>
        ) : null}
      </h2>

      <div className="mt-7 flex items-center gap-2.5" aria-hidden="true">
        <span className="h-[3px] w-[72px] rounded-full bg-[#ffd400]" />
        <span className="h-[3px] w-[28px] rounded-full bg-[#ffd400]/28" />
      </div>

      {description ? (
        <p className="mt-7 max-w-[740px] text-[0.9rem] leading-[1.75] text-[#666663] dark:text-[#949491]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
