const reasons = [
  "Fast turnaround (3–7 days)",
  "Built for mobile first",
  "SEO-ready from launch",
  "Local support from a Detroit-based team",
  "Transparent pricing — no hidden fees",
  "Optimized for speed, mobile devices, and Google search visibility",
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
          Why Choose Mayflower Digital
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Trust and clarity from day one.
        </p>
        <ul className="max-w-xl mx-auto space-y-4">
          {reasons.map((reason) => (
            <li key={reason} className="flex gap-3 text-slate-700">
              <span className="text-sky-500 shrink-0 font-bold">✓</span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
