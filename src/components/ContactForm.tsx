"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { Locale } from "@/components/NavigationHelpers"

type ContactFormProps = {
  language: Locale;
  header?: string;
  className?: string;
};

export function ContactForm({ header = "CONTACT US", className = "" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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

    const emailJsIdentifiers = {
      SERVICE_ID: "service_312g9rl",
      TEMPLATE_ID: "template_miol5xw",
      PUBLIC_KEY: "614CUwsKdMD6lEANQ",
    };

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
        emailJsIdentifiers.SERVICE_ID,
        emailJsIdentifiers.TEMPLATE_ID,
        params,
        // emailJsIdentifiers.PUBLIC_KEY
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
      <h1 className="text-3xl">{header}</h1>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        <input
          name="nameSurname"
          type="text"
          placeholder="Name and surname"
          className={inputBaseClass}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className={inputBaseClass}
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className={inputBaseClass}
        />
      </div>

      <div className="overflow-hidden">
        <textarea
          name="message"
          placeholder="Message"
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
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-(--accent-primary)">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-red-400">Failed to send message. Try again.</p>
      )}
    </form>
  );
}
