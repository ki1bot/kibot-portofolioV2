import { SectionHeading } from "../common/SectionHeading";
import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    ["01", "⚡", projectCount, "Projects shipped"],
    ["02", "🏆", certificateCount, "Certifications"],
    ["03", "🎓", "S1", "Information Systems"],
    ["04", "📍", "Bekasi", "Based in Indonesia"],
  ];

  return (
    <section
      className="border-b border-white/10 py-[clamp(90px,10vw,140px)]"
      id="about"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="About me"
          title="ABOUT"
          accent="ME."
          description="Sedikit tentang cara saya belajar, membangun software, dan memilih teknologi untuk setiap project."
        />

        <div
          className="mt-16 grid grid-cols-[0.9fr_1.1fr] gap-[clamp(40px,7vw,92px)] max-[900px]:grid-cols-1"
          data-reveal
        >
          <p className="text-[clamp(1.45rem,3vw,2.45rem)] font-bold leading-[1.35] tracking-[-0.04em]">
            Hey there! Saya {PERSONAL_INFO.fullName}, mahasiswa Sistem Informasi
            yang fokus pada pengembangan software end-to-end.
          </p>

          <div className="space-y-5 text-[0.98rem] leading-[1.85] text-white/60">
            <p>
              Saya terbiasa mengerjakan frontend, backend, database, deployment,
              sampai integrasi API. Stack yang sering saya gunakan mencakup
              Laravel, React, Next.js, TypeScript, PostgreSQL, Flutter, Java,
              dan Golang.
            </p>

            <p>
              Saya lebih memilih struktur yang jelas, alur pengguna yang mudah
              dipahami, dan kode yang dapat dikembangkan kembali daripada hanya
              mengejar tampilan visual sesaat.
            </p>
          </div>
        </div>

        <div
          className="mt-14 grid grid-cols-4 border-t border-l border-white/10 max-[800px]:grid-cols-2 max-[480px]:grid-cols-1"
          data-reveal
        >
          {metrics.map(([index, icon, value, label]) => (
            <div
              className="min-h-[180px] border-r border-b border-white/10 bg-white/[0.025] p-5"
              key={index}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[0.62rem] text-white/35">
                  {index}
                </span>

                <span className="text-xl" aria-hidden="true">
                  {icon}
                </span>
              </div>

              <strong className="mt-8 block text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.06em]">
                {value}
              </strong>

              <p className="mt-2 font-mono text-[0.62rem] font-bold tracking-[0.08em] text-white/45 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        <blockquote
          className="mt-10 border-l-2 border-[#d7ff3f] bg-white/[0.025] px-6 py-5"
          data-reveal
        >
          <p className="text-[clamp(1.15rem,2.2vw,1.7rem)] font-semibold leading-[1.55] tracking-[-0.025em] text-white/90">
            “Kode yang baik bukan hanya berjalan, tetapi juga mudah dibaca,
            dirawat, dan dikembangkan kembali.”
          </p>

          <footer className="mt-3 font-mono text-[0.64rem] tracking-[0.08em] text-[#d7ff3f] uppercase">
            — My development principle
          </footer>
        </blockquote>

        <div className="mt-20" data-reveal>
          <p className="font-mono text-[0.7rem] font-black tracking-[0.1em] text-[#d7ff3f] uppercase">
            // Stack &amp; Tools
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {TECH_STACK.map((item) => (
              <span
                className="border border-white/15 bg-white/[0.025] px-3.5 py-2.5 font-mono text-[0.68rem] font-bold text-white/65 transition hover:border-[#d7ff3f]/60 hover:bg-[#d7ff3f] hover:text-black"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
