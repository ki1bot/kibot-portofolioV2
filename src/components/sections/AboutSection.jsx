import { PERSONAL_INFO } from "../../lib/portfolio";

const SIMPLE_ICONS = "https://cdn.simpleicons.org";

const TECH_CARDS = [
  {
    name: "html",
    mark: "5",
    slug: "html5",
    iconColor: "ffffff",
    iconWidth: 31,
    iconHeight: 34,
    bg: "#e34f26",
    fg: "#ffffff",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "css",
    mark: "CSS",
    slug: "css3",
    iconColor: "ffffff",
    iconWidth: 30,
    iconHeight: 33,
    bg: "#1572b6",
    fg: "#ffffff",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "javascript",
    mark: "JS",
    slug: "javascript",
    iconColor: "111111",
    iconWidth: 30,
    iconHeight: 30,
    bg: "#f7df1e",
    fg: "#111111",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "typescript",
    mark: "TS",
    slug: "typescript",
    iconColor: "ffffff",
    iconWidth: 30,
    iconHeight: 30,
    bg: "#3178c6",
    fg: "#ffffff",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "bootstrap",
    mark: "B",
    slug: "bootstrap",
    iconColor: "ffffff",
    iconWidth: 32,
    iconHeight: 32,
    bg: "#7952b3",
    fg: "#ffffff",
    href: "https://getbootstrap.com/",
  },
  {
    name: "tailwindcss",
    mark: "TW",
    slug: "tailwindcss",
    iconColor: "111111",
    iconWidth: 37,
    iconHeight: 23,
    bg: "#06b6d4",
    fg: "#07191b",
    href: "https://tailwindcss.com/",
  },
  {
    name: "nodejs",
    mark: "JS",
    slug: "nodedotjs",
    iconColor: "ffffff",
    iconWidth: 32,
    iconHeight: 32,
    bg: "#339933",
    fg: "#ffffff",
    href: "https://nodejs.org/",
  },
  {
    name: "vite",
    mark: "V",
    slug: "vite",
    iconColor: "ffffff",
    iconWidth: 32,
    iconHeight: 32,
    bg: "#646cff",
    fg: "#ffffff",
    href: "https://vite.dev/",
  },
  {
    name: "react",
    mark: "R",
    slug: "react",
    iconColor: "111111",
    iconWidth: 34,
    iconHeight: 34,
    bg: "#61dafb",
    fg: "#10191b",
    href: "https://react.dev/",
  },
  {
    name: "angular",
    mark: "A",
    slug: "angular",
    iconColor: "ffffff",
    iconWidth: 33,
    iconHeight: 33,
    bg: "#dd0031",
    fg: "#ffffff",
    href: "https://angular.dev/",
  },
  {
    name: "vue",
    mark: "V",
    slug: "vuedotjs",
    iconColor: "ffffff",
    iconWidth: 35,
    iconHeight: 32,
    bg: "#42b883",
    fg: "#ffffff",
    href: "https://vuejs.org/",
  },
  {
    name: "nextjs",
    mark: "N",
    slug: "nextdotjs",
    iconColor: "ffffff",
    iconWidth: 34,
    iconHeight: 34,
    bg: "#222222",
    fg: "#ffffff",
    href: "https://nextjs.org/",
  },
  {
    name: "nestjs",
    mark: "N",
    slug: "nestjs",
    iconColor: "ffffff",
    iconWidth: 32,
    iconHeight: 32,
    bg: "#e0234e",
    fg: "#ffffff",
    href: "https://nestjs.com/",
  },
  {
    name: "expressjs",
    mark: "EX",
    slug: "express",
    iconColor: "dddddd",
    iconWidth: 37,
    iconHeight: 24,
    bg: "#222222",
    fg: "#ffffff",
    href: "https://expressjs.com/",
  },
  {
    name: "inertiajs",
    mark: "I",
    slug: "inertia",
    iconColor: "ffffff",
    iconWidth: 33,
    iconHeight: 33,
    bg: "#9553e9",
    fg: "#ffffff",
    href: "https://inertiajs.com/",
  },
  {
    name: "php",
    mark: "php",
    slug: "php",
    iconColor: "ffffff",
    iconWidth: 36,
    iconHeight: 24,
    bg: "#777bb4",
    fg: "#ffffff",
    href: "https://www.php.net/",
  },
  {
    name: "codeigniter",
    mark: "CI",
    slug: "codeigniter",
    iconColor: "ffffff",
    iconWidth: 31,
    iconHeight: 34,
    bg: "#dd4814",
    fg: "#ffffff",
    href: "https://codeigniter.com/",
  },
  {
    name: "laravel",
    mark: "L",
    slug: "laravel",
    iconColor: "ffffff",
    iconWidth: 34,
    iconHeight: 34,
    bg: "#ff2d20",
    fg: "#ffffff",
    href: "https://laravel.com/",
  },
  {
    name: "dart",
    mark: "D",
    slug: "dart",
    iconColor: "ffffff",
    iconWidth: 32,
    iconHeight: 32,
    bg: "#0175c2",
    fg: "#ffffff",
    href: "https://dart.dev/",
  },
  {
    name: "flutter",
    mark: "FL",
    slug: "flutter",
    iconColor: "ffffff",
    iconWidth: 31,
    iconHeight: 32,
    bg: "#49b9e8",
    fg: "#ffffff",
    href: "https://flutter.dev/",
  },
  {
    name: "python",
    mark: "Py",
    slug: "python",
    iconColor: "ffffff",
    iconWidth: 31,
    iconHeight: 31,
    bg: "#3776ab",
    fg: "#ffffff",
    href: "https://www.python.org/",
  },
  {
    name: "golang",
    mark: "GO",
    slug: "go",
    iconColor: "111111",
    iconWidth: 38,
    iconHeight: 23,
    bg: "#00add8",
    fg: "#07181b",
    href: "https://go.dev/",
  },
  {
    name: "mysql",
    mark: "SQL",
    slug: "mysql",
    iconColor: "e0edf2",
    iconWidth: 39,
    iconHeight: 27,
    bg: "#4479a1",
    fg: "#ffffff",
    href: "https://www.mysql.com/",
  },
  {
    name: "postgresql",
    mark: "PG",
    slug: "postgresql",
    iconColor: "e0edf2",
    iconWidth: 31,
    iconHeight: 32,
    bg: "#336791",
    fg: "#ffffff",
    href: "https://www.postgresql.org/",
  },
  {
    name: "supabase",
    mark: "S",
    slug: "supabase",
    iconColor: "111111",
    iconWidth: 35,
    iconHeight: 32,
    bg: "#3ecf8e",
    fg: "#071b12",
    href: "https://supabase.com/",
  },
  {
    name: "mongodb",
    mark: "M",
    slug: "mongodb",
    iconColor: "ffffff",
    iconWidth: 20,
    iconHeight: 35,
    bg: "#47a447",
    fg: "#ffffff",
    href: "https://www.mongodb.com/",
  },
  {
    name: "docker",
    mark: "D",
    slug: "docker",
    iconColor: "ffffff",
    iconWidth: 38,
    iconHeight: 29,
    bg: "#2496ed",
    fg: "#ffffff",
    href: "https://www.docker.com/",
  },
  {
    name: "linux",
    mark: "LX",
    slug: "linux",
    iconColor: "ffffff",
    iconWidth: 31,
    iconHeight: 33,
    bg: "#262626",
    fg: "#ffffff",
    href: "https://www.kernel.org/",
  },
  {
    name: "vercel",
    mark: "▲",
    slug: "vercel",
    iconColor: "ffffff",
    iconWidth: 34,
    iconHeight: 30,
    bg: "#222222",
    fg: "#ffffff",
    href: "https://vercel.com/",
  },
  {
    name: "vs code",
    mark: "</>",
    slug: "visualstudiocode",
    iconColor: "ffffff",
    iconWidth: 32,
    iconHeight: 32,
    bg: "#007acc",
    fg: "#ffffff",
    href: "https://code.visualstudio.com/",
  },
];

function FlameIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.7 2.15c.22 2.43-.6 4.15-1.78 5.54-.82.97-1.54 1.82-1.54 3.12 0 1.1.74 1.92 1.74 1.92 1.34 0 2.03-1.13 1.92-2.48 2.04 1.42 3.42 3.8 3.42 6.37C17.46 20.7 14.9 23 11.55 23 7.6 23 4.54 20.1 4.54 16.15c0-3.6 2.03-6.18 4.42-8.57.04 2.12.92 3.3 1.72 3.3.62 0 1.08-.48 1.08-1.13 0-1.08-.83-2.05-.83-3.47 0-1.68 1-3.14 2.77-4.13Z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.57 3.18c2.52-2.1 5.74-1.9 6.89-1.72.18 1.15.38 4.37-1.72 6.89l-5.9 7.08-5.27-5.27 6-6.98Zm1.93 4.06a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM7.82 11.5 4.1 11.1.8 14.4l4.73 1.05 2.29-3.95Zm4.68 4.68.4 3.72-3.3 3.3-1.05-4.73 3.95-2.29ZM6.9 17.1c-2.54.42-4.23 2.12-4.65 4.65 2.53-.42 4.23-2.12 4.65-4.65Z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 3h12v2h3v3c0 3.03-2.16 5.56-5.02 6.13A5.02 5.02 0 0 1 13 16.9V19h4v2H7v-2h4v-2.1a5.02 5.02 0 0 1-2.98-2.77A6.26 6.26 0 0 1 3 8V5h3V3Zm0 4H5v1c0 1.78 1.12 3.3 2.7 3.9A8.08 8.08 0 0 1 6 7Zm12 0a8.08 8.08 0 0 1-1.7 4.9A4.18 4.18 0 0 0 19 8V7h-1Z" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m1.5 8.4 10.5-5 10.5 5L12 13.35 1.5 8.4Zm4.25 3.5L12 14.85l6.25-2.95v4.4c-3.94 2.43-8.56 2.43-12.5 0v-4.4ZM21 10.4h1.5v6.1H21v-6.1Z" />
    </svg>
  );
}

