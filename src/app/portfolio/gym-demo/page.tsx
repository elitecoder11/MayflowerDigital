import Link from "next/link";

export default function GymDemoPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Demo nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-center gap-8 px-6">
          <a href="#home" className="text-sm font-medium text-slate-300 hover:text-emerald-400">
            Home
          </a>
          <a href="#classes" className="text-sm font-medium text-slate-300 hover:text-emerald-400">
            Classes
          </a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-emerald-400">
            About
          </a>
          <a href="#membership" className="text-sm font-medium text-slate-300 hover:text-emerald-400">
            Membership
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-emerald-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-b from-slate-800 to-slate-900 py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Iron Fit Gym</h1>
          <p className="mt-4 text-lg text-slate-300">
            Train hard. Recover smart. Join a community that pushes you to be your best.
          </p>
          <a
            href="#membership"
            className="mt-8 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-emerald-600"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white">Classes</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h3 className="font-semibold text-white">Strength</h3>
              <p className="mt-2 text-sm text-slate-400">Mon, Wed, Fri — 6am & 6pm</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h3 className="font-semibold text-white">HIIT</h3>
              <p className="mt-2 text-sm text-slate-400">Tue, Thu — 7am & 5:30pm</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h3 className="font-semibold text-white">Yoga</h3>
              <p className="mt-2 text-sm text-slate-400">Sat — 9am</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-slate-700 bg-slate-800/30 py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">About Iron Fit</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We’re a no-nonsense gym with top equipment, experienced trainers, and a supportive
            community. Whether you’re new to fitness or training for a competition, we have the
            space and programs to help you reach your goals.
          </p>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white">Membership</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-emerald-500/50 bg-slate-800/50 p-6">
              <h3 className="font-semibold text-white">Monthly</h3>
              <p className="mt-2 text-2xl font-bold text-emerald-400">$49<span className="text-base font-normal text-slate-400">/mo</span></p>
              <p className="mt-2 text-sm text-slate-400">No commitment. Cancel anytime.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h3 className="font-semibold text-white">Annual</h3>
              <p className="mt-2 text-2xl font-bold text-white">$450<span className="text-base font-normal text-slate-400">/yr</span></p>
              <p className="mt-2 text-sm text-slate-400">Save $138. Best value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-700 py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white">Visit Us</h2>
          <p className="mt-2 text-slate-300">789 Industrial Blvd, Detroit, MI</p>
          <p className="mt-1 text-slate-300">(313) 555-0789</p>
          <p className="mt-4 text-sm text-slate-500">Open 5am–11pm every day</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950 py-8 px-6 text-center text-slate-500">
        <p className="text-sm">© Iron Fit Gym. Sample demo site.</p>
        <Link
          href="/#portfolio"
          className="mt-2 inline-block text-sm text-emerald-400 hover:text-emerald-300"
        >
          ← Back to Mayflower Digital
        </Link>
      </footer>
    </div>
  );
}
