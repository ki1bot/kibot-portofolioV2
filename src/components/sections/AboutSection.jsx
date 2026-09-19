import { SectionHeading } from "../common/SectionHeading";
import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";

const STACK_LOOP = [...TECH_STACK, ...TECH_STACK];

export function AboutSection({ projectCount, certificateCount }) {
  const metrics = [
    {
      number: "01",
      value: "Student",
      label: "Current Status",
    },
    {
      number: "02",
      value: projectCount,
      label: "Projects Shipped",
    },
    {
      number: "03",
      value: certificateCount,
      label: "Certifications",
    },
    {
      number: "04",
      value: "S1",
      label: "Information Systems",
    },
  ];

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 py-[clamp(100px,11vw,155px)]"
      id="about"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d8ff3e]/[0.025] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Who am I"
          title="ABOUT"
          accent="ME."
          description="A short introduction to who I am, how I approach software development, and the technologies I work with."
        />

        <div
          className="mt-[clamp(60px,8vw,100px)] grid grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-[clamp(48px,8vw,110px)] max-[900px]:grid-cols-1"
          data-reveal
        >
          <div>
            <p className="max-w-[570px] text-[clamp(1.7rem,3.4vw,2.75rem)] font-bold leading-[1.3] tracking-[-0.05em]">
              Hey there! I&apos;m{" "}
              <span className="text-[#d8ff3e]">{PERSONAL_INFO.fullName}</span>,
              an Information Systems student who enjoys turning technical
              problems into usable software.
            </p>
          </div>

          <div className="border-t border-white/12 pt-6">
            <div className="space-y-5 text-[0.98rem] leading-[1.9] text-white/54">
              <p>
                I build web and mobile applications across frontend, backend,
                databases, integrations, deployment, and software architecture.
                My current stack includes Laravel, React, Next.js, TypeScript,
                PostgreSQL, Flutter, Java, Golang, and several supporting tools.
              </p>

              <p>
                I prefer practical engineering over unnecessary complexity:
                understand the actual problem, choose tools that fit the
                requirement, keep the codebase maintainable, and make the final
                product straightforward for its users.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="font-mono text-[0.64rem] font-black tracking-[0.08em] text-[#d8ff3e] uppercase transition-colors hover:text-white"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <span className="text-white/15">/</span>

              <a
                className="font-mono text-[0.64rem] font-black tracking-[0.08em] text-[#d8ff3e] uppercase transition-colors hover:text-white"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-4 border-t border-l border-white/10 max-[850px]:grid-cols-2 max-[480px]:grid-cols-1"
          data-reveal
        >
          {metrics.map((metric) => (
            <div
              className="group min-h-[188px] border-r border-b border-white/10 bg-white/[0.012] p-5 transition-colors hover:bg-white/[0.025]"
              key={metric.label}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.58rem] font-black text-[#d8ff3e]">
                  {metric.number}
                </span>

                <span className="h-2 w-2 bg-white/15 transition-colors group-hover:bg-[#d8ff3e]" />
              </div>

              <strong className="mt-10 block text-[clamp(1.8rem,4vw,3rem)] font-black leading-none tracking-[-0.055em]">
                {metric.value}
              </strong>

              <p className="mt-3 font-mono text-[0.58rem] font-black tracking-[0.09em] text-white/32 uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote
          className="mt-12 grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-y border-white/10 py-8 max-[600px]:grid-cols-1"
          data-reveal
        >
          <span className="text-[clamp(3.5rem,7vw,6rem)] font-black leading-[0.7] text-[#d8ff3e]">
            “
          </span>

          <div>
            <p className="max-w-[900px] text-[clamp(1.3rem,2.6vw,2rem)] font-semibold leading-[1.55] tracking-[-0.035em] text-white/90">
              Clean code should not only work. It should remain understandable,
              maintainable, and useful as the project grows.
            </p>

            <p className="mt-4 font-mono text-[0.59rem] font-black tracking-[0.1em] text-white/32 uppercase">
              — My development philosophy
            </p>
          </div>
        </blockquote>

        <div className="mt-20" data-reveal>
          <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5 max-[650px]:grid">
            <div>
              <p className="font-mono text-[0.68rem] font-black tracking-[0.12em] text-[#d8ff3e] uppercase">
                // Stack &amp; Tools
              </p>

              <h3 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.055em] uppercase">
                Technologies I use.
              </h3>
            </div>

            <span className="font-mono text-[0.6rem] text-white/30 uppercase">
              {TECH_STACK.length}+ Technologies
            </span>
          </div>

          <div className="stack-ticker mt-8 border-y border-white/10 py-4">
            <div className="stack-ticker-track">
              {STACK_LOOP.map((item, index) => (
                <span
                  className="mx-2 inline-flex min-h-10 items-center border border-white/12 bg-white/[0.015] px-4 font-mono text-[0.63rem] font-bold text-white/55 transition-colors hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black"
                  key={`${item}-${index}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="stack-ticker reverse mt-3 border-b border-white/10 pb-4">
            <div className="stack-ticker-track">
              {[...STACK_LOOP].reverse().map((item, index) => (
                <span
                  className="mx-2 inline-flex min-h-10 items-center border border-white/12 bg-white/[0.015] px-4 font-mono text-[0.63rem] font-bold text-white/55 transition-colors hover:border-[#d8ff3e] hover:bg-[#d8ff3e] hover:text-black"
                  key={`${item}-reverse-${index}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
