import { useState } from "react";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

export function FloatingControls({ theme, onToggleTheme }) {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed top-[18px] right-[25px] z-[101] grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-full border border-black/15 bg-white/80 text-[#5f5f5f] shadow-[0_10px_32px_rgba(0,0,0,0.09)] backdrop-blur-[18px] transition-[transform,border-color,color] duration-300 hover:rotate-6 hover:border-[#c7a400] hover:text-[#8f7000] dark:border-white/10 dark:bg-[#0b0b0b]/90 dark:text-[#aaa] dark:hover:border-[#ffd400] dark:hover:text-[#ffd400] max-[760px]:top-auto max-[760px]:right-3.5 max-[760px]:bottom-[83px]"
        onClick={onToggleTheme}
        aria-label={
          theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <NavIcon name={theme === "dark" ? "sun" : "moon"} size={15} />
      </button>

      {playerOpen ? (
        <div className="fixed right-5 bottom-[86px] z-[96] w-[330px] origin-bottom-right animate-[music-panel-enter_380ms_cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-[15px] border border-black/14 bg-[#f5f5f2]/96 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-[22px] dark:border-white/12 dark:bg-[#0d0d0d]/96 dark:shadow-[0_28px_80px_rgba(0,0,0,0.55)] max-[520px]:right-3 max-[520px]:w-[calc(100%_-_24px)]">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-black/15 px-2.5 py-1 font-mono text-[0.5rem] font-black tracking-[0.16em] text-[#5d5d5d] dark:border-white/12 dark:text-[#999]">
              // NOW PLAYING
            </span>

            <button
              type="button"
              className="grid h-7 w-7 cursor-pointer place-items-center rounded-[7px] border border-black/10 bg-black/[0.03] text-[0.8rem] transition hover:border-[#c7a400] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-[#ffd400]"
              onClick={() => setPlayerOpen(false)}
              aria-label="Tutup music player"
            >
              ×
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <img
              className="h-[50px] w-[50px] shrink-0 rounded-full border-2 border-[#ffd400] object-cover"
              src={PERSONAL_INFO.profileImage}
              alt=""
            />

            <div className="min-w-0">
              <strong className="block truncate text-[0.76rem] font-black uppercase">
                Rifqi&apos;s Spotify
              </strong>

              <span className="mt-1 block truncate text-[0.58rem] text-[#6f6f6f] dark:text-[#909090]">
                Personal playlist
              </span>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
              <div className="h-full w-[46%] rounded-full bg-[#ffd400]" />
            </div>

            <div className="mt-2 flex justify-between text-[0.48rem] text-[#777]">
              <span>0:00</span>
              <span>Spotify</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-5">
            <span className="text-[0.9rem] text-[#757575]">‹</span>

            <a
              className="grid h-[46px] w-[46px] place-items-center rounded-[9px] bg-[#ffd400] text-[1rem] font-black text-[#111] shadow-[0_10px_25px_rgba(255,212,0,0.15)] transition hover:-translate-y-0.5"
              href={PERSONAL_INFO.spotify}
              target="_blank"
              rel="noreferrer"
              aria-label="Buka Spotify"
            >
              ▶
            </a>

            <span className="text-[0.9rem] text-[#757575]">›</span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 dark:border-white/10">
            <span className="font-mono text-[0.5rem] font-black tracking-[0.12em] text-[#777]">
              SPOTIFY
            </span>

            <a
              className="text-[0.56rem] font-black text-[#967500] transition hover:text-[#6d5500] dark:text-[#ffd400]"
              href={PERSONAL_INFO.spotify}
              target="_blank"
              rel="noreferrer"
            >
              OPEN PLAYER ↗
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="fixed right-5 bottom-4 z-[97] flex min-h-[50px] min-w-[146px] cursor-pointer items-center gap-2.5 rounded-full border border-black/14 bg-white/80 py-[6px] pr-3.5 pl-[6px] text-left text-[#111] shadow-[0_15px_42px_rgba(0,0,0,0.12)] backdrop-blur-[18px] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#c7a400] dark:border-white/10 dark:bg-[#0d0d0d]/92 dark:text-[#f5f5f2] dark:shadow-[0_18px_52px_rgba(0,0,0,0.42)] dark:hover:border-[#ffd400] max-[760px]:right-3.5 max-[760px]:min-w-0 max-[760px]:p-[6px]"
        onClick={() => setPlayerOpen((current) => !current)}
        aria-expanded={playerOpen}
        aria-label="Tampilkan music player"
      >
        <span className="relative shrink-0">
          <img
            className="h-[35px] w-[35px] rounded-full border border-[#c7a400] object-cover dark:border-[#ffd400]"
            src={PERSONAL_INFO.profileImage}
            alt=""
          />

          <i className="absolute right-[-1px] bottom-[-1px] h-2 w-2 rounded-full border border-white bg-[#1ed760] dark:border-[#0d0d0d]" />
        </span>

        <span className="grid gap-px max-[760px]:hidden">
          <strong className="font-mono text-[0.52rem] font-black tracking-[0.18em]">
            MUSIC
          </strong>

          <small className="text-[0.61rem] font-bold text-[#626262] dark:text-[#aaa]">
            Show player
          </small>
        </span>
      </button>
    </>
  );
}
