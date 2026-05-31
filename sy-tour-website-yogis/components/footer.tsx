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
              src="/logo-clear.png"
              alt="Meditate Canada Tour 2027"
              height={60}
              width={200}
              className="h-16 w-auto mb-4"
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
              href="mailto:mediatecanada2027@gmail.com"
              className="text-teal hover:text-teal/80 text-sm transition-colors"
            >
              {/* TODO: Replace with actual team email */}
              mediatecanada2027@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-white/50 hover:text-white text-xs tracking-wide transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white text-xs tracking-wide transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl italic text-gold-light">
            Jai Shri Mataji 🙏
          </p>
          <p className="text-white/40 text-sm">
            © 2027 Meditate Canada Tour Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
