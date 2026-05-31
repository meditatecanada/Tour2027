"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// TODO: Replace with actual Google Form URL when created
const GOOGLE_FORM_URL = "";

export default function Registration() {
  return (
    <section id="join" className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-3">
            Participate
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal-dark mb-4">
            Join the Tour
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Register your interest for Meditate Canada 2027. All yogis are
            welcome. You may join for part or the whole tour.
          </p>
        </div>

        {/* Cost highlight */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { label: "Participation Fee", value: "$1,250 CAD", note: "per person, ~22 days" },
            { label: "Includes", value: "Accommodation, Transport & Meals", note: "collective hosting prioritised" },
            { label: "Flexibility", value: "Join Part or All", note: "choose your route & dates" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-white rounded-xl px-6 py-5 shadow-sm border border-border min-w-[180px]"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {item.label}
              </p>
              <p className="font-heading font-bold text-teal-dark text-lg leading-tight">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Form area */}
        {GOOGLE_FORM_URL ? (
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
            <iframe
              src={GOOGLE_FORM_URL}
              className="w-full"
              style={{ height: "700px", border: "none" }}
              title="Meditate Canada 2027 — Registration Form"
              loading="lazy"
            />
          </div>
        ) : (
          /* Placeholder when no form URL is set yet */
          <div className="rounded-2xl border-2 border-dashed border-teal/30 bg-white p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="h-7 w-7 text-teal" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-teal-dark mb-3">
              Registration Opening Soon
            </h3>
            <p className="text-muted-foreground max-w-sm mx-auto mb-8 leading-relaxed">
              The registration form will be available here once the tour is
              officially announced. Stay connected with your local collective
              for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full px-8"
                onClick={() =>
                  window.open("mailto:mediatecanada2027@gmail.com", "_blank")
                }
              >
                Express Interest by Email
              </Button>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-teal text-teal hover:bg-teal/5"
                >
                  Contact the Team
                </Button>
              </a>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground mt-6">
          Questions?{" "}
          <a href="#contact" className="text-teal hover:underline">
            Contact the team ↓
          </a>
        </p>
      </div>
    </section>
  );
}
