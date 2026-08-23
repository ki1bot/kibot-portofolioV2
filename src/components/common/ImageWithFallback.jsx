import { useState } from "react";

export function ImageWithFallback({
  src,
  alt,
  className = "",
  initials = "?",
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-blue-500/25 via-violet-500/30 to-fuchsia-500/20 font-black tracking-tight text-white ${className}`}
      >
        {String(initials).slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
