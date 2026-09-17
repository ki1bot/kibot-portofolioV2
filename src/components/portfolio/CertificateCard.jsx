export function CertificateCard({ certificate, index }) {
  const href = certificate.pdf_url || certificate.img || "";

  return (
    <a
      className="group grid grid-cols-[170px_minmax(0,1fr)_46px] items-stretch overflow-hidden border border-white/10 bg-[#0d0d0d] transition-colors hover:border-[#d8ff3e]/35 max-[620px]:grid-cols-[110px_minmax(0,1fr)]"
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      data-reveal
    >
      <div className="aspect-[4/3] overflow-hidden border-r border-white/10 bg-[#121212]">
        {certificate.img ? (
          <img
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <span className="grid h-full w-full place-items-center font-mono text-lg text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center p-5">
        <p className="font-mono text-[0.59rem] font-black tracking-[0.08em] text-[#d8ff3e] uppercase">
          Certificate · {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="mt-2 text-[clamp(1rem,1.8vw,1.25rem)] font-bold leading-[1.4] tracking-[-0.025em]">
          {certificate.title}
        </h3>

        <p className="mt-2 font-mono text-[0.6rem] text-white/32">
          Open credential / PDF
        </p>
      </div>

      <span className="grid place-items-center border-l border-white/10 font-mono text-sm text-white/30 transition-colors group-hover:text-[#d8ff3e] max-[620px]:hidden">
        ↗
      </span>
    </a>
  );
}
