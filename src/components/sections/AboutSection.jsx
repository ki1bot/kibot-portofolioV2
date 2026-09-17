import { SectionHeading } from "../common/SectionHeading";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    {
      index: "01",
      value: projectCount,
      label: "Projects built",
    },
    {
      index: "02",
      value: certificateCount,
      label: "Certificates",
    },
    {
      index: "03",
      value: "2024",
      label: "University start",
    },
    {
      index: "04",
      value: "BEKASI",
      label: "Based in Indonesia",
    },
  ];

  return (
    <section
      className="border-b border-black/15 py-[clamp(92px,10vw,148px)] dark:border-white/15"
      id="about"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start gap-[clamp(54px,8vw,120px)] px-6 max-[900px]:grid-cols-1 max-[700px]:px-[15px]">
        <SectionHeading
          eyebrow="About me"
          title="ABOUT"
          accent="ME."
          description="Saya lebih tertarik membangun produk yang punya alur jelas daripada sekadar membuat tampilan yang terlihat ramai."
        />

        <div className="pt-[52px] max-[900px]:pt-0" data-reveal>
          <p className="mb-[22px] text-[clamp(1.35rem,2.6vw,2.1rem)] font-bold leading-[1.45] tracking-[-0.035em]">
            Saya {PERSONAL_INFO.fullName}, mahasiswa Sistem Informasi yang
            berfokus pada pengembangan software, terutama web application dan
            mobile application.
          </p>

          <p className="mb-[22px] text-base leading-[1.85] text-[#68665f] dark:text-[#a7a49d]">
            Project yang saya kerjakan mencakup Laravel, React, Next.js,
            TypeScript, PostgreSQL, Flutter, Java, sampai Golang. Fokus saya
            bukan mengumpulkan teknologi sebanyak mungkin, tetapi memahami kapan
            sebuah teknologi layak dipakai dan bagaimana menyusun sistem yang
            tetap mudah dikembangkan.
          </p>

          <p className="mb-[22px] text-base leading-[1.85] text-[#68665f] dark:text-[#a7a49d]">
            Portfolio ini menampilkan project yang benar-benar saya bangun,
            proses belajar yang saya jalani, serta teknologi yang sedang saya
            gunakan dan perdalam.
          </p>

          <div className="mt-[42px] grid grid-cols-2 border-t border-l border-black/15 dark:border-white/15 max-[700px]:grid-cols-1">
            {metrics.map((metric) => (
              <div
                className="min-h-[170px] border-r border-b border-black/15 bg-[#f7f3e9] p-5 dark:border-white/15 dark:bg-[#121212] max-[700px]:min-h-[145px]"
                key={metric.index}
              >
                <span className="font-mono text-[0.68rem] text-[#68665f] dark:text-[#a7a49d]">
                  {metric.index}
                </span>

                <strong className="mt-6 block text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-none tracking-[-0.06em]">
                  {metric.value}
                </strong>

                <p className="mt-2 text-[0.72rem] font-extrabold tracking-[0.08em] text-[#68665f] uppercase dark:text-[#a7a49d]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
