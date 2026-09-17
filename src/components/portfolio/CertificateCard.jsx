export function CertificateCard({ certificate, index }) {
  const href = certificate.pdf_url || certificate.img || "";

  return (
    <a
      className="group overflow-hidden border border-black/15 bg-[#f7f3e9] transition duration-200 hover:-translate-y-1 hover:border-black/35 dark:border-white/15 dark:bg-[#121212] dark:hover:border-white/35"
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      data-reveal
    >
      <div className="grid aspect-[4/3] place-items-center overflow-hidden border-b border-black/15 bg-[#e4dfd4] dark:border-white/15 dark:bg-[#0f0f0f]">
        {certificate.img ? (
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
            src={certificate.img}
            alt={certificate.title}
            loading="lazy"
          />
        ) : (
          <span className="text-5xl font-black text-[#68665f] dark:text-[#a7a49d]">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 p-4">
        <span className="font-mono text-[0.64rem] text-[#68665f] dark:text-[#a7a49d]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <p className="mb-1 font-mono text-[0.6rem] font-bold tracking-[0.08em] text-[#718800] uppercase dark:text-[#d8ff3e]">
            Certificate
          </p>

          <h3 className="m-0 text-[0.9rem] leading-[1.45]">
            {certificate.title}
          </h3>
        </div>

        <span className="font-mono text-[0.64rem] text-[#68665f] dark:text-[#a7a49d]">
          ↗
        </span>
      </div>
    </a>
  );
}
