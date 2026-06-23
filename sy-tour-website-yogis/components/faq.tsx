"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to join the full tour or can I join part of it?",
    a: "You are welcome to join for part or the whole tour. When registering, you can indicate which route and which portion of the tour you'd like to participate in. The tour is designed with flexibility in mind for yogis from different regions.",
  },
  {
    q: "What is included in the $1,250 CAD participation fee?",
    a: "The fee covers approximately 22 days of accommodation, transportation between tour stops, and collectively prepared meals. Flights to the starting city of your route and transportation to Canajoharie for Krishna Puja are not included in the base fee.",
  },
  {
    q: "How does accommodation work on the tour?",
    a: "The primary accommodation model is local yogi hosting — yogis along the route open their homes to tour participants. Where this isn't possible, backup options include summer camps, national park lodgings, and college dorms. The goal is to keep costs low while deepening connections with local collectives.",
  },
  {
    q: "What is the plan for getting to Krishna Puja in Canajoharie?",
    a: "Following the final Toronto Mega Program, a charter bus will be arranged to transport all tour participants directly from Toronto to Canajoharie, New York. This is optional and managed separately due to international travel considerations. The tour team will coordinate with the CJ transportation team to ensure connections to departure airports.",
  },
  {
    q: "When will exact dates be confirmed?",
    a: "Dates are tentative and will be confirmed as planning progresses. The tour is planned for Summer 2027, concluding at International Shri Krishna Puja. Register your interest now to receive updates as dates are finalised.",
  },
  {
    q: "How do I join if I'm travelling internationally?",
    a: "International participants are warmly welcome! You will be responsible for arranging your own flights to the starting city of your chosen route. The team recommends registering early to allow time to plan travel. Please note that Canajoharie is in the United States — ensure your travel documentation is in order.",
  },
  {
    q: "How is the tour funded, and how can I donate?",
    a: "The tour is funded through three streams: participant contributions (~$150,000), fundraising and grants (minimum $50,000 goal), and a marketing allocation from the CNC. Donations are gratefully accepted and help subsidise costs for yogis who need financial assistance. A donation link will be available on this site shortly.",
  },
  {
    q: "What kinds of programs will the tour run?",
    a: "Each stop will include a range of programs: library talks, open booth events, festival appearances, children's and corporate meditation classes, park programs, and concert hall bookings featuring yogi musicians and dancers. All programs are booked in advance to maximise efficiency during the tour itself.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-3">
            Common Questions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-soul-stone-blue mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before registering.
          </p>
        </div>

        <Accordion className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="bg-white border border-border rounded-xl px-1 data-open:border-teal/40 transition-colors"
            >
              <AccordionTrigger className="px-5 py-4 text-left font-sans font-medium text-charcoal hover:text-teal hover:no-underline text-sm md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Still have questions?{" "}
          <a href="#contact" className="text-teal hover:underline font-medium">
            Contact the team
          </a>
        </p>
      </div>
    </section>
  );
}
