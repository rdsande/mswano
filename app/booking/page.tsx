"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Calendar, Group, HomeSimple, Notes, User, Mail, Phone, CheckCircle } from "iconoir-react";

type Status = "idle" | "sending" | "error";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sendStatus, setSendStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    apartmentType: "",
    specialRequests: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSendStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          check_in: form.checkIn,
          check_out: form.checkOut,
          guests: form.guests,
          apartment_type: form.apartmentType,
          special_requests: form.specialRequests || "None",
          to_email: "rodgers@tekleodigital.co.tz",
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSendStatus("error");
    }
  }

  return (
    <main className="min-h-screen font-sans">
      <Navbar />

      {/* Page header */}
      <div className="relative flex min-h-[40vh] items-end overflow-hidden bg-mswano-primary pt-24">
        <Image
          src="/images/seating_3.jpg"
          alt="Mswano Apartments"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mswano-primary via-mswano-primary/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-10">
          <span className="inline-flex rounded-md border border-white/25 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/70">
            Reservations
          </span>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-white md:text-5xl">
            Book Your Stay
          </h1>
          <p className="mt-3 max-w-md leading-7 text-white/65">
            Reserve your apartment at Mswano and experience comfort like never before.
          </p>
        </div>
      </div>

      {/* Booking content */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        {submitted ? (
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-black/5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium text-mswano-primary">Booking Received!</h2>
              <p className="mt-3 leading-7 text-mswano-secondary">
                Thank you, <strong>{form.name}</strong>. Your booking request has been received and our team will contact you shortly to confirm your reservation.
              </p>
            </div>
            <div className="w-full rounded-xl bg-background p-6 text-left text-sm text-mswano-secondary">
              <div className="grid gap-2">
                {form.checkIn && <p><span className="font-medium text-mswano-primary">Check-in:</span> {form.checkIn}</p>}
                {form.checkOut && <p><span className="font-medium text-mswano-primary">Check-out:</span> {form.checkOut}</p>}
                {form.guests && <p><span className="font-medium text-mswano-primary">Guests:</span> {form.guests}</p>}
                {form.apartmentType && <p><span className="font-medium text-mswano-primary">Apartment:</span> {form.apartmentType}</p>}
                <p><span className="font-medium text-mswano-primary">Contact:</span> {form.email}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "", apartmentType: "", specialRequests: "" }); }}
                className="rounded-lg border border-black/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-mswano-primary transition hover:border-mswano-accent"
              >
                New Booking
              </button>
              <a href="/" className="rounded-lg bg-mswano-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary">
                Back to Home
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            {/* Left info panel */}
            <div>
              <div className="overflow-hidden rounded-xl bg-mswano-primary p-8 text-white">
                <div className="relative mb-8 h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/seating_3.jpg"
                    alt="Mswano Apartments"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mswano-primary/60 to-transparent" />
                </div>
                <h2 className="font-serif text-2xl font-medium leading-tight">
                  Two-bedroom apartment
                </h2>
                <p className="mt-3 leading-7 text-white/70">
                  Fully furnished, modern, and designed for comfort. Ideal for families, groups, and extended stays.
                </p>
                <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/60">
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mswano-accent" />
                    Ajabu Ziada Street, No. 23, Kijitonyama
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mswano-accent" />
                    +255 799 608181
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mswano-accent" />
                    reservations@mswanoaparments.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right form */}
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
              <h2 className="font-serif text-2xl font-medium text-mswano-primary">Your Details</h2>
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <input required name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Full Name" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Email Address" />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Phone Number" />
              </div>

              <div className="mt-2 border-t border-black/5 pt-4">
                <h3 className="mb-4 text-sm font-medium text-mswano-primary">Stay Details</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-mswano-primary">
                  Check-in Date
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                    <input required type="date" name="checkIn" value={form.checkIn} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-4 text-mswano-secondary outline-none focus:border-mswano-accent" />
                  </div>
                </label>
                <label className="grid gap-2 text-sm font-medium text-mswano-primary">
                  Check-out Date
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                    <input required type="date" name="checkOut" value={form.checkOut} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-4 text-mswano-secondary outline-none focus:border-mswano-accent" />
                  </div>
                </label>
              </div>
              <div className="relative">
                <Group className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <input required name="guests" value={form.guests} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Number of Guests" />
              </div>
              <div className="relative">
                <HomeSimple className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <select required name="apartmentType" value={form.apartmentType} onChange={handleChange} className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 text-mswano-secondary outline-none focus:border-mswano-accent">
                  <option value="" disabled>Apartment Type</option>
                  <option>Two-bedroom apartment</option>
                </select>
              </div>
              <div className="relative">
                <Notes className="absolute left-4 top-5 h-4 w-4 text-mswano-secondary" />
                <textarea name="specialRequests" value={form.specialRequests} onChange={handleChange} className="min-h-28 w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Special Requests (optional)" />
              </div>
              {sendStatus === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={sendStatus === "sending"}
                className="mt-2 rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary disabled:opacity-60"
              >
                {sendStatus === "sending" ? "Sending…" : "Submit Booking Request"}
              </button>
            </form>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
