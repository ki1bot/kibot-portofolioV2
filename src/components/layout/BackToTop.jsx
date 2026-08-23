import { useEffect, useState } from "react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "../common/HugeIcon";
import { scrollToSection } from "../../lib/navigation";

export function BackToTop() {
  const [visible, setVisible] = useState(() => window.scrollY > 700);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      className="fixed bottom-4 right-4 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded-2xl border border-violet-400/25 bg-slate-900/90 text-violet-200 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/15 sm:bottom-6 sm:right-6"
      aria-label="Kembali ke atas"
    >
      <HugeIcon icon={ArrowUp01Icon} size={20} />
    </button>
  );
}
