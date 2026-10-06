function ExternalLinkIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 10.5 11.5 4.5" />
      <path d="M7.5 4.5h4v4" />
      <path d="M11 9.5v2a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 2 11.5v-6A1.5 1.5 0 0 1 3.5 4H6" />
    </svg>
  );
}

function getCertificateIssuer(certificate) {
  if (certificate.issuer) {
    return String(certificate.issuer).trim().toUpperCase();
  }

  const source = [certificate.title, certificate.img, certificate.pdf_url]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (source.includes("dicoding")) {
    return "DICODING";
  }

  if (source.includes("revou")) {
    return "REVOU";
  }

  if (source.includes("lsp")) {
    return "LSP";
  }

  if (source.includes("google")) {
    return "GOOGLE";
  }

  if (source.includes("microsoft")) {
    return "MICROSOFT";
  }

  if (source.includes("aws") || source.includes("amazon")) {
    return "AWS";
  }

  if (source.includes("oracle")) {
    return "ORACLE";
  }

  if (source.includes("cisco")) {
    return "CISCO";
  }

  return "CERTIFICATE";
}

function getCertificateYear(certificate, issuer) {
  if (certificate.year) {
    return String(certificate.year);
  }

  const candidates = [
    certificate.issued_at,
    certificate.date,
    certificate.created_at,
  ];

  for (const value of candidates) {
    if (!value) {
      continue;
    }

    const date = new Date(value);

    if (!Number.isNaN(date.getTime())) {
      return String(date.getFullYear());
    }
  }

  if (issuer === "DICODING") {
    return "2025";
  }

  return "";
}

function getCertificateDescription(certificate) {
  if (certificate.description) {
    return certificate.description;
  }

  const title = String(certificate.title || "").toLowerCase();

  if (
    title.includes("ai praktis") ||
    title.includes("ai untuk produktivitas")
  ) {
    return "Professional certification in practical AI applications for developer productivity.";
  }

  if (title.includes("fundamental aplikasi web") && title.includes("react")) {
    return "React fundamentals for building interactive single-page applications.";
  }

  if (
    title.includes("fundamental back-end") ||
    title.includes("fundamental backend")
  ) {
    return "Advanced back-end patterns with Node.js, REST APIs, and databases.";
  }

  if (
    title.includes("fundamental front-end") ||
    title.includes("fundamental frontend")
  ) {
    return "Front-end development best practices with accessibility and performance.";
  }

  if (title.includes("pemrograman prosedural") && title.includes("python")) {
    return "Procedural programming fundamentals with Python.";
  }

  if (
    title.includes("architecting on aws") ||
    title.includes("arsitektur cloud") ||
    title.includes("architecture on aws")
  ) {
    return "Cloud architecture design patterns and AWS best practices.";
  }

  if (title.includes("penerapan data science") && title.includes("fabric")) {
    return "Data science workflows and practical analytics with Microsoft Fabric.";
  }

  if (title.includes("membuat aplikasi web") && title.includes("react")) {
    return "Building modern interactive web applications with React.";
  }

  if (title.includes("data analytic") || title.includes("data analytics")) {
    return "Practical data analytics, visualization, and data-driven problem solving.";
  }

  if (
    title.includes("software engineering") ||
    title.includes("software engineer")
  ) {
    return "Software engineering fundamentals and modern application development practices.";
  }

  if (
    title.includes("artificial intelligence") ||
    title.includes("kecerdasan buatan") ||
    /\bai\b/i.test(title)
  ) {
    return "Practical artificial intelligence concepts, modern AI tools, and real-world applications.";
  }

  if (title.includes("react")) {
    return "Modern React development with reusable components and interactive user interfaces.";
  }

  if (title.includes("javascript")) {
    return "JavaScript programming fundamentals and practical modern web development.";
  }

  if (title.includes("python")) {
    return "Python programming fundamentals and practical software development.";
  }

  if (title.includes("frontend") || title.includes("front-end")) {
    return "Front-end web development with modern interfaces, accessibility, and performance.";
  }

  if (title.includes("backend") || title.includes("back-end")) {
    return "Back-end application development with APIs, databases, and server-side architecture.";
  }

  if (title.includes("aws") || title.includes("cloud")) {
    return "Cloud computing architecture, deployment, and modern cloud infrastructure.";
  }

  if (title.includes("android")) {
    return "Android application development and modern mobile application fundamentals.";
  }

  if (title.includes("flutter")) {
    return "Cross-platform mobile application development with Flutter.";
  }

  if (title.includes("lsp") || title.includes("kompetensi")) {
    return "Sertifikasi kompetensi sebagai bukti pencapaian kemampuan teknis dan profesional.";
  }

  if (title.includes("dicoding")) {
    return "Professional certification from Dicoding Indonesia covering practical technology and software development skills.";
  }

  if (title.includes("revou")) {
    return "Professional certification from RevoU covering practical digital and technology skills.";
  }

  return "Professional certification showcasing verified learning, technical skills, and practical competency.";
}

