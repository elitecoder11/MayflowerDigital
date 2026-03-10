import Link from "next/link";

export default function DentistDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Demo nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-center gap-8 px-6">
          <a href="#home" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            About
          </a>
          <a href="#appointments" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            Appointments
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-b from-sky-50 to-slate-50 py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-800 sm:text-5xl">Riverside Dental</h1>
          <p className="mt-4 text-lg text-slate-600">
            Gentle, modern care for the whole family. Your smile is our priority.
          </p>
          <a
            href="#appointments"
            className="mt-8 inline-block rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow hover:bg-sky-700"
          >
            Request an Appointment
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-800">Our Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-800">Cleanings & Checkups</h3>
              <p className="mt-2 text-sm text-slate-600">
                Regular cleanings and exams to keep your teeth and gums healthy.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-800">Fillings & Restorations</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tooth-colored fillings and restorations that look natural.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-800">Cosmetic Dentistry</h3>
              <p className="mt-2 text-sm text-slate-600">
                Whitening, veneers, and smile makeovers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-800">Emergency Care</h3>
              <p className="mt-2 text-sm text-slate-600">
                Same-day appointments for urgent dental needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-sky-50/50 py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-800">About Our Practice</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Riverside Dental has been caring for families in the community for over 20 years. We use
            the latest technology and techniques in a comfortable, welcoming environment. Our team
            is committed to helping you achieve and maintain a healthy smile for life.
          </p>
        </div>
      </section>

      {/* Appointments */}
      <section id="appointments" className="py-16 px-6">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl font-bold text-slate-800">Request an Appointment</h2>
          <p className="mt-2 text-slate-600">We’ll call you to confirm your visit.</p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-800"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-800"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-800"
            />
            <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-800">
              <option>New patient exam</option>
              <option>Cleaning</option>
              <option>Follow-up</option>
              <option>Other</option>
            </select>
            <button
              type="submit"
              className="w-full rounded-lg bg-sky-600 py-3 font-semibold text-white hover:bg-sky-700"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-sky-50/50 py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
          <p className="mt-2 text-slate-600">456 River Road, Detroit, MI</p>
          <p className="mt-1 text-slate-600">(313) 555-0456</p>
          <p className="mt-4 text-sm text-slate-500">
            Mon–Thu 8am–6pm, Fri 8am–4pm, Sat 9am–1pm
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-800 py-8 px-6 text-center text-slate-400">
        <p className="text-sm">© Riverside Dental. Sample demo site.</p>
        <Link
          href="/#portfolio"
          className="mt-2 inline-block text-sm text-sky-400 hover:text-sky-300"
        >
          ← Back to Mayflower Digital
        </Link>
      </footer>
    </div>
  );
}
