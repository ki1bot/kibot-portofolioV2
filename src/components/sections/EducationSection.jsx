import { Reveal } from "../animations/Reveal";
import { EDUCATION } from "../../lib/portfolio";

export function EducationSection() {
  return (
    <section
      id="education"
      className="mx-auto w-full max-w-[1180px] px-4 py-24 sm:px-5 lg:py-28"
    >
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-xs font-bold tracking-wide text-violet-300">
          Education Journey
        </span>

        <h2 className="mt-2.5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-tight tracking-[-0.045em] text-white">
          Perjalanan pendidikan saya
        </h2>

        <p className="mt-3.5 leading-7 text-slate-400">
          Berikut adalah perjalanan pendidikan saya dari awal hingga saat ini
          sebagai mahasiswa Sistem Informasi di Universitas Gunadarma.
        </p>
      </Reveal>

      <div className="relative mx-auto grid max-w-[900px] gap-4">
        <div className="absolute bottom-5 left-[21px] top-5 w-px bg-gradient-to-b from-violet-500 via-blue-400/50 to-transparent" />

        {EDUCATION.map((item, index) => (
          <Reveal
            key={`${item.period}-${item.title}`}
            className="relative pl-16"
          >
            <div className="absolute left-0 top-5 z-10 grid h-11 w-11 place-items-center rounded-2xl border border-violet-400/35 bg-slate-950 text-xs font-extrabold text-violet-300 shadow-xl shadow-violet-950/20">
              {index + 1}
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/25">
              <span className="text-xs font-extrabold text-violet-400">
                {item.period}
              </span>

              <h3 className="mt-2 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
