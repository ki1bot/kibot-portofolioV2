import { useLayoutEffect } from "react";

const SECTION_STATE_CLASSES = [
  "scroll-page-active",
  "scroll-page-above",
  "scroll-page-below",
];

const PART_SIDE_CLASSES = ["scroll-page-part-left", "scroll-page-part-right"];

const SECTION_PATHS = {
  home: "/",
  about: "/about",
  journey: "/journey",
  projects: "/projects",
  certificates: "/certificates",
  contact: "/contact",
};

const PATH_SECTIONS = {
  "/": "home",
  "/about": "about",
  "/journey": "journey",
  "/projects": "projects",
  "/certificates": "certificates",
  "/contact": "contact",
};

const OBSERVER_THRESHOLDS = Array.from(
  { length: 21 },
  (_, index) => index / 20,
);

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.replace(/\/+$/, "");

  return normalized || "/";
}

function getSectionPath(target) {
  return SECTION_PATHS[target] ?? "/";
}

function getTargetFromPath(pathname) {
  return PATH_SECTIONS[normalizePath(pathname)] ?? null;
}

function getTargetFromHash(hash) {
  if (!hash || hash === "#") {
    return null;
  }

  const target = decodeURIComponent(hash.slice(1));

  return SECTION_PATHS[target] ? target : null;
}

function getMotionRoot(section) {
  const portfolioContainer = section.querySelector(
    ":scope > .portfolio-container",
  );

  if (portfolioContainer instanceof HTMLElement) {
    return portfolioContainer;
  }

  const heroOrAboutContainer = Array.from(section.children).find(
    (child) =>
      child instanceof HTMLElement &&
      child.classList.contains("relative") &&
      child.classList.contains("z-10"),
  );

  if (heroOrAboutContainer instanceof HTMLElement) {
    return heroOrAboutContainer;
  }

  return section;
}

function getRevealTargets(section) {
  const targets = Array.from(section.querySelectorAll("[data-reveal]")).filter(
    (element) => element instanceof HTMLElement,
  );

  return targets.filter((target) => {
    return !targets.some((other) => other !== target && other.contains(target));
  });
}

function getFallbackTargets(section) {
  const root = getMotionRoot(section);

  return Array.from(root.children).filter(
    (child) => child instanceof HTMLElement,
  );
}

function getAnimationTargets(section) {
  const revealTargets = getRevealTargets(section);

  if (revealTargets.length) {
    return revealTargets;
  }

  return getFallbackTargets(section);
}

function getExplicitSide(target) {
  const revealDirection = target.getAttribute("data-reveal");
  const manualSide = target.getAttribute("data-scroll-side");

  if (revealDirection === "left" || manualSide === "left") {
    return "left";
  }

  if (revealDirection === "right" || manualSide === "right") {
    return "right";
  }

  return null;
}

function determineTargetSide(target, index, section) {
  const explicitSide = getExplicitSide(target);

  if (explicitSide) {
    return explicitSide;
  }

  const targetRect = target.getBoundingClientRect();
  const sectionRect = section.getBoundingClientRect();

  const targetCenter = targetRect.left + targetRect.width / 2;

  const sectionCenter = sectionRect.left + sectionRect.width / 2;

  const deadZone = Math.min(110, Math.max(42, sectionRect.width * 0.075));

  if (targetCenter < sectionCenter - deadZone) {
    return "left";
  }

  if (targetCenter > sectionCenter + deadZone) {
    return "right";
  }

  return index % 2 === 0 ? "left" : "right";
}

function markTarget(target, side) {
  target.classList.add("scroll-page-part");
  target.classList.remove(...PART_SIDE_CLASSES);

  if (side === "left") {
    target.classList.add("scroll-page-part-left");
  } else {
    target.classList.add("scroll-page-part-right");
  }

  target.dataset.scrollPageManaged = "true";
}

function clearTarget(target) {
  target.classList.remove("scroll-page-part", ...PART_SIDE_CLASSES);

  delete target.dataset.scrollPageManaged;
}

