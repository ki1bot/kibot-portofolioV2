import { CommentSection } from "../contact/CommentSection";
import { ContactForm } from "../contact/ContactForm";
import { SectionHeading } from "../common/SectionHeading";
import { SOCIAL_LINKS } from "../../data/portfolioPage";
import { PERSONAL_INFO } from "../../lib/portfolio";

export function ContactSection({ comments, onCommentAdded, loading }) {
  return (
    <section
      className="border-b border-black/15 py-[clamp(92px,10vw,148px)] dark:border-white/15"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 max-[700px]:px-[15px]">
        <SectionHeading
          eyebrow="Get in touch"
          title="CONTACT"
          accent="ME."
          description="Punya project, ide kolaborasi, atau ingin berdiskusi soal pengembangan software? Hubungi saya melalui form atau kanal di bawah."
        />

        <div className="mt-[70px] grid grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] gap-[18px] max-[900px]:grid-cols-1">
          <div
            className="border border-black/15 bg-[#f7f3e9] p-[26px] dark:border-white/15 dark:bg-[#121212] max-[700px]:p-5"
            data-reveal
          >
            <div className="flex items-center gap-[18px] border-b border-black/15 pb-6 dark:border-white/15 max-[480px]:items-start">
              <img
                className="h-[82px] w-[82px] border border-black/30 object-cover saturate-90 dark:border-white/30 max-[480px]:h-[70px] max-[480px]:w-[70px]"
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.fullName}
              />

              <div>
                <p className="m-0 font-mono text-[0.66rem] tracking-[0.07em] text-[#68665f] uppercase dark:text-[#a7a49d]">
                  Software Engineer
                </p>

                <h3 className="my-[5px] text-2xl font-bold tracking-[-0.04em]">
                  {PERSONAL_INFO.fullName}
                </h3>

                <span className="font-mono text-[0.66rem] tracking-[0.07em] text-[#68665f] uppercase dark:text-[#a7a49d]">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <p className="my-[26px] leading-[1.75] text-[#68665f] dark:text-[#a7a49d]">
              Saya terbuka untuk diskusi project, kolaborasi, pengembangan
              produk, dan percakapan teknis yang relevan dengan software
              development.
            </p>

            <div className="border-t border-black/15 dark:border-white/15">
              {SOCIAL_LINKS.map((item) => (
                <a
                  className="grid min-h-16 grid-cols-[90px_minmax(0,1fr)_auto] items-center gap-3.5 border-b border-black/15 transition-all hover:px-2.5 hover:bg-black/[0.025] dark:border-white/15 dark:hover:bg-white/[0.025] max-[700px]:grid-cols-[74px_minmax(0,1fr)_auto] max-[480px]:grid-cols-[1fr_auto]"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  key={item.label}
                >
                  <span className="font-mono text-[0.67rem] text-[#68665f] dark:text-[#a7a49d] max-[480px]:col-span-2 max-[480px]:mb-[-8px]">
                    {item.label}
                  </span>

                  <strong className="overflow-hidden text-[0.84rem] text-ellipsis whitespace-nowrap">
                    {item.value}
                  </strong>

                  <b className="font-mono text-[0.67rem] text-[#718800] dark:text-[#d8ff3e]">
                    ↗
                  </b>
                </a>
              ))}
            </div>
          </div>

          <div
            className="border border-black/15 bg-[#f7f3e9] p-[26px] dark:border-white/15 dark:bg-[#121212] max-[700px]:p-5"
            data-reveal
          >
            <div className="mb-7 flex items-center justify-between gap-[18px] border-b border-black/15 pb-[18px] font-mono text-[0.65rem] font-bold tracking-[0.08em] text-[#68665f] dark:border-white/15 dark:text-[#a7a49d]">
              <span>START A CONVERSATION</span>

              <strong className="text-[#718800] dark:text-[#d8ff3e]">
                02 / CONTACT
              </strong>
            </div>

            <ContactForm />
          </div>
        </div>

        {!loading ? (
          <CommentSection comments={comments} onAdded={onCommentAdded} />
        ) : null}
      </div>
    </section>
  );
}
