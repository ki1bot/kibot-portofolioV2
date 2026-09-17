import { useState } from "react";
import { openContactEmail } from "../../api/contact";

const INPUT_CLASS =
  "w-full border border-black/15 bg-[#e4dfd4] text-[#111111] outline-none transition-colors placeholder:text-[#77736b] focus:border-[#9fbe00] focus:bg-[#f7f3e9] dark:border-white/15 dark:bg-[#0f0f0f] dark:text-[#f4f1e8] dark:placeholder:text-[#777777] dark:focus:border-[#d8ff3e] dark:focus:bg-[#181818]";

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

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function submit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      text: "",
    });

    try {
      openContactEmail(form);

      setStatus({
        type: "success",
        text: "Aplikasi email dibuka. Periksa kembali pesan sebelum dikirim.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : "Data form belum valid.",
      });
    }
  }

  return (
    <form className="grid gap-[18px]" onSubmit={submit}>
      <div className="grid grid-cols-2 gap-3.5 max-[700px]:grid-cols-1">
        <label className="grid gap-2">
          <span className="text-[0.68rem] font-extrabold tracking-[0.07em] text-[#3d3b37] uppercase dark:text-[#cbc7bd]">
            Nama
          </span>

          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={`${INPUT_CLASS} min-h-[52px] px-3.5`}
            placeholder="Nama Anda"
            maxLength={80}
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.68rem] font-extrabold tracking-[0.07em] text-[#3d3b37] uppercase dark:text-[#cbc7bd]">
            Email
          </span>

          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={`${INPUT_CLASS} min-h-[52px] px-3.5`}
            placeholder="email@domain.com"
            maxLength={120}
            required
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-[0.68rem] font-extrabold tracking-[0.07em] text-[#3d3b37] uppercase dark:text-[#cbc7bd]">
          Pesan
        </span>

        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${INPUT_CLASS} min-h-[148px] resize-y p-3.5`}
          placeholder="Ceritakan ide, project, atau hal yang ingin dibicarakan."
          rows={6}
          maxLength={2000}
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
        className="inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-3 border border-[#a8cc12] bg-[#b8df14] px-5 text-[0.76rem] font-black tracking-[0.08em] text-[#101010] uppercase shadow-[6px_6px_0_#151515] transition hover:-translate-x-0.5 hover:-translate-y-0.5 dark:border-[#d8ff3e] dark:bg-[#d8ff3e] dark:text-[#090909] dark:shadow-[6px_6px_0_#000000]"
      >
        Send message
        <span>↗</span>
      </button>
    </form>
  );
}
