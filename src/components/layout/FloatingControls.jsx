import { useTheme } from "../../hooks/useTheme";
import { NavIcon } from "../common/NavIcon";

function ArrowUpIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 11 6-6 6 6" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function FloatingControls() {
  const { theme, toggleTheme } = useTheme();

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <>
      <button
        type="button"
        className="fixed top-[17px] right-[25px] z-[101] grid h-[40px] w-[40px] place-items-center rounded-full border border-black/12 bg-white/58 text-[#696966] shadow-[0_10px_32px_rgba(0,0,0,0.1)] backdrop-blur-[16px] transition-[transform,border-color,color,background-color] duration-300 hover:rotate-6 hover:border-[#bd930d]/55 hover:text-[#8f7000] dark:border-white/10 dark:bg-[#090909]/66 dark:text-[#aaa] dark:hover:border-[#ffd400]/55 dark:hover:text-[#ffd400] max-[760px]:top-auto max-[760px]:right-3.5 max-[760px]:bottom-[76px]"
        onClick={toggleTheme}
        aria-label={
          theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <NavIcon name={theme === "dark" ? "sun" : "moon"} size={15} />
      </button>

      <button
        type="button"
        className="group fixed right-5 bottom-5 z-[97] grid h-[46px] w-[46px] cursor-pointer place-items-center rounded-full border border-black/15 bg-white/72 text-[#57544b] shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-[14px] transition-[transform,border-color,background-color,color,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-[#b98d00]/60 hover:bg-[#ffd400] hover:text-[#111] hover:shadow-[0_14px_34px_rgba(103,77,0,0.18)] dark:border-white/12 dark:bg-[#111]/78 dark:text-[#d5d5d0] dark:shadow-[0_12px_34px_rgba(0,0,0,0.42)] dark:hover:border-[#ffd400] dark:hover:bg-[#ffd400] dark:hover:text-[#111] max-[760px]:right-3.5 max-[760px]:bottom-3.5 max-[760px]:h-[43px] max-[760px]:w-[43px]"
        onClick={scrollToTop}
        aria-label="Kembali ke atas halaman"
        title="Back to top"
      >
        <span className="transition-transform duration-300 group-hover:-translate-y-[2px]">
          <ArrowUpIcon size={17} />
        </span>
      </button>
    </>
  );
}
