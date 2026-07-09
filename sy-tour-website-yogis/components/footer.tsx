import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Routes", href: "#routes" },
  { label: "Join", href: "#join" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#004AAD] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo-footer.jpeg"
              alt="Meditate Canada Tour 2027"
              height={60}
              width={220}
              className="h-32 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              A cross-Canada Sahaja Yoga realization tour.
              Four routes. One collective journey.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-light mb-4 font-medium">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-light mb-4 font-medium">
              Get in Touch
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Questions about the tour or registration?
            </p>
            <a
              href="mailto:meditate.canada@sahaja.ca"
              className="text-teal hover:text-teal/80 text-sm transition-colors"
            >
              meditate.canada@sahaja.ca
            </a>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                disabled
                aria-disabled="true"
                aria-label="Instagram"
                className="text-white/30 text-xs tracking-wide cursor-not-allowed"
              >
                Instagram
              </button>
              <button
                type="button"
                disabled
                aria-disabled="true"
                aria-label="Facebook"
                className="text-white/30 text-xs tracking-wide cursor-not-allowed"
              >
                Facebook
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
        </div>
      </div>
    </footer>
  );
}
