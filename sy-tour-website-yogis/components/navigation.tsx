"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Routes", href: "#routes" },
  { label: "Join", href: "#join" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / wordmark */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="flex items-center"
        >
          <Image
            src="/logo-clear.png"
            alt="Meditate Canada Tour 2027"
            height={60}
            width={200}
            priority
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm font-medium transition-colors hover:text-teal whitespace-nowrap ${
                scrolled ? "text-black" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Split button */}
          <div className="flex items-stretch rounded-full overflow-hidden shadow-sm">
            <button
              onClick={() => handleNav("#join")}
              className="bg-[#65B784] hover:bg-[#65B784]/90 text-white text-sm font-medium px-5 py-1.5 transition-colors"
            >
              Register Interest
            </button>
            <div className="w-px bg-white/40" />
            <button
              onClick={() => handleNav("#contact")}
              className="bg-[#D07474] hover:bg-[#D07474]/90 text-white text-sm font-medium px-5 py-1.5 transition-colors"
            >
              Support Tour
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={`md:hidden p-2 transition-colors cursor-pointer ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white">
            <div className="flex flex-col gap-1 mt-8">
              <div className="mb-6">
                <Image
                  src="/logo-clear.png"
                  alt="Meditate Canada Tour 2027"
                  height={60}
                  width={200}
                  className="h-16 w-auto"
                />
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 px-2 text-base font-medium text-charcoal hover:text-teal transition-colors border-b border-border"
                >
                  {link.label}
                </button>
              ))}
              {/* Mobile split button */}
              <div className="mt-6 flex items-stretch rounded-full overflow-hidden shadow-sm">
                <button
                  onClick={() => handleNav("#join")}
                  className="flex-1 bg-[#65B784] hover:bg-[#65B784]/90 text-white text-sm font-medium py-2.5 transition-colors"
                >
                  Register Interest
                </button>
                <div className="w-px bg-white/40" />
                <button
                  onClick={() => handleNav("#contact")}
                  className="flex-1 bg-[#D07474] hover:bg-[#D07474]/90 text-white text-sm font-medium py-2.5 transition-colors"
                >
                  Support Tour
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
