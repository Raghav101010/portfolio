"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // simulate sending
    setTimeout(() => {
      setSent(true);
    }, 500);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      {/* Contact Links */}
      <div className="flex gap-6 text-lg mb-10">
        <a
          href="https://wa.me/9779848867593"
          target="_blank"
          className="hover:text-green-500"
        >
          WhatsApp
        </a>

        <a
          href="mailto:raghwendramahato@gmail.com"
          className="hover:text-blue-500"
        >
          Email
        </a>

        <a
          href="https://linkedin.com/in/raghwendra-mahato-553706197/"
          target="_blank"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
      </div>

      <hr className="mb-10 opacity-30" />

      {/* Contact Form */}
      <h2 className="text-2xl font-semibold mb-6">
        Send Us Your Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="Your Name"
          className="w-full p-3 rounded bg-neutral-100 border border-neutral-700"
        />

        <input
          required
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-neutral-100 border border-neutral-700"
        />

        <textarea
          required
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded bg-neutral-300 border border-neutral-700"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded hover:scale-105 transition border border-neutral-700"
        >
          Send Message
        </button>
      </form>

      {/* Success Popup */}
      {sent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg">
            <p className="mb-4 font-semibold">
              ✅ Your message has been sent!
            </p>
            <button
              onClick={() => setSent(false)}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="mt-12">
        <Link href="/" className="underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
