import { NAV_ITEMS } from "../../data/portfolioPage";
import { SOCIAL_LINKS } from "../../data/site";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { HugeIcon } from "../common/HugeIcon";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.1] bg-[#f9f8f4] transition-colors duration-300 dark:border-white/[0.055] dark:bg-[#090909]">
      <div className="mx-auto grid w-[min(1510px,calc(100%_-_128px))] grid-cols-[0.9fr_1fr_1fr] items-start gap-[48px] py-[64px] max-[1240px]:w-[min(1100px,calc(100%_-_64px))] max-[1100px]:gap-[25px] max-[980px]:grid-cols-2 max-[760px]:w-[calc(100%_-_30px)] max-[760px]:grid-cols-1 max-[760px]:gap-[24px] max-[760px]:py-[45px]">
        <div className="min-w-0 pt-[2px] max-[980px]:col-span-2 max-[760px]:col-auto">
          <a
            href="/"
            className="inline-flex font-sans text-[30px] leading-[1.1] font-black tracking-[-0.045em] text-[#a58000] uppercase transition-colors duration-300 hover:text-[#d3a800] dark:text-[#ffd400] dark:hover:text-[#ffe15c]"
          >
            {PERSONAL_INFO.name}
          </a>

          <p className="mt-[13px] max-w-[330px] text-[13px] leading-[1.65] font-normal text-[#62625f] dark:text-[#b0b0b0]">
            Software Engineer dan mahasiswa Sistem Informasi yang berfokus pada
            pengembangan aplikasi web, mobile, backend, dan database.
          </p>

          <div className="mt-[14px] flex flex-wrap items-center gap-[9px]">
            {SOCIAL_LINKS.map((item) => {
              const isEmail = item.href.startsWith("mailto:");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  title={item.label}
                  aria-label={item.label}
                  className="group grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[8px] border border-black/[0.1] bg-black/[0.035] text-[#666666] transition-[transform,background-color,border-color,color] duration-300 hover:-translate-y-[2px] hover:border-[#c7a400]/45 hover:bg-[#ffd400] hover:text-[#111111] dark:border-white/[0.055] dark:bg-[#191919] dark:text-[#aaaaaa] dark:hover:border-[#ffd400] dark:hover:bg-[#ffd400] dark:hover:text-[#111111]"
                >
                  <HugeIcon icon={item.icon} size={19} strokeWidth={1.8} />
                </a>
              );
            })}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Email"
              aria-label="Email"
              className="group grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[8px] border border-black/[0.1] bg-black/[0.035] text-[#666666] transition-[transform,background-color,border-color,color] duration-300 hover:-translate-y-[2px] hover:border-[#c7a400]/45 hover:bg-[#ffd400] hover:text-[#111111] dark:border-white/[0.055] dark:bg-[#191919] dark:text-[#aaaaaa] dark:hover:border-[#ffd400] dark:hover:bg-[#ffd400] dark:hover:text-[#111111]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>

          <small className="mt-[14px] block text-[11px] leading-[1.6] text-[#777777] dark:text-[#777777]">
            © {new Date().getFullYear()} All Rights Reserved
          </small>
        </div>

        <div className="min-w-0 rounded-[10px] border border-black/[0.1] bg-white/[0.65] px-[23px] py-[25px] shadow-[0_5px_20px_rgba(0,0,0,0.025)] transition-colors duration-300 dark:border-[#252525] dark:bg-[#0e0e0e] dark:shadow-none max-[520px]:px-[20px] max-[520px]:py-[23px]">
          <h4 className="m-0 font-sans text-[15px] leading-[1.2] font-black tracking-[-0.02em] text-[#947500] uppercase dark:text-[#ffd400]">
            // NAVIGATE
          </h4>

          <nav
            className="mt-[20px] grid gap-[11px]"
            aria-label="Footer navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                href={`/#${item.target}`}
                key={item.target}
                className="group flex w-fit items-center gap-[6px] text-[13px] leading-[1.5] font-normal text-[#646464] transition-[color,transform] duration-200 hover:translate-x-[3px] hover:text-[#a58000] dark:text-[#aaaaaa] dark:hover:text-[#ffd400]"
              >
                <span
                  className="text-[#777777] transition-colors duration-200 group-hover:text-[#a58000] dark:text-[#888888] dark:group-hover:text-[#ffd400]"
                  aria-hidden="true"
                >
                  →
                </span>

                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="min-w-0 rounded-[10px] border border-black/[0.1] bg-white/[0.65] px-[23px] py-[25px] shadow-[0_5px_20px_rgba(0,0,0,0.025)] transition-colors duration-300 dark:border-[#252525] dark:bg-[#0e0e0e] dark:shadow-none max-[520px]:px-[20px] max-[520px]:py-[23px]">
          <h4 className="m-0 font-sans text-[15px] leading-[1.2] font-black tracking-[-0.02em] text-[#947500] uppercase dark:text-[#ffd400]">
            // INFO
          </h4>

          <div className="mt-[20px] grid gap-[12px]">
            <p className="m-0 text-[13px] leading-[1.55] text-[#666666] dark:text-[#aaaaaa]">
              <strong className="font-semibold text-[#292929] dark:text-[#e1e1e1]">
                Location:
              </strong>{" "}
              {PERSONAL_INFO.location}
            </p>

            <p className="m-0 text-[13px] leading-[1.55] text-[#666666] dark:text-[#aaaaaa]">
              <strong className="font-semibold text-[#292929] dark:text-[#e1e1e1]">
                Role:
              </strong>{" "}
              {PERSONAL_INFO.headline}
            </p>

            <p className="m-0 text-[13px] leading-[1.55] text-[#666666] dark:text-[#aaaaaa]">
              <strong className="font-semibold text-[#292929] dark:text-[#e1e1e1]">
                Availability:
              </strong>{" "}
              Open to work
            </p>

            <p className="m-0 text-[13px] leading-[1.55] text-[#666666] dark:text-[#aaaaaa]">
              <strong className="font-semibold text-[#292929] dark:text-[#e1e1e1]">
                Focus:
              </strong>{" "}
              {PERSONAL_INFO.role}
            </p>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-[3px] inline-flex w-fit max-w-full items-center gap-[8px] break-all text-[12px] leading-[1.5] font-semibold text-[#947500] transition-colors duration-200 hover:text-[#ba9300] dark:text-[#ffd400] dark:hover:text-[#ffe15c]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
