import { SectionHeading } from "../common/SectionHeading";
import { SOCIAL_LINKS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function ContactSection() {
  return (
    <section
      className="border-b border-white/10 py-[clamp(90px,10vw,140px)]"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 max-[700px]:px-4">
        <SectionHeading
          eyebrow="Get in touch"
          title="CONTACT"
          accent="ME."
          description="Terbuka untuk diskusi project, kolaborasi, pengembangan produk, atau percakapan teknis seputar software development."
        />

        <div
          className="mt-14 grid grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)] border border-white/10 bg-[#0d0d0d] max-[860px]:grid-cols-1"
          data-reveal
        >
          <div className="relative min-h-[520px] overflow-hidden border-r border-white/10 max-[860px]:aspect-[4/3] max-[860px]:min-h-0 max-[860px]:border-r-0 max-[860px]:border-b">
            <div className="profile-grid-pattern absolute inset-0 opacity-35" />

            <div className="absolute top-10 right-8 h-36 w-36 rounded-full bg-[#d7ff3f]" />

            <img
              className="absolute inset-0 z-[2] h-full w-full object-cover object-center saturate-[0.8]"
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.fullName}
              loading="lazy"
            />

            <div className="absolute inset-x-0 bottom-0 z-[3] h-1/2 bg-gradient-to-b from-transparent to-black/90" />

            <div className="absolute right-6 bottom-6 left-6 z-[4]">
              <p className="font-mono text-[0.62rem] font-bold tracking-[0.1em] text-[#d7ff3f] uppercase">
                Software Engineer
              </p>

              <h3 className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.06em] uppercase">
                RIFQI
              </h3>
            </div>
          </div>

          <div className="p-[clamp(24px,5vw,54px)]">
            <p className="max-w-[620px] text-[clamp(1.25rem,2.7vw,2rem)] font-semibold leading-[1.5] tracking-[-0.035em]">
              Punya ide atau project yang ingin dibangun? Hubungi saya dan kita
              bisa membahas kebutuhan teknisnya.
            </p>

            <a
              className="mt-8 inline-flex min-h-[50px] items-center justify-center bg-[#d7ff3f] px-6 font-mono text-[0.68rem] font-black tracking-[0.08em] text-black uppercase transition hover:-translate-y-1"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              Contact Me ↗
            </a>

            <div className="mt-10 border-t border-white/10">
              <div className="grid grid-cols-[120px_minmax(0,1fr)_auto] items-center gap-4 border-b border-white/10 py-5 max-[520px]:grid-cols-[1fr_auto]">
                <span className="font-mono text-[0.62rem] text-white/35 uppercase max-[520px]:col-span-2">
                  Email
                </span>

                <a
                  className="overflow-hidden text-sm font-bold text-ellipsis whitespace-nowrap transition-colors hover:text-[#d7ff3f]"
                  href={`mailto:${PERSONAL_INFO.email}`}
                >
                  {PERSONAL_INFO.email}
                </a>

                <span className="text-[#d7ff3f]">↗</span>
              </div>

              {SOCIAL_LINKS.filter((item) => item.label !== "Email").map(
                (item) => (
                  <a
                    className="grid grid-cols-[120px_minmax(0,1fr)_auto] items-center gap-4 border-b border-white/10 py-5 transition hover:px-2 max-[520px]:grid-cols-[1fr_auto]"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={item.label}
                  >
                    <span className="font-mono text-[0.62rem] text-white/35 uppercase max-[520px]:col-span-2">
                      {item.label}
                    </span>

                    <strong className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                      {item.value}
                    </strong>

                    <span className="text-[#d7ff3f]">↗</span>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
