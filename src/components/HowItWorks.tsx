const steps = [
  {
    number: "1",
    title: "Free Demo Homepage",
    description: "We make a mockup of your site before you buy.",
  },
  {
    number: "2",
    title: "Approve Your Website",
    description: "Quick revisions to match your business.",
  },
  {
    number: "3",
    title: "Go Live in 3–7 Days",
    description: "Fast deployment & secure hosting.",
  },
  {
    number: "4",
    title: "Ongoing Support",
    description: "Hosting, edits, and optional AI/SEO services.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
          How We Work
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
          A simple process from demo to launch and beyond.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white shadow-lg">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
