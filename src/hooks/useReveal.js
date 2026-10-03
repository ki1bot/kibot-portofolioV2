import { useEffect } from "react";

export function useReveal(dependencyKey) {
  useEffect(() => {
    const selector = "[data-reveal]:not(.is-visible)";

    const showImmediately =
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (showImmediately) {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    const observeRevealElements = (node) => {
      if (!(node instanceof Element)) {
        return;
      }

      if (node.matches(selector)) {
        intersectionObserver.observe(node);
      }

      node.querySelectorAll(selector).forEach((element) => {
        intersectionObserver.observe(element);
      });
    };

    document.querySelectorAll(selector).forEach((element) => {
      intersectionObserver.observe(element);
    });

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(observeRevealElements);
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [dependencyKey]);
}
