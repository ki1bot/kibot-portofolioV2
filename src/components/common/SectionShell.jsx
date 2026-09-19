export function SectionShell({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t border-black/10 bg-[#f7f7f4] bg-[repeating-linear-gradient(135deg,rgba(17,17,17,0.05)_0,rgba(17,17,17,0.05)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[#090909] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_8px)] ${className}`}
    >
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1510px] py-[96px] pb-[118px] max-[960px]:w-[calc(100%_-_36px)] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:py-20 max-[760px]:pb-24">
        {children}
      </div>
    </section>
  );
}
