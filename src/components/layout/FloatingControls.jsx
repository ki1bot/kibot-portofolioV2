import { useState } from "react";
import { PERSONAL_INFO } from "../../lib/portfolio";
import { NavIcon } from "../common/NavIcon";

export function FloatingControls({ theme, onToggleTheme }) {
  const [playerOpen, setPlayerOpen] = useState(false);

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
        <NavIcon name={theme === "dark" ? "sun" : "moon"} size={15} />
      </button>

      {playerOpen ? (
        <div className="music-panel">
          <div className="music-panel-head">
            <span>// NOW PLAYING</span>

            <button
              type="button"
              onClick={() => setPlayerOpen(false)}
              aria-label="Tutup music player"
            >
              ×
            </button>
          </div>

          <div className="music-track">
            <img src={PERSONAL_INFO.profileImage} alt="" />

            <div>
              <strong>Rifqi&apos;s Spotify</strong>
              <span>Personal playlist</span>
            </div>
          </div>

          <div className="music-progress">
            <div>
              <span />
            </div>

            <p>
              <span>0:00</span>
              <span>Spotify</span>
            </p>
          </div>

          <div className="music-actions">
            <span>‹</span>

            <a
              href={PERSONAL_INFO.spotify}
              target="_blank"
              rel="noreferrer"
              aria-label="Buka Spotify"
            >
              ▶
            </a>

            <span>›</span>
          </div>

          <div className="music-panel-foot">
            <span>SPOTIFY</span>

            <a href={PERSONAL_INFO.spotify} target="_blank" rel="noreferrer">
              OPEN PLAYER ↗
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="music-launcher"
        onClick={() => setPlayerOpen((current) => !current)}
        aria-expanded={playerOpen}
        aria-label="Tampilkan music player"
      >
        <span className="music-launcher-avatar">
          <img src={PERSONAL_INFO.profileImage} alt="" />
          <i />
        </span>

        <span className="music-launcher-copy">
          <strong>MUSIC</strong>
          <small>Show player</small>
        </span>
      </button>
    </>
  );
}
