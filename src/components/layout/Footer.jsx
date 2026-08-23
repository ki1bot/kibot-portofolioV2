export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center gap-4 border-t border-white/10 px-4 py-8 text-center text-xs text-slate-500 sm:px-5 md:flex-row md:justify-between md:text-left">
      <div className="flex items-center gap-2 text-slate-300">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-fuchsia-400" />

        <strong>Rifqi</strong>
      </div>

      <p>© {new Date().getFullYear()} Rifqi. All rights reserved.</p>
    </footer>
  );
}
