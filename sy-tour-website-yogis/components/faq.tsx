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
    a: "You are welcome to join for part or the whole tour, however we recommend attending the whole tour. Yogis who are able to attend the complete tour will be given first priority. Then, spot dependent, we will try our best to accommodate requests for partial participation. When registering, you can indicate which route and which portion of the tour you'd like to participate in.",
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
    a: "Our goal is to create a tour which is financially feasible for all interested yogis. As such, while we are doing our best to cover our costs with participant contribution and local yogi support, donations are gratefully appreciated. Any support is humbly accepted, and will directly help subsidise costs for yogis who need financial assistance. A donation link will be available on this site shortly.",
  },
  {
    q: "I want to pre-register, but don't know what route to pick yet?",
    a: "The purpose of the pre-registration form is simply to indicate which route is grabbing your attention; your choice on the form does not bind you to a specific route. We recommend staying open to all possibilities so attendees can be vibrationally allocated to their perfect fit.",
  },
  {
    q: "I am a professional artist and would like to know how I can contribute to the tour with my craft.",
    a: (
      <>
        We are looking for artists for programs in both concert halls and the
        course programs. If you would like to contribute an art, please
        reach out to us for more details at{" "}
        <a
          href="mailto:meditate.canada@sahaja.ca"
          className="text-teal hover:underline font-medium"
        >
          meditate.canada@sahaja.ca
        </a>
      </>
    ),
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
