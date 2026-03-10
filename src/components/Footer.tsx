export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Mayflower Digital builds modern websites and digital solutions for Detroit-area businesses. We handle design, development, hosting, and ongoing support so you can focus on running your business.
          </p>
          <p className="font-display font-semibold text-sky-400 mb-6">
            Modern Digital Real Estate from the Motor City
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
          <div className="pt-6 border-t border-slate-700 text-sm text-slate-500">
            <a href="/privacy" className="hover:text-slate-400">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-slate-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
