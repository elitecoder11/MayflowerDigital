"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      // Replace with your API route or form service (e.g. Formspree, Netlify Forms)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl mb-3">
            Ready to upgrade your business website?
          </h2>
          <p className="text-slate-600 mb-6">
            Request a free demo homepage and see what your business could look like online.
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Get Your Free Demo
          </button>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl text-center mb-4">
          Request Your Free Demo Homepage
        </h3>
        <p className="text-slate-600 text-center max-w-xl mx-auto mb-4">
          Tell us about your business and we&apos;ll create a mockup of your new site—no commitment.
        </p>
        <p className="text-slate-600 text-center max-w-xl mx-auto mb-12 text-sm">
          Most demo mockups are delivered within 24–48 hours.
        </p>

        <div id="contact-form" className="max-w-xl mx-auto scroll-mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1">
                Business Name
              </label>
              <input
                id="business"
                name="businessName"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message / Business Description <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="What does your business do? Any specific needs?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:opacity-70"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Request sent"
                  : status === "error"
                    ? "Try again"
                    : "Send Request"}
            </button>
          </form>

          <div className="mt-8 text-center text-slate-600">
            <p>
              <strong className="text-slate-900">Email:</strong>{" "}
              <a href="mailto:mayflowerdigital313@gmail.com" className="text-sky-600 hover:underline">
                mayflowerdigital313@gmail.com
              </a>
            </p>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Optional: <a href="#" className="text-sky-600 hover:underline">Schedule a call</a> to discuss your project.
          </p>
        </div>
      </div>
    </section>
  );
}
