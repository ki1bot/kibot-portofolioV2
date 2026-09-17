import { useEffect } from "react";

export function useReveal(dependencyKey) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("[data-reveal]:not(.is-visible)"),
    );

    if (!elements.length) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [dependencyKey]);
}
