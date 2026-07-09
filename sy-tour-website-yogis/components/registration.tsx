"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, ShieldCheck, CreditCard, Send, Lock } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdxKcysYnhWQrFXIXhzpQOsLAZgRBvk_944Y-HlBXnM2Jekkw/viewform";

export default function Registration() {
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"etransfer" | "card">("etransfer");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "cancelled" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") {
      setPaymentStatus("success");
      setPaymentMethod("card");
    } else if (payment === "cancelled") {
      setPaymentStatus("cancelled");
      setPaymentMethod("card");
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("XXX@XXX.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStripePay = async () => {
    setPaymentStatus("processing");
    setErrorMessage("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Could not retrieve payment session URL.");
      }
    } catch (err: any) {
      console.error(err);
      setPaymentStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const resetPayStatus = () => {
    setPaymentStatus("idle");
    setErrorMessage("");
    if (typeof window !== "undefined") {
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
    }
  };

  return (
    <section id="join" className="bg-cream py-20 md:py-28 relative overflow-hidden">
      {/* Mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/mandala.png"
          alt=""
          aria-hidden="true"
          className="w-[850px] h-[850px] object-contain opacity-[0.18] mix-blend-mode-multiply"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-teal font-medium mb-3">
            Participate
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-soul-stone-blue mb-4">
            Join the Tour
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Register your interest for Meditate Canada 2027. All yogis are
            welcome. You may join for part or the whole tour.
          </p>
        </div>

        {/* Cost highlight */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Participation Fee card with two tiers */}
          <div className="text-center bg-white rounded-xl px-6 py-5 shadow-sm border border-border min-w-[180px] flex flex-col items-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Participation Fee
            </p>
            <div className="flex flex-col gap-1">
              <div>
                <p className="font-heading font-bold text-soul-stone-blue text-lg leading-tight">$1,250 CAD</p>
                <p className="text-xs text-muted-foreground">Regular</p>
              </div>
              <div>
                <p className="font-heading font-bold text-soul-stone-blue text-lg leading-tight">$900 CAD</p>
                <p className="text-xs text-muted-foreground">Subsidized</p>
              </div>
            </div>
          </div>

          {[
            { label: "Includes", value: "Accommodation, Transport & Meals", note: "Collective Hosting Prioritised" },
            { label: "Flexibility", value: "Choose Your Experience", note: "Four Unique Routes" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-white rounded-xl px-6 py-5 shadow-sm border border-border min-w-[180px] flex flex-col items-center"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {item.label}
              </p>
              <div className="flex-1 flex flex-col items-center justify-center">
                <p className="font-heading font-bold text-soul-stone-blue text-lg leading-tight">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card A: Registration */}
          <div className="rounded-2xl border-2 border-dashed border-teal/30 bg-white p-8 md:p-10 text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="h-6 w-6 text-teal" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-soul-stone-blue mb-3">
                Pre-Registration Open
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The pre-registration form is available here for the 2027 tour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-auto">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button
                  size="default"
                  className="bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full px-6 py-2 text-sm w-full"
                >
                  Register Interest
                </Button>
              </a>
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
              <h3 className="font-heading text-2xl font-bold text-soul-stone-blue mb-2">
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
                      : "text-muted-foreground hover:text-soul-stone-blue"
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
                      : "text-muted-foreground hover:text-soul-stone-blue"
                  }`}
                >
                  <CreditCard className="h-3 w-3" />
                  Credit Card / Online
                </button>
              </div>

              <div className="transition-all duration-300 overflow-hidden text-left">
                {paymentMethod === "etransfer" ? (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-muted-foreground text-xs leading-relaxed text-center">
                      Support the tour directly with <strong>0% admin fees</strong>. 100% of your e-Transfer funds go straight to hosting costs.
                    </p>
                    <div className="bg-cream/60 rounded-xl p-4 text-left border border-teal/10 space-y-2">
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-teal/10">
                        <span className="text-muted-foreground">Recipient Email</span>
                        <span className="font-mono font-bold text-soul-stone-blue">XXX@XXX.com</span>
                      </div>
                      <div className="flex justify-between items-center text-xs py-1 border-b border-teal/10">
                        <span className="text-muted-foreground">Amount</span>
                        <span className="font-bold text-soul-stone-blue">$1,250 CAD</span>
                      </div>
                      <div className="text-xs pt-1">
                        <span className="text-muted-foreground block mb-1">Transfer Memo / Notes:</span>
                        <span className="text-soul-stone-blue italic font-medium block">
                          Include your full name and &quot;Tour 2027&quot;
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    {(paymentStatus === "idle" || paymentStatus === "error") && (
                      <>
                        <p className="text-muted-foreground text-xs leading-relaxed text-center">
                          Pay securely online using credit card, Apple Pay, or Google Pay (processed via Stripe).
                        </p>
                        <div className="bg-cream/40 border border-teal/10 rounded-xl p-5 space-y-3.5 text-center">
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            You will be redirected to Stripe&apos;s secure checkout page to complete your contribution using:
                          </p>
                          <div className="flex flex-wrap justify-center gap-2.5 py-1 text-soul-stone-blue font-semibold text-[11px]">
                            <span className="bg-white px-2.5 py-1 rounded-md border border-teal/10 shadow-sm">💳 Credit / Debit</span>
                            <span className="bg-white px-2.5 py-1 rounded-md border border-teal/10 shadow-sm"> Apple Pay</span>
                            <span className="bg-white px-2.5 py-1 rounded-md border border-teal/10 shadow-sm">🤖 Google Pay</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground/80 leading-relaxed">
                            * Canadian residents can pay using co-branded debit cards (Interac/Visa or Interac/Mastercard) via Apple Pay, Google Pay, or direct card entry.
                          </p>
                        </div>

                        {paymentStatus === "error" && (
                          <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs text-center font-medium border border-red-200">
                            {errorMessage || "An error occurred. Please try again."}
                          </div>
                        )}

                        <div className="text-center text-xs text-amber-700 bg-amber-50 border border-amber-200/60 rounded-lg py-2 px-3 font-medium">
                          Note: This feature is Under Work in Progress
                        </div>

                        {/* To enable the payment button, set the disabled prop to false (disabled={false}) */}
                        <Button
                          disabled={true}
                          onClick={handleStripePay}
                          className="w-full bg-[#65B784] hover:bg-[#65B784]/90 text-white rounded-full py-2.5 text-xs flex items-center justify-center gap-1.5 mt-2"
                        >
                          <Lock className="h-3 w-3" />
                          Pay $1,250 CAD Securely
                        </Button>
                      </>
                    )}

                    {paymentStatus === "processing" && (
                      <div className="py-8 text-center space-y-3 animate-fadeIn">
                        <div className="w-8 h-8 border-2 border-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-xs text-soul-stone-blue font-medium">Connecting to Stripe secure gateway...</p>
                      </div>
                    )}

                    {paymentStatus === "success" && (
                      <div className="py-6 text-center space-y-4 animate-scaleUp">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                          <Check className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-soul-stone-blue text-sm mb-1">Payment Received Successfully</h4>
                          <p className="text-muted-foreground text-xs max-w-[240px] mx-auto leading-relaxed">
                            Thank you! Your contribution of $1,250 CAD has been processed successfully.
                          </p>
                        </div>
                        <button
                          onClick={resetPayStatus}
                          className="text-xs text-teal hover:underline font-medium block mx-auto animate-pulse"
                        >
                          Return to Form
                        </button>
                      </div>
                    )}

                    {paymentStatus === "cancelled" && (
                      <div className="py-6 text-center space-y-4 animate-scaleUp">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600">
                          <span className="text-lg font-bold">!</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-soul-stone-blue text-sm mb-1">Payment Cancelled</h4>
                          <p className="text-muted-foreground text-xs max-w-[240px] mx-auto leading-relaxed">
                            Your payment session was cancelled. No charges were made. You can try again or use Interac e-Transfer.
                          </p>
                        </div>
                        <button
                          onClick={resetPayStatus}
                          className="text-xs text-teal hover:underline font-medium block mx-auto"
                        >
                          Reset / Try Again
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {paymentMethod === "etransfer" && (
              <div className="mt-6 space-y-3">
                <div className="text-center text-xs text-amber-700 bg-amber-50 border border-amber-200/60 rounded-lg py-2 px-3 font-medium animate-fadeIn">
                  Note: This feature is Under Work in Progress
                </div>

                {/* To enable the e-Transfer button, set the disabled prop to false (disabled={false}) */}
                <Button
                  disabled={true}
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

            {paymentMethod === "card" && (paymentStatus === "idle" || paymentStatus === "error") && (
              <div className="mt-4 flex items-center justify-center gap-1.5 text-muted-foreground text-[10px]">
                <Lock className="h-3 w-3 text-teal" />
                <span>🔒 SSL encrypted · Payments processed via Stripe</span>
              </div>
            )}
          </div>
        </div>

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
