import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

export function FloatingControls({ theme, onToggleTheme }) {
  return (
    <>
      <button
        type="button"
        className="fixed top-[22px] right-7 z-[101] grid h-[37px] w-[37px] cursor-pointer place-items-center rounded-full border border-black/14 bg-white/82 text-[#555] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-[18px] transition duration-200 hover:rotate-[10deg] hover:border-[#c7a400] hover:text-[#a88400] dark:border-white/10 dark:bg-[#0d0d0d]/84 dark:text-[#aaa] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400] max-[760px]:top-auto max-[760px]:right-4 max-[760px]:bottom-20"
        onClick={onToggleTheme}
        aria-label={
          theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <NavIcon name={theme === "dark" ? "sun" : "moon"} size={16} />
      </button>

      <a
        className="fixed right-6 bottom-5 z-[90] flex min-w-[142px] items-center gap-2.5 rounded-full border border-black/14 bg-white/84 py-2 pr-3.5 pl-2 text-[#111] shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-[18px] transition duration-200 hover:-translate-y-[3px] hover:border-[#c7a400] dark:border-white/10 dark:bg-[#0d0d0d]/88 dark:text-[#f5f5f2] dark:hover:border-[#ffd400] max-[760px]:right-3.5 max-[760px]:bottom-[18px] max-[760px]:min-w-0 max-[760px]:p-1.5"
        href={PERSONAL_INFO.spotify}
        target="_blank"
        rel="noreferrer"
        aria-label="Buka Spotify"
      >
        <img
          className="h-[34px] w-[34px] shrink-0 rounded-full border border-[#c7a400] object-cover dark:border-[#ffd400]"
          src={PERSONAL_INFO.profileImage}
          alt=""
        />

        <span className="grid gap-px max-[760px]:hidden">
          <strong className="font-mono text-[0.56rem] font-black tracking-[0.17em]">
            MUSIC
          </strong>

          <small className="text-[0.63rem] font-bold text-[#5d5d5d] dark:text-[#aaa]">
            Show player
          </small>
        </span>
      </a>
    </>
  );
}
