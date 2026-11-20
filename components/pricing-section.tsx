"use client";

import { Check, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { BookCallButton } from "@/components/book-call-button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Plan = {
  name: string;
  price: string;
  priceNote: string;
  timeline: string;
  description: string;
  features: string[];
  featured?: boolean;
  example?: string;
};

const plans: Plan[] = [
  {
    name: "Product Blueprint",
    price: "$1,500",
    priceNote: "100% credited to your build",
    timeline: "5 to 7 days",
    description: "See your idea as a clickable app before you commit to the build.",
    features: [
      "60-minute deep-dive session",
      "Written scope: users, core flow, what's in v1",
      "Clickable prototype of the key screens",
      "Fixed price and build plan",
      "Yours to keep, whoever builds it",
    ],
  },
  {
    name: "Launch Sprint: Starter",
    price: "$6,000",
    priceNote: "Fixed price",
    timeline: "3 to 4 weeks",
    description: "One core flow, built for real and live, so you can test it with users.",
    features: [
      "One core user flow, end to end",
      "Logins and accounts",
      "Designed from your approved prototype",
      "Deployed on your domain",
      "30 days of bug fixes",
    ],
  },
  {
    name: "Launch Sprint: Core",
    price: "$12,000",
    priceNote: "Fixed price",
    timeline: "6 to 8 weeks",
    description: "A launched product with an AI layer built around how you work.",
    features: [
      "Everything in Starter",
      "AI built on your method or knowledge base",
      "Admin dashboard for you",
      "Landing page and analytics to launch",
      "Weekly demo and a live preview link",
    ],
    featured: true,
    example: "Example build: Top 25 Strategy Lab",
  },
  {
    name: "Launch Sprint: Complete",
    price: "$20,000+",
    priceNote: "Fixed price, quoted from your Blueprint",
    timeline: "10 to 16 weeks",
    description: "A full platform for multiple user types, integrations and deeper AI.",
    features: [
      "Everything in Core",
      "Multiple user roles and permissions",
      "Integrations with your existing tools",
      "Advanced AI workflows and reporting",
      "60 days of post-launch support",
    ],
  },
];

const promises = [
  "Fixed price. The quote is the price, no surprise invoices.",
  "You own everything: code, domain and accounts in your name.",
  "Don't love your Blueprint prototype? Full refund.",
];

export function PricingSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="pricing" className="border-t border-border px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Clear prices. <em>No surprises.</em>
            </>
          }
          lede="Start with a Blueprint to see your idea as a clickable app. If you build with me, the fee comes off your build."
        />

        <div ref={revealRef} className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 shadow-soft ${
                plan.featured ? "border-primary ring-1 ring-primary" : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-4 font-serif text-5xl leading-none">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.priceNote}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{plan.timeline}</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 mb-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[15px]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.example && (
                <p className="mt-auto border-t border-border pt-4 text-sm text-muted-foreground">{plan.example}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-muted-foreground">
          <span className="font-medium text-foreground">After launch:</span> Care plan $300/mo (hosting, monitoring,
          small fixes) or Product Partner $1,500/mo (new features every month). Cancel anytime.
        </p>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-muted/60 p-7">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <p className="font-medium">My promises</p>
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {promises.map((promise) => (
              <li key={promise} className="text-[15px] leading-relaxed text-muted-foreground">
                {promise}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <BookCallButton label="Get your free build estimate" />
          <p className="text-sm text-muted-foreground">
            50% to start, 50% at launch. Payment plans available. I take on 2 builds at a time, so start dates fill up.
          </p>
        </div>
      </div>
    </section>
  );
}
