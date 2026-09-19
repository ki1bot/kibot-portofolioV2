import { useLayoutEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    return "dark";
  }

  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      return undefined;
    }

    return undefined;
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return {
    theme,
    toggleTheme,
  };
}
