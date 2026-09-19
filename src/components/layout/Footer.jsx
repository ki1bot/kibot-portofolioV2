import { NAV_ITEMS, SOCIAL_LINKS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function Footer() {
  const footerSocials = SOCIAL_LINKS.filter(
    (item) => item.label !== "Email",
  ).slice(0, 4);

  return (
    <footer className="border-t border-black/15 bg-white dark:border-white/10 dark:bg-[#0d0d0d]">
      <div className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1510px] grid-cols-[1.35fr_0.7fr_0.95fr] gap-[70px] py-[70px] max-[960px]:w-[calc(100%_-_36px)] max-[960px]:grid-cols-2 max-[760px]:w-[calc(100%_-_32px)] max-[760px]:grid-cols-1 max-[760px]:gap-11">
        <div className="max-[960px]:col-span-2 max-[760px]:col-auto">
          <a
            className="inline-flex text-[clamp(2.7rem,4.5vw,4.8rem)] font-black leading-[0.9] tracking-[-0.07em]"
            href="#home"
          >
            RIFQI
            <span className="text-[#b28d00] dark:text-[#ffd400]">.</span>
          </a>

          <p className="mt-[23px] max-w-[460px] text-[0.86rem] leading-[1.75] text-[#555] dark:text-[#aaa]">
            Software Engineer focused on web, mobile, backend, database, and
            maintainable digital products.
          </p>

          <small className="mt-8 block text-[0.62rem] text-[#777] dark:text-[#767676]">
            © {new Date().getFullYear()} All Rights Reserved
          </small>
        </div>

        <div className="grid content-start gap-[11px]">
          <h4 className="mb-[9px] font-mono text-[0.63rem] tracking-[0.11em] text-[#b28d00] dark:text-[#ffd400]">
            // NAVIGATE
          </h4>

          {NAV_ITEMS.map((item) => (
            <a
              className="w-fit text-[0.78rem] text-[#555] transition-colors hover:text-[#b28d00] dark:text-[#aaa] dark:hover:text-[#ffd400]"
              href={`#${item.target}`}
              key={item.target}
            >
              → {item.label}
            </a>
          ))}
        </div>

        <div className="grid content-start gap-[11px]">
          <h4 className="mb-[9px] font-mono text-[0.63rem] tracking-[0.11em] text-[#b28d00] dark:text-[#ffd400]">
            // INFO
          </h4>

          <p className="m-0 text-[0.76rem] leading-[1.6] text-[#555] dark:text-[#aaa]">
            <span className="text-[#777] dark:text-[#767676]">Location:</span>{" "}
            {PERSONAL_INFO.location}
          </p>

          <p className="m-0 text-[0.76rem] leading-[1.6] text-[#555] dark:text-[#aaa]">
            <span className="text-[#777] dark:text-[#767676]">Status:</span>{" "}
            Open to work
          </p>

          <p className="m-0 text-[0.76rem] leading-[1.6] text-[#555] dark:text-[#aaa]">
            <span className="text-[#777] dark:text-[#767676]">Role:</span>{" "}
            {PERSONAL_INFO.headline}
          </p>

          <div className="mt-[13px] flex flex-wrap gap-[13px]">
            {footerSocials.map((item) => (
              <a
                className="text-[0.66rem] font-extrabold text-[#555] transition-colors hover:text-[#b28d00] dark:text-[#aaa] dark:hover:text-[#ffd400]"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
