import Link from "next/link";

export default function RestaurantDemoPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Demo nav – scrolls to sections */}
      <nav className="sticky top-0 z-50 border-b border-amber-200/60 bg-amber-50/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-center gap-8 px-6">
          <a href="#home" className="text-sm font-medium text-stone-700 hover:text-amber-700">
            Home
          </a>
          <a href="#menu" className="text-sm font-medium text-stone-700 hover:text-amber-700">
            Menu
          </a>
          <a href="#about" className="text-sm font-medium text-stone-700 hover:text-amber-700">
            About
          </a>
          <a href="#reservations" className="text-sm font-medium text-stone-700 hover:text-amber-700">
            Reservations
          </a>
          <a href="#contact" className="text-sm font-medium text-stone-700 hover:text-amber-700">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-b from-amber-100 to-amber-50 py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-stone-800 sm:text-5xl">Lakeside Grill</h1>
          <p className="mt-4 text-lg text-stone-600">
            Fresh, seasonal dishes in a relaxed setting. Open for lunch and dinner.
          </p>
          <a
            href="#reservations"
            className="mt-8 inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white shadow hover:bg-amber-700"
          >
            Book a Table
          </a>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-stone-800">Our Menu</h2>
          <div className="mt-8 space-y-6">
            <div className="border-b border-amber-200/60 pb-4">
              <p className="font-semibold text-stone-800">House Caesar Salad</p>
              <p className="text-sm text-stone-600">Crisp romaine, parmesan, house dressing — $12</p>
            </div>
            <div className="border-b border-amber-200/60 pb-4">
              <p className="font-semibold text-stone-800">Grilled Salmon</p>
              <p className="text-sm text-stone-600">With seasonal vegetables and herb butter — $24</p>
            </div>
            <div className="border-b border-amber-200/60 pb-4">
              <p className="font-semibold text-stone-800">Braised Short Rib</p>
              <p className="text-sm text-stone-600">Mashed potatoes, roasted carrots — $28</p>
            </div>
            <p className="mt-4 text-sm text-stone-500">Full menu available in-house.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-amber-100/50 py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-stone-800">About Us</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Lakeside Grill has been serving the community for over a decade. We focus on simple,
            high-quality ingredients and a welcoming atmosphere. Stop by for a casual meal or
            celebrate a special occasion with us.
          </p>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-16 px-6">
        <div className="mx-auto max-w-md">
          <h2 className="text-2xl font-bold text-stone-800">Reservations</h2>
          <p className="mt-2 text-stone-600">Reserve a table for lunch or dinner.</p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-stone-800"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-stone-800"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-stone-800"
            />
            <input
              type="date"
              className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-stone-800"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 py-3 font-semibold text-white hover:bg-amber-700"
            >
              Request Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Contact / Location */}
      <section id="contact" className="bg-amber-100/50 py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-stone-800">Find Us</h2>
          <p className="mt-2 text-stone-600">123 Lakefront Drive, Detroit, MI</p>
          <p className="mt-1 text-stone-600">(313) 555-0123</p>
          <p className="mt-4 text-sm text-stone-500">Hours: Mon–Sat 11am–10pm, Sun 10am–9pm</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200/60 bg-stone-800 py-8 px-6 text-center text-stone-400">
        <p className="text-sm">© Lakeside Grill. Sample demo site.</p>
        <Link
          href="/#portfolio"
          className="mt-2 inline-block text-sm text-amber-400 hover:text-amber-300"
        >
          ← Back to Mayflower Digital
        </Link>
      </footer>
    </div>
  );
}
