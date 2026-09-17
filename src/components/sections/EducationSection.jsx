import { SectionHeading } from "../common/SectionHeading";
import { JOURNEY_ITEMS } from "../../data/portfolioPage";

export function EducationSection() {
  return (
    <section
      className="border-b border-white/10 bg-[#0d0d0d] py-[clamp(94px,10vw,145px)]"
      id="journey"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="JOURNEY."
          description="The education path that shaped my technical foundation, problem-solving process, and interest in software development."
        />

        <div className="mt-16 border-t border-white/10">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="group grid grid-cols-[72px_minmax(0,1fr)_220px] gap-6 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.015] max-[760px]:grid-cols-[52px_minmax(0,1fr)] max-[520px]:gap-4"
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.025] font-mono text-[0.66rem] font-black text-[#d8ff3e]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <p className="mb-2 font-mono text-[0.61rem] font-bold tracking-[0.09em] text-[#d8ff3e] uppercase">
                  Education
                </p>

                <h3 className="text-[clamp(1.35rem,2.7vw,2.15rem)] font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[0.95rem] leading-[1.7] text-white/52">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-start justify-end max-[760px]:col-start-2 max-[760px]:justify-start">
                <span className="border border-white/12 px-3 py-2 font-mono text-[0.62rem] font-bold tracking-[0.06em] text-white/45 uppercase transition group-hover:border-[#d8ff3e]/35 group-hover:text-[#d8ff3e]">
                  {item.period}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
