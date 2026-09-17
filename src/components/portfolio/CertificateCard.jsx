export function CertificateCard({ certificate, index }) {
  const href = certificate.pdf_url || certificate.img || "";

  return (
    <a
      className="group grid grid-cols-[180px_minmax(0,1fr)_48px] items-center border border-white/10 bg-[#0d0d0d] transition hover:border-[#d7ff3f]/35 max-[640px]:grid-cols-[110px_minmax(0,1fr)]"
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      data-reveal
    >
      <div className="aspect-[4/3] overflow-hidden border-r border-white/10 bg-[#131313]">
        {certificate.img ? (
          <img
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <span className="grid h-full w-full place-items-center font-mono text-xl text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="font-mono text-[0.6rem] font-bold tracking-[0.08em] text-[#d7ff3f] uppercase">
          Certificate · {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="mt-2 text-[clamp(1rem,2vw,1.35rem)] font-bold tracking-[-0.025em]">
          {certificate.title}
        </h3>

        <p className="mt-2 font-mono text-[0.62rem] text-white/35">
          Open credential / PDF
        </p>
      </div>

      <span className="grid h-full place-items-center border-l border-white/10 font-mono text-sm text-white/35 transition-colors group-hover:text-[#d7ff3f] max-[640px]:hidden">
        ↗
      </span>
    </a>
  );
}
