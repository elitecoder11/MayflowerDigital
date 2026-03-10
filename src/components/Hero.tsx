"use client";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Subtle Detroit skyline-style gradient bars */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-700 to-transparent" />
        <div className="absolute bottom-0 left-[10%] h-24 w-1 bg-slate-500 rounded-t" />
        <div className="absolute bottom-0 left-[20%] h-32 w-2 bg-slate-500 rounded-t" />
        <div className="absolute bottom-0 left-[35%] h-20 w-1 bg-slate-500 rounded-t" />
        <div className="absolute bottom-0 left-[50%] h-28 w-3 bg-slate-500 rounded-t" />
        <div className="absolute bottom-0 left-[65%] h-24 w-2 bg-slate-500 rounded-t" />
        <div className="absolute bottom-0 left-[80%] h-30 w-1 bg-slate-500 rounded-t" />
        <div className="absolute bottom-0 left-[90%] h-22 w-2 bg-slate-500 rounded-t" />
      </div>

      <div className="container relative mx-auto px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-sky-400/90 mb-4">
            Modern Digital Real Estate from the Motor City
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-sm">
            Websites That Turn Visitors Into Customers
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We design, build, and maintain websites that attract more customers and grow your business online.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get Your Free Demo Website
            </button>
            <button
              onClick={scrollToPortfolio}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View Sample Projects
            </button>
          </div>
        </div>

        {/* Placeholder for mockup: desktop + mobile frame */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-xl border border-slate-600/50 bg-slate-800/50 p-4 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg bg-white text-slate-800 overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-xs text-slate-400">yourbusiness.com</span>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="h-8 w-48 bg-slate-300 rounded mx-auto mb-3" />
                  <div className="h-3 w-64 bg-slate-200 rounded mx-auto mb-2" />
                  <div className="h-3 w-56 bg-slate-200 rounded mx-auto" />
                </div>
              </div>
            </div>
            {/* Small mobile mockup */}
            <div className="absolute -right-4 -bottom-4 w-24 rounded-xl border-2 border-slate-600 bg-slate-800 p-1.5 shadow-xl hidden lg:block">
              <div className="rounded-md bg-white aspect-[9/16] flex items-center justify-center text-slate-400 text-xs">
                Mobile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
