import { LinkSquare02Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "../animations/Reveal";
import { HugeIcon } from "../common/HugeIcon";
import { CommentSection } from "../contact/CommentSection";
import { ContactForm } from "../contact/ContactForm";
import { SOCIAL_LINKS } from "../../data/site";

export function ContactSection({ comments }) {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1180px] px-4 py-24 sm:px-5 lg:py-28"
    >
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-xs font-bold tracking-wide text-violet-300">
          Contact
        </span>

        <h2 className="mt-2.5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-tight tracking-[-0.045em] text-white">
          Hubungi Saya
        </h2>

        <p className="mt-3.5 leading-7 text-slate-400">
          Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan, dan saya
          akan membalas secepat mungkin.
        </p>
      </Reveal>

      <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <HugeIcon icon={Mail01Icon} size={23} />
            </div>

            <div>
              <span className="text-xs font-bold tracking-wide text-violet-300">
                Hubungi
              </span>

              <h3 className="mt-1 text-xl font-bold text-white">
                Ada yang ingin didiskusikan?
              </h3>
            </div>
          </div>

          <p className="mb-5 mt-4 leading-7 text-slate-400">
            Kirim saya pesan dan mari kita bicara.
          </p>

          <ContactForm />

          <div className="mt-7">
            <h4 className="mb-3 font-bold text-white">Connect With Me</h4>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-w-0 grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] p-3 text-slate-300 transition hover:border-violet-400/25 hover:bg-violet-500/10"
                >
                  <span className="text-violet-300">
                    <HugeIcon icon={social.icon} size={19} />
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-xs">{social.label}</strong>

                    <small className="mt-0.5 block truncate text-[10px] text-slate-600">
                      {social.value}
                    </small>
                  </span>

                  <HugeIcon icon={LinkSquare02Icon} size={14} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <CommentSection initialComments={comments} />
        </Reveal>
      </div>
    </section>
  );
}
