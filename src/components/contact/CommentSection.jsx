import { useState } from "react";
import { createComment } from "../../lib/portfolio";
import { CommentCard } from "./CommentCard";

const INPUT_CLASS =
  "w-full border border-black/15 bg-[#e4dfd4] text-[#111111] outline-none transition-colors placeholder:text-[#77736b] focus:border-[#9fbe00] focus:bg-[#f7f3e9] dark:border-white/15 dark:bg-[#0f0f0f] dark:text-[#f4f1e8] dark:placeholder:text-[#777777] dark:focus:border-[#d8ff3e] dark:focus:bg-[#181818]";

export function CommentSection({ comments, onAdded }) {
  const [form, setForm] = useState({
    name: "",
    content: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  async function submit(event) {
    event.preventDefault();

    setSubmitting(true);

    setStatus({
      type: "",
      text: "",
    });

    try {
      const created = await createComment(form);

      onAdded(created);

      setForm({
        name: "",
        content: "",
      });

      setStatus({
        type: "success",
        text: "Pesan berhasil ditambahkan.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Pesan belum dapat ditambahkan.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="mt-[18px] border border-black/15 bg-[#f7f3e9] p-[26px] dark:border-white/15 dark:bg-[#121212] max-[700px]:p-5"
      data-reveal
    >
      <div className="flex items-end justify-between gap-5 border-b border-black/15 pb-[22px] dark:border-white/15 max-[700px]:flex-col max-[700px]:items-start">
        <div>
          <p className="mb-2 font-mono text-xs font-extrabold tracking-[0.12em] text-[#718800] uppercase dark:text-[#d8ff3e]">
            // Guestbook
          </p>

          <h3 className="m-0 text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.055em] uppercase">
            Leave a note.
          </h3>
        </div>

        <span className="font-mono text-[0.68rem] text-[#68665f] uppercase dark:text-[#a7a49d]">
          {comments.length} notes
        </span>
      </div>

      <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-[34px] pt-7 max-[900px]:grid-cols-1">
        <div className="border-t border-black/15 dark:border-white/15">
          {comments.slice(0, 4).map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}

          {!comments.length ? (
            <div className="py-8 text-[0.8rem] text-[#68665f] dark:text-[#a7a49d]">
              Belum ada pesan.
            </div>
          ) : null}
        </div>

        <form className="grid gap-[18px]" onSubmit={submit}>
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-extrabold tracking-[0.07em] text-[#3d3b37] uppercase dark:text-[#cbc7bd]">
              Nama
            </span>

            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              className={`${INPUT_CLASS} min-h-[52px] px-3.5`}
              placeholder="Nama"
              maxLength={50}
              required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[0.68rem] font-extrabold tracking-[0.07em] text-[#3d3b37] uppercase dark:text-[#cbc7bd]">
              Pesan
            </span>

            <textarea
              value={form.content}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  content: event.target.value,
                }))
              }
              className={`${INPUT_CLASS} min-h-[148px] resize-y p-3.5`}
              placeholder="Tulis pesan singkat"
              rows={5}
              maxLength={500}
              required
            />
          </label>

          {status.text ? (
            <p
              className={`m-0 border bg-[#e4dfd4] px-3 py-[11px] text-[0.76rem] leading-[1.5] dark:bg-[#0f0f0f] ${
                status.type === "success"
                  ? "border-green-600/30 text-green-700 dark:border-green-300/30 dark:text-green-300"
                  : "border-red-600/30 text-red-700 dark:border-red-300/30 dark:text-red-300"
              }`}
            >
              {status.text}
            </p>
          ) : null}

          <button
            type="submit"
            className="inline-flex min-h-[50px] cursor-pointer items-center justify-center gap-3 border border-black/30 bg-[#f7f3e9] px-5 text-[0.76rem] font-black tracking-[0.08em] uppercase transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/30 dark:bg-[#121212] dark:hover:bg-[#181818]"
            disabled={submitting}
          >
            {submitting ? "Mengirim..." : "Post note"}
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
