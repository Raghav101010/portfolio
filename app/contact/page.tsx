"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      form.reset();
      setSuccess(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen px-10 py-20">
      {/* Back Button */}
      <Link href="/" className="underline text-sm">
        ← Back to Home
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Contact</h1>

      {/* Contact Links */}
      <div className="mt-6 flex gap-6 text-sm underline">
        <a
          href="https://wa.me/9779848867593"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a href="mailto:raghwendramahato@gmail.com">Email</a>
        <a
          href="https://linkedin.com/in/raghwendra-mahato-553706197/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Send Us Your Message
        </h2>

        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded bg-neutral-200 p-3"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full rounded bg-neutral-200 p-3"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="w-full rounded bg-neutral-200 p-3"
        />

        <button
          disabled={loading}
          className="rounded bg-white px-6 py-3 text-black transition hover:opacity-80 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </form>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="rounded-xl bg-neutral-900 p-8 text-center">
            <p className="mb-4 text-lg">
              ✅ Your message has been sent
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
