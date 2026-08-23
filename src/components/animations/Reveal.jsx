import { useEffect, useState } from "react";

export function Reveal({ children, className = "" }) {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node]);

  return (
    <div
      ref={setNode}
      className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100 blur-none"
          : "translate-y-7 opacity-0 blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}
