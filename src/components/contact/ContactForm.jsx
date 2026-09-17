import { useState } from "react";
import { openContactEmail } from "../../api/contact";

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
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid-two">
        <label>
          <span>Nama</span>

          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Nama Anda"
            maxLength={80}
            required
          />
        </label>

        <label>
          <span>Email</span>

          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="email@domain.com"
            maxLength={120}
            required
          />
        </label>
      </div>

      <label>
        <span>Pesan</span>

        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Ceritakan ide, project, atau hal yang ingin dibicarakan."
          rows={6}
          maxLength={2000}
          required
        />
      </label>

      {status.text ? (
        <p className={`form-status ${status.type}`}>{status.text}</p>
      ) : null}

      <button type="submit" className="button button-primary form-submit">
        Send message
        <span>↗</span>
      </button>
    </form>
  );
}
