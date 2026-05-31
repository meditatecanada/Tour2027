import { MapPin, Music, Users } from "lucide-react";

export default function Culmination() {
  return (
    <section
      id="culmination"
      className="bg-[#004AAD] text-white py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light font-medium mb-3">
            The Journey&apos;s End
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            The Culmination
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            All four routes converge for a final celebration before journeying
            together to International Krishna Puja.
          </p>
        </div>

        {/* Two panels */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Toronto Mega Program */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-teal/30 flex items-center justify-center">
                <Music className="h-5 w-5 text-teal" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Step One
                </p>
                <p className="font-medium text-white text-sm">
                  Late Summer 2027
                </p>
              </div>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Toronto Mega Program
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              All four routes unite in Toronto for one final program — showcasing
              performances from every route&apos;s musicians, dancers, and artists.
              The combined vibrational strength of the entire tour comes together
              in a single, historic event.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-teal" />
              <span>Toronto, Ontario, Canada</span>
            </div>
          </div>

          {/* Krishna Puja */}
          <div className="rounded-2xl bg-gold/20 border border-gold/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center">
                <Users className="h-5 w-5 text-gold-light" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Step Two
                </p>
                <p className="font-medium text-white text-sm">
                  Summer 2027
                </p>
              </div>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              International Shri Krishna Puja
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              Following the Toronto Mega Program, a charter bus will be arranged
              to bring tour participants directly to Canajoharie, New York for
              International Krishna Puja — the divine conclusion to the entire
              journey.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
              <MapPin className="h-4 w-4 text-gold-light" />
              <span>Canajoharie, New York, USA</span>
            </div>

            <p className="text-xs text-white/40 italic">
              * International travel documentation required. Charter bus is
              optional and separate from the tour base fee.
            </p>
          </div>
        </div>

        {/* Divider quote */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <blockquote className="font-heading text-lg md:text-xl italic text-[#F2F4FF] max-w-2xl mx-auto">
            &ldquo;The whole atmosphere can be changed in Canada. It is very
            depressive, I think. Economically also and people are having problems.
            And they can be solved with Divinity.&rdquo;
          </blockquote>
          <p className="text-xs text-white/40 mt-4">
            H.H. Shri Mataji Nirmala Devi · October 9th, 1983 · Toronto, Canada
          </p>
        </div>
      </div>
    </section>
  );
}