function markSectionTargets(section) {
  const targets = getAnimationTargets(section);

  targets.forEach((target, index) => {
    const side = determineTargetSide(target, index, section);

    markTarget(target, side);
  });

  return targets;
}

function setSectionState(section, state) {
  section.classList.remove(...SECTION_STATE_CLASSES);
  section.classList.add(`scroll-page-${state}`);
}

function findInitialActiveIndex(sections) {
  const viewportCenter = window.innerHeight / 2;

  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
      closestIndex = index;
      closestDistance = 0;

      return;
    }

    const sectionCenter = rect.top + rect.height / 2;

    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function getAnchorTarget(anchor) {
  const href = anchor.getAttribute("href");

  if (!href) {
    return null;
  }

  if (href.startsWith("#")) {
    return getTargetFromHash(href);
  }

  let url;

  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }

  if (url.origin !== window.location.origin) {
    return null;
  }

  return getTargetFromPath(url.pathname);
}

function rewriteSectionLinks(root) {
  const anchors = [];

  if (root instanceof HTMLAnchorElement) {
    anchors.push(root);
  }

  if (
    root instanceof Document ||
    root instanceof DocumentFragment ||
    root instanceof Element
  ) {
    root.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchors.push(anchor);
    });
  }

  anchors.forEach((anchor) => {
    const href = anchor.getAttribute("href");

    if (!href?.startsWith("#")) {
      return;
    }

    const target = getTargetFromHash(href);

    if (!target) {
      return;
    }

    anchor.setAttribute("href", getSectionPath(target));
  });
}

