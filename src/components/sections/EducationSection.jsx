import { SectionHeading } from "../common/SectionHeading";
import { JOURNEY_ITEMS } from "../../data/portfolioPage";

export function EducationSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-[#0c0c0c] py-[clamp(100px,11vw,155px)]"
      id="journey"
    >
      <div className="profile-grid-pattern pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="My path"
          title="MY"
          accent="JOURNEY."
          description="The academic journey that shaped my technical foundation, problem-solving process, and interest in building software."
        />

        <div className="mt-16 border-t border-white/10">
          {JOURNEY_ITEMS.map((item, index) => (
            <article
              className="group grid grid-cols-[80px_minmax(0,1fr)_240px] gap-7 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.015] max-[800px]:grid-cols-[58px_minmax(0,1fr)] max-[520px]:gap-4"
              key={`${item.period}-${item.title}`}
              data-reveal
            >
              <div>
                <span className="grid h-12 w-12 place-items-center border border-white/15 bg-[#111] font-mono text-[0.63rem] font-black text-[#d8ff3e] transition-colors group-hover:border-[#d8ff3e] group-hover:bg-[#d8ff3e] group-hover:text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <p className="mb-3 font-mono text-[0.58rem] font-black tracking-[0.1em] text-[#d8ff3e] uppercase">
                  Education
                </p>

                <h3 className="text-[clamp(1.55rem,3vw,2.5rem)] font-black tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[650px] text-[0.94rem] leading-[1.75] text-white/48">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-start justify-end max-[800px]:col-start-2 max-[800px]:justify-start">
                <span className="border border-white/12 px-4 py-2.5 font-mono text-[0.6rem] font-black tracking-[0.07em] text-white/40 uppercase transition-colors group-hover:border-[#d8ff3e]/40 group-hover:text-[#d8ff3e]">
                  {item.period}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-10 flex items-center justify-between gap-6 border border-white/10 bg-[#090909] px-6 py-5 max-[650px]:grid"
          data-reveal
        >
          <div>
            <p className="font-mono text-[0.58rem] font-black tracking-[0.1em] text-white/30 uppercase">
              Current
            </p>

            <p className="mt-1 font-bold">
              Universitas Gunadarma · Sistem Informasi
            </p>
          </div>

          <span className="font-mono text-[0.61rem] font-black tracking-[0.08em] text-[#d8ff3e] uppercase">
            Still learning →
          </span>
        </div>
      </div>
    </section>
  );
}
