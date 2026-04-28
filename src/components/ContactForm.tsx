"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { Locale } from "@/components/NavigationHelpers";

type ContactFormProps = {
  language: Locale;
  header?: string;
  className?: string;
};

const translations = {
  en: {
    defaultHeader: "CONTACT ME",
    nameSurname: "Name and surname",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully.",
    error: "Failed to send message. Please try again.",
  },
  pl: {
    defaultHeader: "WYŚLIJ WIADOMOŚĆ",
    nameSurname: "Imię i nazwisko",
    email: "Email",
    phone: "Telefon",
    message: "Wiadomość",
    send: "Wyślij wiadomość",
    sending: "Wysyłanie...",
    success: "Wiadomość została wysłana.",
    error: "Nie udało się wysłać wiadomości. Proszę spróbować ponownie.",
  },
} satisfies Record<Locale, Record<string, string>>;

export function ContactForm({
  language,
  header,
  className = "",
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const t = translations[language];

  const inputBaseClass = `
    w-full
    border border-(--border-default)
    bg-(--bg-secondary)
    text-(--text-primary)
    placeholder:text-(--text-secondary)
    px-4 py-3
    focus:outline-none
    focus:border-(--accent-primary)
  `;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;

    const params = {
      nameSurname: (form.elements.namedItem("nameSurname") as HTMLInputElement)
        .value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      await emailjs.send(
        "service_312g9rl",
        "template_miol5xw",
        params,
        "614CUwsKdMD6lEANQ",
      );

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-[80%] my-8 mx-auto space-y-6 ${className}`}
    >
      <h1 className="text-3xl">{header ?? t.defaultHeader}</h1>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        <input
          name="nameSurname"
          type="text"
          placeholder={t.nameSurname}
          className={inputBaseClass}
          required
        />

        <input
          name="email"
          type="email"
          placeholder={t.email}
          className={inputBaseClass}
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder={t.phone}
          className={inputBaseClass}
        />
      </div>

      <div className="overflow-hidden">
        <textarea
          name="message"
          placeholder={t.message}
          rows={6}
          className={`
            ${inputBaseClass}
            min-h-40
            max-w-full
            resize-y
          `}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          border border-(--accent-primary)
          px-6 py-3
          text-(--accent-primary)
          transition
          hover:bg-(--accent-primary)
          hover:text-(--bg-primary)
          disabled:opacity-50
        "
      >
        {loading ? t.sending : t.send}
      </button>

      {status === "success" && (
        <p className="text-(--accent-primary)">{t.success}</p>
      )}

      {status === "error" && <p className="text-red-400">{t.error}</p>}
    </form>
  );
}
