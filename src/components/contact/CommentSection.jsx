import { useState } from "react";
import { Message01Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "../common/HugeIcon";
import { createComment } from "../../lib/portfolio";
import { CommentCard } from "./CommentCard";

const FIELD_CLASS =
  "w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/40 focus:ring-4 focus:ring-violet-500/10";

export function CommentSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments);

  const [form, setForm] = useState({
    name: "",
    content: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const pinned = comments.find((comment) => comment.is_pinned);

  const regular = comments.filter((comment) => !comment.is_pinned);

  async function submit(event) {
    event.preventDefault();

    setSubmitting(true);

    setStatus({
      type: "",
      text: "",
    });

    try {
      const newComment = await createComment(form);

      setComments((current) => [newComment, ...current]);

      setForm({
        name: "",
        content: "",
      });

      setStatus({
        type: "success",
        text: "Komentar berhasil dikirim.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error ? error.message : "Komentar gagal dikirim.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-wide text-violet-300">
            Komentar ({comments.length})
          </span>

          <h3 className="mt-1 text-xl font-bold text-white">
            Tinggalkan tanggapan
          </h3>
        </div>

        <span className="text-violet-400">
          <HugeIcon icon={Message01Icon} size={25} />
        </span>
      </div>

      <form
        className="mt-5 grid gap-3 border-b border-white/10 pb-6"
        onSubmit={submit}
      >
        <input
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          className={`${FIELD_CLASS} h-12`}
          placeholder="Masukkan nama Anda"
          maxLength={50}
        />

        <textarea
          value={form.content}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              content: event.target.value,
            }))
          }
          className={`${FIELD_CLASS} min-h-28 resize-y py-3`}
          placeholder="Tulis komentar"
          rows={4}
          maxLength={500}
        />

        {status.text && (
          <p
            className={`rounded-xl px-3 py-2.5 text-xs ${
              status.type === "success"
                ? "bg-emerald-500/10 text-emerald-200"
                : "bg-rose-500/10 text-rose-200"
            }`}
          >
            {status.text}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-indigo-600 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {submitting ? "Mengirim..." : "Kirim Komentar"}
        </button>
      </form>

      <div className="mt-5 grid max-h-[650px] gap-3 overflow-y-auto pr-1">
        {pinned && (
          <div className="grid gap-2">
            <span className="text-[11px] font-extrabold text-violet-300">
              Pinned Comment
            </span>

            <CommentCard comment={pinned} isPinned />
          </div>
        )}

        {regular.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
