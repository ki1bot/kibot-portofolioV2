export function NavIcon({ name, size = 17 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="M3.5 11.2 12 4l8.5 7.2" />
        <path d="M5.5 10.5v9h13v-9" />
        <path d="M9.5 19.5v-5h5v5" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c.6-4.1 2.8-6.1 6.5-6.1s5.9 2 6.5 6.1" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3.5" y="7" width="17" height="12.5" rx="2" />
        <path d="M8.5 7V5.2h7V7" />
        <path d="M3.5 12h17" />
        <path d="M10 12v1.5h4V12" />
      </svg>
    );
  }

  if (name === "folder") {
    return (
      <svg {...common}>
        <path d="M3.5 6.5h6l2 2h9v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" />
        <path d="M3.5 10.5h17" />
      </svg>
    );
  }

  if (name === "award") {
    return (
      <svg {...common}>
        <circle cx="12" cy="9" r="4.2" />
        <path d="m9.4 12.5-1.1 7 3.7-2.1 3.7 2.1-1.1-7" />
        <path d="m10.5 9 1 1 2-2" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg {...common}>
        <path d="M20 15.2A8 8 0 0 1 8.8 4a8.2 8.2 0 1 0 11.2 11.2Z" />
      </svg>
    );
  }

  if (name === "chevron-left") {
    return (
      <svg {...common}>
        <path d="m14.5 5-7 7 7 7" />
      </svg>
    );
  }

  if (name === "chevron-right") {
    return (
      <svg {...common}>
        <path d="m9.5 5 7 7-7 7" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg {...common}>
        <path d="M12 3.5v10" />
        <path d="m8 10 4 4 4-4" />
        <path d="M4.5 16v3.5h15V16" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.7c-2.4.5-2.9-1-2.9-1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2 1 2.5.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9A8.2 8.2 0 0 1 12 7.8c.7 0 1.5.1 2.2.3 1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.3.6.8.6 1.5v2.2c0 .3.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z" />
      </svg>
    );
  }

  return null;
}
