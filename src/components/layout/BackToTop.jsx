export function BackToTop() {
  return (
    <a
      className="fixed right-5 bottom-5 z-40 grid h-[46px] w-[46px] place-items-center border border-black/30 bg-[#f7f3e9] text-base text-[#111111] shadow-[4px_4px_0_#151515] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#d8ff3e] dark:border-white/30 dark:bg-[#121212] dark:text-[#f4f1e8] dark:shadow-[4px_4px_0_#000000] dark:hover:text-[#090909]"
      href="#home"
      aria-label="Kembali ke atas"
    >
      ↑
    </a>
  );
}
