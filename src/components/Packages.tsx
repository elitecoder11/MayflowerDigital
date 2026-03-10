const packages = [
  {
    name: "Starter Website",
    price: "$900",
    tagline: "Perfect for small businesses.",
    features: [
      "5 pages",
      "Mobile responsive",
      "Contact form",
      "Google Maps",
      "Basic SEO",
      "3–5 day delivery",
    ],
    hosting: "$50/month optional",
    featured: false,
  },
  {
    name: "Growth Website",
    price: "$1,500",
    tagline: null,
    features: [
      "8–10 pages",
      "Blog capability",
      "SEO setup",
      "Analytics",
      "Booking / appointment forms",
      "Custom design elements",
    ],
    hosting: "$75/month",
    featured: true,
  },
  {
    name: "Pro Website",
    price: "$2,500",
    tagline: "For businesses that want more advanced features.",
    features: [
      "10–15 pages",
      "Custom UI design",
      "Advanced SEO setup",
      "Booking / CRM integrations",
      "Blog + content system",
      "Performance optimization",
    ],
    hosting: "Included",
    featured: false,
  },
];

const addOns = [
  { item: "Extra pages", price: "$100/page" },
  { item: "AI Chatbots / Automation", price: "$500–$1,500 setup + $50–$150/month" },
  { item: "SEO & Marketing services", price: "$300–$500/month" },
];

export function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
          Our Packages
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-6">
          Clear pricing for small businesses. Choose a package or add-ons to fit your needs.
        </p>

        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-14 text-sm sm:text-base">
          Traditional web agencies charge $3,000–$10,000 for a business website. We specialize in modern, fast websites for $900–$2,500.
        </p>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border-2 p-6 flex flex-col ${
                pkg.featured
                  ? "border-sky-500 bg-sky-50/50 shadow-lg shadow-sky-500/10"
                  : "border-slate-200 bg-white"
              }`}
            >
              {pkg.featured && (
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mt-2 text-2xl font-bold text-slate-900">{pkg.price}</p>
              {pkg.tagline && (
                <p className="mt-1 text-sm text-slate-600">{pkg.tagline}</p>
              )}
              <p className="mt-3 text-sm font-medium text-slate-700">Includes:</p>
              <ul className="mt-2 space-y-2 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-sky-500 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 pt-4 border-t border-slate-200 text-sm font-medium text-slate-700">
                Hosting: {pkg.hosting}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
            Optional Add-ons
          </h3>
          <ul className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
            {addOns.map((add) => (
              <li key={add.item} className="flex justify-between items-center text-sm">
                <span className="text-slate-700">{add.item}</span>
                <span className="font-medium text-slate-900">{add.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 max-w-2xl mx-auto rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-8 text-center">
          <p className="font-display text-lg font-semibold text-slate-900 mb-2">
            Not sure which package fits your business?
          </p>
          <p className="text-slate-600 mb-6">
            Request a Free Demo Homepage and we&apos;ll show you what your site could look like before you buy.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Get Your Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}
