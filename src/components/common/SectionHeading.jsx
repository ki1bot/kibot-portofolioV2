export function EyebrowBadge({ children }) {
  return (
    <span className="inline-flex h-[34px] items-center rounded-full border border-[#9d7a11]/35 bg-[#fffdf6]/78 px-[16px] font-mono text-[14px] leading-none font-black tracking-[0.18em] text-[#594500] shadow-[0_5px_16px_rgba(95,70,0,0.055)] backdrop-blur-[5px] transition-[color,background-color,border-color,box-shadow] duration-300 dark:border-white/[0.2] dark:bg-black/[0.08] dark:text-[#d0d0cc] dark:shadow-none max-[760px]:h-[30px] max-[760px]:px-[14px] max-[760px]:text-[12px]">
      // {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  extraDividerSpacing = false,
}) {
  return (
    <div className="max-w-[980px]" data-reveal>
      <EyebrowBadge>{eyebrow.toUpperCase()}</EyebrowBadge>

      <h2 className="mt-5 w-fit max-w-full font-sans text-[clamp(4.2rem,6.2vw,7.4rem)] font-black leading-[0.79] tracking-[-0.075em] uppercase max-[760px]:text-[clamp(3.2rem,14vw,4.6rem)]">
        <span className="block text-[#111] dark:text-[#f2f2ef]">{title}</span>

        {accent ? (
          <strong className="mt-[18px] block font-black text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.76)] dark:[-webkit-text-stroke:1.5px_rgba(242,242,239,0.82)]">
            {accent}
          </strong>
        ) : null}
      </h2>

      <div
        className={`flex h-[4px] items-center gap-[13px] ${
          extraDividerSpacing ? "mt-[50px]" : "mt-[25px]"
        }`}
        aria-hidden="true"
      >
        <span className="block h-[4px] w-[64px] shrink-0 rounded-full bg-[#d7a700] shadow-[0_2px_8px_rgba(192,145,0,0.16)] dark:bg-[#ffd400] dark:shadow-none" />

        <span className="block h-[4px] w-[24px] shrink-0 rounded-full bg-[#9f7b00]/48 dark:bg-[#ffd400]/38" />
      </div>

      {description ? (
        <p className="mt-7 max-w-[740px] text-[0.9rem] leading-[1.75] text-[#666663] dark:text-[#949491]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
