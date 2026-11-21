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
};

const plans: Plan[] = [
  {
    name: "Launch MVP",
    price: "$7,500",
    priceNote: "Fixed price",
    timeline: "Live in 21 days",
    description: "Up to 3 core workflows, with payments and an admin side, live in 21 days.",
    features: [
      "Up to 3 core workflows",
      "Login, database, and deploy",
      "Stripe payments",
      "Admin dashboard and emails",
      "One AI feature",
      "User and admin roles",
      "1 integration",
      "30-day fix window",
    ],
    featured: true,
  },
  {
    name: "Proof Sprint",
    price: "$3,500",
    priceNote: "Fixed price",
    timeline: "Live in 14 days",
    description: "One core workflow, live in 14 days, so you can put it in front of real users.",
    features: [
      "1 core workflow",
      "Login, database, and deploy on your domain",
      "1 user role",
      "Optional AI feature",
      "14-day fix window",
    ],
  },
  {
    name: "Launch + Grow",
    price: "$12,000",
    priceNote: "Fixed price",
    timeline: "Live in 28 days",
    description: "Up to 5 workflows, live in 28 days, plus 2 months of Growth Partner.",
    features: [
      "Up to 5 workflows",
      "Everything in Launch MVP",
      "Multiple roles",
      "2 integrations",
      "60-day fix window",
      "2 months of Growth Partner included",
    ],
  },
];

const promises = [
  "Fixed price. The price on this page is the price.",
  "You own the code. The domain and accounts are in your name.",
  "A fix window after launch: 14, 30, or 60 days, by tier.",
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
              The 21-Day <em>MVP Launch</em>
            </>
          }
          lede="A real, working first version of your product, live with real users in 21 days. Fixed price. You own the code. Launch MVP is the recommended start."
        />

        <div ref={revealRef} className="reveal-stagger grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 shadow-soft ${
                plan.featured ? "border-primary ring-1 ring-primary" : "border-border"
              } ${plan.name === "Proof Sprint" ? "lg:order-first" : ""}`}
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
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-muted-foreground">
          <span className="font-medium text-foreground">Growth Partner:</span> $2,000/month, 2-month minimum, then month
          to month. One improvement shipped every week, hosting and error monitoring, fixes within 1 business day, and a
          monthly roadmap call.
        </p>
        <p className="mt-2 text-center text-base text-muted-foreground">
          <span className="font-medium text-foreground">Not included:</span> native App Store apps, HIPAA or SOC 2
          compliance, data migration, and marketing or ads.
        </p>
        <p className="mt-2 text-center text-base text-muted-foreground">
          <span className="font-medium text-foreground">Also available:</span> websites and AI automations. Ask on the
          fit check.
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
          <BookCallButton />
          <p className="text-sm text-muted-foreground">
            50% deposit locks the start date. The balance is due on launch day. Launch + Grow is 50/25/25.
          </p>
        </div>
      </div>
    </section>
  );
}
