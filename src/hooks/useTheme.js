import { useLayoutEffect, useRef, useState } from "react";

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
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const shouldGuardTransition = mountedRef.current;

    let firstFrame = null;
    let secondFrame = null;

    if (shouldGuardTransition) {
      root.classList.add("theme-switching");
    }

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      undefined;
    }

    if (!mountedRef.current) {
      mountedRef.current = true;

      return undefined;
    }

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        root.classList.remove("theme-switching");
      });
    });

    return () => {
      if (firstFrame !== null) {
        window.cancelAnimationFrame(firstFrame);
      }

      if (secondFrame !== null) {
        window.cancelAnimationFrame(secondFrame);
      }

      root.classList.remove("theme-switching");
    };
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return {
    theme,
    toggleTheme,
  };
}
