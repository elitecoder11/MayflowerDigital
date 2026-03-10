const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most projects launch within 3–7 days after approval.",
  },
  {
    q: "Do I need to provide content?",
    a: "We can help organize or write content based on your business information.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes, or we can handle updates through our maintenance plan.",
  },
  {
    q: "Do you work with businesses outside Detroit?",
    a: "Yes — we serve businesses nationwide.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
          Quick answers to common questions.
        </p>
        <dl className="max-w-2xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <dt className="font-display font-semibold text-slate-900">{faq.q}</dt>
              <dd className="mt-2 text-slate-600">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
