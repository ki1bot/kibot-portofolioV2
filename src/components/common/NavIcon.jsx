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
        <path d="M3.75 10.75 12 4l8.25 6.75" />
        <path d="M5.5 9.75v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9.5" />
        <path d="M9.5 20.25v-5.5h5v5.5" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="7.5" r="3.1" />
        <path d="M6.25 20c.25-4.1 2.2-6.25 5.75-6.25S17.5 15.9 17.75 20" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3.5" y="7.5" width="17" height="12" rx="1.75" />
        <path d="M8.5 7.5V5.75A1.25 1.25 0 0 1 9.75 4.5h4.5a1.25 1.25 0 0 1 1.25 1.25V7.5" />
        <path d="M3.5 12.25h17" />
        <path d="M10.25 11.75v1.5h3.5v-1.5" />
      </svg>
    );
  }

  if (name === "folder") {
    return (
      <svg {...common}>
        <path d="M3.5 7.25A1.75 1.75 0 0 1 5.25 5.5h4l2 2h7.5a1.75 1.75 0 0 1 1.75 1.75v8.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75Z" />
        <path d="M3.5 10h17" />
        <path d="M9.5 13.25v3.25" />
        <path d="M14.5 13.25v3.25" />
      </svg>
    );
  }

  if (name === "award") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8.5" r="4.25" />
        <path d="m9.25 12-1 7.5L12 17.25l3.75 2.25-1-7.5" />
        <path d="M12 6.5v4" />
        <path d="M10 8.5h4" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.75" width="17" height="12.5" rx="1.75" />
        <path d="m4.5 7 7.5 5.75L19.5 7" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2" />
        <path d="M12 19.5v2" />
        <path d="M2.5 12h2" />
        <path d="M19.5 12h2" />
        <path d="m5.3 5.3 1.4 1.4" />
        <path d="m17.3 17.3 1.4 1.4" />
        <path d="m18.7 5.3-1.4 1.4" />
        <path d="m6.7 17.3-1.4 1.4" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg {...common}>
        <path d="M20 15.2A8 8 0 0 1 8.8 4 8.2 8.2 0 1 0 20 15.2Z" />
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
        <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4V18c-2.4.5-2.9-1-2.9-1-.4-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2 1 2.5.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9A8.2 8.2 0 0 1 12 7.8c.7 0 1.5.1 2.2.3 1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.3.6.8.6 1.5v2.2c0 .3.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z" />
      </svg>
    );
  }

  return null;
}