export function useSectionScrollTransition() {
  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("main > section[id]"),
    ).filter((section) => section instanceof HTMLElement);

    if (!sections.length) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const sectionIndexById = new Map(
      sections.map((section, index) => [section.id, index]),
    );

    let initialTarget = getTargetFromPath(window.location.pathname);

    const legacyHashTarget = getTargetFromHash(window.location.hash);

    if (legacyHashTarget) {
      initialTarget = legacyHashTarget;

      window.history.replaceState(
        window.history.state,
        "",
        getSectionPath(legacyHashTarget),
      );
    }

    let activeIndex =
      initialTarget && sectionIndexById.has(initialTarget)
        ? sectionIndexById.get(initialTarget)
        : findInitialActiveIndex(sections);

    let programmaticTarget = initialTarget;
    let navigationUnlockTimer = null;
    let readyFrame = null;
    let refreshFrame = null;
    let initialScrollFrame = null;
    let initialScrollSecondFrame = null;

    const initialRouteTimers = [];

    const visibilityRatios = new Map(sections.map((section) => [section, 0]));

    function clearNavigationLock() {
      programmaticTarget = null;

      if (navigationUnlockTimer !== null) {
        window.clearTimeout(navigationUnlockTimer);
        navigationUnlockTimer = null;
      }
    }

    function lockNavigation(target) {
      programmaticTarget = target;

      if (navigationUnlockTimer !== null) {
        window.clearTimeout(navigationUnlockTimer);
      }

      navigationUnlockTimer = window.setTimeout(() => {
        programmaticTarget = null;
        navigationUnlockTimer = null;
      }, 2400);
    }

    function syncPathWithSection(index) {
      if (programmaticTarget) {
        return;
      }

      const section = sections[index];

      if (!section) {
        return;
      }

      const path = getSectionPath(section.id);
      const currentPath = normalizePath(window.location.pathname);

      if (currentPath === path && !window.location.hash) {
        return;
      }

      window.history.replaceState(window.history.state, "", path);
    }

    function applySectionStates(nextActiveIndex, syncPath = true) {
      if (nextActiveIndex < 0 || nextActiveIndex >= sections.length) {
        return;
      }

      activeIndex = nextActiveIndex;

      sections.forEach((section, index) => {
        if (index < activeIndex) {
          setSectionState(section, "above");
          return;
        }

        if (index > activeIndex) {
          setSectionState(section, "below");
          return;
        }

        setSectionState(section, "active");
      });

      const activeSection = sections[activeIndex];

      if (programmaticTarget && activeSection?.id === programmaticTarget) {
        clearNavigationLock();
      }

      if (syncPath) {
        syncPathWithSection(activeIndex);
      }
    }

    function refreshTargets() {
      sections.forEach((section) => {
        const currentTargets = new Set(markSectionTargets(section));

        section
          .querySelectorAll('[data-scroll-page-managed="true"]')
          .forEach((target) => {
            if (target instanceof HTMLElement && !currentTargets.has(target)) {
              clearTarget(target);
            }
          });
      });
    }

    function scheduleTargetRefresh() {
      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }

      refreshFrame = window.requestAnimationFrame(() => {
        refreshFrame = null;
        refreshTargets();
      });
    }

    function scrollToSection(target, behavior = "smooth", historyMode = null) {
      const section = document.getElementById(target);

      if (!section) {
        return;
      }

      const path = getSectionPath(target);

      if (historyMode === "push") {
        if (
          normalizePath(window.location.pathname) !== path ||
          window.location.hash
        ) {
          window.history.pushState(window.history.state, "", path);
        }
      }

      if (historyMode === "replace") {
        window.history.replaceState(window.history.state, "", path);
      }

      lockNavigation(target);

      section.scrollIntoView({
        behavior,
        block: "start",
      });
    }

    function handleDocumentClick(event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const targetElement = event.target;

      if (!(targetElement instanceof Element)) {
        return;
      }

      const anchor = targetElement.closest("a");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const target = getAnchorTarget(anchor);

      if (!target) {
        return;
      }

      const section = document.getElementById(target);

      if (!section) {
        return;
      }

      event.preventDefault();

      scrollToSection(target, reducedMotion ? "auto" : "smooth", "push");
    }

    function handlePopState() {
      const target = getTargetFromPath(window.location.pathname) ?? "home";

      scrollToSection(target, reducedMotion ? "auto" : "smooth");
    }

    function handleManualNavigationStart() {
      if (!programmaticTarget) {
        return;
      }

      clearNavigationLock();

      syncPathWithSection(activeIndex);
    }

    function handleKeyDown(event) {
      const scrollKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];

      if (scrollKeys.includes(event.key)) {
        handleManualNavigationStart();
      }
    }

    sections.forEach((section) => {
      section.classList.add("scroll-page-section");
    });

    rewriteSectionLinks(document);
    refreshTargets();

    applySectionStates(activeIndex, false);

    readyFrame = window.requestAnimationFrame(() => {
      sections.forEach((section) => {
        section.classList.add("scroll-page-ready");
      });
    });

    if (initialTarget) {
      const alignInitialRoute = () => {
        if (getTargetFromPath(window.location.pathname) !== initialTarget) {
          return;
        }

        const section = document.getElementById(initialTarget);

        if (!section) {
          return;
        }

        section.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      };

      initialScrollFrame = window.requestAnimationFrame(() => {
        initialScrollSecondFrame =
          window.requestAnimationFrame(alignInitialRoute);
      });

      [350, 950, 1650].forEach((delay) => {
        initialRouteTimers.push(window.setTimeout(alignInitialRoute, delay));
      });

      window.setTimeout(() => {
        if (programmaticTarget === initialTarget) {
          clearNavigationLock();
        }
      }, 1750);
    }

    if (reducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        setSectionState(section, "active");
      });

      document.addEventListener("click", handleDocumentClick);

      window.addEventListener("popstate", handlePopState);

      return () => {
        document.removeEventListener("click", handleDocumentClick);

        window.removeEventListener("popstate", handlePopState);

        if (readyFrame !== null) {
          window.cancelAnimationFrame(readyFrame);
        }

        if (refreshFrame !== null) {
          window.cancelAnimationFrame(refreshFrame);
        }

        if (initialScrollFrame !== null) {
          window.cancelAnimationFrame(initialScrollFrame);
        }

        if (initialScrollSecondFrame !== null) {
          window.cancelAnimationFrame(initialScrollSecondFrame);
        }

        initialRouteTimers.forEach((timer) => {
          window.clearTimeout(timer);
        });

        clearNavigationLock();

        sections.forEach((section) => {
          section.classList.remove(
            "scroll-page-section",
            "scroll-page-ready",
            ...SECTION_STATE_CLASSES,
          );

          section
            .querySelectorAll('[data-scroll-page-managed="true"]')
            .forEach((target) => {
              if (target instanceof HTMLElement) {
                clearTarget(target);
              }
            });
        });
      };
    }

    function findBestActiveIndex() {
      const viewportCenter = window.innerHeight / 2;

      let centerMatch = null;
      let bestIndex = activeIndex;
      let bestScore = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          centerMatch = index;
          return;
        }

        const ratio = visibilityRatios.get(section) ?? 0;

        if (ratio <= 0) {
          return;
        }

        const visibleTop = Math.max(rect.top, 0);

        const visibleBottom = Math.min(rect.bottom, window.innerHeight);

        if (visibleBottom <= visibleTop) {
          return;
        }

        const visibleCenter = visibleTop + (visibleBottom - visibleTop) / 2;

        const centerDistance = Math.abs(visibleCenter - viewportCenter);

        const ratioBonus = ratio * window.innerHeight * 0.32;

        const score = centerDistance - ratioBonus;

        if (score < bestScore) {
          bestScore = score;
          bestIndex = index;
        }
      });

      if (centerMatch !== null) {
        return centerMatch;
      }

      return bestIndex;
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityRatios.set(
            entry.target,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const nextActiveIndex = findBestActiveIndex();

        if (nextActiveIndex !== activeIndex) {
          applySectionStates(nextActiveIndex);
        }
      },
      {
        threshold: OBSERVER_THRESHOLDS,
        rootMargin: "-8% 0px -8% 0px",
      },
    );

    sections.forEach((section) => {
      intersectionObserver.observe(section);
    });

    const mutationObserver = new MutationObserver((records) => {
      let shouldRefreshTargets = false;

      records.forEach((record) => {
        if (record.type === "attributes") {
          if (record.target instanceof HTMLAnchorElement) {
            rewriteSectionLinks(record.target);
          }

          return;
        }

        record.addedNodes.forEach((node) => {
          if (node instanceof Element || node instanceof DocumentFragment) {
            rewriteSectionLinks(node);
          }
        });

        const main = document.querySelector("main");

        if (
          main &&
          record.target instanceof Node &&
          main.contains(record.target)
        ) {
          shouldRefreshTargets = true;
        }
      });

      if (shouldRefreshTargets) {
        scheduleTargetRefresh();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    function handleResize() {
      scheduleTargetRefresh();
    }

    document.addEventListener("click", handleDocumentClick);

    window.addEventListener("popstate", handlePopState);

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    window.addEventListener("wheel", handleManualNavigationStart, {
      passive: true,
    });

    window.addEventListener("touchstart", handleManualNavigationStart, {
      passive: true,
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();

      document.removeEventListener("click", handleDocumentClick);

      window.removeEventListener("popstate", handlePopState);

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("wheel", handleManualNavigationStart);

      window.removeEventListener("touchstart", handleManualNavigationStart);

      window.removeEventListener("keydown", handleKeyDown);

      if (readyFrame !== null) {
        window.cancelAnimationFrame(readyFrame);
      }

      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }

      if (initialScrollFrame !== null) {
        window.cancelAnimationFrame(initialScrollFrame);
      }

      if (initialScrollSecondFrame !== null) {
        window.cancelAnimationFrame(initialScrollSecondFrame);
      }

      initialRouteTimers.forEach((timer) => {
        window.clearTimeout(timer);
      });

      clearNavigationLock();

      sections.forEach((section) => {
        section.classList.remove(
          "scroll-page-section",
          "scroll-page-ready",
          ...SECTION_STATE_CLASSES,
        );

        section
          .querySelectorAll('[data-scroll-page-managed="true"]')
          .forEach((target) => {
            if (target instanceof HTMLElement) {
              clearTarget(target);
            }
          });
      });
    };
  }, []);
}
