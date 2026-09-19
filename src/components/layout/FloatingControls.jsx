import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

export function FloatingControls({ theme, onToggleTheme }) {
  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={
          theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <NavIcon name={theme === "dark" ? "sun" : "moon"} size={17} />
      </button>

      <a
        className="music-pill"
        href={PERSONAL_INFO.spotify}
        target="_blank"
        rel="noreferrer"
        aria-label="Buka Spotify"
      >
        <img src={PERSONAL_INFO.profileImage} alt="" />

        <span>
          <strong>MUSIC</strong>
          <small>Open Spotify</small>
        </span>
      </a>
    </>
  );
}
