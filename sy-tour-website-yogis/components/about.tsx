import { quotes } from "@/lib/routes-data";

export default function About() {
  const [primary, secondary] = quotes;

  return (
    <section id="about" className="bg-cream">
      {/* Main about content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: quote */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-6">
              In Our Mother&apos;s Words
            </p>
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-7xl font-heading text-teal/20 leading-none select-none">
                &ldquo;
              </span>
              <p className="font-quote text-xl md:text-2xl leading-relaxed text-[#6D9F64] italic pl-4 relative z-10">
                {primary.text}
              </p>
              <footer className="mt-6 pl-4">
                <p className="text-sm font-medium text-teal-dark">
                  {primary.attribution}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {primary.date} · {primary.location}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Right: vision */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6">
              About the Tour
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-teal-dark leading-tight mb-6">
              Vibrating Canada — from Sea to Sea
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Driven by a desire to bring Sahaja Yoga to seekers across Canada, the
                Meditate Canada Tour team is humbly offering this tour to the lotus feet
                of H.H. Shri Mataji Nirmala Devi.
              </p>
              <p>
                With Her blessings, we aim to spread vibrations, truth, and joy across
                the country — building on the momentum of the Realiza Brazil and Europe
                Tours to unite yogis around the world.
              </p>
              <p>
                Four simultaneous routes will travel across all regions of Canada in
                Summer 2027, giving Self Realization to new seekers, supporting existing
                collectives, and strengthening Sahaj culture from coast to coast.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {[
                { value: "4", label: "Routes" },
                { value: "~22", label: "Days" },
                { value: "120+", label: "Yogis" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-teal">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width pull quote */}
      <div className="bg-[#004AAD] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-5xl font-heading text-gold/30 leading-none select-none">
            &ldquo;
          </span>
          <blockquote className="font-quote text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#F2F4FF] italic -mt-4">
            {secondary.text}
          </blockquote>
          <footer className="mt-6">
            <p className="text-sm font-medium text-gold-light">
              {secondary.attribution}
            </p>
            <p className="text-xs text-white/50 mt-1">
              {secondary.date} · {secondary.location}
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
