import { SectionHeading } from "../common/SectionHeading";
import { JOURNEY_ITEMS } from "../../data/portfolioPage";

export function EducationSection() {
  return (
    <section
      className="border-b border-black/15 bg-black/[0.025] py-[clamp(92px,10vw,148px)] dark:border-white/15 dark:bg-white/[0.02]"
      id="journey"
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-[15px]">
        <SectionHeading
          eyebrow="Learning path"
          title="MY"
          accent="JOURNEY."
          description="Riwayat pendidikan yang membentuk cara saya belajar, menyusun masalah, dan membangun software."
        />

        <div className="mt-[68px] border-b border-black/15 dark:border-white/15">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="grid min-h-[150px] grid-cols-[76px_190px_minmax(0,1fr)_48px] items-center border-t border-black/15 transition-colors hover:bg-black/[0.035] dark:border-white/15 dark:hover:bg-white/[0.035] max-[900px]:grid-cols-[56px_150px_minmax(0,1fr)_36px] max-[700px]:min-h-[132px] max-[700px]:grid-cols-[42px_minmax(0,1fr)_32px] max-[700px]:gap-3 max-[700px]:py-[18px]"
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <div className="font-mono text-[0.72rem] text-[#68665f] dark:text-[#a7a49d] max-[700px]:row-span-2">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="font-mono text-[0.72rem] text-[#68665f] dark:text-[#a7a49d] max-[700px]:col-start-2 max-[700px]:row-start-1 max-[700px]:self-end">
                {item.period}
              </div>

              <div className="max-[700px]:col-start-2 max-[700px]:row-start-2">
                <h3 className="m-0 text-[clamp(1.25rem,2.4vw,2rem)] font-bold tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-2 leading-[1.5] text-[#68665f] dark:text-[#a7a49d]">
                  {item.subtitle}
                </p>
              </div>

              <div className="text-right font-mono text-[1.4rem] text-[#718800] dark:text-[#d8ff3e] max-[700px]:col-start-3 max-[700px]:row-span-2 max-[700px]:row-start-1">
                ↗
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
