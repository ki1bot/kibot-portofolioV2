import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const body = document.body;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const leaveDelay = reducedMotion ? 120 : 1500;
    const hideDelay = reducedMotion ? 200 : 2050;

    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, leaveDelay);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    }, hideDelay);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`loading-screen${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Memuat portfolio Rifqi Susanto"
    >
      <div className="loading-screen-shell">
        <div className="loading-screen-logo" aria-hidden="true">
          <span className="loading-screen-orbit" />
          <span className="loading-screen-initials">RS</span>
        </div>

        <span className="loading-screen-kicker">PORTOFOLIO</span>

        <div className="loading-screen-title" aria-hidden="true">
          <span>RIFQI</span>
          <span className="loading-screen-title-outline">SUSANTO</span>
        </div>

        <div className="loading-screen-progress" aria-hidden="true">
          <span className="loading-screen-progress-fill" />
        </div>

        <div className="loading-screen-meta">
          <span>LOADING EXPERIENCE</span>

          <span className="loading-screen-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    </div>
  );
}
