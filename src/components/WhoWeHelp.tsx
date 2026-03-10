const industries = [
  "Restaurants",
  "Contractors",
  "Gyms",
  "Medical offices",
  "Local service businesses",
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
          Who We Help
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
          We specialize in websites for:
        </p>
        <ul className="max-w-xl mx-auto grid gap-3 sm:grid-cols-2">
          {industries.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-slate-700"
            >
              <span className="text-sky-500">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-500 max-w-xl mx-auto">
          Businesses trust specialists more than generalists.
        </p>
      </div>
    </section>
  );
}
