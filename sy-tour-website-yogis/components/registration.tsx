"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, ShieldCheck, CreditCard, Send, Lock } from "lucide-react";

// TODO: Replace with actual Google Form URL when created
const GOOGLE_FORM_URL = "";

export default function Registration() {
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"etransfer" | "card">("etransfer");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success">("idle");

  const handleCopy = () => {
    navigator.clipboard.writeText("mediatecanada2027@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMockPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardExpiry || !cardCvc) return;
    
    setPaymentStatus("processing");
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2000);
  };

  const resetMockPay = () => {
    setCardName("");
    setCardNumber("");
    setCardExpiry("");
    setCardCvc("");
    setPaymentStatus("idle");
  };

  return (
    <section id="join" className="bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Card A: Registration Status */}
            <div className="rounded-2xl border-2 border-dashed border-teal/30 bg-white p-8 md:p-10 text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-teal-dark mb-3">
                  Registration Opening Soon
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  The registration form will be available here once the tour is
                  officially announced. Stay connected with your local collective
                  for updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-auto">
                <Button
                  size="default"
                  className="bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full px-6 py-2 text-sm"
                  onClick={() =>
                    window.open("mailto:mediatecanada2027@gmail.com", "_blank")
                  }
                >
                  Express Interest by Email
                </Button>
                <a href="#contact" className="inline-block">
                  <Button
                    size="default"
                    variant="outline"
                    className="rounded-full px-6 py-2 text-sm border-[#65B784] text-[#65B784] hover:bg-[#65B784]/5 w-full"
                  >
                    Contact the Team
                  </Button>
                </a>
              </div>
            </div>

            {/* Card B: Integrated Payment Selector */}
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 text-center flex flex-col justify-between shadow-sm transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-teal-dark mb-2">
                  Tour Contribution
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  Contribute your participation fee securely. Select your preferred method below to view details.
                </p>
                
                {/* Method selector tabs */}
                <div className="grid grid-cols-2 gap-2 bg-cream p-1 rounded-xl mb-6 border border-teal/10">
                  <button
                    onClick={() => setPaymentMethod("etransfer")}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                      paymentMethod === "etransfer"
                        ? "bg-[#65B784] text-white shadow-sm"
                        : "text-muted-foreground hover:text-teal-dark"
                    }`}
                  >
                    <Send className="h-3 w-3" />
                    e-Transfer
                  </button>
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                      paymentMethod === "card"
                        ? "bg-[#65B784] text-white shadow-sm"
                        : "text-muted-foreground hover:text-teal-dark"
                    }`}
                  >
                    <CreditCard className="h-3 w-3" />
                    Credit Card
                  </button>
                </div>

                {/* Tab content area with smooth height transition placeholder */}
                <div className="transition-all duration-300 overflow-hidden text-left">
                  {paymentMethod === "etransfer" ? (
                    <div className="space-y-4 animate-fadeIn">
                      <p className="text-muted-foreground text-xs leading-relaxed text-center">
                        Support the tour directly with <strong>0% admin fees</strong>. 100% of your e-Transfer funds go straight to hosting costs.
                      </p>
                      
                      {/* Details box */}
                      <div className="bg-cream/60 rounded-xl p-4 text-left border border-teal/10 space-y-2">
                        <div className="flex justify-between items-center text-xs pb-2 border-b border-teal/10">
                          <span className="text-muted-foreground">Recipient Email</span>
                          <span className="font-mono font-bold text-teal-dark">mediatecanada2027@gmail.com</span>
                        </div>
                        <div className="flex justify-between items-center text-xs py-1 border-b border-teal/10">
                          <span className="text-muted-foreground">Amount</span>
                          <span className="font-bold text-teal-dark">$1,250 CAD</span>
                        </div>
                        <div className="text-xs pt-1">
                          <span className="text-muted-foreground block mb-1">Transfer Memo / Notes:</span>
                          <span className="text-teal-dark italic font-medium block">
                            Include your full name and &quot;Tour 2027&quot;
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fadeIn">
                      {paymentStatus === "idle" && (
                        <>
                          <p className="text-muted-foreground text-xs leading-relaxed text-center">
                            Pay securely online using credit card, Apple Pay, or Google Pay (processed via Stripe/Helcim).
                          </p>
                          
                          {/* High-fidelity Mock Payment Form */}
                          <form onSubmit={handleMockPay} className="space-y-2.5">
                            <input
                              type="text"
                              required
                              placeholder="Name on Card"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value)}
                              className="w-full bg-cream/40 border border-teal/10 rounded-lg p-2.5 text-xs text-teal-dark focus:outline-none focus:ring-1 focus:ring-teal/30 placeholder:text-muted-foreground/60"
                            />
                            <input
                              type="text"
                              required
                              maxLength={19}
                              placeholder="Card Number (•••• •••• •••• ••••)"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              className="w-full bg-cream/40 border border-teal/10 rounded-lg p-2.5 text-xs text-teal-dark focus:outline-none focus:ring-1 focus:ring-teal/30 placeholder:text-muted-foreground/60"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                required
                                maxLength={5}
                                placeholder="MM/YY"
                                value={cardExpiry}
                                onChange={(e) => setCardExpiry(e.target.value)}
                                className="bg-cream/40 border border-teal/10 rounded-lg p-2.5 text-xs text-teal-dark focus:outline-none focus:ring-1 focus:ring-teal/30 placeholder:text-muted-foreground/60"
                              />
                              <input
                                type="password"
                                required
                                maxLength={4}
                                placeholder="CVC"
                                value={cardCvc}
                                onChange={(e) => setCardCvc(e.target.value)}
                                className="bg-cream/40 border border-teal/10 rounded-lg p-2.5 text-xs text-teal-dark focus:outline-none focus:ring-1 focus:ring-teal/30 placeholder:text-muted-foreground/60"
                              />
                            </div>
                            
                            <Button
                              type="submit"
                              className="w-full bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full py-2.5 text-xs flex items-center justify-center gap-1.5 mt-2"
                            >
                              <Lock className="h-3 w-3" />
                              Pay $1,250 CAD Securely
                            </Button>
                          </form>
                        </>
                      )}

                      {paymentStatus === "processing" && (
                        <div className="py-8 text-center space-y-3">
                          <div className="w-8 h-8 border-2 border-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
                          <p className="text-xs text-teal-dark font-medium">Connecting to secure gateway...</p>
                        </div>
                      )}

                      {paymentStatus === "success" && (
                        <div className="py-6 text-center space-y-4 animate-scaleUp">
                          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                            <Check className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-dark text-sm mb-1">Payment Verified Successfully</h4>
                            <p className="text-muted-foreground text-xs max-w-[240px] mx-auto leading-relaxed">
                              Thank you! Your simulated $1,250 CAD payment has been registered.
                            </p>
                          </div>
                          <button
                            onClick={resetMockPay}
                            className="text-xs text-teal hover:underline font-medium block mx-auto"
                          >
                            Reset Form / Try Again
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Action button for Interac e-Transfer (static footer matching the height of Card A) */}
              {paymentMethod === "etransfer" && (
                <div className="mt-6">
                  <Button
                    onClick={handleCopy}
                    className="w-full bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full py-3 flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Email Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy e-Transfer Email
                      </>
                    )}
                  </Button>
                </div>
              )}
              
              {/* Trust/security footer for credit card */}
              {paymentMethod === "card" && paymentStatus === "idle" && (
                <div className="mt-4 flex items-center justify-center gap-1.5 text-muted-foreground text-[10px]">
                  <Lock className="h-3 w-3 text-teal" />
                  <span>🔒 SSL encrypted · Payments processed via Stripe/Helcim</span>
                </div>
              )}
            </div>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground mt-8">
          Questions?{" "}
          <a href="#contact" className="text-teal hover:underline">
            Contact the team ↓
          </a>
        </p>
      </div>
    </section>
  );
}


