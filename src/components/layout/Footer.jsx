import { NAV_ITEMS } from "../../data/portfolioPage";
import { SOCIAL_LINKS } from "../../data/site";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { HugeIcon } from "../common/HugeIcon";

export function Footer() {
  const footerSocials = SOCIAL_LINKS.slice(0, 5);

  return (
    <footer className="border-t border-black/10 bg-[#f2f2ef] dark:border-white/8 dark:bg-[#070707]">
      <div className="portfolio-shell grid grid-cols-[1.05fr_0.9fr_0.9fr] gap-[48px] py-[52px] max-[960px]:grid-cols-2 max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:py-10">
        <div className="max-w-[410px] max-[960px]:col-span-2 max-[760px]:col-auto">
          <a
            className="inline-flex text-[clamp(2rem,2.7vw,3.1rem)] font-black leading-[0.9] tracking-[-0.055em] text-[#9b7900] dark:text-[#ffd400]"
            href="#home"
          >
            RIFQI
            <span className="text-[#111] dark:text-white">.</span>
          </a>

          <p className="mt-4 max-w-[360px] text-[0.72rem] leading-[1.7] text-[#636363] dark:text-[#999]">
            Software Engineer dan mahasiswa Sistem Informasi yang berfokus pada
            pengembangan web, mobile, backend, database, serta produk digital
            yang mudah dipelihara.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {footerSocials.map((item) => (
              <a
                className="grid h-8 w-8 place-items-center rounded-[5px] border border-black/12 bg-white/55 text-[#656565] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a400] hover:text-[#8f7000] dark:border-white/10 dark:bg-white/[0.025] dark:text-[#9b9b9b] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400]"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.label}
                aria-label={item.label}
                title={item.label}
              >
                <HugeIcon icon={item.icon} size={15} strokeWidth={1.7} />
              </a>
            ))}
          </div>

          <small className="mt-5 block text-[0.55rem] text-[#777]">
            © {new Date().getFullYear()} All Rights Reserved
          </small>
        </div>

        <div className="rounded-[8px] border border-black/10 bg-white/48 p-6 dark:border-white/8 dark:bg-[#0d0d0d]">
          <h4 className="mb-4 font-mono text-[0.57rem] font-black tracking-[0.12em] text-[#987600] dark:text-[#ffd400]">
            // NAVIGATE
          </h4>

          <div className="grid gap-2.5">
            {NAV_ITEMS.map((item) => (
              <a
                className="w-fit text-[0.68rem] text-[#666] transition-colors hover:text-[#927200] dark:text-[#9a9a9a] dark:hover:text-[#ffd400]"
                href={`#${item.target}`}
                key={item.target}
              >
                → {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[8px] border border-black/10 bg-white/48 p-6 dark:border-white/8 dark:bg-[#0d0d0d]">
          <h4 className="mb-4 font-mono text-[0.57rem] font-black tracking-[0.12em] text-[#987600] dark:text-[#ffd400]">
            // INFO
          </h4>

          <div className="grid gap-3">
            <p className="m-0 text-[0.68rem] leading-[1.6] text-[#656565] dark:text-[#999]">
              <span className="font-semibold text-[#333] dark:text-[#d7d7d7]">
                Location:
              </span>{" "}
              {PERSONAL_INFO.location}
            </p>

            <p className="m-0 text-[0.68rem] leading-[1.6] text-[#656565] dark:text-[#999]">
              <span className="font-semibold text-[#333] dark:text-[#d7d7d7]">
                Availability:
              </span>{" "}
              Open to work
            </p>

            <p className="m-0 text-[0.68rem] leading-[1.6] text-[#656565] dark:text-[#999]">
              <span className="font-semibold text-[#333] dark:text-[#d7d7d7]">
                Role:
              </span>{" "}
              {PERSONAL_INFO.headline}
            </p>

            <a
              className="mt-1 w-fit text-[0.68rem] font-bold text-[#8f7000] transition-colors hover:text-[#6d5600] dark:text-[#ffd400] dark:hover:text-[#ffe768]"
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
