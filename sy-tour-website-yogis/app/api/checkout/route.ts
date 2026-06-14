import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    // Check if the secret key is configured.
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("Missing STRIPE_SECRET_KEY environment variable.");
      return NextResponse.json(
        { error: "Stripe is not fully configured on the server. Please check environment variables." },
        { status: 500 }
      );
    }

    // Initialize Stripe using the secret key.
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const requestHeaders = new Headers(request.headers);
    const origin = requestHeaders.get("origin") || "http://localhost:3000";

    // Create a Checkout Session.
    // By omitting payment_method_types, we let Stripe use the payment methods
    // configured in the Stripe Dashboard (e.g. Card, Apple Pay, Google Pay, ACSS Debit, etc.).
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: "Meditate Canada Tour 2027 - Participation Fee",
              description: "Contribution for accommodation, transport, and meals.",
            },
            unit_amount: 125000, // $1,250.00 CAD (in cents)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/?payment=success#join`,
      cancel_url: `${origin}/?payment=cancelled#join`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a session URL");
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
