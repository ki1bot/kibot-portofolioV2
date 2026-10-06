function ExternalLinkIcon({ size = 12 }) {
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

const CERTIFICATE_TEXT_PRESETS = [
  {
    matches: ["ai praktis", "ai untuk produktivitas"],
    description:
      "Professional certification in practical AI applications for developer productivity.",
    tags: ["AI", "Productivity"],
  },
  {
    matches: ["fundamental pemrosesan data"],
    description:
      "Data processing fundamentals including collection, transformation, and analysis workflows.",
    tags: ["Data Processing", "Data Science"],
  },
  {
    matches: ["fundamental aplikasi web dengan react"],
    description:
      "React fundamentals for building interactive single-page applications.",
    tags: ["React", "JavaScript"],
  },
  {
    matches: [
      "fundamental back-end dengan javascript",
      "fundamental backend dengan javascript",
    ],
    description:
      "Advanced back-end patterns with Node.js, REST APIs, and databases.",
    tags: ["Node.js", "Back-End"],
  },
  {
    matches: [
      "fundamental front-end web development",
      "fundamental front-end",
      "fundamental frontend",
    ],
    description:
      "Front-end development best practices with accessibility and performance.",
    tags: ["Front-End", "Web"],
  },
  {
    matches: ["pemrograman prosedural dengan python"],
    description: "Procedural programming fundamentals with Python.",
    tags: ["Python", "Programming"],
  },
  {
    matches: [
      "architecting on aws",
      "arsitektur cloud aws",
      "arsitektur cloud di aws",
      "architecture on aws",
    ],
    description: "Cloud architecture design patterns and AWS best practices.",
    tags: ["AWS", "Cloud"],
  },
  {
    matches: ["penerapan data science dengan microsoft fabric"],
    description:
      "Data science workflows and practical analytics with Microsoft Fabric.",
    tags: ["Data Science", "Fabric"],
  },
  {
    matches: ["membuat aplikasi web dengan react"],
    description: "Building modern interactive web applications with React.",
    tags: ["React", "Web"],
  },
  {
    matches: ["data analytics", "data analytic"],
    description:
      "Practical data analytics, visualization, and data-driven problem solving.",
    tags: ["Data Analytics", "Visualization"],
  },
  {
    matches: ["software engineering", "software engineer"],
    description:
      "Software engineering fundamentals and modern application development practices.",
    tags: ["Software Engineering", "Development"],
  },
  {
    matches: ["machine learning"],
    description:
      "Machine learning fundamentals covering data preparation, model development, and evaluation.",
    tags: ["Machine Learning", "AI"],
  },
  {
    matches: ["deep learning"],
    description:
      "Deep learning fundamentals covering neural networks, training, and practical AI applications.",
    tags: ["Deep Learning", "AI"],
  },
  {
    matches: ["data science"],
    description:
      "Data science fundamentals covering data preparation, analysis, modeling, and practical insights.",
    tags: ["Data Science", "Analytics"],
  },
  {
    matches: ["sql", "structured query language"],
    description:
      "Database querying fundamentals covering SQL, relational data, filtering, and aggregation.",
    tags: ["SQL", "Database"],
  },
  {
    matches: ["database", "basis data"],
    description:
      "Database fundamentals covering relational data modeling, querying, and data management.",
    tags: ["Database", "SQL"],
  },
  {
    matches: ["cloud practitioner"],
    description:
      "Cloud computing fundamentals covering AWS services, architecture, security, and infrastructure.",
    tags: ["AWS", "Cloud"],
  },
  {
    matches: ["cloud computing"],
    description:
      "Cloud computing fundamentals covering infrastructure, scalability, deployment, and cloud technologies.",
    tags: ["Cloud", "Infrastructure"],
  },
  {
    matches: ["devops"],
    description:
      "DevOps fundamentals covering automation, deployment workflows, and modern software delivery.",
    tags: ["DevOps", "Automation"],
  },
  {
    matches: ["docker"],
    description:
      "Containerization fundamentals covering Docker images, containers, and deployment workflows.",
    tags: ["Docker", "Container"],
  },
  {
    matches: ["android"],
    description:
      "Android application development fundamentals covering mobile interfaces and application development.",
    tags: ["Android", "Mobile"],
  },
  {
    matches: ["flutter"],
    description:
      "Cross-platform mobile application development with Flutter and Dart.",
    tags: ["Flutter", "Dart"],
  },
  {
    matches: ["cyber security", "cybersecurity", "keamanan siber"],
    description:
      "Cybersecurity fundamentals covering digital threats, protection, and secure technology practices.",
    tags: ["Cybersecurity", "Security"],
  },
  {
    matches: ["network", "jaringan komputer"],
    description:
      "Computer networking fundamentals covering architecture, protocols, connectivity, and infrastructure.",
    tags: ["Networking", "Infrastructure"],
  },
  {
    matches: ["linux"],
    description:
      "Linux fundamentals covering command-line workflows, system administration, and development environments.",
    tags: ["Linux", "System"],
  },
  {
    matches: ["lsp semester 1"],
    description:
      "Professional competency certification validating technical skills during the first semester assessment.",
    tags: ["LSP", "Competency"],
  },
  {
    matches: ["lsp semester 2"],
    description:
      "Professional competency certification validating technical skills during the second semester assessment.",
    tags: ["LSP", "Competency"],
  },
  {
    matches: ["sertifikat kompetensi", "sertifikasi kompetensi"],
    description:
      "Professional competency certification demonstrating verified technical capability and practical skills.",
    tags: ["Competency", "Professional"],
  },
];

function getCertificateSource(certificate) {
  return [
    certificate.title,
    certificate.img,
    certificate.pdf_url,
    certificate.issuer,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getCertificateIssuer(certificate) {
  if (certificate.issuer) {
    return String(certificate.issuer).trim().toUpperCase();
  }

  const source = getCertificateSource(certificate);

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

  if (source.includes("ibm")) {
    return "IBM";
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

function getPreset(certificate) {
  const source = getCertificateSource(certificate);

  return CERTIFICATE_TEXT_PRESETS.find((preset) =>
    preset.matches.some((match) => source.includes(match)),
  );
}

function getCertificateDescription(certificate) {
  if (certificate.description) {
    return String(certificate.description).trim();
  }

  const preset = getPreset(certificate);

  if (preset) {
    return preset.description;
  }

  const source = getCertificateSource(certificate);

  if (
    source.includes("artificial intelligence") ||
    source.includes("kecerdasan buatan") ||
    /\bai\b/i.test(source)
  ) {
    return "Artificial intelligence fundamentals covering modern AI concepts, tools, and practical applications.";
  }

  if (source.includes("react")) {
    return "Modern React development with reusable components and interactive user interfaces.";
  }

  if (source.includes("javascript")) {
    return "JavaScript programming fundamentals and practical modern web development.";
  }

  if (source.includes("typescript")) {
    return "TypeScript fundamentals for structured and maintainable application development.";
  }

  if (source.includes("python")) {
    return "Python programming fundamentals and practical software development.";
  }

  if (source.includes("front-end") || source.includes("frontend")) {
    return "Front-end development best practices with modern interfaces and web technologies.";
  }

  if (source.includes("back-end") || source.includes("backend")) {
    return "Back-end application development with APIs, databases, and server-side architecture.";
  }

  if (
    source.includes("aws") ||
    source.includes("cloud") ||
    source.includes("amazon")
  ) {
    return "Cloud computing architecture, deployment, and modern cloud infrastructure.";
  }

  if (source.includes("data")) {
    return "Data processing and analysis fundamentals for practical data-driven workflows.";
  }

  if (source.includes("dicoding")) {
    return "Professional certification from Dicoding Indonesia covering practical technology skills.";
  }

  if (source.includes("revou")) {
    return "Professional certification from RevoU covering practical digital and technology skills.";
  }

  if (source.includes("lsp") || source.includes("kompetensi")) {
    return "Professional competency certification demonstrating verified technical skills.";
  }

  return "Professional certification showcasing verified learning and practical competency.";
}

function getCertificateTags(certificate) {
  if (Array.isArray(certificate.tags) && certificate.tags.length) {
    return certificate.tags
      .map((tag) => String(tag).trim())
      .filter(Boolean)
      .slice(0, 2);
  }

  const preset = getPreset(certificate);

  if (preset) {
    return preset.tags.slice(0, 2);
  }

  const source = getCertificateSource(certificate);
  const tags = [];

  function addTag(condition, label) {
    if (condition && tags.length < 2 && !tags.includes(label)) {
      tags.push(label);
    }
  }

  addTag(
    source.includes("artificial intelligence") ||
      source.includes("kecerdasan buatan") ||
      /\bai\b/i.test(source),
    "AI",
  );

  addTag(source.includes("machine learning"), "Machine Learning");
  addTag(source.includes("data science"), "Data Science");
  addTag(source.includes("analytics"), "Analytics");
  addTag(source.includes("data"), "Data");
  addTag(source.includes("react"), "React");
  addTag(source.includes("javascript"), "JavaScript");
  addTag(source.includes("typescript"), "TypeScript");
  addTag(source.includes("python"), "Python");

  addTag(
    source.includes("front-end") || source.includes("frontend"),
    "Front-End",
  );

  addTag(source.includes("back-end") || source.includes("backend"), "Back-End");

  addTag(source.includes("node"), "Node.js");
  addTag(source.includes("sql"), "SQL");
  addTag(source.includes("database"), "Database");
  addTag(source.includes("aws"), "AWS");
  addTag(source.includes("cloud"), "Cloud");
  addTag(source.includes("android"), "Android");
  addTag(source.includes("flutter"), "Flutter");
  addTag(source.includes("dart"), "Dart");
  addTag(source.includes("docker"), "Docker");
  addTag(source.includes("devops"), "DevOps");
  addTag(source.includes("linux"), "Linux");
  addTag(source.includes("security"), "Security");
  addTag(source.includes("network"), "Networking");
  addTag(source.includes("web"), "Web");

  if (!tags.length) {
    const issuer = getCertificateIssuer(certificate);

    if (issuer !== "CERTIFICATE") {
      tags.push(issuer);
    }

    if (tags.length < 2) {
      tags.push("Certification");
    }
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
          ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-[#fdc600]/50"
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
        className={`certificate-card-copy absolute inset-y-0 left-0 z-[3] flex w-[54%] flex-col justify-end px-[31px] pb-[61px] max-[1600px]:px-[29px] max-[1600px]:pb-[58px] max-[1100px]:w-[62%] max-[1100px]:px-[26px] max-[1100px]:pb-[49px] max-[760px]:w-[72%] max-[760px]:px-[22px] max-[760px]:pb-[43px] max-[520px]:w-[86%] max-[520px]:px-[18px] max-[520px]:pb-[37px] ${
          active ? "is-active pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="max-w-[700px]">
          <div className="font-mono text-[11px] font-black leading-none tracking-[0.2em] text-[#fdc600] uppercase max-[1600px]:text-[10px] max-[760px]:text-[9px]">
            {issuer}
            {year ? ` · ${year}` : ""}
          </div>

          <h3 className="mt-[11px] mb-0 line-clamp-2 max-w-[700px] text-[24px] font-black leading-[1.06] tracking-[-0.035em] text-white uppercase max-[1600px]:text-[22px] max-[1100px]:text-[20px] max-[760px]:text-[18px] max-[520px]:mt-[8px] max-[520px]:text-[15px]">
            {certificate.title}
          </h3>

          <p className="mt-[13px] line-clamp-2 max-w-[650px] text-[14px] font-normal leading-[1.55] tracking-[-0.01em] text-[#c5c5c5] max-[1600px]:text-[13px] max-[1100px]:text-[12px] max-[760px]:hidden">
            {description}
          </p>

          <div className="mt-[15px] flex flex-wrap items-center gap-[7px] max-[1600px]:mt-[14px] max-[1600px]:gap-[6px] max-[520px]:mt-[10px]">
            {tags.map((tag) => (
              <span
                key={`${certificate.id}-${tag}`}
                className="inline-flex h-[25px] items-center justify-center rounded-full border border-white/[0.27] bg-black/[0.08] px-[11px] text-[11px] font-bold leading-none tracking-[0.01em] text-[#f0f0f0] backdrop-blur-[4px] max-[1600px]:h-[23px] max-[1600px]:px-[10px] max-[1600px]:text-[10px] max-[760px]:h-[22px] max-[760px]:px-[9px] max-[760px]:text-[9px] max-[520px]:h-[20px] max-[520px]:px-[8px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {href ? (
            <a
              className="mt-[22px] inline-flex h-[36px] w-[196px] shrink-0 items-center justify-center gap-[9px] rounded-[10px] border border-[#fdc600] bg-[#fdc600] px-0 !text-[12px] !font-black !leading-none tracking-[0.025em] !text-[#080808] shadow-none transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-[#ffd21a] hover:bg-[#ffd21a] hover:shadow-[0_8px_22px_rgba(253,198,0,0.18)] max-[760px]:mt-[17px] max-[520px]:mt-[13px]"
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <span className="grid h-[12px] w-[12px] shrink-0 place-items-center">
                <ExternalLinkIcon size={12} />
              </span>

              <span className="whitespace-nowrap">VIEW CERTIFICATE</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[4] rounded-[inherit] ring-1 ring-inset ring-white/[0.035]" />
    </div>
  );
}
