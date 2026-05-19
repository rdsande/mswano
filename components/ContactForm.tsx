"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, Phone, MessageText, CheckCircle } from "iconoir-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: "rodgers@tekleodigital.co.tz",
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-medium text-mswano-primary">Message Sent!</h3>
          <p className="mt-2 leading-7 text-mswano-secondary">
            Thank you, <strong>{form.name || "there"}</strong>. We&apos;ll get back to you shortly.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="rounded-lg border border-black/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-mswano-primary transition hover:border-mswano-accent"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-black/5">
      <div className="relative">
        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent"
          placeholder="Full Name"
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent"
          placeholder="Email Address"
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent"
          placeholder="Phone Number"
        />
      </div>
      <div className="relative">
        <MessageText className="absolute left-4 top-5 h-4 w-4 text-mswano-secondary" />
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          className="min-h-36 w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent"
          placeholder="Message"
        />
      </div>
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
