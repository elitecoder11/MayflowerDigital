"use client";

import { useState } from "react";
import { DemoModal } from "./DemoModal";

const samples = [
  { title: "Restaurant Website Demo", href: "/portfolio/restaurant-demo" },
  { title: "Dental Practice Demo", href: "/portfolio/dentist-demo" },
  { title: "Fitness Gym Demo", href: "/portfolio/gym-demo" },
];

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function Portfolio() {
  const [openDemoUrl, setOpenDemoUrl] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50">
      <DemoModal
        isOpen={!!openDemoUrl}
        demoUrl={openDemoUrl}
        onClose={() => setOpenDemoUrl(null)}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
          Sample Projects
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
          Clean, professional websites we can customize for your business.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {samples.map((s) => (
            <div
              key={s.href}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:shadow-lg hover:border-sky-200"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="h-6 w-32 bg-slate-300 rounded mx-auto mb-4" />
                  <div className="h-2 w-24 bg-slate-200 rounded mx-auto mb-2" />
                  <div className="h-2 w-20 bg-slate-200 rounded mx-auto" />
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-display font-semibold text-slate-900">{s.title}</h3>
                <button
                  type="button"
                  onClick={() => setOpenDemoUrl(s.href)}
                  className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="font-semibold text-sky-600 hover:text-sky-700 underline underline-offset-2"
          >
            Request a free demo homepage for your business →
          </button>
        </p>
      </div>
    </section>
  );
}
