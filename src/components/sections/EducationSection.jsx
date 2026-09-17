import { SectionHeading } from "../common/SectionHeading";
import { JOURNEY_ITEMS } from "../../data/portfolioPage";

export function EducationSection() {
  return (
    <section
      className="border-b border-white/10 bg-[#0d0d0d] py-[clamp(90px,10vw,140px)]"
      id="journey"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Career path"
          title="MY"
          accent="JOURNEY."
          description="Perjalanan pendidikan yang membentuk fondasi teknis dan cara saya menyelesaikan masalah melalui software."
        />

        <div className="mt-16 space-y-4">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="group grid grid-cols-[70px_minmax(0,1fr)_220px] gap-6 border border-white/10 bg-[#101010] p-6 transition hover:border-[#d7ff3f]/35 max-[760px]:grid-cols-[52px_1fr] max-[520px]:p-4"
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.03] font-mono text-[0.68rem] font-black text-[#d7ff3f]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <p className="mb-2 font-mono text-[0.62rem] font-bold tracking-[0.09em] text-[#d7ff3f] uppercase">
                  Education
                </p>

                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[0.92rem] text-white/50">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-start justify-end max-[760px]:col-start-2 max-[760px]:justify-start">
                <span className="border border-white/10 px-3 py-2 font-mono text-[0.64rem] font-bold tracking-[0.06em] text-white/55 uppercase group-hover:border-[#d7ff3f]/30 group-hover:text-[#d7ff3f]">
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