function MetricIcon({ type }) {
  if (type === "flame") {
    return <FlameIcon />;
  }

  if (type === "rocket") {
    return <RocketIcon />;
  }

  if (type === "trophy") {
    return <TrophyIcon />;
  }

  return <EducationIcon />;
}

function TechIcon({ item }) {
  return (
    <>
      <img
        src={`${SIMPLE_ICONS}/${item.slug}/${item.iconColor}`}
        alt=""
        aria-hidden="true"
        draggable="false"
        style={{
          width: `${item.iconWidth}px`,
          height: `${item.iconHeight}px`,
        }}
        className="transform-gpu object-contain transition-transform duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1]"
        onError={(event) => {
          event.currentTarget.hidden = true;

          const fallback = event.currentTarget.nextElementSibling;

          if (fallback) {
            fallback.hidden = false;
          }
        }}
      />

      <strong className="text-[17px] leading-none font-black" hidden>
        {item.mark}
      </strong>
    </>
  );
}

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    {
      value: "S1",
      label: "BACHELOR STUDENT",
      icon: "flame",
    },
    {
      value: projectCount,
      label: "PROJECTS SHIPPED",
      icon: "rocket",
    },
    {
      value: String(certificateCount).replace("+", ""),
      label: "CERTIFICATIONS",
      icon: "trophy",
    },
    {
      value: "SI",
      label: "INFORMATION SYSTEMS",
      icon: "education",
    },
  ];

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden border-t border-black/[0.1] bg-[#f4f3ed] transition-colors duration-300 dark:border-white/[0.045] dark:bg-[#080808]"
      id="about"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,rgba(17,17,16,0.105)_0px,rgba(17,17,16,0.105)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,0,0.105),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(255,184,0,0.045),transparent_30%)] dark:bg-none"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.015))] dark:bg-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-[min(1514px,calc(100%_-_96px))] pt-[56px] pb-[74px] max-[1500px]:w-[calc(100%_-_80px)] max-[1100px]:w-[min(900px,calc(100%_-_42px))] max-[760px]:w-[calc(100%_-_30px)] max-[760px]:pt-[82px] max-[760px]:pb-[90px]">
        <div className="max-w-[730px]" data-reveal="left">
          <span className="inline-flex h-[30px] items-center rounded-full border border-[#9d7a11]/35 bg-[#fffdf6]/78 px-[14px] font-mono text-[12px] leading-none font-black tracking-[0.2em] text-[#594500] shadow-[0_5px_16px_rgba(95,70,0,0.055)] backdrop-blur-[5px] transition-[color,background-color,border-color,box-shadow] duration-300 dark:border-white/[0.2] dark:bg-black/[0.08] dark:text-[#d0d0cc] dark:shadow-none max-[760px]:text-[11px]">
            // WHO AM I
          </span>

          <h2 className="mt-[30px] w-fit max-w-full font-sans text-[92px] font-black leading-[0.79] tracking-[-0.065em] uppercase max-[760px]:text-[clamp(3.5rem,15vw,5.3rem)]">
            <span className="block text-[#15130f] transition-colors duration-300 dark:text-[#f3f3f1]">
              ABOUT
            </span>

            <span className="mt-[20px] block font-black text-transparent [-webkit-text-stroke:1.6px_rgba(21,19,15,0.76)] transition-all duration-300 dark:[-webkit-text-stroke:1.55px_rgba(243,243,241,0.85)]">
              ME.
            </span>
          </h2>

          <div
            className="mt-[25px] flex h-[4px] items-center gap-[13px]"
            aria-hidden="true"
          >
            <span className="block h-[4px] w-[64px] rounded-full bg-[#d7a700] shadow-[0_2px_8px_rgba(192,145,0,0.16)] dark:bg-[#ffd400] dark:shadow-none" />
            <span className="block h-[4px] w-[24px] rounded-full bg-[#9f7b00]/48 dark:bg-[#ffd400]/38" />
          </div>
        </div>

        <div className="mt-[43px] grid grid-cols-[730px_733px] items-start gap-[40px] max-[1500px]:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] max-[1500px]:gap-[34px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[56px] max-[760px]:mt-[38px]">
          <div data-reveal="left">
            <div className="max-w-[730px]">
              <p className="m-0 text-[15px] leading-[1.62] font-normal text-[#403f39] transition-colors duration-300 dark:text-[#aaa9a6] max-[760px]:text-[14px]">
                Hey there! I&apos;m {PERSONAL_INFO.fullName}, an Information
                Systems student specializing in Software Engineering and
                Full-Stack Development. I have hands-on experience building web
                and mobile applications using Laravel, React.js, Next.js, and
                Node.js.
              </p>

              <p className="mt-[17px] mb-0 text-[15px] leading-[1.62] font-normal text-[#403f39] transition-colors duration-300 dark:text-[#aaa9a6] max-[760px]:text-[14px]">
                My journey combines academic learning with practical software
                development through portfolio and collaborative projects.
                I&apos;m driven by a passion to create reliable solutions that
                solve real problems and remain maintainable as they grow.
              </p>
            </div>

            <div className="mt-[42px] grid grid-cols-2 gap-x-[16px] gap-y-[16px] max-[520px]:grid-cols-1">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="group flex h-[117px] cursor-default flex-col justify-center rounded-[9px] border border-[#a99558]/35 bg-[#fffdf8]/88 px-[20px] shadow-[0_8px_22px_rgba(67,52,9,0.055)] backdrop-blur-[4px] transition-[background-color,border-color,box-shadow] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#b98c00]/65 hover:bg-[#fff6cf] hover:shadow-[0_12px_28px_rgba(120,88,0,0.1)] dark:border-[#343434] dark:bg-[#0f0f0f] dark:shadow-none dark:hover:border-[#d4aa00] dark:hover:bg-[#1b170d] dark:hover:shadow-none max-[520px]:h-[108px] max-[520px]:px-[17px]"
                >
                  <span className="block h-[26px] text-[#b98900] transition-colors duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#c39500] dark:text-[#efbd00] dark:group-hover:text-[#ffd400]">
                    <MetricIcon type={metric.icon} />
                  </span>

                  <strong className="mt-[6px] block text-[29px] font-black leading-[0.88] tracking-[-0.045em] text-[#17140e] transition-colors duration-300 dark:text-[#f2f2ef]">
                    {metric.value}
                  </strong>

                  <small className="mt-[8px] block font-mono text-[9px] leading-none font-black tracking-[0.19em] text-[#5f5b50] uppercase transition-colors duration-300 dark:text-[#a5a5a1]">
                    {metric.label}
                  </small>
                </article>
              ))}
            </div>

            <blockquote className="mt-[39px] border-l-[4px] border-[#c99c00] py-[2px] pl-[21px] dark:border-[#ffd400]">
              <p className="m-0 text-[15px] leading-[1.65] text-[#47453f] italic transition-colors duration-300 dark:text-[#aaa9a6]">
                “Clean code is not just about functionality, but about
                maintainability and collaboration.”
              </p>

              <footer className="mt-[11px] font-mono text-[10px] leading-none font-black tracking-[0.055em] text-[#795b00] uppercase transition-colors duration-300 dark:text-[#ffd400]">
                — MY PHILOSOPHY
              </footer>
            </blockquote>
          </div>

          <div className="w-[733px] max-w-full" data-reveal="right">
            <p className="mb-[24px] font-mono text-[12px] leading-[16px] font-black tracking-[0.2em] text-[#494337] uppercase transition-colors duration-300 dark:text-[#d0d0cc] max-[760px]:text-[11px]">
              // STACK &amp; TOOLS
            </p>

            <div className="grid w-full grid-cols-6 gap-[8px] max-[1500px]:grid-cols-5 max-[1100px]:grid-cols-6 max-[800px]:grid-cols-4 max-[520px]:grid-cols-3 max-[380px]:grid-cols-2">
              {TECH_CARDS.map((item) => {
                const darkForeground = item.fg !== "#ffffff";

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka website resmi ${item.name}`}
                    title={`Buka website resmi ${item.name}`}
                    className="group relative flex h-[112px] min-w-0 transform-gpu cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[10px] border border-black/[0.09] px-[7px] py-[10px] shadow-[0_8px_18px_rgba(45,35,8,0.085)] outline-none will-change-transform transition-[transform,border-color,box-shadow] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-[5] hover:-translate-y-[4px] hover:scale-[1.025] hover:border-black/[0.2] hover:shadow-[0_16px_32px_rgba(35,27,6,0.2)] focus-visible:ring-2 focus-visible:ring-[#c99900] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f3ed] dark:border-white/[0.04] dark:shadow-none dark:hover:border-white/[0.18] dark:hover:shadow-[0_16px_34px_rgba(0,0,0,0.4)] dark:focus-visible:ring-[#ffd400] dark:focus-visible:ring-offset-[#080808] max-[1500px]:h-auto max-[1500px]:aspect-square max-[1100px]:h-[112px] max-[1100px]:aspect-auto max-[520px]:h-auto max-[520px]:aspect-square"
                    style={{
                      backgroundColor: item.bg,
                      color: item.fg,
                    }}
                  >
                    <span className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white/[0.07]" />

                    <div className="relative z-[1] flex h-[38px] w-full items-center justify-center">
                      <TechIcon item={item} />
                    </div>

                    <strong className="relative z-[1] mt-[8px] max-w-full overflow-hidden text-center text-[9px] leading-[1.15] font-[800] text-ellipsis whitespace-nowrap">
                      {item.name}
                    </strong>

                    <span
                      className={`absolute right-[7px] bottom-[7px] z-[1] grid h-[18px] w-[18px] transform-gpu place-items-center rounded-full text-[8px] leading-none font-black transition-transform duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] ${
                        darkForeground
                          ? "bg-black/[0.09] text-black/60"
                          : "bg-white/[0.16] text-white/85"
                      }`}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
