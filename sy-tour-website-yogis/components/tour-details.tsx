import { Home, Bus, UtensilsCrossed, Plane, Globe, Heart } from "lucide-react";

const details = [
  {
    icon: Home,
    title: "Accommodation",
    description:
      "Local yogi hosting is the primary accommodation model across all routes. Summer camps, national park lodgings, and college dorms serve as backup where hosting is unavailable.",
    note: "Collective hosting significantly reduces costs for all participants.",
  },
  {
    icon: Bus,
    title: "Transportation",
    description:
      "Rental vehicles with U-Haul trailers carry all luggage and equipment. Every vehicle has two experienced Class 5/G licensed drivers. Driving days rarely exceed 8 hours.",
    note: "West Coast participants have the option of a tour-subsidised flight to Toronto.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meals",
    description:
      "All meals are prepared collectively by the tour team with the help of local collectives. Budget target of $5–$10 per person per day keeps costs sustainable.",
    note: "Local collectives along the route assist with food prep and grocery subsidies.",
  },
  {
    icon: Globe,
    title: "Programs",
    description:
      "Each stop includes a range of programs: library talks, open booth events, festival appearances, children's meditation classes, park programs, and concert hall bookings.",
    note: "All programs are booked in advance to minimise admin work during the tour.",
  },
  {
    icon: Plane,
    title: "Getting to Canada",
    description:
      "International participants are responsible for arranging their own flights to the starting city of their chosen route.",
    note: "Early registration helps secure your place and plan travel in advance.",
  },
  {
    icon: Heart,
    title: "Online Support",
    description:
      "Simultaneous online follow-up classes run throughout the tour at 7 PM EST daily, allowing seekers to continue their journey in Sahaja Yoga.",
    note: "Co-ordinated alongside Sahaj.me or the 21 Days online programme.",
  },
];

export default function TourDetails() {
  return (
    <section id="details" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-3">
            What to Expect
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-soul-stone-blue mb-4">
            Tour Details
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about how the Meditate Canada Tour
            operates day to day.
          </p>
        </div>

        {/* Cost highlight banner */}
        <div className="bg-gradient-to-r from-teal-dark to-teal rounded-2xl p-8 text-white text-center mb-12">
          <p className="text-white/70 text-sm mb-2 tracking-wide">
            All-inclusive participation fee
          </p>
          <p className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">
            $1,250
            <span className="text-2xl font-normal text-white/70 ml-2">CAD</span>
          </p>
          <p className="text-white/60 text-sm">
            Per person · ~22 days · Accommodation, transport &amp; meals included
          </p>
        </div>

        {/* Detail cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-cream p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="font-heading font-bold text-lg text-soul-stone-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-muted-foreground italic border-t border-border pt-3">
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
