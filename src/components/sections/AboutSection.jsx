import { SectionHeading } from "../common/SectionHeading";
import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    ["🔥", "Student", "CURRENT STATUS"],
    ["🚀", projectCount, "PROJECTS SHIPPED"],
    ["🏆", certificateCount, "CERTIFICATIONS"],
    ["🎓", "S1", "INFORMATION SYSTEMS"],
  ];

  return (
    <section
      className="border-b border-white/10 py-[clamp(94px,10vw,145px)]"
      id="about"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="About"
          title="ABOUT"
          accent="ME."
          description="A short introduction to who I am, what I build, and the technologies I use along the way."
        />

        <div
          className="mt-16 grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-[clamp(42px,7vw,90px)] max-[900px]:grid-cols-1"
          data-reveal
        >
          <p className="text-[clamp(1.45rem,3vw,2.35rem)] font-bold leading-[1.4] tracking-[-0.04em]">
            Hey there! I&apos;m {PERSONAL_INFO.fullName}, an Information Systems
            student focused on software development across web and mobile.
          </p>

          <div className="space-y-5 text-[0.98rem] leading-[1.85] text-white/58">
            <p>
              I build applications using technologies such as Laravel, React,
              Next.js, TypeScript, PostgreSQL, Flutter, Java, and Golang. I
              enjoy working across frontend, backend, databases, integrations,
              and deployment.
            </p>

            <p>
              My approach is simple: understand the problem first, choose the
              right tools, keep the structure maintainable, and make the final
              experience clear for the people who use it.
            </p>
          </div>
        </div>

        <div
          className="mt-14 grid grid-cols-4 border-t border-l border-white/10 max-[820px]:grid-cols-2 max-[480px]:grid-cols-1"
          data-reveal
        >
          {metrics.map(([icon, value, label]) => (
            <div
              className="min-h-[178px] border-r border-b border-white/10 bg-white/[0.018] p-5"
              key={label}
            >
              <span className="text-xl" aria-hidden="true">
                {icon}
              </span>

              <strong className="mt-7 block text-[clamp(1.8rem,4vw,3rem)] font-black leading-none tracking-[-0.055em]">
                {value}
              </strong>

              <p className="mt-2 font-mono text-[0.61rem] font-bold tracking-[0.09em] text-white/38 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        <blockquote
          className="mt-10 border-l-2 border-[#d8ff3e] bg-white/[0.018] px-6 py-5"
          data-reveal
        >
          <p className="text-[clamp(1.15rem,2.2vw,1.65rem)] font-semibold leading-[1.55] tracking-[-0.025em] text-white/90">
            “Clean code should not only work — it should remain understandable,
            maintainable, and useful when the project grows.”
          </p>

          <footer className="mt-3 font-mono text-[0.62rem] font-bold tracking-[0.08em] text-[#d8ff3e] uppercase">
            — My Philosophy
          </footer>
        </blockquote>

        <div className="mt-20" data-reveal>
          <p className="font-mono text-[0.7rem] font-black tracking-[0.11em] text-[#d8ff3e] uppercase">
            // Stack &amp; Tools
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {TECH_STACK.map((item) => (
              <span
                className="border border-white/12 bg-white/[0.018] px-3.5 py-2.5 font-mono text-[0.66rem] font-bold text-white/58 transition hover:border-[#d8ff3e]/60 hover:bg-[#d8ff3e] hover:text-black"
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
