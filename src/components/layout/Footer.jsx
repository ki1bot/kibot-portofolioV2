import { NAV_ITEMS, SOCIAL_LINKS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  const footerSocials = SOCIAL_LINKS.filter(
    (item) => item.label !== "Email",
  ).slice(0, 4);

  return (
    <footer className="border-t border-black/12 bg-white dark:border-white/10 dark:bg-[#0d0d0d]">
      <div className="portfolio-shell grid grid-cols-[1.3fr_0.7fr_0.95fr] gap-[64px] py-[62px] max-[960px]:grid-cols-2 max-[760px]:grid-cols-1 max-[760px]:gap-10">
        <div className="max-[960px]:col-span-2 max-[760px]:col-auto">
          <a
            className="inline-flex text-[clamp(2.45rem,3.8vw,4.15rem)] font-black leading-[0.9] tracking-[-0.065em]"
            href="#home"
          >
            RIFQI
            <span className="text-[#a88400] dark:text-[#ffd400]">.</span>
          </a>

          <p className="mt-5 max-w-[430px] text-[0.8rem] leading-[1.72] text-[#5d5d5d] dark:text-[#9d9d9d]">
            Software Engineer focused on web, mobile, backend, database, and
            maintainable digital products.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {footerSocials.map((item) => (
              <a
                className="text-[0.62rem] font-extrabold text-[#5d5d5d] transition-colors hover:text-[#a88400] dark:text-[#9d9d9d] dark:hover:text-[#ffd400]"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>

          <small className="mt-7 block text-[0.58rem] text-[#777]">
            © {new Date().getFullYear()} All Rights Reserved
          </small>
        </div>

        <div className="grid content-start gap-2.5">
          <h4 className="mb-2 font-mono text-[0.59rem] tracking-[0.12em] text-[#a88400] dark:text-[#ffd400]">
            // NAVIGATE
          </h4>

          {NAV_ITEMS.map((item) => (
            <a
              className="w-fit text-[0.73rem] text-[#5d5d5d] transition-colors hover:text-[#a88400] dark:text-[#9d9d9d] dark:hover:text-[#ffd400]"
              href={`#${item.target}`}
              key={item.target}
            >
              → {item.label}
            </a>
          ))}
        </div>

        <div className="grid content-start gap-2.5">
          <h4 className="mb-2 font-mono text-[0.59rem] tracking-[0.12em] text-[#a88400] dark:text-[#ffd400]">
            // INFO
          </h4>

          <p className="m-0 text-[0.72rem] leading-[1.6] text-[#5d5d5d] dark:text-[#9d9d9d]">
            <span className="text-[#777]">Location:</span>{" "}
            {PERSONAL_INFO.location}
          </p>

          <p className="m-0 text-[0.72rem] leading-[1.6] text-[#5d5d5d] dark:text-[#9d9d9d]">
            <span className="text-[#777]">Status:</span> Open to work
          </p>

          <p className="m-0 text-[0.72rem] leading-[1.6] text-[#5d5d5d] dark:text-[#9d9d9d]">
            <span className="text-[#777]">Role:</span> {PERSONAL_INFO.headline}
          </p>

          <a
            className="mt-2 w-fit text-[0.7rem] font-bold text-[#a88400] transition-colors hover:text-[#7d6100] dark:text-[#ffd400] dark:hover:text-[#ffe66d]"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
