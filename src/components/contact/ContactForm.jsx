import { useState } from "react";
import { SentIcon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "../common/HugeIcon";
import { openContactEmail } from "../../api/contact";

const INPUT_CLASS =
  "w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/40 focus:ring-4 focus:ring-violet-500/10";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  function submit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      text: "",
    });

    try {
      openContactEmail(form);

      setStatus({
        type: "info",
        text: "Aplikasi email dibuka untuk mengirim pesan.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : "Data form tidak valid.",
      });
    }
  }

  return (
    <form className="grid gap-3.5" onSubmit={submit}>
      <label className="grid gap-2">
        <span className="text-xs font-bold text-slate-300">Nama</span>

        <input
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          className={`${INPUT_CLASS} h-12`}
          placeholder="Nama Anda"
          maxLength={80}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-xs font-bold text-slate-300">Email</span>

        <input
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              email: event.target.value,
            }))
          }
          className={`${INPUT_CLASS} h-12`}
          placeholder="Email Anda"
          maxLength={120}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-xs font-bold text-slate-300">Pesan</span>

        <textarea
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          className={`${INPUT_CLASS} min-h-32 resize-y py-3`}
          placeholder="Tulis pesan Anda"
          rows={5}
          maxLength={2000}
        />
      </label>

      {status.text && (
        <p
          className={`rounded-xl px-3 py-2.5 text-xs ${
            status.type === "error"
              ? "bg-rose-500/10 text-rose-200"
              : "bg-blue-500/10 text-blue-200"
          }`}
        >
          {status.text}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-indigo-600 px-4 text-sm font-bold text-white shadow-xl shadow-violet-950/20 transition hover:-translate-y-0.5"
      >
        Kirim Pesan
        <HugeIcon icon={SentIcon} size={17} />
      </button>
    </form>
  );
}
