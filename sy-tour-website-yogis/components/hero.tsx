import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85"
        alt="Bow Lake, Banff National Park, Alberta, Canada"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — heavier at bottom for text, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/75" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="text-sm tracking-[0.3em] uppercase text-gold-light font-medium mb-6 opacity-90">
          Jai Shri Mataji
        </p>

        {/* Main title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
          Meditate
          <br />
          Canada
        </h1>

        {/* Year badge */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-gold-light/60" />
          <span className="text-gold-light text-xl font-heading font-semibold tracking-wider">
            2027
          </span>
          <span className="h-px w-12 bg-gold-light/60" />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/85 font-sans font-light mb-4 max-w-2xl mx-auto leading-relaxed">
          A cross-Canada Sahaja Yoga realization tour
        </p>

        <p className="text-sm sm:text-base text-white/70 mb-10 tracking-wide">
          Summer 2027 &nbsp;·&nbsp; Four Routes &nbsp;·&nbsp; Culminating at Krishna Puja, Canajoharie
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#routes">
            <Button
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg"
            >
              Explore the Routes
            </Button>
          </a>
          <a href="#join">
            <Button
              size="lg"
              className="bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg"
            >
              Register Interest
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
