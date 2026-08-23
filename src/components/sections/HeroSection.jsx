import {
  ArrowDown01Icon,
  LinkSquare02Icon,
  Mail01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "../animations/Reveal";
import { HugeIcon } from "../common/HugeIcon";
import { HERO_ROLES, SOCIAL_LINKS } from "../../data/site";
import { useTypewriter } from "../../hooks/useTypewriter";
import { HERO_STACKS, PERSONAL_INFO } from "../../lib/portfolio";
import { scrollToSection } from "../../lib/navigation";

export function HeroSection() {
  const role = useTypewriter(HERO_ROLES);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-svh w-full max-w-[1180px] items-center px-4 pb-20 pt-32 sm:px-5"
    >
      <div className="grid w-full items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="mx-auto inline-flex w-max items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs font-bold tracking-wide text-violet-200 shadow-xl shadow-violet-950/10 lg:mx-0">
            <HugeIcon icon={SparklesIcon} size={16} />
            Ready to Innovate
          </div>

          <h1 className="mt-7 text-[clamp(3.2rem,10vw,6.4rem)] font-black leading-[0.95] tracking-[-0.065em] text-white">
            Software
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
              Engineer
            </span>
          </h1>

          <div className="mt-6 min-h-10 text-[clamp(1.25rem,3vw,2rem)] font-bold text-slate-200">
            {role}

            <span className="ml-1 animate-pulse text-violet-400">|</span>
          </div>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-slate-400 lg:mx-0">
            Saya membangun website yang modern, fungsional, dan mudah digunakan
            untuk menjawab berbagai kebutuhan digital.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {HERO_STACKS.map((stack) => (
              <span
                key={stack}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300"
              >
                {stack}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-indigo-600 px-4.5 text-sm font-bold text-white shadow-xl shadow-violet-950/20 transition hover:-translate-y-0.5 hover:shadow-violet-900/30"
            >
              Projects
              <HugeIcon icon={LinkSquare02Icon} size={17} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-4.5 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/10"
            >
              Contact
              <HugeIcon icon={Mail01Icon} size={17} />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-200"
              >
                <HugeIcon icon={social.icon} size={21} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative grid place-items-center">
          <div className="absolute h-2/3 w-2/3 rounded-full bg-violet-600/20 blur-[95px]" />

          <img
            src={PERSONAL_INFO.heroImage}
            alt="Ilustrasi pengembangan website"
            className="relative z-10 aspect-square w-full max-w-[580px] object-contain drop-shadow-2xl"
          />
        </Reveal>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("education")}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center gap-1.5 border-0 bg-transparent px-3 py-2 text-xs text-slate-500 sm:flex"
        aria-label="Lanjut ke bagian pendidikan"
      >
        <span>Scroll</span>

        <span className="animate-bounce">
          <HugeIcon icon={ArrowDown01Icon} size={18} />
        </span>
      </button>
    </section>
  );
}
