import { useState } from "react";
import { createComment } from "../../lib/portfolio";
import { CommentCard } from "./CommentCard";

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
    <div className="guestbook" data-reveal>
      <div className="guestbook-header">
        <div>
          <p className="section-eyebrow">// Guestbook</p>

          <h3>Leave a note.</h3>
        </div>

        <span>{comments.length} notes</span>
      </div>

      <div className="guestbook-layout">
        <div className="guestbook-list">
          {comments.slice(0, 4).map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}

          {!comments.length ? (
            <div className="guestbook-empty">Belum ada pesan.</div>
          ) : null}
        </div>

        <form className="guestbook-form" onSubmit={submit}>
          <label>
            <span>Nama</span>

            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              placeholder="Nama"
              maxLength={50}
              required
            />
          </label>

          <label>
            <span>Pesan</span>

            <textarea
              value={form.content}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  content: event.target.value,
                }))
              }
              placeholder="Tulis pesan singkat"
              rows={5}
              maxLength={500}
              required
            />
          </label>

          {status.text ? (
            <p className={`form-status ${status.type}`}>{status.text}</p>
          ) : null}

          <button
            type="submit"
            className="button button-secondary"
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