function getCertificateTags(certificate) {
  if (Array.isArray(certificate.tags) && certificate.tags.length) {
    return certificate.tags.slice(0, 2);
  }

  const title = String(certificate.title || "").toLowerCase();

  if (
    title.includes("ai praktis") ||
    title.includes("ai untuk produktivitas")
  ) {
    return ["AI", "Productivity"];
  }

  if (title.includes("fundamental aplikasi web") && title.includes("react")) {
    return ["React", "JavaScript"];
  }

  if (
    title.includes("fundamental back-end") ||
    title.includes("fundamental backend")
  ) {
    return ["Node.js", "Back-End"];
  }

  if (
    title.includes("fundamental front-end") ||
    title.includes("fundamental frontend")
  ) {
    return ["Front-End", "Web"];
  }

  if (title.includes("pemrograman prosedural") && title.includes("python")) {
    return ["Python", "Programming"];
  }

  if (
    title.includes("architecting on aws") ||
    title.includes("arsitektur cloud")
  ) {
    return ["AWS", "Cloud"];
  }

  if (title.includes("penerapan data science") && title.includes("fabric")) {
    return ["Data Science", "Fabric"];
  }

  if (title.includes("membuat aplikasi web") && title.includes("react")) {
    return ["React", "Web"];
  }

  const tags = [];

  function addTag(condition, label) {
    if (condition && tags.length < 2 && !tags.includes(label)) {
      tags.push(label);
    }
  }

  addTag(
    title.includes("artificial intelligence") ||
      title.includes("kecerdasan buatan") ||
      /\bai\b/i.test(title),
    "AI",
  );
  addTag(title.includes("react"), "React");
  addTag(title.includes("javascript"), "JavaScript");
  addTag(title.includes("typescript"), "TypeScript");
  addTag(title.includes("python"), "Python");
  addTag(
    title.includes("frontend") || title.includes("front-end"),
    "Front-End",
  );
  addTag(title.includes("backend") || title.includes("back-end"), "Back-End");
  addTag(title.includes("data"), "Data");
  addTag(title.includes("aws"), "AWS");
  addTag(title.includes("cloud"), "Cloud");
  addTag(title.includes("android"), "Android");
  addTag(title.includes("flutter"), "Flutter");
  addTag(title.includes("web"), "Web");

  if (!tags.length) {
    tags.push("Certificate");
  }

  return tags.slice(0, 2);
}

function getCardVisual(offset) {
  if (offset === 0) {
    return {
      x: "0%",
      scale: 1,
      opacity: 1,
      brightness: 1,
      grayscale: 0,
      zIndex: 10,
      pointerEvents: "auto",
    };
  }

  if (offset === -1) {
    return {
      x: "-74%",
      scale: 0.68,
      opacity: 0.4,
      brightness: 0.7,
      grayscale: 0.14,
      zIndex: 4,
      pointerEvents: "auto",
    };
  }

  if (offset === 1) {
    return {
      x: "74%",
      scale: 0.68,
      opacity: 0.4,
      brightness: 0.7,
      grayscale: 0.14,
      zIndex: 4,
      pointerEvents: "auto",
    };
  }

  if (offset < -1) {
    return {
      x: "-148%",
      scale: 0.56,
      opacity: 0,
      brightness: 0.58,
      grayscale: 0.22,
      zIndex: 1,
      pointerEvents: "none",
    };
  }

  return {
    x: "148%",
    scale: 0.56,
    opacity: 0,
    brightness: 0.58,
    grayscale: 0.22,
    zIndex: 1,
    pointerEvents: "none",
  };
}

