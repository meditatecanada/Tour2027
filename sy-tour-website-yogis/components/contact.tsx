"use client";

import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";

// TODO: Replace with actual team contacts when confirmed
const teamContacts = [
  {
    name: "Tour Team",
    role: "General Enquiries",
    email: "mediatecanada2027@gmail.com",
    // whatsapp: "+1 XXX XXX XXXX",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal-dark mb-4">
            Contact &amp; Donate
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Reach out to the tour team with any questions, or support the tour
            through a donation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact card */}
          <div className="rounded-2xl border border-border bg-cream p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-teal" />
              </div>
              <h3 className="font-heading text-xl font-bold text-teal-dark">
                Contact the Team
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              For questions about routes, participation, accommodation,
              volunteering, or any other aspect of the tour, we&apos;d love to
              hear from you.
            </p>

            <div className="space-y-4">
              {teamContacts.map((contact) => (
                <div
                  key={contact.email}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border"
                >
                  <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center shrink-0 text-white font-heading font-bold text-sm">
                    {contact.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm">
                      {contact.name}
                    </p>
                    <p className="text-xs text-muted-foreground mb-1">
                      {contact.role}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs text-teal hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a href="mailto:mediatecanada2027@gmail.com">
                <Button className="w-full bg-teal hover:bg-teal/90 text-white rounded-full">
                  Send an Email
                </Button>
              </a>
            </div>
          </div>

          {/* Donate card */}
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/5 to-transparent p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                <Heart className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-teal-dark">
                Support the Tour
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Donations help ensure all yogis who wish to participate can do so,
              and cover tour operating costs including vehicles, equipment, and
              programs for new seekers.
            </p>

            <div className="bg-white rounded-xl border border-border p-4 mb-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Fundraising goal
              </p>
              {/* Progress bar placeholder */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-teal to-teal-dark rounded-full"
                  style={{ width: "0%" }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0 raised</span>
                <span className="font-medium text-teal-dark">
                  $50,000 goal
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-[#D07474] hover:bg-[#D07474]/90 text-white rounded-full font-medium"
              onClick={() => {
                // TODO: Replace with actual donation link
                alert("Donation link coming soon! Thank you for your support.");
              }}
            >
              Donate to the Tour
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Funds managed transparently through VND Canada (non-profit)
            </p>
          </div>
        </div>

        {/* Social media */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Follow our journey</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-5 py-2 rounded-full border border-border text-sm text-charcoal hover:border-teal hover:text-teal transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="px-5 py-2 rounded-full border border-border text-sm text-charcoal hover:border-teal hover:text-teal transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
