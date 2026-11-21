"use client";

import { Check, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { BookCallButton } from "@/components/book-call-button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Plan = {
  name: string;
  price: string;
  timeline: string;
  description: string;
  includes?: string;
  features: string[];
  example: string;
  featured?: boolean;
};

// Listed in desktop order. The featured plan moves first on phones and spans the
// full row on tablets, so the remaining two cards sit side by side below it.
const plans: Plan[] = [
  {
    name: "Proof Sprint",
    price: "$3,500",
    timeline: "Live in 14 days",
    description: "One core workflow, so you can put it in front of real users.",
    features: [
      "1 core workflow",
      "Login, database, and deploy on your domain",
      "1 user role",
      "Optional AI feature",
      "14 days of fixes included",
    ],
    example: "Pet Meets Owner",
  },
  {
    name: "Launch MVP",
    price: "$7,500",
    timeline: "Live in 21 days",
    description: "Up to 3 core workflows, with payments and an admin side.",
    features: [
      "Up to 3 core workflows",
      "Login, database, and deploy on your domain",
      "Stripe payments",
      "Admin dashboard and emails",
      "One AI feature",
      "User and admin roles",
      "1 integration",
      "30 days of fixes included",
    ],
    example: "Top 25 Strategy Lab",
    featured: true,
  },
  {
    name: "Launch + Grow",
    price: "$12,000",
    timeline: "Live in 28 days",
    description: "Up to 5 workflows, plus 2 months of Growth Partner to keep improving it.",
    includes: "Everything in Launch MVP, plus:",
    features: [
      "Up to 5 core workflows",
      "Multiple user roles",
      "2 integrations",
      "60 days of fixes included",
      "2 months of Growth Partner included",
    ],
    example: "Torchline AI",
  },
];

const promises = [
  "Fixed price. The price on this page is the price.",
  "You own the code. The domain and accounts are in your name.",
  "Live on the promised day, or your next month of Growth Partner is free.",
];

const notes = [
  {
    label: "What's a workflow?",
    text: "One thing your users do from start to finish, like sign up, book a session, and pay.",
  },
  {
    label: "After launch:",
    text: "Growth Partner, $2,000/month with a 2-month minimum. One improvement shipped every week, hosting and error monitoring, fixes within 1 business day, and a monthly roadmap call. Or Care, $300/month for hosting, monitoring, and small fixes.",
  },
  {
    label: "Not included:",
    text: "native App Store apps, HIPAA or SOC 2 compliance, data migration, and marketing or ads.",
  },
  {
    label: "Also available:",
    text: "websites and AI automations. Ask on the fit check.",
  },
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
          lede="A real, working first version of your product, live with real users in 21 days. Fixed price. You own the code."
        />

        <div ref={revealRef} className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 shadow-soft ${
                plan.featured
                  ? "order-first border-primary ring-1 ring-primary sm:col-span-2 lg:order-none lg:col-span-1"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-4 font-serif text-5xl leading-none">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">Fixed price</p>
              <p className="mt-1 text-sm font-medium text-foreground">{plan.timeline}</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{plan.description}</p>
              {plan.includes && <p className="mt-6 text-[15px] font-medium">{plan.includes}</p>}
              <ul className={`${plan.includes ? "mt-3" : "mt-6"} mb-6 space-y-2.5`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[15px]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-border pt-4 text-sm text-muted-foreground">
                Example build: <span className="text-foreground">{plan.example}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-2">
          {notes.map((note) => (
            <p key={note.label} className="text-center text-base text-muted-foreground">
              <span className="font-medium text-foreground">{note.label}</span> {note.text}
            </p>
          ))}
        </div>

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
          <p className="text-sm text-muted-foreground">50% to start, 50% on launch day.</p>
        </div>
      </div>
    </section>
  );
}