export function CertificateCard({ certificate, offset = 0, onSelect }) {
  const active = offset === 0;
  const selectable = Math.abs(offset) === 1;
  const href = certificate.pdf_url || certificate.img || "";
  const issuer = getCertificateIssuer(certificate);
  const year = getCertificateYear(certificate, issuer);
  const description = getCertificateDescription(certificate);
  const tags = getCertificateTags(certificate);
  const visual = getCardVisual(offset);

  const style = {
    "--certificate-x": visual.x,
    "--certificate-scale": visual.scale,
    "--certificate-opacity": visual.opacity,
    "--certificate-brightness": visual.brightness,
    "--certificate-grayscale": visual.grayscale,
    zIndex: visual.zIndex,
    pointerEvents: visual.pointerEvents,
  };

  function handleKeyDown(event) {
    if (!selectable || !onSelect) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  }

  return (
    <div
      className={`certificate-showcase-card absolute top-1/2 left-1/2 h-[510px] w-[min(1340px,82vw)] overflow-hidden rounded-[15px] border bg-[#202020] shadow-[0_30px_90px_rgba(0,0,0,0.48)] outline-none max-[1100px]:h-[455px] max-[1100px]:w-[86vw] max-[760px]:h-[400px] max-[760px]:w-[90vw] max-[520px]:h-[360px] max-[520px]:w-[92vw] ${
        active ? "border-white/[0.085]" : "border-white/[0.055]"
      } ${
        selectable
          ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ffd400]/50"
          : ""
      }`}
      style={style}
      role={selectable ? "button" : undefined}
      tabIndex={selectable ? 0 : -1}
      aria-current={active ? "true" : undefined}
      aria-label={
        selectable ? `Tampilkan sertifikat ${certificate.title}` : undefined
      }
      onClick={selectable ? onSelect : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#292929_0%,#1a1a1a_58%,#111111_100%)]" />

      <div className="absolute top-[18px] bottom-[18px] left-1/2 w-[53%] -translate-x-1/2 overflow-hidden bg-[#263541] max-[760px]:top-[15px] max-[760px]:bottom-[15px] max-[760px]:w-[58%] max-[520px]:top-[13px] max-[520px]:bottom-[13px] max-[520px]:w-[64%]">
        {certificate.img ? (
          <img
            className="relative z-[1] h-full w-full object-contain"
            src={certificate.img}
            alt={certificate.title}
            loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
            draggable="false"
          />
        ) : (
          <div className="relative z-[1] grid h-full w-full place-items-center">
            <span className="font-mono text-[0.72rem] font-black tracking-[0.18em] text-white/45">
              CERTIFICATE
            </span>
          </div>
        )}
      </div>

      <div
        className={`certificate-card-overlay pointer-events-none absolute inset-0 z-[2] ${
          active ? "is-active" : ""
        }`}
      />

      <div
        className={`certificate-card-copy absolute inset-y-0 left-0 z-[3] flex w-[54%] flex-col justify-end px-[31px] pb-[61px] max-[1100px]:px-[28px] max-[1100px]:pb-[52px] max-[760px]:w-[70%] max-[760px]:px-[22px] max-[760px]:pb-[45px] max-[520px]:w-[84%] max-[520px]:px-[18px] max-[520px]:pb-[38px] ${
          active ? "is-active pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="max-w-[650px]">
          <div className="font-mono text-[11px] font-black leading-none tracking-[0.2em] text-[#ffd400] uppercase max-[760px]:text-[10px] max-[520px]:text-[9px]">
            {issuer}
            {year ? ` · ${year}` : ""}
          </div>

          <h3 className="mt-[11px] mb-0 line-clamp-2 max-w-[650px] text-[24px] font-black leading-[1.06] tracking-[-0.035em] text-white uppercase max-[1100px]:text-[21px] max-[760px]:line-clamp-2 max-[760px]:text-[18px] max-[520px]:mt-[8px] max-[520px]:text-[15px]">
            {certificate.title}
          </h3>

          <p className="mt-[13px] line-clamp-2 max-w-[570px] text-[14px] font-normal leading-[1.55] tracking-[-0.01em] text-[#bdbdbd] max-[1100px]:text-[13px] max-[760px]:hidden">
            {description}
          </p>

          <div className="mt-[15px] flex flex-wrap items-center gap-[7px] max-[520px]:mt-[11px]">
            {tags.map((tag) => (
              <span
                key={`${certificate.id}-${tag}`}
                className="inline-flex h-[25px] items-center justify-center rounded-full border border-white/[0.27] bg-black/[0.08] px-[11px] text-[11px] font-bold leading-none tracking-[0.01em] text-[#f0f0f0] backdrop-blur-[4px] max-[760px]:h-[23px] max-[760px]:px-[9px] max-[760px]:text-[10px] max-[520px]:h-[21px] max-[520px]:text-[9px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {href ? (
            <a
              className="mt-[22px] inline-flex h-[38px] items-center justify-center gap-[8px] rounded-[7px] border border-[#fdc600] bg-[#fdc600] px-[18px] text-[12px] font-black leading-none tracking-[0.045em] text-black transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-[#ffd21a] hover:bg-[#ffd21a] hover:shadow-[0_8px_24px_rgba(253,198,0,0.18)] max-[760px]:mt-[17px] max-[760px]:h-[35px] max-[760px]:px-[15px] max-[760px]:text-[10px] max-[520px]:mt-[13px] max-[520px]:h-[32px] max-[520px]:px-[12px] max-[520px]:text-[9px]"
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ExternalLinkIcon size={12} />
              <span>VIEW CERTIFICATE</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[4] rounded-[inherit] ring-1 ring-inset ring-white/[0.035]" />
    </div>
  );
}
