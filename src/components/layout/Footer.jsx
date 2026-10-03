import { NAV_ITEMS } from "../../data/portfolioPage";
import { SOCIAL_LINKS } from "../../data/site";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { HugeIcon } from "../common/HugeIcon";

export function Footer() {
  const footerSocials = SOCIAL_LINKS;

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--page-bg)]">
      <div className="mx-auto grid w-[min(1280px,calc(100%_-_56px))] grid-cols-[1.1fr_0.8fr_0.9fr] gap-10 py-14 max-[980px]:grid-cols-2 max-[760px]:w-[calc(100%_-_30px)] max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:py-10">
        <div className="max-w-[390px] max-[980px]:col-span-2 max-[760px]:col-auto">
          <a
            className="inline-flex text-[clamp(2.1rem,2.8vw,3.25rem)] font-black leading-[0.9] tracking-[-0.055em] text-[#9c7a00] dark:text-[#ffd400]"
            href="#home"
          >
            RIFQI
          </a>

          <p className="mt-4 max-w-[360px] text-[0.76rem] leading-[1.75] text-[#626262] dark:text-[#999]">
            Software Engineer dan mahasiswa Sistem Informasi yang berfokus pada
            pengembangan web, mobile, backend, database, serta produk digital
            yang mudah dipelihara.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {footerSocials.map((item) => (
              <a
                className="grid h-[38px] w-[38px] place-items-center rounded-full border border-black/12 bg-white/55 text-[#656565] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a400] hover:text-[#8d6e00] dark:border-white/10 dark:bg-white/[0.035] dark:text-[#9b9b9b] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400]"
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                key={item.label}
                aria-label={item.label}
                title={item.label}
              >
                <HugeIcon icon={item.icon} size={16} strokeWidth={1.7} />
              </a>
            ))}
          </div>

          <small className="mt-5 block text-[0.56rem] text-[#777]">
            © {new Date().getFullYear()} All Rights Reserved
          </small>
        </div>

        <div className="rounded-[9px] border border-[var(--line)] bg-[var(--card-bg)] p-6">
          <h4 className="mb-5 font-mono text-[0.59rem] font-black tracking-[0.12em] text-[#987600] dark:text-[#ffd400]">
            // NAVIGATE
          </h4>

          <nav className="grid gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                className="w-fit text-[0.74rem] text-[#666] transition hover:text-[#927200] dark:text-[#9a9a9a] dark:hover:text-[#ffd400]"
                href={`#${item.target}`}
                key={item.target}
              >
                → {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="rounded-[9px] border border-[var(--line)] bg-[var(--card-bg)] p-6">
          <h4 className="mb-5 font-mono text-[0.59rem] font-black tracking-[0.12em] text-[#987600] dark:text-[#ffd400]">
            // INFO
          </h4>

          <div className="grid gap-3">
            <p className="m-0 text-[0.69rem] leading-[1.62] text-[#656565] dark:text-[#999]">
              <strong className="font-semibold text-[#333] dark:text-[#ddd]">
                Location:
              </strong>{" "}
              {PERSONAL_INFO.location}
            </p>

            <p className="m-0 text-[0.69rem] leading-[1.62] text-[#656565] dark:text-[#999]">
              <strong className="font-semibold text-[#333] dark:text-[#ddd]">
                Status:
              </strong>{" "}
              Open to work
            </p>

            <p className="m-0 text-[0.69rem] leading-[1.62] text-[#656565] dark:text-[#999]">
              <strong className="font-semibold text-[#333] dark:text-[#ddd]">
                Role:
              </strong>{" "}
              {PERSONAL_INFO.headline}
            </p>

            <p className="m-0 text-[0.69rem] leading-[1.62] text-[#656565] dark:text-[#999]">
              <strong className="font-semibold text-[#333] dark:text-[#ddd]">
                Focus:
              </strong>{" "}
              {PERSONAL_INFO.role}
            </p>

            <a
              className="mt-1 w-fit text-[0.72rem] font-bold text-[#8f7000] transition hover:text-[#6b5400] dark:text-[#ffd400]"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
