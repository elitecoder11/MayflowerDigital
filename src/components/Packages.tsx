const packages = [
  {
    name: "Starter Website",
    price: "$900 build",
    monthly: "$50/month",
    tagline: "Best for very small businesses.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "3–5 day delivery",
      "Hosting & security",
    ],
    featured: false,
  },
  {
    name: "Growth Website",
    price: "$1,500 build",
    monthly: "$75/month",
    tagline: "Best for growing businesses.",
    subline: "Includes everything in Starter plus:",
    features: [
      "8–10 pages",
      "Blog capability",
      "Google Analytics setup",
      "SEO optimization",
      "Booking / appointment forms",
      "Custom design elements",
      "Hosting & maintenance",
    ],
    featured: true,
  },
  {
    name: "Pro Website",
    price: "$2,500 build",
    monthly: "$100/month",
    tagline: "For businesses that want a high-performance site.",
    subline: "Includes everything in Growth plus:",
    features: [
      "10–15 pages",
      "Custom UI design",
      "Advanced SEO setup",
      "Booking or CRM integrations",
      "Blog + content system",
      "Speed & performance optimization",
      "Priority support",
      "Hosting & maintenance included",
    ],
    featured: false,
  },
];

const addOns = [
  {
    item: "Extra Pages",
    price: "$100 / page",
  },
  {
    item: "AI Chatbot / Automation",
    price: "$500 – $1,500 setup · $50 – $150 / month",
    examples: "Lead capture bots, appointment scheduling, FAQ customer support",
  },
  {
    item: "SEO & Marketing",
    price: "$300 – $500 / month",
    includes: "Keyword targeting, Google ranking optimization, ongoing content updates, performance tracking",
  },
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

        <div className="max-w-2xl mx-auto mb-14 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm font-medium text-slate-600 mb-1">Typical Website Agencies Charge</p>
          <p className="text-slate-500 line-through">Typical agency: $3,000–$10,000</p>
          <p className="text-slate-900 font-bold text-lg mt-1">Mayflower Digital: $900–$2,500</p>
        </div>

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
              <p className="mt-0.5 text-sm font-medium text-slate-600">+ {pkg.monthly}</p>
              {pkg.tagline && (
                <p className="mt-1 text-sm text-slate-600">{pkg.tagline}</p>
              )}
              {"subline" in pkg && pkg.subline && (
                <p className="mt-2 text-xs font-medium text-slate-500">{pkg.subline}</p>
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
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
            Optional Add-Ons
          </h3>
          <p className="text-sm text-slate-600 mb-4">High-margin services to grow with you.</p>
          <div className="space-y-4">
            {addOns.map((add) => (
              <div
                key={add.item}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="font-medium text-slate-900">{add.item}</span>
                  <span className="text-sm font-semibold text-slate-800 shrink-0">{add.price}</span>
                </div>
                {"examples" in add && add.examples && (
                  <p className="mt-2 text-xs text-slate-600">Examples: {add.examples}</p>
                )}
                {"includes" in add && add.includes && (
                  <p className="mt-2 text-xs text-slate-600">Includes: {add.includes}</p>
                )}
              </div>
            ))}
          </div>
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
