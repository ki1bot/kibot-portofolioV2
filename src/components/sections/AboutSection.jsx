import {
  BriefcaseBusinessIcon,
  CodeIcon,
  DatabaseIcon,
  Download01Icon,
  GithubIcon,
  LinkSquare02Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "../animations/Reveal";
import { HugeIcon } from "../common/HugeIcon";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";
import { scrollToSection } from "../../lib/navigation";

const CAPABILITIES = [
  {
    icon: CodeIcon,
    title: "Frontend Development",
    text: "Mengembangkan antarmuka website yang responsif, modern, dan mudah digunakan dengan React, Next.js, Tailwind CSS, dan framework lainnya.",
  },
  {
    icon: DatabaseIcon,
    title: "Database Integration",
    text: "Mengintegrasikan aplikasi dengan database untuk menyimpan, mengelola, dan menampilkan project, sertifikat, komentar, dan data pendukung lainnya.",
  },
  {
    icon: BriefcaseBusinessIcon,
    title: "Clean Code Structure",
    text: "Menata struktur folder, komponen, dan kode secara terorganisir agar mudah dipahami, dipelihara, dan dikembangkan.",
  },
];

export function AboutSection({ projectCount, certificateCount }) {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1180px] px-4 py-24 sm:px-5 lg:py-28"
    >
      <Reveal className="mb-12 max-w-[900px]">
        <span className="text-xs font-bold tracking-wide text-violet-300">
          About Me
        </span>

        <h2 className="mt-2.5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-[-0.045em] text-white">
          Saya membangun website dengan tampilan yang rapi, responsif, dan
          nyaman digunakan di berbagai perangkat.
        </h2>

        <p className="mt-4 max-w-4xl leading-8 text-slate-400">
          Saya adalah mahasiswa Sistem Informasi yang berfokus pada pengembangan
          website modern. Saya menggunakan React, Next.js, Tailwind CSS, dan
          framework lainnya untuk membangun antarmuka yang responsif, mengelola
          data aplikasi, serta menghadirkan pengalaman pengguna yang nyaman di
          berbagai perangkat.
        </p>
      </Reveal>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4">
          {CAPABILITIES.map(({ icon, title, text }) => (
            <Reveal
              key={title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/25"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <HugeIcon icon={icon} size={23} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto w-full max-w-[620px] rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="mx-auto mb-5 aspect-square w-[min(220px,68%)] rounded-full bg-gradient-to-br from-blue-400 via-violet-500 to-fuchsia-400 p-1 shadow-2xl shadow-violet-950/30">
            <ImageWithFallback
              src={PERSONAL_INFO.profileImage}
              alt="Rifqi"
              className="h-full w-full rounded-full bg-slate-900 object-cover"
              initials="RF"
            />
          </div>

          <h3 className="text-2xl font-bold text-white">
            {PERSONAL_INFO.name}
          </h3>

          <p className="mt-1 font-bold text-violet-300">{PERSONAL_INFO.role}</p>

          <p className="mt-2.5 flex items-center justify-center gap-1.5 text-sm leading-7 text-slate-400">
            <HugeIcon icon={Location01Icon} size={17} />
            {PERSONAL_INFO.location}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-1 py-3.5">
              <strong className="block text-xl text-white">
                {projectCount}
              </strong>
              <span className="mt-1 block text-[10px] text-slate-500">
                Projects
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-1 py-3.5">
              <strong className="block text-xl text-white">
                {certificateCount}
              </strong>
              <span className="mt-1 block text-[10px] text-slate-500">
                Certificates
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-1 py-3.5">
              <strong className="block text-xl text-white">
                {TECH_STACK.length}
              </strong>
              <span className="mt-1 block text-[10px] text-slate-500">
                Tech Stack
              </span>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-left transition hover:border-violet-400/30 hover:bg-violet-500/10"
          >
            <span className="text-slate-200">
              <HugeIcon icon={GithubIcon} size={23} />
            </span>

            <div>
              <strong className="block text-sm text-white">
                GitHub Contributions
              </strong>

              <span className="mt-0.5 block text-xs text-slate-500">
                View on GitHub
              </span>
            </div>

            <HugeIcon icon={LinkSquare02Icon} size={16} />
          </a>

          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://drive.google.com/drive/folders/1SmhgvKkpRICHDnnvEH3dTHS-72bmsp16?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/10"
            >
              <HugeIcon icon={Download01Icon} size={17} />
              Download CV
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-indigo-600 px-4 text-sm font-bold text-white shadow-xl shadow-violet-950/20 transition hover:-translate-y-0.5"
            >
              View Projects
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
